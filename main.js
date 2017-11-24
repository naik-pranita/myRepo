var OAuth2 = require('oauth').OAuth2,
Facebook = require('facebook-node-sdk'),
http = require('http'),
https = require('https'),
flickr = require('fickr');
module.exports=function(config){
obj={}
obj.getFeeds=function(){
    var feeds={}
    if(config.twitter){
        var oauth2 = new OAuth2(config.twitter.clientId, config.twitter.clientSecret, 'https://api.twitter.com/', null, 'oauth2/token', null);
        var twitterRequestOptions;
        oauth2.getOAuthAccessToken('', {'grant_type': 'client_credentials' }, function (e, access_token) {
            twitterRequestOptions = {
                hostname: 'api.twitter.com',
                path: config.twitter.path,
                headers: {
                    Authorization: 'Bearer ' + access_token
                }
            };
            https.get(twitterRequestOptions, function(result){
                var buffer='';
                result.setEncoding('utf8');
                result.on('data', function(data){
                    buffer += data;
                });
                result.on('end', function(){
                    try{
                        feeds.twitter = JSON.parse(buffer);
                    }catch(err){
                        feeds.twitter=err;
                    }
                });
            });
        });
    }
    if(config.facebook){
        var facebook = new Facebook({ appID: config.facebook.appId, secret: config.facebook.secret }).setAccessToken(config.facebook.accessToken);
        facebook.api(config.facebook.path, function(err, data) {
            feeds.facebook=data || feeds.facebook;
        });
    }
    if(config.flickr){
        flickr.init(
            config.flickr.consumerKey,
            config.flickr.consumerSecret,
            config.flickr.userId,
            config.flickr.userKey,
            config.flickr.userSecret
        );
        flickr.search(function(data){
            try{
                feeds.flickr=JSON.parse(data);
            }catch(err){
                feeds.flickr=err;
            }
        },{"extras":'date_upload,date_taken,owner_name,icon_server,original_format,last_update,geo,tags,machine_tags,o_dims,views,media,path_alias,url_sq,url_t,url_s,url_q,url_m,url_n,url_z,url_c,url_l,url_o'});
    }
    if(config.youtube){
        youtubeRequestOptions = {
            hostname: 'gdata.youtube.com',
            path: config.youtube.url,
        };
        http.get(youtubeRequestOptions, function(result){
            var buffer='';
            result.setEncoding('utf8');
            result.on('data', function(data){
                buffer += data;
            });
            result.on('end', function(){
                feeds.youtube = JSON.parse(buffer);
            });
        });
    }
    if(config.blog){
        blogRequestOptions = {
            hostname: config.blog.host,
            path: config.blog.path
        };
        http.get(blogRequestOptions, function(result){
            var buffer='';
            result.setEncoding('utf8');
            result.on('data', function(data){
                buffer += data;
            });
            result.on('end', function(){
                try{
                    feeds.blog = JSON.parse(buffer);
                }catch(err){
                    feeds.blog = err;
                }
            });
        });
    }
    return feeds;
}
return obj;
}

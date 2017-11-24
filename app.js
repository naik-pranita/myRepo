var express = require('express');



var config = {
    facebook:{
        appId:'1968957693327641',
        secret:'a1118cdbcc734d07883527271064b053',
        path:'/rishabhsinghal1987@yahoo.com/likes',
        accessToken:'1968957693327641|ZicHAsMOI9Om2VkmIu-3PNvOfrM'
    }
}
var main = require('social-feed')(config);

var app = express();
app.get('/', function (req, res) {
    console.log(main.getFeeds());
  res.send('Hello World!');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


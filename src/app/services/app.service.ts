import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {

    private userInfo = {
        displayName: ''
    };
    constructor(private http: Http) { }

    isLoggedIn() {
        return (this.userInfo && Object.keys(this.userInfo).length !== 0);
    }

    saveUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.http.get('http://localhost:8000/userInfo').map(res => res.json()).toPromise();
    }
}
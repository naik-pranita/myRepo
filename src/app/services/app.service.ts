import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private userInfo;
    constructor() { }

    isLoggedIn() {
        return (this.userInfo && Object.keys(this.userInfo).length !== 0);
    }

    saveUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.userInfo;
    }
}
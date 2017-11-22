import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    private userInfo;
    constructor() { }

    saveUserInfo(userInfo) {
        this.userInfo = userInfo;
    }

    getUserInfo() {
        return this.userInfo;
    }
}
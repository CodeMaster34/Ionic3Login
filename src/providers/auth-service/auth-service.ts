import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';


@Injectable()
export class AuthService {
    public apiurl: string = 'http://localhost/testapi/';
    public isLoggedin: boolean;

    constructor(public http: Http, public alertCtrl: AlertController) {
        this.http = http;
        this.isLoggedin = false;
    }

 

    // Login or Register
    loginUser(type, userdata) {
        var user = userdata;
        if (type == 'login') {
            var url = 'login.php';
            var credentials = "username=" + user.username + "&password=" + user.password;
        } else {
            var url = 'register.php';
            var credentials = "username=" + user.username + "&password=" + user.password + "&namesurname=" + user.namesurname;
        }
       
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return new Promise(resolve => {
            this.http.post(this.apiurl + url, credentials, { headers: headers }).subscribe(data => {
                if (data.json().success) {
                    resolve(true);
                    this.storeuser(data);
               } else {
                    resolve(false);
                    var alert = this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: data.json().message,
                        buttons: ['ok']
                    });
                    alert.present();
                } 
            });
        });
    }

    // Store User Credentials & Token
    storeuser( data) {
        localStorage.setItem("token", data.json().userdata.token);
        localStorage.setItem("username", data.json().userdata.username);
        this.LoginForToken();
    }

    // Login for Local token data
    LoginForToken() {
        var token = window.localStorage.getItem('token');
        if (token) {
            this.isLoggedin = true;
        }else {
            this.isLoggedin = false;
        }
    }

    // Logout (clear all login data)
    Logout() {
        window.localStorage.clear();
        this.isLoggedin = false;
    }

    // EXTRA! Get User Token (local data)
    GetUserToken() {
        var token = localStorage.getItem('token');
        return token;
    }
}

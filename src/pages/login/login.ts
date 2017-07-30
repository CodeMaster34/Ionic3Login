import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
    public user = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }

    login(user) {
        this.auth.loginUser('login',user).then(data => {
            if (data) {
                this.navCtrl.setRoot(HomePage);
            }
        })
    }

    gotoregister() {
        this.navCtrl.push(RegisterPage);
    }

}

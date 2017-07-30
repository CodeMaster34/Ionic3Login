import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
    public user = {}

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }



  register(user) {
      this.auth.loginUser('register', user).then(data => {
          if (data) {
              this.navCtrl.setRoot(HomePage);
          }
      })
  }

  gologinpage() {
      this.navCtrl.pop();
  }

}

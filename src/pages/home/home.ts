import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private auth: AuthService) {

  }

    logout() {
        this.auth.Logout();
    }

}

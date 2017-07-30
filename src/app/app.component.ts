import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = '';

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, auth: AuthService) {
      platform.ready().then(() => {

          /********** USER CONTROL **************/
          auth.LoginForToken();
          if (auth.isLoggedin == true) {
              this.rootPage = HomePage;
          } else {
              this.rootPage = LoginPage;
          }
          /******** END USER CONTROL *************/
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


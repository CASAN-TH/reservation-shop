import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    const config = {
      apiKey: 'AIzaSyBdFJqARETGFhMYMrjdSx6OmOolrlNc5m8',
      authDomain: 'reservations-fa395.firebaseapp.com',
      databaseURL: 'https://reservations-fa395.firebaseio.com',
      projectId: 'reservations-fa395',
      storageBucket: 'reservations-fa395.appspot.com',
      messagingSenderId: '356964975251'
    };
    firebase.initializeApp(config);
}

initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  });
}
  
}

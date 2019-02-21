import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal
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
    // const config = {
    //   apiKey: 'AIzaSyDazJXztjj-5VcdZPt3ueRS_sv6e9lQm8Q',
    //   authDomain: 'rabu-love-love.firebaseapp.com',
    //   databaseURL: 'https://rabu-love-love.firebaseio.com',
    //   projectId: 'rabu-love-love',
    //   storageBucket: 'rabu-love-love.appspot.com',
    //   messagingSenderId: '69927117585'
      // apiKey: 'AIzaSyD8CpXd8ZBQkhis7KGWEhmNrd1Le9EQpxQ',
      // authDomain: 'moota-ca955.firebaseapp.com',
      // databaseURL: 'https://moota-ca955.firebaseio.com',
      // projectId: 'moota-ca955',
      // storageBucket: 'moota-ca955.appspot.com',
      // messagingSenderId: '10519151021'
    // };
    firebase.initializeApp(config);
    
    if (platform.is('cordova')) {
      this.oneSignalConfig();
     }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  oneSignalConfig() {
    this.oneSignal.startInit('38dc3697-091e-45b0-bdda-38b302b31e63', 'mhookata');
 
     this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
 
     this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
     });
 
    this.oneSignal.handleNotificationOpened().subscribe(() => {
       // do something when a notification is opened
    });
 
    this.oneSignal.endInit();
 
    this.oneSignal.getIds().then(data => {
      window.localStorage.setItem(environment.apiURL + '@oneSignal', JSON.stringify(data));
    }).catch(error => {
      throw error;
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NavController, Platform } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShopsService } from '../../services/shops/shops.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  image: any;
  user_id: any;
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public authService: AuthService,
    private shopService: ShopsService,
    public loading: LoadingService,
    private oneSignal: OneSignal
  ) { }

  username: any = '';
  password: any = '';
  firstname: any = '';
  lastname: any = '';
  email: any = '';

  ngOnInit() {
  }

  ionViewWillEnter() {
    if (this.platform.is('cordova')) {
      this.oneSignalConfig();
    }
  }

  async confirm() {
    await this.loading.presentLoadingWithOptions();
    const oneSignal: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@oneSignal'));
    alert(JSON.stringify(oneSignal));
    let body;
    if (oneSignal && oneSignal.userId) {
      body = {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        profileImageURL: this.image,
        ref1:oneSignal.userId,
      }
    }

    console.log(body);

    let res: any = await this.authService.register(body);
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@token', res.token);
    await this.loading.dismissOnPageChange();
    this.getMe();
    this.navCtrl.navigateForward("");
    this.loading.dismissOnPageChange();

  }
  cancel() {
    this.navCtrl.navigateForward('');
  }
  onUrlCallback(e) {
    this.image = e;
  }
  back() {
    this.navCtrl.goBack()
  }
  async getMe() {
    let res: any = await this.authService.me();
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@user', JSON.stringify(res.data))
    this.getDataShop();
    ;
  }
  async getDataShop() {
    try {
      let resp: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'));
      console.log(resp)
      this.user_id = resp._id;
      let res: any = await this.shopService.getShopById(this.user_id);
      window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data[0]));
      console.log(res)
    } catch (error) {
      console.log(error)
    }
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

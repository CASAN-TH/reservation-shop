import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { ShopsService } from 'src/app/services/shops/shops.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';


@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.page.html',
  styleUrls: ['./sigin.page.scss'],
})
export class SiginPage implements OnInit {
  sigin = {
    username: '',
    password: ''
  };
  shopData: any;
  user_id: any;
  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private authService: AuthService,
    private shopService: ShopsService,
    public loading: LoadingService,
    private oneSignal: OneSignal,
    public modalController: ModalController
  ) { 

    
  }

  ionViewWillEnter(){
    if (this.platform.is('cordova')) {
      this.oneSignalConfig();
     }
  }

  ngOnInit() {}
  async  clickLogin() {
    await this.loading.presentLoadingWithOptions();
    try {
      const oneSignal: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@oneSignal'));
      alert(JSON.stringify(oneSignal));
      const res: any = await this.authService.sigin(this.sigin);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      console.log(res);
      await this.loading.dismissOnPageChange();
      this.getMe();
      this.modalController.dismiss({
        'result': 'getdata'
      }     
      );
      // this.navCtrl.navigateBack('');
    } catch (error) {
      this.loading.dismissOnPageChange();
      if (error) {
        if (error.error) {
          if (error.error.message == 'Username or Password is invalid.') {
            let dataError = 'Username หรือ Password ไม่ถูกต้อง'
            await this.loading.presentToastWithOptions(dataError);
          }
        }
      }


    }
  }
  clickCancel() {
    this.navCtrl.navigateForward('login');
  }
  async getMe() {
    let res: any = await this.authService.me();
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@user', JSON.stringify(res.data));
    this.getDataShop();
  }
  async getDataShop() {
    let resp: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'));
    console.log(resp)
    this.user_id = resp._id;
    let res: any = await this.shopService.getShopById(this.user_id);
    window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data[0]));
    console.log(res)

  }
  clickRegister() {
    this.navCtrl.navigateForward('register');
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

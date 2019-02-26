import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ToastController, NavController, ModalController } from '@ionic/angular';
import { SiginPage } from '../pages/sigin/sigin.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  shopme: any;
  user: any;
  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    public modalController: ModalController,
    public loading: LoadingService,
    public authService: AuthService

  ) {

  }


  ionViewWillEnter() {
    this.shopme = JSON.parse(window.localStorage.getItem(environment.apiURL + '@shopme'));
    this.user = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'));
    let resToken: any = window.localStorage.getItem(environment.apiURL + '@token');
    console.log(this.user);
    console.log('zzz', this.user)

  }

  ngOnInit() {
    console.log("ngOnInit")
    // let resToken: any = window.localStorage.getItem(environment.apiURL + '@token');
    // if (!resToken) {
    //   this.navCtrl.navigateForward('sigin');
    // } else {
    //   this.user = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'))
    //   console.log(this.user);
    // }
  }

  async logout() {
    this.loading.presentLoadingWithOptions();
    window.localStorage.clear()
    this.loading.presentToastWithOptions('ออกจากระบบสำเร็จ');
    setTimeout(() => {
      this.ionViewWillEnter();
      this.loading.dismissOnPageChange();

    }, 1400);
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'LOG OUT SUCCESS',
      position: 'top',
      mode: 'ios',
      color: 'secondary',
      duration: 2000
    });
    toast.present();
  }
  openGalleryImage() {
    if (this.shopme) {
      this.navCtrl.navigateForward('gallery-shop');
    } else {
      this.loading.presentToastWithOptions('กรุณาสร้างร้าน');
    }
  }

  async clickLogin() {
    const modal = await this.modalController.create({
      component: SiginPage,
      componentProps: { value: 123 }
    });
    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data);
    if (data) {
      this.ionViewWillEnter()
    }
  }
  editShop() {
    this.navCtrl.navigateForward('info-shop');
  }
  editPersone() {
    if (this.shopme) {
      this.navCtrl.navigateForward('persone-edit');
    } else {
      this.loading.presentToastWithOptions('กรุณาสร้างร้าน');
    }
  }
  async onUrlCallback(e) {
    this.loading.presentLoadingWithOptions()
    try {
      let data = {
        username: this.user.username,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        profileImageURL: e,
        email: this.user.email
      }
      let res: any = await this.authService.update(data);
      window.localStorage.removeItem(environment.apiURL + '@user');
      window.localStorage.setItem(environment.apiURL + '@user', JSON.stringify(res.data));
      this.ionViewWillEnter()
      await this.loading.dismissOnPageChange();
    } catch (error) {

    }

  }
}

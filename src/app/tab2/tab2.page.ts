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

  user: any;
  constructor(
    public navCtrl: NavController,
    public toastController: ToastController,
    public modalController: ModalController,
    public loading: LoadingService

  ) {

  }


  ionViewWillEnter() {
    this.user = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'))
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

  logout() {
    window.localStorage.clear()
    setTimeout(() => {
      this.ionViewWillEnter();
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
    this.navCtrl.navigateForward('gallery-shop');
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
  editPersone(){
    this.navCtrl.navigateForward('persone-edit');
  }
}

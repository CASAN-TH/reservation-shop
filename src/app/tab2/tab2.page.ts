import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  user: any;
  constructor(
    public navCtrl: NavController,
    public toastController: ToastController

  ) {

  }
  

  ionViewWillEnter(){
    this.user = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'))
    let resToken: any = window.localStorage.getItem(environment.apiURL + '@token');
    if (!resToken) {
      this.navCtrl.navigateForward('sigin');
    } else {
      this.user = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'))
      console.log(this.user);
    }
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
    this.presentToastWithOptions();

    setTimeout(() => {
      this.navCtrl.navigateForward('sigin')
      this.ionViewWillEnter();
    }, 2500);
    
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
}

import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { QueuelistService } from '../services/queuelist/queuelist.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  dataQueue: any;

  constructor(
    public loadingController: LoadingController,
    private queuesList: QueuelistService,
    public navCtrl: NavController
  ) {

  }

  ionViewWillEnter(){
    let resToken: any = window.localStorage.getItem(environment.apiURL + '@token');
    console.log(resToken);
    if (!resToken) {
      this.navCtrl.navigateForward('sigin');
    } else {
      this.getDataQueue();
    }
  }

  ngOnInit() {
    // let resToken: any = window.localStorage.getItem(environment.apiURL + '@token');
    // console.log(resToken);
    // if (!resToken) {
    //   this.navCtrl.navigateForward('sigin');
    // } else {
    //   this.getDataQueue();
    // }
  }
  async getDataQueue() {
    let dataShop: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@shopme'));
    console.log(dataShop);
    this.dataQueue = await this.queuesList.getQueueList(dataShop._id);
    console.log(this.dataQueue);
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
 
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Hellooo',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();

  //   console.log('Loading dismissed!');
  // }
}

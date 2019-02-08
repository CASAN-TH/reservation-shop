import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: any;
  constructor(public loadingController: LoadingController,
    public toastController: ToastController) { }

    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: 'crescent',
        message: 'กำลังโหลด...',
        translucent: true,
        cssClass: 'custom-class custom-loading',
        mode:'ios'
        
      });
      return await loading.present();
    }
    async dismissOnPageChange() {
      return  await this.loadingController.dismiss();
    }
  }
  
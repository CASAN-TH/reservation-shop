import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery-shop',
  templateUrl: './gallery-shop.page.html',
  styleUrls: ['./gallery-shop.page.scss'],
})
export class GalleryShopPage implements OnInit {

  galleryType = 'regular';
  qty: any = 10;
  imageGallery: any=[];
  constructor(
    public navCtrl: NavController,
    public loading: LoadingService,
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.goBack();
  }
  uploadImage() {

  }

  async onUrlCallback(event) {
    this.imageGallery = await event;
    alert(JSON.stringify(this.imageGallery))
  }
}

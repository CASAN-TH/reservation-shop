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
  constructor(
    public navCtrl: NavController,
    public loading: LoadingService
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.goBack();
  }
  uploadImage() {

  }
}

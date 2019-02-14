import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-gallery-shop',
  templateUrl: './gallery-shop.page.html',
  styleUrls: ['./gallery-shop.page.scss'],
})
export class GalleryShopPage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  back() {
    this.navCtrl.goBack();
  }
}

import { ShopsService } from './../../services/shops/shops.service';
import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery-shop',
  templateUrl: './gallery-shop.page.html',
  styleUrls: ['./gallery-shop.page.scss'],
})
export class GalleryShopPage implements OnInit {

  galleryType = 'regular';
  qty: any = 10;
  imageGallery: any;
  shop: any;
  constructor(
    public navCtrl: NavController,
    public loading: LoadingService,
    public shopsService: ShopsService
  ) {
  }

  ionViewWillEnter() {
    this.shop = JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme"));
    console.log(this.shop);
  }

  ngOnInit() {

  }
  back() {
    this.navCtrl.goBack();
  }

  async onUrlCallback(event) {
    this.loading.presentLoadingWithOptions()
    try {
      this.shop = await JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme"));
      alert("zzzzz " + JSON.stringify(this.shop))
      this.imageGallery = await event;
      alert('ss ' + this.imageGallery)
      await this.updateGalleryShop()
      this.loading.dismissOnPageChange()
    } catch (error) {
      this.loading.dismissOnPageChange()

    }
  }
  async  updateGalleryShop() {
    try {
      this.shop.imagereview = this.imageGallery
      let res: any = await this.shopsService.updateShop(this.shop._id, this.shop);
      alert(JSON.stringify(res));
    } catch (error) {
      alert(JSON.stringify(error));
    }

  }
}

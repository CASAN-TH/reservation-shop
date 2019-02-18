import { ShopsService } from './../../services/shops/shops.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-info-shop',
  templateUrl: './info-shop.page.html',
  styleUrls: ['./info-shop.page.scss'],
})
export class InfoShopPage implements OnInit {
  image: any = "https://res.cloudinary.com/dyiuidzsc/image/upload/v1550205621/Mookata/no-img-shop.jpg";
  dataShop = {
    name: '',
    image: this.image,
    descreiption: {
      title: '',
      detail: ''
    },
    starttime: '',
    endtime: '',
    house_no: '',
    village: '',
    subdistrict: '',
    district: '',
    province: '',
    postalcode: ''
  }
  constructor(public navCtrl: NavController,
    public shopsService:ShopsService
    ) { }

  ngOnInit() {
    console.log(this.dataShop);
  }
  back() {
    this.navCtrl.goBack();
  }
  onUrlCallback(e) {
    this.image = e;
  }
  confirm() {
    console.log(this.dataShop);
  }
}

import { ShopsService } from './../../services/shops/shops.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-shop',
  templateUrl: './info-shop.page.html',
  styleUrls: ['./info-shop.page.scss'],
})
export class InfoShopPage implements OnInit {
  image: any = "https://res.cloudinary.com/dyiuidzsc/image/upload/v1550205621/Mookata/no-img-shop.jpg";
  detailShop: any;
  dataShop: any;
  constructor(public navCtrl: NavController,
    public shopsService: ShopsService
  ) { }

  async  ngOnInit() {
    console.log(this.dataShop);
    this.detailShop = await JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme"));
    console.log(this.detailShop);
    if (this.detailShop) {
      this.dataShop = {
        name: this.detailShop.name ? this.detailShop.name : '',
        image: this.detailShop.image ? this.detailShop.image : this.image,
        descreiption: {
          title: this.detailShop.descreiption.title ? this.detailShop.descreiption.title : '',
          detail: this.detailShop.descreiption.detail ? this.detailShop.descreiption.detail : ''
        },
        starttime: this.detailShop.starttime ? this.detailShop.starttime : '',
        endtime: this.detailShop.endtime ? this.detailShop.endtime : '',
        house_no: this.detailShop.house_no ? this.detailShop.house_no : '',
        village: this.detailShop.village ? this.detailShop.village : '',
        subdistrict: this.detailShop.subdistrict ? this.detailShop.subdistrict : '',
        district: this.detailShop.district ? this.detailShop.district : '',
        province: this.detailShop.province ? this.detailShop.province : '',
        postalcode: this.detailShop.postalcode ? this.detailShop.postalcode : ''
      }
    }

  }
  back() {
    this.navCtrl.goBack();
  }
  onUrlCallback(e) {
    this.image = e;
  }
  async confirm() {
    try {

      if (this.detailShop) {
        let res: any = await this.shopsService.updateShop(this.dataShop);
      } else {
        let res: any = await this.shopsService.createShop(this.dataShop);
        console.log(res);
        window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data));
        console.log(JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme")));
      }

    } catch (error) {

    }

  }
}

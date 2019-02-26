import { LoadingService } from './../../services/loading/loading.service';
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
    postalcode: '',
    user_id: ''
  }
  user: any;
  detailShop: any;
  haveShop: any;

  constructor(
    public navCtrl: NavController,
    public shopsService: ShopsService,
    public loading: LoadingService
  ) { }

  async ngOnInit() {
    // console.log(this.dataShop);
    let user: any = JSON.parse(window.localStorage.getItem(environment.apiURL + "@user"));
    this.user = user;
    console.log(user);
    let resShop: any = await this.shopsService.getShopById(this.user._id);
    this.detailShop = resShop.data[0];
    console.log(this.detailShop);

    this.haveShop = await JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme"));
    if (this.detailShop) {
      this.getShop()
    }
    console.log(this.detailShop);
  }
  back() {
    this.navCtrl.goBack();
  }
  onUrlCallback(e) {
    this.image = e;
  }
  async confirm() {
    try {

      if (this.haveShop) {
        let res: any = await this.shopsService.updateShop(this.detailShop._id, this.dataShop);
        window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data));
      } else {
        this.dataShop.user_id = this.user._id;
        let res: any = await this.shopsService.createShop(this.dataShop);
        console.log(res);
        window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data));
        console.log(JSON.parse(window.localStorage.getItem(environment.apiURL + "@shopme")));
      }

    } catch (error) {

    }

  }
  async getShop() {
    this.dataShop = {
      name: this.detailShop.name,
      image: this.detailShop.image,
      descreiption: {
        title: this.detailShop.descreiption.title,
        detail: this.detailShop.descreiption.detail,
      },
      starttime: this.detailShop.starttime,
      endtime: this.detailShop.endtime,
      house_no: this.detailShop.house_no,
      village: this.detailShop.village,
      subdistrict: this.detailShop.subdistrict,
      district: this.detailShop.district,
      province: this.detailShop.province,
      postalcode: this.detailShop.postalcode,
      user_id: this.detailShop.user_id
    }

  }
}

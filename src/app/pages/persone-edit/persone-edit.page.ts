import { LoadingService } from './../../services/loading/loading.service';
import { ShopsService } from './../../services/shops/shops.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-persone-edit',
  templateUrl: './persone-edit.page.html',
  styleUrls: ['./persone-edit.page.scss'],
})
export class PersoneEditPage implements OnInit {
  shopme: any;
  nameicon: string = "create"
  namecheck: Boolean = false
  user: any;
  shopData: any = {
    peoples: ''
  };
  constructor(
    public navCtrl: NavController,
    private shopsService: ShopsService,
    public loading: LoadingService
  ) { }

  async ngOnInit() {

    this.shopme = JSON.parse(window.localStorage.getItem(environment.apiURL + '@shopme'));
    // this.savePeoples();
    let user: any = JSON.parse(window.localStorage.getItem(environment.apiURL + "@user"));
    this.user = user;
    this.getShop();

    console.log(this.shopData);

  }
  clickCancel() {
    this.navCtrl.navigateForward('tabs/tab2');
  }
  back() {
    this.navCtrl.navigateBack('tabs/tab2');
  }

  async savePeoples() {
    this.loading.presentLoadingWithOptions();

    try {
      let updateData = {
        name: this.shopme.name,
        image: this.shopme.image,
        descreiption: {
          title: this.shopme.descreiption.title,
          detail: this.shopme.descreiption.detail,
        },
        starttime: this.shopme.starttime,
        endtime: this.shopme.endtime,
        house_no: this.shopme.house_no,
        peoples: this.shopData.peoples,
        imagereview: this.shopme.imagereview,
        village: this.shopme.village,
        subdistrict: this.shopme.subdistrict,
        district: this.shopme.district,
        province: this.shopme.province,
        postalcode: this.shopme.postalcode,
        user_id: this.shopme.user_id
      }
      // console.log(updateData);
      let res: any = await this.shopsService.updateShop(this.shopData._id, updateData);
      console.log(res);
      this.ngOnInit();
      await this.loading.dismissOnPageChange();

      this.loading.presentToastSuccess('บันทึกจำนวนที่นั่งสำเร็จ');

    } catch (error) {
      await this.loading.dismissOnPageChange();

    }
  };
  async getShop() {
    try {
      let resShop: any = await this.shopsService.getShopById(this.user._id);
      this.shopData = resShop.data[0];
    } catch (error) {

    }

  }
  edit() {
    if (this.namecheck === true) {
      this.nameicon = "create"
      this.namecheck = false
      this.savePeoples();

    } else if (this.namecheck === false) {
      this.nameicon = "save"
      this.namecheck = true
    }


  }
  save() {
    this.navCtrl.goBack();
  }
}

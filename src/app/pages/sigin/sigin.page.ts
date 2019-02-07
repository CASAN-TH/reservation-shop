import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { ShopsService } from 'src/app/services/shops/shops.service';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.page.html',
  styleUrls: ['./sigin.page.scss'],
})
export class SiginPage implements OnInit {
  sigin = {
    username: '',
    password: ''
  };
  shopData: any;
  user_id: any;
  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private shopService: ShopsService
  ) { }

  ngOnInit() {
  }
  async  clickLogin() {
    try {
      const res: any = await this.authService.sigin(this.sigin);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      console.log(res);
      this.getMe();
      this.navCtrl.navigateBack('');
    } catch (error) {
      console.log(error);


    }
  }
  clickCancel() {
    this.navCtrl.navigateForward('login');
  }
  async getMe() {
    let res: any = await this.authService.me();
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@user', JSON.stringify(res.data));
    this.getDataShop();
  }
  async getDataShop() {
    let resp: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'));
    console.log(resp)
    this.user_id = resp._id;
    let res: any = await this.shopService.getShopById(this.user_id);
    window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data[0]));
    console.log(res)

  }
  clickRegister() {
    this.navCtrl.navigateForward('register');
  }
}

import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ShopsService } from '../../services/shops/shops.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  image: any;
  user_id: any;
  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    private shopService: ShopsService
  ) { }

  username: any = '';
  password: any = '';
  firstname: any = '';
  lastname: any = '';
  email: any = '';

  ngOnInit() {
  }


  async confirm() {
    let body = {
      username: this.username,
      password: this.password,
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      profileImageURL: this.image,
    }
    console.log(body);

    let res: any = await this.authService.register(body);
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@token', res.token);
    this.getMe();
    this.navCtrl.navigateForward("");

  }
  cancel() {
    this.navCtrl.navigateForward('');
  }
  onUrlCallback(e) {
    this.image = e;
  }
  back() {
    this.navCtrl.goBack()
  }
  async getMe() {
    let res: any = await this.authService.me();
    console.log(res);
    window.localStorage.setItem(environment.apiURL + '@user', JSON.stringify(res.data))
    this.getDataShop();
    ;
  }
  async getDataShop() {
    let resp: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@user'));
    console.log(resp)
    this.user_id = resp._id;
    let res: any = await this.shopService.getShopById(this.user_id);
    window.localStorage.setItem(environment.apiURL + '@shopme', JSON.stringify(res.data[0]));
    console.log(res)

  }
}

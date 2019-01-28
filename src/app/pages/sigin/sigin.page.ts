import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

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

  constructor(
    public navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  async  clickLogin() {
    try {
      const res: any = await this.authService.sigin(this.sigin);
      window.localStorage.setItem(environment.apiURL + '@token', res.token);
      console.log(res);
      // this.navCtrl.navigateForward("")


    } catch (error) {
      console.log(error);


    }
  }
  clickCancel() {
    this.navCtrl.navigateForward('');
  }
}

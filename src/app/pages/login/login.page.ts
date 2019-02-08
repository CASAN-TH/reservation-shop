import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    public navCtrl: NavController,
    public loading: LoadingService
  ) { }

  ngOnInit() {
  }
  clickLogin() {
    
    this.navCtrl.navigateForward('sigin');
    

  }
  clickRegister() {
    this.navCtrl.navigateForward('register');
  }
}

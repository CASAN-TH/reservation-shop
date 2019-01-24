import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

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

  constructor(public navCtrl: NavController, ) { }

  ngOnInit() {
  }
  clickLogin() {

  }
  clickCancel() {
    this.navCtrl.navigateForward('login');
  }
}

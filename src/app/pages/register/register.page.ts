import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public navCtrl: NavController, ) { }

  ngOnInit() {
  }
  confirm() {
    console.log("of");
  }
  cancel() {
    this.navCtrl.navigateForward('login');
  }
  onUrlCallback(e) {
    console.log(e);
  }
}

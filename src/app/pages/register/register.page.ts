import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
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
    this.navCtrl.navigateForward('');
  }
  onUrlCallback(e) {
    console.log(e);
  }
}

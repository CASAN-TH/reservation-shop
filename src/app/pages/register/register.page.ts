import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public authService:AuthService
    ) { }

  username:any='';
  password:any='';
  firstname:any='';
  lastname:any='';
  email:any='';

  ngOnInit() {
  }

    
  confirm() {
    let body={
      username:this.username,
      password:this.password,
      firstName:this.firstname,
      lastName:this.lastname,
      email:this.email    
    }
    console.log(body);

  //this.authService.register(body);

  }
  cancel() {
    this.navCtrl.navigateForward('');
  }
  onUrlCallback(e) {
    console.log(e);
  }
}

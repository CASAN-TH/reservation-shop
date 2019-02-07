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
  image: any;
  constructor(
    public navCtrl: NavController,
    public authService: AuthService
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
    this.navCtrl.navigateForward("");

  }
  cancel() {
    this.navCtrl.navigateForward('');
  }
  onUrlCallback(e) {
    this.image = e;
  }
  back(){
    this.navCtrl.goBack()
  }

}

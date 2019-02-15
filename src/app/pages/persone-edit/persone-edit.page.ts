import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-persone-edit',
  templateUrl: './persone-edit.page.html',
  styleUrls: ['./persone-edit.page.scss'],
})
export class PersoneEditPage implements OnInit {

  nameicon : string = "create"
  namecheck : Boolean = false

  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  clickCancel() {
    this.navCtrl.navigateForward('tabs/tab2');
  }
  back(){
    this.navCtrl.navigateBack('tabs/tab2');
  }
 

  edit() {
    if (this.namecheck===true) {
      this.nameicon="create"
      this.namecheck=false
      
    } else if (this.namecheck===false){
      this.nameicon="save"
      this.namecheck=true
    }
    
    
  }

}

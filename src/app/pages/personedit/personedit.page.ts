import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-personedit',
  templateUrl: './personedit.page.html',
  styleUrls: ['./personedit.page.scss'],
})
export class PersoneditPage implements OnInit {
  
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

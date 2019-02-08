import { Component, OnInit } from '@angular/core';
import { QueuelistService } from 'src/app/services/queuelist/queuelist.service';
import { ShopsService } from 'src/app/services/shops/shops.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  dataQueue: any;
  constructor(
    private queuesList: QueuelistService,
    private shopService: ShopsService,
    private authenService: AuthService
    
  ) { }

  ngOnInit() {
    this.getDataQueue();
  }

  async getDataQueue() {
    let dataShop: any = JSON.parse(window.localStorage.getItem(environment.apiURL + '@shopme'));
    // console.log(dataShop);
    this.dataQueue = await this.queuesList.getQueueList(dataShop._id);
    // console.log(this.dataQueue);
  }

}

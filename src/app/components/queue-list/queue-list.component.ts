import { QueuelistService } from './../../services/queuelist/queuelist.service';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements OnInit {
  @Input() dataQueue: any;
  @Input() queueId: any;
  constructor(public alertController: AlertController,
    public queueService: QueuelistService
  ) { }

  ngOnInit() {
    console.log(this.dataQueue);
  }
  async onUpdate(item) {
    let dataQueu = {
      _id: item._id,
      remark: 'success'
    }
    const alert = await this.alertController.create({
      header: 'ยืนยันการอัพเดท!',
      message: 'คุณต้องการยืนยันการอัพเดท <strong>ใช่หรือไม่</strong>!!!',
      buttons: [
        {
          text: 'ไม่ใช่',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'ใช่',
          handler: () => {
            this.queueService.queueUpdate(dataQueu);
          }
        }
      ]
    });

    await alert.present();
  }
  async onPass(item) {
    const alert = await this.alertController.create({
      header: 'หมายเหตุ',
      inputs: [
        {
          name: 'มาไม่ทัน',
          type: 'radio',
          label: 'มาไม่ทัน',
          value: 'มาไม่ทัน',
          checked: true
        }
      ],
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'ตกลง',
          handler: (res) => {
            let dataQueu = {
              _id: item._id,
              remark: res
            }
            this.queueService.queueUpdate(dataQueu);
            // console.log(res)
          }
        }
      ]
    });

    await alert.present();
  }

}
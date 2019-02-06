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

  // async onUpdate() {
  //   const alert = await this.alertController.create({
  //     message: 'สินค้าบางรายในรถเข็นของคุณอยู่ในช่วงเวลาการจัดรายการลดราคาซึ่งจะถูกจำกัดจำนวนของการสั่งซื้อต่อรายการ กรุณาเปลี่ยนแปลงจำนวนการสั่งซื้อและลองใหม่อีกครั้ง',
  //     buttons: ['ตกลง']
  //   });
  //   return await alert.present();
  // }

}
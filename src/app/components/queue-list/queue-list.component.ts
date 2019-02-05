import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements OnInit {
  @Input() dataQueue: any;
  constructor() { }

  ngOnInit() {
    console.log(this.dataQueue);
  }

}

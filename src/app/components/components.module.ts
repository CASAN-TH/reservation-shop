import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { QueueListComponent } from './queue-list/queue-list.component';
import { UploadImageComponent } from './upload-image/upload-image.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        QueueListComponent,
        UploadImageComponent
    ],
    exports: [
        QueueListComponent,
        UploadImageComponent
    ],
    entryComponents: [],
})
export class ComponentsModule { }

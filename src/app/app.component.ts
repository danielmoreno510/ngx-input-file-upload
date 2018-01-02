import { Component, ViewChild } from '@angular/core';
import { NgxInputFileUploadComponent } from './modules/ngx-input-file-upload/ngx-input-file-upload.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgxInputFileUploadComponent) private NgxInputFileUploadComponent: NgxInputFileUploadComponent;
  acceptHtml="image/*"
  acceptTs=/image-*/
  activeColor: string = '#3366CC';

  change(){ 
    console.log(this.NgxInputFileUploadComponent.imageData);
    console.log(this.NgxInputFileUploadComponent.imageSrc);
    console.log(this.NgxInputFileUploadComponent.imageLoaded);
  }
}

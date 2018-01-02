import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgxInputFileUploadModule } from './modules/ngx-input-file-upload/ngx-input-file-upload.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInputFileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

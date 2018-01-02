import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-input-file-upload',
  templateUrl: './ngx-input-file-upload.component.html',
  styleUrls: ['./ngx-input-file-upload.component.css']
})
export class NgxInputFileUploadComponent implements OnInit {

  @Input() acceptHtml
  @Input() acceptTs
  @Input() activeColor

  iconColor
  borderColor
  
  constructor() { }
  
  ngOnInit() {
  }

  imageData;
  baseColor: string = '#E6E6E6';
  overlayColor: string = 'rgba(255,255,255,0)';
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc:String= ""
  
  handleDragEnter() {
    this.dragging = true;
  }
  
  handleDragLeave() {
    this.dragging = false;
  }
  
  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }
  
  handleImageLoad() {
    this.imageLoaded = true;
    this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
    this.imageData=e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = this.acceptTs;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
    this.loaded = true;
  }
  
  _setActive() {
    this.borderColor = this.activeColor;
    if (this.imageSrc.length === 0) {
        this.iconColor = this.activeColor;
    }
  }
  
  _setInactive() {
    this.borderColor = this.baseColor;
    if (this.imageSrc.length === 0) {
        this.iconColor = this.baseColor;
    }
  }

}

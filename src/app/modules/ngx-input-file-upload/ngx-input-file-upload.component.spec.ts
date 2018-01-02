import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxInputFileUploadComponent } from './ngx-input-file-upload.component';

describe('NgxInputFileUploadComponent', () => {
  let component: NgxInputFileUploadComponent;
  let fixture: ComponentFixture<NgxInputFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxInputFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxInputFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

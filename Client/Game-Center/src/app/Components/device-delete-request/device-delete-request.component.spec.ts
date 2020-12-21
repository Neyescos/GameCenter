import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDeleteRequestComponent } from './device-delete-request.component';

describe('DeviceDeleteRequestComponent', () => {
  let component: DeviceDeleteRequestComponent;
  let fixture: ComponentFixture<DeviceDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDeleteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

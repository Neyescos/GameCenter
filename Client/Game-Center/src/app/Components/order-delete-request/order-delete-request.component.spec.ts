import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDeleteRequestComponent } from './order-delete-request.component';

describe('OrderDeleteRequestComponent', () => {
  let component: OrderDeleteRequestComponent;
  let fixture: ComponentFixture<OrderDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDeleteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

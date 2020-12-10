import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDeleteRequestComponent } from './client-delete-request.component';

describe('ClientDeleteRequestComponent', () => {
  let component: ClientDeleteRequestComponent;
  let fixture: ComponentFixture<ClientDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDeleteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

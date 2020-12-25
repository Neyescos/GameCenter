import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayingSpaceComponent } from './add-playing-space.component';

describe('AddPlayingSpaceComponent', () => {
  let component: AddPlayingSpaceComponent;
  let fixture: ComponentFixture<AddPlayingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlayingSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlayingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

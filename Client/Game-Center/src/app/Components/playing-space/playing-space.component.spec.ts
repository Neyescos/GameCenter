import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSpaceComponent } from './playing-space.component';

describe('PlayingSpaceComponent', () => {
  let component: PlayingSpaceComponent;
  let fixture: ComponentFixture<PlayingSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

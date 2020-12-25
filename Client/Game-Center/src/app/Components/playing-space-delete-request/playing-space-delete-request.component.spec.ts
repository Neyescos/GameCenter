import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSpaceDeleteRequestComponent } from './playing-space-delete-request.component';

describe('PlayingSpaceDeleteRequestComponent', () => {
  let component: PlayingSpaceDeleteRequestComponent;
  let fixture: ComponentFixture<PlayingSpaceDeleteRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingSpaceDeleteRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingSpaceDeleteRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

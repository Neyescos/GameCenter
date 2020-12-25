import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingSpaceListComponent } from './playing-space-list.component';

describe('PlayingSpaceListComponent', () => {
  let component: PlayingSpaceListComponent;
  let fixture: ComponentFixture<PlayingSpaceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayingSpaceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingSpaceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

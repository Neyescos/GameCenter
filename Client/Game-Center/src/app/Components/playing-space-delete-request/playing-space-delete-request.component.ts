import { Component, OnInit } from '@angular/core';
import { PlayngSpaceListService } from 'src/app/playng-space-list.service';

@Component({
  selector: 'app-playing-space-delete-request',
  templateUrl: './playing-space-delete-request.component.html',
  styleUrls: ['./playing-space-delete-request.component.css']
})
export class PlayingSpaceDeleteRequestComponent implements OnInit {

  constructor(private service:PlayngSpaceListService) { }

  ngOnInit(): void {
  }

}

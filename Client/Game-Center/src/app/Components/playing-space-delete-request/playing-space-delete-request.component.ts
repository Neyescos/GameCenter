import { Component, Input, OnInit } from '@angular/core';
import { PlayngSpaceListService } from 'src/app/playng-space-list.service';
import { PlayingSpace } from '../playingSpace';

@Component({
  selector: 'app-playing-space-delete-request',
  templateUrl: './playing-space-delete-request.component.html',
  styleUrls: ['./playing-space-delete-request.component.css']
})
export class PlayingSpaceDeleteRequestComponent implements OnInit {
  @Input() deleteSpace!:PlayingSpace;

  constructor(private service:PlayngSpaceListService) { }
  OnClick():void{
    try{
      this.service.deleteSpace(this.deleteSpace.Id);
      
    }catch(err){
      console.log(err);
    }
  }
  ngOnInit(): void {
    console.log(this.deleteSpace);
  }

}

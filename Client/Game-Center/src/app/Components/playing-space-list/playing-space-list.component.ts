import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayngSpaceListService } from 'src/app/playng-space-list.service';
import { PlayingSpaceComponent } from '../playing-space/playing-space.component';
import { PlayingSpace } from '../playingSpace';

@Component({
  selector: 'app-playing-space-list',
  templateUrl: './playing-space-list.component.html',
  styleUrls: ['./playing-space-list.component.css']
})
export class PlayingSpaceListComponent implements OnInit {

  spaces:PlayingSpace[]=[];
  constructor(private service:PlayngSpaceListService,private router:Router) { }
  clearStorages(){
    sessionStorage.clear();
    localStorage.clear();
  }
  ngOnInit(): void {
    console.log("loaded");
    try{
      //const myHeaders = new HttpHeaders().set('Authorization', 'my-auth-token');
      this.service.getSpaces().subscribe(
        result =>{
          result.forEach(space => {
            this.spaces.push(space);
            console.log(space);
          });
        }
      );
      
    }catch(err){
      
      this.router.navigateByUrl('/login');
      console.log('playing-spaces-list error');
    }
  }

}

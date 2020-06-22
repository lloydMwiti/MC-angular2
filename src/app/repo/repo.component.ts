import { Component, OnInit } from '@angular/core';
import { GithubService} from '../service/github.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username:string;
  profile:any;
  repo:any;
  
  constructor() {
    
  }
  ngOnInit():void {
      
    }


  

}

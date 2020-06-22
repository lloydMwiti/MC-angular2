import { Component } from '@angular/core';
import { GithubService  } from './service/github.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2';
  users:string[];
  username:string;
  profile:any;
  repo:any;

 constructor(private githubservice:GithubService){
    this.githubservice.gitinit(this.username);
    this.githubservice.gitProfile().subscribe(profile => {
       
       this.profile = profile;
    });

    this.githubservice.gitRepos().subscribe(repos => {
      // console.log(repos);
      this.repo = repos;
    });

  }
  ngOnInit() { 
    this.githubservice.gitinit('lloydMwiti');
    this.githubservice.gitRepos().subscribe(repos =>this.repo =repos);
    this.githubservice.gitProfile().subscribe(profile =>this.profile =profile);
  }

  findProfile() {
    this.githubservice.updateUser(this.username);
    this.githubservice.gitProfile().subscribe(profile => {
      // console.log(profile);
      this.profile = profile;
    });

    this.githubservice.gitRepos().subscribe(repos => {
      // console.log(repos);
      this.repo = repos;
    });
  }
 
  myRepo(){
    this.githubservice.gitinit(this.username);
    console.log(this.username)

  }

}

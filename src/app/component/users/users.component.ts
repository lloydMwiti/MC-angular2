import { Component, OnInit ,Input} from '@angular/core';
import { GithubService } from '../../service/github.service';
// import {users} from '../../app.component'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() users:String[];
  profile: any;
  repos: any;
  username: string;

  constructor(private githubservice:GithubService) { 
    this.githubservice.updateUser(this.username);
    this.githubservice.gitProfile().subscribe(profile => {
       this.profile = profile;
    });

    this.githubservice.gitRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit(): void {
      this.getUsers();
      this.githubservice.updateUser('lloydMwiti');
    this.githubservice.gitProfile().subscribe(profile => this.profile = profile);
    this.githubservice.gitRepos().subscribe(repos =>  this.repos = repos);
  }
  getUsers(){
    this.githubservice.getData().subscribe((data) => {

      this.users = data;
    });
  }
  findProfile() {
    this.githubservice.updateUser(this.username);
    this.githubservice.gitProfile().subscribe(profile => {
      this.profile = profile;
    });

    this.githubservice.gitRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}

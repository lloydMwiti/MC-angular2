import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private url = "https://api.github.com/users";
  
  private key = environment.serviceKey;
  private username :String;

  constructor(private http:HttpClient) {
    this.username='lloydMwiti'
   }
  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }
  gitProfile(){
    return this.http.get(this.url+ '/' + this.username + '?access_token=' + this.key);
  }

  gitRepos() {
    return this.http.get(this.url+ '/' + this.username + '/repos' + '?access_token=' + this.key);
  }
  gitinit(user:String){
    this.username=user;
  }
  updateUser(username: string) {
    this.username = username;
  }

}

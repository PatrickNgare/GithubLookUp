import { Injectable } from '@angular/core';
import  { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchserviceService {
  private username:string;
  private clientId='ee5b325de0c6173dc1fb';
  private clientsecret='cb027f69131dac4eb1c725c801051ff743472b12';

  constructor(private http:Http) {
   console.log("service is ready");
   this.username='patrickNgare';
  }
 getProfile(){
   return this.http.get("https://api.github.com/users/"
    +this.username +"?client_id=" + this.clientId
    +"&client_secret=" +this.clientsecret)
.map(res=>res.json());
 }

 getRepos(){
   return this.http.get("https://api.github.com/users/"
    +this.username + "/repos?client_id" + this.clientId
    +"&client_secret=" +this.clientsecret)
.map(res=>res.json());
 }
 updateProfile(username:string){
   this.username=username;
 }
}

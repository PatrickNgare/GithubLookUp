import { Injectable } from '@angular/core';
import  { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchserviceService {
  private username:string;
  private clientId='6f3926ef5fc15553e5e2';
  private clientsecret='52fa021b8bf938b4481a4b5c65c21e9e70625279';

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
}

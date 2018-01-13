import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import {CommonModule} from '@angular/common';
import 'rxjs/add/operator/map';
import { SearchserviceService } from '../search/searchservice.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
profile:any[];
repos: any[];

constructor(private searchservice: SearchserviceService  ){
  this.searchservice. getProfile()
  .subscribe(profile =>{
    console.log(profile);
    this.profile=profile;

  });
   this.searchservice. getRepos().subscribe( repos =>{
     console.log(repos);
     this.repos=repos;

   })

}
  ngOnInit() {
  }



}

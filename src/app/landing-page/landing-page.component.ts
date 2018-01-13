
import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../search/searchservice.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  profile:any[];
  repos: any[];
  username:string;

  constructor(private searchService: SearchserviceService) {

  }

  findProfile(){
  	this.searchService.updateProfile(this.username);
  	this.searchService.getProfile().subscribe(profile => {
  		console.log(profile);
  		this.profile = profile;
  	});

  	this.searchService.getRepos().subscribe(repos => {
  		console.log(repos);
  		this.repos = repos;
  	});
  }

  ngOnInit() {
  }

}

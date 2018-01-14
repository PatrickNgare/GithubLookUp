
import { Component, OnInit } from '@angular/core';
import { SearchserviceService } from '../search/searchservice.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private searchService: SearchserviceService) {

  }
  ngOnInit() {
    this.searchService.updateProfile(this.username);

    this.searchService.getProfile()
      .subscribe(profile => {
        this.profile = profile;
      })
    this.searchService.getRepos()
      .subscribe(profile => {
        this.profile = profile;
      })
  }


  findProfile() {
    this.searchService.updateProfile(this.username);

    this.searchService.getProfile().subscribe(profile => {
      this.profile = profile;
    })

    this.searchService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

}

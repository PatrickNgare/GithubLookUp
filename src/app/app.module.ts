import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule  } from '@angular/forms';
 import { SearchserviceService} from './search/searchservice.service';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [SearchserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

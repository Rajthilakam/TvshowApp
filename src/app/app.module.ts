import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';            // <-- required

import { ShowdataService } from './showdata.service';
import { ShowdetailService } from './showdetail.service';
import { EpisodesService } from './episodes.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { GenreComponent } from './genre/genre.component';
import { SearchshowComponent } from './searchshow/searchshow.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubstrpipePipe } from './substrpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundImageComponent,
    SeasonsComponent,
    EpisodesComponent,
    GenreComponent,
    SearchshowComponent,
    PagenotfoundComponent,
    SubstrpipePipe,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

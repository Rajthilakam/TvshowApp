import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';           // <-- required

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

import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubstrpipePipe } from './substrpipe.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SearchshowComponent } from './searchshow/searchshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundImageComponent,
    SeasonsComponent,
    EpisodesComponent,
    GenreComponent,

    PagenotfoundComponent,
    SubstrpipePipe,
    SearchshowComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule,
    LazyLoadImageModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SubstrpipePipe } from './substrpipe.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SearchshowComponent } from './searchshow/searchshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { MatOption, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldControl } from '@angular/material/form-field';

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
    SlickCarouselModule,
    LazyLoadImageModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

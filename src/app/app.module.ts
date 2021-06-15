import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundImageComponent,
    SeasonsComponent,
    EpisodesComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

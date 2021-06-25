import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { GenreComponent } from './genre/genre.component';
import { SearchshowComponent } from './searchshow/searchshow.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'', redirectTo:'/show',  pathMatch: 'full'},
  {path:'show',component:EpisodesComponent},
  { path:'show/:id', component:SeasonsComponent },
  { path:'episodes', component:EpisodesComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

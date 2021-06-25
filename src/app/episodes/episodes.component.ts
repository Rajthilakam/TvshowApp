import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../episodes.service';
import { Iepisode } from '../iepisode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {


  episodesdetail:Iepisode[] = []

  constructor(private episodeservice:EpisodesService) { }

  ngOnInit(): void {
    console.log('In episode component')
    this.episodeservice.getepisodedata().subscribe(data => {
      this.episodesdetail = data
      console.log(this.episodesdetail[0])
      }
    )


  }

}

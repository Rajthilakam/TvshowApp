import { Component, OnInit } from '@angular/core';
import { Ishowseason } from '../ishowseason';
import { ShowdetailService } from '../showdetail.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  seasonsdetail:any = {}

  season:any = {}


  id:number = 2
  getseasonid(season:any):void {
    this.season.id = season.id
    this.season.number = season.number
    this.season.url = season.url
    alert(season.url)
}

  constructor(private showdetailservice:ShowdetailService) {}

  ngOnInit(): void {
    this.showdetailservice.getshowdetail(this.id).subscribe(data => {
      this.seasonsdetail = data
      console.log(this.seasonsdetail.season.length)}
    )
  }
}

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
  //showseason:Ishowseason= {}


  constructor(private showdetailservice:ShowdetailService) {

  }

  ngOnInit(): void {
    this.showdetailservice.getshowdetail().subscribe(data => {
      this.seasonsdetail = data
      console.log(this.seasonsdetail.season.length)}
    )
    //console.log(this.seasonsdetail)
  }

}

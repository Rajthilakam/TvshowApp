import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

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
  id:any;
  sub:any;

  /*
  getseasonid(season:any):void {
    this.season.id = season.id
    this.season.number = season.number
    this.season.url = season.url
    alert(season.id)

}
*/
  constructor(private _Activatedroute:ActivatedRoute,
              private _router:Router,
              private showdetailservice:ShowdetailService) {}

/*
  ngOnInit(): void {
    this.showdetailservice.getshowdetail(this.id).subscribe(data => {
      this.seasonsdetail = data
      console.log(this.seasonsdetail.season.length)}
    )
  }
*/

  ngOnInit():void {

    this.sub = this._Activatedroute.paramMap.subscribe(param => {
      console.log(param)
      console.log(typeof(param))
      this.id = param.get('id')
    })

    this.showdetailservice.getshowdetail(this.id).subscribe(data => {
      this.seasonsdetail = data
      console.log(this.seasonsdetail.season.length)}
    )

    }

    ngOnDestroy() {
      this.sub.unsubscribe();
    }


}


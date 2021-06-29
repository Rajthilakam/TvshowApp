import { Component, OnInit } from '@angular/core';
import { ShowdataService } from '../showdata.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {

  current:any = {
    id:100,
    image:'assets/img/background.jpg'

  }


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {

    console.log("In background page")
  }

}

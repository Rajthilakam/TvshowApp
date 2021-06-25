import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.css']
})
export class BackgroundImageComponent implements OnInit {

  current:any = {
    id:101,
    image:'assets/img/background.jpg'

  }


  constructor() { }

  ngOnInit(): void {

    console.log("In background page")
  }

}

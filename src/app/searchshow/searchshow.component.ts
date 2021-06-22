import { Component, OnInit } from '@angular/core';
import { Ishow } from '../ishow';
import { Ishowdatas } from '../ishowdatas';
import { Ishowdata } from '../ishowdatas';
import { ShowdataService } from '../showdata.service';

@Component({
  selector: 'app-searchshow',
  templateUrl: './searchshow.component.html',
  styleUrls: ['./searchshow.component.css']
})
export class SearchshowComponent implements OnInit {

  showsdetail:any = []



  constructor(private showdataservice:ShowdataService) { }

  ngOnInit(): void {
      this.showdataservice.getshowdata().subscribe(data => this.showsdetail.push(data))
      console.log("in search component")
      console.log(("hi"))
      console.log(this.showsdetail)
      console.log((this.showsdetail.length))
      for (let each of this.showsdetail)
      {
        console.log(each)
      }

  }

}

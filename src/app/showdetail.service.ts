import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ishowdetail } from './ishowdetail';
import { Ishowseason } from './ishowseason';
import {filter, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowdetailService {

  constructor(private httpclient:HttpClient) { }

  //getshowdetail(id:number) {
    //console.log("In show season service")
    //console.log(id)
    //return this.httpclient.get<Ishowdata[]>('http://api.tvmaze.com/shows').pipe(map(data => this.transformshowdata(data)))
        //return this.httpclient.get<Ishowdetail>(`http://api.tvmaze.com/shows/${id}?embed[]=seasons`).pipe(map( data => this.transformshowdetail(data)))
  //}


    getshowdetail(id:string) {


      /*
      const regex = /\d/

      const doesithavenumber = regex.test(id)

      if (doesithavenumber) {
        console.log("in number")
        return this.httpclient.get<Ishowdetail>(`http://api.tvmaze.com/shows/${id}?embed[]=seasons`).pipe(map( data => this.transformshowdetail(data)))
      }
      else {
        console.log(id)
        console.log(typeof(id))
        console.log("in string")
        return this.httpclient.get<Ishowdetail>(`http://api.tvmaze.com/singlesearch/shows?q=${id}&embed[]=seasons`)
        .pipe(map(data =>  this.transformshowdetail(data)) )
      }
      */

      console.log(id)
    let reg = /[0123456789]/
    let url = ''
    if(reg.test(id)) {
      console.log(id)
      // url for id
      url = `https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`
    } else {
      // url for string
      url = `https://api.tvmaze.com/singlesearch/shows?q=${id}&embed[]=seasons&embed[]=cast`
    }
    return this.httpclient.get<Ishowdetail>(url).pipe(map( data => this.transformshowdetail(data)))
    }

  transformshowdetail(data:Ishowdetail):Ishowseason {

      console.log('In transform season service')
      console.log(typeof(data.id))

      return {
        id:data.id,
        name:data.name,
        image:data.image.medium,
        summary:data.summary,
        genre:data.genres,
        season:data._embedded.seasons
      }



      //console.log("in transform data")
      //console.log(data)
      //return data
  }

}




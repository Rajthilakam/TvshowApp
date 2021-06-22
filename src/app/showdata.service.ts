import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ishow } from './ishow';
import { Ishowdata } from './ishowdatas';
import { Ishowdatas } from './ishowdatas';
import {filter, map} from 'rxjs/operators';
import { from,Observable} from 'rxjs';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowdataService {

  constructor(private httpclient:HttpClient) {}

  getshowdata(){

    //return this.httpclient.get<Ishowdata[]>('http://api.tvmaze.com/shows').pipe(
      //map(data => this.transformshowdata(data)))

// Subscribe to begin listening for async result


    //console.log("hello")
    return this.httpclient.get('http://api.tvmaze.com/shows')
     //
     //
  }

}

/*
  transformshowdata(data:Ishowdata[]):Ishowdata[] {
    let shows:Ishowdatas = []

    for(let show of data) {
      let Ishow = {} as Ishowdata
        Ishow.id = show.id,
        Ishow.name = show.name,
        Ishow.image = show.image,
        Ishow.genres = show.genres,
        Ishow.summary = show.summary,
        Ishow.rating = show.rating,
        Ishow.url = show.url

        shows.push(Ishow)
    }
    console.log(shows.length)
    return shows

    }

  }

*/

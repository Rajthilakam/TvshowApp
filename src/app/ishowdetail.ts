export interface Ishowdetail {
  id:number,
  name:string,
  number:number,
  image:{
    medium:string
  },
  summary:string,
  genres:string[],
  _embed:{
    season:[{
      id:number,
      url:string,
      number:number,
      image:{
        medium:string
      }
    }]


  }


}

import { Injectable } from '@angular/core';

export class Travel{
  id:number
  name:string = ''
  steps:Step[] = []
  constructor(){}
}

export class Step{
  id:number
  order:number
  name:string = ''
  locations:Location = new Location()
  description:string = ''
  images:Image[] = []
  constructor(){}
}

export class Location{
  id:number
  latitude:string = ''
  longitude:string = ''
  constructor(){}  
}

export class Image{
  id:number
  url:string = ''
  description:string = ''
  constructor(){}
}

@Injectable({
  providedIn: 'root'
})
export class TravelService {

constructor() { }

}

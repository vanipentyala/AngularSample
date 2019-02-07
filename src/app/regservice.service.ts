import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegserviceService {

  constructor() { }

  registration(data)
  {
    console.log("service class",data)
  }
}

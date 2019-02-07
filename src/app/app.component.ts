import { Component } from '@angular/core';
import {RegserviceService} from './regservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class  AppComponent{

  name:string="Healthy-Millets";
  public developedby:string="vani";
  constructor(private servicedata:RegserviceService)
  {

  }
 
UserRegistration(data)
{
  console.log("calling Registeration componet in to main componet",data);
  this.servicedata.registration(data);
}
 
}
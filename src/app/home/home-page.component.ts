import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{IMilletData}from './IMilletData';
import{MilletDataService} from './MilletDataService';
import { from } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers:[MilletDataService]
})
export class HomePageComponent implements OnInit {
public milletdata;
showdetails:boolean=true;
MilletDtaInfo: IMilletData[]


  constructor(private http: HttpClient,private _milletDataService:MilletDataService) {

   
   }

ngOnInit(): void {
      this.MilletDtaInfo=this._milletDataService.getMilletData();
     // this.http.get('http://localhost:3000/customers_data').subscribe(data => {
       // console.log(data);
     // });

    }

  //  moreMillets():
  //  void
//{
 // this.showdetails=!this.showdetails;
//}
  }
    
    
  



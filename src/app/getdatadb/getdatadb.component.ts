import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-getdatadb',
  templateUrl: './getdatadb.component.html',
  styleUrls: ['./getdatadb.component.css']
})
export class GetdatadbComponent implements OnInit {
public userData;
  getData()
  {
    this.httpclient.get('http://localhost:3000/customers_data').subscribe(data => {
      console.log(data);
      this.userData=data;
    });
  }
  constructor(private httpclient: HttpClient) { 
    this.getData();
  }

 
  ngOnInit() {
  }

}

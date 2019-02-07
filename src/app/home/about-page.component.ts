import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
toggle =true;
  constructor() { }

  ngOnInit() {
  }
  get format()  
   {
      return this.toggle ? 'shortDate' : 'fullDate'; }
  toggledate()
  {

this.toggle=!this.toggle;
console.log("toggle changed",this.toggle);
  }
  birthday = new Date(1988, 0, 15);
}

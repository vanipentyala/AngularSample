import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-comform',
  templateUrl: './comform.component.html',
  styleUrls: ['./comform.component.css']
})
export class ComformComponent implements OnInit {

 
  
formData=
{

};
@Input()
public parentData;
  constructor() { }
@Output() regData=new EventEmitter();

  UserRegistration()
{
  console.log("this is related to same componet",this.formData);
  this.regData.emit(this.formData);
}

  ngOnInit() {
  }

}

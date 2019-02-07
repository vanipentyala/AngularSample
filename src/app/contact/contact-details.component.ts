import { Component, OnInit, Input } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import{ ContactService } from './contact-details.services';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
 
})
export class ContactDetailsComponent implements OnInit {
contactdetalsForm:FormGroup;

usermail: string;
userAddress:string;
  constructor(private contactdetails:ContactService) { }
 /* sendservicedata(usermail,userAddress)
  {
  this.usermail=this.usermail;
  this.userAddress=this.userAddress;
  }*/
  ngOnInit() {
   
    this.usermail=this.contactdetails.getMailId();
    this.userAddress=this.contactdetails.getAddress();
    this.contactdetalsForm=new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      message:new FormControl()

    });
  }
  onSubmit():void
  {
   console.log(this.contactdetalsForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
loginForm:FormGroup;
  constructor() { }

  ngOnInit() {
this.loginForm=new FormGroup({
  name:new FormControl(),
  email:new FormControl()
});
  }
  onLoginSubmit():void{
 
   console.log(this.loginForm.value);
  }
}

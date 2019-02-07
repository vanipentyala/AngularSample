import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators, EmailValidator} from '@angular/forms';
import{MilletNames} from '../models/milletnames.model';



  import { from } from 'rxjs';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  milletnames: MilletNames[]=[
   
  {id:1,name:'Proso Millet'},
  {id:2,name:'BarnYard Millet'},
  {id:3,name:'Little Millet'},
  {id:4,name:'Finger Millet'},
  {id:5,name:'Kodo Millet'},
  {id:6,name:'Foxtail Millet'},


  ];
  registerForm:FormGroup;
  formData={};
  constructor() { }
  

  ngOnInit() {
    
    this.registerForm =new FormGroup({
      name:new FormControl("",Validators.required),
      email:new FormControl ('', [Validators.required, Validators.email]),
      phoneNumber:new FormControl("",Validators.required),
      customers:new FormControl("",Validators.required),
      milletsType:new FormControl("",Validators.required),
      milletqty:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      conpassword:new FormControl("",Validators.required)
    })

  }

  



  onRegisterSubmit():
  void{
 
    var password=this.registerForm. get('password').value;
    var conpass=this.registerForm. get('conpassword').value;

   if(password==conpass)
   {
     console.log("both r equal");
   }
   else{
     console.log("not equal");
   }
    console.log(this.registerForm.value);
   }
}

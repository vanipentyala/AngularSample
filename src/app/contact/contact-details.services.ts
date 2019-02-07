import {Injectable} from '@angular/core';

@Injectable()
export class ContactService{
 phonenumber:number=3212743874
 mailId:string='vanip1985@gmail.com'
 Address:string='415  blue birch ct sanford fl'
    
    getMailId()
    {
       
        return this.mailId;
        
       
    }
    getAddress()
    {
        return this.Address;
    }
   /* getServicedata(data)
    {
console.log("this is related service"+data.value);
    }*/

}
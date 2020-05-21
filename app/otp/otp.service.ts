import { Injectable } from '@angular/core';

import { HttpClient }  from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private http:HttpClient,private router:Router) { }

  signupsss(user:any){

    this.http.post('http://localhost:1025/otp/signups',user).subscribe((responseData) => {
      console.log("Inside otp service");
      console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          
             this.router.navigate(['/dashboard'])

          
      }
    });
  }



  }

  



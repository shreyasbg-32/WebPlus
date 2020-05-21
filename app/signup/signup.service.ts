import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {Router} from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class SignupService {
    

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(user:any){

    this.http.post('http://localhost:1025/auth/signup',user).subscribe((responseData) => {
      console.log("Inside signup service");
      console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          
             this.router.navigate(['/otp'])

          
      }
    });

     
            
  }

 }





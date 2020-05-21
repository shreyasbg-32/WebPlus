import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient,private router:Router) { }

  Signin(user:any){
    console.log("hi SHryeas");
    
    this.http.post('http://localhost:1025/auth/login',user).subscribe((responseData) => {
      
    console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          this.router.navigate(['/dashboard']);     
      }
    });
  }
  
   }


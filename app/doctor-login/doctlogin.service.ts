import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctloginService {

  constructor(private http:HttpClient,private router:Router) { }

  login(user:any){
    console.log("hi SHryeas");
    
    this.http.post('http://localhost:1025/doct/login',user).subscribe((responseData) => {
      
    console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          this.router.navigate(['/doctDash']);     
      }
    });
  }
 
}

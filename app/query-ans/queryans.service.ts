import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueryansService {

  constructor(private http:HttpClient) { }

  sendAnsToMail(user: any){
    this.http.post('http://localhost:1025/ans/send',user).subscribe((responseData) => {
      
    console.log("Result :: " , responseData);
      if(responseData["status"] == "success"){
          console.log("Success");     
      }
    });
  }
}

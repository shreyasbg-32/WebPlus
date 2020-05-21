import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  order(user:any){
    this.http.post('http://localhost:1025/mail/order',user).subscribe((responseData) => {
      
    console.log("Result :: " , responseData);
   
    });
}
}

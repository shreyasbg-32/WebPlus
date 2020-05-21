import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient }  from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {DashboardService} from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,private http:HttpClient,private orderService:DashboardService ) { }

  ngOnInit() {
    
  }
  onClick(){
    
    this.router.navigate(['/medical']);
  }
  onClicks(){
    
    this.router.navigate(['/bloodbank']);
  }
  onClickss(){
    
    this.router.navigate(['/health']);
  }
  onClicksss(){
    
    this.router.navigate(['/disaster']);
  }

onClick1(){
  this.router.navigate(['/query']);
}

onClick2(){
  this.router.navigate(['/findDoc']);
}

  // validateuser(loginForm:NgForm){
  //   this.http.post('http://localhost:3000',loginForm).subscribe((responseData) => {
      
  //   console.log("Result :: " , responseData);
  //     // if(responseData["status"] == "success"){
  //     //     this.router.navigate(['/dashboard']);     
  //     // }
  //   });
  sendMailToStore(orderForm:NgForm){
    this.orderService.order(orderForm.value);
    }


}

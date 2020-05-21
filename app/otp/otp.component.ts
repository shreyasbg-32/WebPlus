import { Component, OnInit } from '@angular/core';


import { OtpService } from './otp.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private otpService:OtpService ) { }

  ngOnInit() {
  }
  Signups(form:NgForm) {
    console.log(form.value);
    
    this.otpService.signupsss(form.value);

    
  }

  
  

}

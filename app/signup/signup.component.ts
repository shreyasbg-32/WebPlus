import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {Router} from '@angular/router';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService:SignupService) { }

  ngOnInit() {
  }

  
  Signup(Signupform:NgForm){
    console.log(Signupform.value);
    
    this.signupService.userSignUp(Signupform.value);

    }

    
  

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';
import { HttpClient }  from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginserviceService) { }

  ngOnInit() {
  }
  onClick(){
          this.router.navigate(['/signup']);
     }
  onClick1(){
    this.router.navigate(['/doctLogin'])
  }
     

     validateUser(loginForm:NgForm){
       console.log(loginForm.value);
      this.loginService.Signin(loginForm.value);
     }

  
  
} 



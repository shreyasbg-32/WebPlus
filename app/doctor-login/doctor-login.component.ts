import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctloginService } from './doctlogin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  constructor(private router: Router,private doctService:DoctloginService) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/doctSignup']);
}
onClick1(){
  this.router.navigate(['/']);
}
   

validate(loginForm:NgForm){
  this.doctService.login(loginForm.value);
 }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {

  constructor(private DoctorService:DoctorService) { }

  ngOnInit() {
  }

  Signup(Signupform:NgForm){
    console.log(Signupform.value);
    
    this.DoctorService.userSignUp(Signupform.value.name,Signupform.value.Specialisation,Signupform.value.addr,Signupform.value.Email,Signupform.value.mnum,Signupform.value.password);

    }

}

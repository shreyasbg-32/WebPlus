import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {BloodServiceService} from './blood-service.service';
import { bloodDonor } from './blood.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blood-bank',
  templateUrl: './blood-bank.component.html',
  styleUrls: ['./blood-bank.component.css']
})
export class BloodBankComponent implements OnInit {

  don: bloodDonor[] = [];
  public donorSub: Subscription;

  constructor(private router:Router,public BankService:BloodServiceService) { }

  ngOnInit() {

    // this.BankService.getBlood();
    // this.donorSub = this.BankService.getPostUpdateListener()
    //   .subscribe((blood: bloodDonor[]) => {
    //     this.don = blood;
    //   });
  }
  onClick(){
    this.router.navigate(['/dashboard']);
}

  donateBlood(donateForm: NgForm){
    this.BankService.bloodBankService(donateForm.value.username,donateForm.value.mobile,donateForm.value.group);
    // console.log(donateForm.value);
  }

}

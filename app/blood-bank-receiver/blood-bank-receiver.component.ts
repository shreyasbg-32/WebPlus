import { Component, OnInit } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { bloodDonor } from '../blood-bank/blood.model';
import {BloodServiceService} from '../blood-bank/blood-service.service';


@Component({
  selector: 'app-blood-bank-receiver',
  templateUrl: './blood-bank-receiver.component.html',
  styleUrls: ['./blood-bank-receiver.component.css']
})
export class BloodBankReceiverComponent implements OnInit {

  don:bloodDonor[]=[];
  public donorSub: Subscription;
  
  constructor(public BankService:BloodServiceService) { }

  ngOnInit() {
    this.BankService.getBlood();
    this.donorSub = this.BankService.getPostUpdateListener()
      .subscribe((blood: bloodDonor[]) => {
        this.don = blood;
      });
  }
  

}

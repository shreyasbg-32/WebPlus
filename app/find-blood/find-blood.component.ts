import { Component, OnInit } from '@angular/core';
import {BloodServiceService} from '../blood-bank/blood-service.service';
import { bloodDonor } from '../blood-bank/blood.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-find-blood',
  templateUrl: './find-blood.component.html',
  styleUrls: ['./find-blood.component.css']
})
export class FindBloodComponent implements OnInit {

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

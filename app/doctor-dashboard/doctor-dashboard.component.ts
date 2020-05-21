import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { enquiry } from '../queries/query.model';
import { Subscription } from 'rxjs';
import { QueryService } from '../queries/query.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  que:enquiry[]=[];
  public queSub: Subscription;

  constructor(private queryService:QueryService,private router: Router) { }

  ngOnInit() {
    this.queryService.getQuery();
    this.queSub = this.queryService.getPostUpdateListener()
      .subscribe((query: enquiry[]) => {
        this.que = query;
      });
  }

  onClick(){
    this.router.navigate(['/queryAns']);
  }

}

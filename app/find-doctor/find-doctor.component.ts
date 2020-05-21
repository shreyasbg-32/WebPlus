import { Component, OnInit } from '@angular/core';
import { doctor } from '../doctorsignup/doctor.model';
import { Subscription } from 'rxjs';
import { DoctorService } from '../doctorsignup/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-doctor',
  templateUrl: './find-doctor.component.html',
  styleUrls: ['./find-doctor.component.css']
})
export class FindDoctorComponent implements OnInit {

  doc:doctor[]=[];
  public doctorSub: Subscription;

  constructor(public doctService:DoctorService,private router:Router) { }

  ngOnInit() {
    this.doctService.getDoctor();
    this.doctorSub = this.doctService.getPostUpdateListener()
      .subscribe((doct: doctor[]) => {
        this.doc = doct;
      });

  }

  onClick(){
    this.router.navigate(['/dashboard']);
}

}


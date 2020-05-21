import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryService } from './query.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.css']
})
export class QueriesComponent implements OnInit {

  constructor(private queriesService:QueryService,private router:Router) { }

  ngOnInit() {
  }
  enquiry(ques:NgForm) {
    console.log(ques.value);
    
    this.queriesService.enquireDoctor(ques.value.query);


}


onClick(){
  this.router.navigate(['/dashboard']);
}
}

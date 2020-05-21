import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QueryansService } from './queryans.service';

@Component({
  selector: 'app-query-ans',
  templateUrl: './query-ans.component.html',
  styleUrls: ['./query-ans.component.css']
})
export class QueryAnsComponent implements OnInit {

  constructor(private ansService:QueryansService) { }

  ngOnInit() {
  }

  queryAnswer(ans:NgForm){

    console.log(ans.value);

    this.ansService.sendAnsToMail(ans.value);

  }

}

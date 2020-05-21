import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-disaster',
  templateUrl: './disaster.component.html',
  styleUrls: ['./disaster.component.css']
})
export class DisasterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  onClick(){
    
    this.router.navigate(['/dashboard']);
  }

}

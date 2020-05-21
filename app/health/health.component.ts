import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/dashboard']);
}

}

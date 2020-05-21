import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  

  onClickb(){
    
    this.router.navigate(['/dashboard']);
  }
  onClick(){
    
    this.router.navigate(['/blooddr']);
  }

  onClicks(){
    
    this.router.navigate(['/bloodreceiver']);
  }

}

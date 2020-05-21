import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/dashboard']);
}

}

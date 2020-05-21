import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent}from'./login/login.component'
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { MedicalComponent } from './medical/medical.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { HealthComponent } from './health/health.component';
import { DisasterComponent } from './disaster/disaster.component';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { BloodBankReceiverComponent } from './blood-bank-receiver/blood-bank-receiver.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { QueriesComponent } from './queries/queries.component';
import { QueryAnsComponent } from './query-ans/query-ans.component';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
// import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'otp',component:OtpComponent},
  {path:'medical',component:MedicalComponent},
  {path:'bloodbank',component:BloodbankComponent},
  {path:'health',component:HealthComponent},
  {path:'disaster',component:DisasterComponent},
  {path:'blooddr',component:BloodBankComponent},
  {path:'doctSignup',component:DoctorsignupComponent},
  {path:'doctLogin',component:DoctorLoginComponent},
  {path:'doctDash',component:DoctorDashboardComponent},
  {path:'query',component:QueriesComponent},
  {path:'queryAns',component:QueryAnsComponent},
  {path:'findDoc',component:FindDoctorComponent},
  {path:'bloodreceiver',component:BloodBankReceiverComponent}
  // {path:'Schedule',component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

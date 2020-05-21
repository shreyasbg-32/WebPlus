import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
 
} from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedicalComponent } from './medical/medical.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { HealthComponent } from './health/health.component';
import { DisasterComponent } from './disaster/disaster.component';
import { FormsModule } from '@angular/forms';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { BloodBankReceiverComponent } from './blood-bank-receiver/blood-bank-receiver.component';
import { DoctorsignupComponent } from './doctorsignup/doctorsignup.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { QueriesComponent } from './queries/queries.component';
import { QueryAnsComponent } from './query-ans/query-ans.component';
import { DoctSearchPipe} from '../app/doctor-dashboard/docsearch.pipe';
import { FindDoctorComponent } from './find-doctor/find-doctor.component';
import { DoctDetailsPipe} from './find-doctor/docDetails.pipe';

// import { ScheduleComponent } from './schedule/schedule.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    DashboardComponent,
    MedicalComponent,
    BloodbankComponent,
    HealthComponent,
    DisasterComponent,
    BloodBankComponent,
    BloodBankReceiverComponent,
    DoctorsignupComponent,
    DoctorLoginComponent,
    DoctorDashboardComponent,
    QueriesComponent,
    QueryAnsComponent,
    DoctSearchPipe,
    FindDoctorComponent,
    DoctDetailsPipe
    // ScheduleComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

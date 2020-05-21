import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { doctor } from './doctor.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private DoctorInService: doctor[]=[];
  private DoctorUpdated=new Subject<doctor[]>();

  constructor(private http:HttpClient,private router:Router) { }

  getDoctor() {
    
    this.http
       .get<{  doctor: doctor[] }>(
        "http://localhost:1025/doct/get"
        

      )
      .subscribe(donorData => {
        this.DoctorInService = donorData.doctor;
        
        this.DoctorUpdated.next([...this.DoctorInService]);
        console.log("Next line can be tricky");
        
      });
  }


  userSignUp(name: String,
    Specialisation: String,
    addr: String,
    Email: String,
    mnum: Number,
    password: String){

      const doc: doctor = {  name: name,
        Specialisation:  Specialisation,
        addr:  addr,
        Email:  Email,
        mnum:  mnum,
        password:  password
      };

    this.http.post('http://localhost:1025/doct/signup',doc).subscribe((responseData) => {
      console.log("Inside signup service");
      console.log("Result :: " , responseData);
      this.DoctorInService.push(doc);
      this.DoctorUpdated.next([...this.DoctorInService]);
      if(responseData["status"] == "success"){
          
             this.router.navigate(['/doctDash'])

          
      }
    });

    
    

}
getPostUpdateListener(){
  return this.DoctorUpdated.asObservable();
}

}

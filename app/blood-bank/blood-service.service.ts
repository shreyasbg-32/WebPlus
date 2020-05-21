import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import { bloodDonor } from './blood.model';

@Injectable({
  providedIn: 'root'
})
export class BloodServiceService {
  // private DonorInService:bloodDonor[]=[];
  private DonorInService: bloodDonor[]=[];
  private DonorUpdated=new Subject<bloodDonor[]>();

  constructor(private http:HttpClient) { }

  getBlood() {
    
    this.http
       .get<{  bloodDonor: bloodDonor[] }>(
        "http://localhost:1025/blood/get"
        

      )
      .subscribe(donorData => {
        this.DonorInService = donorData.bloodDonor;
        
        this.DonorUpdated.next([...this.DonorInService]);
        console.log("Next line can be tricky");
        
      });
  }

  // bloodBankService(donor:any){
  //   this.http.post('http://localhost:1025/blood/donate',donor).subscribe((responseData) => {
  //     console.log("Hello from donor service");
  //     console.log("Result :: " , responseData);
  // });


  bloodBankService(username: String,mobile:  String, group:  String) 
    {
    const don: bloodDonor = {  username: username,
      mobile:  mobile,
      group:  group
     };
    this.http
      .post("http://localhost:1025/blood/donate", don)
      .subscribe((responseData) => {
         console.log(responseData);
        this.DonorInService.push(don);
        this.DonorUpdated.next([...this.DonorInService]);
      });
      console.log("Inside add-post");
  }
  getPostUpdateListener() {
    return this.DonorUpdated.asObservable();
  }



}



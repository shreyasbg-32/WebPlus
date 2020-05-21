import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enquiry } from './query.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private QueryInService: enquiry[]=[];
  private QueryUpdated=new Subject<enquiry[]>();


  constructor(private http:HttpClient) { }

  getQuery() {
    
    this.http
       .get<{  enquiry: enquiry[] }>(
        "http://localhost:1025/query/get"
        

      )
      .subscribe(donorData => {
        this.QueryInService = donorData.enquiry;
        
        this.QueryUpdated.next([...this.QueryInService]);
        console.log("Next line can be tricky");
        
      });
  }


enquireDoctor(query: String) 
    {
    const que: enquiry = {  query: query
      //Indentation compulsory
     };
    this.http
      .post("http://localhost:1025/query/ask", que)
      .subscribe((responseData) => {
         console.log(responseData);
        this.QueryInService.push(que);
        this.QueryUpdated.next([...this.QueryInService]);
      });
      console.log("Inside query -post");
  }

  getPostUpdateListener() {
    return this.QueryUpdated.asObservable();
  }
}

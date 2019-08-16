import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http,Response,Request,RequestOptions,Headers} from '@angular/http';

import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';
 import {HttpClientModule} from "@angular/common/http";
@Injectable()
export class SigninService {

  constructor(private http:Http) { }
   getJobs(){
   return this.http.get('https://jobsqared.herokuapp.com/jobs').map((resp:Response)=>resp.json)
      // Apologies. I am unable to fetch data from this json link.
      // If I try to get information from below link, I got that information.I don't know the problem is the given link or my side.
      //  return 'https://jsonplaceholder.typicode.com/todos/1';
      //I will prove myself if you give a chance to attend personal interview 
      //Thank you for reading my problem.


    }

  Sign(resumedata): Observable<Response> {
    let url=environment._userApiurl+'SignInAccess';
    let header = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: header });
    return this
        .http
        .post(url,JSON.stringify(resumedata),options)
        .map(
          (response:Response)=>{
            return response.json();
          })
        .catch(this.handleerror)
}
//  Use scound type requset
       //return this.http.post(url,JSON.stringify(resumedata),options)


handleerror(error:Response) {
  return Observable.throw(error.statusText);
}

}

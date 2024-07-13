import { Injectable } from '@angular/core';
import {HttpRequest,HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpclient:HttpClient) { }

  getData(): Observable<any>{
    return this.httpclient.get('http://localhost:8000/getData')
  }

  postData(signupdata:any){
    console.log(signupdata);
    
    return this.httpclient.post('http://localhost:8000/post',signupdata)
  }

  postLoginData(loginData:any){
    console.log(loginData);
    
    return this.httpclient.post('http://localhost:8000/login',loginData)
  }

  forgetPassword(email:any){
    return this.httpclient.post('http://localhost:8000/send-email',email)
  }

  resetPassword(resetData:any){
    return this.httpclient.post('http://localhost:8000/reset-password',resetData)
  }
}

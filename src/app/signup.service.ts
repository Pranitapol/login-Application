import { Injectable } from '@angular/core';
import {HttpRequest,HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpclient:HttpClient) { }

  getData(){
    this.httpclient.get('http://localhost:8000/getData').subscribe((res)=>{
      console.log(res);
      
    })
  }

  postData(signupdata:any){
    return this.httpclient.post('http://localhost:8000/post',signupdata)
  }

  postLoginData(loginData:any){
    return this.httpclient.post('http://localhost:8000/login',loginData)
  }
}

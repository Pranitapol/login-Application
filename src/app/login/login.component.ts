import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { SignupService } from '../signup.service';
import { ToastService } from '../toast.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErrorMessage:any;
  successMessage:any;

  loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@#$%^&*]).{8,10})')])
                                                                          
})
  constructor(private router:Router,private Service:SignupService,private toasterService:ToastService) { 
    this.toasterService.toasterMessage.subscribe((res:any)=>{
      this.successMessage=res;
      setTimeout(()=>{
        this.toasterService.dismissTOast()
      },4000)
    })
  }

  ngOnInit(): void {
  }
  onSignup(){
    console.log('click...');
    this.router.navigate(['signup'])
  }

  onSubmit(){
   this.Service.postLoginData(this.loginForm.value).subscribe(result=>{
    console.log(Object.values(result)[0]);
    this.toasterService.showToaster(Object.values(result)[0])
    setInterval(()=>{
      this.router.navigate(['home'])
    },2000)
   },
   error=>{
    // console.log(error.error.message);
    this.loginErrorMessage=error.error.message
   })
    
  }
  get loginFormControls(){
    return this.loginForm.controls
  }
}

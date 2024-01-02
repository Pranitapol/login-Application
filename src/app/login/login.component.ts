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
  passwordError:any;
  emailErr:any='';
  unknownErr:any;
  loading:boolean=false;

  loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@#$%^&*]).{8,10})')])
                                                                          
})
  constructor(private router:Router,private Service:SignupService,private toasterService:ToastService) { 
    this.toasterService.toasterMessage.subscribe((res:any)=>{
      this.successMessage=res;
      setTimeout(()=>{
        this.toasterService.dismissTOast();
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
    this.loading=true
    this.toasterService.showToaster(Object.values(result)[0])
    setInterval(()=>{
      this.router.navigate(['home'])
      this.loading=false;
    },2000)
   },
   error=>{
    this.loading=true;
   setTimeout(() => {
    this.loading=false;
    this.emailErr= error.error.emailErr
    this.passwordError = error.error.passwordErr
    this.loginErrorMessage= error.error.message
    this.unknownErr = error.statusText ? 'Please connect to server':''

    this.emailErr?this.loginForm.controls.email.setErrors({emailErr:this.emailErr}):'';
    this.passwordError? this.loginForm.controls.password.setErrors({passwordErr:this.passwordError}):'';
  
   }, 2000);
    console.log(error,error.error.emailErr);
  //   this.emailErr= error.error.emailErr
  //   this.passwordError = error.error.passwordErr
  //   this.loginErrorMessage= error.error.message
  //   this.unknownErr = error.statusText ? 'Please connect to server':''

  //   this.emailErr?this.loginForm.controls.email.setErrors({emailErr:this.emailErr}):'';
  //   this.passwordError? this.loginForm.controls.password.setErrors({passwordErr:this.passwordError}):'';
   })
    
  }

  get loginFormControls(){
    return this.loginForm.controls
  }
 
}

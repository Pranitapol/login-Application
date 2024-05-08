import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
   forgetPasswordForm
   invalidEmailError: any
   mailSentMessage: any

  constructor(private router:Router,private signupService:SignupService) {
    this.forgetPasswordForm= new FormGroup({
      email: new FormControl('',[Validators.email,Validators.required])
   })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.forgetPasswordForm.value);
    this.signupService.forgetPassword(this.forgetPasswordForm.value).subscribe((result)=>{
      console.log(result);
      this.mailSentMessage=result;
    },
  (error)=>{
    console.log(error.error.message);
    this.invalidEmailError=error.error.message
    this.invalidEmailError?this.forgetPasswordForm.controls.email.setErrors({emailErr:this.invalidEmailError}):''
  })
  }
 onCancel(){
 this.router.navigateByUrl('/')
  
 }
  onClose(){
    this.mailSentMessage=null
    this.forgetPasswordForm.reset()
  }
}

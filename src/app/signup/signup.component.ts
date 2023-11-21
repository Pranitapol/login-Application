import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { passwordMismatch } from '../validators/passwordMismatch';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm=new FormGroup({
    username:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
    confirmPassword:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
    
 
  },[passwordMismatch('password','confirmPassword')])
  constructor(private signupservice:SignupService) { }

  ngOnInit(): void {
    this.signupservice.getData()
  }
  get registerFormControls(){
    return this.signupForm.controls
  }

  onSubmit(){
   // e.preventDefault()
    console.log(this.signupForm.value);
    this.signupservice.postData(this.signupForm.value)
  }
}

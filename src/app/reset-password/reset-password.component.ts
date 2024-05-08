import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { passwordMismatch } from 'src/app/validators/passwordMismatch';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  error:String | null | undefined;

  resetPasswordForm=new FormGroup({
    password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
    confirmPassword:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
  },passwordMismatch('password','confirmPassword'))
  constructor(public activatedRoute:ActivatedRoute) {
   
   }

  ngOnInit(): void {
   const token= this.activatedRoute.snapshot.params['token'];
   console.log('token',token);
   
  }

  onSubmit():void{
    console.log('form values',this.resetPasswordForm.value);
    
  }
  onClear():void{
    this.resetPasswordForm.reset()
  }
}

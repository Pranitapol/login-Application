import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm=new FormGroup({
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[@#$%^&*]).{8,10})')])
                                                                          
})
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSignup(){
    console.log('click...');
      this.router.navigate(['signup'])
  }

  onLogin(){
    console.log('logging..',this.loginForm.value);
     // this.router.navigate(['login'])
  }
  get loginFormControls(){
    return this.loginForm.controls
  }
}

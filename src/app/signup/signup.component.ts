import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { passwordMismatch } from '../validators/passwordMismatch';
import { SignupService } from '../signup.service';
import {MatDialogModule,MatDialog} from '@angular/material/dialog'
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Router } from '@angular/router';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
error:any;
successMessage:any;

  signupForm=new FormGroup({
    username:new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
    confirmPassword:new FormControl('',[Validators.required,Validators.pattern('((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})')]),
    
 
  },[passwordMismatch('password','confirmPassword')])
  constructor(private signupservice:SignupService,private toastService:ToastService,private router:Router) {
    this.toastService.toasterMessage.subscribe((res:any)=>{
      console.log(res);
      this.successMessage=res;
      setTimeout(() => {
        this.toastService.dismissTOast()
        
      }, 4000);
    })
    
   }

  ngOnInit(): void {
    this.signupservice.getData()    
  }
  get registerFormControls(){
    return this.signupForm.controls
  }

  onSubmit(){
   // e.preventDefault()
    console.log(this.signupForm.value);
    this.signupservice.postData(this.signupForm.value).subscribe(res=>{
      console.log(res);

      this.toastService.showToaster('signup successful...')
      setInterval(()=>{
        this.router.navigate(['home'])
      },4000)

    },
    error=>{
      console.log(error);
      this.error=error.error.message
      console.log(this.error);
      //alert(this.error)
      // :this.openDialog()
    }
    )
  }

 
}

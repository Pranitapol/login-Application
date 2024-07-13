import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { passwordMismatch } from 'src/app/validators/passwordMismatch';
import { SignupService } from '../signup.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  errorMessage: String | null | undefined;
  successMessage: string | undefined;
  token: String = '';
  id: any;
  loading: boolean | undefined;

  resetPasswordForm = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})'
        ),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[@#$*^&]).{8,10})'
        ),
      ]),
    },
    passwordMismatch('password', 'confirmPassword')
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: SignupService,
    private router: Router,
    private toasterService: ToastService
  ) {
    this.toasterService.toasterMessage.subscribe((res: any) => {
      this.successMessage = res;
      setTimeout(() => {
        this.toasterService.dismissTOast();
      }, 4000);
    });
  }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.params['token'];
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log('token', this.token, this.id);
  }

  onSubmit(): void {
    console.log('form values', this.resetPasswordForm.value);
    this.service
      .resetPassword({
        formData: this.resetPasswordForm.value,
        token: this.token,
        id: this.id,
      })
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.loading = true;
          this.toasterService.showToaster(response.message);
          setInterval(() => {
            this.router.navigate(['']);
            this.loading = false;
          }, 700);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage = err.error.message;
          setTimeout(() => {
            this.router.navigate(['forgetPassword']);
          }, 2000);
        },
      });
  }
  onClear(): void {
    this.resetPasswordForm.reset();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
 
    {path:'signup',component:SignupComponent},
    {path:'',component:LoginComponent},
    {path:'home',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  //  routes=[
  //   {path:'',component:AppComponent},
  //   {path:'/signup',component:SignupComponent},
  //   {path:'login',component:LoginComponent}
  // ]
}

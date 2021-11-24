import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMainComponent } from './login-main/login-main.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';



@NgModule({
  declarations: [
    LoginMainComponent,
    LoginFooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginMainComponent
  ]
})
export class LoginPageModule {  }

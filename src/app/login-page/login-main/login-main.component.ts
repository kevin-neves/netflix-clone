import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  knowMore = false
  loginForm = this.fb.group({
    login: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  }) 
 
  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
   
  }

  showKnowMore() {
    if (this.knowMore === true) this.knowMore = false
    else this.knowMore = true
    console.log(this.knowMore)
  }

  login() {
    this.appService.login(this.loginForm.get('login')?.value,
     this.loginForm.get('password')?.value)
    console.log(this.appService.loginData)
    console.log(this.loginForm.get('login')?.value)
  }
}

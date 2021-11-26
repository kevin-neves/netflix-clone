import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppService, UserInterface } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { phoneEmail } from 'src/app/validators/phone-email-validator.directive';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  loading: boolean = false
  knowMore: boolean = false
  regex: string = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"

  loginForm = this.fb.group({
    login: ["",  Validators.compose([Validators.required, phoneEmail()])],
    password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(70)]]
  }) 
 
  constructor(private fb: FormBuilder, private appService: AppService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.isAlreadyLogged()
  }

  showKnowMore() {
    if (this.knowMore === true) this.knowMore = false
    else this.knowMore = true
  }

  login() {
    this.loading = true
    let email = this.loginForm.get('login')?.value
    let password = this.loginForm.get('password')?.value
    this.appService.login(email, password).subscribe((data: UserInterface) => {
      localStorage.setItem("token", data.token)
      this.loading = false
      if(!this.loading) {
        this.router.navigateByUrl("users", { state: data})
      }
    })
  }

  isAlreadyLogged() {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['movies', 1]);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { AppService, UserInterface } from 'src/app/app.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  loading: boolean = false
  knowMore = false
  loginForm = this.fb.group({
    login: ["",  Validators.compose([Validators.required, Validators.email])],
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

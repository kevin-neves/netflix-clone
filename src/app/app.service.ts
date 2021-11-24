import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loginData: any = null

  constructor(private http: HttpClient) { }
  endPoint: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/'
  login(email: string, password: string) {
    this.http.post<any>(this.endPoint + 'login', null)
    .subscribe(data => {
      this.loginData = data.error
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface UserInterface {
  "token": string,
  "users": [{
    "id": number,
    "name": string,
    "avatarUrl":string 
  },
   {
    "id": number,
    "name": string,
    "avatarUrl":string 
  }]
}


@Injectable({
  providedIn: 'root'
})
export class AppService {
 
  loginUrl: string = ""

  constructor(private http: HttpClient) { }
  endPoint: string = 'https://private-3923c4-santandercoders809.apiary-mock.com/'

  // login(email: string, password: string): Observable<UserInterface> {
  //   return this.http.post<UserInterface>(this.endPoint + 'login', {email,password},
  //    {responseType: 'json'}) as unknown as Observable<UserInterface>
  // }

  login(email: string, senha: string): Observable<UserInterface> {
    this.loginUrl = 'https://private-3923c4-santandercoders809.apiary-mock.com/login'
    return this.http.post<UserInterface>(this.loginUrl, {email, senha})
  }

}



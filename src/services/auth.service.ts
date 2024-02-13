import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
//    "email": "eve.holt@reqres.in",
//"password": "cityslicka"
export class AuthService {
  private _loginUrl = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) {}

  loggedInUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }
}

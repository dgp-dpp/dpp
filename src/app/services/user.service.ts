import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private cookies: CookieService) {

  }
  login(user: any): Observable<any> {
    let cabecera = new HttpHeaders({
     "Content-Type": "application/json",
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Credentials": "true"
    });
   // return this.http.get("http://localhost:45186/api/Usuario/", usuario);
   return this.http.post("https://reqres.in/api/login", user,{ headers: cabecera });
  }
  register(user: any): Observable<any> {
   return this.http.post("https://reqres.in/api/register", user);
 }
 setToken(token: string) {
   this.cookies.set("token", token);
 }
 getToken() {
   return this.cookies.get("token");
 }

}

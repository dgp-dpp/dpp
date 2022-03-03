import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http:HttpClient)
  {
    this.myAppUrl = 'http://172.31.141.176:8088';
    this.myApiUrl = '/BackEndApi/api/Login'

   }
   login(usuario: any): Observable<any>
   {
     return this.http.post(this.myAppUrl+this.myApiUrl,usuario);

   }
}

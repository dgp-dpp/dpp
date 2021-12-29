import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  // private myAppUrl = 'http://localhost:8080/';
  private myAppUrl = 'http://localhost:45186/';
  
  private myApiUrl = 'api/Usuario/'

  constructor(private http: HttpClient) { }

  getListUsuario(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveUsuario(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, usuario);
  }
}

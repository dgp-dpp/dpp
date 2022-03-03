import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  // private myAppUrl = 'http://172.31.141.176:8080';  //productivo
  // private myApiUrl = '/WebApi/api/Usuario'

private myAppUrl = 'http://172.31.141.176:8088';
private myApiUrl = '/BackEndApi/api/Usuario'

  constructor(private http: HttpClient) { }


  getListUsuario(): Observable<any> {
    // let cabecera = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Credentials": "true"
    //  });
    // return this.http.get(this.myAppUrl + this.myApiUrl,{ headers: cabecera });
    return this.http.get(this.myAppUrl + this.myApiUrl).pipe(tap((data) => {
      console.log(data)
    }));
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + "/"+id)
  }

  saveUsuario(usuario: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  updateUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl +"/" +id, usuario);
  }
}

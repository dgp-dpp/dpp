import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {
  private myAppUrl = 'http://172.31.141.191:8088';
  private myApiUrl = '/BackEndApi/api/Dependencia'

  constructor(private http:HttpClient) { }
  GetListDep(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl+"/GetListDep").pipe
    (
      tap((data) => {
      console.log(data)
    })
    );

  }
}

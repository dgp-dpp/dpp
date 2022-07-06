import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatPpService {
  private myAppUrl = 'http://172.31.141.191:8088';
  private myApiUrl = '/BackEndApi/api/Pp'

  constructor(private http:HttpClient) { }
  getListPp(): Observable<any> {

    return this.http.get(this.myAppUrl + this.myApiUrl+"/GetListPp").pipe
    (
      tap((data) => {
      console.log(data)
    })
    );
  }
}

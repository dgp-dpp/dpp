import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UrlApi} from '../helpers/urlapi'

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {
  private myAppUrl = UrlApi;
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

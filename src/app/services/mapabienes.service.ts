import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UrlApi } from '../helpers/urlapi';

@Injectable({
  providedIn: 'root'
})
export class MapabienesService {

  private myAppUrl = UrlApi;
   private myApiUrl = '/BackEndApi/api/Marcador'
   baseURL: string;
  constructor(private httpClient: HttpClient) {
    // this.baseURL="https://restcountries.com/v2/regionalbloc/eu";

  }
  getAll(): Observable<any>{
    return this.httpClient.get<any>(this.myAppUrl+this.myApiUrl+"/GetListMarcador")
     .pipe(tap((data) => {
       console.log(data)
    }));
  }
}

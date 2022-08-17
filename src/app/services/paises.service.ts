import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap  } from 'rxjs';
import { UrlApi } from '../helpers/urlapi';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private myAppUrl = UrlApi;
   private myApiUrl = '/BackEndApi/api/Pais'
   baseURL: string;
  constructor(private httpClient: HttpClient) {
    // this.baseURL="https://restcountries.com/v2/regionalbloc/eu";

  }
  getAll(): Observable<any>{
    return this.httpClient.get<any>(this.myAppUrl+this.myApiUrl+"/GetListPais")
     .pipe(tap((data) => {
       console.log(data)
    }));
  }
}

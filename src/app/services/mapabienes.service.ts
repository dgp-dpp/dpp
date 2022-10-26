import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UrlApi } from '../helpers/urlapi';

@Injectable({
  providedIn: 'root'
})
export class MapabienesService {

  private myAppUrl = UrlApi;
   private myApiUrlUM = '/BackEndApi/api/Marcador';
   private myApiUrlUC = '/BackEndApi/api/UnidadesCapacitacion';
   baseURL: string;
  constructor(private httpClient: HttpClient) {
    // this.baseURL="https://restcountries.com/v2/regionalbloc/eu";

  }
  getUnidadesMedicas(): Observable<any>{
    return this.httpClient.get<any>(this.myAppUrl+this.myApiUrlUM+"/GetListMarcador")
     .pipe(tap((data) => {
       console.log(data)
    }));
  }
  getUnidadesCapacitacionService(): Observable<any>{
    return this.httpClient.get<any>(this.myAppUrl+this.myApiUrlUC+"/GetListUnidadesCapacitacion")
     .pipe(tap((data) => {
       console.log(data)
    }));
  }
}

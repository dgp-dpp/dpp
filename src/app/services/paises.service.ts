import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL="https://restcountries.com/v2/regionalbloc/eu";


  }
  getAll(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseURL);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrecePlaneacionService {


private myAppUrl = 'http://172.31.141.176:8088';
private myApiUrl = '/BackEndApi/api/Crece'

  constructor(private http: HttpClient) { }


  getListCrece(): Observable<any> {
    // let cabecera = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Credentials": "true"
    //  });
    // return this.http.get(this.myAppUrl + this.myApiUrl,{ headers: cabecera });
    return this.http.get(this.myAppUrl + this.myApiUrl+"/GetListCreces").pipe(tap((data) => {
      console.log(data)
    }));
  }

  deleteCrece(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + "/"+id)
  }

  saveCrece(crece: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, crece);
  }

  updateCrece(id: number, crece: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl +"/" +id, crece);
  }
}

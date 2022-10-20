import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UrlApi} from '../helpers/urlapi'

@Injectable({
  providedIn: 'root'
})
export class CrecePlaneacionService {


private myAppUrl = UrlApi;
private myApiUrl = '/BackEndApi/api/Crece'

  constructor(private http: HttpClient) { }


  getListCrece(): Observable<any> {

    return this.http.get(this.myAppUrl + this.myApiUrl+"/GetListCreces").pipe(tap((data) => {
      console.log(data)
    }));
  }

  deleteCrece(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + "/"+id)
  }

  saveCrece(crece: any): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl, crece,{responseType: 'text'}).pipe(tap((data) => {
      console.log(data)
    }));
  }

  updateCrece(id: number, crece: any): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl +"/" +id, crece);
  }
}

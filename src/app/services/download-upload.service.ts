import { HttpClient, HttpEvent, HttpResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadUploadService {
  private baseApiUrl = "http://172.31.141.176:8088/BackEndApi/api/File";
  private apiDownloadUrl = "http://172.31.141.176:8088/BackEndApi/api/File/download";
  private apiUploadUrl = "http://172.31.141.176:8088/BackEndApi/api/File/upload";
  private ApiFileUrl = "http://172.31.141.176:8088/BackEndApi/api/File";
  constructor(private httpClient: HttpClient) {
   }
   public downloadFile(file:string):Observable<HttpEvent<Blob>>
   {
     return this.httpClient.request(new HttpRequest(
       'GET',
       `${this.apiDownloadUrl}?file=${file}`,
       null,
       {
         reportProgress:true,
         responseType: 'blob'
       }));

   }

   public uploadFile(file: Blob): Observable<HttpEvent<void>>
   {
     const formData = new FormData();
     formData.append('file',file);
     console.log("Servicio subir");
     console.log("this.apiUploadUrl");
     return this.httpClient.request(new HttpRequest(
      'POST',
      this.apiUploadUrl,
      formData,{
        reportProgress:true
      }
     ));
   }

public getFiles(): Observable<any>{
  return this.httpClient.get(this.ApiFileUrl).pipe(tap((data) => {
    console.log(data)
  }));
}

}

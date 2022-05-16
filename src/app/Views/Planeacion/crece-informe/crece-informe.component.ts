import { HttpEventType } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProgressStatus, ProgressStatus,ProgressStatusEnum } from 'src/app/models/progress-status';
import { DownloadUploadService } from 'src/app/services/download-upload.service';

@Component({
  selector: 'app-crece-informe',
  templateUrl: './crece-informe.component.html',
  styleUrls: ['./crece-informe.component.css']
})
export class CreceInformeComponent implements OnInit {



 public showProgress!:boolean;
 public files:any[]=[];
 public filesInDownload!:string;
 public percentage?:number;
 public showDownloadError!: boolean;
 public showUploadError!: boolean;

  constructor(private service: DownloadUploadService)
  {

   }





  ngOnInit(): void {
    this.getFiles();
  }
   getFiles(){
    this.service.getFiles().subscribe(
      _data=>{
        this.files = _data.$values
        console.log(_data.$values);
      },
    error => {
      console.log(error);
    }
    );
  }

  public downloadStatus(event: IProgressStatus){
     switch(event.status){
       case ProgressStatusEnum.START:
         this.showDownloadError = false;
         break;
       case ProgressStatusEnum.IN_PROGRESS:
         this.showProgress = true;
         this.percentage = event.percentage;
         break;
       case ProgressStatusEnum.COMPLETE:
         this.showProgress =false;
         break;
       case ProgressStatusEnum.ERROR:
         this.showProgress =false;
         this.showDownloadError =true;
         break;
     }
  }

  public uploadStatus(event: IProgressStatus){
    switch(event.status){
      case ProgressStatusEnum.START:
        this.showUploadError = false;
        break;
      case ProgressStatusEnum.IN_PROGRESS:
        this.showProgress = true;
        this.percentage = event.percentage;
        break;
      case ProgressStatusEnum.COMPLETE:
        this.showProgress= false;
        this.getFiles();
        break;
      case ProgressStatusEnum.ERROR:
        this.showProgress=false;
        this.showUploadError = true;
        break;
    }
  }


}

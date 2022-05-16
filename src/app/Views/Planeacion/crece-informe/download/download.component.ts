import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProgressStatus, ProgressStatusEnum } from 'src/app/models/progress-status';
import { DownloadUploadService } from 'src/app/services/download-upload.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
 @Input() public disabled!: boolean;
 @Input() public fileName!: string;
 @Output() public downloadStatus: EventEmitter<IProgressStatus>;

  constructor(private service: DownloadUploadService) {
    this.downloadStatus =new EventEmitter<IProgressStatus>();
   }
   public download()
  {
    this.downloadStatus.emit({status: ProgressStatusEnum.START});
    this.service.downloadFile(this.fileName).subscribe(
      data=>{
        switch(data.type){
          case HttpEventType.DownloadProgress:
            this.downloadStatus.emit({status: ProgressStatusEnum.IN_PROGRESS, percentage:Math.round(data.loaded/data.total)*100});
            break;
          case HttpEventType.Response:
            this.downloadStatus.emit({status: ProgressStatusEnum.COMPLETE});
            const downloadedFile = new Blob([data.body!],{type: data.body!.type});
            const a = document.createElement('a');
            a.setAttribute('style','display:none;');
            document.body.appendChild(a);
            a.download =this.fileName;
            a.href = URL.createObjectURL(downloadedFile);
            a.target = '_blank';
            a.click();
            document.body.removeChild(a);
            break;

        }
        console.log(data)
      },
     error =>
     {
       this.downloadStatus.emit({status: ProgressStatusEnum.ERROR});
     }
    );
  }

  ngOnInit(): void {
  }

}

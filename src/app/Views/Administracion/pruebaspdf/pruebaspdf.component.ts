import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

import {jsPDF} from 'jspdf';


@Component({
  selector: 'app-pruebaspdf',
  templateUrl: './pruebaspdf.component.html',
  styleUrls: ['./pruebaspdf.component.css']
})
export class PruebaspdfComponent implements OnInit {


  @ViewChild('htmlData') htmlData:ElementRef | undefined
  USERS =[
    {
      "id":1,
      "name": "Carlos Alberto",
      "email": "cabarron@algo.com",
      "phone": "567-3022-323",
    },
    {
      "id":2,
      "name": "Juan Lopez",
      "email": "jlopez@algo.com",
      "phone": "567-3022-323",
    },
    {
      "id":3,
      "name": "Maria Garcia",
      "email": "mgarcia@algo.com",
      "phone": "567-3022-323",
    },
    {
      "id":5,
      "name": "Ana Juarez",
      "email": "ajuarez@algo.com",
      "phone": "567-3022-323",
    }
  ]

  constructor() {

  }

  ngOnInit(): void {
  }
  public openPDF():void{
    let DATA = document.getElementById('htmlData')!;

    html2canvas(DATA).then(canvas => {
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;

      const FILEURI =canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm' , 'a4');
      let position = 0;
      PDF.addImage(FILEURI,'PNG',0,position,fileWidth,fileHeight)
      PDF.save('reporte-de-usuarios.pdf');
    }
      );

  }

  public openPDF2():void{
    const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
  }
}

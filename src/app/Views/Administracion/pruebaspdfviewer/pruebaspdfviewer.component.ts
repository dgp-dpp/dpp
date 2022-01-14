import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  PDFProgressData,
  PDFDocumentProxy,
  PDFSource
} from '../../../pdf-viewer/pdf-viewer.module';

import { PdfViewerComponent } from '../../../pdf-viewer/pdf-viewer.component';
@Component({
  selector: 'app-pruebaspdfviewer',
  templateUrl: './pruebaspdfviewer.component.html',
  styleUrls: ['./pruebaspdfviewer.component.css']
})
export class PruebaspdfviewerComponent implements OnInit {
  pdfSrc: PDFSource = '../../../../assets/pdf/pdf-test.pdf';
  //pdfSrc: string | PDFSource | ArrayBuffer  = '../../../../assets/pdf/pdf-test.pdf';
  

  error: any;
  page = 1;
  rotation = 0;
  zoom = 1.0;
  zoomScale = 'page-width';
  originalSize = false;
  pdf: any;
  renderText = true;
  progressData: PDFProgressData | undefined;
  isLoaded = false;
  stickToPage = false;
  showAll = true;
  autoresize = true;
  fitToPage = false;
  outline: any[] | undefined;
  isOutlineShown = false;
  pdfQuery = '';
  mobile = false;



  @ViewChild(PdfViewerComponent)
  private pdfComponent: PdfViewerComponent | undefined;

  ngOnInit(): void {
    if (window.screen.width <= 768) {
      this.mobile = true;
    }
  }
  // Load pdf
  loadPdf() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/assets/pdf-test.pdf', true);
    xhr.responseType = 'blob';

    xhr.onload = (e: any) => {
      console.log(xhr);
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: 'application/pdf' });
        this.pdfSrc = URL.createObjectURL(blob);
      }
    };

    xhr.send();
  }
  /**
     * Render PDF preview on selecting file
     */
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }
  /**
     * Get pdf information after it's loaded
     * @param pdf pdf document proxy
     */
  afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;

    this.loadOutline();
  }

  /**
   * Get outline
   */
  loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  /**
   * Handle error callback
   *
   * @param error error message
   */
  onError(error: any) {
    this.error = error; // set error

    if (error.name === 'PasswordException') {
      const password = prompt(
        'This document is password protected. Enter the password:'
      );

      if (password) {
        this.error = null;
        this.setPassword(password);
      }
    }
  }
  setPassword(password: string) {
    throw new Error('Method not implemented.');
  }

  // setPassword(password: string) {
  //   let newSrc;

  //   if (this.pdfSrc instanceof ArrayBuffer) {
  //     newSrc = { data: this.pdfSrc };
  //   } else if (typeof this.pdfSrc === 'string') {
  //     newSrc = { url: this.pdfSrc };
  //   } else {
  //     newSrc = { ...this.pdfSrc };
  //   }

  //   newSrc.password = password;

  //   this.pdfSrc = newSrc;
  // }

  /**
   * Pdf loading progress callback
   * @param progressData pdf progress data
   */
  onProgress(progressData: PDFProgressData) {
    console.log(progressData);
    this.progressData = progressData;

    this.isLoaded = progressData.loaded >= progressData.total;
    this.error = null; // clear error
  }

  getInt(value: number): number {
    return Math.round(value);
  }

  /**
   * Navigate to destination
   * @param destination pdf navigate to
   */
  
  // navigateTo(destination: any) {
  //   this.pdfComponent.pdfLinkService.navigateTo(destination);
  // }

  /**
   * Scroll view
   */
  scrollToPage() {
    this.pdfComponent!.pdfViewer.scrollPageIntoView({
      pageNumber: 3
    });
  }

  /**
   * Page rendered callback, which is called when a page is rendered (called multiple times)
   *
   * @param e custom event
   */
  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  /**
   * Page initialized callback.
   *
   * @param {CustomEvent} e
   */
  pageInitialized(e: CustomEvent) {
    console.log('(page-initialized)', e);
  }

  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.pdfQuery) {
      this.pdfQuery = newQuery;
      this.pdfComponent!.pdfFindController.executeCommand('find', {
        query: this.pdfQuery,
        highlightAll: true
      });
    } else {
      this.pdfComponent!.pdfFindController.executeCommand('findagain', {
        query: this.pdfQuery,
        highlightAll: true
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    if (event.target.innerWidth <= 768)
      this.mobile = true;
    else
      this.mobile = false;

  }
}

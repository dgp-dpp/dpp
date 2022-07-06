import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { DataResult, orderBy, SortDescriptor, process, State } from '@progress/kendo-data-query';
import { ToastrService } from 'ngx-toastr';
import { map, Observable, of } from 'rxjs';
import { Links } from 'src/app/models/links.model';
import { LinksService } from 'src/app/services/links.service';
import { DependenciasService } from 'src/app/services/dependencias.service';
import { InscripcionesService } from 'src/app/services/inscripciones.service';


@Component({
  selector: 'app-prueba-firebase',
  templateUrl: './prueba-firebase.component.html',
  styleUrls: ['./prueba-firebase.component.css']
})
export class PruebaFirebaseComponent implements OnInit {
  public formGroup: FormGroup;
  private editedRowIndex: number;
  public view: Observable<any>;

    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: string = null;
    public gridView: any[];
    public mySelection: string[] = [];

  constructor(
    private _linkServices: LinksService,
  ) {
    this.view = this._linkServices.getLinks();

  }



  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10,
  };
  public addHandler({sender}) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
          clavepp: new FormControl('', Validators.required),
          dp: new FormControl('', Validators.required),
          fecha: new FormControl('', Validators.required),
          linkpdf: new FormControl('', Validators.required),
          linkdoc: new FormControl('', { updateOn: 'submit' }),
      });

      sender.addRow(this.formGroup);
  }

  public editHandler({sender, rowIndex, dataItem}) {
      this.closeEditor(sender);

      this.formGroup = new FormGroup({
          clavepp: new FormControl(dataItem.clavepp , Validators.required),
          dp: new FormControl(dataItem.dp, Validators.required),
          fecha: new FormControl(dataItem.fecha, Validators.required),
          linkpdf: new FormControl(dataItem.linkpdf, Validators.required),
          linkdoc: new FormControl(dataItem.linkdoc, Validators.required),
      });

      this.editedRowIndex = rowIndex;

      sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({sender, rowIndex}) {
      this.closeEditor(sender, rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew, dataItem}) {
      const link = formGroup.value;
      link.key = dataItem.key;

      this._linkServices.createLinks(link, isNew);

      sender.closeRow(rowIndex);
  }

  public removeHandler({dataItem}) {
      this._linkServices.removeLinks(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
  }

  public resetData() {
    this._linkServices.resetData();
  }



  ngOnInit(): void {

  }

}

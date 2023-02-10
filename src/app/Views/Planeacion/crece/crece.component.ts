import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SortDescriptor, State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { PmcService } from 'src/app/services/pmc.service';
import {
  ButtonSize,
  ButtonThemeColor,
} from "@progress/kendo-angular-buttons";

@Component({
  selector: 'app-crece',
  templateUrl: './crece.component.html',
  styleUrls: ['./crece.component.css']
})


export class CreceComponent {

  public formGroup: FormGroup;
  private editedRowIndex: number;
  public view: Observable<any>;

  public themeColor: ButtonThemeColor = "error";

    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: string = null;
    public gridView: any[];
    public mySelection: string[] = [];

  constructor( private _PmcService: PmcService, ) {
    this.view = this._PmcService.getPmc();
    }

   public gridState: State = {
    sort: [],
    skip: 0,
    take: 10,
  };
  public addHandler({sender}) {
      this.closeEditor(sender);




      this.formGroup = new FormGroup({
           id: new FormControl('', Validators.required),
          eje: new FormControl('', Validators.required),
          responsablePrograma: new FormControl('', Validators.required),
          clavePrograma: new FormControl('', Validators.required),
          nombrePrograma: new FormControl('', { updateOn: 'submit' }),
          origen: new FormControl('', Validators.required),
          emisor: new FormControl('', Validators.required),
          recomendacion: new FormControl('', Validators.required),
          descripcionOrigen: new FormControl('', Validators.required),
          claveAccion: new FormControl('', Validators.required),
          accion: new FormControl('', Validators.required),
          viaAtencion: new FormControl('', Validators.required),
          estatusAtencion: new FormControl('', Validators.required),
      });

      sender.addRow(this.formGroup);
  }

  public editHandler({sender, rowIndex, dataItem}) {
      this.closeEditor(sender);




      this.formGroup = new FormGroup({
        eje: new FormControl(dataItem.eje, Validators.required),
        responsablePrograma: new FormControl(dataItem.responsablePrograma, Validators.required),
        clavePrograma: new FormControl(dataItem.clavePrograma, Validators.required),
        nombrePrograma: new FormControl(dataItem.nombrePrograma, { updateOn: 'submit' }),
        origen: new FormControl(dataItem.origen, Validators.required),
        emisor: new FormControl(dataItem.emisor, Validators.required),
        recomendacion: new FormControl(dataItem.recomendacion, Validators.required),
        descripcionOrigen: new FormControl(dataItem.descripcionOrigen, Validators.required),
        claveAccion: new FormControl(dataItem.claveAccion, Validators.required),
        accion: new FormControl(dataItem.accion, Validators.required),
        viaAtencion: new FormControl(dataItem.viaAtencion, Validators.required),
        estatusAtencion: new FormControl(dataItem.estatusAtencion, Validators.required),
    });

      this.editedRowIndex = rowIndex;

      sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({sender, rowIndex}) {
      this.closeEditor(sender, rowIndex);
  }

  public saveHandler({sender, rowIndex, formGroup, isNew, dataItem}) {
      const Pmc = formGroup.value;
      Pmc.key = dataItem.key;

      this._PmcService.createPmc(Pmc, isNew);

      sender.closeRow(rowIndex);
  }

  public removeHandler({dataItem}) {
      this._PmcService.removePmc(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
      grid.closeRow(rowIndex);
      this.editedRowIndex = undefined;
      this.formGroup = undefined;
  }

  public resetData() {
    this._PmcService.resetData();
  }



}

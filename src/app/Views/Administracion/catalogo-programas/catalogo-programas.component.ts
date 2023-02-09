import { Component, Input, OnInit, Pipe, PipeTransform, ViewChild, ViewEncapsulation } from '@angular/core';
import { ejes } from '../../../models/data-eje';
import { pp } from '../../../models/data.pp';
import {catpp} from '../../../models/data-cat-pp';
import { ColumnMenuSettings, DataBindingDirective, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { PpService } from "../../../services/pp.service";
import { Observable } from "rxjs";
import { process } from '@progress/kendo-data-query';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-catalogo-programas',
  templateUrl: './catalogo-programas.component.html',
  styleUrls: ['./catalogo-programas.component.css'],
  providers: [PpService]
})

export class CatalogoProgramasComponent implements OnInit{
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  @Input() public value: any;



  public opened = false;
  public windowTop = 100;
  public windowLeft = 250;

  public onClick(): void {
    alert(this.gridItems);
  }

  public toggle(isOpened: boolean): void {
    this.opened = isOpened;
  }



  public pdfURL;

  // Varaiable para establcer  el filtro
  public gridData: any[] = pp;
  public gridView: any[];
  public mySelection: string[] = [];
  //dropdownlist
  public dropDownItems = catpp;
  public defaultItem = { PP: "Filtro por PP", IdPP: null };
  //Grid
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = null;

  public menuSettings: ColumnMenuSettings = {
    lock: true,
    stick: true,
    setColumnPosition: { expanded: true },
  };


  constructor(private service: PpService) {
    this.loadGridItems();
    this.allData = this.allData.bind(this);
  }


   public pageChange(event: PageChangeEvent): void {
     this.skip = event.skip;
    this.loadGridItems();
   }
  private loadGridItems(): void {
    this.gridItems = this.service.getPPs(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }
  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }
  // DropDownList para filtrar Grid por categoría de producto
  public handleFilterChange(item: {
    IdPP: number | null;
    PP: string;
  }): void {
    this.filterTerm = item.IdPP
    this.skip = 0;
    this.loadGridItems();
  }
  ngOnInit(): void {
    this.gridView = this.gridData;

  }
  //pdf
  public onFilter(inputValue: string): void {
    this.gridView = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: "Eje",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "PP",
            operator: "contains",
            value: inputValue,
          },
          {
            field: "NombrePP",
            operator: "contains",
            value: inputValue,
          },
        ],
      },
    }).data;
    this.dataBinding.skip = 0;
  }
  //excelModule
  public allData(): ExcelExportData {
    const result: ExcelExportData = {
      data: process(pp, {
        sort: [{ field: "PP", dir: "asc" }],
      }).data,
    };
    return result;
  }
}

import { Component, OnInit } from '@angular/core';
import {ejes} from '../../../models/data-eje'
import {pp} from '../../../models/data.pp'
import { DataBindingDirective, GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { PpService  } from "../../../services/pp.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-catalogo-programas',
  templateUrl: './catalogo-programas.component.html',
  styleUrls: ['./catalogo-programas.component.css'],
  providers: [PpService]
})
//@ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
export class CatalogoProgramasComponent implements OnInit {
  public gridData: any[] = pp;
  public gridView: any[];

  public dropDownItems = ejes;
  public defaultItem = { Eje: "Filtro por Eje", IdEje: null };
  
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = null;
  dataBinding: any;

  constructor(private service: PpService) {
    this.loadGridItems();
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
  Eje: string;
  IdEje: number | null;
}): void {
  this.filterTerm = item.IdEje
  this.skip = 0;
  this.loadGridItems();
}
ngOnInit(): void {
  this.gridView = this.gridData;
}
//pdf
// public onFilter(inputValue: string): void {
//   this.gridView = process(this.gridData, {
//     filter: {
//       logic: "or",
//       filters: [
//         {
//           field: "Eje",
//           operator: "contains",
//           value: inputValue,
//         },
//         {
//           field: "PP",
//           operator: "contains",
//           value: inputValue,
//         },
//         {
//           field: "NombrePP",
//           operator: "contains",
//           value: inputValue,
//         },
//       ],
//     },
//   }).data;

//   this.dataBinding.skip = 0;
// }
  

  


}

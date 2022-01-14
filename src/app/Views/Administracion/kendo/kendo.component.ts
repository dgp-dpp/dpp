import { Component, OnInit } from '@angular/core';
import { categories } from "../../../models/data.categories";
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ProductService } from "../../../services/product.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-kendo',
  templateUrl: './kendo.component.html',
  styleUrls: ['./kendo.component.css'],
  providers: [ProductService]
})
export class KendoComponent implements OnInit {
  public dropDownItems = categories;
  public defaultItem = { text: "Filter by Category", value: null };

  
    public gridItems: Observable<GridDataResult>;
    public pageSize: number = 10;
    public skip: number = 0;
    public sortDescriptor: SortDescriptor[] = [];
    public filterTerm: number = null;
  
    constructor(private service: ProductService) {
      this.loadGridItems();
    }
  
    public pageChange(event: PageChangeEvent): void {
      this.skip = event.skip;
      this.loadGridItems();
    }
  
    private loadGridItems(): void {
      this.gridItems = this.service.getProducts(
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
    text: string;
    value: number | null;
  }): void {
    this.filterTerm = item.value;
    this.skip = 0;
    this.loadGridItems();
  }
  ngOnInit(): void {
  }

}

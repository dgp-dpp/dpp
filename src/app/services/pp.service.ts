import { Injectable } from "@angular/core";
import {
  DataResult,
  orderBy,
  process,
  SortDescriptor
} from "@progress/kendo-data-query";
import { Observable, of } from "rxjs";
import { pp } from "../models/data.pp";

@Injectable()
export class PpService {

  public getPPs(
    skip: number,
    pageSize: number,
    sortDescriptor: SortDescriptor[],
    filterTerm: number
  ): Observable<DataResult> {
    let data;
    if (filterTerm) {
      data = process(orderBy(pp, sortDescriptor), {
        filter: {
          logic: "and",
          filters: [
            {
              field: "IdEje",
              operator: "eq",
              value: filterTerm
            }
          ]
        }
      }).data;
    } else {
      data = orderBy(pp, sortDescriptor);
    }
    return of({
      data: data.slice(skip, skip + pageSize),
      total: data.length
    });
  }
}

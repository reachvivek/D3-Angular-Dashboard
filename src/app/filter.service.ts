import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public filterChanged = new Subject<any>();

  public emitFilterChange(filter: any) {
    filter = filter.map((filter: any) =>
      filter === null ? undefined : filter
    );
    filter = filter.map((filter: any) => filter?.name || filter);
    this.filterChanged.next(filter);
  }
  constructor() {}
}

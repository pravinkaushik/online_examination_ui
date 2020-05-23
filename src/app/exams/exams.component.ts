import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from '../_services/country.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';
import { DecimalPipe } from '@angular/common';

@Component({selector: 'ngbd-table-complete', templateUrl: 'exams.component.html',  providers: [CountryService, DecimalPipe]})
export class ExamsComponent implements OnInit {


    @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
    countries$: Observable<Country[]>;
    total$: Observable<number>;
    
    constructor(public service: CountryService) {
        this.countries$ = service.countries$;
        this.total$ = service.total$;
      }

    ngOnInit() {
        
    }


    
      onSort({column, direction}: SortEvent) {
        // resetting other headers
        this.headers.forEach(header => {
          if (header.sortable !== column) {
            header.direction = '';
          }
        });
    
        this.service.sortColumn = column;
        this.service.sortDirection = direction;
      }
   
}
import { Pipe, PipeTransform } from '@angular/core';

import { ExamResult } from '../_models/exam_result';

@Pipe({
    name: 'bookfilter',
    pure: false
})
export class ExamResultFilterPipe implements PipeTransform {
  transform(items: ExamResult[], filter: ExamResult): ExamResult[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: ExamResult) => this.applyFilter(item, filter));
  }
  
  /**
   * Perform the filtering.
   * 
   * @param {ExamResult} book The book to compare to the filter.
   * @param {ExamResult} filter The filter to apply.
   * @return {boolean} True if book satisfies filters, false if not.
   */
  applyFilter(book: ExamResult, filter: ExamResult): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
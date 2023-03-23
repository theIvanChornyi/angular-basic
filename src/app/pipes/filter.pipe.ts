import { Pipe, PipeTransform } from '@angular/core';
import { FilterNames, IPost } from '../components/filter-list/filter-list.component';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: IPost[], filter: string, filterField: FilterNames): IPost[] {
    if (!filter) {
      return value;
    }
    // return value.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));

    // return value.filter(
    //   post =>
    //     post.title.toLowerCase().includes(filter.toLowerCase()) ||
    //     post.text.toLowerCase().includes(filter.toLowerCase())
    // );

    switch (filterField) {
      case FilterNames.TITLE:
        return value.filter(post => post.title.toLowerCase().includes(filter.toLowerCase()));
      case FilterNames.TEXT:
        return value.filter(post => post.text.toLowerCase().includes(filter.toLowerCase()));
      default:
        return value;
    }
  }
}

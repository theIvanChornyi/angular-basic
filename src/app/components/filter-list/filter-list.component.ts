import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
}

export enum FilterNames {
  TITLE = 'title',
  TEXT = 'text',
}
@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
})
export class FilterListComponent {
  FilterNames = FilterNames;
  filter = '';
  filterField = FilterNames.TITLE;
  posts: IPost[] = [
    { title: 'Beer', text: 'Best beer in the world!' },
    { title: 'Vine', text: 'Red vine' },
    { title: 'Vodka', text: 'Strong alchogol drink' },
    { title: 'Vodka', text: 'Strong alchogol beer' },
  ];
}

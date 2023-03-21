import { Component } from '@angular/core';

@Component({
  selector: 'app-cicle-render',
  templateUrl: './cicle-render.component.html',
  styleUrls: ['./cicle-render.component.scss'],
})
export class CicleRenderComponent {
  arr = [1, 1, 2, 3, 5, 8, 13, 21];
  posts = [
    {
      id: 1,
      name: 'Oleg',
      coments: [
        { id: 1, title: 'Oleg lorem' },
        { id: 2, title: 'lorem Oleg' },
        { id: 3, title: 'Oleg Oleg' },
      ],
    },
    {
      id: 2,
      name: 'Ivan',
      coments: [
        { id: 4, title: 'Ivan lorem' },
        { id: 5, title: 'lorem Ivan' },
        { id: 6, title: 'Ivan Ivan' },
      ],
    },
  ];
}

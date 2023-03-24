import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  promise = new Promise<string>((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('qwe');
      }, 2000);
    } else {
      reject('zxc');
    }
  });

  // С использованием async пайпа
  // date = new Observable<Date>(obs => {
  //   setInterval(() => {
  //     obs.next(new Date());
  //   }, 1000);
  // });

  // И без async пайпа используя хук жизненого цикла
  date: Date;
  date$ = new Observable<Date>(obs => {
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  ngOnInit(): void {
    this.date$.subscribe(date => (this.date = date));
  }
}

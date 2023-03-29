import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { delay, Observable, throwError, catchError } from 'rxjs';

export interface ITodo {
	id?: number;
	title: string;
	completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
	private _baseUrl = 'https://jsonplaceholder.typicode.com/todos';
	private params = new HttpParams().set('_limit', 5);
	private headers = new HttpHeaders({
		'Content-type': 'application/json; charset=UTF-8',
	});

	constructor(private http: HttpClient) {}

	getTodos(): Observable<ITodo[]> {
		this.params = this.params.append('config', true);

		return this.http
			.get<ITodo[]>(this._baseUrl, { params: this.params })
			.pipe(delay(1500));
	}

	addTodo(todo: ITodo): Observable<ITodo> {
		return this.http.post<ITodo>(this._baseUrl, todo, {
			headers: this.headers,
		});
	}

	compliteTodo(id: number): Observable<void> {
		const body = { completed: true };
		return this.http
			.patch<void>(`${this._baseUrl}/${id}`, body, { headers: this.headers })
			.pipe(
				catchError(e => {
					console.log('e.message', e.message);
					return throwError(() => e);
				})
			);
	}

	deleteTodo(id: number): Observable<void> {
		return this.http.delete<void>(`${this._baseUrl}/${id}`);
	}
}

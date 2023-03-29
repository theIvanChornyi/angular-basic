import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const cloned = req.clone({
			headers: req.headers.append('auth', 'Bearer MY CASTOM TOKEN'),
		});
		return next.handle(cloned).pipe(
			tap(e => {
				if (e.type === HttpEventType.Response) {
					console.log('first', e);
				}
			})
		);
	}
}

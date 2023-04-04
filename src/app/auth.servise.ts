import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private router: Router) {}
    private _isAuth = false;
    get isAuth() {
        return this._isAuth;
    }
    public logIn() {
        this._isAuth = true;
    }
    public logOut() {
        this._isAuth = false;
        this.router.navigate(['']);
    }

    public isAuthentificated():
        | Promise<boolean>
        | Observable<boolean>
        | boolean {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth);
            }, 100);
        });
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.stringify(localStorage.getItem('access_token')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }

    login(login, password) {
        return this.http.post<any>(`http://api.template.megaleios.com/api/v1/Profile/Token`, { login, password })
            .pipe(map(user => {
                console.log(user);
                localStorage.setItem('access_token', 'Bearer ' + user.data.access_token);
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        localStorage.removeItem('access_token');
        this.currentUserSubject.next(null);
    }
}
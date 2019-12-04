import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class UserService {

    constructor(private http: HttpClient) { }

    getHeader() {
        let headers = new HttpHeaders();
        let token = JSON.parse(localStorage.getItem('currentUser.data.access_token'));

        headers.append('Authorization', 'Bearer ' + token);
        return headers
    }

    getAllUsers() {
        return this.http.get<any[]>('http://api.template.megaleios.com/api/v1/Profile/List?limit=30', { headers: this.getHeader() });
    }

    register(user) {
        return this.http.post('http://api.template.megaleios.com/api/v1/Profile/Register', user);
    }
}
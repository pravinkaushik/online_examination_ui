import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import { Enquiry } from '../_models/enquiry';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    getAll() {
        return this.http.get(`${environment.apiUrl}/home`);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }

    contact(enquiry: Enquiry) {
        return this.http.post<any>(`${environment.apiUrl}/contact`, JSON.stringify(enquiry), this.options)
        .pipe(
            tap(_ => console.log('fetched heroes'))
        );
    }

}
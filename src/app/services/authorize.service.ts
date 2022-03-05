import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, map, catchError, throwError} from 'rxjs';
import {User} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {

  constructor(private readonly http: HttpClient) {
  }

  public register(login: string, password: string): Observable<User> {
    return of();
  }

  public login(login: string, password: string): Observable<User> {
    return of();
  }

  public checkLogin(login: string, password: string): Observable<User> {
    return of();
  }
}

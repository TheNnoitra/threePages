import {Injectable} from '@angular/core';
import {Observable, of, first, take, from, tap, throwError, switchMap, map} from 'rxjs';
import {User} from "../interfaces/user";
import {Users} from "../mock-data/mock-users";


@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {

  constructor() {
  }

  public register(login: string, password: string): Observable<User> {
    if(!login || !password){
      return throwError('');
    }
    return from(Users).pipe(
      first(f => f.login === login && f.password === password),
      tap(
        resp => {
        },
        error => {
          const user = {login: login, password: password} as User;
          Users.push(user);
        }
      )
    );
  }

  public login(login: string, password: string): Observable<User> {
    if(!login || !password){
      return throwError('Не указан логин/пароль');
    }
    return from(Users).pipe(
      first(f => f.login === login && f.password === password),
      tap(user => localStorage.setItem('storedUser', JSON.stringify(user)))
    );
  }

  get isAuthorized() : boolean {
    debugger;
    const userStr = localStorage.getItem('storedUser');
    const user = userStr ? JSON.parse(userStr) : '';
    return Users.some(f => f.login === user.login && f.password === user.password);
  }
}

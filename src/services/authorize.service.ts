import {Injectable} from '@angular/core';
import {Observable, of, first, take, from, tap} from 'rxjs';
import {User} from "../interfaces/user";
import {Users} from "../mock-data/mock-users";


@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {

  constructor() {
  }

  public register(login: string, password: string): Observable<User> {
    Users.push({login: login, password: password} as User)
    return ;
  }

  public login(login: string, password: string): Observable<User> {
    return from(Users).pipe(
      first(f => f.login === login && f.password === password)
    );
  }

  public checkLogin(login: string, password: string): Observable<User> {
    return of();
  }
}

import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "../../../services/authorize.service";
import {User} from "../../../interfaces/user";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginContent: LoginContent = {header: 'LOGIN', button: 'LOGIN'};
  loginMessage?: string;
  //loginMessage: Observable<string> = new Observable<string>();

  registerContent: LoginContent = {header: 'SIGN UP', button: 'SIGN UP'};
  registerMessage?: string;

  constructor(private authorizeService: AuthorizeService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  tryLogin(userModel: User) {

    this.authorizeService.login(userModel.login, userModel.password)
      .subscribe({
        next: (user) => {
          this.router.navigate(['/search'])
        },
        error: (error) => {
          if (error) {
            this.loginMessage = error;
          } else {
            this.loginMessage = 'Пользователь с таким логином/паролем не найден';
          }
        }
      })
  }

  tryRegister(userModel: User) {
    this.authorizeService.register(userModel.login, userModel.password)
      .subscribe({
        next: (user) => {
          this.registerMessage = 'Пользователь с таким логином/паролем уже зарегистрирован';
        },
        error: () => {
          this.registerMessage = 'Регистрация прошла успешно';
        }
      })
  }

}

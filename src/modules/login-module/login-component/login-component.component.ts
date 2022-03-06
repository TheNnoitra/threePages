import {Component, EventEmitter, OnInit} from '@angular/core';
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

  registerContent: LoginContent = {header: 'SIGN UP', button: 'SIGN UP'};
  registerMessage? : string;

  constructor(private authorizeService: AuthorizeService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  tryLogin(userModel: User){
    this.authorizeService.login(userModel.login, userModel.password)
      .subscribe({
        next: (user) => {
          this.router.navigate(['/search'], {queryParams: {currentUser: user}})
        },
        error: () => {
          debugger;
          this.loginMessage = 'Пользователь с таким логином/паролем не найден';
        }
      })
  }

  tryRegister(userModel: User){

  }

}

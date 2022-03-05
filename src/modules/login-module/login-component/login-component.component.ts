import {Component, OnInit} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {
  interval,
  Observable,
  scan,
  BehaviorSubject,
  switchMap,
  takeWhile, map
} from "rxjs";
import {AuthorizeService} from "../../../services/authorize.service";
import {User} from "../../../interfaces/user";


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit{

  constructor(private browserModule: BrowserModule,
              private service: AuthorizeService) {
  }

  //private variant$: Observable<User> = this.authorizeService.checkLogin("","").pipe();

  ngOnInit(): void {

  }

}

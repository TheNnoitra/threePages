import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {AuthorizeService} from "../../../../services/authorize.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-sing-up-component',
  templateUrl: './sing-up-component.component.html',
  styleUrls: ['./sing-up-component.component.scss']
})
export class SingUpComponentComponent implements OnInit {

  public registerForm: any;
  public hidden: boolean = true;
  public errorMessageEvent$ = new BehaviorSubject<string>('');

  constructor(private formBuilder:FormBuilder,
              private authorizeService: AuthorizeService,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  public onSubmit(): void {
    if (this.hidden) {
      this.hidden = !this.hidden;
    } else {
      this.authorizeService.register(this.login, this.password)
        .subscribe({
          next: () => {
            this.errorMessageEvent$.next('Регистрация прошла успешно')
          },
          error: () => {
            this.errorMessageEvent$.next('Пользователь с таким логином уже зарегистрирован')
          }
        })
    }
  }

  private get login() {
    return this.registerForm.value.login;
  }

  private get password() {
    return this.registerForm.value.password;
  }

}

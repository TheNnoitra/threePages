import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FormBuilder, FormControl} from "@angular/forms";
import {AuthorizeService} from "../../../../services/authorize.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.scss']
})
export class LogInComponentComponent implements OnInit {

  loginForm: any;
  hidden: boolean = true;
  public errorMessageEvent$ = new BehaviorSubject<string>('');

  constructor(private formBuilder: FormBuilder,
              private authorizeService: AuthorizeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: new FormControl(),
      password: new FormControl(),
    });
  }

  public onSubmit(): void {
    if (this.hidden) {
      this.hidden = !this.hidden;
    } else {
      this.authorizeService.login(this.login, this.password)
        .subscribe({
          next: (user) => {
            this.router.navigate(['/search'], {queryParams: {currentUser: user}})
          },
          error: () => {
            this.errorMessageEvent$.next('Пользователь с таким логином/паролем не найден')
          }
        })
    }
  }

  private get login() {
    return this.loginForm.value.login;
  }

  private get password() {
    return this.loginForm.value.password;
  }
}

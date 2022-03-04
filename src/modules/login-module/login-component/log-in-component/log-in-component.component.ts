import {Component, OnInit} from '@angular/core';
import {debounceTime, Observable, switchMap} from "rxjs";
import {FormBuilder, FormControl} from "@angular/forms";

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.scss']
})
export class LogInComponentComponent implements OnInit {

  public loginForm: any;
  public hidden: boolean = true;

  constructor(private formBuilder: FormBuilder) {
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
      const login = this.login;
      const pass = this.password;
      debugger;
    }
  }

  private get login() {
    return this.loginForm.value.login;
  }

  private get password() {
    return this.loginForm.value.password;
  }
}

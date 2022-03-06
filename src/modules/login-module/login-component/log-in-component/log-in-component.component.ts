import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {FormBuilder, FormControl} from "@angular/forms";
import {User} from "../../../../interfaces/user";

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.scss']
})
export class LogInComponentComponent implements OnInit {

  @Output() userModel: EventEmitter<User> = new EventEmitter<User>(true);
  @Input() errorMessage?: string;
  @Input() loginContent?: LoginContent;

  loginForm: any;
  hidden: boolean = true;

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
      this.userModel.emit(
        {login: this.login, password: this.password} as User
      );
    }
  }

  private get login() {
    return this.loginForm.value.login;
  }

  private get password() {
    return this.loginForm.value.password;
  }
}

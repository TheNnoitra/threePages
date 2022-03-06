import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LoginComponentComponent} from './login-component/login-component.component';
import {LogInComponentComponent} from './login-component/log-in-component/log-in-component.component';

@NgModule({
  declarations: [
    LoginComponentComponent,
    LogInComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ]
})
export class LoginModuleModule {
}

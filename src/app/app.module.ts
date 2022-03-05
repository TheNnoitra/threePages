import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {LoginModuleModule} from './modules/login-module/login-module.module';
import {SearchModuleModule} from './modules/search-module/search-module.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModuleModule,
    SearchModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

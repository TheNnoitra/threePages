import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponentComponent} from '../modules/login-module/login-component/login-component.component';
import {SearchComponentComponent} from '../modules/search-module/search-component/search-component.component';

const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'search', component: SearchComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

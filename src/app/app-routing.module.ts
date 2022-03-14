import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponentComponent} from '../modules/login-module/login-component/login-component.component';
import {SearchComponentComponent} from '../modules/search-module/search-component/search-component.component';
import {SearchGuard} from '../modules/search-module/search.guard'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponentComponent},
  {path: 'search', component: SearchComponentComponent, canActivate: [SearchGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SearchGuard],
})
export class AppRoutingModule {
}

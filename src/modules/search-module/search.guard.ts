import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {from, Observable, of, switchMap, tap} from "rxjs";
import {AuthorizeService} from "../../services/authorize.service";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SearchGuard implements CanActivate{

  constructor(private auth: AuthorizeService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isAuthorized){
      return true;
    }
    return this.router.parseUrl('/login');
  }
}

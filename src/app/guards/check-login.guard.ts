import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
    | boolean | UrlTree { const token = sessionStorage.getItem("Token");
    if(token) { return true; } return false; }
  
}

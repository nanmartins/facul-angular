import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class UserGuard implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('currentUser')) {
      return true
    } else {
      return false
    }
  }
}

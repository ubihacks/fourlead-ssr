import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
} from '@angular/router';
import { AppConfigService } from '../AppConfigService';

@Injectable({
    providedIn: 'root',
})
export class CompanyGuard implements CanActivate, CanActivateChild {
    constructor(
      private router: Router,
      private appSession: AppConfigService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (!this.appSession.userId) {
            this.router.navigate(['/account/login']);
            return false;
        }

        return true;
    }
}

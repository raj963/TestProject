import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProjectDetailGuard implements CanActivate {

    constructor(private _router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        debugger
        let id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert('Invalid project Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/projects']);
            // abort current navigation
            return false;
        };
        return true;
    }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise((resolve) => {
      Auth.currentAuthenticatedUser({
        bypassCache: false
      })
        .then((user) => {
          if (user) {
            resolve(true);
          }
        })
        .catch(() => {
          this._router.navigate(['/auth']);
          resolve(false);
        });
    });
  }

}

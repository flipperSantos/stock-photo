import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    public _amplifyService: AmplifyService,
    public _router: Router
  ) {

    this._amplifyService = _amplifyService;

    this._amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          this._router.navigate(['/home']);
        }
      });
  }

  ngOnInit() {
  }
}

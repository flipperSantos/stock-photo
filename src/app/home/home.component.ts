import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from "aws-amplify";
import { APIService } from "../API.service";
import { Photo } from "../photo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;
  showPhoto: boolean;
  userCreated: boolean;

  photo = new Photo('', '');

  constructor(
    private _api: APIService,
    private _router: Router,
  ) { }

  ngOnInit() {

    Auth.currentAuthenticatedUser({ bypassCache: false })
      .then(async user => {
        this.userName = user.attributes.email;
      })
      .catch(err => console.log(err));
  }

  async onImageUploaded(e: any) {

    this.photo.imageUrl = e.key;

    await this._api.CreatePhoto(this.photo);

    this.showPhoto = true;
  }

  editPhoto() {

    this.showPhoto = false;
  }

  logOut() {

    Auth.signOut({ global: true })
      .then(data => {
        this._router.navigate(['/auth']);
      })
      .catch(err => console.log(err));
  }
}

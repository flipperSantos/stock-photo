import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from "aws-amplify";
import { APIService } from "../API.service";
import { User } from "../models/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: string;
  userName: string;
  userPhoto: string;
  showPhoto: boolean;
  userCreated: boolean;

  user = new User('', '', []);

  constructor(
    private _api: APIService,
    private _router: Router,
  ) { }

  ngOnInit() {

    this.showPhoto = false;

    Auth.currentAuthenticatedUser({ bypassCache: false })
      .then(async user => {

        this.userId = user.attributes.sub;
        this.userName = user.attributes.email;

        this.user.id = this.userId;
        this.user.username = this.userName;
        this.user.photos = [];

        let result = await this._api.GetUser(this.userId);

        if (!result) {

          await this._api.CreateUser(this.user)
        } else {

          this.user = new User(
            this.userId,
            result.username,
            result.photos
          );
        }
      })
      .catch(err => console.log(err));
  }

  async onImageUploaded(e: any) {

    this.userPhoto = e.key;
    this.user.photos.push(this.userPhoto);

    let result = await this._api.UpdateUser(this.user);

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

  onAlbumImageSelected(event: any) {

    window.open(event, '_blank');
  }
}

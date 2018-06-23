import { Component, OnInit } from '@angular/core';
import { apiInit, apiAuthenticate } from '../../assets/javascript/stackApi';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientId: number;
  scope: String;
  redirectUrl: String;
  state: String;

  constructor() { }

  ngOnInit() {
    this.clientId = 12679;
    this.redirectUrl = 'https://stackexchange.com/oauth/login_success';
    this.scope = 'no_expiry';
    // console.log(location.host);
    apiInit();
  }

  login() {
    apiAuthenticate();
  }
}

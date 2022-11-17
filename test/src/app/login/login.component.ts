import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    username: "",
    password: "",
    role: ""
  };

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  loginUser(login : Login) {
    return this.httpClient.post('/users', login, {});
  }
}

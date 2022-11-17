import { Component, OnInit } from '@angular/core';
import { Login } from './login';

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

  constructor() { }

  ngOnInit(): void {
  }

  printLogin(login: Login): void {
    console.log(login.username, login.password);
  }
}

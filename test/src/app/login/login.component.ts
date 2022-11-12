import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    _id: uuidv4(),
    name: "",
    username: "",
    password: "",
    email: "",
    role: ""
  };

  constructor() { }

  ngOnInit(): void {
  }
}

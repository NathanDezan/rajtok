import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { v4 as uuid } from 'uuid'
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.test();
  }

  register: Register = {
    _id: uuid(),
    name: "",
    username: "",
    password: "",
    email: "",
    role: "usuario_comum"
  };

  printRegister(register: Register): void{
    console.log(register._id, register.name, register.username, register.password, register.email, register.role);
  }
}

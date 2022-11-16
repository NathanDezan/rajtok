import { Component, OnInit } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { Register } from './register'
import { RegisterService } from './register.service'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    name: '',
    username: '',
    password: '',
    email: ''
  })

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder
    ) {
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    let data = this.registerForm.value;
    this.registerService.register({
      _id: uuid(),
      role: 'usuario_comum',
      name: data.name || '',
      username: data.username || '',
      password: data.password || '',
      email: data.email || ''
    }).subscribe({
      next: (value) => {
        this.registerForm.reset()
        console.log("Success!")
      },

      error: (error) => {
        console.warn(error)
      },

      complete: () => {}
    })
  }
}

import { Component, OnInit } from '@angular/core'
import { v4 as uuid } from 'uuid'
import { RegisterService } from './register.service'
import { FormBuilder } from '@angular/forms'
import { MessageBoxService } from '../message-box/message-box.service'

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
    private formBuilder: FormBuilder,
    private messageBox : MessageBoxService
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
      next: () => {
        this.registerForm.reset()
        this.messageBox.sendMessage({
          message: 'Usuário criado!',
          kind: 'success'
        })
      },

      error: (error) => {
        this.messageBox.sendMessage({
          message: `Erro criando usuário: ${error.message}`,
          kind: 'danger'
        })
      }
    })
  }
}

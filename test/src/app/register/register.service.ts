import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  test(){
    return this.httpClient.post('http://localhost:3000/users', {}, {});
  }
}

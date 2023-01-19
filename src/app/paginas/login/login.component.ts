import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionService } from 'src/app/servicios/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private session: SessionService){}

  onSubmit(){
    sessionStorage.setItem('Token', '123456789');
  }

}

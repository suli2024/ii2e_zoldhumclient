import { Component } from '@angular/core';
import { 
  FormBuilder, 
  FormControl, 
  FormGroup, 
  ReactiveFormsModule 
} from '@angular/forms';
import { AuthapiService } from '../shared/authapi.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm !: FormGroup

  constructor(
    private authapi: AuthapiService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.builder.group({
      name: new FormControl(''),
      password: new FormControl('')
    })
  }

  login() {
    // console.log(this.loginForm.value)
    this.authapi.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        this.loginForm.reset()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}

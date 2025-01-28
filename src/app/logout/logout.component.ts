import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { AuthapiService } from '../shared/authapi.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {

  constructor(
    private app : AppComponent,
    private router: Router,
    private authapi: AuthapiService
  ) {}

  ngOnInit() {
    this.router.navigate(['login']);
  }
  ngOnDestroy() {
    this.app.loggedIn = false;
    this.authapi.logout().subscribe({
      next: (data) => {
        console.log(data);
        
      },
      error: (err) => {
        console.log(err);
      }
    })
    localStorage.removeItem('token');
  }



}

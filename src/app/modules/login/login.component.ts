import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.view.html',
  styleUrls: ['./login.style.css']
})
export class LoginComponent {
  title = 'login';
  user = {};

  constructor(private router: Router) {}

  logIn() {
    this.router.navigate(['/home']);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserToLogin } from '@todo-list/schema/todo';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todo-list-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  loginTitle = 'Entrar';
  loginErrorVisible = false;
  loginErrorText = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  login(user: UserToLogin) {
    this.authService.login(user).subscribe({
      next: () => this.router.navigate(['home']),
      error: (error) => {
        this.loginErrorText = error.error.message;
        this.loginErrorVisible = true;
      }
    });
  }
}

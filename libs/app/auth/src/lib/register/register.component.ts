import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@todo-list/schema/todo';
import { take } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'todo-list-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    name: ['', Validators.required],
    password: ['', Validators.required]
  })

  registerTitle = 'Cadastrar Usuário';
  registerErrorList: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  createUser(user: User) {
    this.authService.createUser(user).pipe(
      take(1)
    ).subscribe({
      next: () => this.router.navigate(['home']),
      error: (error: HttpErrorResponse) => this.registerErrorList = error.error.message
    })
  }

}

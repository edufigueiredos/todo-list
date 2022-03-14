import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/frontend';
import { AccessToken, User, UserResponse, UserToLogin } from '@todo-list/schema/todo';
import { Observable, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: UserToLogin): Observable<UserResponse> {
    return this.http.post<AccessToken>(`${this.api}/login`, user)
      .pipe(
        switchMap((access_token: AccessToken) => {
          this.setToken(access_token);
          return this.getUser()
        })
      )
  }

  createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.api}/user`, user)
      .pipe(tap(userLogin => this.setUserToLocalStorage(userLogin)))
  }

  logoff() {
    localStorage.removeItem('todoListToken');
    localStorage.removeItem('todoListUser');
    this.router.navigate(['auth'])
  }

  getUser(): Observable<UserResponse> {
    const user = this.getUserFromLocalStorage();
    if (user) return of(user)

    return this.http.get<UserResponse>(`${this.api}/me`)
      .pipe(tap((user: UserResponse) => this.setUserToLocalStorage(user)));
  }

  getUserFromLocalStorage(): UserResponse {
    const userString = localStorage.getItem('todoListUser');
    return userString?.length ? JSON.parse(userString) : null
  }

  setUserToLocalStorage(user: UserResponse) {
    localStorage.setItem('todoListUser', JSON.stringify(user));
  }

  getToken(): string | null {
    return localStorage.getItem('todoListToken');
  }

  setToken(access_token: AccessToken) {
    localStorage.setItem('todoListToken', access_token.access_token);
  }

}

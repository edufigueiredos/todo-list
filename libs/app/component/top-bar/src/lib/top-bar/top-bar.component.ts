import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@todo-list/app/auth';
import { clearTodoStore } from '@todo-list/app/services/todo-service';
import { UserResponse } from '@todo-list/schema/todo';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'todo-list-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit, OnDestroy {

  unsubscribe$ = new Subject();
  showUserOption = false;
  currentUser: UserResponse | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initTopBar();
  }

  initTopBar() {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(routerEvent => routerEvent instanceof NavigationEnd)
      ).subscribe(() => {
        const authRoute = this.router.url.includes('auth');
        if (authRoute) {
          this.showUserOption = false;
          this.store.dispatch(clearTodoStore());
        } else {
          if (!this.currentUser) this.currentUser = this.authService.getUserFromLocalStorage();
          console.log(this.currentUser);
          this.showUserOption = true;
        }
      });
  }

  logout() {
    this.authService.logoff();
    this.currentUser = null;
  }

  ngOnDestroy(): void {
    if (this.unsubscribe$) {
      this.unsubscribe$.next(false);
      this.unsubscribe$.unsubscribe();
    }
  }
}

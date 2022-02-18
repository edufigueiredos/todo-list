import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ModalModule } from '@todo-list/app/component/modal';
import { HomeRoutingModule } from './home-routing.module';
import { TodoFormModule } from '@todo-list/app/component/todo-form';
import { TodoService } from '@todo-list/app/services/todo-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { ChangeMatIconStyleModule } from '@todo-list/app/directives/change-mat-icon-style';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ModalModule,
    TodoFormModule,
    MatButtonModule,
    MatIconModule,
    ChangeMatIconStyleModule
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [TodoService]
})
export class HomeModule {}

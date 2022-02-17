import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { ModalModule } from '@todo-list/app/component/modal';
import { HomeRoutingModule } from './home-routing.module';
import { TodoFormModule } from '@todo-list/app/component/todo-form';
import { TodoService } from '@todo-list/app/services/todo-service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule,
    TodoFormModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [TodoService]
})
export class HomeModule {}

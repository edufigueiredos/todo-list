import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ModalModule } from '@todo-list/app/component/modal';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ModalModule,
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule {}
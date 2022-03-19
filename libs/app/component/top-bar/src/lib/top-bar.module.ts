import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ChangeMatIconStyleModule } from '@todo-list/app/directives/change-mat-icon-style';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ChangeMatIconStyleModule,
    MatMenuModule
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [TopBarComponent]
})
export class TopBarModule {}

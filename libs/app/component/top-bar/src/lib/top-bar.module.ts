import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { ChangeMatIconStyleModule } from '@todo-list/app/directives/change-mat-icon-style';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    ChangeMatIconStyleModule
  ],
  declarations: [
    TopBarComponent
  ],
  exports: [TopBarComponent]
})
export class TopBarModule {}

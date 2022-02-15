import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeMatIconStyleDirective } from './change-mat-icon-style.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ChangeMatIconStyleDirective
  ],
  exports: [ChangeMatIconStyleDirective]
})
export class ChangeMatIconStyleModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [ModalComponent]
})
export class ModalModule {}

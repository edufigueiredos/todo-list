import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { Todo } from '@todo-list/schema/todo';

@Component({
  selector: 'todo-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showModal = false;
  formValid = false;
  formValue: Todo | null | undefined;

  resetForm$ = new Subject<boolean>();

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.formValue = null;
    this.resetForm$.next(true);
  }

  saveData() {
    console.log(this.formValue);
  }

  getFormValue(event: Todo) {
    this.formValue = event;
    if (event) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }

}

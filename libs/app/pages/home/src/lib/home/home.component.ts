import { Subject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todo } from '@todo-list/schema/todo';
import { TodoService } from '@todo-list/app/services/todo-service';

@Component({
  selector: 'todo-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal = false;
  formValid = false;
  formValue: Todo | null | undefined;
  todoList$: Observable<Todo[]> | undefined;

  resetForm$ = new Subject<boolean>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoList$ = this.todoService.getAll();
  }

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

import { Subject, Observable, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Todo } from '@todo-list/schema/todo';
import { allTodosSelector, completeTodo, createTodo, deleteTodo, getAllTodos, TodoService, TodoState, updateTodo } from '@todo-list/app/services/todo-service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'todo-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showModal = false;
  formValid = false;
  isItemEditing = false;
  formValue: Todo | null | undefined;
  todoList$: Observable<Todo[]> = this.store.select(allTodosSelector)

  showDeleteItemModal = false;
  itemToDelete: Todo | undefined;
  dateItemToComplete: Date | undefined;

  showCompleteItemModal = false;
  itemToComplete: Todo | undefined;

  resetForm$ = new Subject<boolean>();
  editForm$ = new Subject<Todo>();

  constructor(
    private todoService: TodoService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.store.dispatch(getAllTodos());
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.isItemEditing = false;
    this.showModal = false;
    this.formValue = null;
    this.resetForm$.next(true);
  }

  saveData() {
    if (this.isItemEditing && this.formValue && this.formValue._id) {
      this.store.dispatch(updateTodo({ id: this.formValue._id, todo: this.formValue }));
      this.closeModal();
    } else if (this.formValue) {
      if (this.formValue._id === '') delete this.formValue._id;
      if (this.formValue.status === '') delete this.formValue.status;

      this.store.dispatch(createTodo({ todo: this.formValue }));
      this.closeModal();
    };
  }

  openDeleteModal(item: Todo) {
    this.itemToDelete = item;
    this.showDeleteItemModal = true;
  }

  closeDeleteModal() {
    this.showDeleteItemModal = false;
    this.itemToDelete = undefined;
  }

  deleteItem() {
    if (this.itemToDelete && this.itemToDelete._id) {
      this.store.dispatch(deleteTodo({ id: this.itemToDelete._id }))
      this.closeDeleteModal();
    }
  }

  openCompleteModal(item: Todo) {
    this.itemToComplete = item;
    this.showCompleteItemModal = true;
  }

  completeItem() {
    if (this.dateItemToComplete && this.itemToComplete && this.itemToComplete._id) {
      const id = this.itemToComplete._id;
      const date = { date: this.dateItemToComplete };
      this.store.dispatch(completeTodo({ id, date }))
      this.closeCompleteModal();
    }
  }

  closeCompleteModal() {
    this.showCompleteItemModal = false;
    this.dateItemToComplete = undefined;
    this.itemToComplete = undefined;
  }

  sendDataToForm(item: Todo) {
    const itemToEdit: Todo = {
      name: item.name,
      date: item.date.toString().split('T')[0],
      priority: item.priority,
      _id: item._id,
      createdAt: item.createdAt,
      description: item.description ? item.description : ''
    }
    this.editForm$.next(itemToEdit);
    this.isItemEditing = true;
    this.openModal();
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

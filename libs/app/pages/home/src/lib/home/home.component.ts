import { Subject, Observable, take } from 'rxjs';
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
  isItemEditing = false;
  formValue: Todo | null | undefined;
  todoList$: Observable<Todo[]> | undefined;

  showDeleteItemModal = false;
  itemToDelete: Todo | undefined;
  dateItemToComplete: Date | undefined;

  showCompleteItemModal = false;
  itemToComplete: Todo | undefined;

  resetForm$ = new Subject<boolean>();
  editForm$ = new Subject<Todo>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getTodoList();
  }

  getTodoList() {
    this.todoList$ = this.todoService.getAll();
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
      this.todoService.update(this.formValue?._id, this.formValue)
        .pipe(take(1))
        .subscribe(() => {
          this.closeModal();
        });
    } else if (this.formValue) {
      if (this.formValue._id === '') delete this.formValue._id;
      if (this.formValue.status === '') delete this.formValue.status;

      this.todoService.create(this.formValue)
        .pipe(take(1))
        .subscribe(() => {
          this.closeModal();
        });
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
      this.todoService.delete(this.itemToDelete._id)
        .pipe(take(1))
        .subscribe(() => this.closeDeleteModal());
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
      this.todoService.completeTask(id, date)
        .pipe(take(1))
        .subscribe(() => this.showCompleteItemModal = false);
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

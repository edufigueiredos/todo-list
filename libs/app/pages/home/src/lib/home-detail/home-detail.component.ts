import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getTodoSelector, TodoService } from '@todo-list/app/services/todo-service';
import { Todo } from '@todo-list/schema/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  todoDetail$!: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private store: Store
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.todoDetail$ = this.store.select(getTodoSelector(id));
  }
}

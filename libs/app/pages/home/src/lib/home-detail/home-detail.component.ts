import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from '@todo-list/app/services/todo-service';
import { Todo } from '@todo-list/schema/todo';
import { of, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'todo-list-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  todoDetail$!: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.todoDetail$ = this.todoService.getById(id);
  }
}

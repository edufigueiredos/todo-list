import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '@todo-list/schema/todo';
import { mergeMap, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'todo-list-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnDestroy {

  @Output() formValueEmitter = new EventEmitter<Todo>();
  @Input() resetForm: Subject<boolean> | undefined;

  todoForm: FormGroup = this.formBuilder.group({
    _id: [''],
    name: ['', Validators.required],
    description: [''],
    date: ['', Validators.required],
    priority: ['', Validators.required],
    status: [''],
  })

  unsubscribe$ = new Subject<boolean>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.emitFormValue();
    this.resetFormMethod()
  }

  resetFormMethod() {
    if (this.resetForm) {
      this.resetForm
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => this.todoForm.reset())
    }
  }

  emitFormValue() {
    this.todoForm.statusChanges
    .pipe(
      takeUntil(this.unsubscribe$),
      mergeMap((valid: string) => {
        if (valid === 'VALID') {
          return this.todoForm.valueChanges;
        } else {
          return of(null)
        }
      })
    ).subscribe(data => this.formValueEmitter.next(data));
  }

  ngOnDestroy(): void {
      this.unsubscribe$.next(true);
      this.unsubscribe$.complete();
      this.unsubscribe$.unsubscribe();
  }

}

import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { fromEvent, pipe, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'todo-list-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  @ViewChild('background') background: ElementRef | undefined;

  @Input() open = false;
  @Input() title = '';
  @Input() primaryButtonText = '';
  @Input() primaryButtonIsValid = true;
  @Input() secondaryButtonText = '';
  @Input() secondaryButtonIsValid = true;

  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() primaryButtonEvent = new EventEmitter();
  @Output() secondaryButtonEvent = new EventEmitter();

  unsubscribe$ = new Subject<boolean>();

  ngAfterViewInit(): void {
    this.createFromEvent();
  }

  private createFromEvent() {
    fromEvent(this.background?.nativeElement, 'click', (event: PointerEvent) => {
      this.closeModal(event);
    }).pipe(takeUntil(this.unsubscribe$)).subscribe();
  }

  private closeModal(event: PointerEvent) {
    const element = event.target as HTMLElement | null;
    if (element !== null && element.classList.contains('modal-background')) {
      this.closeModalEvent.next(false);
    }
  }

  primaryButtonAction() {
    this.primaryButtonEvent.emit();
  }

  secondaryButtonAction() {
    this.secondaryButtonEvent.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }
}

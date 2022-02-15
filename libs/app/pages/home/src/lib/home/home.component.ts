import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  clicou() {
    console.log('Sim, clicou')
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  imports: [],
  templateUrl: './modal-component.component.html',
  styleUrl: './modal-component.component.scss'
})
export class ModalComponentComponent {

  abrir: boolean = true;

  openModal() {
    this.abrir = true;
  }

  fecharModal() {
    this.abrir = false;
  }
}

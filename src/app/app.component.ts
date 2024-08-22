import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnsComponent } from './components/btns/btns.component';
import { ModalComponentComponent } from './components/modal-component/modal-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BtnsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('modalA') modalA: ModalComponentComponent

  handleFirstButtonClick() {
    console.log('Primeiro botão clicado!');
  }
  
  handleSecondButtonClick() {
    console.log('Segundo botão clicado!');
  }
  
}

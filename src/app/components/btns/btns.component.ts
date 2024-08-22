import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btns',
  standalone: true,
  imports: [],
  templateUrl: './btns.component.html',
  styleUrl: './btns.component.scss'
})
export class BtnsComponent {
  @Input() firstButtonAction: () => void = () => {};
  @Input() secondButtonAction: () => void = () => {};

  onFirstButtonClick() {
    if (this.firstButtonAction) {
      this.firstButtonAction();
    }
  }

  onSecondButtonClick() {
    if (this.secondButtonAction) {
      this.secondButtonAction();
    }
  }
}

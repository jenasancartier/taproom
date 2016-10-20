import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pour-beer',
  template:`
    <button (click)="pourButtonClicked(childKeg)"
    id="pourButton"
    class="btn btn-danger"
    >Pour Beer</button>
    <button (click)="swapKeg(childKeg)"
    id="swapButton"
    class="btn btn-danger"
    >Swap Keg</button>
  `
})

export class PourBeerComponent {
  @Input() childKeg: Keg;
  @Output() pourBeerSender = new EventEmitter();
  pourButtonClicked(childKeg) {
    childKeg.pintsLeft -=1;
  }
  swapKeg(childKeg) {
    childKeg.pintsLeft = 124;
  }
}

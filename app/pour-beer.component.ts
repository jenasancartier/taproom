import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'pour-beer',
  template:`
    <button (click)="pourButtonClicked(childKeg)">Pour Beer</button>
    <button (click)="swapKeg(childKeg)">Swap Keg</button>
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

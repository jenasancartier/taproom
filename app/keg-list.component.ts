import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { PourBeerComponent } from './pour-beer.component';

@Component({
  selector: 'keg-list',
  template: `

  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="almostEmpty">Show Almost Empty!</option>
    <option value="full">Show Full</option>
  </select>
  <div *ngFor="let currentKeg of childKegList | emptiness:selectedEmptiness">
    <div [class.cheapBeer]="currentKeg.price < 5.5">
      <h3>{{ currentKeg.brand }}</h3>
      <p>{{currentKeg.name}}, {{currentKeg.price}}, {{currentKeg.abv}}, {{currentKeg.pintsLeft}}
      <pour-beer [childKeg]="currentKeg"></pour-beer>
    
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
    </div>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  public selectedEmptiness: string = "all";
  onChange(optionFromMenu){
    this.selectedEmptiness = optionFromMenu;
    console.log(this.selectedEmptiness);
  }
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { PourBeerComponent } from './pour-beer.component';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">
    <div id="options" class="col-xs-6 col-xs-offset-5">
      <select (change)="onChange($event.target.value)" class="filter">
        <option value="all" selected="selected">Show All</option>
        <option value="almostEmpty">Show Almost Empty!</option>
        <option value="full">Show Full</option>
      </select>
    </div>
  </div>
  <div *ngFor="let currentKeg of childKegList | emptiness:selectedEmptiness">
    <div id="list" class="col-xs-4">
      <div [class.cheapBeer]="currentKeg.price < 5.5">
      <div [class.tipsyBeer]="currentKeg.abv > 6">
      <div [class.beer]="currentKeg.price > 0">
        <h3>{{ currentKeg.brand }}</h3>
        <h4>{{currentKeg.name}}</h4>
        <p>Cost: $ {{currentKeg.price}}</p>
        <p>ABV: {{currentKeg.abv}}%</p>
        <p>Pints until empty: {{currentKeg.pintsLeft}}</p>
        <pour-beer [childKeg]="currentKeg"></pour-beer>
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit</button>
      </div>
      </div>
      </div>
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

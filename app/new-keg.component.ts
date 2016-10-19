import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <div>
      <label>Enter Keg Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Enter Beer Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Enter Price Per Pint:</label>
      <input #newPrice>
    </div>
    <div>
      <label>Enter ABV:</label>
      <input #newAbv>
      <button (click)="
      addClicked(newBrand.value, newName.value, newPrice.value, newAbv.value);
      newBrand.value='';
      newName.value='';
      newPrice.value='';
      newAbv.value='';
      ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(brand: string, name: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(brand, name, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model'

@Component({
  selector: 'new-keg',
  template: `
    <div class="col-xs-6">
      <div class="well">
        <h1>New Keg</h1>
        <div class="form-group">
          <label>Enter Keg Brand:</label><br>
          <input #newBrand>
        </div>
        <div class="form-group">
          <label>Enter Beer Name:</label><br>
          <input #newName>
        </div>
        <div class="form-group">
          <label>Enter Pint Price:</label><br>
          <input #newPrice>
        </div>
        <div class="form-group">
          <label>Enter Alcohol %:</label><br>
          <input #newAbv>
          <br>
          <button (click)="
          addClicked(newBrand.value, newName.value, newPrice.value, newAbv.value);
          newBrand.value='';
          newName.value='';
          newPrice.value='';
          newAbv.value='';
          " class="add-keg btn btn-danger">Add</button>
        </div>
      </div>
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

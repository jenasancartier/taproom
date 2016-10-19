import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
      <div *ngIf="childSelectedKeg">
        <h1>Edit Keg</h1>
        <div>
          <label>Enter Keg Brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand">
        </div>
        <div>
          <label>Enter Beer Name:</label>
          <input [(ngModel)]="childSelectedKeg.name">
        </div>
        <div>
          <label>Enter Price Per Pint:</label>
          <input [(ngModel)]="childSelectedKeg.price">
        </div>
        <div>
          <label>Enter ABV:</label>
          <input [(ngModel)]="childSelectedKeg.abv">
          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
}

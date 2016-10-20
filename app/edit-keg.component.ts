import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div class="col-xs-6">
      <div class="well">
        <div class="edit-keg">
          <div *ngIf="childSelectedKeg">
            <h1>Edit Keg</h1>
            <div class="form-group">
              <label>Enter Keg Brand:</label><br>
              <input [(ngModel)]="childSelectedKeg.brand">
            </div>
            <div class="form-group">
              <label>Enter Beer Name:</label><br>
              <input [(ngModel)]="childSelectedKeg.name">
            </div>
            <div class="form-group">
              <label>Enter Pint Price:</label><br>
              <input [(ngModel)]="childSelectedKeg.price">
            </div>
            <div class="form-group">
              <label>Enter Alcohol %:</label><br>
              <input [(ngModel)]="childSelectedKeg.abv">
              <br>
              <button (click)="doneClicked()"
              class="btn btn-danger">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

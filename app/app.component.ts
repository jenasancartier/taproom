import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container body">
    <div class="jumbotron">
      <h1>Beer Bar</h1>
    </div>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
    ></edit-keg>
    <keg-list
      [childKegList]="masterKegList"
      (clickSender)="showDetails($event)"
      ></keg-list>
  </div>

  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Hop Slice Session IPA", "Deschutes", 5, 4.5),
    new Keg("Mosaic Fresh Hop Fresh Squeezed", "Deschutes", 6, 5.8),
    new Keg("Sage Flight IPA", "Deschutes", 6, 9),
    new Keg("Call Me! A Blondie Ale", "Widmer Brothers", 4, 4.3),
    new Keg("Monster Mash Imperial Porter", "Lompoc", 6, 8),
    new Keg("IPA", "Backpedal Brewing", 5.5, 5),
    new Keg("Black Widow Porter", "McMenamins", 5.75, 6.7),
    new Keg("Dream Girl Summer Ale", "McMenamins", 5, 4.1),
    new Keg("Chronically ILL", "Great Notion Brewing", 7, 10),
  ];
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg) {
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
}

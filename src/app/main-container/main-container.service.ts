import { Injectable } from '@angular/core';
import {Item} from '../item/item';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from "rxjs/Rx";

@Injectable()
export class MainContainerService {

  constructor(private af: AngularFire) { }

  private fetchItems() {
    return this.af.database.list('/items');
  }

  private generateGridColumnClass(item: Item) {
    item.columnClass = 'bit-' + item.column;
    return item;
  }

  getItems() {
    return this.fetchItems().flatMap(item => item)
      .map(item => this.generateGridColumnClass(item))
      .scan((acc, item) => {
        return acc.concat([item]);
      }, []);
  }
}

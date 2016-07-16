import { Injectable } from '@angular/core';
import {ItemActions} from '../item/item.actions';
import { AngularFire } from 'angularfire2';
import {Store} from '@ngrx/store';
import {AppState} from '../common/interfaces';
import {Item} from '../item/item.model';

@Injectable()
export class MainContainerService {

  constructor(
    private af: AngularFire,
    private store: Store<AppState>,
    private itemActions: ItemActions
  ) {
    this.af.database.list('/items')
      .subscribe(items => {
        this.store.dispatch(this.itemActions.addItems(items));
      });
  }
  pushItem(item: Item) {
    return this.af.database.list('/items').push(item);
  }
}

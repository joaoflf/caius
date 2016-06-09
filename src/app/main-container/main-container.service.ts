import { Injectable } from '@angular/core';
import {ItemActions} from "../item/item.actions";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Store} from "@ngrx/store";
import {AppState} from "../common/interfaces";

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
}

import { Injectable } from '@angular/core';
import {Item} from '../item/item';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Store} from "@ngrx/store";
import {AppState} from "../common/interfaces";

@Injectable()
export class MainContainerService {

  constructor(private af: AngularFire, private _store: Store<AppState>) {
    this.af.database.list('/items')
      .flatMap(item => item)
      .subscribe(item => {
        this._store.dispatch({ type: 'ADD_ITEM', payload: item });
        this._store.dispatch({ type: 'ADD_COLUMN_CLASS', payload: item.id });
      });
  }
}

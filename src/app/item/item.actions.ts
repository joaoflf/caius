import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import {Item} from './item.model';
import { Observable } from 'rxjs/Observable';
import {AppState} from "../common/interfaces";

@Injectable()
export class ItemActions {
  static ADD_ITEMS = '[Item] Add Items';
  addItems(items: Item[]): Action {
    return {
      type: ItemActions.ADD_ITEMS,
      payload: items
    };
  }

  static CREATE_ITEM = '[Item] Create Item';
  createItem(item: Item): Action {
    return {
      type: ItemActions.CREATE_ITEM,
      payload: item
    };
  }
}

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Item } from './item.model';

@Injectable()
export class ItemActions {
  static ADD_ITEMS = '[Item] Add Items';
  addItems(items: Item[]): Action {
    return {
      type: ItemActions.ADD_ITEMS,
      payload: items
    };
  }

  static ADD_ITEM = '[Item] Add Item';
  addItem(item: Item): Action {
    return {
      type: ItemActions.ADD_ITEM,
      payload: item
    };
  }

  static ADD_ITEM_FINISHED = '[Item] Add Item locally';
  addItemFinished(): Action {
    return {
      type: ItemActions.ADD_ITEM_FINISHED,
      payload: {}
    };
  }
}

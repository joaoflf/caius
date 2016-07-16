import {ActionReducer, Action} from '@ngrx/store';
import {Item} from './item.model';
import {ItemActions} from './item.actions';
import { AngularFire } from 'angularfire2';

// exporting the Items imterface as Item[] array
export interface ItemsState {
  [index: number]: Item;
};

const initialState = [];


export const items: ActionReducer<ItemsState> = (state = initialState, action: Action): ItemsState => {

  let af: AngularFire;
  switch (action.type) {
    case ItemActions.ADD_ITEMS:
      return action.payload;
    case ItemActions.ADD_ITEM_FINISHED:
      return state;
    default:
      return state;
  }
};

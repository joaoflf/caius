import {ActionReducer, Action} from "@ngrx/store";
import {Item} from "./item.model";
import {ItemActions} from "./item.actions";

//exporting the Items imterface as Item[] array
export interface ItemsState {
  [index: number]: Item;
};

const initialState = [];

export const items: ActionReducer<ItemsState> = (state = initialState, action: Action): ItemsState => {
  switch (action.type) {
    case ItemActions.ADD_ITEMS:
      return action.payload;
    case ItemActions.CREATE_ITEM:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

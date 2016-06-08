import {ActionReducer, Action} from "@ngrx/store";
import {Item} from "../../item/item";

export const items: ActionReducer<Item[]> = (state: Item[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.payload
      ];
    case 'ADD_COLUMN_CLASS':
      return state.map(item => {
        if (item.id !== action.payload) {
          return item;
        }
        return Object.assign({}, item, {
          columnClass: 'bit-' + item.column
        });
      });
    default:
      return state;
  }

}

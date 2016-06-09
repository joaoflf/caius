import {ItemsState} from "../item/item.reducers";

//build app state interface from all module/features state interfaces
export interface AppState {
  items: ItemsState
}

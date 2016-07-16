import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';
import {MainContainerService} from '../main-container/main-container.service';
import {ItemActions} from '../item/item.actions';

@Injectable()
export class ItemEffects {
  @Effect() addItemFirebase$ = this.updates$
      .whenAction(ItemActions.ADD_ITEM)
      .map((update) => {
        this.mainContainerService.pushItem(update.action.payload);
      }).map(result => this.itemActions.addItemFinished());


  constructor(
      private updates$: StateUpdates<any>,
      private mainContainerService: MainContainerService,
      private itemActions: ItemActions
  ) { }
}

import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ItemContainerComponent} from '../item-container/item-container.component';
import {ItemWizardComponent} from '../item-wizard/item-wizard.component';
import {ItemActions} from '../item/item.actions';
import {MainContainerService} from './main-container.service';
import {Item} from '../item/item.model';
import {Observable, Subject} from 'rxjs/Rx';
import {Store, Action} from '@ngrx/store';
import {AppState} from '../common/interfaces';


@Component({
   
  selector: 'caius-main-container',
  templateUrl: 'main-container.component.html',
  styleUrls: ['main-container.component.scss'],
  directives: [ItemContainerComponent, HeaderComponent, ItemWizardComponent],
  providers: [ItemActions]
})
export class MainContainerComponent implements OnInit {
  items: Observable<Item[]> = Observable.create();
  actions$ = new Subject<Action>();
  isWizardVisible: boolean = false;

  constructor(
    private mainContainerService: MainContainerService,
    private _store: Store<AppState>,
    private itemActions: ItemActions
  ) {}

  ngOnInit() {
    this.actions$.subscribe(this._store);
    this.items = this._store.select<Item[]>('items');
   }

  createItem() {
    this.isWizardVisible = true;
    console.log(this.isWizardVisible)
    // this.actions$.next(
    //   this.itemActions.addItem({ columns: 2 })
    // );
  }
}

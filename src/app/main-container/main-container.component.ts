import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ItemContainerComponent} from '../item-container/item-container.component';
import {ItemActions} from "../item/item.actions";
import {MainContainerService} from './main-container.service';
import {Item} from '../item/item.model';
import {Observable} from "rxjs/Rx";
import {Store} from "@ngrx/store";
import {AppState} from "../common/interfaces";


@Component({
  moduleId: module.id,
  selector: 'caius-main-container',
  templateUrl: 'main-container.component.html',
  styleUrls: ['main-container.component.css'],
  directives: [ItemContainerComponent, HeaderComponent],
  providers: [ItemActions, MainContainerService]
})
export class MainContainerComponent implements OnInit {
  constructor(
    private mainContainerService: MainContainerService,
    private _store: Store<AppState>
  ) { }

  items: Observable<Item[]> = Observable.create();

  ngOnInit() {
    this.items = this._store.select<Item[]>('items');
  }
}

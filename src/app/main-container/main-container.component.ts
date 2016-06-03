import {Component, OnInit} from '@angular/core';
import {ItemContainerComponent} from '../item-container/item-container.component';
import {MainContainerService} from './main-container.service';
import {Item} from '../item/item';
import {Observable} from "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'caius-main-container',
  templateUrl: 'main-container.component.html',
  styleUrls: ['main-container.component.css'],
  directives: [ItemContainerComponent],
  providers: [MainContainerService]
})
export class MainContainerComponent implements OnInit {
  constructor(private mainContainerService: MainContainerService) { }

  items: Observable<Item[]> = Observable.create();

  ngOnInit() {
    this.items = this.mainContainerService.getItems();
  }
}

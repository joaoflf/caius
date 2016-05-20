import {Component, OnInit} from '@angular/core';
import {ItemContainerComponent} from '../item-container/item-container.component';
import {MainContainerService} from './main-container.service';
import {Item} from '../item/item';

@Component({
  moduleId: module.id,
  selector: 'caius-main-container',
  templateUrl: 'main-container.component.html',
  styleUrls: ['main-container.component.css'],
  directives: [ItemContainerComponent],
  providers: [MainContainerService]
})
export class MainContainerComponent implements OnInit {
  constructor(
    private mainContainerService: MainContainerService
  ) {}

  items: Item[];

  ngOnInit() {
    this.mainContainerService.getItems().then(
      items => this.items = items
    )
  }
}

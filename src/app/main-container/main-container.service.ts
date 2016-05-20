import { Injectable } from '@angular/core';
import { ITEMS } from '../item/mock-items';

@Injectable()
export class MainContainerService {

  getItems() {
    return Promise.resolve(ITEMS);
  }

}

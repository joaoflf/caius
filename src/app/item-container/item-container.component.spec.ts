import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ItemContainerComponent} from './item-container.component';

describe('Component: ItemContainer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ItemContainerComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ItemContainerComponent], (component: ItemContainerComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ItemContainerComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ItemContainerComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <caius-item-container></caius-item-container>
  `,
  directives: [ItemContainerComponent]
})
class ItemContainerComponentTestController {
}

import {beforeEach, beforeEachProviders, describe, expect, it, inject,} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {MainContainerComponent} from './main-container.component';

describe('Component: MainContainer', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MainContainerComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([MainContainerComponent], (component: MainContainerComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(MainContainerComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(MainContainerComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <caius-main-container></caius-main-container>
  `,
  directives: [MainContainerComponent]
})
class MainContainerComponentTestController {
}

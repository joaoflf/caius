/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ItemWizardComponent } from './item-wizard.component';

describe('Component: ItemWizard', () => {
  it('should create an instance', () => {
    let component = new ItemWizardComponent();
    expect(component).toBeTruthy();
  });
});

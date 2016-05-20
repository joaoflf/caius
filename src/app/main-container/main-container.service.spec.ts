import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MainContainerService } from './main-container.service';

describe('MainService Service', () => {
  beforeEachProviders(() => [MainContainerService]);

  it('should ...',
      inject([MainContainerService], (service: MainContainerService) => {
    expect(service).toBeTruthy();
  }));
});

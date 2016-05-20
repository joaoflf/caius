import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {CaiusAppComponent} from '../app/caius.component';

beforeEachProviders(() => [CaiusAppComponent]);

describe('App: Caius', () => {
  it('should create the app',
     inject([CaiusAppComponent], (app: CaiusAppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'caius works!\'',
     inject([CaiusAppComponent], (app: CaiusAppComponent) => {
       expect(app.title).toEqual('caius works!');
     }));
});

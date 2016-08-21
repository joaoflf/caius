import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaiusAppComponent } from './caius.component';
import { MainContainerService } from './main-container/main-container.service';
import { FIREBASE_PROVIDERS, AngularFireModule } from 'angularfire2';
import { provideStore } from '@ngrx/store';
import * as APP_REDUCERS from './common/reducers';
import { runEffects } from '@ngrx/effects';
import { ItemEffects } from './item/item.effects';
import { ItemActions } from './item/item.actions';

@NgModule({
  declarations: [
    CaiusAppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCYSCUG-WtmtwcEckIrQ2--xGJR6-u1Hz8',
      authDomain: 'project-7105213021383303500.firebaseapp.com',
      databaseURL: 'https://project-7105213021383303500.firebaseio.com',
      storageBucket: 'project-7105213021383303500.appspot.com',
    })
  ],
  providers: [MainContainerService,
    FIREBASE_PROVIDERS,
    ItemActions,
    provideStore(APP_REDUCERS),
    runEffects(ItemEffects)],
  entryComponents: [CaiusAppComponent],
  bootstrap: [CaiusAppComponent]
})
export class AppModule {

}

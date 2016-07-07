import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {CaiusAppComponent, environment} from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import {provideStore} from "@ngrx/store";
import * as APP_REDUCERS from "./app/common/reducers";


if (environment.production) {
  enableProdMode();
}

bootstrap(CaiusAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyCYSCUG-WtmtwcEckIrQ2--xGJR6-u1Hz8",
    authDomain: "project-7105213021383303500.firebaseapp.com",
    databaseURL: "https://project-7105213021383303500.firebaseio.com",
    storageBucket: "project-7105213021383303500.appspot.com",
  }),
  provideStore(APP_REDUCERS)
]);

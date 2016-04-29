import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {NavamidApp} from './app/navamid.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(NavamidApp);

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { Todoapp2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Todoapp2AppComponent,[HTTP_PROVIDERS]);

import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Todoapp2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Todoapp2AppComponent);

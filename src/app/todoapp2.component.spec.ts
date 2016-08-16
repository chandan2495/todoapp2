import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Todoapp2AppComponent } from '../app/todoapp2.component';

beforeEachProviders(() => [Todoapp2AppComponent]);

describe('App: Todoapp2', () => {
  it('should create the app',
      inject([Todoapp2AppComponent], (app: Todoapp2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'todoapp2 works!\'',
      inject([Todoapp2AppComponent], (app: Todoapp2AppComponent) => {
    expect(app.title).toEqual('todoapp2 works!');
  }));
});

"use strict";
var testing_1 = require('@angular/core/testing');
var todoapp2_component_1 = require('../app/todoapp2.component');
testing_1.beforeEachProviders(function () { return [todoapp2_component_1.Todoapp2AppComponent]; });
testing_1.describe('App: Todoapp2', function () {
    testing_1.it('should create the app', testing_1.inject([todoapp2_component_1.Todoapp2AppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    // it('should have as title \'todoapp2 works!\'',
    //     inject([Todoapp2AppComponent], (app: Todoapp2AppComponent) => {
    //   expect(app.title).toEqual('todoapp2 works!');
    // }));
});
//# sourceMappingURL=todoapp2.component.spec.js.map
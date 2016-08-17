"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var Todoapp2AppComponent = (function () {
    function Todoapp2AppComponent() {
        this.item = "";
        this.toolbarcolor = "#00cc00";
        this.views = [
            {
                name: "Pending Tasks",
                description: "List of pending tasks",
                icon: "assignment"
            },
            {
                name: "Completed Tasks",
                description: "List of completed tasks",
                icon: "assignment_turned_in"
            }
        ];
        this.todos = [
            { todo: "R2", completed: false },
        ];
    }
    Todoapp2AppComponent.prototype.addItem = function () {
        if (this.item) {
            this.todos.push({ "todo": this.item, "completed": false });
            this.item = "";
        }
    };
    Todoapp2AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todoapp2-app',
            templateUrl: 'todoapp2.component.html',
            styleUrls: ['todoapp2.component.css'],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                input_1.MdInput,
                checkbox_1.MdCheckbox,
                radio_1.MdRadioGroup,
                radio_1.MdRadioButton,
                icon_1.MdIcon
            ],
            providers: [icon_1.MdIconRegistry, radio_1.MdRadioDispatcher],
        }), 
        __metadata('design:paramtypes', [])
    ], Todoapp2AppComponent);
    return Todoapp2AppComponent;
}());
exports.Todoapp2AppComponent = Todoapp2AppComponent;
//# sourceMappingURL=todoapp2.component.js.map
import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';


@Component({
  moduleId: module.id,
  selector: 'todoapp2-app',
  templateUrl: 'todoapp2.component.html',
  styleUrls: ['todoapp2.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],
})
export class Todoapp2AppComponent {
  item : string = "";
  toolbarcolor: string = "#00cc00";
  views: Object[] = [
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
  todos: Object[] = [
    {todo: "R2", completed: false, color: "#333"},
  ];

  addItem() {
    if (this.item) {
      this.todos.push({"todo": this.item, "completed":false, color: "#333"});
      this.item="";
    }
  }
  done(index: number) {
    if (this.todos[index]["completed"])
      this.todos[index]["color"]="#ddd";
    else
      this.todos[index]["color"]="#333";
  }
}

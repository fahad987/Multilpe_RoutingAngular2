import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  template: `<input #newTodo
      (keyup.enter)="addtodo(newTodo.value)"
      (blur)="addtodo(newTodo.value); newTodo.value='' ">

    <button (click)=addtodo(newTodo.value)>Add</button>

    <ul><li *ngFor="let todo of todos;let i = index">{{todo}}<button (click)=delTodo(i)>Delete</button></li></ul>
  `
})
export class Page2Component { 
  todos = ['fahad'];
  addtodo(newTodo: string) {
    if (newTodo) {
      this.todos.push(newTodo);
    }
  }
  delTodo(i: number) {
      this.todos.splice(i,1);
  }
 }
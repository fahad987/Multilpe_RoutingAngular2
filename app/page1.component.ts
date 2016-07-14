import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  template: '<h1>Hello {{name}}</h1>'
})
export class Page1Component {
  name: string;
  constructor(){
    this.name = 'fahad'
  }
 }
import { Component } from '@angular/core';
@Component({
selector: 'page3',
template: `<div> {{counter}}</div>
               <button (click)="addCounter()">Add</button>
              `
})
export class Page3Component{
     counter: number;
    constructor() {
        this.counter = 0;
    }
    
    addCounter(): void {
        this.counter++;
    }
}
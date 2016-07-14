import { Component } from '@angular/core';

@Component({
selector: 'page5',
template: `<input [value]="'hello' + name">`
})
export class Page5Component{
    name: string;
    constructor(){
        this.name="fahad";
    }
}
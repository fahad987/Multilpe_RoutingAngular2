import { Component } from '@angular/core';

@Component({
selector:'page8',
template:`<div [style.background-color]="'yellow'" [style.font-size.px]="fontSize">
                Uses fixed yellow background with dynamic font size
            </div>
            <button (click)="increaseFontSize()">Increase Font Size</button>`
})
export class Page8Component{
     fontSize: number;
    
    constructor(){
        this.fontSize = 12;
    }
    
    increaseFontSize(){
        return ++this.fontSize;
    }
}
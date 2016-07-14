import { Component } from '@angular/core';

@Component({
 selector: 'page4',
 template: `<ul>
   <li *ngFor="let name of names">Hello {{ name }}</li>
 </ul>`
})
export class Page4Component {
     names: string[];

    constructor() {
        this.names = ['fahad','Umar','Noor','Rana'];
    }
}
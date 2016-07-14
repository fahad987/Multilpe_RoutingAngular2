import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
              <a [routerLink]="['/page1']">Template variable</a><br>
              <a [routerLink]="['/page2']"> Todo List </a><br>
              <a [routerLink]="['/page3']"> Event </a><br>
              <a [routerLink]="['/page4']"> Array </a><br>
              <a [routerLink]="['/page5']"> Binding ProPerties </a><br>
              <a [routerLink]="['/page6']"> ngIf</a><br>
              <a [routerLink]="['/page7']"> ngSwitch</a><br>
              <a [routerLink]="['/page8']">ngStyle</a><br>
              <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  title: string;

  constructor(){
    this.title = "My first test of Multiple Routing ";
  }
}

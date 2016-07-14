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
var Page6Component = (function () {
    function Page6Component() {
        this.a = 5;
        this.b = 4;
    }
    Page6Component.prototype.myFunction = function () {
        return true;
    };
    Page6Component = __decorate([
        core_1.Component({
            selector: 'page6',
            template: "<div *ngIf=\"false\">This will not show</div>\n              <div *ngIf=\"true\">This will show</div>\n              <div *ngIf=\"a > b\">This will show because 5 is greater then 4</div>\n              <div *ngIf=\"myFunction()\">This will show because function returns a true value</div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Page6Component);
    return Page6Component;
}());
exports.Page6Component = Page6Component;
//# sourceMappingURL=page6.component.js.map
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
export var ErrorAlterComponent = (function () {
    function ErrorAlterComponent() {
    }
    ErrorAlterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], ErrorAlterComponent.prototype, "errors", void 0);
    ErrorAlterComponent = __decorate([
        Component({
            selector: 'error-alert',
            template: "\n            <div *ngIf=\"errors.length>0\" class=\"alert alert-danger\">\n                    <p *ngFor=\"let error of errors\">\n                      {{error}}\n                    </p>\n                  </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorAlterComponent);
    return ErrorAlterComponent;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/component/error-altert.component.js.map
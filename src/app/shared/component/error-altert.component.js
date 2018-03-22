"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ErrorAlterComponent = (function () {
    function ErrorAlterComponent() {
    }
    ErrorAlterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ErrorAlterComponent.prototype, "errors", void 0);
    ErrorAlterComponent = __decorate([
        core_1.Component({
            selector: 'error-alert',
            template: "\n            <div *ngIf=\"errors.length>0\" class=\"alert alert-danger\">\n                    <p *ngFor=\"let error of errors\">\n                      {{error}}\n                    </p>\n                  </div>\n            "
        })
    ], ErrorAlterComponent);
    return ErrorAlterComponent;
}());
exports.ErrorAlterComponent = ErrorAlterComponent;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
export var LengthValidator = (function () {
    function LengthValidator() {
    }
    LengthValidator.prototype.validate = function (c) {
        if (c.value != null) {
            if (c.value.length != this.length) {
                return {
                    lengthError: {
                        valid: false
                    }
                };
            }
        }
        return null;
    };
    __decorate([
        Input("validateLength"), 
        __metadata('design:type', Number)
    ], LengthValidator.prototype, "length", void 0);
    LengthValidator = __decorate([
        Directive({
            selector: "[validateLength]",
            providers: [{
                    provide: NG_VALIDATORS,
                    useExisting: LengthValidator,
                    multi: true
                }]
        }), 
        __metadata('design:paramtypes', [])
    ], LengthValidator);
    return LengthValidator;
}());
//# sourceMappingURL=/Users/ychostMac/Desktop/web_front/src/src/app/shared/validator/length.validator.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var company_routing_module_1 = require("./company-routing.module");
var company_component_1 = require("./company.component");
var CompanyModule = (function () {
    function CompanyModule() {
    }
    return CompanyModule;
}());
CompanyModule = __decorate([
    core_1.NgModule({
        imports: [company_routing_module_1.CompanyRoutingModule],
        exports: [company_component_1.CompanyComponent],
        declarations: [company_component_1.CompanyComponent],
        providers: []
    })
], CompanyModule);
exports.CompanyModule = CompanyModule;

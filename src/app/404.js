"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var p404Component = /** @class */ (function () {
    function p404Component() {
        this.msg = 'Angular 404!';
    }
    p404Component.prototype.ngOnInit = function () {
    };
    p404Component = __decorate([
        core_1.Component({
            selector: 'app-404',
            templateUrl: './404.html',
        })
    ], p404Component);
    return p404Component;
}());
exports.p404Component = p404Component;
//# sourceMappingURL=404.js.map
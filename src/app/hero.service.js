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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Observable } from 'rxjs/Observable';
var msg_service_1 = require("./msg.service");
//import 'rxjs/add/observable/of';
//import { of } from 'rxjs/observable/of';
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var HeroService = /** @class */ (function () {
    function HeroService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.heroesUrl = 'api/heroes';
    }
    /** Log a HeroService message with the MessageService */
    HeroService.prototype.log = function (message) {
        this.messageService.add("HeroService: " + message);
    };
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        this.messageService.add('HeroService: fetched heroes');
        return this.http.get(this.heroesUrl).pipe(operators_1.tap(function (_) { return _this.log('fetched heroes'); }), operators_1.catchError(this.handleError('getHeroes', [])));
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        // TODO: send the message _after_ fetching the hero
        this.messageService.add("HeroService: fetched hero id=" + id);
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return _this.log("fetched hero id=" + id); }), operators_1.catchError(this.handleError("getHero id=" + id)));
    };
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    HeroService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return rxjs_1.of(result);
        };
    };
    HeroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            msg_service_1.MessageService])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map
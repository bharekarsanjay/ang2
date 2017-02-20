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
var IncomeService_1 = require('./IncomeService');
var Income = (function () {
    function Income() {
        this.onSendData = new core_1.EventEmitter();
        // this.totalAmt = _service.totalAmt;
    }
    Income.prototype.ngOnChanges = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Income.prototype, "incomeCatData", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Income.prototype, "onSendData", void 0);
    Income = __decorate([
        core_1.Component({
            selector: 'fb-income',
            templateUrl: 'app/components/dashboard/income/income.html',
            providers: [IncomeService_1.IncomeService],
        }), 
        __metadata('design:paramtypes', [])
    ], Income);
    return Income;
}());
exports.Income = Income;
//# sourceMappingURL=income.js.map
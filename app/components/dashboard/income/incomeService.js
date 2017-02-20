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
var Observable_1 = require('rxjs/Observable');
var mock_incomeData_1 = require('./mock-incomeData');
var IncomeService = (function () {
    function IncomeService() {
        this.incomeData1 = mock_incomeData_1.incomeData;
        this.totalAmt = null;
        this.mainCatData = [
            { catid: 1, catName: 'Ganpati', catTotalAmt: 0, catData: [], monthData: [] },
            { catid: 2, catName: 'Swami', catTotalAmt: 0, catData: [], monthData: [] },
            { catid: 3, catName: 'Mhasoba Karndak', catTotalAmt: 0, catData: [], monthData: [] },
            { catid: 4, catName: 'Rent', catTotalAmt: 0, catData: [], monthData: [] },
            { catid: 5, catName: 'Other', catTotalAmt: 0, catData: [], monthData: [] },
        ];
    }
    IncomeService.prototype.getAllIncomeCatData = function () {
        return this.mainCatData;
    };
    IncomeService.prototype.getCategoryIncomeData = function (catId) {
        for (var i = 0; i < this.mainCatData.length; i++) {
            if (this.mainCatData[i].catid == catId) {
                return this.mainCatData[i];
            }
        }
    };
    IncomeService.prototype.getMonthCatData = function () {
        for (var i = 0; i < this.mainCatData.length; i++) {
            var monthData1 = [
                { id: 1, monthName: "Jan", totalAmt: 0, data: [] },
                { id: 2, monthName: "Feb", totalAmt: 0, data: [] },
                { id: 3, monthName: "Mar", totalAmt: 0, data: [] },
                { id: 4, monthName: "Apr", totalAmt: 0, data: [] },
                { id: 5, monthName: "May", totalAmt: 0, data: [] },
                { id: 6, monthName: "Jun", totalAmt: 0, data: [] },
                { id: 7, monthName: "Jul", totalAmt: 0, data: [] },
                { id: 8, monthName: "Aug", totalAmt: 0, data: [] },
                { id: 9, monthName: "Sep", totalAmt: 0, data: [] },
                { id: 10, monthName: "Oct", totalAmt: 0, data: [] },
                { id: 11, monthName: "Nov", totalAmt: 0, data: [] },
                { id: 12, monthName: "Dec", totalAmt: 0, data: [] }
            ];
            for (var j = 0; j < this.mainCatData[i].catData.length; j++) {
                var a = this.mainCatData[i].catData[j].receivedDate;
                var bb = a.split("/");
                var aa = parseInt(bb[1]);
                console.log(" Function call");
                switch (aa) {
                    case 1:
                        monthData1[0].totalAmt = this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[0].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 2:
                        monthData1[1].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[1].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 3:
                        monthData1[2].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[2].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 4:
                        monthData1[3].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[3].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 5:
                        monthData1[4].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[4].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 6:
                        monthData1[5].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[5].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 7:
                        monthData1[6].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[6].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 8:
                        monthData1[7].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[7].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 9:
                        monthData1[8].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[8].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 10:
                        monthData1[9].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[9].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 11:
                        monthData1[10].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[10].data.push(this.mainCatData[i].catData[j]);
                        break;
                    case 12:
                        monthData1[11].totalAmt += this.mainCatData[i].catData[j].receiptAmt;
                        monthData1[11].data.push(this.mainCatData[i].catData[j]);
                        break;
                }
                this.mainCatData[i].monthData = monthData1;
            }
        }
    };
    IncomeService.prototype.getAllData = function () {
        this.incomeData1 = mock_incomeData_1.incomeData;
        return mock_incomeData_1.incomeData;
    };
    IncomeService.prototype.getTotalAmt = function () {
        if (!this.totalAmt) {
            for (var i = 0; i < this.incomeData1.length; i++) {
                for (var j = 0; j < this.mainCatData.length; j++) {
                    if (this.mainCatData[j].catName == this.incomeData1[i].receiptMainCategoory) {
                        this.mainCatData[j].catData.push(this.incomeData1[j]);
                        this.mainCatData[j].catTotalAmt = this.mainCatData[j].catTotalAmt + this.incomeData1[i].receiptAmt;
                    }
                }
                this.totalAmt = this.totalAmt + this.incomeData1[i].receiptAmt;
            }
            return { totalAmt: this.totalAmt, allCatData: this.mainCatData };
        }
        else {
            this.createObservable(this.totalAmt);
        }
    };
    IncomeService.prototype.createObservable = function (data) {
        return Observable_1.Observable.create(function (observer) {
            observer.next(data);
            observer.complete();
        });
    };
    IncomeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], IncomeService);
    return IncomeService;
}());
exports.IncomeService = IncomeService;
//# sourceMappingURL=IncomeService.js.map
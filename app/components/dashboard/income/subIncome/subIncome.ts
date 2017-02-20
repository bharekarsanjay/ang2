 import { Component,Input } from '@angular/core';

@Component({
  selector: 'fb-sub-income',
  templateUrl: 'app/components/dashboard/income/subIncome/subIncome.html',

})
export class Income { 
 incomeCatData;
 
totalAmt;

 constructor(/* private _service:IncomeService */){
/*
 this.totalAmt = this._service.getTotalAmt();
 this.incomeCatData = this._service.mainCatData;
 console.log(this.incomeCatData);

 */
}

}
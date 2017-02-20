 import { Component } from '@angular/core';
  import {IncomeService } from './income/IncomeService';
  import {IncomeInterface } from './income/incomeInterface'; 

@Component({
  selector: 'fb-dashboard',
  templateUrl: 'app/components/dashboard/dashboard.html',
    providers:[IncomeService],

})
export class Dashboard {
  mainCatData = {};
  constructor( private _service:IncomeService){
   this.mainCatData = _service.getTotalAmt();

    

  }
 }


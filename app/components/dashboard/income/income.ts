 import { Component,Output,EventEmitter, Input } from '@angular/core';
 import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

 import {IncomeService } from './IncomeService';
 import { IncomeInterface } from './incomeInterface';

@Component({
  selector: 'fb-income',
  templateUrl: 'app/components/dashboard/income/income.html',
  providers:[IncomeService],

})
export class Income { 
@Input() incomeCatData;

 @Output() onSendData = new EventEmitter()
public totalAmt:number; 

 constructor(){

// this.totalAmt = _service.totalAmt;
}
 
 ngOnChanges(){


 }
}
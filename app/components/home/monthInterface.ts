import { Observable } from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {IncomeInterface} from '../dashboard/income/IncomeInterface';

export interface MonthInterface {

               id: number,
               monthName:string,
               totalAmt:number,
               data:IncomeInterface[]


}
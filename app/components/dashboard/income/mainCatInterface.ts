import {IncomeInterface} from './IncomeInterface';
import {MonthInterface} from '../../home/monthInterface'


export interface MainCatInterface {
            catid:number,
            catName:string, 
            catTotalAmt:number, 
            catData:IncomeInterface[],
            monthData:MonthInterface[],
}
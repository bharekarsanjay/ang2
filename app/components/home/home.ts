 import { Component,Input } from '@angular/core';
 import {IncomeService } from '../dashboard/income/IncomeService';
 import { IncomeInterface } from '../dashboard/income/incomeInterface';
 import { MonthInterface } from './monthInterface';



// webpack html imports
//let template = require('./line-chart-demo.html');

@Component({
  selector: 'line-chart-demo',
  templateUrl: 'app/components/home/home.html',
   providers:[IncomeService]


})
export class Home {
  // lineChart
  	@Input() monthbaseCatData;
  public lineChartData:Array<any> = [];
 // public lineChartLabels:Array<any> =[];
  constructor( private _service:IncomeService){       
 //     this.lineChartData[i].labelData = 
   
    
  }
  
  ngOnChanges(){
 console.log( this.monthbaseCatData);

 for(var i=0; i< this.monthbaseCatData.allCatData.length; i++)
 {
    var monthData1:MonthInterface[]=[
    {    id:1,    monthName:"Jan",    totalAmt:0, data:[] },
    {    id:2,    monthName:"Feb",    totalAmt:0 , data:[] },
    {    id:3,    monthName:"Mar",    totalAmt:0 , data:[]  },
    {    id:4,    monthName:"Apr",    totalAmt:0 , data:[]  },
    {    id:5,    monthName:"May",    totalAmt:0  , data:[] },
    {    id:6,    monthName:"Jun",    totalAmt:0 , data:[]  },
    {    id:7,    monthName:"Jul",    totalAmt:0 , data:[]  },
    {    id:8,    monthName:"Aug",    totalAmt:0 , data:[]  },
    {    id:9,    monthName:"Sep",    totalAmt:0 , data:[]  },
    {    id:10,    monthName:"Oct",    totalAmt:0 , data:[]  },
    {    id:11,    monthName:"Nov",    totalAmt:0 , data:[]  },
    {    id:12,    monthName:"Dec",    totalAmt:0 , data:[]  }   
    
    ] ;

          for(var j=0;  j < this.monthbaseCatData.allCatData[i].catData.length; j++ )
         {
           var a= this.monthbaseCatData.allCatData[i].catData[j].receivedDate;
           var bb = a.split("/");
           var aa = parseInt(bb[1]);
           console.log(" Function call");

           
            switch (aa) {
    case 1:
      monthData1[0].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[0].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
    case 2:
         monthData1[1].totalAmt+=  this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
         monthData1[1].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   

    case 3:
         monthData1[2].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[2].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
    case 4:
          monthData1[3].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[3].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   

    case 5:
         monthData1[4].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[4].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
    case 6:
          monthData1[5].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[5].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
case 7:
         monthData1[6].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[6].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
  case 8:
            monthData1[7].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[7].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
case 9:
      monthData1[8].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[8].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
case 10:
           monthData1[9].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[9].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   case 11:
            monthData1[10].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[10].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   
case 12:
            monthData1[11].totalAmt = this.monthbaseCatData.allCatData[i].catData[j].receiptAmt;
      monthData1[11].data.push(this.monthbaseCatData.allCatData[i].catData[j]);
        break;
   


}

           
           this.monthbaseCatData.allCatData[i].monthData = monthData1;

         }

       


 }
 console.log("Monthdata " + this.monthbaseCatData.allCatData);

 for(var x=0; x< this.monthbaseCatData.allCatData.length; x++)
 {
    var obj = {data:[],lable:""}

    for(var i =0; i<this.monthbaseCatData.allCatData[x].monthData.length; i++){
        obj.data.push(this.monthbaseCatData.allCatData[x].monthData[i].totalAmt);
      
    }
    
    obj.lable=this.monthbaseCatData.allCatData[x].catName;
    
    this.lineChartData.push({data:obj.data,label:obj.lable});
console.log(this.lineChartData)
   // this.lineChartData[x].label=obj.lable;
 }

  }
 /*
var obj = {data:[],lable:""}
   for( var i=0; i<this.monthbaseCatData.allCatData.length;i++)
      {
        for(var j=0; j< this.monthbaseCatData.allCatData[i].monthCatData.length; j++)
        {
            obj.data.push(this.monthbaseCatData.allCatData[i].monthCatData[j])
        }
      } 
 }

/*
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  
  */

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','Aug','Sept','Oct','Nov','Dec'];

  public lineChartOptions:any = {
    animation: false,
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}


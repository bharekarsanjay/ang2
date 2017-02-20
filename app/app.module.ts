import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
 import { ChartsModule } from 'ng2-charts/ng2-charts';


import { AppComponent }   from './app.component';
import {SignUp } from './components/signUp/signUp';
 import {Home} from './components/home/home';
import {Login } from './components/login/login';
import {Dashboard } from './components/dashboard/dashboard';
import {Income} from './components/dashboard/income/income';
import { IncomeService } from './components/dashboard/income/incomeService';
@NgModule({
  imports:      [ BrowserModule,ChartsModule,RouterModule.forRoot([
      {
        path: 'signUp',
        component: SignUp
      },
      {
        path: '',
        component: Login
      },
      {
        path: 'login',
        component: Login
      },{
        path: 'dashboard',
        component: Dashboard
      }

    ]) ],
    providers:[IncomeService],
  declarations: [ AppComponent ,SignUp,Login,Dashboard,Income ,Home],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var app_component_1 = require('./app.component');
var signUp_1 = require('./components/signUp/signUp');
var home_1 = require('./components/home/home');
var login_1 = require('./components/login/login');
var dashboard_1 = require('./components/dashboard/dashboard');
var income_1 = require('./components/dashboard/income/income');
var incomeService_1 = require('./components/dashboard/income/incomeService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_charts_1.ChartsModule, router_1.RouterModule.forRoot([
                    {
                        path: 'signUp',
                        component: signUp_1.SignUp
                    },
                    {
                        path: '',
                        component: login_1.Login
                    },
                    {
                        path: 'login',
                        component: login_1.Login
                    }, {
                        path: 'dashboard',
                        component: dashboard_1.Dashboard
                    }
                ])],
            providers: [incomeService_1.IncomeService],
            declarations: [app_component_1.AppComponent, signUp_1.SignUp, login_1.Login, dashboard_1.Dashboard, income_1.Income, home_1.Home],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
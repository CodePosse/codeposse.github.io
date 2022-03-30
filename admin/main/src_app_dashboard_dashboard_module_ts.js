"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 93223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 93223);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-echarts */ 45877);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-gauge */ 65383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);













class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule,
            ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule.forRoot({
                echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! echarts */ 72750, 23)),
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
            ngx_gauge__WEBPACK_IMPORTED_MODULE_11__.NgxGaugeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, ngx_echarts__WEBPACK_IMPORTED_MODULE_4__.NgxEchartsModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabsModule,
        ngx_gauge__WEBPACK_IMPORTED_MODULE_11__.NgxGaugeModule] }); })();


/***/ }),

/***/ 82987:
/*!*********************************************!*\
  !*** ./src/app/dashboard/main/chartdata.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataSeries": () => (/* binding */ dataSeries)
/* harmony export */ });
const dataSeries = [
    [
        {
            date: '2014-01-01',
            value: 20000000,
        },
        {
            date: '2014-01-02',
            value: 10379978,
        },
        {
            date: '2014-01-03',
            value: 30493749,
        },
        {
            date: '2014-01-04',
            value: 10785250,
        },
        {
            date: '2014-01-05',
            value: 33901904,
        },
        {
            date: '2014-01-06',
            value: 11576838,
        },
        {
            date: '2014-01-07',
            value: 14413854,
        },
        {
            date: '2014-01-08',
            value: 15177211,
        },
        {
            date: '2014-01-09',
            value: 16622100,
        },
        {
            date: '2014-01-10',
            value: 17381072,
        },
        {
            date: '2014-01-11',
            value: 18802310,
        },
        {
            date: '2014-01-12',
            value: 15531790,
        },
        {
            date: '2014-01-13',
            value: 15748881,
        },
        {
            date: '2014-01-14',
            value: 18706437,
        },
        {
            date: '2014-01-15',
            value: 19752685,
        },
        {
            date: '2014-01-16',
            value: 21016418,
        },
        {
            date: '2014-01-17',
            value: 25622924,
        },
        {
            date: '2014-01-18',
            value: 25337480,
        },
        {
            date: '2014-01-19',
            value: 22258882,
        },
        {
            date: '2014-01-20',
            value: 23829538,
        },
        {
            date: '2014-01-21',
            value: 24245689,
        },
        {
            date: '2014-01-22',
            value: 26429711,
        },
        {
            date: '2014-01-23',
            value: 26259017,
        },
        {
            date: '2014-01-24',
            value: 25396183,
        },
        {
            date: '2014-01-25',
            value: 23107346,
        },
        {
            date: '2014-01-26',
            value: 28659852,
        },
        {
            date: '2014-01-27',
            value: 25270783,
        },
        {
            date: '2014-01-28',
            value: 26270783,
        },
        {
            date: '2014-01-29',
            value: 27270783,
        },
        {
            date: '2014-01-30',
            value: 28270783,
        },
        {
            date: '2014-01-31',
            value: 29270783,
        },
        {
            date: '2014-02-01',
            value: 30270783,
        },
        {
            date: '2014-02-02',
            value: 31270783,
        },
        {
            date: '2014-02-03',
            value: 32270783,
        },
        {
            date: '2014-02-04',
            value: 33270783,
        },
        {
            date: '2014-02-05',
            value: 28270783,
        },
        {
            date: '2014-02-06',
            value: 27270783,
        },
        {
            date: '2014-02-07',
            value: 35270783,
        },
        {
            date: '2014-02-08',
            value: 34270783,
        },
        {
            date: '2014-02-09',
            value: 28270783,
        },
        {
            date: '2014-02-10',
            value: 35270783,
        },
        {
            date: '2014-02-11',
            value: 36270783,
        },
        {
            date: '2014-02-12',
            value: 34127078,
        },
        {
            date: '2014-02-13',
            value: 33124078,
        },
        {
            date: '2014-02-14',
            value: 36227078,
        },
        {
            date: '2014-02-15',
            value: 37827078,
        },
        {
            date: '2014-02-16',
            value: 36427073,
        },
        {
            date: '2014-02-17',
            value: 37570783,
        },
        {
            date: '2014-02-18',
            value: 38627073,
        },
        {
            date: '2014-02-19',
            value: 37727078,
        },
        {
            date: '2014-02-20',
            value: 38827073,
        },
        {
            date: '2014-02-21',
            value: 40927078,
        },
        {
            date: '2014-02-22',
            value: 41027078,
        },
        {
            date: '2014-02-23',
            value: 42127073,
        },
        {
            date: '2014-02-24',
            value: 43220783,
        },
        {
            date: '2014-02-25',
            value: 44327078,
        },
        {
            date: '2014-02-26',
            value: 40427078,
        },
        {
            date: '2014-02-27',
            value: 41027078,
        },
        {
            date: '2014-02-28',
            value: 45627078,
        },
        {
            date: '2014-03-01',
            value: 44727078,
        },
        {
            date: '2014-03-02',
            value: 44227078,
        },
        {
            date: '2014-03-03',
            value: 45227078,
        },
        {
            date: '2014-03-04',
            value: 46027078,
        },
        {
            date: '2014-03-05',
            value: 46927078,
        },
        {
            date: '2014-03-06',
            value: 47027078,
        },
        {
            date: '2014-03-07',
            value: 46227078,
        },
        {
            date: '2014-03-08',
            value: 47027078,
        },
        {
            date: '2014-03-09',
            value: 48027078,
        },
        {
            date: '2014-03-10',
            value: 47027078,
        },
        {
            date: '2014-03-11',
            value: 47027078,
        },
        {
            date: '2014-03-12',
            value: 48017078,
        },
        {
            date: '2014-03-13',
            value: 48077078,
        },
        {
            date: '2014-03-14',
            value: 48087078,
        },
        {
            date: '2014-03-15',
            value: 48017078,
        },
        {
            date: '2014-03-16',
            value: 48047078,
        },
        {
            date: '2014-03-17',
            value: 48067078,
        },
        {
            date: '2014-03-18',
            value: 48077078,
        },
        {
            date: '2014-03-19',
            value: 48027074,
        },
        {
            date: '2014-03-20',
            value: 48927079,
        },
        {
            date: '2014-03-21',
            value: 48727071,
        },
        {
            date: '2014-03-22',
            value: 48127072,
        },
        {
            date: '2014-03-23',
            value: 48527072,
        },
        {
            date: '2014-03-24',
            value: 48627027,
        },
        {
            date: '2014-03-25',
            value: 48027040,
        },
        {
            date: '2014-03-26',
            value: 48027043,
        },
        {
            date: '2014-03-27',
            value: 48057022,
        },
        {
            date: '2014-03-28',
            value: 49057022,
        },
        {
            date: '2014-03-29',
            value: 50057022,
        },
        {
            date: '2014-03-30',
            value: 51057022,
        },
        {
            date: '2014-03-31',
            value: 52057022,
        },
        {
            date: '2014-04-01',
            value: 53057022,
        },
        {
            date: '2014-04-02',
            value: 54057022,
        },
        {
            date: '2014-04-03',
            value: 52057022,
        },
        {
            date: '2014-04-04',
            value: 55057022,
        },
        {
            date: '2014-04-05',
            value: 58270783,
        },
        {
            date: '2014-04-06',
            value: 56270783,
        },
        {
            date: '2014-04-07',
            value: 55270783,
        },
        {
            date: '2014-04-08',
            value: 58270783,
        },
        {
            date: '2014-04-09',
            value: 59270783,
        },
        {
            date: '2014-04-10',
            value: 60270783,
        },
        {
            date: '2014-04-11',
            value: 61270783,
        },
        {
            date: '2014-04-12',
            value: 62270783,
        },
        {
            date: '2014-04-13',
            value: 63270783,
        },
        {
            date: '2014-04-14',
            value: 64270783,
        },
        {
            date: '2014-04-15',
            value: 65270783,
        },
        {
            date: '2014-04-16',
            value: 66270783,
        },
        {
            date: '2014-04-17',
            value: 67270783,
        },
        {
            date: '2014-04-18',
            value: 68270783,
        },
        {
            date: '2014-04-19',
            value: 69270783,
        },
        {
            date: '2014-04-20',
            value: 70270783,
        },
        {
            date: '2014-04-21',
            value: 71270783,
        },
        {
            date: '2014-04-22',
            value: 72270783,
        },
        {
            date: '2014-04-23',
            value: 73270783,
        },
        {
            date: '2014-04-24',
            value: 74270783,
        },
        {
            date: '2014-04-25',
            value: 75270783,
        },
        {
            date: '2014-04-26',
            value: 76660783,
        },
        {
            date: '2014-04-27',
            value: 77270783,
        },
        {
            date: '2014-04-28',
            value: 78370783,
        },
        {
            date: '2014-04-29',
            value: 79470783,
        },
        {
            date: '2014-04-30',
            value: 80170783,
        },
    ],
    [
        {
            date: '2014-01-01',
            value: 150000000,
        },
        {
            date: '2014-01-02',
            value: 160379978,
        },
        {
            date: '2014-01-03',
            value: 170493749,
        },
        {
            date: '2014-01-04',
            value: 160785250,
        },
        {
            date: '2014-01-05',
            value: 167391904,
        },
        {
            date: '2014-01-06',
            value: 161576838,
        },
        {
            date: '2014-01-07',
            value: 161413854,
        },
        {
            date: '2014-01-08',
            value: 152177211,
        },
        {
            date: '2014-01-09',
            value: 140762210,
        },
        {
            date: '2014-01-10',
            value: 144381072,
        },
        {
            date: '2014-01-11',
            value: 154352310,
        },
        {
            date: '2014-01-12',
            value: 165531790,
        },
        {
            date: '2014-01-13',
            value: 175748881,
        },
        {
            date: '2014-01-14',
            value: 187064037,
        },
        {
            date: '2014-01-15',
            value: 197520685,
        },
        {
            date: '2014-01-16',
            value: 210176418,
        },
        {
            date: '2014-01-17',
            value: 196122924,
        },
        {
            date: '2014-01-18',
            value: 207337480,
        },
        {
            date: '2014-01-19',
            value: 200258882,
        },
        {
            date: '2014-01-20',
            value: 186829538,
        },
        {
            date: '2014-01-21',
            value: 192456897,
        },
        {
            date: '2014-01-22',
            value: 204299711,
        },
        {
            date: '2014-01-23',
            value: 192759017,
        },
        {
            date: '2014-01-24',
            value: 203596183,
        },
        {
            date: '2014-01-25',
            value: 208107346,
        },
        {
            date: '2014-01-26',
            value: 196359852,
        },
        {
            date: '2014-01-27',
            value: 192570783,
        },
        {
            date: '2014-01-28',
            value: 177967768,
        },
        {
            date: '2014-01-29',
            value: 190632803,
        },
        {
            date: '2014-01-30',
            value: 203725316,
        },
        {
            date: '2014-01-31',
            value: 218226177,
        },
        {
            date: '2014-02-01',
            value: 210698669,
        },
        {
            date: '2014-02-02',
            value: 217640656,
        },
        {
            date: '2014-02-03',
            value: 216142362,
        },
        {
            date: '2014-02-04',
            value: 201410971,
        },
        {
            date: '2014-02-05',
            value: 196704289,
        },
        {
            date: '2014-02-06',
            value: 190436945,
        },
        {
            date: '2014-02-07',
            value: 178891686,
        },
        {
            date: '2014-02-08',
            value: 171613962,
        },
        {
            date: '2014-02-09',
            value: 157579773,
        },
        {
            date: '2014-02-10',
            value: 158677098,
        },
        {
            date: '2014-02-11',
            value: 147129977,
        },
        {
            date: '2014-02-12',
            value: 151561876,
        },
        {
            date: '2014-02-13',
            value: 151627421,
        },
        {
            date: '2014-02-14',
            value: 143543872,
        },
        {
            date: '2014-02-15',
            value: 136581057,
        },
        {
            date: '2014-02-16',
            value: 135560715,
        },
        {
            date: '2014-02-17',
            value: 122625263,
        },
        {
            date: '2014-02-18',
            value: 112091484,
        },
        {
            date: '2014-02-19',
            value: 98810329,
        },
        {
            date: '2014-02-20',
            value: 99882912,
        },
        {
            date: '2014-02-21',
            value: 94943095,
        },
        {
            date: '2014-02-22',
            value: 104875743,
        },
        {
            date: '2014-02-23',
            value: 116383678,
        },
        {
            date: '2014-02-24',
            value: 125028841,
        },
        {
            date: '2014-02-25',
            value: 123967310,
        },
        {
            date: '2014-02-26',
            value: 133167029,
        },
        {
            date: '2014-02-27',
            value: 128577263,
        },
        {
            date: '2014-02-28',
            value: 115836969,
        },
        {
            date: '2014-03-01',
            value: 119264529,
        },
        {
            date: '2014-03-02',
            value: 109363374,
        },
        {
            date: '2014-03-03',
            value: 113985628,
        },
        {
            date: '2014-03-04',
            value: 114650999,
        },
        {
            date: '2014-03-05',
            value: 110866108,
        },
        {
            date: '2014-03-06',
            value: 96473454,
        },
        {
            date: '2014-03-07',
            value: 104075886,
        },
        {
            date: '2014-03-08',
            value: 103568384,
        },
        {
            date: '2014-03-09',
            value: 101534883,
        },
        {
            date: '2014-03-10',
            value: 115825447,
        },
        {
            date: '2014-03-11',
            value: 126133916,
        },
        {
            date: '2014-03-12',
            value: 116502109,
        },
        {
            date: '2014-03-13',
            value: 130169411,
        },
        {
            date: '2014-03-14',
            value: 124296886,
        },
        {
            date: '2014-03-15',
            value: 126347399,
        },
        {
            date: '2014-03-16',
            value: 131483669,
        },
        {
            date: '2014-03-17',
            value: 142811333,
        },
        {
            date: '2014-03-18',
            value: 129675396,
        },
        {
            date: '2014-03-19',
            value: 115514483,
        },
        {
            date: '2014-03-20',
            value: 117630630,
        },
        {
            date: '2014-03-21',
            value: 122340239,
        },
        {
            date: '2014-03-22',
            value: 132349091,
        },
        {
            date: '2014-03-23',
            value: 125613305,
        },
        {
            date: '2014-03-24',
            value: 135592466,
        },
        {
            date: '2014-03-25',
            value: 123408762,
        },
        {
            date: '2014-03-26',
            value: 111991454,
        },
        {
            date: '2014-03-27',
            value: 116123955,
        },
        {
            date: '2014-03-28',
            value: 112817214,
        },
        {
            date: '2014-03-29',
            value: 113029590,
        },
        {
            date: '2014-03-30',
            value: 108753398,
        },
        {
            date: '2014-03-31',
            value: 99383763,
        },
        {
            date: '2014-04-01',
            value: 100151737,
        },
        {
            date: '2014-04-02',
            value: 94985209,
        },
        {
            date: '2014-04-03',
            value: 82913669,
        },
        {
            date: '2014-04-04',
            value: 78748268,
        },
        {
            date: '2014-04-05',
            value: 63829135,
        },
        {
            date: '2014-04-06',
            value: 78694727,
        },
        {
            date: '2014-04-07',
            value: 80868994,
        },
        {
            date: '2014-04-08',
            value: 93799013,
        },
        {
            date: '2014-04-09',
            value: 99042416,
        },
        {
            date: '2014-04-10',
            value: 97298692,
        },
        {
            date: '2014-04-11',
            value: 83353499,
        },
        {
            date: '2014-04-12',
            value: 71248129,
        },
        {
            date: '2014-04-13',
            value: 75253744,
        },
        {
            date: '2014-04-14',
            value: 68976648,
        },
        {
            date: '2014-04-15',
            value: 71002284,
        },
        {
            date: '2014-04-16',
            value: 75052401,
        },
        {
            date: '2014-04-17',
            value: 83894030,
        },
        {
            date: '2014-04-18',
            value: 90236528,
        },
        {
            date: '2014-04-19',
            value: 99739114,
        },
        {
            date: '2014-04-20',
            value: 96407136,
        },
        {
            date: '2014-04-21',
            value: 108323177,
        },
        {
            date: '2014-04-22',
            value: 101578914,
        },
        {
            date: '2014-04-23',
            value: 115877608,
        },
        {
            date: '2014-04-24',
            value: 112088857,
        },
        {
            date: '2014-04-25',
            value: 112071353,
        },
        {
            date: '2014-04-26',
            value: 101790062,
        },
        {
            date: '2014-04-27',
            value: 115003761,
        },
        {
            date: '2014-04-28',
            value: 120457727,
        },
        {
            date: '2014-04-29',
            value: 118253926,
        },
        {
            date: '2014-04-30',
            value: 117956992,
        },
    ],
    [
        {
            date: '2014-01-01',
            value: 50000000,
        },
        {
            date: '2014-01-02',
            value: 60379978,
        },
        {
            date: '2014-01-03',
            value: 40493749,
        },
        {
            date: '2014-01-04',
            value: 60785250,
        },
        {
            date: '2014-01-05',
            value: 67391904,
        },
        {
            date: '2014-01-06',
            value: 61576838,
        },
        {
            date: '2014-01-07',
            value: 61413854,
        },
        {
            date: '2014-01-08',
            value: 82177211,
        },
        {
            date: '2014-01-09',
            value: 103762210,
        },
        {
            date: '2014-01-10',
            value: 84381072,
        },
        {
            date: '2014-01-11',
            value: 54352310,
        },
        {
            date: '2014-01-12',
            value: 65531790,
        },
        {
            date: '2014-01-13',
            value: 75748881,
        },
        {
            date: '2014-01-14',
            value: 47064037,
        },
        {
            date: '2014-01-15',
            value: 67520685,
        },
        {
            date: '2014-01-16',
            value: 60176418,
        },
        {
            date: '2014-01-17',
            value: 66122924,
        },
        {
            date: '2014-01-18',
            value: 57337480,
        },
        {
            date: '2014-01-19',
            value: 100258882,
        },
        {
            date: '2014-01-20',
            value: 46829538,
        },
        {
            date: '2014-01-21',
            value: 92456897,
        },
        {
            date: '2014-01-22',
            value: 94299711,
        },
        {
            date: '2014-01-23',
            value: 62759017,
        },
        {
            date: '2014-01-24',
            value: 103596183,
        },
        {
            date: '2014-01-25',
            value: 108107346,
        },
        {
            date: '2014-01-26',
            value: 66359852,
        },
        {
            date: '2014-01-27',
            value: 62570783,
        },
        {
            date: '2014-01-28',
            value: 77967768,
        },
        {
            date: '2014-01-29',
            value: 60632803,
        },
        {
            date: '2014-01-30',
            value: 103725316,
        },
        {
            date: '2014-01-31',
            value: 98226177,
        },
        {
            date: '2014-02-01',
            value: 60698669,
        },
        {
            date: '2014-02-02',
            value: 67640656,
        },
        {
            date: '2014-02-03',
            value: 66142362,
        },
        {
            date: '2014-02-04',
            value: 101410971,
        },
        {
            date: '2014-02-05',
            value: 66704289,
        },
        {
            date: '2014-02-06',
            value: 60436945,
        },
        {
            date: '2014-02-07',
            value: 78891686,
        },
        {
            date: '2014-02-08',
            value: 71613962,
        },
        {
            date: '2014-02-09',
            value: 107579773,
        },
        {
            date: '2014-02-10',
            value: 58677098,
        },
        {
            date: '2014-02-11',
            value: 87129977,
        },
        {
            date: '2014-02-12',
            value: 51561876,
        },
        {
            date: '2014-02-13',
            value: 51627421,
        },
        {
            date: '2014-02-14',
            value: 83543872,
        },
        {
            date: '2014-02-15',
            value: 66581057,
        },
        {
            date: '2014-02-16',
            value: 65560715,
        },
        {
            date: '2014-02-17',
            value: 62625263,
        },
        {
            date: '2014-02-18',
            value: 92091484,
        },
        {
            date: '2014-02-19',
            value: 48810329,
        },
        {
            date: '2014-02-20',
            value: 49882912,
        },
        {
            date: '2014-02-21',
            value: 44943095,
        },
        {
            date: '2014-02-22',
            value: 104875743,
        },
        {
            date: '2014-02-23',
            value: 96383678,
        },
        {
            date: '2014-02-24',
            value: 105028841,
        },
        {
            date: '2014-02-25',
            value: 63967310,
        },
        {
            date: '2014-02-26',
            value: 63167029,
        },
        {
            date: '2014-02-27',
            value: 68577263,
        },
        {
            date: '2014-02-28',
            value: 95836969,
        },
        {
            date: '2014-03-01',
            value: 99264529,
        },
        {
            date: '2014-03-02',
            value: 109363374,
        },
        {
            date: '2014-03-03',
            value: 93985628,
        },
        {
            date: '2014-03-04',
            value: 94650999,
        },
        {
            date: '2014-03-05',
            value: 90866108,
        },
        {
            date: '2014-03-06',
            value: 46473454,
        },
        {
            date: '2014-03-07',
            value: 84075886,
        },
        {
            date: '2014-03-08',
            value: 103568384,
        },
        {
            date: '2014-03-09',
            value: 101534883,
        },
        {
            date: '2014-03-10',
            value: 95825447,
        },
        {
            date: '2014-03-11',
            value: 66133916,
        },
        {
            date: '2014-03-12',
            value: 96502109,
        },
        {
            date: '2014-03-13',
            value: 80169411,
        },
        {
            date: '2014-03-14',
            value: 84296886,
        },
        {
            date: '2014-03-15',
            value: 86347399,
        },
        {
            date: '2014-03-16',
            value: 31483669,
        },
        {
            date: '2014-03-17',
            value: 82811333,
        },
        {
            date: '2014-03-18',
            value: 89675396,
        },
        {
            date: '2014-03-19',
            value: 95514483,
        },
        {
            date: '2014-03-20',
            value: 97630630,
        },
        {
            date: '2014-03-21',
            value: 62340239,
        },
        {
            date: '2014-03-22',
            value: 62349091,
        },
        {
            date: '2014-03-23',
            value: 65613305,
        },
        {
            date: '2014-03-24',
            value: 65592466,
        },
        {
            date: '2014-03-25',
            value: 63408762,
        },
        {
            date: '2014-03-26',
            value: 91991454,
        },
        {
            date: '2014-03-27',
            value: 96123955,
        },
        {
            date: '2014-03-28',
            value: 92817214,
        },
        {
            date: '2014-03-29',
            value: 93029590,
        },
        {
            date: '2014-03-30',
            value: 108753398,
        },
        {
            date: '2014-03-31',
            value: 49383763,
        },
        {
            date: '2014-04-01',
            value: 100151737,
        },
        {
            date: '2014-04-02',
            value: 44985209,
        },
        {
            date: '2014-04-03',
            value: 52913669,
        },
        {
            date: '2014-04-04',
            value: 48748268,
        },
        {
            date: '2014-04-05',
            value: 23829135,
        },
        {
            date: '2014-04-06',
            value: 58694727,
        },
        {
            date: '2014-04-07',
            value: 50868994,
        },
        {
            date: '2014-04-08',
            value: 43799013,
        },
        {
            date: '2014-04-09',
            value: 4042416,
        },
        {
            date: '2014-04-10',
            value: 47298692,
        },
        {
            date: '2014-04-11',
            value: 53353499,
        },
        {
            date: '2014-04-12',
            value: 71248129,
        },
        {
            date: '2014-04-13',
            value: 75253744,
        },
        {
            date: '2014-04-14',
            value: 68976648,
        },
        {
            date: '2014-04-15',
            value: 71002284,
        },
        {
            date: '2014-04-16',
            value: 75052401,
        },
        {
            date: '2014-04-17',
            value: 83894030,
        },
        {
            date: '2014-04-18',
            value: 50236528,
        },
        {
            date: '2014-04-19',
            value: 59739114,
        },
        {
            date: '2014-04-20',
            value: 56407136,
        },
        {
            date: '2014-04-21',
            value: 108323177,
        },
        {
            date: '2014-04-22',
            value: 101578914,
        },
        {
            date: '2014-04-23',
            value: 95877608,
        },
        {
            date: '2014-04-24',
            value: 62088857,
        },
        {
            date: '2014-04-25',
            value: 92071353,
        },
        {
            date: '2014-04-26',
            value: 81790062,
        },
        {
            date: '2014-04-27',
            value: 105003761,
        },
        {
            date: '2014-04-28',
            value: 100457727,
        },
        {
            date: '2014-04-29',
            value: 98253926,
        },
        {
            date: '2014-04-30',
            value: 67956992,
        },
    ],
];


/***/ }),

/***/ 93223:
/*!**************************************************!*\
  !*** ./src/app/dashboard/main/main.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _chartdata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartdata */ 82987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gauge */ 65383);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);








const _c0 = ["chart"];
function MainComponent_ng_template_270_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Computer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MainComponent_ng_template_292_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Camera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor() {
        this.gaugeType = 'arch';
        this.gaugeValue = 48;
        this.gaugeSize = 170;
        this.guageThick = 16;
        this.thresholdConfig = {
            0: { color: 'green' },
            40: { color: 'orange' },
            75.5: { color: 'red' },
        };
        this.gaugeType2 = 'arch';
        this.gaugeValue2 = 34;
        this.gaugeSize2 = 170;
        this.guageThick2 = 16;
        this.thresholdConfig2 = {
            0: { color: 'green' },
            40: { color: 'orange' },
            75.5: { color: 'red' },
        };
        this.chart1();
        this.chart2();
        this.smallChart();
        this.smallChart2();
    }
    chart1() {
        let ts2 = 1484418600000;
        let dates = [];
        for (let i = 0; i < 120; i++) {
            ts2 = ts2 + 86400000;
            dates.push([ts2, _chartdata__WEBPACK_IMPORTED_MODULE_0__.dataSeries[1][i].value]);
        }
        this.areaChartOptions = {
            series: [
                {
                    name: 'Booking Per Day',
                    data: dates,
                },
            ],
            chart: {
                type: 'area',
                stacked: false,
                height: 250,
                toolbar: {
                    show: true,
                },
                foreColor: '#9aa0ac',
            },
            colors: ['#9F8DF1', '#E79A3B'],
            dataLabels: {
                enabled: false,
            },
            markers: {
                size: 0,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            stroke: {
                curve: 'smooth',
            },
            yaxis: {
                labels: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
                title: {
                    text: 'Booking',
                },
            },
            xaxis: {
                type: 'datetime',
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                offsetX: 0,
                offsetY: 0,
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
                y: {
                    formatter: function (val) {
                        return (val / 1000000).toFixed(0);
                    },
                },
            },
        };
    }
    chart2() {
        this.barChartOptions = {
            series: [
                {
                    name: 'Net Profit',
                    data: [44, 55, 57, 56, 61, 58],
                },
                {
                    name: 'Revenue',
                    data: [76, 85, 101, 98, 87, 105],
                },
            ],
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false,
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2,
                },
                foreColor: '#9aa0ac',
            },
            colors: ['#5C9FFB', '#AEAEAE'],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '50%',
                    borderRadius: 5,
                },
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)',
                },
            },
            tooltip: {
                theme: 'dark',
                marker: {
                    show: true,
                },
                x: {
                    show: true,
                },
                y: {
                    formatter: function (val) {
                        return '$ ' + val + ' thousands';
                    },
                },
            },
        };
    }
    smallChart() {
        this.circleChartOptions = {
            series2: [76, 67, 61, 90],
            chart: {
                height: 260,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        },
                    },
                },
            },
            colors: ['#569C4D', '#72B1AC', '#EA8A2A', '#4772A0'],
            labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 50,
                offsetY: 10,
                labels: {
                    useSeriesColors: true,
                },
                formatter: function (seriesName, opts) {
                    return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
                },
                itemMargin: {
                    horizontal: 3,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false,
                        },
                    },
                },
            ],
        };
    }
    smallChart2() {
        this.pieChartOptions = {
            series2: [44, 55, 13, 43, 22],
            chart: {
                type: 'donut',
                width: 200,
            },
            legend: {
                show: false,
            },
            dataLabels: {
                enabled: false,
            },
            labels: ['Science', 'Mathes', 'Economics', 'History', 'Music'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {},
                },
            ],
        };
    }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 569, vars: 45, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header", "mt-n3"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "fw-bold"], [1, "font-weight-normal", "mb-0"], [1, "col-xl-5"], [1, "w-100"], [1, "col-sm-6"], [1, "card"], [1, "card-body"], [1, "col", "mt-0"], [1, "card-title"], [1, "col-auto"], [1, "col-green"], [1, "fas", "fa-user-friends", "pull-left", "card-icon", "col-orange", "font-30"], [1, "mt-1", "mb-3"], [1, "mb-0"], [1, "text-success", "m-r-10"], [1, "material-icons", "col-green", "align-middle"], [1, "text-muted"], [1, "col-purple"], [1, "fas", "fa-cart-plus", "pull-left", "card-icon", "font-30"], [1, "text-danger", "m-r-10"], [1, "material-icons", "col-red", "align-middle"], [1, "col-blue"], [1, "fas", "fa-headset", "pull-left", "card-icon", "font-30"], [1, "fas", "fa-dollar-sign", "pull-left", "card-icon", "font-30"], [1, "col-xl-7"], [1, "header"], [1, "body"], ["id", "chart"], [3, "series", "chart", "xaxis", "yaxis", "colors", "stroke", "legend", "tooltip", "dataLabels"], [1, "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "colors", "stroke", "tooltip", "xaxis"], [1, "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], [1, "list-unstyled", "list-unstyled-noborder"], [1, "sales-group-list", "top-sell"], [1, "fas", "fa-mobile-alt", "bg-purple", "sell-icon"], [1, "set-flex"], [1, "sell-price"], [1, "font-weight-600", "text-muted", "text-small"], [1, "product-title"], [1, "product-price"], [1, "budget-price-label", "col-green"], [1, "fas", "fa-laptop", "bg-blue", "sell-icon"], [1, "fas", "fa-headset", "bg-teal", "sell-icon"], [1, "fas", "fa-camera", "bg-green", "sell-icon"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-4", "col-xl-4"], [1, "media-list", "position-relative"], ["id", "project-team-scroll", 1, "table-responsive"], [1, "table", "table-hover", "table-xl", "mb-0"], [1, "text-truncate"], [1, "list-unstyled", "order-list"], [1, "avatar", "avatar-sm"], ["src", "assets/images/user/user8.jpg", "alt", "user", "title", "", "matTooltip", "Wildan Ahdian", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", "title", "", "matTooltip", "John Deo", 1, "rounded-circle"], ["src", "assets/images/user/user10.jpg", "alt", "user", "title", "", "matTooltip", "Sarah Smith", 1, "rounded-circle"], [1, "badge", "badge-primary"], [1, "list-unstyled", "order-list", "m-b-0"], ["src", "assets/images/user/user1.jpg", "alt", "user", "title", "", "matTooltip", "Wildan Ahdian", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", "title", "", "matTooltip", "John Deo", 1, "rounded-circle"], ["src", "assets/images/user/user2.jpg", "alt", "user", "title", "", "matTooltip", "Sarah Smith", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", "title", "", "matTooltip", "Wildan Ahdian", 1, "rounded-circle"], ["src", "assets/images/user/user9.jpg", "alt", "user", "title", "", "matTooltip", "Sarah Smith", 1, "rounded-circle"], ["src", "assets/images/user/user5.jpg", "alt", "user", "title", "", "matTooltip", "Sarah Smith", 1, "rounded-circle"], ["src", "assets/images/user/user3.jpg", "alt", "user", "title", "", "matTooltip", "Wildan Ahdian", 1, "rounded-circle"], [1, "col-xs-12", "col-sm-12", "col-md-4", "col-lg-4"], ["mat-align-tabs", "start", 1, "custom-tabs", 3, "selectedIndex"], ["mat-tab-label", "", "class", "custom-tabs-label"], [1, "mt-5"], [1, "guage-chart-center", 3, "value", "size", "type", "thick", "thresholds"], [1, "font-27"], [1, "font-15", "text-muted"], [1, "d-flex", "w-100", "text-center", "mt-5", "ml-0", "mr-0", "pb-3"], [1, "col-6"], [1, "col-6", "border-right"], [1, "h4", "fw-bold", "mb-0"], [1, "small", "text-gray"], [3, "series", "chart", "plotOptions", "labels", "legend", "colors", "responsive"], [1, "col-4"], [1, "text-muted", "font-15", "text-truncate"], [1, "fas", "fa-arrow-circle-up", "col-green", "m-r-5"], [1, "fas", "fa-arrow-circle-down", "col-red", "m-r-5"], [1, "text-muted", "text-truncate"], [1, "apex-pie-center", 3, "series", "chart", "labels", "responsive", "dataLabels", "legend"], [1, "table-responsive", "m-t-15"], [1, "table", "align-items-center"], [1, "fa", "fa-circle", "col-blue", "msr-2"], [1, "fa", "fa-circle", "col-orange", "msr-2"], [1, "col-orange"], [1, "fa", "fa-circle", "col-green", "msr-2"], [1, "row", "clearfix"], [1, "doc-file-type"], [1, "list-unstyled", 2, "position", "relative", "max-height", "370px", 3, "perfectScrollbar"], [1, "d-flex", "mb-3"], [1, "msr-3", "align-self-center", "img-icon", "primary-rgba", "text-primary"], [1, "far", "fa-file-word"], [1, "font-16", "mb-1"], [1, "ms-auto"], [1, "far", "fa-trash-alt", "psr-3"], [1, "far", "fa-arrow-alt-circle-down"], [1, "msr-3", "align-self-center", "img-icon", "success-rgba", "text-success"], [1, "far", "fa-file-excel"], [1, "msr-3", "align-self-center", "img-icon", "danger-rgba", "text-danger"], [1, "far", "fa-file-pdf"], [1, "msr-3", "align-self-center", "img-icon", "info-rgba", "text-info"], [1, "far", "fa-file-archive"], [1, "text-center", "p-t-20"], ["mat-stroked-button", "", "color", "primary"], [1, "col-12", "col-sm-12", "col-md-12", "col-lg-8", "col-xl-8"], ["id", "client-details", 1, "tableBody"], [1, "table-responsive"], [1, "table", "table-hover", "dashboard-task-infos"], [1, "table-img"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "badge", "col-orange"], ["src", "assets/images/user/user1.jpg", "alt", ""], [1, "badge", "col-blue"], ["src", "assets/images/user/user4.jpg", "alt", ""], [1, "badge", "col-green"], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user9.jpg", "alt", ""], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user7.jpg", "alt", ""], [1, "fas", "fa-laptop", "font-22", "tab-icon"], [1, "font-15"], [1, "fas", "fa-camera", "font-22", "tab-icon"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Hi, Welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Axen Dashboard,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3)(12, "div", 9)(13, "div", 10)(14, "div", 3)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 3)(19, "div", 14)(20, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "New Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "456");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "span", 21)(29, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " 10.32% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12)(35, "div", 13)(36, "div", 3)(37, "div", 14)(38, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Orders Received");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16)(41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "103");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 20)(46, "span", 26)(47, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " -10.64% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11)(53, "div", 12)(54, "div", 13)(55, "div", 3)(56, "div", 14)(57, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Inquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 16)(60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "3,423");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 20)(65, "span", 21)(66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " 21..19% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 12)(72, "div", 13)(73, "div", 3)(74, "div", 14)(75, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 16)(78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "$2,352");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 20)(83, "span", 26)(84, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " -4.27% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Since last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 31)(90, "div", 12)(91, "div", 32)(92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Daily Booking Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 33)(95, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "apx-chart", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 3)(98, "div", 36)(99, "div", 12)(100, "div", 32)(101, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, " Income Survay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 33)(104, "div", 3)(105, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "apx-chart", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 38)(108, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Top Selling Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "ul", 39)(112, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 42)(115, "div", 43)(116, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "112 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 46)(121, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "$24,897");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 42)(126, "div", 43)(127, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "79 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Laptop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 46)(132, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "$12,629");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 42)(137, "div", 43)(138, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "325 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Headphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 46)(143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "$34,782");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 42)(148, "div", 43)(149, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "98 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Camera");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 46)(154, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "$11,523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 51)(157, "div", 12)(158, "div", 32)(159, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Project Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 13)(162, "div", 52)(163, "div", 53)(164, "table", 54)(165, "thead")(166, "tr")(167, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "tbody")(174, "tr")(175, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Project X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td", 55)(178, "ul", 56)(179, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "li", 57)(186, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "$8999");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "tr")(191, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Project AB2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "td", 55)(194, "ul", 62)(195, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "li", 57)(202, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "+1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "$5550");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "tr")(207, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Project DS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "td", 55)(210, "ul", 62)(211, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "li", 57)(216, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "+4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "$9000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "tr")(221, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Project XCD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "td", 55)(224, "ul", 62)(225, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "li", 57)(232, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "+2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "$7500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "tr")(237, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "Project Z2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "td", 55)(240, "ul", 62)(241, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "li", 57)(246, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "tr")(251, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Project GTe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "td", 55)(254, "ul", 62)(255, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li", 57)(260, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "+3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "$8500");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 3)(265, "div", 70)(266, "div", 12)(267, "div", 13)(268, "mat-tab-group", 71)(269, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](270, MainComponent_ng_template_270_Template, 3, 0, "ng-template", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "div", 73)(272, "ngx-gauge", 74)(273, "ngx-gauge-value")(274, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "ngx-gauge-label")(277, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "'Qty'");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "div", 77)(280, "div", 78)(281, "div", 79)(282, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "28%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 78)(287, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "70%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](292, MainComponent_ng_template_292_Template, 3, 0, "ng-template", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 73)(294, "ngx-gauge", 74)(295, "ngx-gauge-value")(296, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "ngx-gauge-label")(299, "span", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "'Qty'");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 77)(302, "div", 78)(303, "div", 79)(304, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](305, "33%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](306, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 78)(309, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "span", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Last month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "div", 70)(314, "div", 12)(315, "div", 32)(316, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 33)(319, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "apx-chart", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 3)(322, "div", 83)(323, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Target");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "$15.3k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 83)(329, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Last week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "$2.8k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "div", 83)(335, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "$12.5k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "div", 38)(341, "div", 12)(342, "div", 32)(343, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, "Chart Sample");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "div", 33)(346, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "apx-chart", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 89)(349, "table", 90)(350, "tbody")(351, "tr")(352, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "+12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "tr")(360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](364, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](365, "td", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "-12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "tr")(368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "Mathes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "td", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "+3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 95)(376, "div", 70)(377, "div", 12)(378, "div", 32)(379, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "div", 33)(382, "div", 96)(383, "ul", 97)(384, "li", 98)(385, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "div", 42)(388, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Java Programming");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, ".doc, 4.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 102)(393, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "i", 103)(395, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "li", 98)(397, "span", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 42)(400, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Angular Theory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, ".xls, 2.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "div", 102)(405, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "i", 103)(407, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "li", 98)(409, "span", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](411, "div", 42)(412, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Maths Sums Solution");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, ".pdf, 10.5 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 102)(417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "i", 103)(419, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "li", 98)(421, "span", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "div", 42)(424, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Submit Science Journal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](427, ".zip, 53.2 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](428, "div", 102)(429, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "i", 103)(431, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "li", 98)(433, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 42)(436, "h5", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](437, "Marketing Instructions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](438, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, ".doc, 5.3 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 102)(441, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "i", 103)(443, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div", 111)(445, "button", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "More Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div", 113)(448, "div", 12)(449, "div", 32)(450, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](451, "Recent Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](452, "div", 13)(453, "div", 114)(454, "div", 115)(455, "table", 116)(456, "thead")(457, "tr")(458, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Img");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Order No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](463, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](464, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "Order Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "tbody")(471, "tr")(472, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, "XY56987");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](477, "Alis Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](478, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](479, "22-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](480, "td")(481, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "$223");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "tr")(486, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "XY12587");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "Pooja Sarma");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "11-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "td")(495, "span", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](496, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](498, "$124");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](499, "tr")(500, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "img", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](503, "XY58987");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](505, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "18-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "td")(509, "span", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, "$178");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "tr")(514, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "XY56987");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](519, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](521, "16-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](522, "td")(523, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](526, "$265");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "tr")(528, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](529, "img", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "XY12587");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "Priya Mehta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](535, "23-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "td")(537, "span", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "$321");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "tr")(542, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](543, "img", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](544, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "XY58987");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "Ashton Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "28-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "td")(551, "span", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](552, "Cancelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "$321");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "tr")(556, "td", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "img", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](559, "XY3785");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](560, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](561, "Cara Stevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, "19-09-2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "td")(565, "span", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](566, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "$152");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.areaChartOptions.series)("chart", ctx.areaChartOptions.chart)("xaxis", ctx.areaChartOptions.xaxis)("yaxis", ctx.areaChartOptions.yaxis)("colors", ctx.areaChartOptions.colors)("stroke", ctx.areaChartOptions.stroke)("legend", ctx.areaChartOptions.legend)("tooltip", ctx.areaChartOptions.tooltip)("dataLabels", ctx.areaChartOptions.dataLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.barChartOptions.series)("chart", ctx.barChartOptions.chart)("dataLabels", ctx.barChartOptions.dataLabels)("plotOptions", ctx.barChartOptions.plotOptions)("yaxis", ctx.barChartOptions.yaxis)("legend", ctx.barChartOptions.legend)("colors", ctx.barChartOptions.colors)("stroke", ctx.barChartOptions.stroke)("tooltip", ctx.barChartOptions.tooltip)("xaxis", ctx.barChartOptions.xaxis);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedIndex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.gaugeValue)("size", ctx.gaugeSize)("type", ctx.gaugeType)("thick", ctx.guageThick)("thresholds", ctx.thresholdConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gaugeValue, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.gaugeValue2)("size", ctx.gaugeSize2)("type", ctx.gaugeType2)("thick", ctx.guageThick2)("thresholds", ctx.thresholdConfig2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.gaugeValue2, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.circleChartOptions.series2)("chart", ctx.circleChartOptions.chart)("plotOptions", ctx.circleChartOptions.plotOptions)("labels", ctx.circleChartOptions.labels)("legend", ctx.circleChartOptions.legend)("colors", ctx.circleChartOptions.colors)("responsive", ctx.circleChartOptions.responsive);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.pieChartOptions.series2)("chart", ctx.pieChartOptions.chart)("labels", ctx.pieChartOptions.labels)("responsive", ctx.pieChartOptions.responsive)("dataLabels", ctx.pieChartOptions.dataLabels)("legend", ctx.pieChartOptions.legend);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_2__.ChartComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__.MatTabLabel, ngx_gauge__WEBPACK_IMPORTED_MODULE_5__.NgxGauge, ngx_gauge__WEBPACK_IMPORTED_MODULE_5__.NgxGaugeValue, ngx_gauge__WEBPACK_IMPORTED_MODULE_5__.NgxGaugeLabel, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map
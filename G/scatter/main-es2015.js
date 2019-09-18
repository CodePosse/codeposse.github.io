(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | planner-planner-module */ "planner-planner-module").then(__webpack_require__.bind(null, /*! ./planner/planner.module */ "./src/app/planner/planner.module.ts")).then(m => m.PlannerModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'PerformancePlanner';
    }
}
AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["pp-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pp-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null);


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











class AppModule {
}
AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                ],
                providers: [],
                exports: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/table.js");






class MaterialModule {
}
MaterialModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\G-projects\scatter-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
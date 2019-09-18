(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_pipes/abbreviate-number.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/_pipes/abbreviate-number.pipe.ts ***!
  \**************************************************/
/*! exports provided: AbbreviateNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbbreviateNumberPipe", function() { return AbbreviateNumberPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/helper */ "./src/app/_shared/helper.ts");



var AbbreviateNumberPipe = /** @class */ (function () {
    function AbbreviateNumberPipe() {
    }
    AbbreviateNumberPipe.prototype.transform = function (value, args) {
        return Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["abbreviateNumber"])(value);
    };
    AbbreviateNumberPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'abbreviateNumber'
        })
    ], AbbreviateNumberPipe);
    return AbbreviateNumberPipe;
}());



/***/ }),

/***/ "./src/app/_pipes/math-round.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/_pipes/math-round.pipe.ts ***!
  \*******************************************/
/*! exports provided: MathRoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathRoundPipe", function() { return MathRoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MathRoundPipe = /** @class */ (function () {
    function MathRoundPipe() {
    }
    MathRoundPipe.prototype.transform = function (value, args) {
        if (typeof value !== 'number') {
            return value;
        }
        return Math.round(value).toFixed(2);
    };
    MathRoundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'mathRound'
        })
    ], MathRoundPipe);
    return MathRoundPipe;
}());



/***/ }),

/***/ "./src/app/_pipes/separate-thousands.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/_pipes/separate-thousands.pipe.ts ***!
  \***************************************************/
/*! exports provided: SeparateThousandsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeparateThousandsPipe", function() { return SeparateThousandsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SeparateThousandsPipe = /** @class */ (function () {
    function SeparateThousandsPipe() {
    }
    SeparateThousandsPipe.prototype.transform = function (value, args) {
        if (!value) {
            return 0;
        }
        var parts = value.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };
    SeparateThousandsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'separateThousands'
        })
    ], SeparateThousandsPipe);
    return SeparateThousandsPipe;
}());



/***/ }),

/***/ "./src/app/_services/app.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/app.service.ts ***!
  \******************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppService = /** @class */ (function () {
    function AppService(title) {
        this.title = title;
        this.mainTitle = 'Ad Planner';
        this.keyword_ideas = 0;
        this.selected_keywords = [];
        this.current_search_term = null;
    }
    AppService.dispatchEvent = function (event) {
        var evt = new Event(event);
        document.dispatchEvent(evt);
    };
    AppService.prototype.setTitle = function (title) {
        var t = title ? this.mainTitle + " - " + title : this.mainTitle;
        this.title.setTitle(t);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/_shared/constants.ts":
/*!**************************************!*\
  !*** ./src/app/_shared/constants.ts ***!
  \**************************************/
/*! exports provided: CUSTOM_EVENT_RESET_FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_EVENT_RESET_FILTERS", function() { return CUSTOM_EVENT_RESET_FILTERS; });
var CUSTOM_EVENT_RESET_FILTERS = 'adplanner:resetfilters';


/***/ }),

/***/ "./src/app/_shared/helper.ts":
/*!***********************************!*\
  !*** ./src/app/_shared/helper.ts ***!
  \***********************************/
/*! exports provided: abbreviateNumber, arraysEqual, sortBy, withoutDupsSimpleFilter, withoutDupsFilters, paginate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abbreviateNumber", function() { return abbreviateNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraysEqual", function() { return arraysEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutDupsSimpleFilter", function() { return withoutDupsSimpleFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withoutDupsFilters", function() { return withoutDupsFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginate", function() { return paginate; });
function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ['', 'k', 'm', 'b', 't'];
        var suffixNum = Math.floor(('' + value).length / 3);
        var shortValue = 0;
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat((suffixNum !== 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
            if (dotLessShortValue.length <= 2) {
                break;
            }
        }
        // if (shortValue % 1 != 0) shortNum = shortValue.toFixed(1);
        newValue = shortValue + suffixes[suffixNum];
    }
    return newValue;
}
function arraysEqual($1, $2) {
    if ($1 === $2) {
        return true;
    }
    if ($1 == null || $2 == null) {
        return false;
    }
    if ($1.length !== $2.length) {
        return false;
    }
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
    for (var i = 0; i < $1.length; ++i) {
        if ($1[i] !== $2[i]) {
            return false;
        }
    }
    return true;
}
/** Sort array of objects */
function sortBy(key) {
    var reverse = key.indexOf('-') !== -1;
    var k = reverse ? key.slice(1) : key;
    return function ($1, $2) {
        if ($1[k] < $2[k]) {
            return reverse ? 1 : -1;
        }
        if ($1[k] > $2[k]) {
            return reverse ? -1 : 1;
        }
        return 0;
    };
}
/** @returns return data without duplicates */
function withoutDupsSimpleFilter(data) {
    if (data === void 0) { data = []; }
    var out = [];
    var history = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var element = data_1[_i];
        if (history[element.label]) {
            continue;
        }
        out.push(element);
        history[element.label] = 1;
    }
    return out;
}
function withoutDupsFilters(data) {
    if (data === void 0) { data = []; }
    var out = [];
    var history = {};
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var element = data_2[_i];
        if (history[element.keyword]) {
            continue;
        }
        out.push(element);
        history[element.keyword] = 1;
    }
    return out;
}
function paginate(array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.is-mobile]=\"mobileQuery.matches\">\r\n  <mat-toolbar class=\"toolbar mat-snack-bar-container\">\r\n    <button mat-icon-button (click)=\"snav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <h1 class=\"app-name\">Ad Planner</h1>\r\n  </mat-toolbar>\r\n\r\n  <mat-sidenav-container\r\n    class=\"sidenav-container\"\r\n    [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"\r\n  >\r\n    <mat-sidenav\r\n      [ngStyle]=\"{ minWidth: '200px' }\"\r\n      [opened]=\"true\"\r\n      #snav\r\n      [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\r\n      [fixedInViewport]=\"mobileQuery.matches\"\r\n      fixedTopGap=\"56\"\r\n    >\r\n      <mat-nav-list *ngFor=\"let items of fillerNav; let i = index\">\r\n        <a\r\n          *ngFor=\"let nav of items; let $i = index\"\r\n          mat-list-item\r\n          [class.selected]=\"i === 0 && $i === 0\"\r\n          routerLink=\".\"\r\n          >{{ nav }}</a\r\n        >\r\n        <mat-divider *ngIf=\"i != fillerNav.length - 1\"></mat-divider>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content id=\"content\">\r\n      <ap-mode-bar\r\n        (search)=\"filter_data = $event\"\r\n        (loading)=\"loading = $event\"\r\n      ></ap-mode-bar>\r\n      <div class=\"content\">\r\n        <ap-spinner [show]=\"loading\"></ap-spinner>\r\n        <div class=\"main\">\r\n          <ap-trends-chart></ap-trends-chart>\r\n\r\n          <mat-expansion-panel [expanded]=\"true\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                <button mat-button color=\"primary\">\r\n                  <i class=\"fas fa-filter\"></i>\r\n                  Exclude adult ideas\r\n                </button>\r\n                <button mat-button color=\"primary\">\r\n                  ADD FILTERS\r\n                </button>\r\n              </mat-panel-title>\r\n              <mat-panel-description  style=\"display:block\">\r\n                Found\r\n                {{\r\n                  (dataSource && dataSource.data && dataSource.data.length) || 0\r\n                }}\r\n                keyword ideas\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n\r\n            <table class=\"table\" style=\"border-top: 0;\">\r\n              <tbody class=\"title\">\r\n                <tr>\r\n                  <td colspan=\"8\">Your search term</td>\r\n                </tr>\r\n              </tbody>\r\n\r\n              <tbody>\r\n                <tr *ngIf=\"service.current_search_term\">\r\n                  <td style=\"width: 18px;\">\r\n                    <mat-checkbox [color]=\"'primary'\"></mat-checkbox>\r\n                  </td>\r\n                  <td>{{ service.current_search_term }}</td>\r\n                  <td align=\"center\" width=\"100\">\r\n                    <img src=\"./assets/icons/LineChart1.jpg\" />\r\n                  </td>\r\n                  <td align=\"center\" width=\"100\">High</td>\r\n                  <td align=\"center\" width=\"100\">0</td>\r\n                  <td align=\"center\" width=\"100\">0.02</td>\r\n                  <td align=\"center\" width=\"100\">1.24</td>\r\n                  <td align=\"center\" width=\"100\">N/A</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table class=\"table\" style=\"border-top: 0;\">\r\n              <tbody class=\"title\">\r\n                <tr>\r\n                  <td colspan=\"8\">\r\n                    Keyword ideas\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n            <table\r\n              class=\"table\"\r\n              mat-table\r\n              [dataSource]=\"dataSource\"\r\n              style=\"border-top: 0;\"\r\n              matSort\r\n            >\r\n              <!-- Checkbox Column -->\r\n              <ng-container matColumnDef=\"select\">\r\n                <th mat-header-cell *matHeaderCellDef>\r\n                  <mat-checkbox\r\n                    [color]=\"'primary'\"\r\n                    (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\"\r\n                  >\r\n                  </mat-checkbox>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">\r\n                  <mat-checkbox\r\n                    [color]=\"'primary'\"\r\n                    (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\"\r\n                  >\r\n                  </mat-checkbox>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Keyword (by relevance)\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;text-align: left;\"\r\n                    >Keyword (by relevance)</b\r\n                  >\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let row\">{{ row.keyword }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Avg.monthly searches\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Avg.monthly searches</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  <img src=\"./assets/icons/LineChart1.jpg\" />\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Competition\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Competition</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  {{ getCompetition(row.competition) }}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Ad impression share\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Ad impression share</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  0\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Top of page bid(low range)\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Top of page bid(low range)</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  {{ row.min_bid | mathRound }}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Top of page bid(high range)\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Top of page bid(high range)</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  {{ row.max_bid | mathRound }}\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container matColumnDef=\"Account status\">\r\n                <th mat-header-cell *matHeaderCellDef mat-sort-header>\r\n                  <b style=\"color: #333;\">Account status</b>\r\n                </th>\r\n                <td\r\n                  class=\"text-center\"\r\n                  mat-cell\r\n                  *matCellDef=\"let row\"\r\n                  align=\"center\"\r\n                  width=\"100\"\r\n                >\r\n                  N/A\r\n                </td>\r\n              </ng-container>\r\n\r\n              <tr mat-header-row *matHeaderRowDef=\"columns\"></tr>\r\n              <tr\r\n                mat-row\r\n                *matRowDef=\"let row; columns: columns\"\r\n                (click)=\"selection.toggle(row)\"\r\n              ></tr>\r\n            </table>\r\n\r\n            <mat-paginator\r\n              [pageSizeOptions]=\"[5, 10, 25, 100]\"\r\n              [pageSize]=\"10\"\r\n              #paginator\r\n            ></mat-paginator>\r\n          </mat-expansion-panel>\r\n        </div>\r\n        <ap-refine-keywords\r\n          id=\"refine-keywords\"\r\n          [filter_data]=\"filter_data\"\r\n          (filtered)=\"onFiltered($event)\"\r\n        ></ap-refine-keywords>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n\n.toolbar.mat-snack-bar-container {\n  background-color: #616161; }\n\n.is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2; }\n\nh1.app-name {\n  margin-left: 8px;\n  display: contents;\n  font-size: 18px;\n  color: #fff; }\n\nh1 .kwplogo {\n  background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTYyIDI5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTEyMy41MiAyMi40NjJsNi4yMS0xNi40NjhoMi4zOTJsNi4yMSAxNi40NjhoLTIuMzQ2TDEzNC4zOTkgMThoLTYuOTIzbC0xLjYxIDQuNDYyaC0yLjM0NnptNC42NjktNi40NGg1LjQ3NGwtMi42OTEtNy40MjloLS4wOTJsLTIuNjkxIDcuNDI5em0xNi4wNzcgNi44MDhjLTEuNDU3IDAtMi43MTQtLjU3NS0zLjc3Mi0xLjcyNS0xLjA1OC0xLjE1LTEuNTg3LTIuNTc2LTEuNTg3LTQuMjc4cy41MjktMy4xMjggMS41ODctNC4yNzhjMS4wNTgtMS4xNSAyLjMxNS0xLjcyNSAzLjc3Mi0xLjcyNS44NTkgMCAxLjYzLjE4NCAyLjMxMi41NTJzMS4xOTIuODI4IDEuNTI5IDEuMzhoLjA5MmwtLjA5Mi0xLjU2NFY1Ljk5NGgyLjExNnYxNi40NjhoLTIuMDI0di0xLjU2NGgtLjA5MmMtLjMzNy41NTItLjg0NyAxLjAxMi0xLjUzIDEuMzhzLTEuNDUyLjU1Mi0yLjMxMS41NTJ6bS4zNDUtMS45MzJjLjk5NyAwIDEuODQ0LS4zNjggMi41NDItMS4xMDRzMS4wNDYtMS43MjUgMS4wNDYtMi45NjctLjM0OS0yLjIzMS0xLjA0Ni0yLjk2Ny0xLjU0NS0xLjEwNC0yLjU0Mi0xLjEwNGMtLjk4MSAwLTEuODI1LjM3Mi0yLjUzIDEuMTE1cy0xLjA1OCAxLjczLTEuMDU4IDIuOTU2LjM1MyAyLjIxMiAxLjA1OCAyLjk1NSAxLjU0OSAxLjExNiAyLjUzIDEuMTE2em0xMi4yNTkgMS45MzJjLTEuMjU3IDAtMi4yOTYtLjMwNy0zLjExNi0uOTJzLTEuNDIzLTEuMzgtMS44MDYtMi4zbDEuODg2LS43ODJjLjU5OCAxLjQxIDEuNjE4IDIuMTE2IDMuMDU5IDIuMTE2LjY2IDAgMS4yLS4xNDYgMS42MjEtLjQzN3MuNjMzLS42NzUuNjMzLTEuMTVjMC0uNzM2LS41MTQtMS4yMzQtMS41NDEtMS40OTVsLTIuMjc3LS41NTJjLS43Mi0uMTg0LTEuNDAzLS41MzMtMi4wNDctMS4wNDdzLS45NjYtMS4yMDctLjk2Ni0yLjA4MWMwLS45OTcuNDQtMS44MDYgMS4zMjMtMi40MjdzMS45MjgtLjkzMSAzLjEzOS0uOTMxYy45OTcgMCAxLjg4Ni4yMjYgMi42NjguNjc4czEuMzQyIDEuMSAxLjY3OSAxLjk0NGwtMS44NC43NTljLS40MTQtLjk5Ny0xLjI3My0xLjQ5NS0yLjU3Ni0xLjQ5NS0uNjI5IDAtMS4xNTguMTMtMS41ODcuMzkxcy0uNjQ0LjYxMy0uNjQ0IDEuMDU4YzAgLjY0NC40OTggMS4wODEgMS40OTUgMS4zMTFsMi4yMzEuNTI5YzEuMDU4LjI0NSAxLjg0LjY2NyAyLjM0NiAxLjI2NXMuNzU5IDEuMjczLjc1OSAyLjAyNGMwIDEuMDEyLS40MTQgMS44NTUtMS4yNDIgMi41M3MtMS44OTQgMS4wMTItMy4xOTcgMS4wMTJ6IiBmaWxsPSIjZmZmIi8+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNNTIuNCAyMi44Yy01LjEgMC05LjUtNC4yLTkuNS05LjNzNC4zLTkuMyA5LjUtOS4zYzIuOCAwIDQuOSAxLjEgNi40IDIuNkw1NyA4LjZjLTEuMS0xLTIuNi0xLjgtNC42LTEuOC0zLjcgMC02LjcgMy02LjcgNi44czIuOSA2LjggNi43IDYuOGMyLjQgMCAzLjgtMSA0LjctMS45LjctLjcgMS4yLTEuOCAxLjQtMy4yaC02LjF2LTIuNUg2MWMuMS41LjEgMSAuMSAxLjYgMCAxLjktLjUgNC4zLTIuMiA2LTEuNyAxLjUtMy44IDIuNC02LjUgMi40ek03NC4zIDE2LjhjMCAzLjUtMi43IDYtNS45IDYtMy4zIDAtNS45LTIuNS01LjktNnMyLjctNiA1LjktNmMzLjMgMCA1LjkgMi42IDUuOSA2em0tMi42IDBjMC0yLjItMS41LTMuNi0zLjMtMy42cy0zLjMgMS41LTMuMyAzLjYgMS41IDMuNiAzLjMgMy42YzEuOC4xIDMuMy0xLjQgMy4zLTMuNnpNODcuNiAxNi44YzAgMy41LTIuNyA2LTUuOSA2LTMuMyAwLTUuOS0yLjUtNS45LTZzMi43LTYgNS45LTYgNS45IDIuNiA1LjkgNnptLTIuNiAwYzAtMi4yLTEuNS0zLjYtMy4zLTMuNnMtMy4zIDEuNS0zLjMgMy42IDEuNSAzLjYgMy4zIDMuNmMxLjcuMSAzLjMtMS40IDMuMy0zLjZ6TTEwMC41IDExLjJWMjJjMCA0LjQtMi42IDYuMy01LjcgNi4zLTIuOSAwLTQuNy0yLTUuMy0zLjVsMi4zLTFjLjQgMSAxLjQgMi4xIDMgMi4xIDIgMCAzLjItMS4yIDMuMi0zLjV2LS45aC0uMWMtLjYuNy0xLjcgMS40LTMuMiAxLjQtMyAwLTUuNy0yLjYtNS43LTZzMi44LTYgNS43LTZjMS40IDAgMi42LjYgMy4yIDEuM2guMXYtMWgyLjV6bS0yLjMgNS43YzAtMi4xLTEuNC0zLjctMy4yLTMuN3MtMy4zIDEuNS0zLjMgMy43YzAgMi4xIDEuNSAzLjYgMy4zIDMuNnMzLjItMS42IDMuMi0zLjZ6TTEwNS4xIDQuOHYxNy42aC0yLjZWNC44ek0xMTUuNSAxOC44bDIgMS40Yy0uNyAxLTIuMiAyLjctNSAyLjctMy40IDAtNS45LTIuNi01LjktNiAwLTMuNiAyLjUtNiA1LjYtNnM0LjYgMi41IDUuMSAzLjhsLjMuNy04IDMuM2MuNiAxLjIgMS42IDEuOCAyLjkgMS44czIuMy0uNyAzLTEuN3ptLTYuMy0yLjJsNS40LTIuMmMtLjMtLjctMS4yLTEuMy0yLjItMS4zLTEuNCAwLTMuMyAxLjItMy4yIDMuNXoiLz48L2c+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNLjY2NiAxOC44NTFsOS42MjktMTYuNDg0YzEuMjIzLjcyIDcuMzkgNC4xMzMgOC4zODUgNC43ODJMOS4wNTIgMjMuNjMzQzggMjUuMDI0LS42NjcgMjAuOTYyLjY2NiAxOC44NTF6IiBmaWxsPSIjRkJCQzA0Ii8+PHBhdGggZD0iTTI4LjM1MiAxOC44NTFMMTguNzI0IDIuMzY3QzE3LjM3OC4xMjggMTQuNDc5LS42ODYgMTIuMDk4LjYzNyA5LjcxNyAxLjk2IDguOTkyIDQuODEgMTAuMzM4IDcuMTVsOS42MjggMTYuNDg0YzEuMzQ2IDIuMjM5IDQuMjQ1IDMuMDUzIDYuNjI2IDEuNzMgMi4yNzgtMS4zMjMgMy4xMDYtNC4yNzQgMS43Ni02LjUxMnoiIGZpbGw9IiM0Mjg1RjQiLz48ZWxsaXBzZSBjeD0iNC44MzMiIGN5PSIyMS4yODgiIHJ4PSI0LjgzMyIgcnk9IjQuNzEzIiBmaWxsPSIjMzRBODUzIi8+PC9nPjwvZz48L3N2Zz4K) center center;\n  background-repeat: no-repeat;\n  width: 160px;\n  margin-left: 5px; }\n\nh1 .vertline {\n  border-right: 1px solid #fff;\n  margin: 0 10px; }\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n          flex: 1 0 auto; }\n\n.mat-sidenav {\n  padding: 12px;\n  background: #fafafa; }\n\n.mat-drawer-container {\n  background: #ffffff; }\n\n.mat-toolbar-row .mat-form-field-wrapper {\n  padding-bottom: 0; }\n\n.selected {\n  background: #ececec;\n  color: #2196f3; }\n\n.table {\n  border-top: 1px solid #ccc;\n  width: 100%; }\n\n.table th,\n  .table td {\n    padding: 12px;\n    font-size: 14px; }\n\n.table .title {\n    background: #f5f5f5; }\n\n.table .title td {\n      font-weight: bold;\n      border-top: 1px solid #dddddd;\n      border-bottom: 1px solid #dddddd; }\n\n.mat-expansion-panel-header-description {\n  padding-top: 8px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEctcHJvamVjdHNcXGtleXdvcmQtc3JjL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBRVY7RUFDRSx5QkFBeUIsRUFBQTs7QUFFM0I7RUFDRSxlQUFlO0VBQ2YsOEVBQUE7RUFDQSxVQUFVLEVBQUE7O0FBR1o7RUFFSSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXLEVBQUE7O0FBTGY7RUFRSSw2M0hBQ2U7RUFDZiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQVpwQjtFQWVJLDRCQUE0QjtFQUM1QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0U7NEZDSDBGO0VESzFGLG1CQUFPO1VBQVAsT0FBTyxFQUFBOztBQUdUO0VBQ0U7aUVDSitEO0VETS9ELG1CQUFjO1VBQWQsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFFSSxpQkFBaUIsRUFBQTs7QUFJckI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLDBCQUEwQjtFQUMxQixXQUFXLEVBQUE7O0FBRmI7O0lBTUksYUFBYTtJQUNiLGVBQWUsRUFBQTs7QUFQbkI7SUFXSSxtQkFBbUIsRUFBQTs7QUFYdkI7TUFjTSxpQkFBaUI7TUFDakIsNkJBQTZCO01BQzdCLGdDQUFnQyxFQUFBOztBQUl0QztFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuLnRvb2xiYXIubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XHJcbn1cclxuLmlzLW1vYmlsZSAudG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgJi5hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLmt3cGxvZ28ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRZeUlESTVJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQSEJoZEdnZ1pEMGlUVEV5TXk0MU1pQXlNaTQwTmpKc05pNHlNUzB4Tmk0ME5qaG9NaTR6T1RKc05pNHlNU0F4Tmk0ME5qaG9MVEl1TXpRMlRERXpOQzR6T1RrZ01UaG9MVFl1T1RJemJDMHhMall4SURRdU5EWXlhQzB5TGpNME5ucHROQzQyTmprdE5pNDBOR2cxTGpRM05Hd3RNaTQyT1RFdE55NDBNamxvTFM0d09USnNMVEl1TmpreElEY3VOREk1ZW0weE5pNHdOemNnTmk0NE1EaGpMVEV1TkRVM0lEQXRNaTQzTVRRdExqVTNOUzB6TGpjM01pMHhMamN5TlMweExqQTFPQzB4TGpFMUxURXVOVGczTFRJdU5UYzJMVEV1TlRnM0xUUXVNamM0Y3k0MU1qa3RNeTR4TWpnZ01TNDFPRGN0TkM0eU56aGpNUzR3TlRndE1TNHhOU0F5TGpNeE5TMHhMamN5TlNBekxqYzNNaTB4TGpjeU5TNDROVGtnTUNBeExqWXpMakU0TkNBeUxqTXhNaTQxTlRKek1TNHhPVEl1T0RJNElERXVOVEk1SURFdU16aG9MakE1TW13dExqQTVNaTB4TGpVMk5GWTFMams1TkdneUxqRXhObll4Tmk0ME5qaG9MVEl1TURJMGRpMHhMalUyTkdndExqQTVNbU10TGpNek55NDFOVEl0TGpnME55QXhMakF4TWkweExqVXpJREV1TXpoekxURXVORFV5TGpVMU1pMHlMak14TVM0MU5USjZiUzR6TkRVdE1TNDVNekpqTGprNU55QXdJREV1T0RRMExTNHpOamdnTWk0MU5ESXRNUzR4TURSek1TNHdORFl0TVM0M01qVWdNUzR3TkRZdE1pNDVOamN0TGpNME9TMHlMakl6TVMweExqQTBOaTB5TGprMk55MHhMalUwTlMweExqRXdOQzB5TGpVME1pMHhMakV3TkdNdExqazRNU0F3TFRFdU9ESTFMak0zTWkweUxqVXpJREV1TVRFMWN5MHhMakExT0NBeExqY3pMVEV1TURVNElESXVPVFUyTGpNMU15QXlMakl4TWlBeExqQTFPQ0F5TGprMU5TQXhMalUwT1NBeExqRXhOaUF5TGpVeklERXVNVEUyZW0weE1pNHlOVGtnTVM0NU16SmpMVEV1TWpVM0lEQXRNaTR5T1RZdExqTXdOeTB6TGpFeE5pMHVPVEp6TFRFdU5ESXpMVEV1TXpndE1TNDRNRFl0TWk0emJERXVPRGcyTFM0M09ESmpMalU1T0NBeExqUXhJREV1TmpFNElESXVNVEUySURNdU1EVTVJREl1TVRFMkxqWTJJREFnTVM0eUxTNHhORFlnTVM0Mk1qRXRMalF6TjNNdU5qTXpMUzQyTnpVdU5qTXpMVEV1TVRWak1DMHVOek0yTFM0MU1UUXRNUzR5TXpRdE1TNDFOREV0TVM0ME9UVnNMVEl1TWpjM0xTNDFOVEpqTFM0M01pMHVNVGcwTFRFdU5EQXpMUzQxTXpNdE1pNHdORGN0TVM0d05EZHpMUzQ1TmpZdE1TNHlNRGN0TGprMk5pMHlMakE0TVdNd0xTNDVPVGN1TkRRdE1TNDRNRFlnTVM0ek1qTXRNaTQwTWpkek1TNDVNamd0TGprek1TQXpMakV6T1MwdU9UTXhZeTQ1T1RjZ01DQXhMamc0Tmk0eU1qWWdNaTQyTmpndU5qYzRjekV1TXpReUlERXVNU0F4TGpZM09TQXhMamswTkd3dE1TNDROQzQzTlRsakxTNDBNVFF0TGprNU55MHhMakkzTXkweExqUTVOUzB5TGpVM05pMHhMalE1TlMwdU5qSTVJREF0TVM0eE5UZ3VNVE10TVM0MU9EY3VNemt4Y3kwdU5qUTBMall4TXkwdU5qUTBJREV1TURVNFl6QWdMalkwTkM0ME9UZ2dNUzR3T0RFZ01TNDBPVFVnTVM0ek1URnNNaTR5TXpFdU5USTVZekV1TURVNExqSTBOU0F4TGpnMExqWTJOeUF5TGpNME5pQXhMakkyTlhNdU56VTVJREV1TWpjekxqYzFPU0F5TGpBeU5HTXdJREV1TURFeUxTNDBNVFFnTVM0NE5UVXRNUzR5TkRJZ01pNDFNM010TVM0NE9UUWdNUzR3TVRJdE15NHhPVGNnTVM0d01USjZJaUJtYVd4c1BTSWpabVptSWk4K1BHY2dabWxzYkQwaUkyWm1aaUlnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWo0OGNHRjBhQ0JrUFNKTk5USXVOQ0F5TWk0NFl5MDFMakVnTUMwNUxqVXROQzR5TFRrdU5TMDVMak56TkM0ekxUa3VNeUE1TGpVdE9TNHpZekl1T0NBd0lEUXVPU0F4TGpFZ05pNDBJREl1Tmt3MU55QTRMalpqTFRFdU1TMHhMVEl1TmkweExqZ3ROQzQyTFRFdU9DMHpMamNnTUMwMkxqY2dNeTAyTGpjZ05pNDRjekl1T1NBMkxqZ2dOaTQzSURZdU9HTXlMalFnTUNBekxqZ3RNU0EwTGpjdE1TNDVMamN0TGpjZ01TNHlMVEV1T0NBeExqUXRNeTR5YUMwMkxqRjJMVEl1TlVnMk1XTXVNUzQxTGpFZ01TQXVNU0F4TGpZZ01DQXhMamt0TGpVZ05DNHpMVEl1TWlBMkxURXVOeUF4TGpVdE15NDRJREl1TkMwMkxqVWdNaTQwZWswM05DNHpJREUyTGpoak1DQXpMalV0TWk0M0lEWXROUzQ1SURZdE15NHpJREF0TlM0NUxUSXVOUzAxTGprdE5uTXlMamN0TmlBMUxqa3RObU16TGpNZ01DQTFMamtnTWk0MklEVXVPU0EyZW0wdE1pNDJJREJqTUMweUxqSXRNUzQxTFRNdU5pMHpMak10TXk0MmN5MHpMak1nTVM0MUxUTXVNeUF6TGpZZ01TNDFJRE11TmlBekxqTWdNeTQyWXpFdU9DNHhJRE11TXkweExqUWdNeTR6TFRNdU5ucE5PRGN1TmlBeE5pNDRZekFnTXk0MUxUSXVOeUEyTFRVdU9TQTJMVE11TXlBd0xUVXVPUzB5TGpVdE5TNDVMVFp6TWk0M0xUWWdOUzQ1TFRZZ05TNDVJREl1TmlBMUxqa2dObnB0TFRJdU5pQXdZekF0TWk0eUxURXVOUzB6TGpZdE15NHpMVE11Tm5NdE15NHpJREV1TlMwekxqTWdNeTQySURFdU5TQXpMallnTXk0eklETXVObU14TGpjdU1TQXpMak10TVM0MElETXVNeTB6TGpaNlRURXdNQzQxSURFeExqSldNakpqTUNBMExqUXRNaTQySURZdU15MDFMamNnTmk0ekxUSXVPU0F3TFRRdU55MHlMVFV1TXkwekxqVnNNaTR6TFRGakxqUWdNU0F4TGpRZ01pNHhJRE1nTWk0eElESWdNQ0F6TGpJdE1TNHlJRE11TWkwekxqVjJMUzQ1YUMwdU1XTXRMall1TnkweExqY2dNUzQwTFRNdU1pQXhMalF0TXlBd0xUVXVOeTB5TGpZdE5TNDNMVFp6TWk0NExUWWdOUzQzTFRaak1TNDBJREFnTWk0MkxqWWdNeTR5SURFdU0yZ3VNWFl0TVdneUxqVjZiUzB5TGpNZ05TNDNZekF0TWk0eExURXVOQzB6TGpjdE15NHlMVE11TjNNdE15NHpJREV1TlMwekxqTWdNeTQzWXpBZ01pNHhJREV1TlNBekxqWWdNeTR6SURNdU5uTXpMakl0TVM0MklETXVNaTB6TGpaNlRURXdOUzR4SURRdU9IWXhOeTQyYUMweUxqWldOQzQ0ZWsweE1UVXVOU0F4T0M0NGJESWdNUzQwWXkwdU55QXhMVEl1TWlBeUxqY3ROU0F5TGpjdE15NDBJREF0TlM0NUxUSXVOaTAxTGprdE5pQXdMVE11TmlBeUxqVXROaUExTGpZdE5uTTBMallnTWk0MUlEVXVNU0F6TGpoc0xqTXVOeTA0SURNdU0yTXVOaUF4TGpJZ01TNDJJREV1T0NBeUxqa2dNUzQ0Y3pJdU15MHVOeUF6TFRFdU4zcHRMVFl1TXkweUxqSnNOUzQwTFRJdU1tTXRMak10TGpjdE1TNHlMVEV1TXkweUxqSXRNUzR6TFRFdU5DQXdMVE11TXlBeExqSXRNeTR5SURNdU5Yb2lMejQ4TDJjK1BHY2dabWxzYkMxeWRXeGxQU0p1YjI1NlpYSnZJajQ4Y0dGMGFDQmtQU0pOTGpZMk5pQXhPQzQ0TlRGc09TNDJNamt0TVRZdU5EZzBZekV1TWpJekxqY3lJRGN1TXprZ05DNHhNek1nT0M0ek9EVWdOQzQzT0RKTU9TNHdOVElnTWpNdU5qTXpRemdnTWpVdU1ESTBMUzQyTmpjZ01qQXVPVFl5TGpZMk5pQXhPQzQ0TlRGNklpQm1hV3hzUFNJalJrSkNRekEwSWk4K1BIQmhkR2dnWkQwaVRUSTRMak0xTWlBeE9DNDROVEZNTVRndU56STBJREl1TXpZM1F6RTNMak0zT0M0eE1qZ2dNVFF1TkRjNUxTNDJPRFlnTVRJdU1EazRMall6TnlBNUxqY3hOeUF4TGprMklEZ3VPVGt5SURRdU9ERWdNVEF1TXpNNElEY3VNVFZzT1M0Mk1qZ2dNVFl1TkRnMFl6RXVNelEySURJdU1qTTVJRFF1TWpRMUlETXVNRFV6SURZdU5qSTJJREV1TnpNZ01pNHlOemd0TVM0ek1qTWdNeTR4TURZdE5DNHlOelFnTVM0M05pMDJMalV4TW5vaUlHWnBiR3c5SWlNME1qZzFSalFpTHo0OFpXeHNhWEJ6WlNCamVEMGlOQzQ0TXpNaUlHTjVQU0l5TVM0eU9EZ2lJSEo0UFNJMExqZ3pNeUlnY25rOUlqUXVOekV6SWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrUEM5blBqd3ZaejQ4TDNOMlp6NEspXHJcbiAgICAgIGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbiAgLnZlcnRsaW5lIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICB9XHJcbn1cclxuLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pcy1tb2JpbGUgLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG5cclxuLm1hdC1zaWRlbmF2IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLXJvdyB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XHJcbiAgY29sb3I6ICMyMTk2ZjM7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIHRoLFxyXG4gIHRkIHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuXHJcbiAgICB0ZCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7IH1cblxuLnRvb2xiYXIubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxOyB9XG5cbi5pcy1tb2JpbGUgLnRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjsgfVxuXG5oMS5hcHAtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbmgxIC5rd3Bsb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjJhV1YzUW05NFBTSXdJREFnTVRZeUlESTVJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQanhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStQSEJoZEdnZ1pEMGlUVEV5TXk0MU1pQXlNaTQwTmpKc05pNHlNUzB4Tmk0ME5qaG9NaTR6T1RKc05pNHlNU0F4Tmk0ME5qaG9MVEl1TXpRMlRERXpOQzR6T1RrZ01UaG9MVFl1T1RJemJDMHhMall4SURRdU5EWXlhQzB5TGpNME5ucHROQzQyTmprdE5pNDBOR2cxTGpRM05Hd3RNaTQyT1RFdE55NDBNamxvTFM0d09USnNMVEl1TmpreElEY3VOREk1ZW0weE5pNHdOemNnTmk0NE1EaGpMVEV1TkRVM0lEQXRNaTQzTVRRdExqVTNOUzB6TGpjM01pMHhMamN5TlMweExqQTFPQzB4TGpFMUxURXVOVGczTFRJdU5UYzJMVEV1TlRnM0xUUXVNamM0Y3k0MU1qa3RNeTR4TWpnZ01TNDFPRGN0TkM0eU56aGpNUzR3TlRndE1TNHhOU0F5TGpNeE5TMHhMamN5TlNBekxqYzNNaTB4TGpjeU5TNDROVGtnTUNBeExqWXpMakU0TkNBeUxqTXhNaTQxTlRKek1TNHhPVEl1T0RJNElERXVOVEk1SURFdU16aG9MakE1TW13dExqQTVNaTB4TGpVMk5GWTFMams1TkdneUxqRXhObll4Tmk0ME5qaG9MVEl1TURJMGRpMHhMalUyTkdndExqQTVNbU10TGpNek55NDFOVEl0TGpnME55QXhMakF4TWkweExqVXpJREV1TXpoekxURXVORFV5TGpVMU1pMHlMak14TVM0MU5USjZiUzR6TkRVdE1TNDVNekpqTGprNU55QXdJREV1T0RRMExTNHpOamdnTWk0MU5ESXRNUzR4TURSek1TNHdORFl0TVM0M01qVWdNUzR3TkRZdE1pNDVOamN0TGpNME9TMHlMakl6TVMweExqQTBOaTB5TGprMk55MHhMalUwTlMweExqRXdOQzB5TGpVME1pMHhMakV3TkdNdExqazRNU0F3TFRFdU9ESTFMak0zTWkweUxqVXpJREV1TVRFMWN5MHhMakExT0NBeExqY3pMVEV1TURVNElESXVPVFUyTGpNMU15QXlMakl4TWlBeExqQTFPQ0F5TGprMU5TQXhMalUwT1NBeExqRXhOaUF5TGpVeklERXVNVEUyZW0weE1pNHlOVGtnTVM0NU16SmpMVEV1TWpVM0lEQXRNaTR5T1RZdExqTXdOeTB6TGpFeE5pMHVPVEp6TFRFdU5ESXpMVEV1TXpndE1TNDRNRFl0TWk0emJERXVPRGcyTFM0M09ESmpMalU1T0NBeExqUXhJREV1TmpFNElESXVNVEUySURNdU1EVTVJREl1TVRFMkxqWTJJREFnTVM0eUxTNHhORFlnTVM0Mk1qRXRMalF6TjNNdU5qTXpMUzQyTnpVdU5qTXpMVEV1TVRWak1DMHVOek0yTFM0MU1UUXRNUzR5TXpRdE1TNDFOREV0TVM0ME9UVnNMVEl1TWpjM0xTNDFOVEpqTFM0M01pMHVNVGcwTFRFdU5EQXpMUzQxTXpNdE1pNHdORGN0TVM0d05EZHpMUzQ1TmpZdE1TNHlNRGN0TGprMk5pMHlMakE0TVdNd0xTNDVPVGN1TkRRdE1TNDRNRFlnTVM0ek1qTXRNaTQwTWpkek1TNDVNamd0TGprek1TQXpMakV6T1MwdU9UTXhZeTQ1T1RjZ01DQXhMamc0Tmk0eU1qWWdNaTQyTmpndU5qYzRjekV1TXpReUlERXVNU0F4TGpZM09TQXhMamswTkd3dE1TNDROQzQzTlRsakxTNDBNVFF0TGprNU55MHhMakkzTXkweExqUTVOUzB5TGpVM05pMHhMalE1TlMwdU5qSTVJREF0TVM0eE5UZ3VNVE10TVM0MU9EY3VNemt4Y3kwdU5qUTBMall4TXkwdU5qUTBJREV1TURVNFl6QWdMalkwTkM0ME9UZ2dNUzR3T0RFZ01TNDBPVFVnTVM0ek1URnNNaTR5TXpFdU5USTVZekV1TURVNExqSTBOU0F4TGpnMExqWTJOeUF5TGpNME5pQXhMakkyTlhNdU56VTVJREV1TWpjekxqYzFPU0F5TGpBeU5HTXdJREV1TURFeUxTNDBNVFFnTVM0NE5UVXRNUzR5TkRJZ01pNDFNM010TVM0NE9UUWdNUzR3TVRJdE15NHhPVGNnTVM0d01USjZJaUJtYVd4c1BTSWpabVptSWk4K1BHY2dabWxzYkQwaUkyWm1aaUlnWm1sc2JDMXlkV3hsUFNKdWIyNTZaWEp2SWo0OGNHRjBhQ0JrUFNKTk5USXVOQ0F5TWk0NFl5MDFMakVnTUMwNUxqVXROQzR5TFRrdU5TMDVMak56TkM0ekxUa3VNeUE1TGpVdE9TNHpZekl1T0NBd0lEUXVPU0F4TGpFZ05pNDBJREl1Tmt3MU55QTRMalpqTFRFdU1TMHhMVEl1TmkweExqZ3ROQzQyTFRFdU9DMHpMamNnTUMwMkxqY2dNeTAyTGpjZ05pNDRjekl1T1NBMkxqZ2dOaTQzSURZdU9HTXlMalFnTUNBekxqZ3RNU0EwTGpjdE1TNDVMamN0TGpjZ01TNHlMVEV1T0NBeExqUXRNeTR5YUMwMkxqRjJMVEl1TlVnMk1XTXVNUzQxTGpFZ01TQXVNU0F4TGpZZ01DQXhMamt0TGpVZ05DNHpMVEl1TWlBMkxURXVOeUF4TGpVdE15NDRJREl1TkMwMkxqVWdNaTQwZWswM05DNHpJREUyTGpoak1DQXpMalV0TWk0M0lEWXROUzQ1SURZdE15NHpJREF0TlM0NUxUSXVOUzAxTGprdE5uTXlMamN0TmlBMUxqa3RObU16TGpNZ01DQTFMamtnTWk0MklEVXVPU0EyZW0wdE1pNDJJREJqTUMweUxqSXRNUzQxTFRNdU5pMHpMak10TXk0MmN5MHpMak1nTVM0MUxUTXVNeUF6TGpZZ01TNDFJRE11TmlBekxqTWdNeTQyWXpFdU9DNHhJRE11TXkweExqUWdNeTR6TFRNdU5ucE5PRGN1TmlBeE5pNDRZekFnTXk0MUxUSXVOeUEyTFRVdU9TQTJMVE11TXlBd0xUVXVPUzB5TGpVdE5TNDVMVFp6TWk0M0xUWWdOUzQ1TFRZZ05TNDVJREl1TmlBMUxqa2dObnB0TFRJdU5pQXdZekF0TWk0eUxURXVOUzB6TGpZdE15NHpMVE11Tm5NdE15NHpJREV1TlMwekxqTWdNeTQySURFdU5TQXpMallnTXk0eklETXVObU14TGpjdU1TQXpMak10TVM0MElETXVNeTB6TGpaNlRURXdNQzQxSURFeExqSldNakpqTUNBMExqUXRNaTQySURZdU15MDFMamNnTmk0ekxUSXVPU0F3TFRRdU55MHlMVFV1TXkwekxqVnNNaTR6TFRGakxqUWdNU0F4TGpRZ01pNHhJRE1nTWk0eElESWdNQ0F6TGpJdE1TNHlJRE11TWkwekxqVjJMUzQ1YUMwdU1XTXRMall1TnkweExqY2dNUzQwTFRNdU1pQXhMalF0TXlBd0xUVXVOeTB5TGpZdE5TNDNMVFp6TWk0NExUWWdOUzQzTFRaak1TNDBJREFnTWk0MkxqWWdNeTR5SURFdU0yZ3VNWFl0TVdneUxqVjZiUzB5TGpNZ05TNDNZekF0TWk0eExURXVOQzB6TGpjdE15NHlMVE11TjNNdE15NHpJREV1TlMwekxqTWdNeTQzWXpBZ01pNHhJREV1TlNBekxqWWdNeTR6SURNdU5uTXpMakl0TVM0MklETXVNaTB6TGpaNlRURXdOUzR4SURRdU9IWXhOeTQyYUMweUxqWldOQzQ0ZWsweE1UVXVOU0F4T0M0NGJESWdNUzQwWXkwdU55QXhMVEl1TWlBeUxqY3ROU0F5TGpjdE15NDBJREF0TlM0NUxUSXVOaTAxTGprdE5pQXdMVE11TmlBeUxqVXROaUExTGpZdE5uTTBMallnTWk0MUlEVXVNU0F6TGpoc0xqTXVOeTA0SURNdU0yTXVOaUF4TGpJZ01TNDJJREV1T0NBeUxqa2dNUzQ0Y3pJdU15MHVOeUF6TFRFdU4zcHRMVFl1TXkweUxqSnNOUzQwTFRJdU1tTXRMak10TGpjdE1TNHlMVEV1TXkweUxqSXRNUzR6TFRFdU5DQXdMVE11TXlBeExqSXRNeTR5SURNdU5Yb2lMejQ4TDJjK1BHY2dabWxzYkMxeWRXeGxQU0p1YjI1NlpYSnZJajQ4Y0dGMGFDQmtQU0pOTGpZMk5pQXhPQzQ0TlRGc09TNDJNamt0TVRZdU5EZzBZekV1TWpJekxqY3lJRGN1TXprZ05DNHhNek1nT0M0ek9EVWdOQzQzT0RKTU9TNHdOVElnTWpNdU5qTXpRemdnTWpVdU1ESTBMUzQyTmpjZ01qQXVPVFl5TGpZMk5pQXhPQzQ0TlRGNklpQm1hV3hzUFNJalJrSkNRekEwSWk4K1BIQmhkR2dnWkQwaVRUSTRMak0xTWlBeE9DNDROVEZNTVRndU56STBJREl1TXpZM1F6RTNMak0zT0M0eE1qZ2dNVFF1TkRjNUxTNDJPRFlnTVRJdU1EazRMall6TnlBNUxqY3hOeUF4TGprMklEZ3VPVGt5SURRdU9ERWdNVEF1TXpNNElEY3VNVFZzT1M0Mk1qZ2dNVFl1TkRnMFl6RXVNelEySURJdU1qTTVJRFF1TWpRMUlETXVNRFV6SURZdU5qSTJJREV1TnpNZ01pNHlOemd0TVM0ek1qTWdNeTR4TURZdE5DNHlOelFnTVM0M05pMDJMalV4TW5vaUlHWnBiR3c5SWlNME1qZzFSalFpTHo0OFpXeHNhWEJ6WlNCamVEMGlOQzQ0TXpNaUlHTjVQU0l5TVM0eU9EZ2lJSEo0UFNJMExqZ3pNeUlnY25rOUlqUXVOekV6SWlCbWFXeHNQU0lqTXpSQk9EVXpJaTgrUEM5blBqd3ZaejQ4TDNOMlp6NEspIGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDsgfVxuXG5oMSAudmVydGxpbmUge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW46IDAgMTBweDsgfVxuXG4uc2lkZW5hdi1jb250YWluZXIge1xuICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xuICBmbGV4OiAxOyB9XG5cbi5pcy1tb2JpbGUgLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBmaXhlZCwgZG9uJ3QgY29uc3RyYWluIHRoZSBoZWlnaHQgb2YgdGhlIHNpZGVuYXYgY29udGFpbmVyLiBUaGlzIGFsbG93cyB0aGVcclxuICAgICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvOyB9XG5cbi5tYXQtc2lkZW5hdiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7IH1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxuXG4ubWF0LXRvb2xiYXItcm93IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDA7IH1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLnRhYmxlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC50YWJsZSB0aCxcbiAgLnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuICAudGFibGUgLnRpdGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XG4gICAgLnRhYmxlIC50aXRsZSB0ZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDhweDsgfVxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_shared/helper */ "./src/app/_shared/helper.ts");







/**
 * Buit with
 * https://material.angular.io/
 * https://www.highcharts.com/
 * https://material.io/tools/icons/
 * PWA - https://angular.io/guide/service-worker-getting-started
 */
var AppComponent = /** @class */ (function () {
    function AppComponent(changeDetectorRef, media, service) {
        this.service = service;
        this.loading = false;
        this.panelOpenState = false;
        this.filter_data = [];
        this.filtered_data = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        // sample data
        this.fillerNav = [
            [
                'Keyword ideas',
                'Grouped ideas'
            ],
            [
                'Plan overview',
                'Ad groups',
                'Keywords',
                'Locations'
            ]
        ];
        this.columns = [
            'select',
            'Keyword (by relevance)',
            'Avg.monthly searches',
            'Competition',
            'Ad impression share',
            'Top of page bid(low range)',
            'Top of page bid(high range)',
            'Account status'
        ];
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AppComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AppComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return false;
        }
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    AppComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + row.keyword;
    };
    AppComponent.prototype.getCompetition = function (value) {
        var n = +value;
        if (typeof n !== 'number') {
            return value;
        }
        return (value < 1) ? 'High' : 'Low';
    };
    AppComponent.prototype.getNonExcludedKeywordsCount = function () {
        return this.service.selected_keywords.filter(function (i) { return !i.excluded; }).length;
    };
    AppComponent.prototype.onFiltered = function (filtered) {
        var data = Object(_shared_helper__WEBPACK_IMPORTED_MODULE_6__["withoutDupsFilters"])(filtered);
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](data);
        this.dataSource.paginator = this.paginator;
        this.filtered_data = data;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('paginator'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], AppComponent.prototype, "paginator", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ap-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mode_bar_mode_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mode-bar/mode-bar.component */ "./src/app/mode-bar/mode-bar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _refine_keywords_refine_keywords_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./refine-keywords/refine-keywords.component */ "./src/app/refine-keywords/refine-keywords.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var _pipes_math_round_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_pipes/math-round.pipe */ "./src/app/_pipes/math-round.pipe.ts");
/* harmony import */ var _pipes_separate_thousands_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_pipes/separate-thousands.pipe */ "./src/app/_pipes/separate-thousands.pipe.ts");
/* harmony import */ var _pipes_abbreviate_number_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_pipes/abbreviate-number.pipe */ "./src/app/_pipes/abbreviate-number.pipe.ts");
/* harmony import */ var _trends_chart_trends_chart_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./trends-chart/trends-chart.component */ "./src/app/trends-chart/trends-chart.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _mode_bar_mode_bar_component__WEBPACK_IMPORTED_MODULE_11__["ModeBarComponent"],
                _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"],
                _refine_keywords_refine_keywords_component__WEBPACK_IMPORTED_MODULE_14__["RefineKeywordsComponent"],
                _pipes_math_round_pipe__WEBPACK_IMPORTED_MODULE_16__["MathRoundPipe"],
                _pipes_separate_thousands_pipe__WEBPACK_IMPORTED_MODULE_17__["SeparateThousandsPipe"],
                _pipes_abbreviate_number_pipe__WEBPACK_IMPORTED_MODULE_18__["AbbreviateNumberPipe"],
                _trends_chart_trends_chart_component__WEBPACK_IMPORTED_MODULE_19__["TrendsChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
            ],
            providers: [_services_app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/mode-bar/mode-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/mode-bar/mode-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span class=\"text-muted\"> Location: <b>United States</b> </span>\r\n    <span class=\"text-muted\"> Language: <b>English</b> </span>\r\n    <span class=\"text-muted\"> Search networks: <b>Google</b> </span>\r\n    <span class=\"text-muted\"> Date Range: <b>Last 12 months</b> </span>\r\n  </mat-toolbar-row>\r\n\r\n  <mat-toolbar-row\r\n    *ngIf=\"!service.selected_keywords.length\"\r\n    [ngStyle]=\"{ background: '#FFFFFF' }\"\r\n    class=\"mode-bar\"\r\n  >\r\n    <mat-form-field\r\n      class=\"search-field\"\r\n      [ngStyle]=\"{ width: '30%' }\"\r\n      appearance=\"outline\"\r\n    >\r\n      <input\r\n        matInput\r\n        placeholder=\"Your search term\"\r\n        [matAutocomplete]=\"auto\"\r\n        [formControl]=\"search_ctrl\"\r\n      />\r\n      <mat-icon matPrefix>search</mat-icon>\r\n      <button\r\n        mat-button\r\n        *ngIf=\"search_ctrl.value\"\r\n        matSuffix\r\n        mat-icon-button\r\n        aria-label=\"Clear\"\r\n        (click)=\"search_ctrl.setValue(null)\"\r\n      >\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let option of filtered_options\" [value]=\"option\">{{\r\n          option\r\n        }}</mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n\r\n    <div class=\"fill-remaining-space\"></div>\r\n    <button\r\n      mat-button\r\n      [ngStyle]=\"{\r\n        top: '-9px',\r\n        fontWeight: 'bold',\r\n        textTransform: 'uppercase',\r\n        margin: '0 30px'\r\n      }\"\r\n      color=\"primary\"\r\n    >\r\n      Download keyword ideas\r\n    </button>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        [matDatepicker]=\"pfrom\"\r\n        placeholder=\"From\"\r\n        [formControl]=\"date_from\"\r\n      />\r\n      <mat-datepicker-toggle matSuffix [for]=\"pfrom\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pfrom></mat-datepicker>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input\r\n        matInput\r\n        [matDatepicker]=\"pto\"\r\n        [min]=\"date_from.value\"\r\n        placeholder=\"To\"\r\n        [formControl]=\"date_to\"\r\n      />\r\n      <mat-datepicker-toggle matSuffix [for]=\"pto\"></mat-datepicker-toggle>\r\n      <mat-datepicker #pto></mat-datepicker>\r\n    </mat-form-field>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-toolbar *ngIf=\"service.selected_keywords.length\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <span class=\"keywords-wrapper\">\r\n      {{ service.selected_keywords.length }} attributes selected&nbsp;&nbsp;\r\n      <span class=\"keywords\" *ngIf=\"service.selected_keywords.length\"\r\n        >|&nbsp;&nbsp;<span\r\n          *ngFor=\"let item of service.selected_keywords; let i = index\"\r\n          style=\"margin: 0;\"\r\n          [class.excluded]=\"item.excluded\"\r\n          >{{ item.name\r\n          }}{{ i == service.selected_keywords.length - 1 ? \"\" : \", \" }}</span\r\n        ></span\r\n      >\r\n    </span>\r\n    <span class=\"spacer\"></span>\r\n    <button mat-flat-button color=\"primary\" style=\"text-transform: uppercase;\">\r\n      Download keyword ideas\r\n    </button>\r\n    <button mat-flat-button color=\"primary\" (click)=\"reset()\">\r\n      <mat-icon\r\n        class=\"example-icon\"\r\n        aria-hidden=\"false\"\r\n        aria-label=\"Example delete icon\"\r\n        >close</mat-icon\r\n      >\r\n      Reset\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/mode-bar/mode-bar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/mode-bar/mode-bar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  font-size: 14px; }\n  .mat-toolbar span {\n    margin-right: 24px; }\n  .mat-toolbar span b {\n      color: #333333; }\n  .mode-bar {\n  padding-top: 2em;\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 8px; }\n  .icon {\n  padding: 0 14px; }\n  .spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto; }\n  .excluded {\n  text-decoration: line-through; }\n  .keywords {\n  max-width: calc(100vw - 750px);\n  width: auto;\n  overflow: hidden;\n  white-space: nowrap;\n  display: inline-block;\n  text-overflow: ellipsis;\n  margin-right: 0 !important;\n  -webkit-transition: all 200ms ease-out;\n  transition: all 200ms ease-out; }\n  .keywords-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin-right: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZS1iYXIvRTpcXEctcHJvamVjdHNcXGtleXdvcmQtc3JjL3NyY1xcYXBwXFxtb2RlLWJhclxcbW9kZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7RUFEakI7SUFJSSxrQkFBa0IsRUFBQTtFQUp0QjtNQU9NLGNBQWMsRUFBQTtFQUtwQjtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsbUJBQW1CLEVBQUE7RUFHckI7RUFDRSxlQUFlLEVBQUE7RUFHakI7RUFDRSxtQkFBYztVQUFkLGNBQWMsRUFBQTtFQUdoQjtFQUNFLDZCQUE2QixFQUFBO0VBRy9CO0VBQ0UsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNDQUE4QjtFQUE5Qiw4QkFBOEIsRUFBQTtFQUdoQztFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kZS1iYXIvbW9kZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcblxyXG4gICAgYiB7XHJcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGUtYmFyIHtcclxuICBwYWRkaW5nLXRvcDogMmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhjbHVkZWQge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4ua2V5d29yZHMge1xyXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDc1MHB4KTtcclxuICB3aWR0aDogYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmtleXdvcmRzLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/mode-bar/mode-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/mode-bar/mode-bar.component.ts ***!
  \************************************************/
/*! exports provided: ModeBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeBarComponent", function() { return ModeBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");






var ModeBarComponent = /** @class */ (function () {
    function ModeBarComponent(http, service) {
        this.http = http;
        this.service = service;
        // datepicker values
        this.date_from = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.date_to = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        // search string
        this.search_ctrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.json_data_loaded = false;
        // search options
        this.options = [
            'best foundation',
            'cookware',
            'couch',
            'credit card',
            'employee survey',
            'Harley Davidson',
            'invoice template',
            'life insurance',
            'luggage',
            'managed transportation service',
            'nursing scrubs',
            'running shoes',
            'solder station',
            'stem cell therapy',
            'vacuum pumps'
        ];
        this.filtered_options = [];
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    ModeBarComponent.prototype.ngOnInit = function () {
        this.handle_search();
    };
    ModeBarComponent.prototype.handle_search = function () {
        var _this = this;
        this.search_ctrl.valueChanges.subscribe(function (value) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!value || typeof value !== 'string') {
                    return [2 /*return*/];
                }
                this.filter(value);
                if (!this.options.includes(value)) {
                    return [2 /*return*/];
                }
                this.service.setTitle(value);
                this.service.current_search_term = value;
                url = value.trim().toLowerCase().replace(/\s|\s./g, '-');
                this.load_json(url);
                return [2 /*return*/];
            });
        }); });
    };
    ModeBarComponent.prototype.load_json = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var json, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.handle_loading(true);
                        return [4 /*yield*/, this.http.get("./api/" + url + ".json").toPromise()];
                    case 1:
                        json = _a.sent();
                        this.search.emit(json);
                        this.handle_loading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.handle_loading(false);
                        if (error_1 && error_1.status !== 404) {
                            console.error(error_1);
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModeBarComponent.prototype.handle_loading = function (status) {
        if (status === void 0) { status = false; }
        var content = document.querySelector('.mat-drawer-content');
        if (content) {
            content.style.overflow = status ? 'hidden' : 'auto';
        }
        this.loading.emit(status);
    };
    ModeBarComponent.prototype.reset = function () {
        this.search_ctrl.setValue(null);
        this.service.selected_keywords = [];
        this.json_data_loaded = false;
        this.filtered_options = [];
        _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"].dispatchEvent(_shared_constants__WEBPACK_IMPORTED_MODULE_5__["CUSTOM_EVENT_RESET_FILTERS"]);
    };
    ModeBarComponent.prototype.filter = function (name) {
        var filterValue = name.toLowerCase();
        this.filtered_options = this.options.filter(function (option) { return option.toLowerCase().indexOf(filterValue) === 0; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModeBarComponent.prototype, "search", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModeBarComponent.prototype, "loading", void 0);
    ModeBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ap-mode-bar',
            template: __webpack_require__(/*! ./mode-bar.component.html */ "./src/app/mode-bar/mode-bar.component.html"),
            styles: [__webpack_require__(/*! ./mode-bar.component.scss */ "./src/app/mode-bar/mode-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], ModeBarComponent);
    return ModeBarComponent;
}());



/***/ }),

/***/ "./src/app/refine-keywords/refine-keywords.component.html":
/*!****************************************************************!*\
  !*** ./src/app/refine-keywords/refine-keywords.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\r\n  <span style=\"display: block;\">\r\n    Refine keywords\r\n    <a\r\n      href=\"#\"\r\n      *ngIf=\"hasFilters()\"\r\n      (click)=\"expandAll()\"\r\n      class=\"text-primary small link expand-link\"\r\n      [class.disabled]=\"expanding\"\r\n    >\r\n      {{ expanding ? \"Expanding...\" : \"Expand all\" }}\r\n    </a>\r\n  </span>\r\n  <small class=\"text-muted\">Top attributes based on your keywords</small>\r\n</h4>\r\n\r\n<mat-accordion [multi]=\"true\" class=\"filter-group\">\r\n  <mat-expansion-panel\r\n    *ngFor=\"let filter_group of filter_groups\"\r\n    [class.changed]=\"\r\n      (getInclusionsCount(filter_group) || getExclusionsCount(filter_group)) &&\r\n      !filter_panel.expanded\r\n    \"\r\n    [ngStyle]=\"{ marginBottom: '12px' }\"\r\n    #filter_panel\r\n  >\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <b style=\"color:#646464;text-transform: capitalize;width: 100%;\">\r\n          {{ filter_group.title }}\r\n          <span style=\"text-transform: none;\">\r\n            <span *ngIf=\"filter_group.selections\">\r\n              ({{ filter_group.selections || 0 }} of\r\n              {{ getTotalAttributes(filter_group) | abbreviateNumber }})\r\n            </span>\r\n            <span *ngIf=\"!filter_group.selections\">\r\n              ({{ getTotalAttributes(filter_group) | abbreviateNumber }})\r\n            </span>\r\n          </span>\r\n        </b>\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        <small\r\n          class=\"text-overflow\"\r\n          [innerHTML]=\"getFilterGroupSubtitle(filter_panel, filter_group)\"\r\n        >\r\n        </small>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n\r\n    <div style=\"margin-bottom: 20px;\">\r\n      <hr style=\"margin-top: -5px;border-top: 1px solid #ddd;\" />\r\n      <b style=\"color: #4e4e4e;\">Select all attributes</b>\r\n      <mat-slide-toggle\r\n        style=\"float: right;\"\r\n        [color]=\"checkbox_color\"\r\n        (change)=\"selectAllInGroup(filter_group, $event.checked)\"\r\n        #select_all_attr\r\n      >\r\n      </mat-slide-toggle>\r\n    </div>\r\n\r\n    <table [ngStyle]=\"{ width: '100%', textAlign: 'left' }\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"text-muted\"\r\n            [ngStyle]=\"{ fontSize: '11px', textTransform: 'uppercase' }\"\r\n          >\r\n            Attribute\r\n            <!-- ({{ filter_group.filters.length }}) -->\r\n          </th>\r\n          <th\r\n            class=\"text-muted\"\r\n            [ngStyle]=\"{\r\n              fontSize: '11px',\r\n              textTransform: 'uppercase',\r\n              textAlign: 'right'\r\n            }\"\r\n          >\r\n            Results\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let filter of filter_group.filters\" class=\"custom-options\">\r\n          <td>\r\n            <mat-checkbox\r\n              [class.excluded]=\"!filter.enabled\"\r\n              [(ngModel)]=\"filter.checked\"\r\n              [value]=\"filter.label\"\r\n              [color]=\"checkbox_color\"\r\n              (mousedown)=\"handleCheckboxClick(filter, filter_group)\"\r\n              (change)=\"\r\n                handleCheckboxChange(filter, filter_group, select_all_attr)\r\n              \"\r\n              #mat_checkbox\r\n            >\r\n              <span\r\n                style=\"margin-right: 4px;\"\r\n                (click)=\"filter.enabled = true\"\r\n                >{{ filter.label }}</span\r\n              >\r\n            </mat-checkbox>\r\n          </td>\r\n          <td style=\"text-align: right\">\r\n            <a\r\n              class=\"text-primary link small hover\"\r\n              *ngIf=\"filter.enabled\"\r\n              (click)=\"\r\n                exclude(mat_checkbox, filter, filter_group, select_all_attr)\r\n              \"\r\n              >Exclude\r\n            </a>\r\n            {{ filter.results | abbreviateNumber }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <mat-paginator\r\n      [length]=\"\r\n        groups_map[filter_group.title]\r\n          ? groups_map[filter_group.title].length\r\n          : 0\r\n      \"\r\n      [hidePageSize]=\"true\"\r\n      [pageSize]=\"page_size\"\r\n      (page)=\"handlePageChange(filter_group, $event)\"\r\n    >\r\n    </mat-paginator>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/refine-keywords/refine-keywords.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/refine-keywords/refine-keywords.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-paginator {\n  margin-right: -20px; }\n\n.hover {\n  position: absolute;\n  right: 50px;\n  top: 4px;\n  text-transform: uppercase;\n  font-size: 11px;\n  z-index: 1; }\n\ntd {\n  position: relative; }\n\n.custom-options .hover {\n  visibility: hidden; }\n\n.custom-options:hover .hover {\n  visibility: visible; }\n\n.expand-link {\n  text-transform: uppercase;\n  float: right;\n  font-size: 11px;\n  position: relative;\n  top: 3px; }\n\n.mat-expansion-panel {\n  box-shadow: none;\n  border-radius: 4px !important;\n  background: #f2f2f2;\n  border: 1px solid transparent; }\n\n.changed {\n  margin-bottom: 12px;\n  background: #e8f0fe;\n  border: 1px solid #8ab4f8; }\n\n.mat-paginator {\n  background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmaW5lLWtleXdvcmRzL0U6XFxHLXByb2plY3RzXFxrZXl3b3JkLXNyYy9zcmNcXGFwcFxccmVmaW5lLWtleXdvcmRzXFxyZWZpbmUta2V5d29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUVJLGtCQUFrQixFQUFBOztBQUZ0QjtFQU9NLG1CQUFtQixFQUFBOztBQUt6QjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRLEVBQUE7O0FBR1Y7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVmaW5lLWtleXdvcmRzL3JlZmluZS1rZXl3b3Jkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcGFnaW5hdG9yIHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xyXG59XHJcblxyXG4uaG92ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTBweDtcclxuICB0b3A6IDRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY3VzdG9tLW9wdGlvbnMge1xyXG4gIC5ob3ZlciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIC5ob3ZlciB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZXhwYW5kLWxpbmsge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAzcHg7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jaGFuZ2VkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGYwZmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzhhYjRmODtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/refine-keywords/refine-keywords.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/refine-keywords/refine-keywords.component.ts ***!
  \**************************************************************/
/*! exports provided: RefineKeywordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefineKeywordsComponent", function() { return RefineKeywordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/helper */ "./src/app/_shared/helper.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/app.service */ "./src/app/_services/app.service.ts");
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_shared/constants */ "./src/app/_shared/constants.ts");





/**
  O/ /kwd|kwd/ig
  A/ /^(?=.*kwd)(?=.*kwd).*$/im
  
  | previous Group | Current Group | Operator |
  |----------------|---------------|----------|
  |      NULL      |       1       |    AND   | -> A/First selection
  |       1        |       1       |    OR    | -> O/Same group selection
  |       1        |       0       |    AND   | -> A/Groups through selection

 * */
var RefineKeywordsComponent = /** @class */ (function () {
    function RefineKeywordsComponent(service) {
        this.service = service;
        this.page_size = 10;
        this.event_id = null;
        // this holds all filter data.
        this.groups_map = {};
        this.hash_map_kwd = {};
        this.selected_keywords_map = {};
        // grouped data for Refine keywords
        this.filter_groups = [];
        this.excluded_checkboxes = [];
        // Input json data from mode-bar component
        this.filter_data = [];
        // Output filtered data
        this.filtered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.expanded = false;
        this.expanding = false;
        this.previous_group = null;
        this.checkbox_color = 'primary';
    }
    RefineKeywordsComponent.prototype.ngOnInit = function () {
        this.listenForReset();
    };
    RefineKeywordsComponent.prototype.listenForReset = function () {
        var _this = this;
        document.addEventListener(_shared_constants__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_EVENT_RESET_FILTERS"], function () {
            _this.filter_groups.map(function (f) {
                f.filters.map(function (i) { return i.checked = false; });
                _this.selectAllInGroup(f, false);
            });
            var sliders = _this.select_all_attrs.toArray() || [];
            for (var _i = 0, sliders_1 = sliders; _i < sliders_1.length; _i++) {
                var slider = sliders_1[_i];
                slider.checked = false;
            }
        });
    };
    // handle filters onInput changes
    RefineKeywordsComponent.prototype.ngOnChanges = function (changes) {
        var data = (changes && changes.filter_data && changes.filter_data.currentValue) || [];
        this.buildFilterGroups(data);
    };
    /**
     * Make filter groups (Refine keywords)
     * @param data JSON data
     */
    RefineKeywordsComponent.prototype.buildFilterGroups = function (data) {
        var _this = this;
        if (data === void 0) { data = []; }
        this.filter_groups = []; // Refine keyword groups
        if (!data.length) {
            return;
        }
        this.filter_data = data;
        /** @returns filter counts and results for each group */
        var getCounts = function (filters) {
            if (filters === void 0) { filters = []; }
            var table = {};
            for (var i = 0, length_1 = filters.length; i < length_1; i++) {
                var element = filters[i];
                _this.hash_map_kwd[element.concept_name] = element.group_name;
                if (!table[element.group_name]) {
                    table[element.group_name] = { __results: 1 };
                }
                if (table[element.group_name][element.concept_name]) {
                    table[element.group_name][element.concept_name]++;
                    _this.service.keyword_ideas += table[element.group_name].__results++;
                }
                else {
                    table[element.group_name][element.concept_name] = 1;
                }
            }
            return table;
        };
        var counts = getCounts(data);
        for (var key in counts) {
            if (counts.hasOwnProperty(key)) {
                // try to keep brand/s at the begining of the groups
                if (/^brands|brand$/i.test(key)) {
                    this.addFilterGroup(key, counts, data, true);
                    continue;
                }
                this.addFilterGroup(key, counts, data);
            }
        }
        // load all data to the table.
        // NOTE: We should send data inside set timeout
        clearTimeout(this.event_id);
        this.event_id = setTimeout(function () { return _this.sendData(data); }, 500);
    };
    RefineKeywordsComponent.prototype.addFilterGroup = function (key, counts, data, add_in_front) {
        if (add_in_front === void 0) { add_in_front = false; }
        var filter_group = {};
        filter_group.title = key;
        filter_group.results = counts[key] ? counts[key].__results : 0;
        var filters = data
            .filter(function (item) { return item.group_name === key; })
            .map(function (f) { return ({ label: f.concept_name, enabled: true, results: counts[f.group_name][f.concept_name] }); });
        this.groups_map[key] = Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["withoutDupsSimpleFilter"])(filters).sort(Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["sortBy"])('-results'));
        filter_group.filters = this.groups_map[key].slice(0, this.page_size);
        if (add_in_front) {
            this.filter_groups.unshift(filter_group);
        }
        else {
            this.filter_groups.push(filter_group);
        }
    };
    // show some filters in subtitles on filters
    RefineKeywordsComponent.prototype.showSampleFilters = function (data) {
        if (data === void 0) { data = []; }
        return data.map(function (i) { return i.label; }).join(', ');
    };
    RefineKeywordsComponent.prototype.showSelectedFilters = function (filter_group) {
        var checked = filter_group.filters.filter(function (i) { return i.checked; }).map(function (i) { return "" + i.label; });
        var excluded = filter_group.filters.filter(function (i) { return !i.enabled; }).map(function (i) { return "<strike>" + i.label + "</strike>"; });
        return checked.concat(excluded).join(', ');
    };
    RefineKeywordsComponent.prototype.showExcludedFilters = function (item) {
        return item.filters.filter(function (i) { return !i.enabled; }).map(function (i) { return i.label; }).join(', ');
    };
    // effective when paginating on filters
    RefineKeywordsComponent.prototype.handlePageChange = function (group, event) {
        if (group === void 0) { group = {}; }
        var groups = this.groups_map[group.title] || [];
        group.filters = Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["paginate"])(groups, event.pageSize, event.pageIndex + 1);
    };
    RefineKeywordsComponent.prototype.hasFilters = function () {
        return !!this.filter_groups.length;
    };
    // expand one filter group
    RefineKeywordsComponent.prototype.expandOne = function (panel, callback) {
        if (typeof callback !== 'function') {
            return;
        }
        // return at the end of list
        if (!panel) {
            return callback(true);
        }
        // skip if the panel already expanded
        if (panel.expanded) {
            return callback(false);
        }
        // expand the panel
        panel.expanded = true;
        // call the callback when the panel expanded
        panel.afterExpand.subscribe(function (res) { return callback(false); });
    };
    // expand all filter groups
    RefineKeywordsComponent.prototype.expandAll = function () {
        var _this = this;
        // return if the expanding process in progress
        if (this.expanding) {
            return;
        }
        // begin expandings
        this.expanding = true;
        var count = 0;
        var results = this.filter_panel.toArray();
        var panel = results[count++];
        // local function which handles after expand callback
        var handleDone = function (done) {
            if (done) {
                return _this.expanding = false;
            }
            _this.expandOne(results[count++], handleDone);
        };
        this.expandOne(panel, handleDone);
    };
    // effective when selecting checkboxes on filters
    RefineKeywordsComponent.prototype.handleSelection = function (value, checked, excluded, select_all_attr) {
        var _this = this;
        setTimeout(function () {
            if (checked) {
                _this.updateSelectedKeywords(value, excluded);
            }
            else {
                _this.removeFromSelectedKeywords(value);
                if (select_all_attr) {
                    select_all_attr.checked = false;
                }
            }
            // load data to the table
            _this.loadDataToTable();
        });
    };
    RefineKeywordsComponent.prototype.updateSelectedKeywords = function (value, excluded) {
        var found = false;
        for (var i = 0, length_2 = this.service.selected_keywords.length; i < length_2; i++) {
            if (this.service.selected_keywords[i].name === value) {
                this.service.selected_keywords[i].excluded = excluded;
                found = true;
                break;
            }
        }
        if (!found) {
            this.service.selected_keywords.push({ name: value, excluded: excluded });
        }
    };
    RefineKeywordsComponent.prototype.removeFromSelectedKeywords = function (value) {
        var _this = this;
        // just for run at the end of the stack
        setTimeout(function () { return _this.service.selected_keywords.splice(_this.service.selected_keywords.findIndex(function (v) { return v.name === value; }), 1); });
    };
    RefineKeywordsComponent.prototype.loadDataToTable = function () {
        var _this = this;
        setTimeout(function () {
            // get selected keyword names
            var selected_keywords = [];
            var keyword_groups = [];
            var excluded_keywords = [];
            var filtered_data = [];
            for (var _i = 0, _a = _this.service.selected_keywords; _i < _a.length; _i++) {
                var kwd = _a[_i];
                selected_keywords.push(kwd.name);
                if (kwd.excluded) {
                    excluded_keywords.push(kwd);
                }
            }
            var groups = Object.keys(_this.groups_map);
            if (!selected_keywords.length) {
                return _this.sendData(_this.filter_data);
            }
            // grouping selected keywords for each group
            for (var i = 0, length_3 = groups.length; i < length_3; i++) {
                var group_name = groups[i];
                var keywords = _this.groups_map[group_name]
                    .filter(function (k) { return k.checked && k.enabled; })
                    .map(function (f) { return f.label; });
                if (!keywords.length) {
                    continue;
                }
                keyword_groups.push(keywords);
            }
            // searching for matching keywords
            if (!keyword_groups.length && !excluded_keywords.length) {
                return;
            }
            var patterns = keyword_groups.map(function (k) { return k.join('|'); });
            var pattern = _this.buildPattern(patterns);
            for (var i = 0, length_4 = _this.filter_data.length; i < length_4; i++) {
                var filter = _this.filter_data[i];
                if (excluded_keywords.length && _this.isExcluded(filter.keyword, excluded_keywords)) {
                    continue;
                }
                if (pattern.test(filter.keyword) || selected_keywords.includes(filter.concept_name)) {
                    filtered_data.push(filter);
                }
            }
            // emit filtered data
            _this.sendData(filtered_data);
        });
    };
    RefineKeywordsComponent.prototype.sendData = function (filtered_data) {
        this.filtered.emit(filtered_data);
    };
    RefineKeywordsComponent.prototype.isExcluded = function (keyword, excluded_keywords) {
        if (!excluded_keywords.length) {
            return false;
        }
        var keywords_str = excluded_keywords.map(function (i) { return i.name; }).join('|');
        var pattern = new RegExp(keywords_str, 'gi');
        return pattern.test(keyword);
    };
    RefineKeywordsComponent.prototype.buildPattern = function (keywords) {
        //const pattern_body = keywords.map(k => `(?=.*${k})`).join('');
        var pattern_body = keywords.join('|');
        return new RegExp("^" + pattern_body + ".*$", 'ig');
    };
    RefineKeywordsComponent.prototype.getInclusionsCount = function (item) {
        return item.filters.filter(function (i) { return i.checked; }).length;
    };
    RefineKeywordsComponent.prototype.getExclusionsCount = function (item) {
        return item.filters.filter(function (i) { return !i.enabled; }).length;
    };
    // select all checkboxes in a group
    RefineKeywordsComponent.prototype.selectAllInGroup = function (filter_group, checked) {
        var _this = this;
        var iterate = function (f) {
            f.checked = checked;
            _this.calculateSelections();
            _this.handleSelection(f.label, f.checked, false, null);
        };
        this.groups_map[filter_group.title].map(iterate);
    };
    RefineKeywordsComponent.prototype.calculateSelections = function () {
        for (var _i = 0, _a = this.filter_groups; _i < _a.length; _i++) {
            var filter_group = _a[_i];
            filter_group.selections = 0;
            for (var i = 0, length_5 = filter_group.filters.length; i < length_5; i++) {
                var filter = filter_group.filters[i];
                if (filter.checked) {
                    filter_group.selections += filter.results;
                }
            }
        }
    };
    RefineKeywordsComponent.prototype.getTotalAttributes = function (item) {
        var count = 0;
        item.filters.map(function (i) { return count += i.results; });
        return Object(_shared_helper__WEBPACK_IMPORTED_MODULE_2__["abbreviateNumber"])(count);
    };
    RefineKeywordsComponent.prototype.getFilterGroupSubtitle = function (filter_panel, filter_group) {
        var selected = this.showSelectedFilters(filter_group);
        if (selected.length) {
            return this.getInclusionsCount(filter_group) + " selected, " + this.getExclusionsCount(filter_group) + " excluded.";
        }
        return "<b>eg: </b> " + this.showSampleFilters(filter_group.filters.slice(0, 3)) + (filter_group.filters.length > 3 ? '...' : null);
    };
    RefineKeywordsComponent.prototype.handleCheckboxChange = function (filter, filter_group, select_all_attr) {
        filter.enabled = true;
        this.handleSelection(filter.label, filter.checked, false, select_all_attr);
        this.calculateSelections();
        this.updateSelectedKeywordsMap(filter_group);
    };
    RefineKeywordsComponent.prototype.updateSelectedKeywordsMap = function (filter_group) {
        this.selected_keywords_map[filter_group.title] = filter_group.filters;
    };
    RefineKeywordsComponent.prototype.handleCheckboxClick = function (filter, filter_group) {
        var _this = this;
        if (!filter.enabled) {
            setTimeout(function () {
                filter.checked = false;
                _this.removeFromSelectedKeywords(filter.label);
                _this.calculateSelections();
            }, 100);
        }
    };
    RefineKeywordsComponent.prototype.exclude = function (mat_checkbox, filter, filter_group, select_all_attr) {
        filter.enabled = false;
        filter.checked = false;
        this.calculateSelections();
        this.updateSelectedKeywordsMap(filter_group);
        this.updateSelectedKeywords(filter.label, true);
        this.loadDataToTable();
        if (select_all_attr) {
            select_all_attr.checked = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], RefineKeywordsComponent.prototype, "filter_data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RefineKeywordsComponent.prototype, "filtered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('filter_panel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], RefineKeywordsComponent.prototype, "filter_panel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('mat_checkbox'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], RefineKeywordsComponent.prototype, "mat_checkboxes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('select_all_attr'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], RefineKeywordsComponent.prototype, "select_all_attrs", void 0);
    RefineKeywordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ap-refine-keywords',
            template: __webpack_require__(/*! ./refine-keywords.component.html */ "./src/app/refine-keywords/refine-keywords.component.html"),
            host: { class: 'filters' },
            styles: [__webpack_require__(/*! ./refine-keywords.component.scss */ "./src/app/refine-keywords/refine-keywords.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], RefineKeywordsComponent);
    return RefineKeywordsComponent;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"show\">\n  <mat-spinner [diameter]=\"40\"></mat-spinner>\n</div>"

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.67);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9FOlxcRy1wcm9qZWN0c1xca2V5d29yZC1zcmMvc3JjXFxhcHBcXHNwaW5uZXJcXHNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBeUI7RUFDekIscUNBQTBDO0VBQzFDLE1BQWtCO0VBQ2xCLFNBQWtCO0VBQ2xCLE9BQWtCO0VBQ2xCLFFBQWtCO0VBQ2xCLG9CQUFxQjtFQUFyQixhQUFxQjtFQUNyQix5QkFBdUI7VUFBdkIsbUJBQXVCO0VBQ3ZCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsWUFBb0I7RUFDcEIsYUFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uICAgICAgIDogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kICAgICA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nyk7XHJcbiAgICB0b3AgICAgICAgICAgICA6IDA7XHJcbiAgICBib3R0b20gICAgICAgICA6IDA7XHJcbiAgICBsZWZ0ICAgICAgICAgICA6IDA7XHJcbiAgICByaWdodCAgICAgICAgICA6IDA7XHJcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtcyAgICA6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleCAgICAgICAgOiA5OTk7XHJcbiAgICBoZWlnaHQgICAgICAgICA6IDEwMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.show = false;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpinnerComponent.prototype, "show", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ap-spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/trends-chart/trends-chart.component.html":
/*!**********************************************************!*\
  !*** ./src/app/trends-chart/trends-chart.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"trends-chart-container\"></div>\r\n\r\n<!-- This table gives necessary data to the Highchart view -->\r\n<table id=\"trends-datatable\" style=\"display: none;\">\r\n  <thead>\r\n    <tr>\r\n      <th></th>\r\n      <th>Total</th>\r\n      <th>Mobile</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr>\r\n      <th>May 2017</th>\r\n      <td>649</td>\r\n      <td>395</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Jun 2017</th>\r\n      <td>400</td>\r\n      <td>300</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Jul 2017</th>\r\n      <td>740</td>\r\n      <td>201</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Aug 2017</th>\r\n      <td>1283</td>\r\n      <td>994</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Sep 2017</th>\r\n      <td>435</td>\r\n      <td>228</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Oct 2017</th>\r\n      <td>632</td>\r\n      <td>422</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Nov 2017</th>\r\n      <td>303</td>\r\n      <td>130</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Dec 2017</th>\r\n      <td>656</td>\r\n      <td>392</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Jan 2018</th>\r\n      <td>206</td>\r\n      <td>192</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Feb 2018</th>\r\n      <td>466</td>\r\n      <td>390</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Mar 2018</th>\r\n      <td>800</td>\r\n      <td>418</td>\r\n    </tr>\r\n    <tr>\r\n      <th>Apr 2018</th>\r\n      <td>920</td>\r\n      <td>718</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/trends-chart/trends-chart.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/trends-chart/trends-chart.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZW5kcy1jaGFydC90cmVuZHMtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trends-chart/trends-chart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/trends-chart/trends-chart.component.ts ***!
  \********************************************************/
/*! exports provided: TrendsChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsChartComponent", function() { return TrendsChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrendsChartComponent = /** @class */ (function () {
    function TrendsChartComponent() {
    }
    TrendsChartComponent.prototype.ngOnInit = function () {
    };
    TrendsChartComponent.prototype.ngAfterViewInit = function () {
        this.initChartView();
    };
    // https://www.highcharts.com/demo/column-parsed
    TrendsChartComponent.prototype.initChartView = function () {
        // tslint:disable-next-line: no-string-literal
        if (!window['Highcharts']) {
            return;
        }
        Highcharts.chart('trends-chart-container', {
            data: {
                table: 'trends-datatable'
            },
            credits: {
                enabled: false
            },
            exporting: { enabled: false },
            chart: {
                type: 'column',
                reflow: true
            },
            title: {
                text: 'Trends'
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: 'Units'
                }
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        this.point.y + ' ' /* + this.point.x */;
                }
            }
        });
    };
    TrendsChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ap-trends-chart',
            template: __webpack_require__(/*! ./trends-chart.component.html */ "./src/app/trends-chart/trends-chart.component.html"),
            styles: [__webpack_require__(/*! ./trends-chart.component.scss */ "./src/app/trends-chart/trends-chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrendsChartComponent);
    return TrendsChartComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// https://material.angular.io/guide/getting-started#step-5-gesture-support

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\G-projects\keyword-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
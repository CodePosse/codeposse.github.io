"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_tables_tables_module_ts"],{

/***/ 16157:
/*!*************************************************************!*\
  !*** ./src/app/tables/basic-table/basic-table.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicTableComponent": () => (/* binding */ BasicTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class BasicTableComponent {
    constructor() { }
    ngOnInit() { }
}
BasicTableComponent.ɵfac = function BasicTableComponent_Factory(t) { return new (t || BasicTableComponent)(); };
BasicTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicTableComponent, selectors: [["app-basic-table"]], decls: 414, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], [1, "table"], ["scope", "row"], [1, "table", "table-striped"], [1, "table", "table-bordered"], [1, "table", "table-hover"], [1, "table", "table-condensed"], [1, "bg-light-blue"], [1, "l-bg-green"], [1, "l-bg-orange"], [1, "l-bg-cyan"], [1, "l-bg-purple"]], template: function BasicTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Normal Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "h2")(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "table", 19)(28, "thead")(29, "tr")(30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tbody")(39, "tr")(40, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr")(49, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr")(58, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr")(67, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr")(76, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14)(85, "div", 15)(86, "div", 16)(87, "div", 17)(88, "h2")(89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Striped");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18)(93, "table", 21)(94, "thead")(95, "tr")(96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tbody")(105, "tr")(106, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr")(115, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr")(124, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr")(133, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr")(142, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 14)(151, "div", 15)(152, "div", 16)(153, "div", 17)(154, "h2")(155, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Bordered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 18)(159, "table", 22)(160, "thead")(161, "tr")(162, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "tbody")(171, "tr")(172, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "tr")(181, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "tr")(190, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr")(199, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "tr")(208, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 14)(217, "div", 15)(218, "div", 16)(219, "div", 17)(220, "h2")(221, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Hover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 18)(225, "table", 23)(226, "thead")(227, "tr")(228, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "tbody")(237, "tr")(238, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "tr")(247, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "tr")(256, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "tr")(265, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "tr")(274, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 14)(283, "div", 15)(284, "div", 16)(285, "div", 17)(286, "h2")(287, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Condensed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 18)(291, "table", 24)(292, "thead")(293, "tr")(294, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "tbody")(303, "tr")(304, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "tr")(313, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "tr")(322, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "tr")(331, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](336, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "tr")(340, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 14)(349, "div", 15)(350, "div", 16)(351, "div", 17)(352, "h2")(353, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "Colorful");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " Rows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 18)(357, "table", 24)(358, "thead")(359, "tr")(360, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "FIRST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "LAST NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "USERNAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "tbody")(369, "tr", 25)(370, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](371, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Mark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Otto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "@mdo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "tr", 26)(379, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "Jacob");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Thornton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "@fat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr", 27)(388, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](389, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "the Bird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "@twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "tr", 28)(397, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Jellybean");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "@lajelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "tr", 29)(406, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, "Larry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "Kikat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "@lakitkat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51229:
/*!*******************************************************************!*\
  !*** ./src/app/tables/material-table/material-table.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialTableComponent": () => (/* binding */ MaterialTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 43365);








function MaterialTableComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r48.no, " ");
} }
function MaterialTableComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r49.name, " ");
} }
function MaterialTableComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r50.gender, " ");
} }
function MaterialTableComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r51.email, " ");
} }
function MaterialTableComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r52.address, " ");
} }
function MaterialTableComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r53.mobile, " ");
} }
function MaterialTableComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r54.salary, " ");
} }
function MaterialTableComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
function MaterialTableComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
} }
function MaterialTableComponent_th_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r56.no, " ");
} }
function MaterialTableComponent_th_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r57.name, " ");
} }
function MaterialTableComponent_th_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r58.gender, " ");
} }
function MaterialTableComponent_th_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r59.email, " ");
} }
function MaterialTableComponent_th_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r60.address, " ");
} }
function MaterialTableComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r61.mobile, " ");
} }
function MaterialTableComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r62.salary, " ");
} }
function MaterialTableComponent_tr_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
function MaterialTableComponent_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
} }
function MaterialTableComponent_th_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r64.no, " ");
} }
function MaterialTableComponent_th_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r65.name, " ");
} }
function MaterialTableComponent_th_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Gender ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r66.gender, " ");
} }
function MaterialTableComponent_th_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r67.email, " ");
} }
function MaterialTableComponent_th_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r68.address, " ");
} }
function MaterialTableComponent_th_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r69.mobile, " ");
} }
function MaterialTableComponent_th_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Salary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaterialTableComponent_td_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r70.salary, " ");
} }
function MaterialTableComponent_tr_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
function MaterialTableComponent_tr_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    { no: 1, name: 'John Doe', gender: 'male', email: 'test@aristocrat.com', address: '729 S. Paris Hill St', mobile: 1234567890, salary: 120000 },
    { no: 2, name: 'Sarah Smith', gender: 'female', email: 'test@aristocrat.com', address: '9003 Lake Street Hinesville', mobile: 1234567890, salary: 170000 },
    { no: 3, name: 'Airi Satou', gender: 'male', email: 'test@aristocrat.com', address: '848 Old Durham Street Piedmont', mobile: 1234567890, salary: 150000 },
    { no: 4, name: 'Angelica Ramos', gender: 'male', email: 'test@aristocrat.com', address: '8008 Anderson Drive Titusville', mobile: 1234567890, salary: 190000 },
    { no: 5, name: 'Ashton Cox', gender: 'female', email: 'test@aristocrat.com', address: '620 East Ave. Dundalk', mobile: 1234567890, salary: 140000 },
    { no: 6, name: 'Cara Stevens', gender: 'male', email: 'test@aristocrat.com', address: '9641 Delaware Street Camp Hill', mobile: 1234567890, salary: 220000 },
    { no: 7, name: 'Jens Brincker', gender: 'male', email: 'test@aristocrat.com', address: '83 Pennsylvania Road', mobile: 1234567890, salary: 170000 },
    { no: 8, name: 'Mark Hay', gender: 'female', email: 'test@aristocrat.com', address: '786 Lake Forest Rd. Biloxi', mobile: 1234567890, salary: 320000 },
    { no: 9, name: 'Anthony Davie', gender: 'male', email: 'test@aristocrat.com', address: '226 Heritage Dr. Durham', mobile: 1234567890, salary: 620000 },
    { no: 10, name: 'Sue Woodger', gender: 'male', email: 'test@aristocrat.com', address: '7 SE. Pumpkin Hill Lane', mobile: 1234567890, salary: 110000 },
];
class MaterialTableComponent {
    constructor() {
        this.displayedColumns = ['no', 'name', 'gender', 'email', 'address', 'mobile', 'salary'];
        this.dataSource = ELEMENT_DATA;
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
        this.dataSource3 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource3.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.dataSource2.paginator = this.paginator;
    }
}
MaterialTableComponent.ɵfac = function MaterialTableComponent_Factory(t) { return new (t || MaterialTableComponent)(); };
MaterialTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaterialTableComponent, selectors: [["app-material-table"]], viewQuery: function MaterialTableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 122, vars: 11, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "header"], [1, "body", "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "no"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "gender"], ["matColumnDef", "email"], ["matColumnDef", "address"], ["matColumnDef", "mobile"], ["matColumnDef", "salary"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function MaterialTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Material Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Material Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "h2")(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](28, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MaterialTableComponent_th_29_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MaterialTableComponent_td_30_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MaterialTableComponent_th_32_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MaterialTableComponent_td_33_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, MaterialTableComponent_th_35_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, MaterialTableComponent_td_36_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, MaterialTableComponent_th_38_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MaterialTableComponent_td_39_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](40, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MaterialTableComponent_th_41_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MaterialTableComponent_td_42_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MaterialTableComponent_th_44_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MaterialTableComponent_td_45_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MaterialTableComponent_th_47_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MaterialTableComponent_td_48_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MaterialTableComponent_tr_49_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MaterialTableComponent_tr_50_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14)(52, "div", 15)(53, "div", 16)(54, "div", 17)(55, "h2")(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pagination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18)(60, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](61, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MaterialTableComponent_th_62_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MaterialTableComponent_td_63_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](64, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, MaterialTableComponent_th_65_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, MaterialTableComponent_td_66_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](67, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, MaterialTableComponent_th_68_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MaterialTableComponent_td_69_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](70, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, MaterialTableComponent_th_71_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MaterialTableComponent_td_72_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](73, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, MaterialTableComponent_th_74_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, MaterialTableComponent_td_75_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](76, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, MaterialTableComponent_th_77_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, MaterialTableComponent_td_78_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](79, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, MaterialTableComponent_th_80_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, MaterialTableComponent_td_81_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, MaterialTableComponent_tr_82_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, MaterialTableComponent_tr_83_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "mat-paginator", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 14)(86, "div", 15)(87, "div", 16)(88, "div", 17)(89, "h2")(90, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 18)(94, "mat-form-field", 32)(95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function MaterialTableComponent_Template_input_keyup_97_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](99, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, MaterialTableComponent_th_100_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, MaterialTableComponent_td_101_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](102, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, MaterialTableComponent_th_103_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, MaterialTableComponent_td_104_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](105, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, MaterialTableComponent_th_106_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, MaterialTableComponent_td_107_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](108, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, MaterialTableComponent_th_109_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](110, MaterialTableComponent_td_110_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](111, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, MaterialTableComponent_th_112_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, MaterialTableComponent_td_113_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](114, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, MaterialTableComponent_th_115_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, MaterialTableComponent_td_116_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](117, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](118, MaterialTableComponent_th_118_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, MaterialTableComponent_td_119_Template, 2, 1, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, MaterialTableComponent_tr_120_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, MaterialTableComponent_tr_121_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXRlcmlhbC10YWJsZS5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 99961:
/*!*****************************************************************!*\
  !*** ./src/app/tables/ngx-datatable/ngx-datatable.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxDatatableComponent": () => (/* binding */ NgxDatatableComponent)
/* harmony export */ });
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 88133);














const _c0 = ["roleTemplate"];
function NgxDatatableComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r9 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", value_r9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NgxDatatableComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.row; const rowIndex_r13 = restoredCtx.rowIndex; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44); return ctx_r14.editRow(row_r12, rowIndex_r13, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mode_edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_40_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const row_r12 = restoredCtx.row; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deleteRow(row_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function NgxDatatableComponent_ng_template_41_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDatatableComponent_ng_template_41_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDatatableComponent_ng_template_41_mat_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", gender_r22.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", gender_r22.value, " ");
} }
function NgxDatatableComponent_ng_template_41_mat_error_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDatatableComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "h4", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_41_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const modal_r17 = restoredCtx.$implicit; return modal_r17.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 47)(9, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48)(12, "form", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_ng_template_41_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onAddRowSave(ctx_r25.register); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "div", 53)(19, "mat-form-field", 54)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NgxDatatableComponent_ng_template_41_mat_error_25_Template, 2, 0, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 53)(27, "mat-form-field", 54)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "div", 53)(35, "mat-form-field", 54)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NgxDatatableComponent_ng_template_41_mat_error_41_Template, 2, 0, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 53)(43, "mat-form-field", 54)(44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NgxDatatableComponent_ng_template_41_mat_option_47_Template, 2, 2, "mat-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7)(49, "div", 62)(50, "mat-form-field", 54)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NgxDatatableComponent_ng_template_41_mat_error_56_Template, 2, 0, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7)(58, "div", 62)(59, "mat-form-field", 54)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7)(64, "div", 62)(65, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.newUserImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.register);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("firstName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.register.get("email").hasError("required") || ctx_r4.register.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.register.valid);
} }
function NgxDatatableComponent_ng_template_43_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDatatableComponent_ng_template_43_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NgxDatatableComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40)(1, "h4", 41)(2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const modal_r26 = restoredCtx.$implicit; return modal_r26.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 47)(9, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 48)(12, "form", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NgxDatatableComponent_ng_template_43_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onEditSave(ctx_r31.editForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 53)(17, "mat-form-field", 54)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NgxDatatableComponent_ng_template_43_mat_error_23_Template, 2, 0, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 53)(25, "mat-form-field", 54)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7)(32, "div", 62)(33, "mat-form-field", 54)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NgxDatatableComponent_ng_template_43_mat_error_39_Template, 2, 0, "mat-error", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7)(41, "div", 62)(42, "mat-form-field", 54)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "textarea", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 69)(47, "div", 70)(48, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_ng_template_43_Template_button_click_50_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const modal_r26 = restoredCtx.$implicit; return modal_r26.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.firstName, " ", ctx_r6.selectedRowData == null ? null : ctx_r6.selectedRowData.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.editForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editForm.get("firstName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.register.get("phone").hasError("required"));
} }
class NgxDatatableComponent {
    constructor(fb, _snackBar, modalService) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.modalService = modalService;
        this.rows = [];
        this.newUserImg = 'assets/images/user/user1.jpg';
        this.data = [];
        this.filteredData = [];
        this.columns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Gender' },
            { name: 'Phone' },
            { name: 'Email' },
            { name: 'Address' },
        ];
        this.genders = [
            { id: '1', value: 'Male' },
            { id: '2', value: 'Female' },
        ];
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        // Table 2
        this.tb2columns = [
            { name: 'First Name' },
            { name: 'Last Name' },
            { name: 'Address' },
        ];
        this.tb2data = [];
        this.tb2filteredData = [];
        this.editForm = this.fb.group({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(),
        });
    }
    ngOnInit() {
        this.fetch((data) => {
            this.data = data;
            this.filteredData = data;
        });
        // Table 2
        this.tb2fetch((data) => {
            this.tb2data = data;
            this.tb2filteredData = data;
        });
        this.register = this.fb.group({
            id: [''],
            img: [''],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern('[a-zA-Z]+')]],
            lastName: [''],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(5)],
            ],
            address: [''],
        });
    }
    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/adv-tbl-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', 'assets/data/ngx-data.json');
        req.onload = () => {
            const data = JSON.parse(req.response);
            cb(data);
        };
        req.send();
    }
    // Table 2
    tb2filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.tb2columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.tb2filteredData[0]);
        // assign filtered matches to the active datatable
        this.tb2data = this.tb2filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table2.offset = 0;
    }
    editRow(row, rowIndex, content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.editForm.setValue({
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName,
            phone: row.phone,
            email: row.email,
            address: row.address,
            img: row.img,
        });
        this.selectedRowData = row;
    }
    addRow(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.register.patchValue({
            id: this.getId(10, 100),
            img: this.newUserImg,
        });
    }
    deleteRow(row) {
        this.data = this.arrayRemove(this.data, row.id);
        this.showNotification('bg-red', 'Delete Record Successfully', 'bottom', 'right');
    }
    arrayRemove(array, id) {
        return array.filter(function (element) {
            return element.id != id;
        });
    }
    onEditSave(form) {
        this.data = this.data.filter((value, key) => {
            if (value.id == form.value.id) {
                value.firstName = form.value.firstName;
                value.lastName = form.value.lastName;
                value.phone = form.value.phone;
                value.gender = form.value.gender;
                value.email = form.value.email;
                value.address = form.value.address;
            }
            this.modalService.dismissAll();
            return true;
        });
        this.showNotification('bg-black', 'Edit Record Successfully', 'bottom', 'right');
    }
    onAddRowSave(form) {
        this.data.push(form.value);
        this.data = [...this.data];
        // console.log(this.data);
        form.reset();
        this.modalService.dismissAll();
        this.showNotification('bg-green', 'Add Record Successfully', 'bottom', 'right');
    }
    filterDatatable(event) {
        // get the value of the key pressed and make it lowercase
        const val = event.target.value.toLowerCase();
        // get the amount of columns in the table
        const colsAmt = this.columns.length;
        // get the key names of each column in the dataset
        const keys = Object.keys(this.filteredData[0]);
        // assign filtered matches to the active datatable
        this.data = this.filteredData.filter(function (item) {
            // iterate through each row's column data
            for (let i = 0; i < colsAmt; i++) {
                // check for a match
                if (item[keys[i]].toString().toLowerCase().indexOf(val) !== -1 ||
                    !val) {
                    // found match, return true to add to result set
                    return true;
                }
            }
        });
        // whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    getId(min, max) {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    openSnackBar(message) {
        this._snackBar.open(message, '', {
            duration: 2000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: ['bg-red'],
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this._snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
NgxDatatableComponent.ɵfac = function NgxDatatableComponent_Factory(t) { return new (t || NgxDatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
NgxDatatableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxDatatableComponent, selectors: [["app-ngx-datatable"]], viewQuery: function NgxDatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roleTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table2 = _t.first);
    } }, decls: 62, vars: 24, consts: [[1, "content"], [1, "container-fluid"], [1, "alert", "alert-info"], [1, "row", "clearfix"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "row"], [1, "col-sm-12"], [1, "ngxTableHeader"], [1, "header-buttons-left", "ms-0", "mb-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field", 3, "keyup"], [1, "header-buttons"], ["mat-mini-fab", "", "color", "primary", 3, "click"], [1, "col-white"], [1, "material", 3, "rows", "columns", "sortType", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["table", ""], ["name", "Image", "sortable", "false", "prop", "img", 3, "width"], ["ngx-datatable-cell-template", ""], ["name", "First Name", 3, "width"], ["name", "Last Name", 3, "width"], ["name", "Gender", 3, "width"], ["name", "Phone", 3, "width"], ["name", "Email", 3, "width"], ["name", "Address", 3, "width"], ["name", "Actions", "sortable", "false", 3, "width"], ["addRecord", ""], ["editRecord", ""], [1, "header"], ["appearance", "fill"], ["matInput", "", 3, "keyup"], ["table2", ""], [1, "table-img", "padding-0"], ["width", "40", 3, "src"], [1, "btn", "tblActnBtn", "h-auto", 3, "click"], [1, "material-icons"], [1, "modal-header", "editRowModal"], ["id", "modal-basic-title", 1, "modal-title"], [1, "modal-header"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "font-weight-bold", "p-t-10", "font-17"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "register-form", 3, "formGroup", "ngSubmit"], [1, "input-field", "col", "s12", "d-none"], ["formControlName", "id", "type", "hidden", 1, "form-control"], ["formControlName", "img", "type", "hidden", 1, "form-control"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "firstName", "required", ""], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "formControlName", "phone", "required", ""], ["formControlName", "gender", "required", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "address"], ["mat-raised-button", "", "color", "primary", 1, "btn-space", 3, "disabled"], ["type", "button", "mat-button", "", "data-dismiss", "modal"], [3, "value"], [3, "formGroup", "ngSubmit"], [1, "modal-footer"], [1, "button-demo"], ["mat-raised-button", "", "type", "submit", "color", "primary"], ["mat-button", "", "type", "button", 3, "click"]], template: function NgxDatatableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Advance table component is develop using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ngx-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " angular plugin. Main features of this table is search record in table, add new record, edit record, delete record, sorting data by ascending and descending, pagination, and many more. You have just replace table static json data with your dynamic json data comes from your api. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "div", 9)(14, "ul", 10)(15, "li", 11)(16, "h2")(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Advance Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12)(20, "label", 13)(21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_23_listener($event) { return ctx.filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 16)(25, "li")(26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgxDatatableComponent_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return ctx.addRow(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ngx-datatable", 19, 20)(31, "ngx-datatable-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, NgxDatatableComponent_ng_template_32_Template, 2, 1, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "ngx-datatable-column", 23)(34, "ngx-datatable-column", 24)(35, "ngx-datatable-column", 25)(36, "ngx-datatable-column", 26)(37, "ngx-datatable-column", 27)(38, "ngx-datatable-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ngx-datatable-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NgxDatatableComponent_ng_template_40_Template, 7, 0, "ng-template", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NgxDatatableComponent_ng_template_41_Template, 69, 7, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NgxDatatableComponent_ng_template_43_Template, 52, 6, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3)(46, "div", 4)(47, "div", 5)(48, "div", 32)(49, "h2")(50, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "ngx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Simple Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6)(54, "div", 7)(55, "div", 8)(56, "mat-form-field", 33)(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Search Here...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NgxDatatableComponent_Template_input_keyup_59_listener($event) { return ctx.tb2filterDatatable($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "ngx-datatable", 19, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.data)("columns", ctx.columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "60")("limit", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.tb2data)("columns", ctx.tb2columns)("sortType", "multi")("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__.DataTableColumnCellDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZ3gtZGF0YXRhYmxlLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 59177:
/*!*************************************************!*\
  !*** ./src/app/tables/tables-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesRoutingModule": () => (/* binding */ TablesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-table/basic-table.component */ 16157);
/* harmony import */ var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-datatable/ngx-datatable.component */ 99961);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-table/material-table.component */ 51229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        redirectTo: 'basic-tables',
        pathMatch: 'full',
    },
    {
        path: 'basic-tables',
        component: _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_0__.BasicTableComponent,
    },
    {
        path: 'material-tables',
        component: _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_2__.MaterialTableComponent,
    },
    {
        path: 'ngx-datatable',
        component: _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_1__.NgxDatatableComponent,
    },
];
class TablesRoutingModule {
}
TablesRoutingModule.ɵfac = function TablesRoutingModule_Factory(t) { return new (t || TablesRoutingModule)(); };
TablesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TablesRoutingModule });
TablesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TablesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 81439:
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablesModule": () => (/* binding */ TablesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tables-routing.module */ 59177);
/* harmony import */ var _basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-table/basic-table.component */ 16157);
/* harmony import */ var _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-datatable/ngx-datatable.component */ 99961);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-table/material-table.component */ 51229);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);























class TablesModule {
}
TablesModule.ɵfac = function TablesModule_Factory(t) { return new (t || TablesModule)(); };
TablesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TablesModule });
TablesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TablesModule, { declarations: [_basic_table_basic_table_component__WEBPACK_IMPORTED_MODULE_1__.BasicTableComponent,
        _ngx_datatable_ngx_datatable_component__WEBPACK_IMPORTED_MODULE_2__.NgxDatatableComponent,
        _material_table_material_table_component__WEBPACK_IMPORTED_MODULE_3__.MaterialTableComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _tables_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablesRoutingModule,
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__.NgxDatatableModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule] }); })();


/***/ }),

/***/ 93143:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClickType": () => (/* binding */ ClickType),
/* harmony export */   "ColumnChangesService": () => (/* binding */ ColumnChangesService),
/* harmony export */   "ColumnMode": () => (/* binding */ ColumnMode),
/* harmony export */   "ContextmenuType": () => (/* binding */ ContextmenuType),
/* harmony export */   "DataTableBodyCellComponent": () => (/* binding */ DataTableBodyCellComponent),
/* harmony export */   "DataTableBodyComponent": () => (/* binding */ DataTableBodyComponent),
/* harmony export */   "DataTableBodyRowComponent": () => (/* binding */ DataTableBodyRowComponent),
/* harmony export */   "DataTableColumnCellDirective": () => (/* binding */ DataTableColumnCellDirective),
/* harmony export */   "DataTableColumnCellTreeToggle": () => (/* binding */ DataTableColumnCellTreeToggle),
/* harmony export */   "DataTableColumnDirective": () => (/* binding */ DataTableColumnDirective),
/* harmony export */   "DataTableColumnHeaderDirective": () => (/* binding */ DataTableColumnHeaderDirective),
/* harmony export */   "DataTableFooterComponent": () => (/* binding */ DataTableFooterComponent),
/* harmony export */   "DataTableFooterTemplateDirective": () => (/* binding */ DataTableFooterTemplateDirective),
/* harmony export */   "DataTableHeaderCellComponent": () => (/* binding */ DataTableHeaderCellComponent),
/* harmony export */   "DataTableHeaderComponent": () => (/* binding */ DataTableHeaderComponent),
/* harmony export */   "DataTablePagerComponent": () => (/* binding */ DataTablePagerComponent),
/* harmony export */   "DataTableRowWrapperComponent": () => (/* binding */ DataTableRowWrapperComponent),
/* harmony export */   "DataTableSelectionComponent": () => (/* binding */ DataTableSelectionComponent),
/* harmony export */   "DataTableSummaryRowComponent": () => (/* binding */ DataTableSummaryRowComponent),
/* harmony export */   "DatatableComponent": () => (/* binding */ DatatableComponent),
/* harmony export */   "DatatableFooterDirective": () => (/* binding */ DatatableFooterDirective),
/* harmony export */   "DatatableGroupHeaderDirective": () => (/* binding */ DatatableGroupHeaderDirective),
/* harmony export */   "DatatableGroupHeaderTemplateDirective": () => (/* binding */ DatatableGroupHeaderTemplateDirective),
/* harmony export */   "DatatableRowDetailDirective": () => (/* binding */ DatatableRowDetailDirective),
/* harmony export */   "DatatableRowDetailTemplateDirective": () => (/* binding */ DatatableRowDetailTemplateDirective),
/* harmony export */   "DimensionsHelper": () => (/* binding */ DimensionsHelper),
/* harmony export */   "DraggableDirective": () => (/* binding */ DraggableDirective),
/* harmony export */   "Keys": () => (/* binding */ Keys),
/* harmony export */   "LongPressDirective": () => (/* binding */ LongPressDirective),
/* harmony export */   "NgxDatatableModule": () => (/* binding */ NgxDatatableModule),
/* harmony export */   "OrderableDirective": () => (/* binding */ OrderableDirective),
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent),
/* harmony export */   "ResizeableDirective": () => (/* binding */ ResizeableDirective),
/* harmony export */   "RowHeightCache": () => (/* binding */ RowHeightCache),
/* harmony export */   "ScrollbarHelper": () => (/* binding */ ScrollbarHelper),
/* harmony export */   "ScrollerComponent": () => (/* binding */ ScrollerComponent),
/* harmony export */   "SelectionType": () => (/* binding */ SelectionType),
/* harmony export */   "SortDirection": () => (/* binding */ SortDirection),
/* harmony export */   "SortType": () => (/* binding */ SortType),
/* harmony export */   "VisibilityDirective": () => (/* binding */ VisibilityDirective),
/* harmony export */   "adjustColumnWidths": () => (/* binding */ adjustColumnWidths),
/* harmony export */   "camelCase": () => (/* binding */ camelCase),
/* harmony export */   "columnGroupWidths": () => (/* binding */ columnGroupWidths),
/* harmony export */   "columnTotalWidth": () => (/* binding */ columnTotalWidth),
/* harmony export */   "columnsByPin": () => (/* binding */ columnsByPin),
/* harmony export */   "columnsByPinArr": () => (/* binding */ columnsByPinArr),
/* harmony export */   "columnsTotalWidth": () => (/* binding */ columnsTotalWidth),
/* harmony export */   "deCamelCase": () => (/* binding */ deCamelCase),
/* harmony export */   "deepValueGetter": () => (/* binding */ deepValueGetter),
/* harmony export */   "elementsFromPoint": () => (/* binding */ elementsFromPoint),
/* harmony export */   "emptyStringGetter": () => (/* binding */ emptyStringGetter),
/* harmony export */   "forceFillColumnWidths": () => (/* binding */ forceFillColumnWidths),
/* harmony export */   "getTotalFlexGrow": () => (/* binding */ getTotalFlexGrow),
/* harmony export */   "getVendorPrefixedName": () => (/* binding */ getVendorPrefixedName),
/* harmony export */   "getterForProp": () => (/* binding */ getterForProp),
/* harmony export */   "groupRowsByParents": () => (/* binding */ groupRowsByParents),
/* harmony export */   "id": () => (/* binding */ id),
/* harmony export */   "isNullOrUndefined": () => (/* binding */ isNullOrUndefined),
/* harmony export */   "nextSortDir": () => (/* binding */ nextSortDir),
/* harmony export */   "numericIndexGetter": () => (/* binding */ numericIndexGetter),
/* harmony export */   "optionalGetterForProp": () => (/* binding */ optionalGetterForProp),
/* harmony export */   "orderByComparator": () => (/* binding */ orderByComparator),
/* harmony export */   "selectRows": () => (/* binding */ selectRows),
/* harmony export */   "selectRowsBetween": () => (/* binding */ selectRowsBetween),
/* harmony export */   "setColumnDefaults": () => (/* binding */ setColumnDefaults),
/* harmony export */   "shallowValueGetter": () => (/* binding */ shallowValueGetter),
/* harmony export */   "sortRows": () => (/* binding */ sortRows),
/* harmony export */   "throttle": () => (/* binding */ throttle),
/* harmony export */   "throttleable": () => (/* binding */ throttleable),
/* harmony export */   "translateTemplates": () => (/* binding */ translateTemplates),
/* harmony export */   "translateXY": () => (/* binding */ translateXY),
/* harmony export */   "ɵ0": () => (/* binding */ ɵ0)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);






/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



const _c0 = ["*"];
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r20 = restoredCtx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.rowContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onBodyScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const column_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.columnContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onColumnContextmenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c2 = function (a0) { return { "selected-count": a0 }; };
function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pg_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPage(pg_r1.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
} }
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ii_r5 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c3 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c4 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
} }
class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollbarHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollbarHelper, factory: ScrollbarHelper.ɵfac });
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DimensionsHelper, factory: DimensionsHelper.ɵfac });

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColumnChangesService, factory: ColumnChangesService.ɵfac });

class DataTableFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) { return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableFooterTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableFooterTemplateDirective, selectors: [["", "ngx-datatable-footer-template", ""]] });
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
VisibilityDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.visible',] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DraggableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
DraggableDirective.propDecorators = {
    dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};

class ResizeableDirective {
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ngAfterViewInit() {
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    onMousedown(event) {
        const isHandle = event.target.classList.contains('resize-handle');
        const initialWidth = this.element.clientWidth;
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup());
            const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup))
                .subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
            this.subscription.add(mouseMoveSub);
        }
    }
    move(event, initialWidth, mouseDownScreenX) {
        const movementX = event.screenX - mouseDownScreenX;
        const newWidth = initialWidth + movementX;
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ResizeableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousedown', ['$event'],] }]
};

class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) { return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
OrderableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OrderableDirective, selectors: [["", "orderable", ""]], contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    } }, outputs: { reorder: "reorder", targetChanged: "targetChanged" } });
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [DraggableDirective, { descendants: true },] }]
};

class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
LongPressDirective.propDecorators = {
    pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.press',] }],
    isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.longpress',] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousedown', ['$event'],] }]
};

class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
ScrollerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};

class DatatableGroupHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) { return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DatatableGroupHeaderTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderTemplateDirective, selectors: [["", "ngx-datatable-group-header-template", ""]] });
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableGroupHeaderDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

function optionalGetterForProp(prop) {
    return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        const nodeById = {};
        const l = rows.length;
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        const uniqIDs = rows.reduce((arr, item) => {
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }, []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            let parent = 0;
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        let resolvedRows = [];
        nodeById[0].flatten(function () {
            resolvedRows = [...resolvedRows, this.row];
        }, true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));

var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));

var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType || (SortType = {}));

var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));

class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) { return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnHeaderDirective, selectors: [["", "ngx-datatable-header-template", ""]] });
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) { return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnCellDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellDirective, selectors: [["", "ngx-datatable-cell-template", ""]] });
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) { return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DataTableColumnCellTreeToggle.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellTreeToggle, selectors: [["", "ngx-datatable-tree-toggle", ""]] });
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService)); };
DataTableColumnDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }],
    _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }],
    _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }]
};

class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) { return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
DatatableRowDetailTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailTemplateDirective, selectors: [["", "ngx-datatable-row-detail-template", ""]] });
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];

class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};

class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });
DatatableFooterDirective.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef },] }]
};

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            const has = prop && c[prop];
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    let totalWidth = 0;
    for (const column of columns) {
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
function columnsByPinArr(val) {
    const colsByPinArr = [];
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
const ɵ0 = function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (ɵ0)();
function getVendorPrefixedName(property) {
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DataTableBodyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { selected: "selected", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight", offsetX: "offsetX", loadingIndicator: "loadingIndicator", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", externalPaging: "externalPaging", rowHeight: "rowHeight", emptyMessage: "emptyMessage", selectionType: "selectionType", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, ProgressBarComponent, DataTableSelectionComponent, ScrollerComponent, DataTableSummaryRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, DataTableBodyRowComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width',] }],
    bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [ScrollerComponent,] }]
};

class DataTableHeaderComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DataTableHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { innerWidth: "innerWidth", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX", sorts: "sorts", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective]; }, encapsulation: 2, changeDetection: 0 });
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
DataTableHeaderComponent.propDecorators = {
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width',] }]
};

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}

class DatatableComponent {
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (x) => {
            if (this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    set offset(val) {
        this._offset = val;
    }
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     */
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     */
    get allRowsSelected() {
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            const indexes = this.bodyComponent.indexes;
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(() => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val) {
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        const map = new Map();
        let i = 0;
        originalArray.forEach((item) => {
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        const addGroup = (key, value) => {
            return { key, value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, x => addGroup(x[0], x[1]));
    }
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    }
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims() {
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            const size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        let idx;
        const cols = this._internalColumns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }) {
        const cols = this._internalColumns.map(c => {
            return Object.assign({}, c);
        });
        if (this.swapColumns) {
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            const first = this.bodyComponent.indexes.first;
            const last = this.bodyComponent.indexes.last;
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event) {
        const row = event.row;
        // TODO: For duplicated items this will not work
        const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
        this.treeAction.emit({ row, rowIndex });
    }
    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        }));
    }
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8)); };
DatatableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", groupExpansionDefault: "groupExpansionDefault", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity", rows: "rows", groupedRows: "groupedRows", groupRowsBy: "groupRowsBy", columns: "columns", limit: "limit", count: "count", offset: "offset", targetMarkerTemplate: "targetMarkerTemplate", selectionType: "selectionType", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    } }, directives: function () { return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, DataTableHeaderComponent, DataTableBodyComponent, DataTableFooterComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe]; }, styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.fixed-header',] }],
    isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.fixed-row',] }],
    isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.virtualized',] }],
    isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.scroll-horz',] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.single-selection',] }],
    isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DatatableRowDetailDirective,] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DatatableGroupHeaderDirective,] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [DatatableFooterDirective,] }],
    bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [DataTableBodyComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [DataTableHeaderComponent,] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['window:resize',] }]
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    throttleable(5)
], DatatableComponent.prototype, "onWindowResize", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return []; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngx-datatable-footer-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.visible']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[draggable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousedown', ['$event']]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[orderable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }]; }, { reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [DraggableDirective, { descendants: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[long-press]' }]
    }], function () { return []; }, { pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.press']
        }], isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.longpress']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousedown', ['$event']]
        }], pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-scroller',
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ngx-datatable-group-header-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'ngx-datatable-group-header' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngx-datatable-header-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngx-datatable-cell-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngx-datatable-tree-toggle]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'ngx-datatable-column' }]
    }], function () { return [{ type: ColumnChangesService }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cellTemplate']
        }], _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }], _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['headerTemplate']
        }], _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }], _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['treeToggleTemplate']
        }], _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[ngx-datatable-row-detail-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'ngx-datatable-row-detail' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: true }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: 'ngx-datatable-footer' }]
    }], null, { footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'datatable-body'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width']
        }], bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [ScrollerComponent]
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-header',
                template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width']
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-datatable',
                template: "<div role=\"table\" visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    role=\"rowgroup\"\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    role=\"rowgroup\"\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }]
    }], function () { return [{ type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }, { type: DimensionsHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }, { type: ColumnChangesService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: ['configuration']
            }] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.fixed-header']
        }], isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.fixed-row']
        }], isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.scroll-vertical']
        }], isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.virtualized']
        }], isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.scroll-horz']
        }], isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.selectable']
        }], isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.checkbox-selection']
        }], isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.cell-selection']
        }], isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.single-selection']
        }], isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.multi-selection']
        }], isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.multi-click-selection']
        }], columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [DataTableColumnDirective]
        }], 
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:resize']
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DatatableRowDetailDirective]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DatatableGroupHeaderDirective]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [DatatableFooterDirective]
        }], bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [DataTableBodyComponent]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [DataTableHeaderComponent]
        }] }); })();

class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    ngOnInit() {
        this.sortClass = this.calcSortClass(this.sortDir);
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (!this.cellContext.column.sortable)
            return;
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn ${this.sortUnsetIcon}`;
        }
    }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DataTableHeaderCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    } }, inputs: { allRowsSelected: "allRowsSelected", column: "column", sorts: "sorts", sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", selectionType: "selectionType", headerHeight: "headerHeight" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
DataTableHeaderCellComponent.propDecorators = {
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['attr.title',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.maxWidth.px',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width.px',] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['contextmenu', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['attr.title']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.maxWidth.px']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { selectedCount: "selectedCount", footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet, DataTablePagerComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { size: "size", count: "count", page: "page", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], encapsulation: 2, changeDetection: 0 });
DataTablePagerComponent.propDecorators = {
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class ProgressBarComponent {
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["datatable-progress"]], decls: 3, vars: 0, consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();

var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));

class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DataTableBodyRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    } }, inputs: { treeStatus: "treeStatus", columns: "columns", innerWidth: "innerWidth", offsetX: "offsetX", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, DataTableBodyCellComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class',] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width.px',] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mouseenter', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }, { type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
        }], columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mouseenter', ['$event']]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
        this._expanded = false;
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers)); };
DataTableRowWrapperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { rowIndex: "rowIndex", expanded: "expanded", innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }
];
DataTableRowWrapperComponent.propDecorators = {
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['contextmenu', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers }]; }, { rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
DataTableBodyCellComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", displayCheck: "displayCheck" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }
];
DataTableBodyCellComponent.propDecorators = {
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, static: true },] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.width.px',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.maxWidth.px',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['style.height',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['blur',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }],
    onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['dblclick', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }]; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.width.px']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.maxWidth.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['style.height']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['focus']
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['dblclick', ['$event']]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, static: true }]
        }] }); })();

function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const multi = this.selectionType === SelectionType.multi;
        const multiClick = this.selectionType === SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
DataTableSelectionComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-selection',
                template: ` <ng-content></ng-content> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, DataTableBodyRowComponent], encapsulation: 2 });
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); };
NgxDatatableModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDatatableModule, { declarations: function () { return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]; }, exports: function () { return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]; } }); })();

var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType || (ClickType = {}));

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    const elements = [];
    const previousPointerEvents = [];
    let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    let i;
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ })

}]);
//# sourceMappingURL=src_app_tables_tables_module_ts.js.map
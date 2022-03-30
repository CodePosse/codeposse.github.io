"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_email_email_module_ts"],{

/***/ 31104:
/*!****************************************************!*\
  !*** ./src/app/email/compose/compose.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComposeComponent": () => (/* binding */ ComposeComponent)
/* harmony export */ });
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 79949);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 24169);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);







class ComposeComponent {
    constructor() {
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_0__;
    }
}
ComposeComponent.ɵfac = function ComposeComponent_Factory(t) { return new (t || ComposeComponent)(); };
ComposeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ComposeComponent, selectors: [["app-compose"]], decls: 135, vars: 1, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "float-end", "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], [1, "material-icons", "col-blue-grey"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], ["colspan", "1"], [1, "inbox-header"], [1, "col-lg-12"], [1, "composeForm"], [1, "form-line"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "id", "email_address"], ["matInput", "", "id", "subject"], ["data", "<p>Hello, world!</p>", 3, "editor"], [1, "compose-editor", "m-t-20"], ["id", "summernote"], ["type", "file", "multiple", "", 1, "default"], [1, "m-l-25", "m-b-20"], ["mat-flat-button", "", "color", "primary", 1, "msr-2"], ["mat-flat-button", "", "color", "warn"]], template: function ComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 19)(26, "li", 20)(27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li")(32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li")(35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li")(38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li")(41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li")(44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ul", 29)(49, "li")(50, "a", 30)(51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "li")(55, "a", 30)(56, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 30)(61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li")(65, "a", 30)(66, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li")(70, "a", 30)(71, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ul", 36)(77, "li")(78, "a", 30)(79, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li")(83, "a", 30)(84, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li")(88, "a", 30)(89, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li")(93, "a", 30)(94, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li")(98, "a", 30)(99, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 40)(103, "div", 15)(104, "div", 41)(105, "div", 42)(106, "table", 43)(107, "thead")(108, "tr")(109, "th", 44)(110, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, " Compose New Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 3)(113, "div", 46)(114, "form", 47)(115, "div", 48)(116, "mat-form-field", 49)(117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "TO");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 48)(121, "mat-form-field", 49)(122, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "ckeditor", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div", 54)(128, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 46)(130, "div", 56)(131, "button", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("editor", ctx.Editor);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__.CKEditorComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: ["[_nghost-%COMP%]     .ck-editor__editable_inline {\n  min-height: 350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNvbXBvc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgbWluLWhlaWdodDogMzUwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 4639:
/*!***********************************************!*\
  !*** ./src/app/email/email-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailRoutingModule": () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox/inbox.component */ 89194);
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose/compose.component */ 31104);
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-mail/read-mail.component */ 63925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_0__.InboxComponent
    },
    {
        path: 'compose',
        component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent
    },
    {
        path: 'read-mail',
        component: _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_2__.ReadMailComponent
    }
];
class EmailRoutingModule {
}
EmailRoutingModule.ɵfac = function EmailRoutingModule_Factory(t) { return new (t || EmailRoutingModule)(); };
EmailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EmailRoutingModule });
EmailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EmailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 57727:
/*!***************************************!*\
  !*** ./src/app/email/email.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailModule": () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-routing.module */ 4639);
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compose/compose.component */ 31104);
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inbox/inbox.component */ 89194);
/* harmony import */ var _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./read-mail/read-mail.component */ 63925);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 24169);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);












class EmailModule {
}
EmailModule.ɵfac = function EmailModule_Factory(t) { return new (t || EmailModule)(); };
EmailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EmailModule });
EmailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EmailModule, { declarations: [_compose_compose_component__WEBPACK_IMPORTED_MODULE_1__.ComposeComponent, _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_2__.InboxComponent, _read_mail_read_mail_component__WEBPACK_IMPORTED_MODULE_3__.ReadMailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__.CKEditorModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule] }); })();


/***/ }),

/***/ 89194:
/*!************************************************!*\
  !*** ./src/app/email/inbox/inbox.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InboxComponent": () => (/* binding */ InboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);





class InboxComponent {
    constructor() { }
    ngOnInit() { }
}
InboxComponent.ɵfac = function InboxComponent_Factory(t) { return new (t || InboxComponent)(); };
InboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InboxComponent, selectors: [["app-inbox"]], decls: 418, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["title", "Inbox"], [1, "float-end", "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], [1, "material-icons", "col-blue-grey"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-center", "table-responsive"], [1, "table", "table-hover"], [1, "text-center"], [1, "example-margin"], ["colspan", "3"], [1, "inbox-header"], [1, "mail-option", "no-pad-left"], [1, "email-btn-group", "m-l-15"], ["mat-icon-button", "", "aria-label", "Example icon-button with a heart icon"], ["colspan", "2", 1, "hidden-xs"], [1, "float-end"], [1, "unread"], [1, "tbl-checkbox"], [1, "hidden-xs"], [1, "material-icons"], [1, "max-texts"], ["routerLink", "/email/read-mail"], [1, "badge", "col-blue", "shadow-style", "m-r-10"], [1, "text-end"], [1, "material-icons", "text-warning"], [1, "badge", "col-red", "shadow-style", "m-r-10"], [1, "badge", "col-cyan", "shadow-style", "m-r-10"], [1, "badge", "col-orange", "shadow-style", "m-r-10"], [1, "badge", "col-purple", "shadow-style", "m-r-10"], [1, "badge", "col-green", "shadow-style", "m-r-10"], [1, "col-sm-7"], [1, "p-15"], [1, "col-sm-5", "text-end"]], template: function InboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 19)(26, "li", 20)(27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 29)(49, "li")(50, "a", 30)(51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 30)(56, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 30)(61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 30)(66, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li")(70, "a", 30)(71, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 36)(77, "li")(78, "a", 30)(79, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li")(83, "a", 30)(84, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li")(88, "a", 30)(89, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li")(93, "a", 30)(94, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 30)(99, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 40)(103, "div", 15)(104, "div", 41)(105, "div", 42)(106, "table", 43)(107, "thead")(108, "tr")(109, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "th", 46)(112, "div", 47)(113, "div", 48)(114, "div", 49)(115, "button", 50)(116, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "keyboard_return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 50)(119, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "button", 50)(122, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 50)(125, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "button", 50)(128, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "folder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "button", 50)(131, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "th", 51)(134, "div", 52)(135, "div", 49)(136, "button", 50)(137, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 50)(140, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tbody")(143, "tr", 53)(144, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td", 55)(147, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td", 57)(152, "a", 58)(153, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td", 55)(157, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " 12:30 PM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr", 53)(162, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td", 55)(165, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td", 57)(170, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "td", 55)(173, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " May 13 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "tr", 53)(178, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "td", 55)(181, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td", 57)(186, "a", 58)(187, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "td", 55)(191, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "tr")(196, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "td", 55)(199, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "td", 57)(204, "a", 58)(205, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "td", 55)(209, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "tr")(214, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "td", 55)(217, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "td", 57)(222, "a", 58)(223, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "td", 55)(227, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " May 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "tr")(232, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "td", 55)(235, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "td", 57)(240, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "td", 55)(243, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "tr")(248, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "td", 55)(251, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "td", 57)(256, "a", 58)(257, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "td", 55)(261, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "tr")(266, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "td", 55)(269, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td", 57)(274, "a", 58)(275, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "td", 55)(279, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " May 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "tr")(284, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "td", 55)(287, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td", 57)(292, "a", 58)(293, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "td", 55)(297, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "tr")(302, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "td", 55)(305, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "td", 57)(310, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "td", 55)(313, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "tr")(318, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "td", 55)(321, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "td", 57)(326, "a", 58)(327, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "td", 55)(331, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " May 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "tr")(336, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td", 55)(339, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Lula Reese");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td", 57)(344, "a", 58)(345, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "td", 55)(349, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "tr")(354, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](355, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "td", 55)(357, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](358, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Nelson Lane");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "td", 57)(362, "a", 58)(363, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, " Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "td", 55)(367, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "tr")(372, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](373, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "td", 55)(375, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Kerry Mann");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "td", 57)(380, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Lorem ipsum perspiciatis unde omnis iste natus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "td", 55)(383, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "tr")(388, "td", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "mat-checkbox", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "td", 55)(391, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "star_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "td", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](394, "Adam Peters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "td", 57)(396, "a", 58)(397, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "Shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, " Lorem ipsum perspiciatis unde omnis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "td", 55)(401, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "td", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, " May 09 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 3)(406, "div", 67)(407, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Showing 1 - 15 of 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 69)(410, "div", 52)(411, "div", 49)(412, "button", 50)(413, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "button", 50)(416, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_2__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmJveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 63925:
/*!********************************************************!*\
  !*** ./src/app/email/read-mail/read-mail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReadMailComponent": () => (/* binding */ ReadMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class ReadMailComponent {
    constructor() { }
    ngOnInit() { }
}
ReadMailComponent.ɵfac = function ReadMailComponent_Factory(t) { return new (t || ReadMailComponent)(); };
ReadMailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadMailComponent, selectors: [["app-read-mail"]], decls: 176, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "mail-nav"], ["type", "button", 1, "btn", "btn-success", "waves-effect", "m-b-15"], ["id", "mail-folders", 1, ""], [1, "active"], ["href", "inbox.html", "title", "Inbox"], [1, "badge", "bg-orange"], ["href", "javascript:;", "title", "Sent"], ["href", "javascript:;", "title", "Draft"], ["href", "javascript:;", "title", "Bin"], ["href", "javascript:;", "title", "Important"], ["href", "javascript:;", "title", "Starred"], [1, "b-b", "p-10", "text-strong"], ["id", "mail-labels", 1, ""], ["href", "javascript:;"], [1, "material-icons", "col-red"], [1, "material-icons", "col-blue"], [1, "material-icons", "col-orange"], [1, "material-icons", "col-cyan"], ["id", "online-offline", 1, "online-user"], ["title", "Online", 1, "material-icons", "col-green"], ["title", "Off Line", 1, "material-icons", "col-indigo"], ["title", "Away", 1, "material-icons", "col-orange"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "boxs", "mail_listing"], [1, "inbox-body", "no-pad"], [1, "mail-list"], [1, "mail-sender"], [1, "mail-heading"], [1, "vew-mail-header"], [1, "d-flex", "mb-4"], ["href", "#", 1, "table-img", "m-r-15"], ["alt", "", "src", "assets/images/user/user2.jpg"], [1, "flex-grow-1"], [1, "date", "float-end"], [1, "text-primary"], [1, "text-muted"], [1, "view-mail"], ["href", "#"], [1, "attachment-mail"], [1, "fa", "fa-paperclip"], [1, "col-md-2"], ["alt", "attachment", "src", "assets/images/user/usrbig2.jpg", 1, "img-thumbnail", "img-responsive"], ["href", "#", 1, "name"], ["alt", "attachment", "src", "assets/images/user/usrbig1.jpg", 1, "img-thumbnail", "img-responsive"], ["alt", "attachment", "src", "assets/images/user/usrbig3.jpg", 1, "img-thumbnail", "img-responsive"], [1, "replyBox", "m-t-20"], [1, "p-b-20"]], template: function ReadMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "COMPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 19)(26, "li", 20)(27, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Bin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Important");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 29)(49, "li")(50, "a", 30)(51, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 30)(56, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 30)(61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 30)(66, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Themeforest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li")(70, "a", 30)(71, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "local_offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 35)(77, "li")(78, "a", 30)(79, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sachin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li")(83, "a", 30)(84, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "John Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li")(88, "a", 30)(89, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Askay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li")(93, "a", 30)(94, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Dhavan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li")(98, "a", 30)(99, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "brightness_1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 39)(103, "div", 15)(104, "div", 40)(105, "div", 41)(106, "section", 42)(107, "div", 43)(108, "div", 44)(109, "h4", 45)(110, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Hi Dear, How are you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 46)(114, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 49)(117, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "4:15AM 04 April 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "small", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "From: sarah@aristocrat.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 53)(124, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Porttitor eu consequat risus. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Mauris sed congue orci. Donec ultrices faucibus rutrum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, ". Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Sodales ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "vulputate urna, vel accumsan augue egestas ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, ". Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. Donec ultrices faucibus rutrum. Phasellus sodales vulputate urna, vel accumsan augue egestas ac. Donec vitae leo at sem lobortis porttitor eu consequat risus. Mauris sed congue orci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 55)(137, "p")(138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " 3 attachments \u2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Download all attachments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "View all images");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3)(147, "div", 57)(148, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " IMG_001.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "20KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 57)(155, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " IMG_002.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "22KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 57)(162, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " IMG_003.jpg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "28KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 62)(169, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "click here to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFkLW1haWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_email_email_module_ts.js.map
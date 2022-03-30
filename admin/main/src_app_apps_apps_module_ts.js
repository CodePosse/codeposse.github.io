(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_apps_apps_module_ts"],{

/***/ 79188:
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsRoutingModule": () => (/* binding */ AppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat/chat.component */ 46735);
/* harmony import */ var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-grid/contact-grid.component */ 40004);
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support/support.component */ 57844);
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ 7737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: 'chat',
        component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_0__.ChatComponent,
    },
    {
        path: 'contact-grid',
        component: _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_1__.ContactGridComponent,
    },
    {
        path: 'support',
        component: _support_support_component__WEBPACK_IMPORTED_MODULE_2__.SupportComponent,
    },
    {
        path: 'dragdrop',
        component: _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_3__.DragDropComponent,
    },
];
class AppsRoutingModule {
}
AppsRoutingModule.ɵfac = function AppsRoutingModule_Factory(t) { return new (t || AppsRoutingModule)(); };
AppsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppsRoutingModule });
AppsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 99269:
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsModule": () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-dragula */ 48370);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps-routing.module */ 79188);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat.component */ 46735);
/* harmony import */ var _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop/drag-drop.component */ 7737);
/* harmony import */ var _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-grid/contact-grid.component */ 40004);
/* harmony import */ var _support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support/support.component */ 57844);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-pick-datetime */ 37526);
































let AppsModule = class AppsModule {
};
AppsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent,
            _drag_drop_drag_drop_component__WEBPACK_IMPORTED_MODULE_2__.DragDropComponent,
            _contact_grid_contact_grid_component__WEBPACK_IMPORTED_MODULE_3__.ContactGridComponent,
            _support_support_component__WEBPACK_IMPORTED_MODULE_4__.SupportComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginatorModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__.MatSnackBarModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__.DragDropModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__.MatSidenavModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormFieldModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__.MatToolbarModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__.MatMenuModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_29__.MatCardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_5__.OwlNativeDateTimeModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__.MatRadioModule,
            ng2_dragula__WEBPACK_IMPORTED_MODULE_31__.DragulaModule.forRoot(),
        ],
    })
], AppsModule);



/***/ }),

/***/ 46735:
/*!*********************************************!*\
  !*** ./src/app/apps/chat/chat.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatComponent": () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class ChatComponent {
    constructor() {
        this.hideRequiredControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false);
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(); };
ChatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], decls: 198, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [1, "card"], [1, "body"], ["id", "plist", 1, "people-list"], [1, "form-line", "m-b-15"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "tab-content"], ["id", "chat_user", 2, "position", "relative", "max-height", "590px", 3, "perfectScrollbar"], [1, "chat-list", "list-unstyled", "m-b-0"], [1, "clearfix", "active"], ["src", "assets/images/user/user1.jpg", "alt", "avatar"], [1, "about"], [1, "name"], [1, "status"], [1, "material-icons", "offline"], [1, "clearfix"], ["src", "assets/images/user/user2.jpg", "alt", "avatar"], ["src", "assets/images/user/user3.jpg", "alt", "avatar"], [1, "material-icons", "online"], ["src", "assets/images/user/user4.jpg", "alt", "avatar"], ["src", "assets/images/user/user5.jpg", "alt", "avatar"], ["src", "assets/images/user/user6.jpg", "alt", "avatar"], ["src", "assets/images/user/user7.jpg", "alt", "avatar"], ["src", "assets/images/user/user8.jpg", "alt", "avatar"], ["src", "assets/images/user/user9.jpg", "alt", "avatar"], [1, "col-xs-12", "col-sm-12", "col-md-9", "col-lg-9"], [1, "chat"], [1, "chat-header", "clearfix"], [1, "chat-about"], [1, "chat-with"], [1, "chat-num-messages"], ["id", "chat-conversation", 1, "chat-history", 2, "position", "relative", "max-height", "449px", 3, "perfectScrollbar"], [1, "message-data", "text-end"], [1, "message-data-time"], [1, "message-data-name"], [1, "message", "other-message", "float-end"], [1, "message-data"], [1, "message", "my-message"], [1, "chat-message", "clearfix"], [1, "form-group"], [1, "form-line"], [1, "example-full-width"], ["matInput", "", "placeholder", "Enter text here.."], [1, "chat-upload"], ["mat-mini-fab", "", 1, "bg-deep-orange", "msr-2"], [1, "material-icons"], ["mat-mini-fab", "", 1, "bg-deep-orange"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "ul", 22)(28, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 25)(31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "William Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 27)(34, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " left 7 mins ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 25)(40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Martha Williams");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 27)(43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25)(49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Joseph Clark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27)(52, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25)(58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Nancy Taylor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27)(61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 25)(67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Margaret Wilson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 27)(70, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 25)(76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Joseph Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 27)(79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " left 30 mins ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 25)(85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Jane Brown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 27)(88, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, " left 10 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 25)(94, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Eliza Johnson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 27)(97, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 25)(103, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Mike Clark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 27)(106, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 25)(112, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Ann Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 27)(115, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 25)(121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Nancy Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 27)(124, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 25)(130, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "David Wilson");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 27)(133, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "fiber_manual_record");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " offline since Oct 28 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 39)(137, "div", 15)(138, "div", 40)(139, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 42)(142, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Maria Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "2 new messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 45)(147, "ul")(148, "li", 29)(149, "div", 46)(150, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "10:10 AM, Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Maria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, " Hi Robert , how are you? How is your work going on? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "li")(158, "div", 50)(159, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Robert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 51)(164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Its good. We completed almost all task assign by our manager.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "li")(168, "div", 50)(169, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Robert ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "10:12 AM, Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 51)(174, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "How are you feel today? What's about vacation?.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "li", 29)(178, "div", 46)(179, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "10:10 AM, Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Maria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, " I am good, We think for next weekend. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 52)(187, "div", 53)(188, "div", 54)(189, "mat-form-field", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 57)(192, "button", 58)(193, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "attach_file");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "button", 60)(196, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "insert_emoticon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGF0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 40004:
/*!*************************************************************!*\
  !*** ./src/app/apps/contact-grid/contact-grid.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactGridComponent": () => (/* binding */ ContactGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactGridComponent {
    constructor() { }
    ngOnInit() { }
}
ContactGridComponent.ɵfac = function ContactGridComponent_Factory(t) { return new (t || ContactGridComponent)(); };
ContactGridComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactGridComponent, selectors: [["app-contact-grid"]], decls: 296, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "col-xs-12", "col-sm-6"], [1, "body"], [1, "col-md-4"], [1, "card", "border-apply"], [1, "m-b-20"], [1, "contact-grid"], [1, "profile-header", "l-bg-purple-dark"], [1, "user-name"], [1, "name-center"], ["src", "assets/images/user/usrbig1.jpg", "alt", "", 1, "user-img"], [1, "phone"], [1, "material-icons"], [1, "profile-userbuttons"], ["mat-flat-button", "", "color", "primary"], [1, "profile-header", "bg-cyan"], ["src", "assets/images/user/usrbig2.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-dark"], ["src", "assets/images/user/usrbig3.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-orange"], ["src", "assets/images/user/usrbig4.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-green"], ["src", "assets/images/user/usrbig5.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "l-bg-red"], ["src", "assets/images/user/usrbig6.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-indigo"], ["src", "assets/images/user/usrbig7.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-brown"], ["src", "assets/images/user/usrbig8.jpg", "alt", "", 1, "user-img"], [1, "profile-header", "bg-amber"], ["src", "assets/images/user/usrbig9.jpg", "alt", "", 1, "user-img"]], template: function ContactGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "div", 4)(20, "div", 15)(21, "div", 16)(22, "div", 17)(23, "h2")(24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18)(28, "div", 3)(29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div")(44, "span", 27)(45, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29)(49, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19)(52, "div", 20)(53, "div", 21)(54, "div", 22)(55, "div", 31)(56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Smita Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Housekeeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div")(66, "span", 27)(67, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29)(71, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19)(74, "div", 20)(75, "div", 21)(76, "div", 22)(77, "div", 33)(78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div")(88, "span", 27)(89, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29)(93, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3)(96, "div", 19)(97, "div", 20)(98, "div", 21)(99, "div", 22)(100, "div", 35)(101, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div")(111, "span", 27)(112, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 29)(116, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 19)(119, "div", 20)(120, "div", 21)(121, "div", 22)(122, "div", 37)(123, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Smita Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Housekeeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div")(133, "span", 27)(134, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 29)(138, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 19)(141, "div", 20)(142, "div", 21)(143, "div", 22)(144, "div", 39)(145, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Cook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div")(155, "span", 27)(156, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 29)(160, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 3)(163, "div", 19)(164, "div", 20)(165, "div", 21)(166, "div", 22)(167, "div", 41)(168, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div")(178, "span", 27)(179, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 29)(183, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 19)(186, "div", 20)(187, "div", 21)(188, "div", 22)(189, "div", 43)(190, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Smita Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Housekeeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div")(200, "span", 27)(201, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 29)(205, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 19)(208, "div", 20)(209, "div", 21)(210, "div", 22)(211, "div", 45)(212, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Cook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div")(222, "span", 27)(223, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 29)(227, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 3)(230, "div", 19)(231, "div", 20)(232, "div", 21)(233, "div", 22)(234, "div", 23)(235, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Pooja Patel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "General Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, " A-103, shyam gokul flats, Mahatma Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Mumbai ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div")(245, "span", 27)(246, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 29)(250, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 19)(253, "div", 20)(254, "div", 21)(255, "div", 22)(256, "div", 31)(257, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Smita Patil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "Housekeeper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " 45, Krishna Tower, Near Bus Stop, Satellite, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "Ahmedabad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div")(267, "span", 27)(268, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 29)(272, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 19)(275, "div", 20)(276, "div", 21)(277, "div", 22)(278, "div", 33)(279, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, "John Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Cook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, " 456, Estern evenue, Courtage area, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "New York ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div")(289, "span", 27)(290, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "264-625-2583");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 29)(294, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWdyaWQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7737:
/*!*******************************************************!*\
  !*** ./src/app/apps/drag-drop/drag-drop.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragDropComponent": () => (/* binding */ DragDropComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-dragula */ 48370);



class DragDropComponent {
    constructor(dragulaService) {
        this.dragulaService = dragulaService;
        this.BAG = 'DRAGULA_EVENTS';
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subscription();
        this.dragulaService.createGroup('VAMPIRES', {});
        this.dragulaService.dropModel('VAMPIRES').subscribe((args) => {
            console.log(args);
        });
        this.subs.add(dragulaService.drag(this.BAG).subscribe(({ el }) => {
            this.removeClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.drop(this.BAG).subscribe(({ el }) => {
            this.addClass(el, 'ex-moved');
        }));
        this.subs.add(dragulaService.over(this.BAG).subscribe(({ el, container }) => {
            console.log('over', container);
            this.addClass(container, 'ex-over');
        }));
        this.subs.add(dragulaService.out(this.BAG).subscribe(({ el, container }) => {
            console.log('out', container);
            this.removeClass(container, 'ex-over');
        }));
        // spill
        dragulaService.createGroup('SPILL', {
            removeOnSpill: true,
        });
        // revert
        dragulaService.createGroup('REVERT', {
            revertOnSpill: true,
        });
        dragulaService.createGroup('COPYABLE', {
            copy: (el, source) => {
                return source.id === 'left';
            },
            accepts: (el, target, source, sibling) => {
                // To avoid dragging from right to left container
                return target.id !== 'left';
            },
        });
    }
    ngOnDestroy() {
        this.dragulaService.destroy('VAMPIRES');
        this.dragulaService.destroy('SPILL');
        this.dragulaService.destroy('REVERT');
        this.dragulaService.destroy('COPYABLE');
        this.subs.unsubscribe();
    }
    hasClass(el, name) {
        return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
    }
    addClass(el, name) {
        if (!this.hasClass(el, name)) {
            el.className = el.className ? [el.className, name].join(' ') : name;
        }
    }
    removeClass(el, name) {
        if (this.hasClass(el, name)) {
            el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
        }
    }
}
DragDropComponent.ɵfac = function DragDropComponent_Factory(t) { return new (t || DragDropComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng2_dragula__WEBPACK_IMPORTED_MODULE_2__.DragulaService)); };
DragDropComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DragDropComponent, selectors: [["app-drag-drop"]], decls: 254, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "row", "clearfix"], [1, "card"], [1, "header"], [1, "body"], [1, "alert", "alert-info"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "board"], ["id", "left", 1, "cards"], ["dragula", "VAMPIRES", 1, "container"], [1, "drop-card"], [1, "table-img", "msg-user"], ["src", "assets/images/user/user5.jpg", "alt", ""], [1, "cardtitle", "noselect"], ["src", "assets/images/user/user6.jpg", "alt", ""], ["src", "assets/images/user/user7.jpg", "alt", ""], ["src", "assets/images/user/user8.jpg", "alt", ""], ["id", "right", 1, "cards"], ["src", "assets/images/user/user1.jpg", "alt", ""], ["src", "assets/images/user/user2.jpg", "alt", ""], [1, "alert", "alert-info", 2, "width", "100%"], ["href", "https://github.com/bevacqua/dragula#drakeon-events"], ["dragula", "DRAGULA_EVENTS", 1, "container"], ["src", "assets/images/user/user3.jpg", "alt", ""], ["src", "assets/images/user/user4.jpg", "alt", ""], ["dragula", "SPILL", 1, "container"], ["dragula", "REVERT", 1, "container"], ["dragula", "COPYABLE", "id", "left", 1, "container"], ["dragula", "COPYABLE", "id", "right", 1, "container"]], template: function DragDropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Drag & Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Drag & Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 4)(20, "div", 15)(21, "div", 16)(22, "h2")(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Drag & Drop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17)(27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 3)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " User card #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23)(40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "User card #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 23)(45, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "User card #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23)(50, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "User card #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 19)(55, "div", 20)(56, "div", 30)(57, "div", 22)(58, "div", 23)(59, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "User card #7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23)(64, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "User card #8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 14)(69, "div", 4)(70, "div", 15)(71, "div", 16)(72, "h2")(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Drag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " & Drop Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 17)(77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, " There are plenty of events along the lifetime of a drag event. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "all of them");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " in the docs! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 3)(83, "div", 19)(84, "div", 20)(85, "div", 21)(86, "div", 35)(87, "div", 23)(88, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " User card #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 23)(93, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "User card #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 23)(98, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "User card #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 23)(103, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "User card #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 19)(108, "div", 20)(109, "div", 30)(110, "div", 35)(111, "div", 23)(112, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "User card #5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "div", 23)(117, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "User card #6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 14)(122, "div", 4)(123, "div", 15)(124, "div", 16)(125, "h2")(126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Spill");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 17)(129, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Need to be able to quickly delete stuff when it spills out of the chosen containers? Note how you can easily sort the items in any containers by just dragging and dropping. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 3)(132, "div", 19)(133, "div", 20)(134, "div", 30)(135, "div", 38)(136, "div", 23)(137, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, " User card #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 23)(142, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "User card #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 23)(147, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "User card #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 23)(152, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "User card #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 14)(157, "div", 4)(158, "div", 15)(159, "div", 16)(160, "h2")(161, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "Revert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 17)(164, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, " By default, dropping an element outside of any known containers will keep the element in the last place it went over. You can make elements go back to origin if they're dropped outside of known containers, too. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 3)(167, "div", 19)(168, "div", 20)(169, "div", 21)(170, "div", 39)(171, "div", 23)(172, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, " User card #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 23)(177, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "User card #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 23)(182, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "User card #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 23)(187, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "User card #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 19)(192, "div", 20)(193, "div", 30)(194, "div", 39)(195, "div", 23)(196, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "User card #5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 23)(201, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "User card #6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 14)(206, "div", 4)(207, "div", 15)(208, "div", 16)(209, "h2")(210, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Revert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 17)(213, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, " Copying Elements from left side to right side made it easy for you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 3)(216, "div", 19)(217, "div", 20)(218, "div", 21)(219, "div", 40)(220, "div", 23)(221, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, " User card #1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 23)(226, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "User card #2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 23)(231, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "User card #3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 23)(236, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "User card #4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 19)(241, "div", 20)(242, "div", 30)(243, "div", 41)(244, "div", 23)(245, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "User card #5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 23)(250, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "User card #6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()()();
    } }, styles: [".container[_ngcontent-%COMP%]   .ex-moved[_ngcontent-%COMP%] {\n  background-color: rgba(255, 21, 45, 0.75);\n  color: #fff;\n}\n\n.container.ex-over[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyYWctZHJvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsMENBQUE7QUFDRiIsImZpbGUiOiJkcmFnLWRyb3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIC5leC1tb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjkzLCAyMSwgNDUsIDAuNzUpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNvbnRhaW5lci5leC1vdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuIl19 */"] });


/***/ }),

/***/ 57844:
/*!***************************************************!*\
  !*** ./src/app/apps/support/support.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportComponent": () => (/* binding */ SupportComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



function SupportComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " # ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52)(1, "mat-checkbox", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SupportComponent_td_76_Template_mat_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const element_r20 = restoredCtx.$implicit; return element_r20.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", element_r20.checked);
} }
function SupportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", element_r23.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SupportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Opened By ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
} }
function SupportComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.email, " ");
} }
function SupportComponent_th_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r26.subject, " ");
} }
function SupportComponent_th_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52)(1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r27.status, "");
} }
function SupportComponent_th_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Assign To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r28.assignTo, " ");
} }
function SupportComponent_th_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r29.date, " ");
} }
function SupportComponent_th_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SupportComponent_td_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 52)(1, "button", 60)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 61)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function SupportComponent_tr_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 62);
} }
function SupportComponent_tr_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 63);
} }
const _c0 = function () { return [5, 10, 20]; };
const ELEMENT_DATA = [
    {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user9.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user10.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user1.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'open',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user2.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user3.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user4.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user5.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user6.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'pending',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user7.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
    {
        checked: false,
        imageUrl: 'assets/images/user/user8.jpg',
        name: 'Tim Hank',
        email: 'test@aristocrat.com',
        subject: 'Image not Proper',
        status: 'closed',
        assignTo: 'John Deo',
        date: '27/05/2016',
        action: '',
    },
];
class SupportComponent {
    constructor() {
        this.displayedColumns = [
            'checked',
            'imageUrl',
            'name',
            'email',
            'subject',
            'status',
            'assignTo',
            'date',
            'action',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTableDataSource(ELEMENT_DATA);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
SupportComponent.ɵfac = function SupportComponent_Factory(t) { return new (t || SupportComponent)(); };
SupportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportComponent, selectors: [["app-support"]], viewQuery: function SupportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginator, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 104, vars: 6, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "card"], [1, "header"], [1, "body"], [1, "col-lg-3", "col-sm-6"], [1, "info-box7", "bg-c-blue", "order-info-box7"], [1, "info-box7-block"], [1, "m-b-20"], [1, "text-end"], [1, "fas", "fa-ticket-alt", "float-start"], [1, "m-b-0"], [1, "info-box7", "bg-c-green", "order-info-box7"], [1, "fas", "fa-reply", "float-start"], [1, "info-box7", "bg-c-yellow", "order-info-box7"], [1, "fas", "fa-clipboard-check", "float-start"], [1, "info-box7", "bg-c-pink", "order-info-box7"], [1, "fas", "fa-clipboard-list", "float-start"], [1, "table-responsive"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "checked"], ["mat-header-cell", "", "width", "10%", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "imageUrl"], ["mat-header-cell", "", "width", "8%", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "subject"], ["matColumnDef", "status"], ["matColumnDef", "assignTo"], ["matColumnDef", "date"], ["matColumnDef", "action"], ["mat-header-cell", "", "width", "15%", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", "width", "10%"], ["mat-cell", ""], [3, "ngModel", "ngModelChange"], ["mat-header-cell", "", "width", "8%"], ["mat-cell", "", 1, "table-img"], [3, "src"], ["mat-header-cell", ""], [1, "badge"], ["mat-header-cell", "", "width", "15%"], ["mat-icon-button", "", 1, "btn-tbl-edit"], ["mat-icon-button", "", 1, "btn-tbl-delete"], ["mat-header-row", ""], ["mat-row", ""]], template: function SupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "h2")(23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Tickets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17)(27, "div", 3)(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Total Tickets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1,276");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "18% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18)(40, "div", 25)(41, "div", 20)(42, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "865");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "21% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18)(51, "div", 27)(52, "div", 20)(53, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Resolve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "457");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "37% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18)(62, "div", 29)(63, "div", 20)(64, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "239");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "10% Higher Then Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31)(73, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, SupportComponent_th_75_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SupportComponent_td_76_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, SupportComponent_th_78_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, SupportComponent_td_79_Template, 2, 1, "td", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, SupportComponent_th_81_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, SupportComponent_td_82_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](83, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, SupportComponent_th_84_Template, 2, 0, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, SupportComponent_td_85_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](86, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, SupportComponent_th_87_Template, 2, 0, "th", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, SupportComponent_td_88_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](89, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, SupportComponent_th_90_Template, 2, 0, "th", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, SupportComponent_td_91_Template, 3, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](92, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, SupportComponent_th_93_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, SupportComponent_td_94_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](95, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, SupportComponent_th_96_Template, 2, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, SupportComponent_td_97_Template, 2, 1, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](98, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SupportComponent_th_99_Template, 2, 0, "th", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SupportComponent_td_100_Template, 7, 0, "td", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, SupportComponent_tr_101_Template, 1, 0, "tr", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, SupportComponent_tr_102_Template, 1, 0, "tr", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "mat-paginator", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 33930:
/*!***********************************!*\
  !*** ./node_modules/atoa/atoa.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ 23726:
/*!*****************************************!*\
  !*** ./node_modules/contra/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ticky = __webpack_require__(/*! ticky */ 79638);

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ 14545:
/*!****************************************!*\
  !*** ./node_modules/contra/emitter.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var atoa = __webpack_require__(/*! atoa */ 33930);

var debounce = __webpack_require__(/*! ./debounce */ 23726);

module.exports = function emitter(thing, options) {
  var opts = options || {};
  var evt = {};

  if (thing === undefined) {
    thing = {};
  }

  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }

    return thing;
  };

  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!

    thing.on(type, fn);
    return thing;
  };

  thing.off = function (type, fn) {
    var c = arguments.length;

    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];

      if (!et) {
        return thing;
      }

      et.splice(et.indexOf(fn), 1);
    }

    return thing;
  };

  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };

  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;

      if (type === 'error' && opts.throws !== false && !et.length) {
        throw args.length === 1 ? args[0] : args;
      }

      et.forEach(function emitter(listen) {
        if (opts.async) {
          debounce(listen, args, ctx);
        } else {
          listen.apply(ctx, args);
        }

        if (listen._once) {
          thing.off(type, listen);
        }
      });
      return thing;
    };
  };

  return thing;
};

/***/ }),

/***/ 55801:
/*!*************************************************!*\
  !*** ./node_modules/crossvent/src/crossvent.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var customEvent = __webpack_require__(/*! custom-event */ 22161);
var eventmap = __webpack_require__(/*! ./eventmap */ 98772);
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}


/***/ }),

/***/ 98772:
/*!************************************************!*\
  !*** ./node_modules/crossvent/src/eventmap.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;


/***/ }),

/***/ 22161:
/*!********************************************!*\
  !*** ./node_modules/custom-event/index.js ***!
  \********************************************/
/***/ ((module) => {


var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}


/***/ }),

/***/ 62716:
/*!*****************************************!*\
  !*** ./node_modules/dragula/classes.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ 54603:
/*!*****************************************!*\
  !*** ./node_modules/dragula/dragula.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var emitter = __webpack_require__(/*! contra/emitter */ 14545);
var crossvent = __webpack_require__(/*! crossvent */ 55801);
var classes = __webpack_require__(/*! ./classes */ 62716);
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }

    // truthy check fixes #239, equality fixes #207, fixes #501
    if ((e.clientX !== void 0 && Math.abs(e.clientX - _moveX) <= (o.slideFactorX || 0)) &&
      (e.clientY !== void 0 && Math.abs(e.clientY - _moveY) <= (o.slideFactorY || 0))) {
      return;
    }

    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e) || 0;
      var clientY = getCoord('clientY', e) || 0;
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e) || 0;
    var clientY = getCoord('clientY', e) || 0;
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  point = point || {};
  var state = point.className || '';
  var el;
  point.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  point.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;


/***/ }),

/***/ 48370:
/*!****************************************************************************!*\
  !*** ./node_modules/ng2-dragula/__ivy_ngcc__/dist/fesm2015/ng2-dragula.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DragulaDirective": () => (/* binding */ DragulaDirective),
/* harmony export */   "DragulaService": () => (/* binding */ DragulaService),
/* harmony export */   "DragulaModule": () => (/* binding */ DragulaModule),
/* harmony export */   "dragula": () => (/* binding */ dragula),
/* harmony export */   "DrakeFactory": () => (/* binding */ DrakeFactory),
/* harmony export */   "Group": () => (/* binding */ Group),
/* harmony export */   "EventTypes": () => (/* binding */ EventTypes),
/* harmony export */   "MockDrake": () => (/* binding */ MockDrake),
/* harmony export */   "MockDrakeFactory": () => (/* binding */ MockDrakeFactory)
/* harmony export */ });
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dragula */ 54603);
/* harmony import */ var dragula__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dragula__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

class Group {
    /**
     * @param {?} name
     * @param {?} drake
     * @param {?} options
     */
    constructor(name, drake, options) {
        this.name = name;
        this.drake = drake;
        this.options = options;
        this.initEvents = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const EventTypes = {
    Cancel: "cancel",
    Cloned: "cloned",
    Drag: "drag",
    DragEnd: "dragend",
    Drop: "drop",
    Out: "out",
    Over: "over",
    Remove: "remove",
    Shadow: "shadow",
    DropModel: "dropModel",
    RemoveModel: "removeModel",
};
/** @type {?} */
const AllEvents = Object.keys(EventTypes).map(k => /** @type {?} */ (EventTypes[/** @type {?} */ (k)]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const dragula = (dragula__WEBPACK_IMPORTED_MODULE_0___default()) || dragula__WEBPACK_IMPORTED_MODULE_0__;
class DrakeFactory {
    /**
     * @param {?=} build
     */
    constructor(build = dragula) {
        this.build = build;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const filterEvent = (eventType, filterDragType, projector) => (input) => {
    return input.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({ event, name }) => {
        return event === eventType
            && (filterDragType === undefined || name === filterDragType);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(({ name, args }) => projector(name, args)));
};
/** @type {?} */
const elContainerSourceProjector = (name, [el, container, source]) => ({ name, el, container, source });
class DragulaService {
    /**
     * @param {?=} drakeFactory
     */
    constructor(drakeFactory = null) {
        this.drakeFactory = drakeFactory;
        this.dispatch$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.drag = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drag, groupName, (name, [el, source]) => ({ name, el, source })));
        this.dragend = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DragEnd, groupName, (name, [el]) => ({ name, el })));
        this.drop = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Drop, groupName, (name, [el, target, source, sibling]) => {
            return { name, el, target, source, sibling };
        }));
        this.elContainerSource = (eventType) => (groupName) => this.dispatch$.pipe(filterEvent(eventType, groupName, elContainerSourceProjector));
        this.cancel = this.elContainerSource(EventTypes.Cancel);
        this.remove = this.elContainerSource(EventTypes.Remove);
        this.shadow = this.elContainerSource(EventTypes.Shadow);
        this.over = this.elContainerSource(EventTypes.Over);
        this.out = this.elContainerSource(EventTypes.Out);
        this.cloned = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.Cloned, groupName, (name, [clone, original, cloneType]) => {
            return { name, clone, original, cloneType };
        }));
        this.dropModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.DropModel, groupName, (name, [el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex]) => {
            return { name, el, target, source, sibling, item, sourceModel, targetModel, sourceIndex, targetIndex };
        }));
        this.removeModel = (groupName) => this.dispatch$.pipe(filterEvent(EventTypes.RemoveModel, groupName, (name, [el, container, source, item, sourceModel, sourceIndex]) => {
            return { name, el, container, source, item, sourceModel, sourceIndex };
        }));
        this.groups = {};
        if (this.drakeFactory === null) {
            this.drakeFactory = new DrakeFactory();
        }
    }
    /**
     * Public mainly for testing purposes. Prefer `createGroup()`.
     * @param {?} group
     * @return {?}
     */
    add(group) {
        /** @type {?} */
        let existingGroup = this.find(group.name);
        if (existingGroup) {
            throw new Error('Group named: "' + group.name + '" already exists.');
        }
        this.groups[group.name] = group;
        this.handleModels(group);
        this.setupEvents(group);
        return group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    find(name) {
        return this.groups[name];
    }
    /**
     * @param {?} name
     * @return {?}
     */
    destroy(name) {
        /** @type {?} */
        let group = this.find(name);
        if (!group) {
            return;
        }
        group.drake && group.drake.destroy();
        delete this.groups[name];
    }
    /**
     * Creates a group with the specified name and options.
     *
     * Note: formerly known as `setOptions`
     * @template T
     * @param {?} name
     * @param {?} options
     * @return {?}
     */
    createGroup(name, options) {
        return this.add(new Group(name, this.drakeFactory.build([], options), options));
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleModels({ name, drake, options }) {
        /** @type {?} */
        let dragElm;
        /** @type {?} */
        let dragIndex;
        /** @type {?} */
        let dropIndex;
        drake.on('remove', (el, container, source) => {
            if (!drake.models) {
                return;
            }
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel = sourceModel.slice(0);
            /** @type {?} */
            const item = sourceModel.splice(dragIndex, 1)[0];
            // console.log('REMOVE');
            // console.log(sourceModel);
            this.dispatch$.next({
                event: EventTypes.RemoveModel,
                name,
                args: [el, container, source, item, sourceModel, dragIndex]
            });
        });
        drake.on('drag', (el, source) => {
            if (!drake.models) {
                return;
            }
            dragElm = el;
            dragIndex = this.domIndexOf(el, source);
        });
        drake.on('drop', (dropElm, target, source, sibling) => {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = this.domIndexOf(dropElm, target);
            /** @type {?} */
            let sourceModel = drake.models[drake.containers.indexOf(source)];
            /** @type {?} */
            let targetModel = drake.models[drake.containers.indexOf(target)];
            /** @type {?} */
            let item;
            if (target === source) {
                sourceModel = sourceModel.slice(0);
                item = sourceModel.splice(dragIndex, 1)[0];
                sourceModel.splice(dropIndex, 0, item);
                // this was true before we cloned and updated sourceModel,
                // but targetModel still has the old value
                targetModel = sourceModel;
            }
            else {
                /** @type {?} */
                let isCopying = dragElm !== dropElm;
                item = sourceModel[dragIndex];
                if (isCopying) {
                    if (!options.copyItem) {
                        throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");
                    }
                    item = options.copyItem(item);
                }
                if (!isCopying) {
                    sourceModel = sourceModel.slice(0);
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel = targetModel.slice(0);
                targetModel.splice(dropIndex, 0, item);
                if (isCopying) {
                    try {
                        target.removeChild(dropElm);
                    }
                    catch (e) { }
                }
            }
            this.dispatch$.next({
                event: EventTypes.DropModel,
                name,
                args: [dropElm, target, source, sibling, item, sourceModel, targetModel, dragIndex, dropIndex]
            });
        });
    }
    /**
     * @param {?} group
     * @return {?}
     */
    setupEvents(group) {
        if (group.initEvents) {
            return;
        }
        group.initEvents = true;
        /** @type {?} */
        const name = group.name;
        /** @type {?} */
        let emitter = (event) => {
            group.drake.on(event, (...args) => {
                this.dispatch$.next({ event, name, args });
            });
        };
        AllEvents.forEach(emitter);
    }
    /**
     * @param {?} child
     * @param {?} parent
     * @return {?}
     */
    domIndexOf(child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    }
}
DragulaService.ɵfac = function DragulaService_Factory(t) { return new (t || DragulaService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](DrakeFactory, 8)); };
DragulaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DragulaService, factory: DragulaService.ɵfac });
/** @nocollapse */
DragulaService.ctorParameters = () => [
    { type: DrakeFactory, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: DrakeFactory, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Optional
            }] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaDirective {
    /**
     * @param {?} el
     * @param {?} dragulaService
     */
    constructor(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.dragulaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    /**
     * @return {?}
     */
    get container() {
        return this.el && this.el.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes && changes.dragula) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragula;
            /** @type {?} */
            let hadPreviousValue = !!prev;
            /** @type {?} */
            let hasNewValue = !!current;
            // something -> null       =>  teardown only
            // something -> something  =>  teardown, then setup
            //      null -> something  =>  setup only
            //
            //      null -> null (precluded by fact of change being present)
            if (hadPreviousValue) {
                this.teardown(prev);
            }
            if (hasNewValue) {
                this.setup();
            }
        }
        else if (changes && changes.dragulaModel) {
            const { previousValue: prev, currentValue: current, firstChange } = changes.dragulaModel;
            const { drake } = this.group;
            if (this.dragula && drake) {
                drake.models = drake.models || [];
                /** @type {?} */
                let prevIndex = drake.models.indexOf(prev);
                if (prevIndex !== -1) {
                    // delete the previous
                    drake.models.splice(prevIndex, 1);
                    // maybe insert a new one at the same spot
                    if (!!current) {
                        drake.models.splice(prevIndex, 0, current);
                    }
                }
                else if (!!current) {
                    // no previous one to remove; just push this one.
                    drake.models.push(current);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    setup() {
        /** @type {?} */
        let checkModel = (group) => {
            if (this.dragulaModel) {
                if (group.drake.models) {
                    group.drake.models.push(this.dragulaModel);
                }
                else {
                    group.drake.models = [this.dragulaModel];
                }
            }
        };
        /** @type {?} */
        let group = this.dragulaService.find(this.dragula);
        if (!group) {
            /** @type {?} */
            let options = {};
            group = this.dragulaService.createGroup(this.dragula, options);
        }
        // ensure model and container element are pushed
        checkModel(group);
        group.drake.containers.push(this.container);
        this.subscribe(this.dragula);
        this.group = group;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    subscribe(name) {
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.subs.add(this.dragulaService
            .dropModel(name)
            .subscribe(({ source, target, sourceModel, targetModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
            else if (target === this.el.nativeElement) {
                this.dragulaModelChange.emit(targetModel);
            }
        }));
        this.subs.add(this.dragulaService
            .removeModel(name)
            .subscribe(({ source, sourceModel }) => {
            if (source === this.el.nativeElement) {
                this.dragulaModelChange.emit(sourceModel);
            }
        }));
    }
    /**
     * @param {?} groupName
     * @return {?}
     */
    teardown(groupName) {
        if (this.subs) {
            this.subs.unsubscribe();
        }
        /** @type {?} */
        const group = this.dragulaService.find(groupName);
        if (group) {
            /** @type {?} */
            const itemToRemove = group.drake.containers.indexOf(this.el.nativeElement);
            if (itemToRemove !== -1) {
                group.drake.containers.splice(itemToRemove, 1);
            }
            if (this.dragulaModel && group.drake && group.drake.models) {
                /** @type {?} */
                let modelIndex = group.drake.models.indexOf(this.dragulaModel);
                if (modelIndex !== -1) {
                    group.drake.models.splice(modelIndex, 1);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.teardown(this.dragula);
    }
}
DragulaDirective.ɵfac = function DragulaDirective_Factory(t) { return new (t || DragulaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](DragulaService)); };
DragulaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: DragulaDirective, selectors: [["", "dragula", ""]], inputs: { dragula: "dragula", dragulaModel: "dragulaModel" }, outputs: { dragulaModelChange: "dragulaModelChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
DragulaDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: DragulaService }
];
DragulaDirective.propDecorators = {
    dragula: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    dragulaModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    dragulaModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Directive,
        args: [{ selector: '[dragula]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef }, { type: DragulaService }]; }, { dragulaModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
        }], dragula: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }], dragulaModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DragulaModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DragulaModule,
            providers: [DragulaService]
        };
    }
}
DragulaModule.ɵfac = function DragulaModule_Factory(t) { return new (t || DragulaModule)(); };
DragulaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DragulaModule });
DragulaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DragulaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                exports: [DragulaDirective],
                declarations: [DragulaDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DragulaModule, { declarations: [DragulaDirective], exports: [DragulaDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const MockDrakeFactory = new DrakeFactory((containers, options) => {
    return new MockDrake(containers, options);
});
/**
 * You can use MockDrake to simulate Drake events.
 *
 * The three methods that actually do anything are `on(event, listener)`,
 * `destroy()`, and a new method, `emit()`. Use `emit()` to manually emit Drake
 * events, and if you injected MockDrake properly with MockDrakeFactory or
 * mocked the DragulaService.find() method, then you can make ng2-dragula think
 * drags and drops are happening.
 *
 * Caveats:
 *
 * 1. YOU MUST MAKE THE DOM CHANGES YOURSELF.
 * 2. REPEAT: YOU MUST MAKE THE DOM CHANGES YOURSELF.
 *    That means `source.removeChild(el)`, and `target.insertBefore(el)`.
 * 3. None of the other methods do anything.
 *    That's ok, because ng2-dragula doesn't use them.
 */
class MockDrake {
    /**
     * @param {?=} containers A list of container elements.
     * @param {?=} options These will NOT be used. At all.
     * @param {?=} models Nonstandard, but useful for testing using `new MockDrake()` directly.
     *               Note, default value is undefined, like a real Drake. Don't change that.
     */
    constructor(containers = [], options = {}, models) {
        this.containers = containers;
        this.options = options;
        this.models = models;
        /* Doesn't represent anything meaningful. */
        this.dragging = false;
        this.emitter$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    start(item) {
        this.dragging = true;
    }
    /**
     * @return {?}
     */
    end() {
        this.dragging = false;
    }
    /**
     * @param {?=} revert
     * @return {?}
     */
    cancel(revert) {
        this.dragging = false;
    }
    /**
     * @return {?}
     */
    remove() {
        this.dragging = false;
    }
    /**
     * @param {?} event
     * @param {?} callback
     * @return {?}
     */
    on(event, callback) {
        this.subs.add(this.emitter$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(({ eventType }) => eventType === event))
            .subscribe(({ args }) => {
            callback(...args);
        }));
    }
    /**
     * @return {?}
     */
    destroy() {
        this.subs.unsubscribe();
    }
    /**
     * This is the most useful method. You can use it to manually fire events that would normally
     * be fired by a real drake.
     *
     * You're likely most interested in firing `drag`, `remove` and `drop`, the three events
     * DragulaService uses to implement [dragulaModel].
     *
     * See https://github.com/bevacqua/dragula#drakeon-events for what you should emit (and in what order).
     *
     * (Note also, firing dropModel and removeModel won't work. You would have to mock DragulaService for that.)
     * @param {?} eventType
     * @param {...?} args
     * @return {?}
     */
    emit(eventType, ...args) {
        this.emitter$.next({ eventType, args });
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */





/***/ }),

/***/ 79638:
/*!*********************************************!*\
  !*** ./node_modules/ticky/ticky-browser.js ***!
  \*********************************************/
/***/ ((module) => {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ })

}]);
//# sourceMappingURL=src_app_apps_apps_module_ts.js.map
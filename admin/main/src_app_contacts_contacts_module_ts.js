"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_contacts_contacts_module_ts"],{

/***/ 74773:
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvanceTableRoutingModule": () => (/* binding */ AdvanceTableRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component */ 3630);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent
    }
];
class AdvanceTableRoutingModule {
}
AdvanceTableRoutingModule.ɵfac = function AdvanceTableRoutingModule_Factory(t) { return new (t || AdvanceTableRoutingModule)(); };
AdvanceTableRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdvanceTableRoutingModule });
AdvanceTableRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdvanceTableRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3630:
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent),
/* harmony export */   "ExampleDataSource": () => (/* binding */ ExampleDataSource)
/* harmony export */ });
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.service */ 99760);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ 89502);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ 37801);
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete/delete.component */ 60495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
























const _c0 = ["filter"];
function ContactsComponent_mat_header_cell_60_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 62)(1, "mat-checkbox", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ContactsComponent_mat_header_cell_60_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r25.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r2.selection.hasValue() && ctx_r2.isAllSelected())("indeterminate", ctx_r2.selection.hasValue() && !ctx_r2.isAllSelected())("ngClass", "tbl-checkbox");
} }
function ContactsComponent_mat_cell_61_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 62)(1, "mat-checkbox", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_61_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function ContactsComponent_mat_cell_61_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const row_r27 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return $event ? ctx_r29.selection.toggle(row_r27) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const row_r27 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r3.selection.isSelected(row_r27))("ngClass", "tbl-checkbox");
} }
function ContactsComponent_mat_header_cell_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r31.id);
} }
function ContactsComponent_mat_header_cell_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Image ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", "tbl-col-width-per-6");
} }
function ContactsComponent_mat_cell_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", row_r32.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ContactsComponent_mat_header_cell_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r33.name, " ");
} }
function ContactsComponent_mat_header_cell_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r34.mobile, " ");
} }
function ContactsComponent_mat_header_cell_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r35.email, " ");
} }
function ContactsComponent_mat_header_cell_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Birth Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, row_r36.birthDate, "MM/dd/yyyy"), "");
} }
function ContactsComponent_mat_header_cell_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r37.address, " ");
} }
function ContactsComponent_mat_header_cell_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Note ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", row_r38.note, " ");
} }
function ContactsComponent_mat_header_cell_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-header-cell", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ContactsComponent_mat_cell_88_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-cell", 70)(1, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-menu", null, 72)(6, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const row_r39 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r43.editCall(row_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Edit Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_mat_cell_88_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const row_r39 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.deleteItem(row_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Delete Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r41);
} }
function ContactsComponent_mat_header_row_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-header-row");
} }
function ContactsComponent_mat_row_90_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-row", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_mat_row_90_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48); const row_r46 = restoredCtx.$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r47.detailsCall(row_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("cursor", "pointer");
} }
const _c1 = function () { return [5, 10, 25, 100]; };
class ContactsComponent {
    constructor(httpClient, dialog, contactsService, snackBar) {
        this.httpClient = httpClient;
        this.dialog = dialog;
        this.contactsService = contactsService;
        this.snackBar = snackBar;
        this.filterToggle = false;
        this.displayedColumns = [
            'select',
            'img',
            'name',
            'email',
            'mobile',
            'birthDate',
            'address',
            'actions',
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
        this.contextMenuPosition = { x: '0px', y: '0px' };
    }
    ngOnInit() {
        this.loadData();
    }
    refresh() {
        this.loadData();
    }
    addNew() {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: this.contacts,
                action: 'add',
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // After dialog is closed we're doing frontend updates
                // For add we're just pushing a new row inside DataServicex
                this.exampleDatabase.dataChange.value.unshift(this.contactsService.getDialogData());
                this.refreshTable();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    detailsCall(row) {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: row,
                action: 'details',
            },
            direction: tempDirection,
            height: '70%',
            width: '35%',
        });
    }
    toggleStar(row) {
        console.log(row);
    }
    editCall(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent, {
            data: {
                contacts: row,
                action: 'edit',
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                // When using an edit things are little different, firstly we find record inside DataService by id
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // Then you update that record using data from dialogData (values you enetered)
                this.exampleDatabase.dataChange.value[foundIndex] =
                    this.contactsService.getDialogData();
                // And lastly refresh table
                this.refreshTable();
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    deleteItem(row) {
        this.id = row.id;
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_delete_delete_component__WEBPACK_IMPORTED_MODULE_2__.DeleteComponent, {
            data: row,
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 1) {
                const foundIndex = this.exampleDatabase.dataChange.value.findIndex((x) => x.id === this.id);
                // for delete we use splice in order to remove single object from DataService
                this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
                this.refreshTable();
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    refreshTable() {
        this.paginator._changePageSize(this.paginator.pageSize);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.renderedData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.renderedData.forEach((row) => this.selection.select(row));
    }
    removeSelectedRows() {
        const totalSelect = this.selection.selected.length;
        this.selection.selected.forEach((item) => {
            const index = this.dataSource.renderedData.findIndex((d) => d === item);
            // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
            this.exampleDatabase.dataChange.value.splice(index, 1);
            this.refreshTable();
            this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.SelectionModel(true, []);
        });
        this.showNotification('snackbar-danger', totalSelect + ' Record Delete Successfully...!!!', 'bottom', 'center');
    }
    loadData() {
        this.exampleDatabase = new _contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService(this.httpClient);
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.fromEvent)(this.filter.nativeElement, 'keyup')
            // .debounceTime(150)
            // .distinctUntilChanged()
            .subscribe(() => {
            if (!this.dataSource) {
                return;
            }
            this.dataSource.filter = this.filter.nativeElement.value;
        });
    }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar)); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.contextMenu = _t.first);
    } }, decls: 95, vars: 11, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "bcrumb-2"], ["href", "#", "onClick", "return false;"], [1, "breadcrumb-item", "active"], [1, "col-md-12"], [1, "tabbable-line"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "body"], [1, "table-responsive"], [1, "materialTableHeader"], [1, "col-8"], [1, "header-buttons-left", "ml-0"], [1, "dropdown"], [1, "dropdown", "m-l-20"], ["for", "search-input"], [1, "material-icons", "search-icon"], ["placeholder", "Search", "type", "text", "aria-label", "Search box", 1, "browser-default", "search-field"], ["filter", ""], [1, "icon-button-demo", "m-l-10", 3, "hidden"], ["mat-mini-fab", "", "color", "warn", 3, "click"], [1, "col-white"], [1, "col-4"], [1, "header-buttons"], [1, "icon-button-demo"], ["mat-mini-fab", "", "color", "primary", 3, "click"], ["matSort", "", 1, "mat-cell", 3, "dataSource"], ["table", ""], ["matColumnDef", "select"], [3, "ngClass", 4, "matHeaderCellDef"], [3, "ngClass", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-sort-header", "", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "img"], ["mat-header-cell", "", 3, "ngClass", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "table-img tbl-col-width-per-6", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "mobile"], ["matColumnDef", "email"], ["matColumnDef", "birthDate"], ["matColumnDef", "address"], ["class", "column-nowrap", 4, "matCellDef"], ["matColumnDef", "note"], ["matColumnDef", "actions"], ["class", "psl-3 tbl-col-width-per-10", 4, "matHeaderCellDef"], ["class", "psl-3 tbl-col-width-per-10", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 3, "cursor", "click", 4, "matRowDef", "matRowDefColumns"], [1, "no-results"], [3, "length", "pageIndex", "pageSize", "pageSizeOptions"], ["paginator", ""], [3, "ngClass"], [3, "checked", "indeterminate", "ngClass", "change"], [3, "checked", "ngClass", "click", "change"], ["mat-sort-header", ""], ["mat-header-cell", "", 3, "ngClass"], ["mat-cell", "", 1, "table-img", "tbl-col-width-per-6"], [3, "src"], [1, "column-nowrap"], [1, "psl-3", "tbl-col-width-per-10"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "material-icons-two-tone", "align-middle", "msr-2"], ["matRipple", "", 3, "click"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 11)(14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 3)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "div", 3)(28, "div", 21)(29, "ul", 22)(30, "li", 23)(31, "h2")(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "li", 24)(35, "label", 25)(36, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "li")(41, "div", 29)(42, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_42_listener() { return ctx.removeSelectedRows(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 32)(46, "ul", 33)(47, "li")(48, "div", 34)(49, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_49_listener() { return ctx.addNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "li")(53, "div", 34)(54, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_54_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "refresh ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "mat-table", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](59, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ContactsComponent_mat_header_cell_60_Template, 2, 4, "mat-header-cell", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ContactsComponent_mat_cell_61_Template, 2, 3, "mat-cell", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](62, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ContactsComponent_mat_header_cell_63_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ContactsComponent_mat_cell_64_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](65, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, ContactsComponent_mat_header_cell_66_Template, 2, 1, "mat-header-cell", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, ContactsComponent_mat_cell_67_Template, 2, 1, "mat-cell", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](68, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ContactsComponent_mat_header_cell_69_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ContactsComponent_mat_cell_70_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](71, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ContactsComponent_mat_header_cell_72_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, ContactsComponent_mat_cell_73_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](74, 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ContactsComponent_mat_header_cell_75_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ContactsComponent_mat_cell_76_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](77, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, ContactsComponent_mat_header_cell_78_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, ContactsComponent_mat_cell_79_Template, 3, 4, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](80, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, ContactsComponent_mat_header_cell_81_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](82, ContactsComponent_mat_cell_82_Template, 2, 1, "mat-cell", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](83, 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ContactsComponent_mat_header_cell_84_Template, 2, 0, "mat-header-cell", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, ContactsComponent_mat_cell_85_Template, 2, 1, "mat-cell", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](86, 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, ContactsComponent_mat_header_cell_87_Template, 2, 0, "mat-header-cell", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](88, ContactsComponent_mat_cell_88_Template, 16, 1, "mat-cell", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ContactsComponent_mat_header_row_89_Template, 1, 0, "mat-header-row", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ContactsComponent_mat_row_90_Template, 1, 2, "mat-row", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, " No results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "mat-paginator", 60, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.selection.hasValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.dataSource.renderedData.length == 0 ? "" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("length", ctx.dataSource.filteredData.length)("pageIndex", 0)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortHeader, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuItem, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2FzcyJ9 */"] });
class ExampleDataSource extends _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__.DataSource {
    constructor(_exampleDatabase, _paginator, _sort) {
        super();
        this._exampleDatabase = _exampleDatabase;
        this._paginator = _paginator;
        this._sort = _sort;
        this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_18__.BehaviorSubject('');
        this.filteredData = [];
        this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        this._filterChange.subscribe(() => (this._paginator.pageIndex = 0));
    }
    get filter() {
        return this._filterChange.value;
    }
    set filter(filter) {
        this._filterChange.next(filter);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        // Listen for any changes in the base data, sorting, filtering, or pagination
        const displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page,
        ];
        this._exampleDatabase.getAllContactss();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.merge)(...displayDataChanges).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.map)(() => {
            // Filter data
            this.filteredData = this._exampleDatabase.data
                .slice()
                .filter((contacts) => {
                const searchStr = (contacts.name +
                    contacts.birthDate +
                    contacts.email +
                    contacts.mobile +
                    contacts.address).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
            // Sort filtered data
            const sortedData = this.sortData(this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
            this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
            return this.renderedData;
        }));
    }
    disconnect() { }
    /** Returns a sorted copy of the database data. */
    sortData(data) {
        if (!this._sort.active || this._sort.direction === '') {
            return data;
        }
        return data.sort((a, b) => {
            let propertyA = '';
            let propertyB = '';
            switch (this._sort.active) {
                case 'id':
                    [propertyA, propertyB] = [a.id, b.id];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.email, b.email];
                    break;
                case 'birthDate':
                    [propertyA, propertyB] = [a.birthDate, b.birthDate];
                    break;
                case 'address':
                    [propertyA, propertyB] = [a.address, b.address];
                    break;
            }
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return ((valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1));
        });
    }
}


/***/ }),

/***/ 25248:
/*!********************************************!*\
  !*** ./src/app/contacts/contacts.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Contacts": () => (/* binding */ Contacts)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);

class Contacts {
    constructor(contacts) {
        {
            this.id = contacts.id || this.getRandomID();
            this.img = contacts.avatar || 'assets/images/user/usrbig1.jpg';
            this.name = contacts.name || '';
            this.email = contacts.email || '';
            this.birthDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.address = contacts.address || '';
            this.mobile = contacts.mobile || '';
            this.note = contacts.note || '';
        }
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
}


/***/ }),

/***/ 6808:
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsModule": () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 74773);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component */ 3630);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ 37801);
/* harmony import */ var _delete_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delete/delete.component */ 60495);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);























class ContactsModule {
}
ContactsModule.ɵfac = function ContactsModule_Factory(t) { return new (t || ContactsModule)(); };
ContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ContactsModule, { declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent, _form_form_component__WEBPACK_IMPORTED_MODULE_2__.FormComponent, _delete_delete_component__WEBPACK_IMPORTED_MODULE_3__.DeleteComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdvanceTableRoutingModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginatorModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuModule] }); })();


/***/ }),

/***/ 99760:
/*!**********************************************!*\
  !*** ./src/app/contacts/contacts.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsService": () => (/* binding */ ContactsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ContactsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/contacts.json';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllContactss() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addContacts(contacts) {
        this.dialogData = contacts;
    }
    updateContacts(contacts) {
        this.dialogData = contacts;
    }
    deleteContacts(id) {
        console.log(id);
    }
}
ContactsService.ɵfac = function ContactsService_Factory(t) { return new (t || ContactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ContactsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactsService, factory: ContactsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60495:
/*!*****************************************************!*\
  !*** ./src/app/contacts/delete/delete.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteComponent": () => (/* binding */ DeleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts.service */ 99760);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);





class DeleteComponent {
    constructor(dialogRef, data, contactsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmDelete() {
        this.contactsService.deleteContacts(this.data.id);
    }
}
DeleteComponent.ɵfac = function DeleteComponent_Factory(t) { return new (t || DeleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_0__.ContactsService)); };
DeleteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DeleteComponent, selectors: [["app-delete"]], decls: 25, vars: 4, consts: [[1, "container"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "clearfix"], [1, "fw-bold"], ["mat-dialog-actions", "", 1, "mb-1"], ["mat-flat-button", "", "color", "warn", 3, "mat-dialog-close", "click"], ["mat-flat-button", "", "tabindex", "-1", 3, "click"]], template: function DeleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Are you sure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2)(4, "ul", 3)(5, "li")(6, "p")(7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li")(11, "p")(12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "p")(17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5)(21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_21_listener() { return ctx.confirmDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DeleteComponent_Template_button_click_23_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.data.mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", 1);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 37801:
/*!*************************************************!*\
  !*** ./src/app/contacts/form/form.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _contacts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts.model */ 25248);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contacts.service */ 99760);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);















function FormComponent_div_1_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Mobile is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_mat_error_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please select date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FormComponent_div_1_Template_form_ngSubmit_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.submit; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "mat-form-field", 15)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "face");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, FormComponent_div_1_mat_error_21_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "mat-form-field", 15)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, FormComponent_div_1_mat_error_29_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13)(31, "div", 14)(32, "mat-form-field", 15)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "smartphone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, FormComponent_div_1_mat_error_38_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 14)(40, "mat-form-field", 15)(41, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Birth date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 21)(44, "mat-datepicker-toggle", 22)(45, "mat-datepicker", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, FormComponent_div_1_mat_error_47_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 13)(49, "div", 24)(50, "mat-form-field", 15)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 13)(55, "div", 24)(56, "mat-form-field", 15)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "textarea", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 13)(61, "div", 27)(62, "div", 28)(63, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.confirmAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormComponent_div_1_Template_button_click_65_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.onNoClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](46);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.dialogTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.contactsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("name").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("email").hasError("required") || ctx_r0.contactsForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("mobile").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.contactsForm.get("birthDate").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx_r0.submit)("disabled", !ctx_r0.contactsForm.valid)("mat-dialog-close", 1);
} }
function FormComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 32)(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 34)(8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormComponent_div_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.dialogRef.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "mat-card-content")(17, "div", 37)(18, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 37)(23, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "phonelink_ring");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 37)(28, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "cake");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 37)(34, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 37)(39, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "note");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.contacts.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.contacts.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.mobile, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](32, 7, ctx_r1.contacts.birthDate, "MMMM d, yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.contacts.note, " ");
} }
class FormComponent {
    constructor(dialogRef, data, contactsService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsService = contactsService;
        this.fb = fb;
        this.isDetails = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.isDetails = false;
            this.dialogTitle = data.contacts.name;
            this.contacts = data.contacts;
            this.contactsForm = this.createContactForm();
        }
        else if (this.action === 'details') {
            this.contacts = data.contacts;
            this.isDetails = true;
        }
        else {
            this.isDetails = false;
            this.dialogTitle = 'New Contacts';
            this.contacts = new _contacts_model__WEBPACK_IMPORTED_MODULE_0__.Contacts({});
            this.contactsForm = this.createContactForm();
        }
    }
    getErrorMessage() {
        return this.formControl.hasError('required')
            ? 'Required field'
            : this.formControl.hasError('email')
                ? 'Not a valid email'
                : '';
    }
    createContactForm() {
        return this.fb.group({
            id: [this.contacts.id],
            img: [this.contacts.img],
            name: [this.contacts.name],
            email: [
                this.contacts.email,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]
            ],
            birthDate: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.formatDate)(this.contacts.birthDate, 'yyyy-MM-dd', 'en'),
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            address: [this.contacts.address],
            mobile: [this.contacts.mobile],
            note: [this.contacts.note]
        });
    }
    submit() {
        // emppty stuff
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.contactsService.addContacts(this.contactsForm.getRawValue());
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_contacts_service__WEBPACK_IMPORTED_MODULE_1__.ContactsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 3, vars: 2, consts: [[1, "addContainer"], ["class", "contact-form", 4, "ngIf"], ["class", "contact-details", 4, "ngIf"], [1, "contact-form"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], ["alt", "avatar", 3, "src"], [1, "modal-about"], [1, "fw-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "name", "required", ""], ["matSuffix", "", 1, "material-icons-two-tone", "color-icon"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "required", ""], ["matInput", "", "formControlName", "mobile", "type", "number"], ["matInput", "", "formControlName", "birthDate", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "address"], ["matInput", "", "formControlName", "note"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-2"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "mat-dialog-close", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "contact-details"], [1, "modal-about", "contact-header"], [1, "contact-details-img"], [1, "contact-details-heading", "ml-4"], [1, "contact-details-name", "mb-2"], [1, "badge", "col-green"], [1, "contact-details-field"], [1, "material-icons-two-tone", "color-icon"], [1, "contact-detail-info"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FormComponent_div_1_Template, 67, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FormComponent_div_2_Template, 43, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepicker, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_contacts_contacts_module_ts.js.map
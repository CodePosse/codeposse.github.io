"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_calendar_calendar_module_ts"],{

/***/ 19987:
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarRoutingModule": () => (/* binding */ CalendarRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.component */ 86304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_0__.CalendarComponent
    }
];
class CalendarRoutingModule {
}
CalendarRoutingModule.ɵfac = function CalendarRoutingModule_Factory(t) { return new (t || CalendarRoutingModule)(); };
CalendarRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CalendarRoutingModule });
CalendarRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CalendarRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 86304:
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.model */ 89169);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 82758);
/* harmony import */ var _events_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events-util */ 46132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar.service */ 62374);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);









const _c0 = ["calendar"];
function CalendarComponent_li_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CalendarComponent_li_28_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const filter_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.changeCategory($event, filter_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const filter_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", filter_r1.checked)("value", filter_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", filter_r1.value, " ");
} }
class CalendarComponent {
    constructor(fb, dialog, calendarService, snackBar) {
        this.fb = fb;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.snackBar = snackBar;
        this.filterOptions = 'All';
        this.filterItems = [
            'work',
            'personal',
            'important',
            'travel',
            'friends',
        ];
        this.filters = [
            { name: 'work', value: 'Work', checked: true },
            { name: 'personal', value: 'Personal', checked: true },
            { name: 'important', value: 'Important', checked: true },
            { name: 'travel', value: 'Travel', checked: true },
            { name: 'friends', value: 'Friends', checked: true },
        ];
        this.calendarOptions = {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
            },
            initialView: 'dayGridMonth',
            weekends: true,
            editable: true,
            selectable: true,
            selectMirror: true,
            dayMaxEvents: true,
            select: this.handleDateSelect.bind(this),
            eventClick: this.handleEventClick.bind(this),
            eventsSet: this.handleEvents.bind(this),
        };
        this.dialogTitle = 'Add New Event';
        this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
        this.addCusForm = this.createCalendarForm(this.calendar);
    }
    ngOnInit() {
        this.calendarEvents = _events_util__WEBPACK_IMPORTED_MODULE_2__.INITIAL_EVENTS;
        this.tempEvents = this.calendarEvents;
        this.calendarOptions.initialEvents = this.calendarEvents;
    }
    handleDateSelect(selectInfo) {
        this.addNewEvent();
    }
    addNewEvent() {
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                calendar: this.calendar,
                action: 'add',
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents = this.calendarEvents.concat({
                    // add new event data. must create new array
                    id: this.calendarData.id,
                    title: this.calendarData.title,
                    start: this.calendarData.startDate,
                    end: this.calendarData.endDate,
                    className: this.getClassNameValue(this.calendarData.category),
                    groupId: this.calendarData.category,
                    details: this.calendarData.details,
                });
                this.calendarOptions.events = this.calendarEvents;
                this.addCusForm.reset();
                this.showNotification('snackbar-success', 'Add Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    changeCategory(event, filter) {
        if (event.checked) {
            this.filterItems.push(filter.name);
        }
        else {
            this.filterItems.splice(this.filterItems.indexOf(filter.name), 1);
        }
        this.filterEvent(this.filterItems);
    }
    filterEvent(element) {
        const list = this.calendarEvents.filter((x) => element.map((y) => y).includes(x.groupId));
        this.calendarOptions.events = list;
    }
    handleEventClick(clickInfo) {
        this.eventClick(clickInfo);
    }
    eventClick(row) {
        const calendarData = {
            id: row.event.id,
            title: row.event.title,
            category: row.event.groupId,
            startDate: row.event.start,
            endDate: row.event.end,
            details: row.event.extendedProps.details,
        };
        let tempDirection;
        if (localStorage.getItem('isRtl') === 'true') {
            tempDirection = 'rtl';
        }
        else {
            tempDirection = 'ltr';
        }
        const dialogRef = this.dialog.open(_dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_1__.FormDialogComponent, {
            data: {
                calendar: calendarData,
                action: 'edit',
            },
            direction: tempDirection,
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'submit') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        this.editEvent(index, this.calendarData);
                    }
                }, this);
                this.showNotification('black', 'Edit Record Successfully...!!!', 'bottom', 'center');
                this.addCusForm.reset();
            }
            else if (result === 'delete') {
                this.calendarData = this.calendarService.getDialogData();
                this.calendarEvents.forEach(function (element, index) {
                    if (this.calendarData.id === element.id) {
                        row.event.remove();
                    }
                }, this);
                this.showNotification('snackbar-danger', 'Delete Record Successfully...!!!', 'bottom', 'center');
            }
        });
    }
    editEvent(eventIndex, calendarData) {
        const calendarEvents = this.calendarEvents.slice();
        const singleEvent = Object.assign({}, calendarEvents[eventIndex]);
        singleEvent.id = calendarData.id;
        singleEvent.title = calendarData.title;
        singleEvent.start = calendarData.startDate;
        singleEvent.end = calendarData.endDate;
        singleEvent.className = this.getClassNameValue(calendarData.category);
        singleEvent.groupId = calendarData.category;
        singleEvent.details = calendarData.details;
        calendarEvents[eventIndex] = singleEvent;
        this.calendarEvents = calendarEvents; // reassign the array
        this.calendarOptions.events = calendarEvents;
    }
    handleEvents(events) {
        // this.currentEvents = events;
    }
    createCalendarForm(calendar) {
        return this.fb.group({
            id: [calendar.id],
            title: [
                calendar.title,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
            category: [calendar.category],
            startDate: [calendar.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            endDate: [calendar.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            details: [
                calendar.details,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
            ],
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
    getClassNameValue(category) {
        let className;
        if (category === 'work')
            className = 'fc-event-success';
        else if (category === 'personal')
            className = 'fc-event-warning';
        else if (category === 'important')
            className = 'fc-event-primary';
        else if (category === 'travel')
            className = 'fc-event-danger';
        else if (category === 'friends')
            className = 'fc-event-info';
        return className;
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_3__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["app-calendar"]], viewQuery: function CalendarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
    } }, decls: 32, vars: 2, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["href", "#", "onClick", "return false;"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12", "col-sm-12"], [1, "card"], [1, "card-body"], [1, "col-md-2", "col-sm-12", "p-l-30"], [1, "m-b-25"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-container"], [4, "ngFor", "ngForOf"], [1, "col-md-10", "col-sm-12"], [1, "panel-body"], [3, "options"], ["color", "primary", 3, "checked", "value", "change"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 3)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 3)(20, "div", 15)(21, "div", 16)(22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalendarComponent_Template_button_click_22_listener() { return ctx.addNewEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Add Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "My Calendars");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18)(27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, CalendarComponent_li_28_Template, 3, 3, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20)(30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "full-calendar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", ctx.calendarOptions);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 89169:
/*!********************************************!*\
  !*** ./src/app/calendar/calendar.model.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calendar": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 36362);

class Calendar {
    constructor(calendar) {
        {
            this.id = calendar.id || this.getRandomID();
            this.title = calendar.title || '';
            this.category = calendar.category || '';
            this.startDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.endDate = (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '';
            this.details = calendar.details || '';
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

/***/ 979:
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarsModule": () => (/* binding */ CalendarsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-routing.module */ 19987);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/angular */ 35717);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-pick-datetime */ 37526);
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ 86304);
/* harmony import */ var _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/form-dialog/form-dialog.component */ 82758);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar.service */ 62374);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/timegrid */ 69901);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/list */ 80296);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fullcalendar/interaction */ 85194);


























_fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule.registerPlugins([
    _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_5__["default"],
    _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_6__["default"],
    _fullcalendar_list__WEBPACK_IMPORTED_MODULE_7__["default"],
    _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_8__["default"],
]);
let CalendarsModule = class CalendarsModule {
};
CalendarsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _calendar_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalendarRoutingModule,
            _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__.FullCalendarModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlDateTimeModule,
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_1__.OwlNativeDateTimeModule,
        ],
        declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_2__.CalendarComponent, _dialogs_form_dialog_form_dialog_component__WEBPACK_IMPORTED_MODULE_3__.FormDialogComponent],
        providers: [_calendar_service__WEBPACK_IMPORTED_MODULE_4__.CalendarService],
    })
], CalendarsModule);



/***/ }),

/***/ 62374:
/*!**********************************************!*\
  !*** ./src/app/calendar/calendar.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarService": () => (/* binding */ CalendarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = "assets/data/calendar.json";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
        };
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    getAllCalendars() {
        return this.httpClient
            .get(this.API_URL)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorHandler));
    }
    addUpdateCalendar(calendar) {
        this.dialogData = calendar;
    }
    deleteCalendar(calendar) {
        this.dialogData = calendar;
    }
    errorHandler(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
}
CalendarService.ɵfac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
CalendarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CalendarService, factory: CalendarService.ɵfac });


/***/ }),

/***/ 82758:
/*!***********************************************************************!*\
  !*** ./src/app/calendar/dialogs/form-dialog/form-dialog.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialogComponent": () => (/* binding */ FormDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _calendar_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../calendar.model */ 89169);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../calendar.service */ 62374);







function FormDialogComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_div_69_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.deleteEvent(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class FormDialogComponent {
    constructor(dialogRef, data, calendarService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.calendarService = calendarService;
        this.fb = fb;
        this.showDeleteBtn = false;
        this.formControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required
            // Validators.email,
        ]);
        // Set the defaults
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = data.calendar.title;
            this.calendar = data.calendar;
            this.showDeleteBtn = true;
        }
        else {
            this.dialogTitle = 'New Event';
            this.calendar = new _calendar_model__WEBPACK_IMPORTED_MODULE_0__.Calendar({});
            this.showDeleteBtn = false;
        }
        this.calendarForm = this.createContactForm();
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
            id: [this.calendar.id],
            title: [
                this.calendar.title,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            category: [this.calendar.category],
            startDate: [this.calendar.startDate,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            endDate: [this.calendar.endDate,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
            ],
            details: [
                this.calendar.details
            ],
        });
    }
    submit() {
        // emppty stuff
    }
    deleteEvent() {
        this.calendarService.deleteCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('delete');
    }
    onNoClick() {
        this.dialogRef.close();
    }
    confirmAdd() {
        this.calendarService.addUpdateCalendar(this.calendarForm.getRawValue());
        this.dialogRef.close('submit');
    }
}
FormDialogComponent.ɵfac = function FormDialogComponent_Factory(t) { return new (t || FormDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_calendar_service__WEBPACK_IMPORTED_MODULE_1__.CalendarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
FormDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FormDialogComponent, selectors: [["app-form-dialog"]], decls: 70, vars: 16, consts: [[1, "addContainer"], [1, "modalHeader"], [1, "editRowModal"], [1, "modalHeader", "clearfix"], [1, "modal-about"], [1, "fw-bold", "p-t-5", "p-l-10", "font-17"], ["mat-icon-button", "", "aria-label", "Close dialog", 3, "click"], ["mat-dialog-content", ""], [1, "register-form", "m-4", 3, "formGroup"], [1, "row"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], ["appearance", "outline", 1, "example-full-width", "mb-3"], ["matInput", "", "formControlName", "title", "required", ""], ["matSuffix", ""], ["formControlName", "category", "required", ""], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12"], ["matInput", "", "formControlName", "startDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["matSuffix", "", 1, "date-icon", 3, "owlDateTimeTrigger"], ["startDate", ""], ["matInput", "", "formControlName", "endDate", "placeholder", "Choose a date", "required", "", 3, "owlDateTimeTrigger", "owlDateTime"], ["endDate", ""], ["matInput", "", "formControlName", "details"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], [1, "example-button-row"], ["mat-raised-button", "", "color", "primary", 3, "type", "disabled", "click"], ["mat-raised-button", "", "color", "warn", "tabindex", "-1", 3, "click"], [1, "col-xl-2", "col-lg-2", "col-md-12", "col-sm-12"], ["class", "example-button-row", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "", "color", "warn", 3, "click"], [1, "font-20"]], template: function FormDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "form", 8)(12, "div", 9)(13, "div", 10)(14, "mat-form-field", 11)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9)(21, "div", 10)(22, "mat-form-field", 11)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-select", 14)(26, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Personal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Important ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Friends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9)(37, "div", 16)(38, "mat-form-field", 11)(39, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "owl-date-time", null, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16)(47, "mat-form-field", 11)(48, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "End date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "owl-date-time", null, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 9)(56, "div", 10)(57, "mat-form-field", 11)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 9)(62, "div", 23)(63, "div", 24)(64, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_64_listener() { return ctx.confirmAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialogComponent_Template_button_click_66_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, FormDialogComponent_div_69_Template, 4, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](45);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.dialogTitle, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.calendarForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "important");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("owlDateTimeTrigger", _r0)("owlDateTime", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("owlDateTimeTrigger", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("owlDateTimeTrigger", _r1)("owlDateTime", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("owlDateTimeTrigger", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", ctx.submit)("disabled", !ctx.calendarForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showDeleteBtn);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWRpYWxvZy5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 46132:
/*!*****************************************!*\
  !*** ./src/app/calendar/events-util.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_EVENTS": () => (/* binding */ INITIAL_EVENTS)
/* harmony export */ });
const d = new Date();
const day = d.getDate();
const month = d.getMonth();
const year = d.getFullYear();
const INITIAL_EVENTS = [
    {
        id: "event1",
        title: "All Day Event",
        start: new Date(year, month, 1, 0, 0),
        end: new Date(year, month, 1, 23, 59),
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event2",
        title: "Break",
        start: new Date(year, month, day + 28, 16, 0),
        end: new Date(year, month, day + 29, 20, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
    },
    {
        id: "event3",
        title: "Shopping",
        start: new Date(year, month, day + 4, 12, 0),
        end: new Date(year, month, day + 4, 20, 0),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. ",
    },
    {
        id: "event4",
        title: "Meeting",
        start: new Date(year, month, day + 14, 10, 30),
        end: new Date(year, month, day + 16, 20, 0),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event5",
        title: "Lunch",
        start: new Date(year, month, day, 11, 0),
        end: new Date(year, month, day, 14, 0),
        allDay: false,
        className: "fc-event-primary",
        groupId: "important",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event6",
        title: "Meeting",
        start: new Date(year, month, day + 2, 12, 30),
        end: new Date(year, month, day + 2, 14, 30),
        allDay: false,
        className: "fc-event-success",
        groupId: "work",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event7",
        title: "Birthday Party",
        start: new Date(year, month, day + 17, 19, 0),
        end: new Date(year, month, day + 17, 19, 30),
        allDay: false,
        className: "fc-event-warning",
        groupId: "personal",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event8",
        title: "Go to Delhi",
        start: new Date(year, month, day + -5, 10, 0),
        end: new Date(year, month, day + -4, 10, 30),
        allDay: false,
        className: "fc-event-danger",
        groupId: "travel",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event9",
        title: "Get To Gather",
        start: new Date(year, month, day + 6, 10, 0),
        end: new Date(year, month, day + 7, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
    {
        id: "event10",
        title: "Collage Party",
        start: new Date(year, month, day + 20, 10, 0),
        end: new Date(year, month, day + 20, 10, 30),
        allDay: false,
        className: "fc-event-info",
        groupId: "friends",
        details: "Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see.",
    },
];


/***/ }),

/***/ 35717:
/*!******************************************************************************************!*\
  !*** ./node_modules/@fullcalendar/angular/__ivy_ngcc__/fesm2015/fullcalendar-angular.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.BaseComponent),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.BgEvent),
/* harmony export */   "Calendar": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar),
/* harmony export */   "CalendarApi": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CalendarApi),
/* harmony export */   "CalendarContent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ContentHook": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DateComponent),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController),
/* harmony export */   "Emitter": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Emitter),
/* harmony export */   "EventApi": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.EventApi),
/* harmony export */   "EventRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.EventRoot),
/* harmony export */   "EventSourceApi": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Interaction": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.NowTimer),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.PositionCache),
/* harmony export */   "RefMap": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.RefMap),
/* harmony export */   "RenderHook": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.RenderHook),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ScrollController),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ScrollResponder),
/* harmony export */   "Scroller": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Scroller),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Slicer),
/* harmony export */   "Splitter": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Splitter),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.StandardEvent),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.TableDateCell),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.TableDowCell),
/* harmony export */   "Theme": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "ViewApi": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ViewApi),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ViewContextType),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController),
/* harmony export */   "addDays": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.addDays),
/* harmony export */   "addDurations": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.addDurations),
/* harmony export */   "addMs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.addMs),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.addWeeks),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.applyStyle),
/* harmony export */   "applyStyleProp": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.collectFromHash),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.compareNumbers),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect),
/* harmony export */   "computeRect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeRect),
/* harmony export */   "computeSegDraggable": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.computeVisibleDayRange),
/* harmony export */   "config": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.config),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs),
/* harmony export */   "createContext": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createDuration": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createEventInstance),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createEventUi),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createFormatter),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "diffDates": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffDates),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffDayAndTime),
/* harmony export */   "diffDays": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffDays),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffPoints),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.disableCursor),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.elementClosest),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.elementMatches),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.filterHash),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.findDirectChildren),
/* harmony export */   "findElements": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.findElements),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.flexibleCompare),
/* harmony export */   "flushToDom": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.flushToDom),
/* harmony export */   "formatDate": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getClippingParents),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getElRoot),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.globalLocales),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries),
/* harmony export */   "guid": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.guid),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.hasShrinkWidth),
/* harmony export */   "identity": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.intersectRanges),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.intersectRects),
/* harmony export */   "intersectSpans": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual),
/* harmony export */   "isInt": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isInt),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isPropsValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.isValidDate),
/* harmony export */   "joinSpans": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.joinSpans),
/* harmony export */   "listenBySelector": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.listenBySelector),
/* harmony export */   "mapHash": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.mapHash),
/* harmony export */   "memoize": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration),
/* harmony export */   "padStart": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.padStart),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.parseMarker),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.preventDefault),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.refineEventDef),
/* harmony export */   "refineProps": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.refineProps),
/* harmony export */   "removeElement": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.removeElement),
/* harmony export */   "removeExact": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.renderChunkContent),
/* harmony export */   "renderFill": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim),
/* harmony export */   "requestJson": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.setElSeg),
/* harmony export */   "setRef": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.setRef),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.startOfDay),
/* harmony export */   "translateRect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.translateRect),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.unpromisify),
/* harmony export */   "version": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.version),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations),
/* harmony export */   "FullCalendarComponent": () => (/* binding */ FullCalendarComponent),
/* harmony export */   "FullCalendarModule": () => (/* binding */ FullCalendarModule)
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ 78535);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/core */ 22700);






const hasOwnProperty = Object.prototype.hasOwnProperty;
/*
Really simple clone utility. Only copies plain arrays, objects, and Dates. Transfers everything else as-is.
Wanted to use a third-party lib, but none did exactly this.
*/
function deepCopy(input) {
    if (Array.isArray(input)) {
        return input.map(deepCopy);
    }
    else if (input instanceof Date) {
        return new Date(input.valueOf());
    }
    else if (typeof input === 'object' && input) { // non-null object
        return mapHash(input, deepCopy);
    }
    else { // everything else (null, function, etc)
        return input;
    }
}
function shallowCopy(val) {
    if (typeof val === 'object') {
        if (Array.isArray(val)) {
            val = Array.prototype.slice.call(val);
        }
        else if (val) { // non-null
            val = Object.assign({}, val);
        }
    }
    return val;
}
function mapHash(input, func) {
    const output = {};
    for (const key in input) {
        if (hasOwnProperty.call(input, key)) {
            output[key] = func(input[key], key);
        }
    }
    return output;
}

const OPTION_IS_DEEP = {
    headerToolbar: true,
    footerToolbar: true,
    events: true,
    eventSources: true,
    resources: true
};

class FullCalendarComponent {
    constructor(element) {
        this.element = element;
        this.optionSnapshot = {}; // for diffing only
    }
    ngAfterViewInit() {
        const { deepChangeDetection } = this;
        const options = this.options || {};
        // initialize snapshot
        this.optionSnapshot = mapHash(options, (optionVal, optionName) => ((deepChangeDetection && OPTION_IS_DEEP[optionName])
            ? deepCopy(optionVal)
            : optionVal));
        this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.Calendar(this.element.nativeElement, options);
        this.calendar.render();
    }
    /*
    allows us to manually detect complex input changes, internal mutations to certain options.
    called before ngOnChanges. called much more often than ngOnChanges.
    */
    ngDoCheck() {
        if (this.calendar) { // not the initial render
            const { deepChangeDetection, optionSnapshot } = this;
            const newOptions = this.options || {};
            const newProcessedOptions = {};
            let anyChanges = false;
            // detect adds and updates (and update snapshot)
            for (const optionName in newOptions) {
                if (newOptions.hasOwnProperty(optionName)) {
                    let optionVal = newOptions[optionName];
                    if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
                        if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default()(optionSnapshot[optionName], optionVal)) {
                            optionSnapshot[optionName] = deepCopy(optionVal);
                            anyChanges = true;
                            // trick FC into knowing about a nested change.
                            // TODO: future versions won't need this.
                            // can't use the previously-made deep copy because it blows away prototype-association.
                            optionVal = shallowCopy(optionVal);
                        }
                    }
                    else {
                        if (optionSnapshot[optionName] !== optionVal) {
                            optionSnapshot[optionName] = optionVal;
                            anyChanges = true;
                        }
                    }
                    newProcessedOptions[optionName] = optionVal;
                }
            }
            const oldOptionNames = Object.keys(optionSnapshot);
            // detect removals (and update snapshot)
            for (const optionName of oldOptionNames) {
                if (!(optionName in newOptions)) { // doesn't exist in new options?
                    delete optionSnapshot[optionName];
                    anyChanges = true;
                }
            }
            if (anyChanges) {
                this.calendar.pauseRendering();
                this.calendar.resetOptions(newProcessedOptions);
            }
        }
    }
    ngAfterContentChecked() {
        if (this.calendar) { // too defensive?
            this.calendar.resumeRendering();
        }
    }
    ngOnDestroy() {
        if (this.calendar) { // too defensive?
            this.calendar.destroy();
            this.calendar = null;
        }
    }
    getApi() {
        return this.calendar;
    }
}
FullCalendarComponent.ɵfac = function FullCalendarComponent_Factory(t) { return new (t || FullCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
FullCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullCalendarComponent, selectors: [["full-calendar"]], inputs: { options: "options", deepChangeDetection: "deepChangeDetection" }, decls: 0, vars: 0, template: function FullCalendarComponent_Template(rf, ctx) { }, styles: ["@charset \"UTF-8\";.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{vertical-align:top;padding:0}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");font-weight:400;font-style:normal}.fc-icon{display:inline-block;width:1em;height:1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:fcicons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;overflow:visible;text-transform:none;margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{padding:0;border-style:none}.fc .fc-button{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.4em .65em;font-size:1em;line-height:1.5;border-radius:.25em}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{outline:0;box-shadow:0 0 0 .2rem rgba(44,62,80,.25)}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#2c3e50;background-color:var(--fc-button-bg-color,#2c3e50);border-color:#2c3e50;border-color:var(--fc-button-border-color,#2c3e50)}.fc .fc-button-primary:hover{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#1e2b37;background-color:var(--fc-button-hover-bg-color,#1e2b37);border-color:#1a252f;border-color:var(--fc-button-hover-border-color,#1a252f)}.fc .fc-button-primary:disabled{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#2c3e50;background-color:var(--fc-button-bg-color,#2c3e50);border-color:#2c3e50;border-color:var(--fc-button-border-color,#2c3e50)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#1a252f;background-color:var(--fc-button-active-bg-color,#1a252f);border-color:#151e27;border-color:var(--fc-button-active-border-color,#151e27)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{vertical-align:middle;font-size:1.5em}.fc .fc-button-group{position:relative;display:inline-flex;vertical-align:middle}.fc .fc-button-group>.fc-button{position:relative;flex:1 1 auto}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-top-left-radius:0;border-bottom-left-radius:0}.fc .fc-toolbar{display:flex;justify-content:space-between;align-items:center}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{position:absolute;top:0;right:0;left:0;bottom:0}.fc .fc-scroller-harness{position:relative;overflow:hidden;direction:ltr}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{width:100%;table-layout:fixed}.fc .fc-scrollgrid table{border-top-style:hidden;border-left-style:hidden;border-right-style:hidden}.fc .fc-scrollgrid{border-collapse:separate;border-right-width:0;border-bottom-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section>td,.fc .fc-scrollgrid-section table{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-top-width:0;border-left-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:#fff;background:var(--fc-page-bg-color,#fff);position:-webkit-sticky;position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:-webkit-sticky;position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{position:absolute;top:0;left:0;right:0;bottom:0}.fc .fc-non-business{background:hsla(0,0%,84.3%,.3);background:var(--fc-non-business-color,hsla(0,0%,84.3%,.3))}.fc .fc-bg-event{background:#8fdf82;background:var(--fc-bg-event-color,#8fdf82);opacity:.3;opacity:var(--fc-bg-event-opacity,.3)}.fc .fc-bg-event .fc-event-title{margin:.5em;font-size:.85em;font-size:var(--fc-small-font-size,.85em);font-style:italic}.fc .fc-highlight{background:rgba(188,232,241,.3);background:var(--fc-highlight-color,rgba(188,232,241,.3))}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{border-radius:4px;border-radius:calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);border-width:1px;width:8px;width:var(--fc-event-resizer-dot-total-width,8px);height:8px;height:var(--fc-event-resizer-dot-total-width,8px);border:var(--fc-event-resizer-dot-border-width,1px) solid;border-color:inherit;background:#fff;background:var(--fc-page-bg-color,#fff)}.fc-event-selected .fc-event-resizer:before{content:\"\";position:absolute;top:-20px;left:-20px;right:-20px;bottom:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{content:\"\";position:absolute;z-index:3;top:0;left:0;right:0;bottom:0}.fc-event-selected:after,.fc-event:focus:after{content:\"\";background:rgba(0,0,0,.25);background:var(--fc-event-selected-overlay-color,rgba(0,0,0,.25));position:absolute;z-index:1;top:-1px;left:-1px;right:-1px;bottom:-1px}.fc-h-event{display:block;border:1px solid #3788d8;border:1px solid var(--fc-event-border-color,#3788d8);background-color:#3788d8;background-color:var(--fc-event-bg-color,#3788d8)}.fc-h-event .fc-event-main{color:#fff;color:var(--fc-event-text-color,#fff)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;vertical-align:top;left:0;right:0;max-width:100%;overflow:hidden}.fc-h-event.fc-event-selected:before{top:-10px;bottom:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{top:0;bottom:0;width:8px;width:var(--fc-event-resizer-thickness,8px)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:-4px;left:calc(-.5 * var(--fc-event-resizer-thickness, 8px))}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:-4px;right:calc(-.5 * var(--fc-event-resizer-thickness, 8px))}.fc-h-event.fc-event-selected .fc-event-resizer{top:50%;margin-top:-4px;margin-top:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:-4px;left:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:-4px;right:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc .fc-popover{position:absolute;z-index:9999;box-shadow:0 2px 6px rgba(0,0,0,.15)}.fc .fc-popover-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;opacity:.65;font-size:1.1em}.fc-theme-standard .fc-popover{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd);background:#fff;background:var(--fc-page-bg-color,#fff)}.fc-theme-standard .fc-popover-header{background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}:root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{content:\"\";clear:both;display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:rgba(255,220,40,.15);background-color:var(--fc-today-bg-color,rgba(255,220,40,.15))}.fc .fc-daygrid-day-frame{position:relative;min-height:100%}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{position:relative;z-index:4;padding:4px}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{position:absolute;left:0;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{position:relative;min-height:2em}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{position:absolute;top:0;left:0;right:0}.fc .fc-daygrid-bg-harness{position:absolute;top:0;bottom:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{z-index:6;margin-top:1px}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{content:\"\";clear:both;display:table}.fc .fc-daygrid-more-link{position:relative;z-index:4;cursor:pointer}.fc .fc-daygrid-week-number{position:absolute;z-index:5;top:0;padding:2px;min-width:1.5em;text-align:center;background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3));color:grey;color:var(--fc-neutral-text-color,grey)}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{left:0;border-radius:0 0 3px 0}.fc-direction-rtl .fc-daygrid-week-number{right:0;border-radius:0 0 0 3px}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{position:relative;white-space:nowrap;border-radius:3px;font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{display:flex;align-items:center;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;min-width:0;overflow:hidden;font-weight:700}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{top:-10px;bottom:-10px}.fc-daygrid-event-dot{margin:0 4px;box-sizing:content-box;width:0;height:0;border:4px solid #3788d8;border:calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color,#3788d8);border-radius:4px;border-radius:calc(var(--fc-daygrid-event-dot-width, 8px) / 2)}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}.fc-v-event{display:block;border:1px solid #3788d8;border:1px solid var(--fc-event-border-color,#3788d8);background-color:#3788d8;background-color:var(--fc-event-bg-color,#3788d8)}.fc-v-event .fc-event-main{color:#fff;color:var(--fc-event-text-color,#fff);height:100%}.fc-v-event .fc-event-main-frame{height:100%;display:flex;flex-direction:column}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{top:0;bottom:0;max-height:100%;overflow:hidden}.fc-v-event:not(.fc-event-start){border-top-width:0;border-top-left-radius:0;border-top-right-radius:0}.fc-v-event:not(.fc-event-end){border-bottom-width:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:8px;height:var(--fc-event-resizer-thickness,8px);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:-4px;top:calc(var(--fc-event-resizer-thickness, 8px) / -2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:-4px;bottom:calc(var(--fc-event-resizer-thickness, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:-4px;margin-left:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:-4px;top:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:-4px;bottom:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{position:relative;z-index:1;min-height:100%}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{height:1.5em;border-bottom:0}.fc .fc-timegrid-slot:empty:before{content:\"\u00A0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{overflow:hidden;display:flex;align-items:center;justify-content:flex-end}.fc .fc-timegrid-axis-cushion{max-width:60px;flex-shrink:0}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-timegrid-col.fc-day-today{background-color:rgba(255,220,40,.15);background-color:var(--fc-today-bg-color,rgba(255,220,40,.15))}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc-media-screen .fc-timegrid-cols{position:absolute;top:0;left:0;right:0;bottom:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{position:absolute;top:0;left:0;right:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{position:absolute;left:0;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{position:absolute;top:0;bottom:0;left:0;right:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px #fff;box-shadow:0 0 0 1px var(--fc-page-bg-color,#fff)}.fc-timegrid-event,.fc-timegrid-more-link{font-size:.85em;font-size:var(--fc-small-font-size,.85em);border-radius:3px}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{white-space:nowrap;font-size:.85em;font-size:var(--fc-small-font-size,.85em);margin-bottom:1px}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\u00A0-\u00A0\"}.fc-timegrid-event-short .fc-event-title{font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-timegrid-more-link{position:absolute;z-index:9999;color:inherit;color:var(--fc-more-link-text-color,inherit);background:#d0d0d0;background:var(--fc-more-link-bg-color,#d0d0d0);cursor:pointer;margin-bottom:1px}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{position:absolute;z-index:4;left:0;right:0;border:0 solid red;border-color:var(--fc-now-indicator-color,red);border-top:1px solid var(--fc-now-indicator-color,red)}.fc .fc-timegrid-now-indicator-arrow{position:absolute;z-index:4;margin-top:-5px;border-style:solid;border-color:red;border-color:var(--fc-now-indicator-color,red)}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{left:0;border-width:5px 0 5px 6px;border-top-color:transparent;border-bottom-color:transparent}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{right:0;border-width:5px 6px 5px 0;border-top-color:transparent;border-bottom-color:transparent}:root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc .fc-list-empty{background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3));height:100%;display:flex;justify-content:center;align-items:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{width:100%;border-style:hidden}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{position:-webkit-sticky;position:sticky;top:0;background:#fff;background:var(--fc-page-bg-color,#fff)}.fc .fc-list-table thead{position:absolute;left:-10000px}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{content:\"\";clear:both;display:table}.fc-theme-standard .fc-list-day-cushion{background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:#f5f5f5;background-color:var(--fc-list-event-hover-bg-color,#f5f5f5)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{display:inline-block;box-sizing:content-box;width:0;height:0;border:5px solid #3788d8;border:calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color,#3788d8);border-radius:5px;border-radius:calc(var(--fc-list-event-dot-width, 10px) / 2)}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}.fc-theme-bootstrap a:not([href]){color:inherit}.fc .fc-event,.fc .fc-scrollgrid table tr{-moz-column-break-inside:avoid;break-inside:avoid}.fc-media-print{display:block;max-width:100%}.fc-media-print .fc-bg-event,.fc-media-print .fc-non-business,.fc-media-print .fc-timegrid-axis-chunk,.fc-media-print .fc-timegrid-slots,.fc-media-print .fc-timeline-slots{display:none}.fc-media-print .fc-h-event,.fc-media-print .fc-toolbar button,.fc-media-print .fc-v-event{color:#000!important;background:#fff!important}.fc-media-print .fc-event,.fc-media-print .fc-event-main{color:#000!important}.fc-media-print .fc-timegrid-event{margin:.5em 0}.fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{position:absolute;z-index:1;top:0;bottom:0}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{display:flex;align-items:center;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{position:absolute;z-index:4;top:0;bottom:0;left:0;right:0;width:0}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{position:absolute;top:0;border-style:solid;border-color:red;border-color:var(--fc-now-indicator-color,red)}.fc .fc-timeline-now-indicator-arrow{margin:0 -6px;border-width:6px 5px 0;border-left-color:transparent;border-right-color:transparent}.fc .fc-timeline-now-indicator-line{margin:0 -1px;bottom:0;border-width:0 0 0 1px}.fc .fc-timeline-events{position:relative;z-index:3;width:0}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{position:relative;display:flex;align-items:center;border-radius:0;padding:2px 1px;margin-bottom:1px;font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{white-space:nowrap;padding:0 2px}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{padding-top:5px;padding-bottom:5px;margin-bottom:0}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{content:\"\";flex-grow:0;flex-shrink:0;opacity:.5;width:0;height:0;margin:0 1px;border-color:transparent #000;border-style:solid;border-width:5px}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{font-size:.85em;font-size:var(--fc-small-font-size,.85em);color:inherit;color:var(--fc-more-link-text-color,inherit);background:#d0d0d0;background:var(--fc-more-link-bg-color,#d0d0d0);padding:1px;cursor:pointer}.fc-timeline-more-link-inner{display:inline-block;left:0;right:0;padding:2px}.fc .fc-timeline-bg{position:absolute;z-index:2;top:0;bottom:0;width:0;left:0;right:0}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{position:absolute;top:0;bottom:0}.fc .fc-resource-timeline-divider{width:3px;cursor:col-resize}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{position:relative;display:flex;justify-content:flex-start;align-items:center}.fc .fc-datagrid-cell-resizer{position:absolute;z-index:1;top:0;bottom:0;width:5px;cursor:col-resize}.fc .fc-datagrid-cell-cushion{padding:8px;white-space:nowrap;overflow:hidden}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}"], encapsulation: 2 });
FullCalendarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }
];
FullCalendarComponent.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    deepChangeDetection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
        args: [{
                selector: 'full-calendar',
                template: '',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None // the styles are root-level, not scoped within the component
                ,
                styles: ["@charset \"UTF-8\";.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{vertical-align:top;padding:0}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\");font-weight:400;font-style:normal}.fc-icon{display:inline-block;width:1em;height:1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:fcicons!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc .fc-button{border-radius:0;overflow:visible;text-transform:none;margin:0;font-family:inherit;font-size:inherit;line-height:inherit}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{padding:0;border-style:none}.fc .fc-button{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.4em .65em;font-size:1em;line-height:1.5;border-radius:.25em}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{outline:0;box-shadow:0 0 0 .2rem rgba(44,62,80,.25)}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#2c3e50;background-color:var(--fc-button-bg-color,#2c3e50);border-color:#2c3e50;border-color:var(--fc-button-border-color,#2c3e50)}.fc .fc-button-primary:hover{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#1e2b37;background-color:var(--fc-button-hover-bg-color,#1e2b37);border-color:#1a252f;border-color:var(--fc-button-hover-border-color,#1a252f)}.fc .fc-button-primary:disabled{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#2c3e50;background-color:var(--fc-button-bg-color,#2c3e50);border-color:#2c3e50;border-color:var(--fc-button-border-color,#2c3e50)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{color:#fff;color:var(--fc-button-text-color,#fff);background-color:#1a252f;background-color:var(--fc-button-active-bg-color,#1a252f);border-color:#151e27;border-color:var(--fc-button-active-border-color,#151e27)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{vertical-align:middle;font-size:1.5em}.fc .fc-button-group{position:relative;display:inline-flex;vertical-align:middle}.fc .fc-button-group>.fc-button{position:relative;flex:1 1 auto}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){margin-right:-1px;border-top-right-radius:0;border-bottom-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-top-left-radius:0;border-bottom-left-radius:0}.fc .fc-toolbar{display:flex;justify-content:space-between;align-items:center}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{position:absolute;top:0;right:0;left:0;bottom:0}.fc .fc-scroller-harness{position:relative;overflow:hidden;direction:ltr}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{width:100%;table-layout:fixed}.fc .fc-scrollgrid table{border-top-style:hidden;border-left-style:hidden;border-right-style:hidden}.fc .fc-scrollgrid{border-collapse:separate;border-right-width:0;border-bottom-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section>td,.fc .fc-scrollgrid-section table{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-top-width:0;border-left-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:#fff;background:var(--fc-page-bg-color,#fff);position:-webkit-sticky;position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:-webkit-sticky;position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{position:absolute;top:0;left:0;right:0;bottom:0}.fc .fc-non-business{background:hsla(0,0%,84.3%,.3);background:var(--fc-non-business-color,hsla(0,0%,84.3%,.3))}.fc .fc-bg-event{background:#8fdf82;background:var(--fc-bg-event-color,#8fdf82);opacity:.3;opacity:var(--fc-bg-event-opacity,.3)}.fc .fc-bg-event .fc-event-title{margin:.5em;font-size:.85em;font-size:var(--fc-small-font-size,.85em);font-style:italic}.fc .fc-highlight{background:rgba(188,232,241,.3);background:var(--fc-highlight-color,rgba(188,232,241,.3))}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{border-radius:4px;border-radius:calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);border-width:1px;width:8px;width:var(--fc-event-resizer-dot-total-width,8px);height:8px;height:var(--fc-event-resizer-dot-total-width,8px);border:var(--fc-event-resizer-dot-border-width,1px) solid;border-color:inherit;background:#fff;background:var(--fc-page-bg-color,#fff)}.fc-event-selected .fc-event-resizer:before{content:\"\";position:absolute;top:-20px;left:-20px;right:-20px;bottom:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{content:\"\";position:absolute;z-index:3;top:0;left:0;right:0;bottom:0}.fc-event-selected:after,.fc-event:focus:after{content:\"\";background:rgba(0,0,0,.25);background:var(--fc-event-selected-overlay-color,rgba(0,0,0,.25));position:absolute;z-index:1;top:-1px;left:-1px;right:-1px;bottom:-1px}.fc-h-event{display:block;border:1px solid #3788d8;border:1px solid var(--fc-event-border-color,#3788d8);background-color:#3788d8;background-color:var(--fc-event-bg-color,#3788d8)}.fc-h-event .fc-event-main{color:#fff;color:var(--fc-event-text-color,#fff)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;vertical-align:top;left:0;right:0;max-width:100%;overflow:hidden}.fc-h-event.fc-event-selected:before{top:-10px;bottom:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{top:0;bottom:0;width:8px;width:var(--fc-event-resizer-thickness,8px)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:-4px;left:calc(-.5 * var(--fc-event-resizer-thickness, 8px))}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:-4px;right:calc(-.5 * var(--fc-event-resizer-thickness, 8px))}.fc-h-event.fc-event-selected .fc-event-resizer{top:50%;margin-top:-4px;margin-top:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:-4px;left:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:-4px;right:calc(-.5 * var(--fc-event-resizer-dot-total-width, 8px))}.fc .fc-popover{position:absolute;z-index:9999;box-shadow:0 2px 6px rgba(0,0,0,.15)}.fc .fc-popover-header{display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;opacity:.65;font-size:1.1em}.fc-theme-standard .fc-popover{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd);background:#fff;background:var(--fc-page-bg-color,#fff)}.fc-theme-standard .fc-popover-header{background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}:root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{content:\"\";clear:both;display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:rgba(255,220,40,.15);background-color:var(--fc-today-bg-color,rgba(255,220,40,.15))}.fc .fc-daygrid-day-frame{position:relative;min-height:100%}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{position:relative;z-index:4;padding:4px}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{position:absolute;left:0;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{position:relative;min-height:2em}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{position:absolute;top:0;left:0;right:0}.fc .fc-daygrid-bg-harness{position:absolute;top:0;bottom:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{z-index:6;margin-top:1px}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{content:\"\";clear:both;display:table}.fc .fc-daygrid-more-link{position:relative;z-index:4;cursor:pointer}.fc .fc-daygrid-week-number{position:absolute;z-index:5;top:0;padding:2px;min-width:1.5em;text-align:center;background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3));color:grey;color:var(--fc-neutral-text-color,grey)}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{left:0;border-radius:0 0 3px 0}.fc-direction-rtl .fc-daygrid-week-number{right:0;border-radius:0 0 0 3px}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{position:relative;white-space:nowrap;border-radius:3px;font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{display:flex;align-items:center;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;min-width:0;overflow:hidden;font-weight:700}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{top:-10px;bottom:-10px}.fc-daygrid-event-dot{margin:0 4px;box-sizing:content-box;width:0;height:0;border:4px solid #3788d8;border:calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color,#3788d8);border-radius:4px;border-radius:calc(var(--fc-daygrid-event-dot-width, 8px) / 2)}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}.fc-v-event{display:block;border:1px solid #3788d8;border:1px solid var(--fc-event-border-color,#3788d8);background-color:#3788d8;background-color:var(--fc-event-bg-color,#3788d8)}.fc-v-event .fc-event-main{color:#fff;color:var(--fc-event-text-color,#fff);height:100%}.fc-v-event .fc-event-main-frame{height:100%;display:flex;flex-direction:column}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{top:0;bottom:0;max-height:100%;overflow:hidden}.fc-v-event:not(.fc-event-start){border-top-width:0;border-top-left-radius:0;border-top-right-radius:0}.fc-v-event:not(.fc-event-end){border-bottom-width:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:8px;height:var(--fc-event-resizer-thickness,8px);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:-4px;top:calc(var(--fc-event-resizer-thickness, 8px) / -2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:-4px;bottom:calc(var(--fc-event-resizer-thickness, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:-4px;margin-left:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:-4px;top:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:-4px;bottom:calc(var(--fc-event-resizer-dot-total-width, 8px) / -2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{position:relative;z-index:1;min-height:100%}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{height:1.5em;border-bottom:0}.fc .fc-timegrid-slot:empty:before{content:\"\u00A0\"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{overflow:hidden;display:flex;align-items:center;justify-content:flex-end}.fc .fc-timegrid-axis-cushion{max-width:60px;flex-shrink:0}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-timegrid-col.fc-day-today{background-color:rgba(255,220,40,.15);background-color:var(--fc-today-bg-color,rgba(255,220,40,.15))}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc-media-screen .fc-timegrid-cols{position:absolute;top:0;left:0;right:0;bottom:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{position:absolute;top:0;left:0;right:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{position:absolute;left:0;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{position:absolute;top:0;bottom:0;left:0;right:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px #fff;box-shadow:0 0 0 1px var(--fc-page-bg-color,#fff)}.fc-timegrid-event,.fc-timegrid-more-link{font-size:.85em;font-size:var(--fc-small-font-size,.85em);border-radius:3px}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{white-space:nowrap;font-size:.85em;font-size:var(--fc-small-font-size,.85em);margin-bottom:1px}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:\"\u00A0-\u00A0\"}.fc-timegrid-event-short .fc-event-title{font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-timegrid-more-link{position:absolute;z-index:9999;color:inherit;color:var(--fc-more-link-text-color,inherit);background:#d0d0d0;background:var(--fc-more-link-bg-color,#d0d0d0);cursor:pointer;margin-bottom:1px}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{position:absolute;z-index:4;left:0;right:0;border:0 solid red;border-color:var(--fc-now-indicator-color,red);border-top:1px solid var(--fc-now-indicator-color,red)}.fc .fc-timegrid-now-indicator-arrow{position:absolute;z-index:4;margin-top:-5px;border-style:solid;border-color:red;border-color:var(--fc-now-indicator-color,red)}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{left:0;border-width:5px 0 5px 6px;border-top-color:transparent;border-bottom-color:transparent}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{right:0;border-width:5px 6px 5px 0;border-top-color:transparent;border-bottom-color:transparent}:root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid #ddd;border:1px solid var(--fc-border-color,#ddd)}.fc .fc-list-empty{background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3));height:100%;display:flex;justify-content:center;align-items:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{width:100%;border-style:hidden}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{position:-webkit-sticky;position:sticky;top:0;background:#fff;background:var(--fc-page-bg-color,#fff)}.fc .fc-list-table thead{position:absolute;left:-10000px}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{content:\"\";clear:both;display:table}.fc-theme-standard .fc-list-day-cushion{background-color:hsla(0,0%,81.6%,.3);background-color:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:#f5f5f5;background-color:var(--fc-list-event-hover-bg-color,#f5f5f5)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{display:inline-block;box-sizing:content-box;width:0;height:0;border:5px solid #3788d8;border:calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color,#3788d8);border-radius:5px;border-radius:calc(var(--fc-list-event-dot-width, 10px) / 2)}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}.fc-theme-bootstrap a:not([href]){color:inherit}.fc .fc-event,.fc .fc-scrollgrid table tr{-moz-column-break-inside:avoid;break-inside:avoid}.fc-media-print{display:block;max-width:100%}.fc-media-print .fc-bg-event,.fc-media-print .fc-non-business,.fc-media-print .fc-timegrid-axis-chunk,.fc-media-print .fc-timegrid-slots,.fc-media-print .fc-timeline-slots{display:none}.fc-media-print .fc-h-event,.fc-media-print .fc-toolbar button,.fc-media-print .fc-v-event{color:#000!important;background:#fff!important}.fc-media-print .fc-event,.fc-media-print .fc-event-main{color:#000!important}.fc-media-print .fc-timegrid-event{margin:.5em 0}.fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{position:absolute;z-index:1;top:0;bottom:0}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{display:flex;align-items:center;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{position:absolute;z-index:4;top:0;bottom:0;left:0;right:0;width:0}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{position:absolute;top:0;border-style:solid;border-color:red;border-color:var(--fc-now-indicator-color,red)}.fc .fc-timeline-now-indicator-arrow{margin:0 -6px;border-width:6px 5px 0;border-left-color:transparent;border-right-color:transparent}.fc .fc-timeline-now-indicator-line{margin:0 -1px;bottom:0;border-width:0 0 0 1px}.fc .fc-timeline-events{position:relative;z-index:3;width:0}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{position:relative;display:flex;align-items:center;border-radius:0;padding:2px 1px;margin-bottom:1px;font-size:.85em;font-size:var(--fc-small-font-size,.85em)}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{white-space:nowrap;padding:0 2px}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{padding-top:5px;padding-bottom:5px;margin-bottom:0}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{content:\"\";flex-grow:0;flex-shrink:0;opacity:.5;width:0;height:0;margin:0 1px;border-color:transparent #000;border-style:solid;border-width:5px}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{font-size:.85em;font-size:var(--fc-small-font-size,.85em);color:inherit;color:var(--fc-more-link-text-color,inherit);background:#d0d0d0;background:var(--fc-more-link-bg-color,#d0d0d0);padding:1px;cursor:pointer}.fc-timeline-more-link-inner{display:inline-block;left:0;right:0;padding:2px}.fc .fc-timeline-bg{position:absolute;z-index:2;top:0;bottom:0;width:0;left:0;right:0}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{position:absolute;top:0;bottom:0}.fc .fc-resource-timeline-divider{width:3px;cursor:col-resize}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:hsla(0,0%,81.6%,.3);background:var(--fc-neutral-bg-color,hsla(0,0%,81.6%,.3))}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{height:auto;position:absolute;top:0;right:0;bottom:0;left:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{position:relative;display:flex;justify-content:flex-start;align-items:center}.fc .fc-datagrid-cell-resizer{position:absolute;z-index:1;top:0;bottom:0;width:5px;cursor:col-resize}.fc .fc-datagrid-cell-cushion{padding:8px;white-space:nowrap;overflow:hidden}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef }]; }, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }], deepChangeDetection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }] }); })();

class FullCalendarModule {
    static registerPlugins(plugins) {
        _fullcalendar_core__WEBPACK_IMPORTED_MODULE_1__.globalPlugins.push(...plugins);
    }
}
FullCalendarModule.ɵfac = function FullCalendarModule_Factory(t) { return new (t || FullCalendarModule)(); };
FullCalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FullCalendarModule });
FullCalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FullCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
        args: [{
                declarations: [FullCalendarComponent],
                imports: [],
                exports: [FullCalendarComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FullCalendarModule, { declarations: [FullCalendarComponent], exports: [FullCalendarComponent] }); })();

/*
 * Public API Surface of fullcalendar
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 7085:
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "createContext": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createPortal": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "flushToDom": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.flushToDom),
/* harmony export */   "render": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* binding */ BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* binding */ BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "BgEvent": () => (/* binding */ BgEvent),
/* harmony export */   "CalendarApi": () => (/* binding */ CalendarApi),
/* harmony export */   "CalendarContent": () => (/* binding */ CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* binding */ CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* binding */ CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* binding */ CalendarRoot),
/* harmony export */   "ContentHook": () => (/* binding */ ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* binding */ CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent),
/* harmony export */   "DateEnv": () => (/* binding */ DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* binding */ DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* binding */ DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* binding */ DayCellRoot),
/* harmony export */   "DayHeader": () => (/* binding */ DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* binding */ DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* binding */ DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* binding */ DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* binding */ ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* binding */ ElementScrollController),
/* harmony export */   "Emitter": () => (/* binding */ Emitter),
/* harmony export */   "EventApi": () => (/* binding */ EventApi),
/* harmony export */   "EventRoot": () => (/* binding */ EventRoot),
/* harmony export */   "EventSourceApi": () => (/* binding */ EventSourceApi),
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* binding */ MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* binding */ MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* binding */ NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* binding */ NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* binding */ NowTimer),
/* harmony export */   "PositionCache": () => (/* binding */ PositionCache),
/* harmony export */   "RefMap": () => (/* binding */ RefMap),
/* harmony export */   "RenderHook": () => (/* binding */ RenderHook),
/* harmony export */   "ScrollController": () => (/* binding */ ScrollController),
/* harmony export */   "ScrollResponder": () => (/* binding */ ScrollResponder),
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "SegHierarchy": () => (/* binding */ SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* binding */ SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* binding */ Slicer),
/* harmony export */   "Splitter": () => (/* binding */ Splitter),
/* harmony export */   "StandardEvent": () => (/* binding */ StandardEvent),
/* harmony export */   "TableDateCell": () => (/* binding */ TableDateCell),
/* harmony export */   "TableDowCell": () => (/* binding */ TableDowCell),
/* harmony export */   "Theme": () => (/* binding */ Theme),
/* harmony export */   "ViewApi": () => (/* binding */ ViewApi),
/* harmony export */   "ViewContextType": () => (/* binding */ ViewContextType),
/* harmony export */   "ViewRoot": () => (/* binding */ ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* binding */ WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* binding */ WindowScrollController),
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addDurations": () => (/* binding */ addDurations),
/* harmony export */   "addMs": () => (/* binding */ addMs),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "allowContextMenu": () => (/* binding */ allowContextMenu),
/* harmony export */   "allowSelection": () => (/* binding */ allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* binding */ applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* binding */ applyStyle),
/* harmony export */   "applyStyleProp": () => (/* binding */ applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* binding */ asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* binding */ asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* binding */ asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* binding */ asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* binding */ buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* binding */ buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* binding */ buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* binding */ buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* binding */ buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* binding */ buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* binding */ buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* binding */ buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* binding */ buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* binding */ collectFromHash),
/* harmony export */   "combineEventUis": () => (/* binding */ combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* binding */ compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* binding */ compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* binding */ compareNumbers),
/* harmony export */   "compareObjs": () => (/* binding */ compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* binding */ computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* binding */ computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* binding */ computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* binding */ computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* binding */ computeInnerRect),
/* harmony export */   "computeRect": () => (/* binding */ computeRect),
/* harmony export */   "computeSegDraggable": () => (/* binding */ computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* binding */ computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* binding */ computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* binding */ computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* binding */ computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* binding */ computeVisibleDayRange),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "constrainPoint": () => (/* binding */ constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* binding */ createAriaClickAttrs),
/* harmony export */   "createDuration": () => (/* binding */ createDuration),
/* harmony export */   "createEmptyEventStore": () => (/* binding */ createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* binding */ createEventInstance),
/* harmony export */   "createEventUi": () => (/* binding */ createEventUi),
/* harmony export */   "createFormatter": () => (/* binding */ createFormatter),
/* harmony export */   "createPlugin": () => (/* binding */ createPlugin),
/* harmony export */   "diffDates": () => (/* binding */ diffDates),
/* harmony export */   "diffDayAndTime": () => (/* binding */ diffDayAndTime),
/* harmony export */   "diffDays": () => (/* binding */ diffDays),
/* harmony export */   "diffPoints": () => (/* binding */ diffPoints),
/* harmony export */   "diffWeeks": () => (/* binding */ diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* binding */ diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* binding */ diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* binding */ disableCursor),
/* harmony export */   "elementClosest": () => (/* binding */ elementClosest),
/* harmony export */   "elementMatches": () => (/* binding */ elementMatches),
/* harmony export */   "enableCursor": () => (/* binding */ enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* binding */ eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* binding */ filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* binding */ filterHash),
/* harmony export */   "findDirectChildren": () => (/* binding */ findDirectChildren),
/* harmony export */   "findElements": () => (/* binding */ findElements),
/* harmony export */   "flexibleCompare": () => (/* binding */ flexibleCompare),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatDayString": () => (/* binding */ formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* binding */ formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* binding */ formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* binding */ getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* binding */ getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* binding */ getClippingParents),
/* harmony export */   "getDateMeta": () => (/* binding */ getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* binding */ getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* binding */ getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* binding */ getElRoot),
/* harmony export */   "getElSeg": () => (/* binding */ getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* binding */ getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* binding */ getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* binding */ getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* binding */ getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* binding */ getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* binding */ getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* binding */ getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* binding */ getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* binding */ getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* binding */ getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* binding */ getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* binding */ getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* binding */ getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* binding */ getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* binding */ getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* binding */ getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* binding */ getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* binding */ globalLocales),
/* harmony export */   "globalPlugins": () => (/* binding */ globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* binding */ greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* binding */ groupIntersectingEntries),
/* harmony export */   "guid": () => (/* binding */ guid),
/* harmony export */   "hasBgRendering": () => (/* binding */ hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* binding */ hasShrinkWidth),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "interactionSettingsStore": () => (/* binding */ interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* binding */ interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* binding */ intersectRanges),
/* harmony export */   "intersectRects": () => (/* binding */ intersectRects),
/* harmony export */   "intersectSpans": () => (/* binding */ intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* binding */ isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* binding */ isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* binding */ isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* binding */ isDateSpansEqual),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isInteractionValid": () => (/* binding */ isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* binding */ isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* binding */ isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* binding */ isPropsValid),
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "joinSpans": () => (/* binding */ joinSpans),
/* harmony export */   "listenBySelector": () => (/* binding */ listenBySelector),
/* harmony export */   "mapHash": () => (/* binding */ mapHash),
/* harmony export */   "memoize": () => (/* binding */ memoize),
/* harmony export */   "memoizeArraylike": () => (/* binding */ memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* binding */ memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* binding */ memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* binding */ mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* binding */ multiplyDuration),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseBusinessHours": () => (/* binding */ parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* binding */ parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* binding */ parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* binding */ parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* binding */ parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* binding */ parse),
/* harmony export */   "pointInsideRect": () => (/* binding */ pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* binding */ preventContextMenu),
/* harmony export */   "preventDefault": () => (/* binding */ preventDefault),
/* harmony export */   "preventSelection": () => (/* binding */ preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* binding */ rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* binding */ rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* binding */ rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* binding */ rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* binding */ refineEventDef),
/* harmony export */   "refineProps": () => (/* binding */ refineProps),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "removeExact": () => (/* binding */ removeExact),
/* harmony export */   "renderChunkContent": () => (/* binding */ renderChunkContent),
/* harmony export */   "renderFill": () => (/* binding */ renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* binding */ renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* binding */ renderScrollShim),
/* harmony export */   "requestJson": () => (/* binding */ requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* binding */ sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* binding */ setElSeg),
/* harmony export */   "setRef": () => (/* binding */ setRef),
/* harmony export */   "sliceEventStore": () => (/* binding */ sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* binding */ sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* binding */ sortEventSegs),
/* harmony export */   "startOfDay": () => (/* binding */ startOfDay),
/* harmony export */   "translateRect": () => (/* binding */ translateRect),
/* harmony export */   "triggerDateSelect": () => (/* binding */ triggerDateSelect),
/* harmony export */   "unpromisify": () => (/* binding */ unpromisify),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "whenTransitionDone": () => (/* binding */ whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* binding */ wholeDivideDurations)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 90583);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vdom.js */ 53139);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/



 // no public types yet. when there are, export from:
// import {} from './api-type-deps'

var EventSourceApi =
/** @class */
function () {
  function EventSourceApi(context, internalEventSource) {
    this.context = context;
    this.internalEventSource = internalEventSource;
  }

  EventSourceApi.prototype.remove = function () {
    this.context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: this.internalEventSource.sourceId
    });
  };

  EventSourceApi.prototype.refetch = function () {
    this.context.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      sourceIds: [this.internalEventSource.sourceId],
      isRefetch: true
    });
  };

  Object.defineProperty(EventSourceApi.prototype, "id", {
    get: function () {
      return this.internalEventSource.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi.prototype, "url", {
    get: function () {
      return this.internalEventSource.meta.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventSourceApi.prototype, "format", {
    get: function () {
      return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
    },
    enumerable: false,
    configurable: true
  });
  return EventSourceApi;
}();

function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
} // Querying
// ----------------------------------------------------------------------------------------------------------------


function elementClosest(el, selector) {
  if (el.closest) {
    return el.closest(selector); // really bad fallback for IE
    // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  }

  if (!document.documentElement.contains(el)) {
    return null;
  }

  do {
    if (elementMatches(el, selector)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);

  return null;
}

function elementMatches(el, selector) {
  var method = el.matches || el.matchesSelector || el.msMatchesSelector;
  return method.call(el, selector);
} // accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document


function findElements(container, selector) {
  var containers = container instanceof HTMLElement ? [container] : container;
  var allMatches = [];

  for (var i = 0; i < containers.length; i += 1) {
    var matches = containers[i].querySelectorAll(selector);

    for (var j = 0; j < matches.length; j += 1) {
      allMatches.push(matches[j]);
    }
  }

  return allMatches;
} // accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!


function findDirectChildren(parent, selector) {
  var parents = parent instanceof HTMLElement ? [parent] : parent;
  var allMatches = [];

  for (var i = 0; i < parents.length; i += 1) {
    var childNodes = parents[i].children; // only ever elements

    for (var j = 0; j < childNodes.length; j += 1) {
      var childNode = childNodes[j];

      if (!selector || elementMatches(childNode, selector)) {
        allMatches.push(childNode);
      }
    }
  }

  return allMatches;
} // Style
// ----------------------------------------------------------------------------------------------------------------


var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;

function applyStyle(el, props) {
  for (var propName in props) {
    applyStyleProp(el, propName, props[propName]);
  }
}

function applyStyleProp(el, name, val) {
  if (val == null) {
    el.style[name] = '';
  } else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
    el.style[name] = val + "px";
  } else {
    el.style[name] = val;
  }
} // Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.


function getEventTargetViaRoot(ev) {
  var _a, _b;

  return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
} // Shadow DOM consuderations
// ----------------------------------------------------------------------------------------------------------------


function getElRoot(el) {
  return el.getRootNode ? el.getRootNode() : document;
} // Unique ID for DOM attribute


var guid$1 = 0;

function getUniqueDomId() {
  guid$1 += 1;
  return 'fc-dom-' + guid$1;
} // Stops a mouse/touch event from doing it's native browser action


function preventDefault(ev) {
  ev.preventDefault();
} // Event Delegation
// ----------------------------------------------------------------------------------------------------------------


function buildDelegationHandler(selector, handler) {
  return function (ev) {
    var matchedChild = elementClosest(ev.target, selector);

    if (matchedChild) {
      handler.call(matchedChild, ev, matchedChild);
    }
  };
}

function listenBySelector(container, eventType, selector, handler) {
  var attachedHandler = buildDelegationHandler(selector, handler);
  container.addEventListener(eventType, attachedHandler);
  return function () {
    container.removeEventListener(eventType, attachedHandler);
  };
}

function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
  var currentMatchedChild;
  return listenBySelector(container, 'mouseover', selector, function (mouseOverEv, matchedChild) {
    if (matchedChild !== currentMatchedChild) {
      currentMatchedChild = matchedChild;
      onMouseEnter(mouseOverEv, matchedChild);

      var realOnMouseLeave_1 = function (mouseLeaveEv) {
        currentMatchedChild = null;
        onMouseLeave(mouseLeaveEv, matchedChild);
        matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
      }; // listen to the next mouseleave, and then unattach


      matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
    }
  });
} // Animation
// ----------------------------------------------------------------------------------------------------------------


var transitionEventNames = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend']; // triggered only when the next single subsequent transition finishes

function whenTransitionDone(el, callback) {
  var realCallback = function (ev) {
    callback(ev);
    transitionEventNames.forEach(function (eventName) {
      el.removeEventListener(eventName, realCallback);
    });
  };

  transitionEventNames.forEach(function (eventName) {
    el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
  });
} // ARIA workarounds
// ----------------------------------------------------------------------------------------------------------------


function createAriaClickAttrs(handler) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    onClick: handler
  }, createAriaKeyboardAttrs(handler));
}

function createAriaKeyboardAttrs(handler) {
  return {
    tabIndex: 0,
    onKeyDown: function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        handler(ev);
        ev.preventDefault(); // if space, don't scroll down page
      }
    }
  };
}

var guidNumber = 0;

function guid() {
  guidNumber += 1;
  return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area


function disableCursor() {
  document.body.classList.add('fc-not-allowed');
} // Returns the mouse cursor to its original look


function enableCursor() {
  document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/


function preventSelection(el) {
  el.classList.add('fc-unselectable');
  el.addEventListener('selectstart', preventDefault);
}

function allowSelection(el) {
  el.classList.remove('fc-unselectable');
  el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/


function preventContextMenu(el) {
  el.addEventListener('contextmenu', preventDefault);
}

function allowContextMenu(el) {
  el.removeEventListener('contextmenu', preventDefault);
}

function parseFieldSpecs(input) {
  var specs = [];
  var tokens = [];
  var i;
  var token;

  if (typeof input === 'string') {
    tokens = input.split(/\s*,\s*/);
  } else if (typeof input === 'function') {
    tokens = [input];
  } else if (Array.isArray(input)) {
    tokens = input;
  }

  for (i = 0; i < tokens.length; i += 1) {
    token = tokens[i];

    if (typeof token === 'string') {
      specs.push(token.charAt(0) === '-' ? {
        field: token.substring(1),
        order: -1
      } : {
        field: token,
        order: 1
      });
    } else if (typeof token === 'function') {
      specs.push({
        func: token
      });
    }
  }

  return specs;
}

function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
  var i;
  var cmp;

  for (i = 0; i < fieldSpecs.length; i += 1) {
    cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);

    if (cmp) {
      return cmp;
    }
  }

  return 0;
}

function compareByFieldSpec(obj0, obj1, fieldSpec) {
  if (fieldSpec.func) {
    return fieldSpec.func(obj0, obj1);
  }

  return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field]) * (fieldSpec.order || 1);
}

function flexibleCompare(a, b) {
  if (!a && !b) {
    return 0;
  }

  if (b == null) {
    return -1;
  }

  if (a == null) {
    return 1;
  }

  if (typeof a === 'string' || typeof b === 'string') {
    return String(a).localeCompare(String(b));
  }

  return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/


function padStart(val, len) {
  var s = String(val);
  return '000'.substr(0, len - s.length) + s;
}

function formatWithOrdinals(formatter, args, fallbackText) {
  if (typeof formatter === 'function') {
    return formatter.apply(void 0, args);
  }

  if (typeof formatter === 'string') {
    // non-blank string
    return args.reduce(function (str, arg, index) {
      return str.replace('$' + index, arg || '');
    }, formatter);
  }

  return fallbackText;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/


function compareNumbers(a, b) {
  return a - b;
}

function isInt(n) {
  return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/


function computeSmallestCellWidth(cellEl) {
  var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
  var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');

  if (!allWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
  }

  if (!contentWidthEl) {
    throw new Error('needs fc-scrollgrid-shrink-cushion className');
  }

  return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
  contentWidthEl.getBoundingClientRect().width;
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; // Adding

function addWeeks(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n * 7;
  return arrayToUtcDate(a);
}

function addDays(m, n) {
  var a = dateToUtcArray(m);
  a[2] += n;
  return arrayToUtcDate(a);
}

function addMs(m, n) {
  var a = dateToUtcArray(m);
  a[6] += n;
  return arrayToUtcDate(a);
} // Diffing (all return floats)
// TODO: why not use ranges?


function diffWeeks(m0, m1) {
  return diffDays(m0, m1) / 7;
}

function diffDays(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}

function diffHours(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}

function diffMinutes(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}

function diffSeconds(m0, m1) {
  return (m1.valueOf() - m0.valueOf()) / 1000;
}

function diffDayAndTime(m0, m1) {
  var m0day = startOfDay(m0);
  var m1day = startOfDay(m1);
  return {
    years: 0,
    months: 0,
    days: Math.round(diffDays(m0day, m1day)),
    milliseconds: m1.valueOf() - m1day.valueOf() - (m0.valueOf() - m0day.valueOf())
  };
} // Diffing Whole Units


function diffWholeWeeks(m0, m1) {
  var d = diffWholeDays(m0, m1);

  if (d !== null && d % 7 === 0) {
    return d / 7;
  }

  return null;
}

function diffWholeDays(m0, m1) {
  if (timeAsMs(m0) === timeAsMs(m1)) {
    return Math.round(diffDays(m0, m1));
  }

  return null;
} // Start-Of


function startOfDay(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate()]);
}

function startOfHour(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours()]);
}

function startOfMinute(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes()]);
}

function startOfSecond(m) {
  return arrayToUtcDate([m.getUTCFullYear(), m.getUTCMonth(), m.getUTCDate(), m.getUTCHours(), m.getUTCMinutes(), m.getUTCSeconds()]);
} // Week Computation


function weekOfYear(marker, dow, doy) {
  var y = marker.getUTCFullYear();
  var w = weekOfGivenYear(marker, y, dow, doy);

  if (w < 1) {
    return weekOfGivenYear(marker, y - 1, dow, doy);
  }

  var nextW = weekOfGivenYear(marker, y + 1, dow, doy);

  if (nextW >= 1) {
    return Math.min(w, nextW);
  }

  return w;
}

function weekOfGivenYear(marker, year, dow, doy) {
  var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
  var dayStart = startOfDay(marker);
  var days = Math.round(diffDays(firstWeekStart, dayStart));
  return Math.floor(days / 7) + 1; // zero-indexed
} // start-of-first-week - start-of-year


function firstWeekOffset(year, dow, doy) {
  // first-week day -- which january is always in the first week (4 for iso, 1 for other)
  var fwd = 7 + dow - doy; // first-week day local weekday -- which local weekday is fwd

  var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
  return -fwdlw + fwd - 1;
} // Array Conversion


function dateToLocalArray(date) {
  return [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
}

function arrayToLocalDate(a) {
  return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
  a[3] || 0, a[4] || 0, a[5] || 0);
}

function dateToUtcArray(date) {
  return [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds()];
}

function arrayToUtcDate(a) {
  // according to web standards (and Safari), a month index is required.
  // massage if only given a year.
  if (a.length === 1) {
    a = a.concat([0]);
  }

  return new Date(Date.UTC.apply(Date, a));
} // Other Utils


function isValidDate(m) {
  return !isNaN(m.valueOf());
}

function timeAsMs(m) {
  return m.getUTCHours() * 1000 * 60 * 60 + m.getUTCMinutes() * 1000 * 60 + m.getUTCSeconds() * 1000 + m.getUTCMilliseconds();
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
  return {
    instanceId: guid(),
    defId: defId,
    range: range,
    forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
    forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo
  };
}

var hasOwnProperty = Object.prototype.hasOwnProperty; // Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.

function mergeProps(propObjs, complexPropsMap) {
  var dest = {};

  if (complexPropsMap) {
    for (var name_1 in complexPropsMap) {
      var complexObjs = []; // collect the trailing object values, stopping when a non-object is discovered

      for (var i = propObjs.length - 1; i >= 0; i -= 1) {
        var val = propObjs[i][name_1];

        if (typeof val === 'object' && val) {
          // non-null object
          complexObjs.unshift(val);
        } else if (val !== undefined) {
          dest[name_1] = val; // if there were no objects, this value will be used

          break;
        }
      } // if the trailing values were objects, use the merged value


      if (complexObjs.length) {
        dest[name_1] = mergeProps(complexObjs);
      }
    }
  } // copy values into the destination, going from last to first


  for (var i = propObjs.length - 1; i >= 0; i -= 1) {
    var props = propObjs[i];

    for (var name_2 in props) {
      if (!(name_2 in dest)) {
        // if already assigned by previous props or complex props, don't reassign
        dest[name_2] = props[name_2];
      }
    }
  }

  return dest;
}

function filterHash(hash, func) {
  var filtered = {};

  for (var key in hash) {
    if (func(hash[key], key)) {
      filtered[key] = hash[key];
    }
  }

  return filtered;
}

function mapHash(hash, func) {
  var newHash = {};

  for (var key in hash) {
    newHash[key] = func(hash[key], key);
  }

  return newHash;
}

function arrayToHash(a) {
  var hash = {};

  for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
    var item = a_1[_i];
    hash[item] = true;
  }

  return hash;
}

function buildHashFromArray(a, func) {
  var hash = {};

  for (var i = 0; i < a.length; i += 1) {
    var tuple = func(a[i], i);
    hash[tuple[0]] = tuple[1];
  }

  return hash;
}

function hashValuesToArray(obj) {
  var a = [];

  for (var key in obj) {
    a.push(obj[key]);
  }

  return a;
}

function isPropsEqual(obj0, obj1) {
  if (obj0 === obj1) {
    return true;
  }

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        return false;
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        return false;
      }
    }
  }

  return true;
}

function getUnequalProps(obj0, obj1) {
  var keys = [];

  for (var key in obj0) {
    if (hasOwnProperty.call(obj0, key)) {
      if (!(key in obj1)) {
        keys.push(key);
      }
    }
  }

  for (var key in obj1) {
    if (hasOwnProperty.call(obj1, key)) {
      if (obj0[key] !== obj1[key]) {
        keys.push(key);
      }
    }
  }

  return keys;
}

function compareObjs(oldProps, newProps, equalityFuncs) {
  if (equalityFuncs === void 0) {
    equalityFuncs = {};
  }

  if (oldProps === newProps) {
    return true;
  }

  for (var key in newProps) {
    if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;else {
      return false;
    }
  } // check for props that were omitted in the new


  for (var key in oldProps) {
    if (!(key in newProps)) {
      return false;
    }
  }

  return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/


function isObjValsEqual(val0, val1, comparator) {
  if (val0 === val1 || comparator === true) {
    return true;
  }

  if (comparator) {
    return comparator(val0, val1);
  }

  return false;
}

function collectFromHash(hash, startIndex, endIndex, step) {
  if (startIndex === void 0) {
    startIndex = 0;
  }

  if (step === void 0) {
    step = 1;
  }

  var res = [];

  if (endIndex == null) {
    endIndex = Object.keys(hash).length;
  }

  for (var i = startIndex; i < endIndex; i += step) {
    var val = hash[i];

    if (val !== undefined) {
      // will disregard undefined for sparse arrays
      res.push(val);
    }
  }

  return res;
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
  for (var i = 0; i < recurringTypes.length; i += 1) {
    var parsed = recurringTypes[i].parse(refined, dateEnv);

    if (parsed) {
      var allDay = refined.allDay;

      if (allDay == null) {
        allDay = defaultAllDay;

        if (allDay == null) {
          allDay = parsed.allDayGuess;

          if (allDay == null) {
            allDay = false;
          }
        }
      }

      return {
        allDay: allDay,
        duration: parsed.duration,
        typeData: parsed.typeData,
        typeId: i
      };
    }
  }

  return null;
}

function expandRecurring(eventStore, framingRange, context) {
  var dateEnv = context.dateEnv,
      pluginHooks = context.pluginHooks,
      options = context.options;
  var defs = eventStore.defs,
      instances = eventStore.instances; // remove existing recurring instances
  // TODO: bad. always expand events as a second step

  instances = filterHash(instances, function (instance) {
    return !defs[instance.defId].recurringDef;
  });

  for (var defId in defs) {
    var def = defs[defId];

    if (def.recurringDef) {
      var duration = def.recurringDef.duration;

      if (!duration) {
        duration = def.allDay ? options.defaultAllDayEventDuration : options.defaultTimedEventDuration;
      }

      var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);

      for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
        var start = starts_1[_i];
        var instance = createEventInstance(defId, {
          start: start,
          end: dateEnv.add(start, duration)
        });
        instances[instance.instanceId] = instance;
      }
    }
  }

  return {
    defs: defs,
    instances: instances
  };
}
/*
Event MUST have a recurringDef
*/


function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
  var typeDef = recurringTypes[eventDef.recurringDef.typeId];
  var markers = typeDef.expand(eventDef.recurringDef.typeData, {
    start: dateEnv.subtract(framingRange.start, duration),
    end: framingRange.end
  }, dateEnv); // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to

  if (eventDef.allDay) {
    markers = markers.map(startOfDay);
  }

  return markers;
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/; // Parsing and Creation

function createDuration(input, unit) {
  var _a;

  if (typeof input === 'string') {
    return parseString(input);
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseObject(input);
  }

  if (typeof input === 'number') {
    return parseObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
  }

  return null;
}

function parseString(s) {
  var m = PARSE_RE.exec(s);

  if (m) {
    var sign = m[1] ? -1 : 1;
    return {
      years: 0,
      months: 0,
      days: sign * (m[2] ? parseInt(m[2], 10) : 0),
      milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
      (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
      (m[5] ? parseInt(m[5], 10) : 0) * 1000 + ( // seconds
      m[6] ? parseInt(m[6], 10) : 0) // ms
      )
    };
  }

  return null;
}

function parseObject(obj) {
  var duration = {
    years: obj.years || obj.year || 0,
    months: obj.months || obj.month || 0,
    days: obj.days || obj.day || 0,
    milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
    (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
    (obj.seconds || obj.second || 0) * 1000 + ( // seconds
    obj.milliseconds || obj.millisecond || obj.ms || 0) // ms

  };
  var weeks = obj.weeks || obj.week;

  if (weeks) {
    duration.days += weeks * 7;
    duration.specifiedWeeks = true;
  }

  return duration;
} // Equality


function durationsEqual(d0, d1) {
  return d0.years === d1.years && d0.months === d1.months && d0.days === d1.days && d0.milliseconds === d1.milliseconds;
}

function asCleanDays(dur) {
  if (!dur.years && !dur.months && !dur.milliseconds) {
    return dur.days;
  }

  return 0;
} // Simple Math


function addDurations(d0, d1) {
  return {
    years: d0.years + d1.years,
    months: d0.months + d1.months,
    days: d0.days + d1.days,
    milliseconds: d0.milliseconds + d1.milliseconds
  };
}

function subtractDurations(d1, d0) {
  return {
    years: d1.years - d0.years,
    months: d1.months - d0.months,
    days: d1.days - d0.days,
    milliseconds: d1.milliseconds - d0.milliseconds
  };
}

function multiplyDuration(d, n) {
  return {
    years: d.years * n,
    months: d.months * n,
    days: d.days * n,
    milliseconds: d.milliseconds * n
  };
} // Conversions
// "Rough" because they are based on average-case Gregorian months/years


function asRoughYears(dur) {
  return asRoughDays(dur) / 365;
}

function asRoughMonths(dur) {
  return asRoughDays(dur) / 30;
}

function asRoughDays(dur) {
  return asRoughMs(dur) / 864e5;
}

function asRoughMinutes(dur) {
  return asRoughMs(dur) / (1000 * 60);
}

function asRoughSeconds(dur) {
  return asRoughMs(dur) / 1000;
}

function asRoughMs(dur) {
  return dur.years * (365 * 864e5) + dur.months * (30 * 864e5) + dur.days * 864e5 + dur.milliseconds;
} // Advanced Math


function wholeDivideDurations(numerator, denominator) {
  var res = null;

  for (var i = 0; i < INTERNAL_UNITS.length; i += 1) {
    var unit = INTERNAL_UNITS[i];

    if (denominator[unit]) {
      var localRes = numerator[unit] / denominator[unit];

      if (!isInt(localRes) || res !== null && res !== localRes) {
        return null;
      }

      res = localRes;
    } else if (numerator[unit]) {
      // needs to divide by something but can't!
      return null;
    }
  }

  return res;
}

function greatestDurationDenominator(dur) {
  var ms = dur.milliseconds;

  if (ms) {
    if (ms % 1000 !== 0) {
      return {
        unit: 'millisecond',
        value: ms
      };
    }

    if (ms % (1000 * 60) !== 0) {
      return {
        unit: 'second',
        value: ms / 1000
      };
    }

    if (ms % (1000 * 60 * 60) !== 0) {
      return {
        unit: 'minute',
        value: ms / (1000 * 60)
      };
    }

    if (ms) {
      return {
        unit: 'hour',
        value: ms / (1000 * 60 * 60)
      };
    }
  }

  if (dur.days) {
    if (dur.specifiedWeeks && dur.days % 7 === 0) {
      return {
        unit: 'week',
        value: dur.days / 7
      };
    }

    return {
      unit: 'day',
      value: dur.days
    };
  }

  if (dur.months) {
    return {
      unit: 'month',
      value: dur.months
    };
  }

  if (dur.years) {
    return {
      unit: 'year',
      value: dur.years
    };
  }

  return {
    unit: 'millisecond',
    value: 0
  };
} // timeZoneOffset is in minutes


function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
  if (stripZeroTime === void 0) {
    stripZeroTime = false;
  }

  var s = marker.toISOString();
  s = s.replace('.000', '');

  if (stripZeroTime) {
    s = s.replace('T00:00:00Z', '');
  }

  if (s.length > 10) {
    // time part wasn't stripped, can add timezone info
    if (timeZoneOffset == null) {
      s = s.replace('Z', '');
    } else if (timeZoneOffset !== 0) {
      s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
    } // otherwise, its UTC-0 and we want to keep the Z

  }

  return s;
} // formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"


function formatDayString(marker) {
  return marker.toISOString().replace(/T.*$/, '');
} // TODO: use Date::toISOString and use everything after the T?


function formatIsoTimeString(marker) {
  return padStart(marker.getUTCHours(), 2) + ':' + padStart(marker.getUTCMinutes(), 2) + ':' + padStart(marker.getUTCSeconds(), 2);
}

function formatTimeZoneOffset(minutes, doIso) {
  if (doIso === void 0) {
    doIso = false;
  }

  var sign = minutes < 0 ? '-' : '+';
  var abs = Math.abs(minutes);
  var hours = Math.floor(abs / 60);
  var mins = Math.round(abs % 60);

  if (doIso) {
    return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
  }

  return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : '');
} // TODO: new util arrayify?


function removeExact(array, exactVal) {
  var removeCnt = 0;
  var i = 0;

  while (i < array.length) {
    if (array[i] === exactVal) {
      array.splice(i, 1);
      removeCnt += 1;
    } else {
      i += 1;
    }
  }

  return removeCnt;
}

function isArraysEqual(a0, a1, equalityFunc) {
  if (a0 === a1) {
    return true;
  }

  var len = a0.length;
  var i;

  if (len !== a1.length) {
    // not array? or not same length?
    return false;
  }

  for (i = 0; i < len; i += 1) {
    if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
      return false;
    }
  }

  return true;
}

function memoize(workerFunc, resEquality, teardownFunc) {
  var currentArgs;
  var currentRes;
  return function () {
    var newArgs = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }

    if (!currentArgs) {
      currentRes = workerFunc.apply(this, newArgs);
    } else if (!isArraysEqual(currentArgs, newArgs)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.apply(this, newArgs);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArgs = newArgs;
    return currentRes;
  };
}

function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArg;
  var currentRes;
  return function (newArg) {
    if (!currentArg) {
      currentRes = workerFunc.call(_this, newArg);
    } else if (!isPropsEqual(currentArg, newArg)) {
      if (teardownFunc) {
        teardownFunc(currentRes);
      }

      var res = workerFunc.call(_this, newArg);

      if (!resEquality || !resEquality(res, currentRes)) {
        currentRes = res;
      }
    }

    currentArg = newArg;
    return currentRes;
  };
}

function memoizeArraylike( // used at all?
workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArgSets = [];
  var currentResults = [];
  return function (newArgSets) {
    var currentLen = currentArgSets.length;
    var newLen = newArgSets.length;
    var i = 0;

    for (; i < currentLen; i += 1) {
      if (!newArgSets[i]) {
        // one of the old sets no longer exists
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }
      } else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
        if (teardownFunc) {
          teardownFunc(currentResults[i]);
        }

        var res = workerFunc.apply(_this, newArgSets[i]);

        if (!resEquality || !resEquality(res, currentResults[i])) {
          currentResults[i] = res;
        }
      }
    }

    for (; i < newLen; i += 1) {
      currentResults[i] = workerFunc.apply(_this, newArgSets[i]);
    }

    currentArgSets = newArgSets;
    currentResults.splice(newLen); // remove excess

    return currentResults;
  };
}

function memoizeHashlike( // used?
workerFunc, resEquality, teardownFunc) {
  var _this = this;

  var currentArgHash = {};
  var currentResHash = {};
  return function (newArgHash) {
    var newResHash = {};

    for (var key in newArgHash) {
      if (!currentResHash[key]) {
        newResHash[key] = workerFunc.apply(_this, newArgHash[key]);
      } else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
        if (teardownFunc) {
          teardownFunc(currentResHash[key]);
        }

        var res = workerFunc.apply(_this, newArgHash[key]);
        newResHash[key] = resEquality && resEquality(res, currentResHash[key]) ? currentResHash[key] : res;
      } else {
        newResHash[key] = currentResHash[key];
      }
    }

    currentArgHash = newArgHash;
    currentResHash = newResHash;
    return newResHash;
  };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
  week: 3,
  separator: 0,
  omitZeroMinute: 0,
  meridiem: 0,
  omitCommas: 0
};
var STANDARD_DATE_PROP_SEVERITIES = {
  timeZoneName: 7,
  era: 6,
  year: 5,
  month: 4,
  day: 2,
  weekday: 2,
  hour: 1,
  minute: 1,
  second: 1
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too

var COMMA_RE = /,/g; // we need re for globalness

var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character

var UTC_RE = /UTC|GMT/;

var NativeFormatter =
/** @class */
function () {
  function NativeFormatter(formatSettings) {
    var standardDateProps = {};
    var extendedSettings = {};
    var severity = 0;

    for (var name_1 in formatSettings) {
      if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
        extendedSettings[name_1] = formatSettings[name_1];
        severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
      } else {
        standardDateProps[name_1] = formatSettings[name_1];

        if (name_1 in STANDARD_DATE_PROP_SEVERITIES) {
          // TODO: what about hour12? no severity
          severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
        }
      }
    }

    this.standardDateProps = standardDateProps;
    this.extendedSettings = extendedSettings;
    this.severity = severity;
    this.buildFormattingFunc = memoize(buildFormattingFunc);
  }

  NativeFormatter.prototype.format = function (date, context) {
    return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
  };

  NativeFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    var _a = this,
        standardDateProps = _a.standardDateProps,
        extendedSettings = _a.extendedSettings;

    var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);

    if (!diffSeverity) {
      return this.format(start, context);
    }

    var biggestUnitForPartial = diffSeverity;

    if (biggestUnitForPartial > 1 && ( // the two dates are different in a way that's larger scale than time
    standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') && (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') && (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
      biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
    }

    var full0 = this.format(start, context);
    var full1 = this.format(end, context);

    if (full0 === full1) {
      return full0;
    }

    var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
    var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
    var partial0 = partialFormattingFunc(start);
    var partial1 = partialFormattingFunc(end);
    var insertion = findCommonInsertion(full0, partial0, full1, partial1);
    var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';

    if (insertion) {
      return insertion.before + partial0 + separator + partial1 + insertion.after;
    }

    return full0 + separator + full1;
  };

  NativeFormatter.prototype.getLargestUnit = function () {
    switch (this.severity) {
      case 7:
      case 6:
      case 5:
        return 'year';

      case 4:
        return 'month';

      case 3:
        return 'week';

      case 2:
        return 'day';

      default:
        return 'time';
      // really?
    }
  };

  return NativeFormatter;
}();

function buildFormattingFunc(standardDateProps, extendedSettings, context) {
  var standardDatePropCnt = Object.keys(standardDateProps).length;

  if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
    return function (date) {
      return formatTimeZoneOffset(date.timeZoneOffset);
    };
  }

  if (standardDatePropCnt === 0 && extendedSettings.week) {
    return function (date) {
      return formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week);
    };
  }

  return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}

function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
  standardDateProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, standardDateProps); // copy

  extendedSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, extendedSettings); // copy

  sanitizeSettings(standardDateProps, extendedSettings);
  standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers

  var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
  var zeroFormat; // needed?

  if (extendedSettings.omitZeroMinute) {
    var zeroProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, standardDateProps);

    delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings

    zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
  }

  return function (date) {
    var marker = date.marker;
    var format;

    if (zeroFormat && !marker.getUTCMinutes()) {
      format = zeroFormat;
    } else {
      format = normalFormat;
    }

    var s = format.format(marker);
    return postProcess(s, date, standardDateProps, extendedSettings, context);
  };
}

function sanitizeSettings(standardDateProps, extendedSettings) {
  // deal with a browser inconsistency where formatting the timezone
  // requires that the hour/minute be present.
  if (standardDateProps.timeZoneName) {
    if (!standardDateProps.hour) {
      standardDateProps.hour = '2-digit';
    }

    if (!standardDateProps.minute) {
      standardDateProps.minute = '2-digit';
    }
  } // only support short timezone names


  if (standardDateProps.timeZoneName === 'long') {
    standardDateProps.timeZoneName = 'short';
  } // if requesting to display seconds, MUST display minutes


  if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
    delete extendedSettings.omitZeroMinute;
  }
}

function postProcess(s, date, standardDateProps, extendedSettings, context) {
  s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes

  if (standardDateProps.timeZoneName === 'short') {
    s = injectTzoStr(s, context.timeZone === 'UTC' || date.timeZoneOffset == null ? 'UTC' : // important to normalize for IE, which does "GMT"
    formatTimeZoneOffset(date.timeZoneOffset));
  }

  if (extendedSettings.omitCommas) {
    s = s.replace(COMMA_RE, '').trim();
  }

  if (extendedSettings.omitZeroMinute) {
    s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
  } // ^ do anything that might create adjacent spaces before this point,
  // because MERIDIEM_RE likes to eat up loading spaces


  if (extendedSettings.meridiem === false) {
    s = s.replace(MERIDIEM_RE, '').trim();
  } else if (extendedSettings.meridiem === 'narrow') {
    // a/p
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase();
    });
  } else if (extendedSettings.meridiem === 'short') {
    // am/pm
    s = s.replace(MERIDIEM_RE, function (m0, m1) {
      return m1.toLocaleLowerCase() + "m";
    });
  } else if (extendedSettings.meridiem === 'lowercase') {
    // other meridiem transformers already converted to lowercase
    s = s.replace(MERIDIEM_RE, function (m0) {
      return m0.toLocaleLowerCase();
    });
  }

  s = s.replace(MULTI_SPACE_RE, ' ');
  s = s.trim();
  return s;
}

function injectTzoStr(s, tzoStr) {
  var replaced = false;
  s = s.replace(UTC_RE, function () {
    replaced = true;
    return tzoStr;
  }); // IE11 doesn't include UTC/GMT in the original string, so append to end

  if (!replaced) {
    s += " " + tzoStr;
  }

  return s;
}

function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
  var parts = [];

  if (display === 'long') {
    parts.push(weekTextLong);
  } else if (display === 'short' || display === 'narrow') {
    parts.push(weekText);
  }

  if (display === 'long' || display === 'short') {
    parts.push(' ');
  }

  parts.push(locale.simpleNumberFormat.format(num));

  if (locale.options.direction === 'rtl') {
    // TODO: use control characters instead?
    parts.reverse();
  }

  return parts.join('');
} // Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger


function computeMarkerDiffSeverity(d0, d1, ca) {
  if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
    return 5;
  }

  if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
    return 4;
  }

  if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
    return 2;
  }

  if (timeAsMs(d0) !== timeAsMs(d1)) {
    return 1;
  }

  return 0;
}

function computePartialFormattingOptions(options, biggestUnit) {
  var partialOptions = {};

  for (var name_2 in options) {
    if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
    STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
      partialOptions[name_2] = options[name_2];
    }
  }

  return partialOptions;
}

function findCommonInsertion(full0, partial0, full1, partial1) {
  var i0 = 0;

  while (i0 < full0.length) {
    var found0 = full0.indexOf(partial0, i0);

    if (found0 === -1) {
      break;
    }

    var before0 = full0.substr(0, found0);
    i0 = found0 + partial0.length;
    var after0 = full0.substr(i0);
    var i1 = 0;

    while (i1 < full1.length) {
      var found1 = full1.indexOf(partial1, i1);

      if (found1 === -1) {
        break;
      }

      var before1 = full1.substr(0, found1);
      i1 = found1 + partial1.length;
      var after1 = full1.substr(i1);

      if (before0 === before1 && after0 === after1) {
        return {
          before: before0,
          after: after0
        };
      }
    }
  }

  return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
  var a = calendarSystem.markerToArray(dateInfo.marker);
  return {
    marker: dateInfo.marker,
    timeZoneOffset: dateInfo.timeZoneOffset,
    array: a,
    year: a[0],
    month: a[1],
    day: a[2],
    hour: a[3],
    minute: a[4],
    second: a[5],
    millisecond: a[6]
  };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
  var startInfo = expandZonedMarker(start, context.calendarSystem);
  var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
  return {
    date: startInfo,
    start: startInfo,
    end: endInfo,
    timeZone: context.timeZone,
    localeCodes: context.locale.codes,
    defaultSeparator: betterDefaultSeparator || context.defaultSeparator
  };
}
/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/

/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/


var CmdFormatter =
/** @class */
function () {
  function CmdFormatter(cmdStr) {
    this.cmdStr = cmdStr;
  }

  CmdFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  CmdFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return CmdFormatter;
}();

var FuncFormatter =
/** @class */
function () {
  function FuncFormatter(func) {
    this.func = func;
  }

  FuncFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
  };

  FuncFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
    return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
  };

  return FuncFormatter;
}();

function createFormatter(input) {
  if (typeof input === 'object' && input) {
    // non-null object
    return new NativeFormatter(input);
  }

  if (typeof input === 'string') {
    return new CmdFormatter(input);
  }

  if (typeof input === 'function') {
    return new FuncFormatter(input);
  }

  return null;
} // base options
// ------------


var BASE_OPTION_REFINERS = {
  navLinkDayClick: identity,
  navLinkWeekClick: identity,
  duration: createDuration,
  bootstrapFontAwesome: identity,
  buttonIcons: identity,
  customButtons: identity,
  defaultAllDayEventDuration: createDuration,
  defaultTimedEventDuration: createDuration,
  nextDayThreshold: createDuration,
  scrollTime: createDuration,
  scrollTimeReset: Boolean,
  slotMinTime: createDuration,
  slotMaxTime: createDuration,
  dayPopoverFormat: createFormatter,
  slotDuration: createDuration,
  snapDuration: createDuration,
  headerToolbar: identity,
  footerToolbar: identity,
  defaultRangeSeparator: String,
  titleRangeSeparator: String,
  forceEventDuration: Boolean,
  dayHeaders: Boolean,
  dayHeaderFormat: createFormatter,
  dayHeaderClassNames: identity,
  dayHeaderContent: identity,
  dayHeaderDidMount: identity,
  dayHeaderWillUnmount: identity,
  dayCellClassNames: identity,
  dayCellContent: identity,
  dayCellDidMount: identity,
  dayCellWillUnmount: identity,
  initialView: String,
  aspectRatio: Number,
  weekends: Boolean,
  weekNumberCalculation: identity,
  weekNumbers: Boolean,
  weekNumberClassNames: identity,
  weekNumberContent: identity,
  weekNumberDidMount: identity,
  weekNumberWillUnmount: identity,
  editable: Boolean,
  viewClassNames: identity,
  viewDidMount: identity,
  viewWillUnmount: identity,
  nowIndicator: Boolean,
  nowIndicatorClassNames: identity,
  nowIndicatorContent: identity,
  nowIndicatorDidMount: identity,
  nowIndicatorWillUnmount: identity,
  showNonCurrentDates: Boolean,
  lazyFetching: Boolean,
  startParam: String,
  endParam: String,
  timeZoneParam: String,
  timeZone: String,
  locales: identity,
  locale: identity,
  themeSystem: String,
  dragRevertDuration: Number,
  dragScroll: Boolean,
  allDayMaintainDuration: Boolean,
  unselectAuto: Boolean,
  dropAccept: identity,
  eventOrder: parseFieldSpecs,
  eventOrderStrict: Boolean,
  handleWindowResize: Boolean,
  windowResizeDelay: Number,
  longPressDelay: Number,
  eventDragMinDistance: Number,
  expandRows: Boolean,
  height: identity,
  contentHeight: identity,
  direction: String,
  weekNumberFormat: createFormatter,
  eventResizableFromStart: Boolean,
  displayEventTime: Boolean,
  displayEventEnd: Boolean,
  weekText: String,
  weekTextLong: String,
  progressiveEventRendering: Boolean,
  businessHours: identity,
  initialDate: identity,
  now: identity,
  eventDataTransform: identity,
  stickyHeaderDates: identity,
  stickyFooterScrollbar: identity,
  viewHeight: identity,
  defaultAllDay: Boolean,
  eventSourceFailure: identity,
  eventSourceSuccess: identity,
  eventDisplay: String,
  eventStartEditable: Boolean,
  eventDurationEditable: Boolean,
  eventOverlap: identity,
  eventConstraint: identity,
  eventAllow: identity,
  eventBackgroundColor: String,
  eventBorderColor: String,
  eventTextColor: String,
  eventColor: String,
  eventClassNames: identity,
  eventContent: identity,
  eventDidMount: identity,
  eventWillUnmount: identity,
  selectConstraint: identity,
  selectOverlap: identity,
  selectAllow: identity,
  droppable: Boolean,
  unselectCancel: String,
  slotLabelFormat: identity,
  slotLaneClassNames: identity,
  slotLaneContent: identity,
  slotLaneDidMount: identity,
  slotLaneWillUnmount: identity,
  slotLabelClassNames: identity,
  slotLabelContent: identity,
  slotLabelDidMount: identity,
  slotLabelWillUnmount: identity,
  dayMaxEvents: identity,
  dayMaxEventRows: identity,
  dayMinWidth: Number,
  slotLabelInterval: createDuration,
  allDayText: String,
  allDayClassNames: identity,
  allDayContent: identity,
  allDayDidMount: identity,
  allDayWillUnmount: identity,
  slotMinWidth: Number,
  navLinks: Boolean,
  eventTimeFormat: createFormatter,
  rerenderDelay: Number,
  moreLinkText: identity,
  moreLinkHint: identity,
  selectMinDistance: Number,
  selectable: Boolean,
  selectLongPressDelay: Number,
  eventLongPressDelay: Number,
  selectMirror: Boolean,
  eventMaxStack: Number,
  eventMinHeight: Number,
  eventMinWidth: Number,
  eventShortHeight: Number,
  slotEventOverlap: Boolean,
  plugins: identity,
  firstDay: Number,
  dayCount: Number,
  dateAlignment: String,
  dateIncrement: createDuration,
  hiddenDays: identity,
  monthMode: Boolean,
  fixedWeekCount: Boolean,
  validRange: identity,
  visibleRange: identity,
  titleFormat: identity,
  eventInteractive: Boolean,
  // only used by list-view, but languages define the value, so we need it in base options
  noEventsText: String,
  viewHint: identity,
  navLinkHint: identity,
  closeHint: String,
  timeHint: String,
  eventHint: String,
  moreLinkClick: identity,
  moreLinkClassNames: identity,
  moreLinkContent: identity,
  moreLinkDidMount: identity,
  moreLinkWillUnmount: identity
}; // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.

var BASE_OPTION_DEFAULTS = {
  eventDisplay: 'auto',
  defaultRangeSeparator: ' - ',
  titleRangeSeparator: ' \u2013 ',
  defaultTimedEventDuration: '01:00:00',
  defaultAllDayEventDuration: {
    day: 1
  },
  forceEventDuration: false,
  nextDayThreshold: '00:00:00',
  dayHeaders: true,
  initialView: '',
  aspectRatio: 1.35,
  headerToolbar: {
    start: 'title',
    center: '',
    end: 'today prev,next'
  },
  weekends: true,
  weekNumbers: false,
  weekNumberCalculation: 'local',
  editable: false,
  nowIndicator: false,
  scrollTime: '06:00:00',
  scrollTimeReset: true,
  slotMinTime: '00:00:00',
  slotMaxTime: '24:00:00',
  showNonCurrentDates: true,
  lazyFetching: true,
  startParam: 'start',
  endParam: 'end',
  timeZoneParam: 'timeZone',
  timeZone: 'local',
  locales: [],
  locale: '',
  themeSystem: 'standard',
  dragRevertDuration: 500,
  dragScroll: true,
  allDayMaintainDuration: false,
  unselectAuto: true,
  dropAccept: '*',
  eventOrder: 'start,-duration,allDay,title',
  dayPopoverFormat: {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  },
  handleWindowResize: true,
  windowResizeDelay: 100,
  longPressDelay: 1000,
  eventDragMinDistance: 5,
  expandRows: false,
  navLinks: false,
  selectable: false,
  eventMinHeight: 15,
  eventMinWidth: 30,
  eventShortHeight: 30
}; // calendar listeners
// ------------------

var CALENDAR_LISTENER_REFINERS = {
  datesSet: identity,
  eventsSet: identity,
  eventAdd: identity,
  eventChange: identity,
  eventRemove: identity,
  windowResize: identity,
  eventClick: identity,
  eventMouseEnter: identity,
  eventMouseLeave: identity,
  select: identity,
  unselect: identity,
  loading: identity,
  // internal
  _unmount: identity,
  _beforeprint: identity,
  _afterprint: identity,
  _noEventDrop: identity,
  _noEventResize: identity,
  _resize: identity,
  _scrollRequest: identity
}; // calendar-specific options
// -------------------------

var CALENDAR_OPTION_REFINERS = {
  buttonText: identity,
  buttonHints: identity,
  views: identity,
  plugins: identity,
  initialEvents: identity,
  events: identity,
  eventSources: identity
};
var COMPLEX_OPTION_COMPARATORS = {
  headerToolbar: isBoolComplexEqual,
  footerToolbar: isBoolComplexEqual,
  buttonText: isBoolComplexEqual,
  buttonHints: isBoolComplexEqual,
  buttonIcons: isBoolComplexEqual
};

function isBoolComplexEqual(a, b) {
  if (typeof a === 'object' && typeof b === 'object' && a && b) {
    // both non-null objects
    return isPropsEqual(a, b);
  }

  return a === b;
} // view-specific options
// ---------------------


var VIEW_OPTION_REFINERS = {
  type: String,
  component: identity,
  buttonText: String,
  buttonTextKey: String,
  dateProfileGeneratorClass: identity,
  usesMinMaxTime: Boolean,
  classNames: identity,
  content: identity,
  didMount: identity,
  willUnmount: identity
}; // util funcs
// ----------------------------------------------------------------------------------------------------

function mergeRawOptions(optionSets) {
  return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}

function refineProps(input, refiners) {
  var refined = {};
  var extra = {};

  for (var propName in refiners) {
    if (propName in input) {
      refined[propName] = refiners[propName](input[propName]);
    }
  }

  for (var propName in input) {
    if (!(propName in refiners)) {
      extra[propName] = input[propName];
    }
  }

  return {
    refined: refined,
    extra: extra
  };
}

function identity(raw) {
  return raw;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
  var eventStore = createEmptyEventStore();
  var eventRefiners = buildEventRefiners(context);

  for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
    var rawEvent = rawEvents_1[_i];
    var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);

    if (tuple) {
      eventTupleToStore(tuple, eventStore);
    }
  }

  return eventStore;
}

function eventTupleToStore(tuple, eventStore) {
  if (eventStore === void 0) {
    eventStore = createEmptyEventStore();
  }

  eventStore.defs[tuple.def.defId] = tuple.def;

  if (tuple.instance) {
    eventStore.instances[tuple.instance.instanceId] = tuple.instance;
  }

  return eventStore;
} // retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?


function getRelevantEvents(eventStore, instanceId) {
  var instance = eventStore.instances[instanceId];

  if (instance) {
    var def_1 = eventStore.defs[instance.defId]; // get events/instances with same group

    var newStore = filterEventStoreDefs(eventStore, function (lookDef) {
      return isEventDefsGrouped(def_1, lookDef);
    }); // add the original
    // TODO: wish we could use eventTupleToStore or something like it

    newStore.defs[def_1.defId] = def_1;
    newStore.instances[instance.instanceId] = instance;
    return newStore;
  }

  return createEmptyEventStore();
}

function isEventDefsGrouped(def0, def1) {
  return Boolean(def0.groupId && def0.groupId === def1.groupId);
}

function createEmptyEventStore() {
  return {
    defs: {},
    instances: {}
  };
}

function mergeEventStores(store0, store1) {
  return {
    defs: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, store0.defs), store1.defs),
    instances: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, store0.instances), store1.instances)
  };
}

function filterEventStoreDefs(eventStore, filterFunc) {
  var defs = filterHash(eventStore.defs, filterFunc);
  var instances = filterHash(eventStore.instances, function (instance) {
    return defs[instance.defId] // still exists?
    ;
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeSubEventStore(master, sub) {
  var defs = master.defs,
      instances = master.instances;
  var filteredDefs = {};
  var filteredInstances = {};

  for (var defId in defs) {
    if (!sub.defs[defId]) {
      // not explicitly excluded
      filteredDefs[defId] = defs[defId];
    }
  }

  for (var instanceId in instances) {
    if (!sub.instances[instanceId] && // not explicitly excluded
    filteredDefs[instances[instanceId].defId] // def wasn't filtered away
    ) {
      filteredInstances[instanceId] = instances[instanceId];
    }
  }

  return {
    defs: filteredDefs,
    instances: filteredInstances
  };
}

function normalizeConstraint(input, context) {
  if (Array.isArray(input)) {
    return parseEvents(input, null, context, true); // allowOpenRange=true
  }

  if (typeof input === 'object' && input) {
    // non-null object
    return parseEvents([input], null, context, true); // allowOpenRange=true
  }

  if (input != null) {
    return String(input);
  }

  return null;
}

function parseClassNames(raw) {
  if (Array.isArray(raw)) {
    return raw;
  }

  if (typeof raw === 'string') {
    return raw.split(/\s+/);
  }

  return [];
} // TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props


var EVENT_UI_REFINERS = {
  display: String,
  editable: Boolean,
  startEditable: Boolean,
  durationEditable: Boolean,
  constraint: identity,
  overlap: identity,
  allow: identity,
  className: parseClassNames,
  classNames: parseClassNames,
  color: String,
  backgroundColor: String,
  borderColor: String,
  textColor: String
};
var EMPTY_EVENT_UI = {
  display: null,
  startEditable: null,
  durationEditable: null,
  constraints: [],
  overlap: null,
  allows: [],
  backgroundColor: '',
  borderColor: '',
  textColor: '',
  classNames: []
};

function createEventUi(refined, context) {
  var constraint = normalizeConstraint(refined.constraint, context);
  return {
    display: refined.display || null,
    startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
    durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
    constraints: constraint != null ? [constraint] : [],
    overlap: refined.overlap != null ? refined.overlap : null,
    allows: refined.allow != null ? [refined.allow] : [],
    backgroundColor: refined.backgroundColor || refined.color || '',
    borderColor: refined.borderColor || refined.color || '',
    textColor: refined.textColor || '',
    classNames: (refined.className || []).concat(refined.classNames || []) // join singular and plural

  };
} // TODO: prevent against problems with <2 args!


function combineEventUis(uis) {
  return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}

function combineTwoEventUis(item0, item1) {
  return {
    display: item1.display != null ? item1.display : item0.display,
    startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
    durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
    constraints: item0.constraints.concat(item1.constraints),
    overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
    allows: item0.allows.concat(item1.allows),
    backgroundColor: item1.backgroundColor || item0.backgroundColor,
    borderColor: item1.borderColor || item0.borderColor,
    textColor: item1.textColor || item0.textColor,
    classNames: item0.classNames.concat(item1.classNames)
  };
}

var EVENT_NON_DATE_REFINERS = {
  id: String,
  groupId: String,
  title: String,
  url: String,
  interactive: Boolean
};
var EVENT_DATE_REFINERS = {
  start: identity,
  end: identity,
  date: identity,
  allDay: Boolean
};

var EVENT_REFINERS = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), {
  extendedProps: identity
});

function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  var _a = refineEventDef(raw, context, refiners),
      refined = _a.refined,
      extra = _a.extra;

  var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
  var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);

  if (recurringRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
    def.recurringDef = {
      typeId: recurringRes.typeId,
      typeData: recurringRes.typeData,
      duration: recurringRes.duration
    };
    return {
      def: def,
      instance: null
    };
  }

  var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);

  if (singleRes) {
    var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
    var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
    return {
      def: def,
      instance: instance
    };
  }

  return null;
}

function refineEventDef(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventRefiners(context);
  }

  return refineProps(raw, refiners);
}

function buildEventRefiners(context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/


function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
  var def = {
    title: refined.title || '',
    groupId: refined.groupId || '',
    publicId: refined.id || '',
    url: refined.url || '',
    recurringDef: null,
    defId: guid(),
    sourceId: sourceId,
    allDay: allDay,
    hasEnd: hasEnd,
    interactive: refined.interactive,
    ui: createEventUi(refined, context),
    extendedProps: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, refined.extendedProps || {}), extra)
  };

  for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
    var memberAdder = _a[_i];

    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(def, memberAdder(refined));
  } // help out EventApi from having user modify props


  Object.freeze(def.ui.classNames);
  Object.freeze(def.extendedProps);
  return def;
}

function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
  var allDay = refined.allDay;
  var startMeta;
  var startMarker = null;
  var hasEnd = false;
  var endMeta;
  var endMarker = null;
  var startInput = refined.start != null ? refined.start : refined.date;
  startMeta = context.dateEnv.createMarkerMeta(startInput);

  if (startMeta) {
    startMarker = startMeta.marker;
  } else if (!allowOpenRange) {
    return null;
  }

  if (refined.end != null) {
    endMeta = context.dateEnv.createMarkerMeta(refined.end);
  }

  if (allDay == null) {
    if (defaultAllDay != null) {
      allDay = defaultAllDay;
    } else {
      // fall back to the date props LAST
      allDay = (!startMeta || startMeta.isTimeUnspecified) && (!endMeta || endMeta.isTimeUnspecified);
    }
  }

  if (allDay && startMarker) {
    startMarker = startOfDay(startMarker);
  }

  if (endMeta) {
    endMarker = endMeta.marker;

    if (allDay) {
      endMarker = startOfDay(endMarker);
    }

    if (startMarker && endMarker <= startMarker) {
      endMarker = null;
    }
  }

  if (endMarker) {
    hasEnd = true;
  } else if (!allowOpenRange) {
    hasEnd = context.options.forceEventDuration || false;
    endMarker = context.dateEnv.add(startMarker, allDay ? context.options.defaultAllDayEventDuration : context.options.defaultTimedEventDuration);
  }

  return {
    allDay: allDay,
    hasEnd: hasEnd,
    range: {
      start: startMarker,
      end: endMarker
    },
    forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
    forcedEndTzo: endMeta ? endMeta.forcedTzo : null
  };
}

function computeIsDefaultAllDay(eventSource, context) {
  var res = null;

  if (eventSource) {
    res = eventSource.defaultAllDay;
  }

  if (res == null) {
    res = context.options.defaultAllDay;
  }

  return res;
}
/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.


function computeAlignedDayRange(timedRange) {
  var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
  var start = startOfDay(timedRange.start);
  var end = addDays(start, dayCnt);
  return {
    start: start,
    end: end
  };
} // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg


function computeVisibleDayRange(timedRange, nextDayThreshold) {
  if (nextDayThreshold === void 0) {
    nextDayThreshold = createDuration(0);
  }

  var startDay = null;
  var endDay = null;

  if (timedRange.end) {
    endDay = startOfDay(timedRange.end);
    var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
    // If the end time is actually inclusively part of the next day and is equal to or
    // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
    // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.

    if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
      endDay = addDays(endDay, 1);
    }
  }

  if (timedRange.start) {
    startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
    // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.

    if (endDay && endDay <= startDay) {
      endDay = addDays(startDay, 1);
    }
  }

  return {
    start: startDay,
    end: endDay
  };
} // spans from one day into another?


function isMultiDayRange(range) {
  var visibleRange = computeVisibleDayRange(range);
  return diffDays(visibleRange.start, visibleRange.end) > 1;
}

function diffDates(date0, date1, dateEnv, largeUnit) {
  if (largeUnit === 'year') {
    return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
  }

  if (largeUnit === 'month') {
    return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
  }

  return diffDayAndTime(date0, date1); // returns a duration
}

function parseRange(input, dateEnv) {
  var start = null;
  var end = null;

  if (input.start) {
    start = dateEnv.createMarker(input.start);
  }

  if (input.end) {
    end = dateEnv.createMarker(input.end);
  }

  if (!start && !end) {
    return null;
  }

  if (start && end && end < start) {
    return null;
  }

  return {
    start: start,
    end: end
  };
} // SIDE-EFFECT: will mutate ranges.
// Will return a new array result.


function invertRanges(ranges, constraintRange) {
  var invertedRanges = [];
  var start = constraintRange.start; // the end of the previous range. the start of the new range

  var i;
  var dateRange; // ranges need to be in order. required for our date-walking algorithm

  ranges.sort(compareRanges);

  for (i = 0; i < ranges.length; i += 1) {
    dateRange = ranges[i]; // add the span of time before the event (if there is any)

    if (dateRange.start > start) {
      // compare millisecond time (skip any ambig logic)
      invertedRanges.push({
        start: start,
        end: dateRange.start
      });
    }

    if (dateRange.end > start) {
      start = dateRange.end;
    }
  } // add the span of time after the last event (if there is any)


  if (start < constraintRange.end) {
    // compare millisecond time (skip any ambig logic)
    invertedRanges.push({
      start: start,
      end: constraintRange.end
    });
  }

  return invertedRanges;
}

function compareRanges(range0, range1) {
  return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}

function intersectRanges(range0, range1) {
  var start = range0.start,
      end = range0.end;
  var newRange = null;

  if (range1.start !== null) {
    if (start === null) {
      start = range1.start;
    } else {
      start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
    }
  }

  if (range1.end != null) {
    if (end === null) {
      end = range1.end;
    } else {
      end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
    }
  }

  if (start === null || end === null || start < end) {
    newRange = {
      start: start,
      end: end
    };
  }

  return newRange;
}

function rangesEqual(range0, range1) {
  return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) && (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}

function rangesIntersect(range0, range1) {
  return (range0.end === null || range1.start === null || range0.end > range1.start) && (range0.start === null || range1.end === null || range0.start < range1.end);
}

function rangeContainsRange(outerRange, innerRange) {
  return (outerRange.start === null || innerRange.start !== null && innerRange.start >= outerRange.start) && (outerRange.end === null || innerRange.end !== null && innerRange.end <= outerRange.end);
}

function rangeContainsMarker(range, date) {
  return (range.start === null || date >= range.start) && (range.end === null || date < range.end);
} // If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).


function constrainMarkerToRange(date, range) {
  if (range.start != null && date < range.start) {
    return range.start;
  }

  if (range.end != null && date >= range.end) {
    return new Date(range.end.valueOf() - 1);
  }

  return date;
}
/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/


function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
  var inverseBgByGroupId = {};
  var inverseBgByDefId = {};
  var defByGroupId = {};
  var bgRanges = [];
  var fgRanges = [];
  var eventUis = compileEventUis(eventStore.defs, eventUiBases);

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    var ui = eventUis[def.defId];

    if (ui.display === 'inverse-background') {
      if (def.groupId) {
        inverseBgByGroupId[def.groupId] = [];

        if (!defByGroupId[def.groupId]) {
          defByGroupId[def.groupId] = def;
        }
      } else {
        inverseBgByDefId[defId] = [];
      }
    }
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = eventStore.defs[instance.defId];
    var ui = eventUis[def.defId];
    var origRange = instance.range;
    var normalRange = !def.allDay && nextDayThreshold ? computeVisibleDayRange(origRange, nextDayThreshold) : origRange;
    var slicedRange = intersectRanges(normalRange, framingRange);

    if (slicedRange) {
      if (ui.display === 'inverse-background') {
        if (def.groupId) {
          inverseBgByGroupId[def.groupId].push(slicedRange);
        } else {
          inverseBgByDefId[instance.defId].push(slicedRange);
        }
      } else if (ui.display !== 'none') {
        (ui.display === 'background' ? bgRanges : fgRanges).push({
          def: def,
          ui: ui,
          instance: instance,
          range: slicedRange,
          isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
          isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf()
        });
      }
    }
  }

  for (var groupId in inverseBgByGroupId) {
    // BY GROUP
    var ranges = inverseBgByGroupId[groupId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
      var invertedRange = invertedRanges_1[_i];
      var def = defByGroupId[groupId];
      var ui = eventUis[def.defId];
      bgRanges.push({
        def: def,
        ui: ui,
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  for (var defId in inverseBgByDefId) {
    var ranges = inverseBgByDefId[defId];
    var invertedRanges = invertRanges(ranges, framingRange);

    for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
      var invertedRange = invertedRanges_2[_a];
      bgRanges.push({
        def: eventStore.defs[defId],
        ui: eventUis[defId],
        instance: null,
        range: invertedRange,
        isStart: false,
        isEnd: false
      });
    }
  }

  return {
    bg: bgRanges,
    fg: fgRanges
  };
}

function hasBgRendering(def) {
  return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}

function setElSeg(el, seg) {
  el.fcSeg = seg;
}

function getElSeg(el) {
  return el.fcSeg || el.parentNode.fcSeg || // for the harness
  null;
} // event ui computation


function compileEventUis(eventDefs, eventUiBases) {
  return mapHash(eventDefs, function (eventDef) {
    return compileEventUi(eventDef, eventUiBases);
  });
}

function compileEventUi(eventDef, eventUiBases) {
  var uis = [];

  if (eventUiBases['']) {
    uis.push(eventUiBases['']);
  }

  if (eventUiBases[eventDef.defId]) {
    uis.push(eventUiBases[eventDef.defId]);
  }

  uis.push(eventDef.ui);
  return combineEventUis(uis);
}

function sortEventSegs(segs, eventOrderSpecs) {
  var objs = segs.map(buildSegCompareObj);
  objs.sort(function (obj0, obj1) {
    return compareByFieldSpecs(obj0, obj1, eventOrderSpecs);
  });
  return objs.map(function (c) {
    return c._seg;
  });
} // returns a object with all primitive props that can be compared


function buildSegCompareObj(seg) {
  var eventRange = seg.eventRange;
  var eventDef = eventRange.def;
  var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
  var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events

  var end = range.end ? range.end.valueOf() : 0; // "

  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef.extendedProps), eventDef), {
    id: eventDef.publicId,
    start: start,
    end: end,
    duration: end - start,
    allDay: Number(eventDef.allDay),
    _seg: seg
  });
}

function computeSegDraggable(seg, context) {
  var pluginHooks = context.pluginHooks;
  var transformers = pluginHooks.isDraggableTransformers;
  var _a = seg.eventRange,
      def = _a.def,
      ui = _a.ui;
  var val = ui.startEditable;

  for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
    var transformer = transformers_1[_i];
    val = transformer(val, def, ui, context);
  }

  return val;
}

function computeSegStartResizable(seg, context) {
  return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}

function computeSegEndResizable(seg, context) {
  return seg.isEnd && seg.eventRange.ui.durationEditable;
}

function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var displayEventTime = options.displayEventTime,
      displayEventEnd = options.displayEventEnd;
  var eventDef = seg.eventRange.def;
  var eventInstance = seg.eventRange.instance;

  if (displayEventTime == null) {
    displayEventTime = defaultDisplayEventTime !== false;
  }

  if (displayEventEnd == null) {
    displayEventEnd = defaultDisplayEventEnd !== false;
  }

  var wholeEventStart = eventInstance.range.start;
  var wholeEventEnd = eventInstance.range.end;
  var segStart = startOverride || seg.start || seg.eventRange.range.start;
  var segEnd = endOverride || seg.end || seg.eventRange.range.end;
  var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
  var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();

  if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
    segStart = isStartDay ? wholeEventStart : segStart;
    segEnd = isEndDay ? wholeEventEnd : segEnd;

    if (displayEventEnd && eventDef.hasEnd) {
      return dateEnv.formatRange(segStart, segEnd, timeFormat, {
        forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
        forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo
      });
    }

    return dateEnv.format(segStart, timeFormat, {
      forcedTzo: startOverride ? null : eventInstance.forcedStartTzo // nooooo, same

    });
  }

  return '';
}

function getSegMeta(seg, todayRange, nowDate) {
  var segRange = seg.eventRange.range;
  return {
    isPast: segRange.end < (nowDate || todayRange.start),
    isFuture: segRange.start >= (nowDate || todayRange.end),
    isToday: todayRange && rangeContainsMarker(todayRange, segRange.start)
  };
}

function getEventClassNames(props) {
  var classNames = ['fc-event'];

  if (props.isMirror) {
    classNames.push('fc-event-mirror');
  }

  if (props.isDraggable) {
    classNames.push('fc-event-draggable');
  }

  if (props.isStartResizable || props.isEndResizable) {
    classNames.push('fc-event-resizable');
  }

  if (props.isDragging) {
    classNames.push('fc-event-dragging');
  }

  if (props.isResizing) {
    classNames.push('fc-event-resizing');
  }

  if (props.isSelected) {
    classNames.push('fc-event-selected');
  }

  if (props.isStart) {
    classNames.push('fc-event-start');
  }

  if (props.isEnd) {
    classNames.push('fc-event-end');
  }

  if (props.isPast) {
    classNames.push('fc-event-past');
  }

  if (props.isToday) {
    classNames.push('fc-event-today');
  }

  if (props.isFuture) {
    classNames.push('fc-event-future');
  }

  return classNames;
}

function buildEventRangeKey(eventRange) {
  return eventRange.instance ? eventRange.instance.instanceId : eventRange.def.defId + ":" + eventRange.range.start.toISOString(); // inverse-background events don't have specific instances. TODO: better solution
}

function getSegAnchorAttrs(seg, context) {
  var _a = seg.eventRange,
      def = _a.def,
      instance = _a.instance;
  var url = def.url;

  if (url) {
    return {
      href: url
    };
  }

  var emitter = context.emitter,
      options = context.options;
  var eventInteractive = options.eventInteractive;

  if (eventInteractive == null) {
    eventInteractive = def.interactive;

    if (eventInteractive == null) {
      eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
    }
  } // mock what happens in EventClicking


  if (eventInteractive) {
    // only attach keyboard-related handlers because click handler is already done in EventClicking
    return createAriaKeyboardAttrs(function (ev) {
      emitter.trigger('eventClick', {
        el: ev.target,
        event: new EventApi(context, def, instance),
        jsEvent: ev,
        view: context.viewApi
      });
    });
  }

  return {};
}

var STANDARD_PROPS = {
  start: identity,
  end: identity,
  allDay: Boolean
};

function parseDateSpan(raw, dateEnv, defaultDuration) {
  var span = parseOpenDateSpan(raw, dateEnv);
  var range = span.range;

  if (!range.start) {
    return null;
  }

  if (!range.end) {
    if (defaultDuration == null) {
      return null;
    }

    range.end = dateEnv.add(range.start, defaultDuration);
  }

  return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/


function parseOpenDateSpan(raw, dateEnv) {
  var _a = refineProps(raw, STANDARD_PROPS),
      standardProps = _a.refined,
      extra = _a.extra;

  var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
  var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
  var allDay = standardProps.allDay;

  if (allDay == null) {
    allDay = startMeta && startMeta.isTimeUnspecified && (!endMeta || endMeta.isTimeUnspecified);
  }

  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    range: {
      start: startMeta ? startMeta.marker : null,
      end: endMeta ? endMeta.marker : null
    },
    allDay: allDay
  }, extra);
}

function isDateSpansEqual(span0, span1) {
  return rangesEqual(span0.range, span1.range) && span0.allDay === span1.allDay && isSpanPropsEqual(span0, span1);
} // the NON-DATE-RELATED props


function isSpanPropsEqual(span0, span1) {
  for (var propName in span1) {
    if (propName !== 'range' && propName !== 'allDay') {
      if (span0[propName] !== span1[propName]) {
        return false;
      }
    }
  } // are there any props that span0 has that span1 DOESN'T have?
  // both have range/allDay, so no need to special-case.


  for (var propName in span0) {
    if (!(propName in span1)) {
      return false;
    }
  }

  return true;
}

function buildDateSpanApi(span, dateEnv) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApi(span.range, dateEnv, span.allDay)), {
    allDay: span.allDay
  });
}

function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApi(range, dateEnv, omitTime)), {
    timeZone: dateEnv.timeZone
  });
}

function buildRangeApi(range, dateEnv, omitTime) {
  return {
    start: dateEnv.toDate(range.start),
    end: dateEnv.toDate(range.end),
    startStr: dateEnv.formatIso(range.start, {
      omitTime: omitTime
    }),
    endStr: dateEnv.formatIso(range.end, {
      omitTime: omitTime
    })
  };
}

function fabricateEventRange(dateSpan, eventUiBases, context) {
  var res = refineEventDef({
    editable: false
  }, context);
  var def = parseEventDef(res.refined, res.extra, '', // sourceId
  dateSpan.allDay, true, // hasEnd
  context);
  return {
    def: def,
    ui: compileEventUi(def, eventUiBases),
    instance: createEventInstance(def.defId, dateSpan.range),
    range: dateSpan.range,
    isStart: true,
    isEnd: true
  };
}

function triggerDateSelect(selection, pev, context) {
  context.emitter.trigger('select', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildDateSpanApiWithContext(selection, context)), {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  }));
}

function triggerDateUnselect(pev, context) {
  context.emitter.trigger('unselect', {
    jsEvent: pev ? pev.origEvent : null,
    view: context.viewApi || context.calendarApi.view
  });
}

function buildDateSpanApiWithContext(dateSpan, context) {
  var props = {};

  for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(props, transform(dateSpan, context));
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(props, buildDateSpanApi(dateSpan, context.dateEnv));

  return props;
} // Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd


function getDefaultEventEnd(allDay, marker, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var end = marker;

  if (allDay) {
    end = startOfDay(end);
    end = dateEnv.add(end, options.defaultAllDayEventDuration);
  } else {
    end = dateEnv.add(end, options.defaultTimedEventDuration);
  }

  return end;
} // applies the mutation to ALL defs/instances within the event store


function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
  var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
  var dest = createEmptyEventStore();

  for (var defId in eventStore.defs) {
    var def = eventStore.defs[defId];
    dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
  }

  for (var instanceId in eventStore.instances) {
    var instance = eventStore.instances[instanceId];
    var def = dest.defs[instance.defId]; // important to grab the newly modified def

    dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
  }

  return dest;
}

function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
  var standardProps = mutation.standardProps || {}; // if hasEnd has not been specified, guess a good value based on deltas.
  // if duration will change, there's no way the default duration will persist,
  // and thus, we need to mark the event as having a real end

  if (standardProps.hasEnd == null && eventConfig.durationEditable && (mutation.startDelta || mutation.endDelta)) {
    standardProps.hasEnd = true; // TODO: is this mutation okay?
  }

  var copy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef), standardProps), {
    ui: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef.ui), standardProps.ui)
  });

  if (mutation.extendedProps) {
    copy.extendedProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, copy.extendedProps), mutation.extendedProps);
  }

  for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
    var applier = _a[_i];
    applier(copy, mutation, context);
  }

  if (!copy.hasEnd && context.options.forceEventDuration) {
    copy.hasEnd = true;
  }

  return copy;
}

function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
  var dateEnv = context.dateEnv;
  var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
  var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;

  var copy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventInstance);

  if (forceAllDay) {
    copy.range = computeAlignedDayRange(copy.range);
  }

  if (mutation.datesDelta && eventConfig.startEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.datesDelta),
      end: dateEnv.add(copy.range.end, mutation.datesDelta)
    };
  }

  if (mutation.startDelta && eventConfig.durationEditable) {
    copy.range = {
      start: dateEnv.add(copy.range.start, mutation.startDelta),
      end: copy.range.end
    };
  }

  if (mutation.endDelta && eventConfig.durationEditable) {
    copy.range = {
      start: copy.range.start,
      end: dateEnv.add(copy.range.end, mutation.endDelta)
    };
  }

  if (clearEnd) {
    copy.range = {
      start: copy.range.start,
      end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context)
    };
  } // in case event was all-day but the supplied deltas were not
  // better util for this?


  if (eventDef.allDay) {
    copy.range = {
      start: startOfDay(copy.range.start),
      end: startOfDay(copy.range.end)
    };
  } // handle invalid durations


  if (copy.range.end < copy.range.start) {
    copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
  }

  return copy;
} // no public types yet. when there are, export from:
// import {} from './api-type-deps'


var ViewApi =
/** @class */
function () {
  function ViewApi(type, getCurrentData, dateEnv) {
    this.type = type;
    this.getCurrentData = getCurrentData;
    this.dateEnv = dateEnv;
  }

  Object.defineProperty(ViewApi.prototype, "calendar", {
    get: function () {
      return this.getCurrentData().calendarApi;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "title", {
    get: function () {
      return this.getCurrentData().viewTitle;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeStart", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "activeEnd", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentStart", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(ViewApi.prototype, "currentEnd", {
    get: function () {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    },
    enumerable: false,
    configurable: true
  });

  ViewApi.prototype.getOption = function (name) {
    return this.getCurrentData().options[name]; // are the view-specific options
  };

  return ViewApi;
}();

var EVENT_SOURCE_REFINERS = {
  id: String,
  defaultAllDay: Boolean,
  url: String,
  format: String,
  events: identity,
  eventDataTransform: identity,
  // for any network-related sources
  success: identity,
  failure: identity
};

function parseEventSource(raw, context, refiners) {
  if (refiners === void 0) {
    refiners = buildEventSourceRefiners(context);
  }

  var rawObj;

  if (typeof raw === 'string') {
    rawObj = {
      url: raw
    };
  } else if (typeof raw === 'function' || Array.isArray(raw)) {
    rawObj = {
      events: raw
    };
  } else if (typeof raw === 'object' && raw) {
    // not null
    rawObj = raw;
  }

  if (rawObj) {
    var _a = refineProps(rawObj, refiners),
        refined = _a.refined,
        extra = _a.extra;

    var metaRes = buildEventSourceMeta(refined, context);

    if (metaRes) {
      return {
        _raw: raw,
        isFetching: false,
        latestFetchId: '',
        fetchRange: null,
        defaultAllDay: refined.defaultAllDay,
        eventDataTransform: refined.eventDataTransform,
        success: refined.success,
        failure: refined.failure,
        publicId: refined.id || '',
        sourceId: guid(),
        sourceDefId: metaRes.sourceDefId,
        meta: metaRes.meta,
        ui: createEventUi(refined, context),
        extendedProps: extra
      };
    }
  }

  return null;
}

function buildEventSourceRefiners(context) {
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}

function buildEventSourceMeta(raw, context) {
  var defs = context.pluginHooks.eventSourceDefs;

  for (var i = defs.length - 1; i >= 0; i -= 1) {
    // later-added plugins take precedence
    var def = defs[i];
    var meta = def.parseMeta(raw);

    if (meta) {
      return {
        sourceDefId: i,
        meta: meta
      };
    }
  }

  return null;
}

function reduceCurrentDate(currentDate, action) {
  switch (action.type) {
    case 'CHANGE_DATE':
      return action.dateMarker;

    default:
      return currentDate;
  }
}

function getInitialDate(options, dateEnv) {
  var initialDateInput = options.initialDate; // compute the initial ambig-timezone date

  if (initialDateInput != null) {
    return dateEnv.createMarker(initialDateInput);
  }

  return getNow(options.now, dateEnv); // getNow already returns unzoned
}

function getNow(nowInput, dateEnv) {
  if (typeof nowInput === 'function') {
    nowInput = nowInput();
  }

  if (nowInput == null) {
    return dateEnv.createNowMarker();
  }

  return dateEnv.createMarker(nowInput);
}

var CalendarApi =
/** @class */
function () {
  function CalendarApi() {}

  CalendarApi.prototype.getCurrentData = function () {
    return this.currentDataManager.getCurrentData();
  };

  CalendarApi.prototype.dispatch = function (action) {
    return this.currentDataManager.dispatch(action);
  };

  Object.defineProperty(CalendarApi.prototype, "view", {
    get: function () {
      return this.getCurrentData().viewApi;
    } // for public API
    ,
    enumerable: false,
    configurable: true
  });

  CalendarApi.prototype.batchRendering = function (callback) {
    callback();
  };

  CalendarApi.prototype.updateSize = function () {
    this.trigger('_resize', true);
  }; // Options
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.setOption = function (name, val) {
    this.dispatch({
      type: 'SET_OPTION',
      optionName: name,
      rawOptionValue: val
    });
  };

  CalendarApi.prototype.getOption = function (name) {
    return this.currentDataManager.currentCalendarOptionsInput[name];
  };

  CalendarApi.prototype.getAvailableLocaleCodes = function () {
    return Object.keys(this.getCurrentData().availableRawLocales);
  }; // Trigger
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.on = function (handlerName, handler) {
    var currentDataManager = this.currentDataManager;

    if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
      currentDataManager.emitter.on(handlerName, handler);
    } else {
      console.warn("Unknown listener name '" + handlerName + "'");
    }
  };

  CalendarApi.prototype.off = function (handlerName, handler) {
    this.currentDataManager.emitter.off(handlerName, handler);
  }; // not meant for public use


  CalendarApi.prototype.trigger = function (handlerName) {
    var _a;

    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    (_a = this.currentDataManager.emitter).trigger.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([handlerName], args));
  }; // View
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.changeView = function (viewType, dateOrRange) {
    var _this = this;

    this.batchRendering(function () {
      _this.unselect();

      if (dateOrRange) {
        if (dateOrRange.start && dateOrRange.end) {
          // a range
          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType
          });

          _this.dispatch({
            type: 'SET_OPTION',
            optionName: 'visibleRange',
            rawOptionValue: dateOrRange
          });
        } else {
          var dateEnv = _this.getCurrentData().dateEnv;

          _this.dispatch({
            type: 'CHANGE_VIEW_TYPE',
            viewType: viewType,
            dateMarker: dateEnv.createMarker(dateOrRange)
          });
        }
      } else {
        _this.dispatch({
          type: 'CHANGE_VIEW_TYPE',
          viewType: viewType
        });
      }
    });
  }; // Forces navigation to a view for the given date.
  // `viewType` can be a specific view name or a generic one like "week" or "day".
  // needs to change


  CalendarApi.prototype.zoomTo = function (dateMarker, viewType) {
    var state = this.getCurrentData();
    var spec;
    viewType = viewType || 'day'; // day is default zoom

    spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
    this.unselect();

    if (spec) {
      this.dispatch({
        type: 'CHANGE_VIEW_TYPE',
        viewType: spec.type,
        dateMarker: dateMarker
      });
    } else {
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: dateMarker
      });
    }
  }; // Given a duration singular unit, like "week" or "day", finds a matching view spec.
  // Preference is given to views that have corresponding buttons.


  CalendarApi.prototype.getUnitViewSpec = function (unit) {
    var _a = this.getCurrentData(),
        viewSpecs = _a.viewSpecs,
        toolbarConfig = _a.toolbarConfig;

    var viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
    var i;
    var spec;

    for (var viewType in viewSpecs) {
      viewTypes.push(viewType);
    }

    for (i = 0; i < viewTypes.length; i += 1) {
      spec = viewSpecs[viewTypes[i]];

      if (spec) {
        if (spec.singleUnit === unit) {
          return spec;
        }
      }
    }

    return null;
  }; // Current Date
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.prev = function () {
    this.unselect();
    this.dispatch({
      type: 'PREV'
    });
  };

  CalendarApi.prototype.next = function () {
    this.unselect();
    this.dispatch({
      type: 'NEXT'
    });
  };

  CalendarApi.prototype.prevYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, -1)
    });
  };

  CalendarApi.prototype.nextYear = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.addYears(state.currentDate, 1)
    });
  };

  CalendarApi.prototype.today = function () {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: getNow(state.calendarOptions.now, state.dateEnv)
    });
  };

  CalendarApi.prototype.gotoDate = function (zonedDateInput) {
    var state = this.getCurrentData();
    this.unselect();
    this.dispatch({
      type: 'CHANGE_DATE',
      dateMarker: state.dateEnv.createMarker(zonedDateInput)
    });
  };

  CalendarApi.prototype.incrementDate = function (deltaInput) {
    var state = this.getCurrentData();
    var delta = createDuration(deltaInput);

    if (delta) {
      // else, warn about invalid input?
      this.unselect();
      this.dispatch({
        type: 'CHANGE_DATE',
        dateMarker: state.dateEnv.add(state.currentDate, delta)
      });
    }
  }; // for external API


  CalendarApi.prototype.getDate = function () {
    var state = this.getCurrentData();
    return state.dateEnv.toDate(state.currentDate);
  }; // Date Formatting Utils
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.formatDate = function (d, formatter) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
  }; // `settings` is for formatter AND isEndExclusive


  CalendarApi.prototype.formatRange = function (d0, d1, settings) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
  };

  CalendarApi.prototype.formatIso = function (d, omitTime) {
    var dateEnv = this.getCurrentData().dateEnv;
    return dateEnv.formatIso(dateEnv.createMarker(d), {
      omitTime: omitTime
    });
  }; // Date Selection / Event Selection / DayClick
  // -----------------------------------------------------------------------------------------------------------------
  // this public method receives start/end dates in any format, with any timezone
  // NOTE: args were changed from v3


  CalendarApi.prototype.select = function (dateOrObj, endDate) {
    var selectionInput;

    if (endDate == null) {
      if (dateOrObj.start != null) {
        selectionInput = dateOrObj;
      } else {
        selectionInput = {
          start: dateOrObj,
          end: null
        };
      }
    } else {
      selectionInput = {
        start: dateOrObj,
        end: endDate
      };
    }

    var state = this.getCurrentData();
    var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({
      days: 1
    }));

    if (selection) {
      // throw parse error otherwise?
      this.dispatch({
        type: 'SELECT_DATES',
        selection: selection
      });
      triggerDateSelect(selection, null, state);
    }
  }; // public method


  CalendarApi.prototype.unselect = function (pev) {
    var state = this.getCurrentData();

    if (state.dateSelection) {
      this.dispatch({
        type: 'UNSELECT_DATES'
      });
      triggerDateUnselect(pev, state);
    }
  }; // Public Events API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.addEvent = function (eventInput, sourceInput) {
    if (eventInput instanceof EventApi) {
      var def = eventInput._def;
      var instance = eventInput._instance;
      var currentData = this.getCurrentData(); // not already present? don't want to add an old snapshot

      if (!currentData.eventStore.defs[def.defId]) {
        this.dispatch({
          type: 'ADD_EVENTS',
          eventStore: eventTupleToStore({
            def: def,
            instance: instance
          }) // TODO: better util for two args?

        });
        this.triggerEventAdd(eventInput);
      }

      return eventInput;
    }

    var state = this.getCurrentData();
    var eventSource;

    if (sourceInput instanceof EventSourceApi) {
      eventSource = sourceInput.internalEventSource;
    } else if (typeof sourceInput === 'boolean') {
      if (sourceInput) {
        // true. part of the first event source
        eventSource = hashValuesToArray(state.eventSources)[0];
      }
    } else if (sourceInput != null) {
      // an ID. accepts a number too
      var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function

      if (!sourceApi) {
        console.warn("Could not find an event source with ID \"" + sourceInput + "\""); // TODO: test

        return null;
      }

      eventSource = sourceApi.internalEventSource;
    }

    var tuple = parseEvent(eventInput, eventSource, state, false);

    if (tuple) {
      var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
      this.dispatch({
        type: 'ADD_EVENTS',
        eventStore: eventTupleToStore(tuple)
      });
      this.triggerEventAdd(newEventApi);
      return newEventApi;
    }

    return null;
  };

  CalendarApi.prototype.triggerEventAdd = function (eventApi) {
    var _this = this;

    var emitter = this.getCurrentData().emitter;
    emitter.trigger('eventAdd', {
      event: eventApi,
      relatedEvents: [],
      revert: function () {
        _this.dispatch({
          type: 'REMOVE_EVENTS',
          eventStore: eventApiToStore(eventApi)
        });
      }
    });
  }; // TODO: optimize


  CalendarApi.prototype.getEventById = function (id) {
    var state = this.getCurrentData();
    var _a = state.eventStore,
        defs = _a.defs,
        instances = _a.instances;
    id = String(id);

    for (var defId in defs) {
      var def = defs[defId];

      if (def.publicId === id) {
        if (def.recurringDef) {
          return new EventApi(state, def, null);
        }

        for (var instanceId in instances) {
          var instance = instances[instanceId];

          if (instance.defId === def.defId) {
            return new EventApi(state, def, instance);
          }
        }
      }
    }

    return null;
  };

  CalendarApi.prototype.getEvents = function () {
    var currentData = this.getCurrentData();
    return buildEventApis(currentData.eventStore, currentData);
  };

  CalendarApi.prototype.removeAllEvents = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENTS'
    });
  }; // Public Event Sources API
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.getEventSources = function () {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    var sourceApis = [];

    for (var internalId in sourceHash) {
      sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
    }

    return sourceApis;
  };

  CalendarApi.prototype.getEventSourceById = function (id) {
    var state = this.getCurrentData();
    var sourceHash = state.eventSources;
    id = String(id);

    for (var sourceId in sourceHash) {
      if (sourceHash[sourceId].publicId === id) {
        return new EventSourceApi(state, sourceHash[sourceId]);
      }
    }

    return null;
  };

  CalendarApi.prototype.addEventSource = function (sourceInput) {
    var state = this.getCurrentData();

    if (sourceInput instanceof EventSourceApi) {
      // not already present? don't want to add an old snapshot
      if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
        this.dispatch({
          type: 'ADD_EVENT_SOURCES',
          sources: [sourceInput.internalEventSource]
        });
      }

      return sourceInput;
    }

    var eventSource = parseEventSource(sourceInput, state);

    if (eventSource) {
      // TODO: error otherwise?
      this.dispatch({
        type: 'ADD_EVENT_SOURCES',
        sources: [eventSource]
      });
      return new EventSourceApi(state, eventSource);
    }

    return null;
  };

  CalendarApi.prototype.removeAllEventSources = function () {
    this.dispatch({
      type: 'REMOVE_ALL_EVENT_SOURCES'
    });
  };

  CalendarApi.prototype.refetchEvents = function () {
    this.dispatch({
      type: 'FETCH_EVENT_SOURCES',
      isRefetch: true
    });
  }; // Scroll
  // -----------------------------------------------------------------------------------------------------------------


  CalendarApi.prototype.scrollToTime = function (timeInput) {
    var time = createDuration(timeInput);

    if (time) {
      this.trigger('_scrollRequest', {
        time: time
      });
    }
  };

  return CalendarApi;
}();

var EventApi =
/** @class */
function () {
  // instance will be null if expressing a recurring event that has no current instances,
  // OR if trying to validate an incoming external event that has no dates assigned
  function EventApi(context, def, instance) {
    this._context = context;
    this._def = def;
    this._instance = instance || null;
  }
  /*
  TODO: make event struct more responsible for this
  */


  EventApi.prototype.setProp = function (name, val) {
    var _a, _b;

    if (name in EVENT_DATE_REFINERS) {
      console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.'); // TODO: make proper aliasing system?
    } else if (name === 'id') {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: {
          publicId: val
        } // hardcoded internal name

      });
    } else if (name in EVENT_NON_DATE_REFINERS) {
      val = EVENT_NON_DATE_REFINERS[name](val);
      this.mutate({
        standardProps: (_a = {}, _a[name] = val, _a)
      });
    } else if (name in EVENT_UI_REFINERS) {
      var ui = EVENT_UI_REFINERS[name](val);

      if (name === 'color') {
        ui = {
          backgroundColor: val,
          borderColor: val
        };
      } else if (name === 'editable') {
        ui = {
          startEditable: val,
          durationEditable: val
        };
      } else {
        ui = (_b = {}, _b[name] = val, _b);
      }

      this.mutate({
        standardProps: {
          ui: ui
        }
      });
    } else {
      console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
    }
  };

  EventApi.prototype.setExtendedProp = function (name, val) {
    var _a;

    this.mutate({
      extendedProps: (_a = {}, _a[name] = val, _a)
    });
  };

  EventApi.prototype.setStart = function (startInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var start = dateEnv.createMarker(startInput);

    if (start && this._instance) {
      // TODO: warning if parsed bad
      var instanceRange = this._instance.range;
      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?

      if (options.maintainDuration) {
        this.mutate({
          datesDelta: startDelta
        });
      } else {
        this.mutate({
          startDelta: startDelta
        });
      }
    }
  };

  EventApi.prototype.setEnd = function (endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var end;

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        return; // TODO: warning if parsed bad
      }
    }

    if (this._instance) {
      if (end) {
        var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
        this.mutate({
          endDelta: endDelta
        });
      } else {
        this.mutate({
          standardProps: {
            hasEnd: false
          }
        });
      }
    }
  };

  EventApi.prototype.setDates = function (startInput, endInput, options) {
    if (options === void 0) {
      options = {};
    }

    var dateEnv = this._context.dateEnv;
    var standardProps = {
      allDay: options.allDay
    };
    var start = dateEnv.createMarker(startInput);
    var end;

    if (!start) {
      return; // TODO: warning if parsed bad
    }

    if (endInput != null) {
      end = dateEnv.createMarker(endInput);

      if (!end) {
        // TODO: warning if parsed bad
        return;
      }
    }

    if (this._instance) {
      var instanceRange = this._instance.range; // when computing the diff for an event being converted to all-day,
      // compute diff off of the all-day values the way event-mutation does.

      if (options.allDay === true) {
        instanceRange = computeAlignedDayRange(instanceRange);
      }

      var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);

      if (end) {
        var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);

        if (durationsEqual(startDelta, endDelta)) {
          this.mutate({
            datesDelta: startDelta,
            standardProps: standardProps
          });
        } else {
          this.mutate({
            startDelta: startDelta,
            endDelta: endDelta,
            standardProps: standardProps
          });
        }
      } else {
        // means "clear the end"
        standardProps.hasEnd = false;
        this.mutate({
          datesDelta: startDelta,
          standardProps: standardProps
        });
      }
    }
  };

  EventApi.prototype.moveStart = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        startDelta: delta
      });
    }
  };

  EventApi.prototype.moveEnd = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        endDelta: delta
      });
    }
  };

  EventApi.prototype.moveDates = function (deltaInput) {
    var delta = createDuration(deltaInput);

    if (delta) {
      // TODO: warning if parsed bad
      this.mutate({
        datesDelta: delta
      });
    }
  };

  EventApi.prototype.setAllDay = function (allDay, options) {
    if (options === void 0) {
      options = {};
    }

    var standardProps = {
      allDay: allDay
    };
    var maintainDuration = options.maintainDuration;

    if (maintainDuration == null) {
      maintainDuration = this._context.options.allDayMaintainDuration;
    }

    if (this._def.allDay !== allDay) {
      standardProps.hasEnd = maintainDuration;
    }

    this.mutate({
      standardProps: standardProps
    });
  };

  EventApi.prototype.formatRange = function (formatInput) {
    var dateEnv = this._context.dateEnv;
    var instance = this._instance;
    var formatter = createFormatter(formatInput);

    if (this._def.hasEnd) {
      return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
        forcedStartTzo: instance.forcedStartTzo,
        forcedEndTzo: instance.forcedEndTzo
      });
    }

    return dateEnv.format(instance.range.start, formatter, {
      forcedTzo: instance.forcedStartTzo
    });
  };

  EventApi.prototype.mutate = function (mutation) {
    var instance = this._instance;

    if (instance) {
      var def = this._def;
      var context_1 = this._context;
      var eventStore_1 = context_1.getCurrentData().eventStore;
      var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
      var eventConfigBase = {
        '': {
          display: '',
          startEditable: true,
          durationEditable: true,
          constraints: [],
          overlap: null,
          allows: [],
          backgroundColor: '',
          borderColor: '',
          textColor: '',
          classNames: []
        }
      };
      relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
      var oldEvent = new EventApi(context_1, def, instance); // snapshot

      this._def = relevantEvents.defs[def.defId];
      this._instance = relevantEvents.instances[instance.instanceId];
      context_1.dispatch({
        type: 'MERGE_EVENTS',
        eventStore: relevantEvents
      });
      context_1.emitter.trigger('eventChange', {
        oldEvent: oldEvent,
        event: this,
        relatedEvents: buildEventApis(relevantEvents, context_1, instance),
        revert: function () {
          context_1.dispatch({
            type: 'RESET_EVENTS',
            eventStore: eventStore_1
          });
        }
      });
    }
  };

  EventApi.prototype.remove = function () {
    var context = this._context;
    var asStore = eventApiToStore(this);
    context.dispatch({
      type: 'REMOVE_EVENTS',
      eventStore: asStore
    });
    context.emitter.trigger('eventRemove', {
      event: this,
      relatedEvents: [],
      revert: function () {
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: asStore
        });
      }
    });
  };

  Object.defineProperty(EventApi.prototype, "source", {
    get: function () {
      var sourceId = this._def.sourceId;

      if (sourceId) {
        return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
      }

      return null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "start", {
    get: function () {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "end", {
    get: function () {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startStr", {
    get: function () {
      var instance = this._instance;

      if (instance) {
        return this._context.dateEnv.formatIso(instance.range.start, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedStartTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "endStr", {
    get: function () {
      var instance = this._instance;

      if (instance && this._def.hasEnd) {
        return this._context.dateEnv.formatIso(instance.range.end, {
          omitTime: this._def.allDay,
          forcedTzo: instance.forcedEndTzo
        });
      }

      return '';
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "id", {
    // computable props that all access the def
    // TODO: find a TypeScript-compatible way to do this at scale
    get: function () {
      return this._def.publicId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "groupId", {
    get: function () {
      return this._def.groupId;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allDay", {
    get: function () {
      return this._def.allDay;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "title", {
    get: function () {
      return this._def.title;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "url", {
    get: function () {
      return this._def.url;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "display", {
    get: function () {
      return this._def.ui.display || 'auto';
    } // bad. just normalize the type earlier
    ,
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "startEditable", {
    get: function () {
      return this._def.ui.startEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "durationEditable", {
    get: function () {
      return this._def.ui.durationEditable;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "constraint", {
    get: function () {
      return this._def.ui.constraints[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "overlap", {
    get: function () {
      return this._def.ui.overlap;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "allow", {
    get: function () {
      return this._def.ui.allows[0] || null;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "backgroundColor", {
    get: function () {
      return this._def.ui.backgroundColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "borderColor", {
    get: function () {
      return this._def.ui.borderColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "textColor", {
    get: function () {
      return this._def.ui.textColor;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "classNames", {
    // NOTE: user can't modify these because Object.freeze was called in event-def parsing
    get: function () {
      return this._def.ui.classNames;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(EventApi.prototype, "extendedProps", {
    get: function () {
      return this._def.extendedProps;
    },
    enumerable: false,
    configurable: true
  });

  EventApi.prototype.toPlainObject = function (settings) {
    if (settings === void 0) {
      settings = {};
    }

    var def = this._def;
    var ui = def.ui;

    var _a = this,
        startStr = _a.startStr,
        endStr = _a.endStr;

    var res = {};

    if (def.title) {
      res.title = def.title;
    }

    if (startStr) {
      res.start = startStr;
    }

    if (endStr) {
      res.end = endStr;
    }

    if (def.publicId) {
      res.id = def.publicId;
    }

    if (def.groupId) {
      res.groupId = def.groupId;
    }

    if (def.url) {
      res.url = def.url;
    }

    if (ui.display && ui.display !== 'auto') {
      res.display = ui.display;
    } // TODO: what about recurring-event properties???
    // TODO: include startEditable/durationEditable/constraint/overlap/allow


    if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
      res.color = ui.backgroundColor;
    } else {
      if (ui.backgroundColor) {
        res.backgroundColor = ui.backgroundColor;
      }

      if (ui.borderColor) {
        res.borderColor = ui.borderColor;
      }
    }

    if (ui.textColor) {
      res.textColor = ui.textColor;
    }

    if (ui.classNames.length) {
      res.classNames = ui.classNames;
    }

    if (Object.keys(def.extendedProps).length) {
      if (settings.collapseExtendedProps) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(res, def.extendedProps);
      } else {
        res.extendedProps = def.extendedProps;
      }
    }

    return res;
  };

  EventApi.prototype.toJSON = function () {
    return this.toPlainObject();
  };

  return EventApi;
}();

function eventApiToStore(eventApi) {
  var _a, _b;

  var def = eventApi._def;
  var instance = eventApi._instance;
  return {
    defs: (_a = {}, _a[def.defId] = def, _a),
    instances: instance ? (_b = {}, _b[instance.instanceId] = instance, _b) : {}
  };
}

function buildEventApis(eventStore, context, excludeInstance) {
  var defs = eventStore.defs,
      instances = eventStore.instances;
  var eventApis = [];
  var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';

  for (var id in instances) {
    var instance = instances[id];
    var def = defs[instance.defId];

    if (instance.instanceId !== excludeInstanceId) {
      eventApis.push(new EventApi(context, def, instance));
    }
  }

  return eventApis;
}

var calendarSystemClassMap = {};

function registerCalendarSystem(name, theClass) {
  calendarSystemClassMap[name] = theClass;
}

function createCalendarSystem(name) {
  return new calendarSystemClassMap[name]();
}

var GregorianCalendarSystem =
/** @class */
function () {
  function GregorianCalendarSystem() {}

  GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
    return d.getUTCFullYear();
  };

  GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
    return d.getUTCMonth();
  };

  GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
    return d.getUTCDate();
  };

  GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
    return arrayToUtcDate(arr);
  };

  GregorianCalendarSystem.prototype.markerToArray = function (marker) {
    return dateToUtcArray(marker);
  };

  return GregorianCalendarSystem;
}();

registerCalendarSystem('gregory', GregorianCalendarSystem);
var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;

function parse(str) {
  var m = ISO_RE.exec(str);

  if (m) {
    var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1000 : 0));

    if (isValidDate(marker)) {
      var timeZoneOffset = null;

      if (m[13]) {
        timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 + Number(m[18] || 0));
      }

      return {
        marker: marker,
        isTimeUnspecified: !m[6],
        timeZoneOffset: timeZoneOffset
      };
    }
  }

  return null;
}

var DateEnv =
/** @class */
function () {
  function DateEnv(settings) {
    var timeZone = this.timeZone = settings.timeZone;
    var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';

    if (settings.namedTimeZoneImpl && isNamedTimeZone) {
      this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
    }

    this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
    this.calendarSystem = createCalendarSystem(settings.calendarSystem);
    this.locale = settings.locale;
    this.weekDow = settings.locale.week.dow;
    this.weekDoy = settings.locale.week.doy;

    if (settings.weekNumberCalculation === 'ISO') {
      this.weekDow = 1;
      this.weekDoy = 4;
    }

    if (typeof settings.firstDay === 'number') {
      this.weekDow = settings.firstDay;
    }

    if (typeof settings.weekNumberCalculation === 'function') {
      this.weekNumberFunc = settings.weekNumberCalculation;
    }

    this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
    this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
    this.cmdFormatter = settings.cmdFormatter;
    this.defaultSeparator = settings.defaultSeparator;
  } // Creating / Parsing


  DateEnv.prototype.createMarker = function (input) {
    var meta = this.createMarkerMeta(input);

    if (meta === null) {
      return null;
    }

    return meta.marker;
  };

  DateEnv.prototype.createNowMarker = function () {
    if (this.canComputeOffset) {
      return this.timestampToMarker(new Date().valueOf());
    } // if we can't compute the current date val for a timezone,
    // better to give the current local date vals than UTC


    return arrayToUtcDate(dateToLocalArray(new Date()));
  };

  DateEnv.prototype.createMarkerMeta = function (input) {
    if (typeof input === 'string') {
      return this.parse(input);
    }

    var marker = null;

    if (typeof input === 'number') {
      marker = this.timestampToMarker(input);
    } else if (input instanceof Date) {
      input = input.valueOf();

      if (!isNaN(input)) {
        marker = this.timestampToMarker(input);
      }
    } else if (Array.isArray(input)) {
      marker = arrayToUtcDate(input);
    }

    if (marker === null || !isValidDate(marker)) {
      return null;
    }

    return {
      marker: marker,
      isTimeUnspecified: false,
      forcedTzo: null
    };
  };

  DateEnv.prototype.parse = function (s) {
    var parts = parse(s);

    if (parts === null) {
      return null;
    }

    var marker = parts.marker;
    var forcedTzo = null;

    if (parts.timeZoneOffset !== null) {
      if (this.canComputeOffset) {
        marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
      } else {
        forcedTzo = parts.timeZoneOffset;
      }
    }

    return {
      marker: marker,
      isTimeUnspecified: parts.isTimeUnspecified,
      forcedTzo: forcedTzo
    };
  }; // Accessors


  DateEnv.prototype.getYear = function (marker) {
    return this.calendarSystem.getMarkerYear(marker);
  };

  DateEnv.prototype.getMonth = function (marker) {
    return this.calendarSystem.getMarkerMonth(marker);
  }; // Adding / Subtracting


  DateEnv.prototype.add = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += dur.years;
    a[1] += dur.months;
    a[2] += dur.days;
    a[6] += dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.subtract = function (marker, dur) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] -= dur.years;
    a[1] -= dur.months;
    a[2] -= dur.days;
    a[6] -= dur.milliseconds;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addYears = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[0] += n;
    return this.calendarSystem.arrayToMarker(a);
  };

  DateEnv.prototype.addMonths = function (marker, n) {
    var a = this.calendarSystem.markerToArray(marker);
    a[1] += n;
    return this.calendarSystem.arrayToMarker(a);
  }; // Diffing Whole Units


  DateEnv.prototype.diffWholeYears = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) && calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
      return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
    }

    return null;
  };

  DateEnv.prototype.diffWholeMonths = function (m0, m1) {
    var calendarSystem = this.calendarSystem;

    if (timeAsMs(m0) === timeAsMs(m1) && calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
      return calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0) + (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
    }

    return null;
  }; // Range / Duration


  DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
    var n = this.diffWholeYears(m0, m1);

    if (n !== null) {
      return {
        unit: 'year',
        value: n
      };
    }

    n = this.diffWholeMonths(m0, m1);

    if (n !== null) {
      return {
        unit: 'month',
        value: n
      };
    }

    n = diffWholeWeeks(m0, m1);

    if (n !== null) {
      return {
        unit: 'week',
        value: n
      };
    }

    n = diffWholeDays(m0, m1);

    if (n !== null) {
      return {
        unit: 'day',
        value: n
      };
    }

    n = diffHours(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'hour',
        value: n
      };
    }

    n = diffMinutes(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'minute',
        value: n
      };
    }

    n = diffSeconds(m0, m1);

    if (isInt(n)) {
      return {
        unit: 'second',
        value: n
      };
    }

    return {
      unit: 'millisecond',
      value: m1.valueOf() - m0.valueOf()
    };
  };

  DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
    // TODO: can use greatestWholeUnit
    var diff;

    if (d.years) {
      diff = this.diffWholeYears(m0, m1);

      if (diff !== null) {
        return diff / asRoughYears(d);
      }
    }

    if (d.months) {
      diff = this.diffWholeMonths(m0, m1);

      if (diff !== null) {
        return diff / asRoughMonths(d);
      }
    }

    if (d.days) {
      diff = diffWholeDays(m0, m1);

      if (diff !== null) {
        return diff / asRoughDays(d);
      }
    }

    return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
  }; // Start-Of
  // these DON'T return zoned-dates. only UTC start-of dates


  DateEnv.prototype.startOf = function (m, unit) {
    if (unit === 'year') {
      return this.startOfYear(m);
    }

    if (unit === 'month') {
      return this.startOfMonth(m);
    }

    if (unit === 'week') {
      return this.startOfWeek(m);
    }

    if (unit === 'day') {
      return startOfDay(m);
    }

    if (unit === 'hour') {
      return startOfHour(m);
    }

    if (unit === 'minute') {
      return startOfMinute(m);
    }

    if (unit === 'second') {
      return startOfSecond(m);
    }

    return null;
  };

  DateEnv.prototype.startOfYear = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m)]);
  };

  DateEnv.prototype.startOfMonth = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m)]);
  };

  DateEnv.prototype.startOfWeek = function (m) {
    return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(m), this.calendarSystem.getMarkerMonth(m), m.getUTCDate() - (m.getUTCDay() - this.weekDow + 7) % 7]);
  }; // Week Number


  DateEnv.prototype.computeWeekNumber = function (marker) {
    if (this.weekNumberFunc) {
      return this.weekNumberFunc(this.toDate(marker));
    }

    return weekOfYear(marker, this.weekDow, this.weekDoy);
  }; // TODO: choke on timeZoneName: long


  DateEnv.prototype.format = function (marker, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    return formatter.format({
      marker: marker,
      timeZoneOffset: dateOptions.forcedTzo != null ? dateOptions.forcedTzo : this.offsetForMarker(marker)
    }, this);
  };

  DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
    if (dateOptions === void 0) {
      dateOptions = {};
    }

    if (dateOptions.isEndExclusive) {
      end = addMs(end, -1);
    }

    return formatter.formatRange({
      marker: start,
      timeZoneOffset: dateOptions.forcedStartTzo != null ? dateOptions.forcedStartTzo : this.offsetForMarker(start)
    }, {
      marker: end,
      timeZoneOffset: dateOptions.forcedEndTzo != null ? dateOptions.forcedEndTzo : this.offsetForMarker(end)
    }, this, dateOptions.defaultSeparator);
  };
  /*
  DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
  might as well use buildIsoString or some other util directly
  */


  DateEnv.prototype.formatIso = function (marker, extraOptions) {
    if (extraOptions === void 0) {
      extraOptions = {};
    }

    var timeZoneOffset = null;

    if (!extraOptions.omitTimeZoneOffset) {
      if (extraOptions.forcedTzo != null) {
        timeZoneOffset = extraOptions.forcedTzo;
      } else {
        timeZoneOffset = this.offsetForMarker(marker);
      }
    }

    return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
  }; // TimeZone


  DateEnv.prototype.timestampToMarker = function (ms) {
    if (this.timeZone === 'local') {
      return arrayToUtcDate(dateToLocalArray(new Date(ms)));
    }

    if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
      return new Date(ms);
    }

    return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
  };

  DateEnv.prototype.offsetForMarker = function (m) {
    if (this.timeZone === 'local') {
      return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
    }

    if (this.timeZone === 'UTC') {
      return 0;
    }

    if (this.namedTimeZoneImpl) {
      return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
    }

    return null;
  }; // Conversion


  DateEnv.prototype.toDate = function (m, forcedTzo) {
    if (this.timeZone === 'local') {
      return arrayToLocalDate(dateToUtcArray(m));
    }

    if (this.timeZone === 'UTC') {
      return new Date(m.valueOf()); // make sure it's a copy
    }

    if (!this.namedTimeZoneImpl) {
      return new Date(m.valueOf() - (forcedTzo || 0));
    }

    return new Date(m.valueOf() - this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
  };

  return DateEnv;
}();

var globalLocales = [];
var MINIMAL_RAW_EN_LOCALE = {
  code: 'en',
  week: {
    dow: 0,
    doy: 4 // 4 days need to be within the year to be considered the first week

  },
  direction: 'ltr',
  buttonText: {
    prev: 'prev',
    next: 'next',
    prevYear: 'prev year',
    nextYear: 'next year',
    year: 'year',
    today: 'today',
    month: 'month',
    week: 'week',
    day: 'day',
    list: 'list'
  },
  weekText: 'W',
  weekTextLong: 'Week',
  closeHint: 'Close',
  timeHint: 'Time',
  eventHint: 'Event',
  allDayText: 'all-day',
  moreLinkText: 'more',
  noEventsText: 'No events to display'
};

var RAW_EN_LOCALE = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, MINIMAL_RAW_EN_LOCALE), {
  // Includes things we don't want other locales to inherit,
  // things that derive from other translatable strings.
  buttonHints: {
    prev: 'Previous $0',
    next: 'Next $0',
    today: function (buttonText, unit) {
      return unit === 'day' ? 'Today' : "This " + buttonText;
    }
  },
  viewHint: '$0 view',
  navLinkHint: 'Go to $0',
  moreLinkHint: function (eventCnt) {
    return "Show " + eventCnt + " more event" + (eventCnt === 1 ? '' : 's');
  }
});

function organizeRawLocales(explicitRawLocales) {
  var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
  var allRawLocales = globalLocales.concat(explicitRawLocales);
  var rawLocaleMap = {
    en: RAW_EN_LOCALE
  };

  for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
    var rawLocale = allRawLocales_1[_i];
    rawLocaleMap[rawLocale.code] = rawLocale;
  }

  return {
    map: rawLocaleMap,
    defaultCode: defaultCode
  };
}

function buildLocale(inputSingular, available) {
  if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
    return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
  }

  return queryLocale(inputSingular, available);
}

function queryLocale(codeArg, available) {
  var codes = [].concat(codeArg || []); // will convert to array

  var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
  return parseLocale(codeArg, codes, raw);
}

function queryRawLocale(codes, available) {
  for (var i = 0; i < codes.length; i += 1) {
    var parts = codes[i].toLocaleLowerCase().split('-');

    for (var j = parts.length; j > 0; j -= 1) {
      var simpleId = parts.slice(0, j).join('-');

      if (available[simpleId]) {
        return available[simpleId];
      }
    }
  }

  return null;
}

function parseLocale(codeArg, codes, raw) {
  var merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
  delete merged.code; // don't want this part of the options

  var week = merged.week;
  delete merged.week;
  return {
    codeArg: codeArg,
    codes: codes,
    week: week,
    simpleNumberFormat: new Intl.NumberFormat(codeArg),
    options: merged
  };
}

function formatDate(dateInput, options) {
  if (options === void 0) {
    options = {};
  }

  var dateEnv = buildDateEnv$1(options);
  var formatter = createFormatter(options);
  var dateMeta = dateEnv.createMarkerMeta(dateInput);

  if (!dateMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.format(dateMeta.marker, formatter, {
    forcedTzo: dateMeta.forcedTzo
  });
}

function formatRange(startInput, endInput, options) {
  var dateEnv = buildDateEnv$1(typeof options === 'object' && options ? options : {}); // pass in if non-null object

  var formatter = createFormatter(options);
  var startMeta = dateEnv.createMarkerMeta(startInput);
  var endMeta = dateEnv.createMarkerMeta(endInput);

  if (!startMeta || !endMeta) {
    // TODO: warning?
    return '';
  }

  return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
    forcedStartTzo: startMeta.forcedTzo,
    forcedEndTzo: endMeta.forcedTzo,
    isEndExclusive: options.isEndExclusive,
    defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator
  });
} // TODO: more DRY and optimized


function buildDateEnv$1(settings) {
  var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere

  return new DateEnv((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    timeZone: BASE_OPTION_DEFAULTS.timeZone,
    calendarSystem: 'gregory'
  }, settings), {
    locale: locale
  }));
}

var DEF_DEFAULTS = {
  startTime: '09:00',
  endTime: '17:00',
  daysOfWeek: [1, 2, 3, 4, 5],
  display: 'inverse-background',
  classNames: 'fc-non-business',
  groupId: '_businessHours' // so multiple defs get grouped

};
/*
TODO: pass around as EventDefHash!!!
*/

function parseBusinessHours(input, context) {
  return parseEvents(refineInputs(input), null, context);
}

function refineInputs(input) {
  var rawDefs;

  if (input === true) {
    rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
  } else if (Array.isArray(input)) {
    // if specifying an array, every sub-definition NEEDS a day-of-week
    rawDefs = input.filter(function (rawDef) {
      return rawDef.daysOfWeek;
    });
  } else if (typeof input === 'object' && input) {
    // non-null object
    rawDefs = [input];
  } else {
    // is probably false
    rawDefs = [];
  }

  rawDefs = rawDefs.map(function (rawDef) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, DEF_DEFAULTS), rawDef);
  });
  return rawDefs;
}

function pointInsideRect(point, rect) {
  return point.left >= rect.left && point.left < rect.right && point.top >= rect.top && point.top < rect.bottom;
} // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false


function intersectRects(rect1, rect2) {
  var res = {
    left: Math.max(rect1.left, rect2.left),
    right: Math.min(rect1.right, rect2.right),
    top: Math.max(rect1.top, rect2.top),
    bottom: Math.min(rect1.bottom, rect2.bottom)
  };

  if (res.left < res.right && res.top < res.bottom) {
    return res;
  }

  return false;
}

function translateRect(rect, deltaX, deltaY) {
  return {
    left: rect.left + deltaX,
    right: rect.right + deltaX,
    top: rect.top + deltaY,
    bottom: rect.bottom + deltaY
  };
} // Returns a new point that will have been moved to reside within the given rectangle


function constrainPoint(point, rect) {
  return {
    left: Math.min(Math.max(point.left, rect.left), rect.right),
    top: Math.min(Math.max(point.top, rect.top), rect.bottom)
  };
} // Returns a point that is the center of the given rectangle


function getRectCenter(rect) {
  return {
    left: (rect.left + rect.right) / 2,
    top: (rect.top + rect.bottom) / 2
  };
} // Subtracts point2's coordinates from point1's coordinates, returning a delta


function diffPoints(point1, point2) {
  return {
    left: point1.left - point2.left,
    top: point1.top - point2.top
  };
}

var canVGrowWithinCell;

function getCanVGrowWithinCell() {
  if (canVGrowWithinCell == null) {
    canVGrowWithinCell = computeCanVGrowWithinCell();
  }

  return canVGrowWithinCell;
}

function computeCanVGrowWithinCell() {
  // for SSR, because this function is call immediately at top-level
  // TODO: just make this logic execute top-level, immediately, instead of doing lazily
  if (typeof document === 'undefined') {
    return true;
  }

  var el = document.createElement('div');
  el.style.position = 'absolute';
  el.style.top = '0px';
  el.style.left = '0px';
  el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
  el.querySelector('table').style.height = '100px';
  el.querySelector('div').style.height = '100%';
  document.body.appendChild(el);
  var div = el.querySelector('div');
  var possible = div.offsetHeight > 0;
  document.body.removeChild(el);
  return possible;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere

var Splitter =
/** @class */
function () {
  function Splitter() {
    this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
    this.splitDateSelection = memoize(this._splitDateSpan);
    this.splitEventStore = memoize(this._splitEventStore);
    this.splitIndividualUi = memoize(this._splitIndividualUi);
    this.splitEventDrag = memoize(this._splitInteraction);
    this.splitEventResize = memoize(this._splitInteraction);
    this.eventUiBuilders = {}; // TODO: typescript protection
  }

  Splitter.prototype.splitProps = function (props) {
    var _this = this;

    var keyInfos = this.getKeyInfo(props);
    var defKeys = this.getKeysForEventDefs(props.eventStore);
    var dateSelections = this.splitDateSelection(props.dateSelection);
    var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*

    var eventStores = this.splitEventStore(props.eventStore, defKeys);
    var eventDrags = this.splitEventDrag(props.eventDrag);
    var eventResizes = this.splitEventResize(props.eventResize);
    var splitProps = {};
    this.eventUiBuilders = mapHash(keyInfos, function (info, key) {
      return _this.eventUiBuilders[key] || memoize(buildEventUiForKey);
    });

    for (var key in keyInfos) {
      var keyInfo = keyInfos[key];
      var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
      var buildEventUi = this.eventUiBuilders[key];
      splitProps[key] = {
        businessHours: keyInfo.businessHours || props.businessHours,
        dateSelection: dateSelections[key] || null,
        eventStore: eventStore,
        eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
        eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
        eventDrag: eventDrags[key] || null,
        eventResize: eventResizes[key] || null
      };
    }

    return splitProps;
  };

  Splitter.prototype._splitDateSpan = function (dateSpan) {
    var dateSpans = {};

    if (dateSpan) {
      var keys = this.getKeysForDateSpan(dateSpan);

      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        dateSpans[key] = dateSpan;
      }
    }

    return dateSpans;
  };

  Splitter.prototype._getKeysForEventDefs = function (eventStore) {
    var _this = this;

    return mapHash(eventStore.defs, function (eventDef) {
      return _this.getKeysForEventDef(eventDef);
    });
  };

  Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
    var defs = eventStore.defs,
        instances = eventStore.instances;
    var splitStores = {};

    for (var defId in defs) {
      for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
        var key = _a[_i];

        if (!splitStores[key]) {
          splitStores[key] = createEmptyEventStore();
        }

        splitStores[key].defs[defId] = defs[defId];
      }
    }

    for (var instanceId in instances) {
      var instance = instances[instanceId];

      for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
        var key = _c[_b];

        if (splitStores[key]) {
          // must have already been created
          splitStores[key].instances[instanceId] = instance;
        }
      }
    }

    return splitStores;
  };

  Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
    var splitHashes = {};

    for (var defId in eventUiBases) {
      if (defId) {
        // not the '' key
        for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
          var key = _a[_i];

          if (!splitHashes[key]) {
            splitHashes[key] = {};
          }

          splitHashes[key][defId] = eventUiBases[defId];
        }
      }
    }

    return splitHashes;
  };

  Splitter.prototype._splitInteraction = function (interaction) {
    var splitStates = {};

    if (interaction) {
      var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents)); // can't rely on defKeys because event data is mutated


      var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);

      var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);

      var populate = function (key) {
        if (!splitStates[key]) {
          splitStates[key] = {
            affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
            mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
            isEvent: interaction.isEvent
          };
        }
      };

      for (var key in affectedStores_1) {
        populate(key);
      }

      for (var key in mutatedStores_1) {
        populate(key);
      }
    }

    return splitStates;
  };

  return Splitter;
}();

function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
  var baseParts = [];

  if (allUi) {
    baseParts.push(allUi);
  }

  if (eventUiForKey) {
    baseParts.push(eventUiForKey);
  }

  var stuff = {
    '': combineEventUis(baseParts)
  };

  if (individualUi) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(stuff, individualUi);
  }

  return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
  return {
    dow: date.getUTCDay(),
    isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
    isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
    isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
    isPast: Boolean(nowDate ? date < nowDate : todayRange ? date < todayRange.start : false),
    isFuture: Boolean(nowDate ? date > nowDate : todayRange ? date >= todayRange.end : false)
  };
}

function getDayClassNames(meta, theme) {
  var classNames = ['fc-day', "fc-day-" + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-day-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-day-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-day-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-day-future');
    }

    if (meta.isOther) {
      classNames.push('fc-day-other');
    }
  }

  return classNames;
}

function getSlotClassNames(meta, theme) {
  var classNames = ['fc-slot', "fc-slot-" + DAY_IDS[meta.dow]];

  if (meta.isDisabled) {
    classNames.push('fc-slot-disabled');
  } else {
    if (meta.isToday) {
      classNames.push('fc-slot-today');
      classNames.push(theme.getClass('today'));
    }

    if (meta.isPast) {
      classNames.push('fc-slot-past');
    }

    if (meta.isFuture) {
      classNames.push('fc-slot-future');
    }
  }

  return classNames;
}

var DAY_FORMAT = createFormatter({
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});
var WEEK_FORMAT = createFormatter({
  week: 'long'
});

function buildNavLinkAttrs(context, dateMarker, viewType, isTabbable) {
  if (viewType === void 0) {
    viewType = 'day';
  }

  if (isTabbable === void 0) {
    isTabbable = true;
  }

  var dateEnv = context.dateEnv,
      options = context.options,
      calendarApi = context.calendarApi;
  var dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);

  if (options.navLinks) {
    var zonedDate = dateEnv.toDate(dateMarker);

    var handleInteraction = function (ev) {
      var customAction = viewType === 'day' ? options.navLinkDayClick : viewType === 'week' ? options.navLinkWeekClick : null;

      if (typeof customAction === 'function') {
        customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
      } else {
        if (typeof customAction === 'string') {
          viewType = customAction;
        }

        calendarApi.zoomTo(dateMarker, viewType);
      }
    };

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr),
      'data-navlink': ''
    }, isTabbable ? createAriaClickAttrs(handleInteraction) : {
      onClick: handleInteraction
    });
  }

  return {
    'aria-label': dateStr
  };
}

var _isRtlScrollbarOnLeft = null;

function getIsRtlScrollbarOnLeft() {
  if (_isRtlScrollbarOnLeft === null) {
    _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
  }

  return _isRtlScrollbarOnLeft;
}

function computeIsRtlScrollbarOnLeft() {
  var outerEl = document.createElement('div');
  applyStyle(outerEl, {
    position: 'absolute',
    top: -1000,
    left: 0,
    border: 0,
    padding: 0,
    overflow: 'scroll',
    direction: 'rtl'
  });
  outerEl.innerHTML = '<div></div>';
  document.body.appendChild(outerEl);
  var innerEl = outerEl.firstChild;
  var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
  removeElement(outerEl);
  return res;
}

var _scrollbarWidths;

function getScrollbarWidths() {
  if (!_scrollbarWidths) {
    _scrollbarWidths = computeScrollbarWidths();
  }

  return _scrollbarWidths;
}

function computeScrollbarWidths() {
  var el = document.createElement('div');
  el.style.overflow = 'scroll';
  el.style.position = 'absolute';
  el.style.top = '-9999px';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  var res = computeScrollbarWidthsForEl(el);
  document.body.removeChild(el);
  return res;
} // WARNING: will include border


function computeScrollbarWidthsForEl(el) {
  return {
    x: el.offsetHeight - el.clientHeight,
    y: el.offsetWidth - el.clientWidth
  };
}

function computeEdges(el, getPadding) {
  if (getPadding === void 0) {
    getPadding = false;
  }

  var computedStyle = window.getComputedStyle(el);
  var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
  var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
  var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
  var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
  var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!

  var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
  var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
  var res = {
    borderLeft: borderLeft,
    borderRight: borderRight,
    borderTop: borderTop,
    borderBottom: borderBottom,
    scrollbarBottom: scrollbarBottom,
    scrollbarLeft: 0,
    scrollbarRight: 0
  };

  if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') {
    // is the scrollbar on the left side?
    res.scrollbarLeft = scrollbarLeftRight;
  } else {
    res.scrollbarRight = scrollbarLeftRight;
  }

  if (getPadding) {
    res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
    res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
    res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
    res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
  }

  return res;
}

function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
  if (goWithinPadding === void 0) {
    goWithinPadding = false;
  }

  var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
  var edges = computeEdges(el, goWithinPadding);
  var res = {
    left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
    right: outerRect.right - edges.borderRight - edges.scrollbarRight,
    top: outerRect.top + edges.borderTop,
    bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom
  };

  if (goWithinPadding) {
    res.left += edges.paddingLeft;
    res.right -= edges.paddingRight;
    res.top += edges.paddingTop;
    res.bottom -= edges.paddingBottom;
  }

  return res;
}

function computeRect(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    right: rect.right + window.pageXOffset,
    bottom: rect.bottom + window.pageYOffset
  };
}

function computeClippedClientRect(el) {
  var clippingParents = getClippingParents(el);
  var rect = el.getBoundingClientRect();

  for (var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
    var clippingParent = clippingParents_1[_i];
    var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());

    if (intersection) {
      rect = intersection;
    } else {
      return null;
    }
  }

  return rect;
}

function computeHeightAndMargins(el) {
  return el.getBoundingClientRect().height + computeVMargins(el);
}

function computeVMargins(el) {
  var computed = window.getComputedStyle(el);
  return parseInt(computed.marginTop, 10) + parseInt(computed.marginBottom, 10);
} // does not return window


function getClippingParents(el) {
  var parents = [];

  while (el instanceof HTMLElement) {
    // will stop when gets to document or null
    var computedStyle = window.getComputedStyle(el);

    if (computedStyle.position === 'fixed') {
      break;
    }

    if (/(auto|scroll)/.test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
      parents.push(el);
    }

    el = el.parentNode;
  }

  return parents;
} // given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.


function unpromisify(func, success, failure) {
  // guard against success/failure callbacks being called more than once
  // and guard against a promise AND callback being used together.
  var isResolved = false;

  var wrappedSuccess = function () {
    if (!isResolved) {
      isResolved = true;
      success.apply(this, arguments); // eslint-disable-line prefer-rest-params
    }
  };

  var wrappedFailure = function () {
    if (!isResolved) {
      isResolved = true;

      if (failure) {
        failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
      }
    }
  };

  var res = func(wrappedSuccess, wrappedFailure);

  if (res && typeof res.then === 'function') {
    res.then(wrappedSuccess, wrappedFailure);
  }
}

var Emitter =
/** @class */
function () {
  function Emitter() {
    this.handlers = {};
    this.thisContext = null;
  }

  Emitter.prototype.setThisContext = function (thisContext) {
    this.thisContext = thisContext;
  };

  Emitter.prototype.setOptions = function (options) {
    this.options = options;
  };

  Emitter.prototype.on = function (type, handler) {
    addToHash(this.handlers, type, handler);
  };

  Emitter.prototype.off = function (type, handler) {
    removeFromHash(this.handlers, type, handler);
  };

  Emitter.prototype.trigger = function (type) {
    var args = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }

    var attachedHandlers = this.handlers[type] || [];
    var optionHandler = this.options && this.options[type];
    var handlers = [].concat(optionHandler || [], attachedHandlers);

    for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
      var handler = handlers_1[_a];
      handler.apply(this.thisContext, args);
    }
  };

  Emitter.prototype.hasHandlers = function (type) {
    return Boolean(this.handlers[type] && this.handlers[type].length || this.options && this.options[type]);
  };

  return Emitter;
}();

function addToHash(hash, type, handler) {
  (hash[type] || (hash[type] = [])).push(handler);
}

function removeFromHash(hash, type, handler) {
  if (handler) {
    if (hash[type]) {
      hash[type] = hash[type].filter(function (func) {
        return func !== handler;
      });
    }
  } else {
    delete hash[type]; // remove all handler funcs for this type
  }
}
/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/


var PositionCache =
/** @class */
function () {
  function PositionCache(originEl, els, isHorizontal, isVertical) {
    this.els = els;
    var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left

    if (isHorizontal) {
      this.buildElHorizontals(originClientRect.left);
    }

    if (isVertical) {
      this.buildElVerticals(originClientRect.top);
    }
  } // Populates the left/right internal coordinate arrays


  PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
    var lefts = [];
    var rights = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      lefts.push(rect.left - originClientLeft);
      rights.push(rect.right - originClientLeft);
    }

    this.lefts = lefts;
    this.rights = rights;
  }; // Populates the top/bottom internal coordinate arrays


  PositionCache.prototype.buildElVerticals = function (originClientTop) {
    var tops = [];
    var bottoms = [];

    for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
      var el = _a[_i];
      var rect = el.getBoundingClientRect();
      tops.push(rect.top - originClientTop);
      bottoms.push(rect.bottom - originClientTop);
    }

    this.tops = tops;
    this.bottoms = bottoms;
  }; // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.leftToIndex = function (leftPosition) {
    var _a = this,
        lefts = _a.lefts,
        rights = _a.rights;

    var len = lefts.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  }; // Given a top offset (from document top), returns the index of the el that it vertically intersects.
  // If no intersection is made, returns undefined.


  PositionCache.prototype.topToIndex = function (topPosition) {
    var _a = this,
        tops = _a.tops,
        bottoms = _a.bottoms;

    var len = tops.length;
    var i;

    for (i = 0; i < len; i += 1) {
      if (topPosition >= tops[i] && topPosition < bottoms[i]) {
        return i;
      }
    }

    return undefined; // TODO: better
  }; // Gets the width of the element at the given index


  PositionCache.prototype.getWidth = function (leftIndex) {
    return this.rights[leftIndex] - this.lefts[leftIndex];
  }; // Gets the height of the element at the given index


  PositionCache.prototype.getHeight = function (topIndex) {
    return this.bottoms[topIndex] - this.tops[topIndex];
  };

  return PositionCache;
}();
/* eslint max-classes-per-file: "off" */

/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/


var ScrollController =
/** @class */
function () {
  function ScrollController() {}

  ScrollController.prototype.getMaxScrollTop = function () {
    return this.getScrollHeight() - this.getClientHeight();
  };

  ScrollController.prototype.getMaxScrollLeft = function () {
    return this.getScrollWidth() - this.getClientWidth();
  };

  ScrollController.prototype.canScrollVertically = function () {
    return this.getMaxScrollTop() > 0;
  };

  ScrollController.prototype.canScrollHorizontally = function () {
    return this.getMaxScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollUp = function () {
    return this.getScrollTop() > 0;
  };

  ScrollController.prototype.canScrollDown = function () {
    return this.getScrollTop() < this.getMaxScrollTop();
  };

  ScrollController.prototype.canScrollLeft = function () {
    return this.getScrollLeft() > 0;
  };

  ScrollController.prototype.canScrollRight = function () {
    return this.getScrollLeft() < this.getMaxScrollLeft();
  };

  return ScrollController;
}();

var ElementScrollController =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ElementScrollController, _super);

  function ElementScrollController(el) {
    var _this = _super.call(this) || this;

    _this.el = el;
    return _this;
  }

  ElementScrollController.prototype.getScrollTop = function () {
    return this.el.scrollTop;
  };

  ElementScrollController.prototype.getScrollLeft = function () {
    return this.el.scrollLeft;
  };

  ElementScrollController.prototype.setScrollTop = function (top) {
    this.el.scrollTop = top;
  };

  ElementScrollController.prototype.setScrollLeft = function (left) {
    this.el.scrollLeft = left;
  };

  ElementScrollController.prototype.getScrollWidth = function () {
    return this.el.scrollWidth;
  };

  ElementScrollController.prototype.getScrollHeight = function () {
    return this.el.scrollHeight;
  };

  ElementScrollController.prototype.getClientHeight = function () {
    return this.el.clientHeight;
  };

  ElementScrollController.prototype.getClientWidth = function () {
    return this.el.clientWidth;
  };

  return ElementScrollController;
}(ScrollController);

var WindowScrollController =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(WindowScrollController, _super);

  function WindowScrollController() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  WindowScrollController.prototype.getScrollTop = function () {
    return window.pageYOffset;
  };

  WindowScrollController.prototype.getScrollLeft = function () {
    return window.pageXOffset;
  };

  WindowScrollController.prototype.setScrollTop = function (n) {
    window.scroll(window.pageXOffset, n);
  };

  WindowScrollController.prototype.setScrollLeft = function (n) {
    window.scroll(n, window.pageYOffset);
  };

  WindowScrollController.prototype.getScrollWidth = function () {
    return document.documentElement.scrollWidth;
  };

  WindowScrollController.prototype.getScrollHeight = function () {
    return document.documentElement.scrollHeight;
  };

  WindowScrollController.prototype.getClientHeight = function () {
    return document.documentElement.clientHeight;
  };

  WindowScrollController.prototype.getClientWidth = function () {
    return document.documentElement.clientWidth;
  };

  return WindowScrollController;
}(ScrollController);

var Theme =
/** @class */
function () {
  function Theme(calendarOptions) {
    if (this.iconOverrideOption) {
      this.setIconOverride(calendarOptions[this.iconOverrideOption]);
    }
  }

  Theme.prototype.setIconOverride = function (iconOverrideHash) {
    var iconClassesCopy;
    var buttonName;

    if (typeof iconOverrideHash === 'object' && iconOverrideHash) {
      // non-null object
      iconClassesCopy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.iconClasses);

      for (buttonName in iconOverrideHash) {
        iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
      }

      this.iconClasses = iconClassesCopy;
    } else if (iconOverrideHash === false) {
      this.iconClasses = {};
    }
  };

  Theme.prototype.applyIconOverridePrefix = function (className) {
    var prefix = this.iconOverridePrefix;

    if (prefix && className.indexOf(prefix) !== 0) {
      // if not already present
      className = prefix + className;
    }

    return className;
  };

  Theme.prototype.getClass = function (key) {
    return this.classes[key] || '';
  };

  Theme.prototype.getIconClass = function (buttonName, isRtl) {
    var className;

    if (isRtl && this.rtlIconClasses) {
      className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
    } else {
      className = this.iconClasses[buttonName];
    }

    if (className) {
      return this.baseIconClass + " " + className;
    }

    return '';
  };

  Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
    var className;

    if (this.iconOverrideCustomButtonOption) {
      className = customButtonProps[this.iconOverrideCustomButtonOption];

      if (className) {
        return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
      }
    }

    return '';
  };

  return Theme;
}();

Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var ScrollResponder =
/** @class */
function () {
  function ScrollResponder(execFunc, emitter, scrollTime, scrollTimeReset) {
    var _this = this;

    this.execFunc = execFunc;
    this.emitter = emitter;
    this.scrollTime = scrollTime;
    this.scrollTimeReset = scrollTimeReset;

    this.handleScrollRequest = function (request) {
      _this.queuedRequest = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _this.queuedRequest || {}, request);

      _this.drain();
    };

    emitter.on('_scrollRequest', this.handleScrollRequest);
    this.fireInitialScroll();
  }

  ScrollResponder.prototype.detach = function () {
    this.emitter.off('_scrollRequest', this.handleScrollRequest);
  };

  ScrollResponder.prototype.update = function (isDatesNew) {
    if (isDatesNew && this.scrollTimeReset) {
      this.fireInitialScroll(); // will drain
    } else {
      this.drain();
    }
  };

  ScrollResponder.prototype.fireInitialScroll = function () {
    this.handleScrollRequest({
      time: this.scrollTime
    });
  };

  ScrollResponder.prototype.drain = function () {
    if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
      this.queuedRequest = null;
    }
  };

  return ScrollResponder;
}();

var ViewContextType = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext)({}); // for Components

function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
  return {
    dateEnv: dateEnv,
    options: viewOptions,
    pluginHooks: pluginHooks,
    emitter: emitter,
    dispatch: dispatch,
    getCurrentData: getCurrentData,
    calendarApi: calendarApi,
    viewSpec: viewSpec,
    viewApi: viewApi,
    dateProfileGenerator: dateProfileGenerator,
    theme: theme,
    isRtl: viewOptions.direction === 'rtl',
    addResizeHandler: function (handler) {
      emitter.on('_resize', handler);
    },
    removeResizeHandler: function (handler) {
      emitter.off('_resize', handler);
    },
    createScrollResponder: function (execFunc) {
      return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
    },
    registerInteractiveComponent: registerInteractiveComponent,
    unregisterInteractiveComponent: unregisterInteractiveComponent
  };
}
/* eslint max-classes-per-file: off */


var PureComponent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PureComponent, _super);

  function PureComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
    }

    return !compareObjs(this.props, nextProps, this.propEquality) || !compareObjs(this.state, nextState, this.stateEquality);
  };

  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  return PureComponent;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component);

PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};

var BaseComponent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(BaseComponent, _super);

  function BaseComponent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  BaseComponent.contextType = ViewContextType;
  return BaseComponent;
}(PureComponent);

function addPropsEquality(propEquality) {
  var hash = Object.create(this.prototype.propEquality);

  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(hash, propEquality);

  this.prototype.propEquality = hash;
}

function addStateEquality(stateEquality) {
  var hash = Object.create(this.prototype.stateEquality);

  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(hash, stateEquality);

  this.prototype.stateEquality = hash;
} // use other one


function setRef(ref, current) {
  if (typeof ref === 'function') {
    ref(current);
  } else if (ref) {
    // see https://github.com/facebook/react/issues/13029
    ref.current = current;
  }
}
/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/


var DateComponent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DateComponent, _super);

  function DateComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.uid = guid();
    return _this;
  } // Hit System
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.prepareHits = function () {};

  DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    return null; // this should be abstract
  }; // Pointer Interaction Utils
  // -----------------------------------------------------------------------------------------------------------------


  DateComponent.prototype.isValidSegDownEl = function (el) {
    return !this.props.eventDrag && // HACK
    !this.props.eventResize && // HACK
    !elementClosest(el, '.fc-event-mirror');
  };

  DateComponent.prototype.isValidDateDownEl = function (el) {
    return !elementClosest(el, '.fc-event:not(.fc-bg-event)') && !elementClosest(el, '.fc-more-link') && // a "more.." link
    !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
    !elementClosest(el, '.fc-popover'); // hack
  };

  return DateComponent;
}(BaseComponent); // TODO: easier way to add new hooks? need to update a million things


function createPlugin(input) {
  return {
    id: guid(),
    deps: input.deps || [],
    reducers: input.reducers || [],
    isLoadingFuncs: input.isLoadingFuncs || [],
    contextInit: [].concat(input.contextInit || []),
    eventRefiners: input.eventRefiners || {},
    eventDefMemberAdders: input.eventDefMemberAdders || [],
    eventSourceRefiners: input.eventSourceRefiners || {},
    isDraggableTransformers: input.isDraggableTransformers || [],
    eventDragMutationMassagers: input.eventDragMutationMassagers || [],
    eventDefMutationAppliers: input.eventDefMutationAppliers || [],
    dateSelectionTransformers: input.dateSelectionTransformers || [],
    datePointTransforms: input.datePointTransforms || [],
    dateSpanTransforms: input.dateSpanTransforms || [],
    views: input.views || {},
    viewPropsTransformers: input.viewPropsTransformers || [],
    isPropsValid: input.isPropsValid || null,
    externalDefTransforms: input.externalDefTransforms || [],
    viewContainerAppends: input.viewContainerAppends || [],
    eventDropTransformers: input.eventDropTransformers || [],
    componentInteractions: input.componentInteractions || [],
    calendarInteractions: input.calendarInteractions || [],
    themeClasses: input.themeClasses || {},
    eventSourceDefs: input.eventSourceDefs || [],
    cmdFormatter: input.cmdFormatter,
    recurringTypes: input.recurringTypes || [],
    namedTimeZonedImpl: input.namedTimeZonedImpl,
    initialView: input.initialView || '',
    elementDraggingImpl: input.elementDraggingImpl,
    optionChangeHandlers: input.optionChangeHandlers || {},
    scrollGridImpl: input.scrollGridImpl || null,
    contentTypeHandlers: input.contentTypeHandlers || {},
    listenerRefiners: input.listenerRefiners || {},
    optionRefiners: input.optionRefiners || {},
    propSetHandlers: input.propSetHandlers || {}
  };
}

function buildPluginHooks(pluginDefs, globalDefs) {
  var isAdded = {};
  var hooks = {
    reducers: [],
    isLoadingFuncs: [],
    contextInit: [],
    eventRefiners: {},
    eventDefMemberAdders: [],
    eventSourceRefiners: {},
    isDraggableTransformers: [],
    eventDragMutationMassagers: [],
    eventDefMutationAppliers: [],
    dateSelectionTransformers: [],
    datePointTransforms: [],
    dateSpanTransforms: [],
    views: {},
    viewPropsTransformers: [],
    isPropsValid: null,
    externalDefTransforms: [],
    viewContainerAppends: [],
    eventDropTransformers: [],
    componentInteractions: [],
    calendarInteractions: [],
    themeClasses: {},
    eventSourceDefs: [],
    cmdFormatter: null,
    recurringTypes: [],
    namedTimeZonedImpl: null,
    initialView: '',
    elementDraggingImpl: null,
    optionChangeHandlers: {},
    scrollGridImpl: null,
    contentTypeHandlers: {},
    listenerRefiners: {},
    optionRefiners: {},
    propSetHandlers: {}
  };

  function addDefs(defs) {
    for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
      var def = defs_1[_i];

      if (!isAdded[def.id]) {
        isAdded[def.id] = true;
        addDefs(def.deps);
        hooks = combineHooks(hooks, def);
      }
    }
  }

  if (pluginDefs) {
    addDefs(pluginDefs);
  }

  addDefs(globalDefs);
  return hooks;
}

function buildBuildPluginHooks() {
  var currentOverrideDefs = [];
  var currentGlobalDefs = [];
  var currentHooks;
  return function (overrideDefs, globalDefs) {
    if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
      currentHooks = buildPluginHooks(overrideDefs, globalDefs);
    }

    currentOverrideDefs = overrideDefs;
    currentGlobalDefs = globalDefs;
    return currentHooks;
  };
}

function combineHooks(hooks0, hooks1) {
  return {
    reducers: hooks0.reducers.concat(hooks1.reducers),
    isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
    contextInit: hooks0.contextInit.concat(hooks1.contextInit),
    eventRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.eventRefiners), hooks1.eventRefiners),
    eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
    eventSourceRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
    isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
    eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
    eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
    dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
    datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
    dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
    views: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.views), hooks1.views),
    viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
    isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
    externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
    viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
    eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
    calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
    componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
    themeClasses: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.themeClasses), hooks1.themeClasses),
    eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
    cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
    recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
    namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
    initialView: hooks0.initialView || hooks1.initialView,
    elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
    optionChangeHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
    scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
    contentTypeHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
    listenerRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
    optionRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.optionRefiners), hooks1.optionRefiners),
    propSetHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.propSetHandlers), hooks1.propSetHandlers)
  };
}

var StandardTheme =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StandardTheme, _super);

  function StandardTheme() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  return StandardTheme;
}(Theme);

StandardTheme.prototype.classes = {
  root: 'fc-theme-standard',
  tableCellShaded: 'fc-cell-shaded',
  buttonGroup: 'fc-button-group',
  button: 'fc-button fc-button-primary',
  buttonActive: 'fc-button-active'
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
  close: 'fc-icon-x',
  prev: 'fc-icon-chevron-left',
  next: 'fc-icon-chevron-right',
  prevYear: 'fc-icon-chevrons-left',
  nextYear: 'fc-icon-chevrons-right'
};
StandardTheme.prototype.rtlIconClasses = {
  prev: 'fc-icon-chevron-right',
  next: 'fc-icon-chevron-left',
  prevYear: 'fc-icon-chevrons-right',
  nextYear: 'fc-icon-chevrons-left'
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly

StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
  var hash = {};
  var viewType;

  for (viewType in defaultConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  for (viewType in overrideConfigs) {
    ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
  }

  return hash;
}

function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  if (hash[viewType]) {
    return hash[viewType];
  }

  var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);

  if (viewDef) {
    hash[viewType] = viewDef;
  }

  return viewDef;
}

function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
  var defaultConfig = defaultConfigs[viewType];
  var overrideConfig = overrideConfigs[viewType];

  var queryProp = function (name) {
    return defaultConfig && defaultConfig[name] !== null ? defaultConfig[name] : overrideConfig && overrideConfig[name] !== null ? overrideConfig[name] : null;
  };

  var theComponent = queryProp('component');
  var superType = queryProp('superType');
  var superDef = null;

  if (superType) {
    if (superType === viewType) {
      throw new Error('Can\'t have a custom view type that references itself');
    }

    superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
  }

  if (!theComponent && superDef) {
    theComponent = superDef.component;
  }

  if (!theComponent) {
    return null; // don't throw a warning, might be settings for a single-unit view
  }

  return {
    type: viewType,
    component: theComponent,
    defaults: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, superDef ? superDef.defaults : {}), defaultConfig ? defaultConfig.rawOptions : {}),
    overrides: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, superDef ? superDef.overrides : {}), overrideConfig ? overrideConfig.rawOptions : {})
  };
}
/* eslint max-classes-per-file: off */
// NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???


var RenderHook =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(RenderHook, _super);

  function RenderHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.rootElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();

    _this.handleRootEl = function (el) {
      setRef(_this.rootElRef, el);

      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    };

    return _this;
  }

  RenderHook.prototype.render = function () {
    var _this = this;

    var props = this.props;
    var hookProps = props.hookProps;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: props.didMount,
      willUnmount: props.willUnmount,
      elRef: this.handleRootEl
    }, function (rootElRef) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHook, {
        hookProps: hookProps,
        content: props.content,
        defaultContent: props.defaultContent,
        backupElRef: _this.rootElRef
      }, function (innerElRef, innerContent) {
        return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent);
      });
    });
  };

  return RenderHook;
}(BaseComponent); // TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook


var CustomContentRenderContext = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);

function ContentHook(props) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(CustomContentRenderContext.Consumer, null, function (renderId) {
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHookInner, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      renderId: renderId
    }, props));
  });
}

var ContentHookInner =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ContentHookInner, _super);

  function ContentHookInner() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.innerElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    return _this;
  }

  ContentHookInner.prototype.render = function () {
    return this.props.children(this.innerElRef, this.renderInnerContent());
  };

  ContentHookInner.prototype.componentDidMount = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.componentDidUpdate = function () {
    this.updateCustomContent();
  };

  ContentHookInner.prototype.componentWillUnmount = function () {
    if (this.customContentInfo && this.customContentInfo.destroy) {
      this.customContentInfo.destroy();
    }
  };

  ContentHookInner.prototype.renderInnerContent = function () {
    var customContentInfo = this.customContentInfo; // only populated if using non-[p]react node(s)

    var innerContent = this.getInnerContent();
    var meta = this.getContentMeta(innerContent); // initial run, or content-type changing? (from vue -> react for example)

    if (!customContentInfo || customContentInfo.contentKey !== meta.contentKey) {
      // clearing old value
      if (customContentInfo) {
        if (customContentInfo.destroy) {
          customContentInfo.destroy();
        }

        customContentInfo = this.customContentInfo = null;
      } // assigning new value


      if (meta.contentKey) {
        customContentInfo = this.customContentInfo = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
          contentKey: meta.contentKey,
          contentVal: innerContent[meta.contentKey]
        }, meta.buildLifecycleFuncs());
      } // updating

    } else if (customContentInfo) {
      customContentInfo.contentVal = innerContent[meta.contentKey];
    }

    return customContentInfo ? [] // signal that something was specified
    : innerContent; // assume a [p]react vdom node. use it
  };

  ContentHookInner.prototype.getInnerContent = function () {
    var props = this.props;
    var innerContent = normalizeContent(props.content, props.hookProps);

    if (innerContent === undefined) {
      // use the default
      innerContent = normalizeContent(props.defaultContent, props.hookProps);
    }

    return innerContent == null ? null : innerContent; // convert undefined to null (better for React)
  };

  ContentHookInner.prototype.getContentMeta = function (innerContent) {
    var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
    var contentKey = '';
    var buildLifecycleFuncs = null;

    if (innerContent) {
      // allowed to be null, for convenience to caller
      for (var searchKey in contentTypeHandlers) {
        if (innerContent[searchKey] !== undefined) {
          contentKey = searchKey;
          buildLifecycleFuncs = contentTypeHandlers[searchKey];
          break;
        }
      }
    }

    return {
      contentKey: contentKey,
      buildLifecycleFuncs: buildLifecycleFuncs
    };
  };

  ContentHookInner.prototype.updateCustomContent = function () {
    if (this.customContentInfo) {
      // for non-[p]react
      this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
      this.customContentInfo.contentVal);
    }
  };

  return ContentHookInner;
}(BaseComponent);

var MountHook =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MountHook, _super);

  function MountHook() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (_this.props.elRef) {
        setRef(_this.props.elRef, rootEl);
      }
    };

    return _this;
  }

  MountHook.prototype.render = function () {
    return this.props.children(this.handleRootEl);
  };

  MountHook.prototype.componentDidMount = function () {
    var callback = this.props.didMount;

    if (callback) {
      callback((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  };

  MountHook.prototype.componentWillUnmount = function () {
    var callback = this.props.willUnmount;

    if (callback) {
      callback((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.props.hookProps), {
        el: this.rootEl
      }));
    }
  };

  return MountHook;
}(BaseComponent);

function buildClassNameNormalizer() {
  var currentGenerator;
  var currentHookProps;
  var currentClassNames = [];
  return function (generator, hookProps) {
    if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
      currentGenerator = generator;
      currentHookProps = hookProps;
      currentClassNames = normalizeClassNames(generator, hookProps);
    }

    return currentClassNames;
  };
}

function normalizeClassNames(classNames, hookProps) {
  if (typeof classNames === 'function') {
    classNames = classNames(hookProps);
  }

  return parseClassNames(classNames);
}

function normalizeContent(input, hookProps) {
  if (typeof input === 'function') {
    return input(hookProps, _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement); // give the function the vdom-creation func
  }

  return input;
}

var ViewRoot =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ViewRoot, _super);

  function ViewRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  ViewRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = {
      view: context.viewApi
    };
    var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: options.viewDidMount,
      willUnmount: options.viewWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", 'fc-view'].concat(customClassNames));
    });
  };

  return ViewRoot;
}(BaseComponent);

function parseViewConfigs(inputs) {
  return mapHash(inputs, parseViewConfig);
}

function parseViewConfig(input) {
  var rawOptions = typeof input === 'function' ? {
    component: input
  } : input;
  var component = rawOptions.component;

  if (rawOptions.content) {
    component = createViewHookComponent(rawOptions); // TODO: remove content/classNames/didMount/etc from options?
  }

  return {
    superType: rawOptions.type,
    component: component,
    rawOptions: rawOptions
  };
}

function createViewHookComponent(options) {
  return function (viewProps) {
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewRoot, {
        viewSpec: context.viewSpec
      }, function (viewElRef, viewClassNames) {
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, viewProps), {
          nextDayThreshold: context.options.nextDayThreshold
        });

        return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
          hookProps: hookProps,
          classNames: options.classNames,
          content: options.content,
          didMount: options.didMount,
          willUnmount: options.willUnmount,
          elRef: viewElRef
        }, function (rootElRef, customClassNames, innerElRef, innerContent) {
          return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
            className: viewClassNames.concat(customClassNames).join(' '),
            ref: rootElRef
          }, innerContent);
        });
      });
    });
  };
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var defaultConfigs = parseViewConfigs(defaultInputs);
  var overrideConfigs = parseViewConfigs(optionOverrides.views);
  var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
  return mapHash(viewDefs, function (viewDef) {
    return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults);
  });
}

function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
  var durationInput = viewDef.overrides.duration || viewDef.defaults.duration || dynamicOptionOverrides.duration || optionOverrides.duration;
  var duration = null;
  var durationUnit = '';
  var singleUnit = '';
  var singleUnitOverrides = {};

  if (durationInput) {
    duration = createDurationCached(durationInput);

    if (duration) {
      // valid?
      var denom = greatestDurationDenominator(duration);
      durationUnit = denom.unit;

      if (denom.value === 1) {
        singleUnit = durationUnit;
        singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
      }
    }
  }

  var queryButtonText = function (optionsSubset) {
    var buttonTextMap = optionsSubset.buttonText || {};
    var buttonTextKey = viewDef.defaults.buttonTextKey;

    if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
      return buttonTextMap[buttonTextKey];
    }

    if (buttonTextMap[viewDef.type] != null) {
      return buttonTextMap[viewDef.type];
    }

    if (buttonTextMap[singleUnit] != null) {
      return buttonTextMap[singleUnit];
    }

    return null;
  };

  var queryButtonTitle = function (optionsSubset) {
    var buttonHints = optionsSubset.buttonHints || {};
    var buttonKey = viewDef.defaults.buttonTextKey; // use same key as text

    if (buttonKey != null && buttonHints[buttonKey] != null) {
      return buttonHints[buttonKey];
    }

    if (buttonHints[viewDef.type] != null) {
      return buttonHints[viewDef.type];
    }

    if (buttonHints[singleUnit] != null) {
      return buttonHints[singleUnit];
    }

    return null;
  };

  return {
    type: viewDef.type,
    component: viewDef.component,
    duration: duration,
    durationUnit: durationUnit,
    singleUnit: singleUnit,
    optionDefaults: viewDef.defaults,
    optionOverrides: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, singleUnitOverrides), viewDef.overrides),
    buttonTextOverride: queryButtonText(dynamicOptionOverrides) || queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
    viewDef.overrides.buttonText,
    buttonTextDefault: queryButtonText(localeDefaults) || viewDef.defaults.buttonText || queryButtonText(BASE_OPTION_DEFAULTS) || viewDef.type,
    // not DRY
    buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) || queryButtonTitle(optionOverrides) || viewDef.overrides.buttonHint,
    buttonTitleDefault: queryButtonTitle(localeDefaults) || viewDef.defaults.buttonHint || queryButtonTitle(BASE_OPTION_DEFAULTS) // will eventually fall back to buttonText

  };
} // hack to get memoization working


var durationInputMap = {};

function createDurationCached(durationInput) {
  var json = JSON.stringify(durationInput);
  var res = durationInputMap[json];

  if (res === undefined) {
    res = createDuration(durationInput);
    durationInputMap[json] = res;
  }

  return res;
}

var DateProfileGenerator =
/** @class */
function () {
  function DateProfileGenerator(props) {
    this.props = props;
    this.nowDate = getNow(props.nowInput, props.dateEnv);
    this.initHiddenDays();
  }
  /* Date Range Computation
  ------------------------------------------------------------------------------------------------------------------*/
  // Builds a structure with info about what the dates/ranges will be for the "prev" view.


  DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(prevDate, -1, forceToValid);
  }; // Builds a structure with info about what the dates/ranges will be for the "next" view.


  DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate, forceToValid) {
    var dateEnv = this.props.dateEnv;
    var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
    currentDateProfile.dateIncrement);
    return this.build(nextDate, 1, forceToValid);
  }; // Builds a structure holding dates/ranges for rendering around the given date.
  // Optional direction param indicates whether the date is being incremented/decremented
  // from its previous value. decremented = -1, incremented = 1 (default).


  DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
    if (forceToValid === void 0) {
      forceToValid = true;
    }

    var props = this.props;
    var validRange;
    var currentInfo;
    var isRangeAllDay;
    var renderRange;
    var activeRange;
    var isValid;
    validRange = this.buildValidRange();
    validRange = this.trimHiddenDays(validRange);

    if (forceToValid) {
      currentDate = constrainMarkerToRange(currentDate, validRange);
    }

    currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
    isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
    renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
    renderRange = this.trimHiddenDays(renderRange);
    activeRange = renderRange;

    if (!props.showNonCurrentDates) {
      activeRange = intersectRanges(activeRange, currentInfo.range);
    }

    activeRange = this.adjustActiveRange(activeRange);
    activeRange = intersectRanges(activeRange, validRange); // might return null
    // it's invalid if the originally requested date is not contained,
    // or if the range is completely outside of the valid range.

    isValid = rangesIntersect(currentInfo.range, validRange);
    return {
      // constraint for where prev/next operations can go and where events can be dragged/resized to.
      // an object with optional start and end properties.
      validRange: validRange,
      // range the view is formally responsible for.
      // for example, a month view might have 1st-31st, excluding padded dates
      currentRange: currentInfo.range,
      // name of largest unit being displayed, like "month" or "week"
      currentRangeUnit: currentInfo.unit,
      isRangeAllDay: isRangeAllDay,
      // dates that display events and accept drag-n-drop
      // will be `null` if no dates accept events
      activeRange: activeRange,
      // date range with a rendered skeleton
      // includes not-active days that need some sort of DOM
      renderRange: renderRange,
      // Duration object that denotes the first visible time of any given day
      slotMinTime: props.slotMinTime,
      // Duration object that denotes the exclusive visible end time of any given day
      slotMaxTime: props.slotMaxTime,
      isValid: isValid,
      // how far the current date will move for a prev/next operation
      dateIncrement: this.buildDateIncrement(currentInfo.duration) // pass a fallback (might be null) ^

    };
  }; // Builds an object with optional start/end properties.
  // Indicates the minimum/maximum dates to display.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildValidRange = function () {
    var input = this.props.validRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(this.props.calendarApi, this.nowDate) : input;
    return this.refineRange(simpleInput) || {
      start: null,
      end: null
    }; // completely open-ended
  }; // Builds a structure with info about the "current" range, the range that is
  // highlighted as being the current month for example.
  // See build() for a description of `direction`.
  // Guaranteed to have `range` and `unit` properties. `duration` is optional.


  DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
    var props = this.props;
    var duration = null;
    var unit = null;
    var range = null;
    var dayCount;

    if (props.duration) {
      duration = props.duration;
      unit = props.durationUnit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    } else if (dayCount = this.props.dayCount) {
      unit = 'day';
      range = this.buildRangeFromDayCount(date, direction, dayCount);
    } else if (range = this.buildCustomVisibleRange(date)) {
      unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
    } else {
      duration = this.getFallbackDuration();
      unit = greatestDurationDenominator(duration).unit;
      range = this.buildRangeFromDuration(date, direction, duration, unit);
    }

    return {
      duration: duration,
      unit: unit,
      range: range
    };
  };

  DateProfileGenerator.prototype.getFallbackDuration = function () {
    return createDuration({
      day: 1
    });
  }; // Returns a new activeRange to have time values (un-ambiguate)
  // slotMinTime or slotMaxTime causes the range to expand.


  DateProfileGenerator.prototype.adjustActiveRange = function (range) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        usesMinMaxTime = _a.usesMinMaxTime,
        slotMinTime = _a.slotMinTime,
        slotMaxTime = _a.slotMaxTime;
    var start = range.start,
        end = range.end;

    if (usesMinMaxTime) {
      // expand active range if slotMinTime is negative (why not when positive?)
      if (asRoughDays(slotMinTime) < 0) {
        start = startOfDay(start); // necessary?

        start = dateEnv.add(start, slotMinTime);
      } // expand active range if slotMaxTime is beyond one day (why not when negative?)


      if (asRoughDays(slotMaxTime) > 1) {
        end = startOfDay(end); // necessary?

        end = addDays(end, -1);
        end = dateEnv.add(end, slotMaxTime);
      }
    }

    return {
      start: start,
      end: end
    };
  }; // Builds the "current" range when it is specified as an explicit duration.
  // `unit` is the already-computed greatestDurationDenominator unit of duration.


  DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var start;
    var end;
    var res; // compute what the alignment should be

    if (!dateAlignment) {
      var dateIncrement = this.props.dateIncrement;

      if (dateIncrement) {
        // use the smaller of the two units
        if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
          dateAlignment = greatestDurationDenominator(dateIncrement).unit;
        } else {
          dateAlignment = unit;
        }
      } else {
        dateAlignment = unit;
      }
    } // if the view displays a single day or smaller


    if (asRoughDays(duration) <= 1) {
      if (this.isHiddenDay(start)) {
        start = this.skipHiddenDays(start, direction);
        start = startOfDay(start);
      }
    }

    function computeRes() {
      start = dateEnv.startOf(date, dateAlignment);
      end = dateEnv.add(start, duration);
      res = {
        start: start,
        end: end
      };
    }

    computeRes(); // if range is completely enveloped by hidden days, go past the hidden days

    if (!this.trimHiddenDays(res)) {
      date = this.skipHiddenDays(date, direction);
      computeRes();
    }

    return res;
  }; // Builds the "current" range when a dayCount is specified.


  DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
    var _a = this.props,
        dateEnv = _a.dateEnv,
        dateAlignment = _a.dateAlignment;
    var runningCount = 0;
    var start = date;
    var end;

    if (dateAlignment) {
      start = dateEnv.startOf(start, dateAlignment);
    }

    start = startOfDay(start);
    start = this.skipHiddenDays(start, direction);
    end = start;

    do {
      end = addDays(end, 1);

      if (!this.isHiddenDay(end)) {
        runningCount += 1;
      }
    } while (runningCount < dayCount);

    return {
      start: start,
      end: end
    };
  }; // Builds a normalized range object for the "visible" range,
  // which is a way to define the currentRange and activeRange at the same time.


  DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
    var props = this.props;
    var input = props.visibleRangeInput;
    var simpleInput = typeof input === 'function' ? input.call(props.calendarApi, props.dateEnv.toDate(date)) : input;
    var range = this.refineRange(simpleInput);

    if (range && (range.start == null || range.end == null)) {
      return null;
    }

    return range;
  }; // Computes the range that will represent the element/cells for *rendering*,
  // but which may have voided days/times.
  // not responsible for trimming hidden days.


  DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
    return currentRange;
  }; // Compute the duration value that should be added/substracted to the current date
  // when a prev/next operation happens.


  DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
    var dateIncrement = this.props.dateIncrement;
    var customAlignment;

    if (dateIncrement) {
      return dateIncrement;
    }

    if (customAlignment = this.props.dateAlignment) {
      return createDuration(1, customAlignment);
    }

    if (fallback) {
      return fallback;
    }

    return createDuration({
      days: 1
    });
  };

  DateProfileGenerator.prototype.refineRange = function (rangeInput) {
    if (rangeInput) {
      var range = parseRange(rangeInput, this.props.dateEnv);

      if (range) {
        range = computeVisibleDayRange(range);
      }

      return range;
    }

    return null;
  };
  /* Hidden Days
  ------------------------------------------------------------------------------------------------------------------*/
  // Initializes internal variables related to calculating hidden days-of-week


  DateProfileGenerator.prototype.initHiddenDays = function () {
    var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden

    var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)

    var dayCnt = 0;
    var i;

    if (this.props.weekends === false) {
      hiddenDays.push(0, 6); // 0=sunday, 6=saturday
    }

    for (i = 0; i < 7; i += 1) {
      if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
        dayCnt += 1;
      }
    }

    if (!dayCnt) {
      throw new Error('invalid hiddenDays'); // all days were hidden? bad.
    }

    this.isHiddenDayHash = isHiddenDayHash;
  }; // Remove days from the beginning and end of the range that are computed as hidden.
  // If the whole range is trimmed off, returns null


  DateProfileGenerator.prototype.trimHiddenDays = function (range) {
    var start = range.start,
        end = range.end;

    if (start) {
      start = this.skipHiddenDays(start);
    }

    if (end) {
      end = this.skipHiddenDays(end, -1, true);
    }

    if (start == null || end == null || start < end) {
      return {
        start: start,
        end: end
      };
    }

    return null;
  }; // Is the current day hidden?
  // `day` is a day-of-week index (0-6), or a Date (used for UTC)


  DateProfileGenerator.prototype.isHiddenDay = function (day) {
    if (day instanceof Date) {
      day = day.getUTCDay();
    }

    return this.isHiddenDayHash[day];
  }; // Incrementing the current day until it is no longer a hidden day, returning a copy.
  // DOES NOT CONSIDER validRange!
  // If the initial value of `date` is not a hidden day, don't do anything.
  // Pass `isExclusive` as `true` if you are dealing with an end date.
  // `inc` defaults to `1` (increment one day forward each time)


  DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
    if (inc === void 0) {
      inc = 1;
    }

    if (isExclusive === void 0) {
      isExclusive = false;
    }

    while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
      date = addDays(date, inc);
    }

    return date;
  };

  return DateProfileGenerator;
}();

function reduceViewType(viewType, action) {
  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      viewType = action.viewType;
  }

  return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
  var _a;

  switch (action.type) {
    case 'SET_OPTION':
      return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));

    default:
      return dynamicOptionOverrides;
  }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
  var dp;

  switch (action.type) {
    case 'CHANGE_VIEW_TYPE':
      return dateProfileGenerator.build(action.dateMarker || currentDate);

    case 'CHANGE_DATE':
      return dateProfileGenerator.build(action.dateMarker);

    case 'PREV':
      dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;

    case 'NEXT':
      dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);

      if (dp.isValid) {
        return dp;
      }

      break;
  }

  return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null;
  return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}

function reduceEventSources(eventSources, action, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  switch (action.type) {
    case 'ADD_EVENT_SOURCES':
      // already parsed
      return addSources(eventSources, action.sources, activeRange, context);

    case 'REMOVE_EVENT_SOURCE':
      return removeSource(eventSources, action.sourceId);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return fetchDirtySources(eventSources, activeRange, context);
      }

      return eventSources;

    case 'FETCH_EVENT_SOURCES':
      return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
      arrayToHash(action.sourceIds) : excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);

    case 'RECEIVE_EVENTS':
    case 'RECEIVE_EVENT_ERROR':
      return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return {};

    default:
      return eventSources;
  }
}

function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
  var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?

  return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}

function computeEventSourcesLoading(eventSources) {
  for (var sourceId in eventSources) {
    if (eventSources[sourceId].isFetching) {
      return true;
    }
  }

  return false;
}

function addSources(eventSourceHash, sources, fetchRange, context) {
  var hash = {};

  for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
    var source = sources_1[_i];
    hash[source.sourceId] = source;
  }

  if (fetchRange) {
    hash = fetchDirtySources(hash, fetchRange, context);
  }

  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSourceHash), hash);
}

function removeSource(eventSourceHash, sourceId) {
  return filterHash(eventSourceHash, function (eventSource) {
    return eventSource.sourceId !== sourceId;
  });
}

function fetchDirtySources(sourceHash, fetchRange, context) {
  return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) {
    return isSourceDirty(eventSource, fetchRange, context);
  }), fetchRange, false, context);
}

function isSourceDirty(eventSource, fetchRange, context) {
  if (!doesSourceNeedRange(eventSource, context)) {
    return !eventSource.latestFetchId;
  }

  return !context.options.lazyFetching || !eventSource.fetchRange || eventSource.isFetching || // always cancel outdated in-progress fetches
  fetchRange.start < eventSource.fetchRange.start || fetchRange.end > eventSource.fetchRange.end;
}

function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
  var nextSources = {};

  for (var sourceId in prevSources) {
    var source = prevSources[sourceId];

    if (sourceIdHash[sourceId]) {
      nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
    } else {
      nextSources[sourceId] = source;
    }
  }

  return nextSources;
}

function fetchSource(eventSource, fetchRange, isRefetch, context) {
  var options = context.options,
      calendarApi = context.calendarApi;
  var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
  var fetchId = guid();
  sourceDef.fetch({
    eventSource: eventSource,
    range: fetchRange,
    isRefetch: isRefetch,
    context: context
  }, function (res) {
    var rawEvents = res.rawEvents;

    if (options.eventSourceSuccess) {
      rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    if (eventSource.success) {
      rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
    }

    context.dispatch({
      type: 'RECEIVE_EVENTS',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      rawEvents: rawEvents
    });
  }, function (error) {
    console.warn(error.message, error);

    if (options.eventSourceFailure) {
      options.eventSourceFailure.call(calendarApi, error);
    }

    if (eventSource.failure) {
      eventSource.failure(error);
    }

    context.dispatch({
      type: 'RECEIVE_EVENT_ERROR',
      sourceId: eventSource.sourceId,
      fetchId: fetchId,
      fetchRange: fetchRange,
      error: error
    });
  });
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSource), {
    isFetching: true,
    latestFetchId: fetchId
  });
}

function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
  var _a;

  var eventSource = sourceHash[sourceId];

  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, sourceHash), (_a = {}, _a[sourceId] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSource), {
      isFetching: false,
      fetchRange: fetchRange
    }), _a));
  }

  return sourceHash;
}

function excludeStaticSources(eventSources, context) {
  return filterHash(eventSources, function (eventSource) {
    return doesSourceNeedRange(eventSource, context);
  });
}

function parseInitialSources(rawOptions, context) {
  var refiners = buildEventSourceRefiners(context);
  var rawSources = [].concat(rawOptions.eventSources || []);
  var sources = []; // parsed

  if (rawOptions.initialEvents) {
    rawSources.unshift(rawOptions.initialEvents);
  }

  if (rawOptions.events) {
    rawSources.unshift(rawOptions.events);
  }

  for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
    var rawSource = rawSources_1[_i];
    var source = parseEventSource(rawSource, context, refiners);

    if (source) {
      sources.push(source);
    }
  }

  return sources;
}

function doesSourceNeedRange(eventSource, context) {
  var defs = context.pluginHooks.eventSourceDefs;
  return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
  switch (action.type) {
    case 'RECEIVE_EVENTS':
      // raw
      return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);

    case 'ADD_EVENTS':
      // already parsed, but not expanded
      return addEvent(eventStore, action.eventStore, // new ones
      dateProfile ? dateProfile.activeRange : null, context);

    case 'RESET_EVENTS':
      return action.eventStore;

    case 'MERGE_EVENTS':
      // already parsed and expanded
      return mergeEventStores(eventStore, action.eventStore);

    case 'PREV': // TODO: how do we track all actions that affect dateProfile :(

    case 'NEXT':
    case 'CHANGE_DATE':
    case 'CHANGE_VIEW_TYPE':
      if (dateProfile) {
        return expandRecurring(eventStore, dateProfile.activeRange, context);
      }

      return eventStore;

    case 'REMOVE_EVENTS':
      return excludeSubEventStore(eventStore, action.eventStore);

    case 'REMOVE_EVENT_SOURCE':
      return excludeEventsBySourceId(eventStore, action.sourceId);

    case 'REMOVE_ALL_EVENT_SOURCES':
      return filterEventStoreDefs(eventStore, function (eventDef) {
        return !eventDef.sourceId // only keep events with no source id
        ;
      });

    case 'REMOVE_ALL_EVENTS':
      return createEmptyEventStore();

    default:
      return eventStore;
  }
}

function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
  if (eventSource && // not already removed
  fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
  ) {
    var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);

    if (fetchRange) {
      subset = expandRecurring(subset, fetchRange, context);
    }

    return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
  }

  return eventStore;
}

function transformRawEvents(rawEvents, eventSource, context) {
  var calEachTransform = context.options.eventDataTransform;
  var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;

  if (sourceEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
  }

  if (calEachTransform) {
    rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
  }

  return rawEvents;
}

function transformEachRawEvent(rawEvents, func) {
  var refinedEvents;

  if (!func) {
    refinedEvents = rawEvents;
  } else {
    refinedEvents = [];

    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
      var rawEvent = rawEvents_1[_i];
      var refinedEvent = func(rawEvent);

      if (refinedEvent) {
        refinedEvents.push(refinedEvent);
      } else if (refinedEvent == null) {
        refinedEvents.push(rawEvent);
      } // if a different falsy value, do nothing

    }
  }

  return refinedEvents;
}

function addEvent(eventStore, subset, expandRange, context) {
  if (expandRange) {
    subset = expandRecurring(subset, expandRange, context);
  }

  return mergeEventStores(eventStore, subset);
}

function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
  var defs = eventStore.defs;
  var instances = mapHash(eventStore.instances, function (instance) {
    var def = defs[instance.defId];

    if (def.allDay || def.recurringDef) {
      return instance; // isn't dependent on timezone
    }

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, instance), {
      range: {
        start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
        end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo))
      },
      forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo,
      forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo
    });
  });
  return {
    defs: defs,
    instances: instances
  };
}

function excludeEventsBySourceId(eventStore, sourceId) {
  return filterEventStoreDefs(eventStore, function (eventDef) {
    return eventDef.sourceId !== sourceId;
  });
} // QUESTION: why not just return instances? do a general object-property-exclusion util


function excludeInstances(eventStore, removals) {
  return {
    defs: eventStore.defs,
    instances: filterHash(eventStore.instances, function (instance) {
      return !removals[instance.instanceId];
    })
  };
}

function reduceDateSelection(currentSelection, action) {
  switch (action.type) {
    case 'UNSELECT_DATES':
      return null;

    case 'SELECT_DATES':
      return action.selection;

    default:
      return currentSelection;
  }
}

function reduceSelectedEvent(currentInstanceId, action) {
  switch (action.type) {
    case 'UNSELECT_EVENT':
      return '';

    case 'SELECT_EVENT':
      return action.eventInstanceId;

    default:
      return currentInstanceId;
  }
}

function reduceEventDrag(currentDrag, action) {
  var newDrag;

  switch (action.type) {
    case 'UNSET_EVENT_DRAG':
      return null;

    case 'SET_EVENT_DRAG':
      newDrag = action.state;
      return {
        affectedEvents: newDrag.affectedEvents,
        mutatedEvents: newDrag.mutatedEvents,
        isEvent: newDrag.isEvent
      };

    default:
      return currentDrag;
  }
}

function reduceEventResize(currentResize, action) {
  var newResize;

  switch (action.type) {
    case 'UNSET_EVENT_RESIZE':
      return null;

    case 'SET_EVENT_RESIZE':
      newResize = action.state;
      return {
        affectedEvents: newResize.affectedEvents,
        mutatedEvents: newResize.mutatedEvents,
        isEvent: newResize.isEvent
      };

    default:
      return currentResize;
  }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  var footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
  return {
    header: header,
    footer: footer
  };
}

function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
  var sectionWidgets = {};
  var viewsWithButtons = [];
  var hasTitle = false;

  for (var sectionName in sectionStrHash) {
    var sectionStr = sectionStrHash[sectionName];
    var sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
    sectionWidgets[sectionName] = sectionRes.widgets;
    viewsWithButtons.push.apply(viewsWithButtons, sectionRes.viewsWithButtons);
    hasTitle = hasTitle || sectionRes.hasTitle;
  }

  return {
    sectionWidgets: sectionWidgets,
    viewsWithButtons: viewsWithButtons,
    hasTitle: hasTitle
  };
}
/*
BAD: querying icons and text here. should be done at render time
*/


function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
calendarOptionOverrides, // overrides only!, unrefined :(
theme, viewSpecs, calendarApi) {
  var isRtl = calendarOptions.direction === 'rtl';
  var calendarCustomButtons = calendarOptions.customButtons || {};
  var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
  var calendarButtonText = calendarOptions.buttonText || {};
  var calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
  var calendarButtonHints = calendarOptions.buttonHints || {};
  var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
  var viewsWithButtons = [];
  var hasTitle = false;
  var widgets = sectionSubstrs.map(function (buttonGroupStr) {
    return buttonGroupStr.split(',').map(function (buttonName) {
      if (buttonName === 'title') {
        hasTitle = true;
        return {
          buttonName: buttonName
        };
      }

      var customButtonProps;
      var viewSpec;
      var buttonClick;
      var buttonIcon; // only one of these will be set

      var buttonText; // "

      var buttonHint; // ^ for the title="" attribute, for accessibility

      if (customButtonProps = calendarCustomButtons[buttonName]) {
        buttonClick = function (ev) {
          if (customButtonProps.click) {
            customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
          }
        };

        (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = customButtonProps.text);
        buttonHint = customButtonProps.hint || customButtonProps.text;
      } else if (viewSpec = viewSpecs[buttonName]) {
        viewsWithButtons.push(buttonName);

        buttonClick = function () {
          calendarApi.changeView(buttonName);
        };

        (buttonText = viewSpec.buttonTextOverride) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = viewSpec.buttonTextDefault);
        var textFallback = viewSpec.buttonTextOverride || viewSpec.buttonTextDefault;
        buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride || viewSpec.buttonTitleDefault || calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
        textFallback);
      } else if (calendarApi[buttonName]) {
        // a calendarApi method
        buttonClick = function () {
          calendarApi[buttonName]();
        };

        (buttonText = calendarButtonTextOverrides[buttonName]) || (buttonIcon = theme.getIconClass(buttonName, isRtl)) || (buttonText = calendarButtonText[buttonName]); // everything else is considered default

        if (buttonName === 'prevYear' || buttonName === 'nextYear') {
          var prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
          buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] || calendarButtonHints[prevOrNext], [calendarButtonText.year || 'year', 'year'], calendarButtonText[buttonName]);
        } else {
          buttonHint = function (navUnit) {
            return formatWithOrdinals(calendarButtonHintOverrides[buttonName] || calendarButtonHints[buttonName], [calendarButtonText[navUnit] || navUnit, navUnit], calendarButtonText[buttonName]);
          };
        }
      }

      return {
        buttonName: buttonName,
        buttonClick: buttonClick,
        buttonIcon: buttonIcon,
        buttonText: buttonText,
        buttonHint: buttonHint
      };
    });
  });
  return {
    widgets: widgets,
    viewsWithButtons: viewsWithButtons,
    hasTitle: hasTitle
  };
}

var eventSourceDef$2 = {
  ignoreRange: true,
  parseMeta: function (refined) {
    if (Array.isArray(refined.events)) {
      return refined.events;
    }

    return null;
  },
  fetch: function (arg, success) {
    success({
      rawEvents: arg.eventSource.meta
    });
  }
};
var arrayEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$2]
});
var eventSourceDef$1 = {
  parseMeta: function (refined) {
    if (typeof refined.events === 'function') {
      return refined.events;
    }

    return null;
  },
  fetch: function (arg, success, failure) {
    var dateEnv = arg.context.dateEnv;
    var func = arg.eventSource.meta;
    unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function (rawEvents) {
      success({
        rawEvents: rawEvents
      }); // needs an object response
    }, failure);
  }
};
var funcEventSourcePlugin = createPlugin({
  eventSourceDefs: [eventSourceDef$1]
});

function requestJson(method, url, params, successCallback, failureCallback) {
  method = method.toUpperCase();
  var body = null;

  if (method === 'GET') {
    url = injectQueryStringParams(url, params);
  } else {
    body = encodeParams(params);
  }

  var xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  if (method !== 'GET') {
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  }

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      var parsed = false;
      var res = void 0;

      try {
        res = JSON.parse(xhr.responseText);
        parsed = true;
      } catch (err) {// will handle parsed=false
      }

      if (parsed) {
        successCallback(res, xhr);
      } else {
        failureCallback('Failure parsing JSON', xhr);
      }
    } else {
      failureCallback('Request failed', xhr);
    }
  };

  xhr.onerror = function () {
    failureCallback('Request failed', xhr);
  };

  xhr.send(body);
}

function injectQueryStringParams(url, params) {
  return url + (url.indexOf('?') === -1 ? '?' : '&') + encodeParams(params);
}

function encodeParams(params) {
  var parts = [];

  for (var key in params) {
    parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
  }

  return parts.join('&');
}

var JSON_FEED_EVENT_SOURCE_REFINERS = {
  method: String,
  extraParams: identity,
  startParam: String,
  endParam: String,
  timeZoneParam: String
};
var eventSourceDef = {
  parseMeta: function (refined) {
    if (refined.url && (refined.format === 'json' || !refined.format)) {
      return {
        url: refined.url,
        format: 'json',
        method: (refined.method || 'GET').toUpperCase(),
        extraParams: refined.extraParams,
        startParam: refined.startParam,
        endParam: refined.endParam,
        timeZoneParam: refined.timeZoneParam
      };
    }

    return null;
  },
  fetch: function (arg, success, failure) {
    var meta = arg.eventSource.meta;
    var requestParams = buildRequestParams(meta, arg.range, arg.context);
    requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
      success({
        rawEvents: rawEvents,
        xhr: xhr
      });
    }, function (errorMessage, xhr) {
      failure({
        message: errorMessage,
        xhr: xhr
      });
    });
  }
};
var jsonFeedEventSourcePlugin = createPlugin({
  eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
  eventSourceDefs: [eventSourceDef]
});

function buildRequestParams(meta, range, context) {
  var dateEnv = context.dateEnv,
      options = context.options;
  var startParam;
  var endParam;
  var timeZoneParam;
  var customRequestParams;
  var params = {};
  startParam = meta.startParam;

  if (startParam == null) {
    startParam = options.startParam;
  }

  endParam = meta.endParam;

  if (endParam == null) {
    endParam = options.endParam;
  }

  timeZoneParam = meta.timeZoneParam;

  if (timeZoneParam == null) {
    timeZoneParam = options.timeZoneParam;
  } // retrieve any outbound GET/POST data from the options


  if (typeof meta.extraParams === 'function') {
    // supplied as a function that returns a key/value object
    customRequestParams = meta.extraParams();
  } else {
    // probably supplied as a straight key/value object
    customRequestParams = meta.extraParams || {};
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(params, customRequestParams);

  params[startParam] = dateEnv.formatIso(range.start);
  params[endParam] = dateEnv.formatIso(range.end);

  if (dateEnv.timeZone !== 'local') {
    params[timeZoneParam] = dateEnv.timeZone;
  }

  return params;
}

var SIMPLE_RECURRING_REFINERS = {
  daysOfWeek: identity,
  startTime: createDuration,
  endTime: createDuration,
  duration: createDuration,
  startRecur: identity,
  endRecur: identity
};
var recurring = {
  parse: function (refined, dateEnv) {
    if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
      var recurringData = {
        daysOfWeek: refined.daysOfWeek || null,
        startTime: refined.startTime || null,
        endTime: refined.endTime || null,
        startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
        endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null
      };
      var duration = void 0;

      if (refined.duration) {
        duration = refined.duration;
      }

      if (!duration && refined.startTime && refined.endTime) {
        duration = subtractDurations(refined.endTime, refined.startTime);
      }

      return {
        allDayGuess: Boolean(!refined.startTime && !refined.endTime),
        duration: duration,
        typeData: recurringData // doesn't need endTime anymore but oh well

      };
    }

    return null;
  },
  expand: function (typeData, framingRange, dateEnv) {
    var clippedFramingRange = intersectRanges(framingRange, {
      start: typeData.startRecur,
      end: typeData.endRecur
    });

    if (clippedFramingRange) {
      return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
    }

    return [];
  }
};
var simpleRecurringEventsPlugin = createPlugin({
  recurringTypes: [recurring],
  eventRefiners: SIMPLE_RECURRING_REFINERS
});

function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
  var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
  var dayMarker = startOfDay(framingRange.start);
  var endMarker = framingRange.end;
  var instanceStarts = [];

  while (dayMarker < endMarker) {
    var instanceStart // if everyday, or this particular day-of-week
    = void 0; // if everyday, or this particular day-of-week

    if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
      if (startTime) {
        instanceStart = dateEnv.add(dayMarker, startTime);
      } else {
        instanceStart = dayMarker;
      }

      instanceStarts.push(instanceStart);
    }

    dayMarker = addDays(dayMarker, 1);
  }

  return instanceStarts;
}

var changeHandlerPlugin = createPlugin({
  optionChangeHandlers: {
    events: function (events, context) {
      handleEventSources([events], context);
    },
    eventSources: handleEventSources
  }
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/

function handleEventSources(inputs, context) {
  var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
  var newInputs = [];

  for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
    var input = inputs_1[_i];
    var inputFound = false;

    for (var i = 0; i < unfoundSources.length; i += 1) {
      if (unfoundSources[i]._raw === input) {
        unfoundSources.splice(i, 1); // delete

        inputFound = true;
        break;
      }
    }

    if (!inputFound) {
      newInputs.push(input);
    }
  }

  for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
    var unfoundSource = unfoundSources_1[_a];
    context.dispatch({
      type: 'REMOVE_EVENT_SOURCE',
      sourceId: unfoundSource.sourceId
    });
  }

  for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
    var newInput = newInputs_1[_b];
    context.calendarApi.addEventSource(newInput);
  }
}

function handleDateProfile(dateProfile, context) {
  context.emitter.trigger('datesSet', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), {
    view: context.viewApi
  }));
}

function handleEventStore(eventStore, context) {
  var emitter = context.emitter;

  if (emitter.hasHandlers('eventsSet')) {
    emitter.trigger('eventsSet', buildEventApis(eventStore, context));
  }
}
/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/


var globalPlugins = [arrayEventSourcePlugin, funcEventSourcePlugin, jsonFeedEventSourcePlugin, simpleRecurringEventsPlugin, changeHandlerPlugin, createPlugin({
  isLoadingFuncs: [function (state) {
    return computeEventSourcesLoading(state.eventSources);
  }],
  contentTypeHandlers: {
    html: buildHtmlRenderer,
    domNodes: buildDomNodeRenderer
  },
  propSetHandlers: {
    dateProfile: handleDateProfile,
    eventStore: handleEventStore
  }
})];

function buildHtmlRenderer() {
  var currentEl = null;
  var currentHtml = '';

  function render(el, html) {
    if (el !== currentEl || html !== currentHtml) {
      el.innerHTML = html;
    }

    currentEl = el;
    currentHtml = html;
  }

  function destroy() {
    currentEl.innerHTML = '';
    currentEl = null;
    currentHtml = '';
  }

  return {
    render: render,
    destroy: destroy
  };
}

function buildDomNodeRenderer() {
  var currentEl = null;
  var currentDomNodes = [];

  function render(el, domNodes) {
    var newDomNodes = Array.prototype.slice.call(domNodes);

    if (el !== currentEl || !isArraysEqual(currentDomNodes, newDomNodes)) {
      // append first, remove second (for scroll resetting)
      for (var _i = 0, newDomNodes_1 = newDomNodes; _i < newDomNodes_1.length; _i++) {
        var newNode = newDomNodes_1[_i];
        el.appendChild(newNode);
      }

      destroy();
    }

    currentEl = el;
    currentDomNodes = newDomNodes;
  }

  function destroy() {
    currentDomNodes.forEach(removeElement);
    currentDomNodes = [];
    currentEl = null;
  }

  return {
    render: render,
    destroy: destroy
  };
}

var DelayedRunner =
/** @class */
function () {
  function DelayedRunner(drainedOption) {
    this.drainedOption = drainedOption;
    this.isRunning = false;
    this.isDirty = false;
    this.pauseDepths = {};
    this.timeoutId = 0;
  }

  DelayedRunner.prototype.request = function (delay) {
    this.isDirty = true;

    if (!this.isPaused()) {
      this.clearTimeout();

      if (delay == null) {
        this.tryDrain();
      } else {
        this.timeoutId = setTimeout( // NOT OPTIMAL! TODO: look at debounce
        this.tryDrain.bind(this), delay);
      }
    }
  };

  DelayedRunner.prototype.pause = function (scope) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;
    pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
    this.clearTimeout();
  };

  DelayedRunner.prototype.resume = function (scope, force) {
    if (scope === void 0) {
      scope = '';
    }

    var pauseDepths = this.pauseDepths;

    if (scope in pauseDepths) {
      if (force) {
        delete pauseDepths[scope];
      } else {
        pauseDepths[scope] -= 1;
        var depth = pauseDepths[scope];

        if (depth <= 0) {
          delete pauseDepths[scope];
        }
      }

      this.tryDrain();
    }
  };

  DelayedRunner.prototype.isPaused = function () {
    return Object.keys(this.pauseDepths).length;
  };

  DelayedRunner.prototype.tryDrain = function () {
    if (!this.isRunning && !this.isPaused()) {
      this.isRunning = true;

      while (this.isDirty) {
        this.isDirty = false;
        this.drained(); // might set isDirty to true again
      }

      this.isRunning = false;
    }
  };

  DelayedRunner.prototype.clear = function () {
    this.clearTimeout();
    this.isDirty = false;
    this.pauseDepths = {};
  };

  DelayedRunner.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = 0;
    }
  };

  DelayedRunner.prototype.drained = function () {
    if (this.drainedOption) {
      this.drainedOption();
    }
  };

  return DelayedRunner;
}();

var TaskRunner =
/** @class */
function () {
  function TaskRunner(runTaskOption, drainedOption) {
    this.runTaskOption = runTaskOption;
    this.drainedOption = drainedOption;
    this.queue = [];
    this.delayedRunner = new DelayedRunner(this.drain.bind(this));
  }

  TaskRunner.prototype.request = function (task, delay) {
    this.queue.push(task);
    this.delayedRunner.request(delay);
  };

  TaskRunner.prototype.pause = function (scope) {
    this.delayedRunner.pause(scope);
  };

  TaskRunner.prototype.resume = function (scope, force) {
    this.delayedRunner.resume(scope, force);
  };

  TaskRunner.prototype.drain = function () {
    var queue = this.queue;

    while (queue.length) {
      var completedTasks = [];
      var task = void 0;

      while (task = queue.shift()) {
        this.runTask(task);
        completedTasks.push(task);
      }

      this.drained(completedTasks);
    } // keep going, in case new tasks were added in the drained handler

  };

  TaskRunner.prototype.runTask = function (task) {
    if (this.runTaskOption) {
      this.runTaskOption(task);
    }
  };

  TaskRunner.prototype.drained = function (completedTasks) {
    if (this.drainedOption) {
      this.drainedOption(completedTasks);
    }
  };

  return TaskRunner;
}(); // Computes what the title at the top of the calendarApi should be for this view


function buildTitle(dateProfile, viewOptions, dateEnv) {
  var range; // for views that span a large unit of time, show the proper interval, ignoring stray days before and after

  if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
    range = dateProfile.currentRange;
  } else {
    // for day units or smaller, use the actual day range
    range = dateProfile.activeRange;
  }

  return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
    isEndExclusive: dateProfile.isRangeAllDay,
    defaultSeparator: viewOptions.titleRangeSeparator
  });
} // Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.


function buildTitleFormat(dateProfile) {
  var currentRangeUnit = dateProfile.currentRangeUnit;

  if (currentRangeUnit === 'year') {
    return {
      year: 'numeric'
    };
  }

  if (currentRangeUnit === 'month') {
    return {
      year: 'numeric',
      month: 'long'
    }; // like "September 2014"
  }

  var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);

  if (days !== null && days > 1) {
    // multi-day range. shorter, like "Sep 9 - 10 2014"
    return {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
  } // one day. longer, like "September 9 2014"


  return {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
} // in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too


var CalendarDataManager =
/** @class */
function () {
  function CalendarDataManager(props) {
    var _this = this;

    this.computeOptionsData = memoize(this._computeOptionsData);
    this.computeCurrentViewData = memoize(this._computeCurrentViewData);
    this.organizeRawLocales = memoize(organizeRawLocales);
    this.buildLocale = memoize(buildLocale);
    this.buildPluginHooks = buildBuildPluginHooks();
    this.buildDateEnv = memoize(buildDateEnv);
    this.buildTheme = memoize(buildTheme);
    this.parseToolbars = memoize(parseToolbars);
    this.buildViewSpecs = memoize(buildViewSpecs);
    this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
    this.buildViewApi = memoize(buildViewApi);
    this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
    this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
    this.buildEventUiBases = memoize(buildEventUiBases);
    this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
    this.buildTitle = memoize(buildTitle);
    this.emitter = new Emitter();
    this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
    this.currentCalendarOptionsInput = {};
    this.currentCalendarOptionsRefined = {};
    this.currentViewOptionsInput = {};
    this.currentViewOptionsRefined = {};
    this.currentCalendarOptionsRefiners = {};

    this.getCurrentData = function () {
      return _this.data;
    };

    this.dispatch = function (action) {
      _this.actionRunner.request(action); // protects against recursive calls to _handleAction

    };

    this.props = props;
    this.actionRunner.pause();
    var dynamicOptionOverrides = {};
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    this.emitter.setThisContext(props.calendarApi);
    this.emitter.setOptions(currentViewData.options);
    var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
    var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);

    if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }; // needs to be after setThisContext

    for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
      var callback = _a[_i];
      callback(calendarContext);
    } // NOT DRY


    var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
    var initialState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      businessHours: this.parseContextBusinessHours(calendarContext),
      eventSources: eventSources,
      eventUiBases: {},
      eventStore: createEmptyEventStore(),
      renderableEventStore: createEmptyEventStore(),
      dateSelection: null,
      eventSelection: '',
      eventDrag: null,
      eventResize: null,
      selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig
    };

    var contextAndState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, calendarContext), initialState);

    for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
      var reducer = _c[_b];

      (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(initialState, reducer(null, null, contextAndState));
    }

    if (computeIsLoading(initialState, calendarContext)) {
      this.emitter.trigger('loading', true); // NOT DRY
    }

    this.state = initialState;
    this.updateData();
    this.actionRunner.resume();
  }

  CalendarDataManager.prototype.resetOptions = function (optionOverrides, append) {
    var props = this.props;
    props.optionOverrides = append ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props.optionOverrides), optionOverrides) : optionOverrides;
    this.actionRunner.request({
      type: 'NOTHING'
    });
  };

  CalendarDataManager.prototype._handleAction = function (action) {
    var _a = this,
        props = _a.props,
        state = _a.state,
        emitter = _a.emitter;

    var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
    var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
    var currentViewType = reduceViewType(state.currentViewType, action);
    var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides); // wire things up
    // TODO: not DRY

    props.calendarApi.currentDataManager = this;
    emitter.setThisContext(props.calendarApi);
    emitter.setOptions(currentViewData.options);
    var calendarContext = {
      dateEnv: optionsData.dateEnv,
      options: optionsData.calendarOptions,
      pluginHooks: optionsData.pluginHooks,
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: emitter,
      getCurrentData: this.getCurrentData
    };
    var currentDate = state.currentDate,
        dateProfile = state.dateProfile;

    if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) {
      // hack
      dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
    }

    currentDate = reduceCurrentDate(currentDate, action);
    dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);

    if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
    action.type === 'NEXT' || // "
    !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
      currentDate = dateProfile.currentRange.start;
    }

    var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
    var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
    var isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading

    var renderableEventStore = isEventsLoading && !currentViewData.options.progressiveEventRendering ? state.renderableEventStore || eventStore : // try from previous state
    eventStore;

    var _b = this.buildViewUiProps(calendarContext),
        eventUiSingleBase = _b.eventUiSingleBase,
        selectionConfig = _b.selectionConfig; // will memoize obj


    var eventUiBySource = this.buildEventUiBySource(eventSources);
    var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
    var newState = {
      dynamicOptionOverrides: dynamicOptionOverrides,
      currentViewType: currentViewType,
      currentDate: currentDate,
      dateProfile: dateProfile,
      eventSources: eventSources,
      eventStore: eventStore,
      renderableEventStore: renderableEventStore,
      selectionConfig: selectionConfig,
      eventUiBases: eventUiBases,
      businessHours: this.parseContextBusinessHours(calendarContext),
      dateSelection: reduceDateSelection(state.dateSelection, action),
      eventSelection: reduceSelectedEvent(state.eventSelection, action),
      eventDrag: reduceEventDrag(state.eventDrag, action),
      eventResize: reduceEventResize(state.eventResize, action)
    };

    var contextAndState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, calendarContext), newState);

    for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
      var reducer = _c[_i];

      (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value

    }

    var wasLoading = computeIsLoading(state, calendarContext);
    var isLoading = computeIsLoading(newState, calendarContext); // TODO: use propSetHandlers in plugin system

    if (!wasLoading && isLoading) {
      emitter.trigger('loading', true);
    } else if (wasLoading && !isLoading) {
      emitter.trigger('loading', false);
    }

    this.state = newState;

    if (props.onAction) {
      props.onAction(action);
    }
  };

  CalendarDataManager.prototype.updateData = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var oldData = this.data;
    var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
    var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);

    var data = this.data = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv),
      calendarApi: props.calendarApi,
      dispatch: this.dispatch,
      emitter: this.emitter,
      getCurrentData: this.getCurrentData
    }, optionsData), currentViewData), state);

    var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
    var oldCalendarOptions = oldData && oldData.calendarOptions;
    var newCalendarOptions = optionsData.calendarOptions;

    if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
      if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
        // hack
        state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
        state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
      }

      for (var optionName in changeHandlers) {
        if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
          changeHandlers[optionName](newCalendarOptions[optionName], data);
        }
      }
    }

    if (props.onData) {
      props.onData(data);
    }
  };

  CalendarDataManager.prototype._computeOptionsData = function (optionOverrides, dynamicOptionOverrides, calendarApi) {
    // TODO: blacklist options that are handled by optionChangeHandlers
    var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        pluginHooks = _a.pluginHooks,
        localeDefaults = _a.localeDefaults,
        availableLocaleData = _a.availableLocaleData,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
    var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
    var theme = this.buildTheme(refinedOptions, pluginHooks);
    var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
    return {
      calendarOptions: refinedOptions,
      pluginHooks: pluginHooks,
      dateEnv: dateEnv,
      viewSpecs: viewSpecs,
      theme: theme,
      toolbarConfig: toolbarConfig,
      localeDefaults: localeDefaults,
      availableRawLocales: availableLocaleData.map
    };
  }; // always called from behind a memoizer


  CalendarDataManager.prototype.processRawCalendarOptions = function (optionOverrides, dynamicOptionOverrides) {
    var _a = mergeRawOptions([BASE_OPTION_DEFAULTS, optionOverrides, dynamicOptionOverrides]),
        locales = _a.locales,
        locale = _a.locale;

    var availableLocaleData = this.organizeRawLocales(locales);
    var availableRawLocales = availableLocaleData.map;
    var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
    var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);

    var refiners = this.currentCalendarOptionsRefiners = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var extra = {};
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, localeDefaults, optionOverrides, dynamicOptionOverrides]);
    var refined = {};
    var currentRaw = this.currentCalendarOptionsInput;
    var currentRefined = this.currentCalendarOptionsRefined;
    var anyChanges = false;

    for (var optionName in raw) {
      if (optionName !== 'plugins') {
        // because plugins is special-cased
        if (raw[optionName] === currentRaw[optionName] || COMPLEX_OPTION_COMPARATORS[optionName] && optionName in currentRaw && COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])) {
          refined[optionName] = currentRefined[optionName];
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
          anyChanges = true;
        } else {
          extra[optionName] = currentRaw[optionName];
        }
      }
    }

    if (anyChanges) {
      this.currentCalendarOptionsInput = raw;
      this.currentCalendarOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentCalendarOptionsInput,
      refinedOptions: this.currentCalendarOptionsRefined,
      pluginHooks: pluginHooks,
      availableLocaleData: availableLocaleData,
      localeDefaults: localeDefaults,
      extra: extra
    };
  };

  CalendarDataManager.prototype._computeCurrentViewData = function (viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
    var viewSpec = optionsData.viewSpecs[viewType];

    if (!viewSpec) {
      throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
    }

    var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides),
        refinedOptions = _a.refinedOptions,
        extra = _a.extra;

    warnUnknownOptions(extra);
    var dateProfileGenerator = this.buildDateProfileGenerator({
      dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
      duration: viewSpec.duration,
      durationUnit: viewSpec.durationUnit,
      usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
      dateEnv: optionsData.dateEnv,
      calendarApi: this.props.calendarApi,
      slotMinTime: refinedOptions.slotMinTime,
      slotMaxTime: refinedOptions.slotMaxTime,
      showNonCurrentDates: refinedOptions.showNonCurrentDates,
      dayCount: refinedOptions.dayCount,
      dateAlignment: refinedOptions.dateAlignment,
      dateIncrement: refinedOptions.dateIncrement,
      hiddenDays: refinedOptions.hiddenDays,
      weekends: refinedOptions.weekends,
      nowInput: refinedOptions.now,
      validRangeInput: refinedOptions.validRange,
      visibleRangeInput: refinedOptions.visibleRange,
      monthMode: refinedOptions.monthMode,
      fixedWeekCount: refinedOptions.fixedWeekCount
    });
    var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
    return {
      viewSpec: viewSpec,
      options: refinedOptions,
      dateProfileGenerator: dateProfileGenerator,
      viewApi: viewApi
    };
  };

  CalendarDataManager.prototype.processRawViewOptions = function (viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
    var raw = mergeRawOptions([BASE_OPTION_DEFAULTS, viewSpec.optionDefaults, localeDefaults, optionOverrides, viewSpec.optionOverrides, dynamicOptionOverrides]);

    var refiners = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);

    var refined = {};
    var currentRaw = this.currentViewOptionsInput;
    var currentRefined = this.currentViewOptionsRefined;
    var anyChanges = false;
    var extra = {};

    for (var optionName in raw) {
      if (raw[optionName] === currentRaw[optionName]) {
        refined[optionName] = currentRefined[optionName];
      } else {
        if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
          if (optionName in this.currentCalendarOptionsRefined) {
            // might be an "extra" prop
            refined[optionName] = this.currentCalendarOptionsRefined[optionName];
          }
        } else if (refiners[optionName]) {
          refined[optionName] = refiners[optionName](raw[optionName]);
        } else {
          extra[optionName] = raw[optionName];
        }

        anyChanges = true;
      }
    }

    if (anyChanges) {
      this.currentViewOptionsInput = raw;
      this.currentViewOptionsRefined = refined;
    }

    return {
      rawOptions: this.currentViewOptionsInput,
      refinedOptions: this.currentViewOptionsRefined,
      extra: extra
    };
  };

  return CalendarDataManager;
}();

function buildDateEnv(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
  var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
  return new DateEnv({
    calendarSystem: 'gregory',
    timeZone: timeZone,
    namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
    locale: locale,
    weekNumberCalculation: weekNumberCalculation,
    firstDay: firstDay,
    weekText: weekText,
    cmdFormatter: pluginHooks.cmdFormatter,
    defaultSeparator: defaultSeparator
  });
}

function buildTheme(options, pluginHooks) {
  var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
  return new ThemeClass(options);
}

function buildDateProfileGenerator(props) {
  var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
  return new DateProfileGeneratorClass(props);
}

function buildViewApi(type, getCurrentData, dateEnv) {
  return new ViewApi(type, getCurrentData, dateEnv);
}

function buildEventUiBySource(eventSources) {
  return mapHash(eventSources, function (eventSource) {
    return eventSource.ui;
  });
}

function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
  var eventUiBases = {
    '': eventUiSingleBase
  };

  for (var defId in eventDefs) {
    var def = eventDefs[defId];

    if (def.sourceId && eventUiBySource[def.sourceId]) {
      eventUiBases[defId] = eventUiBySource[def.sourceId];
    }
  }

  return eventUiBases;
}

function buildViewUiProps(calendarContext) {
  var options = calendarContext.options;
  return {
    eventUiSingleBase: createEventUi({
      display: options.eventDisplay,
      editable: options.editable,
      startEditable: options.eventStartEditable,
      durationEditable: options.eventDurationEditable,
      constraint: options.eventConstraint,
      overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
      allow: options.eventAllow,
      backgroundColor: options.eventBackgroundColor,
      borderColor: options.eventBorderColor,
      textColor: options.eventTextColor,
      color: options.eventColor // classNames: options.eventClassNames // render hook will handle this

    }, calendarContext),
    selectionConfig: createEventUi({
      constraint: options.selectConstraint,
      overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
      allow: options.selectAllow
    }, calendarContext)
  };
}

function computeIsLoading(state, context) {
  for (var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
    var isLoadingFunc = _a[_i];

    if (isLoadingFunc(state)) {
      return true;
    }
  }

  return false;
}

function parseContextBusinessHours(calendarContext) {
  return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}

function warnUnknownOptions(options, viewName) {
  for (var optionName in options) {
    console.warn("Unknown option '" + optionName + "'" + (viewName ? " for view '" + viewName + "'" : ''));
  }
} // TODO: move this to react plugin?


var CalendarDataProvider =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarDataProvider, _super);

  function CalendarDataProvider(props) {
    var _this = _super.call(this, props) || this;

    _this.handleData = function (data) {
      if (!_this.dataManager) {
        // still within initial run, before assignment in constructor
        // eslint-disable-next-line react/no-direct-mutation-state
        _this.state = data; // can't use setState yet
      } else {
        _this.setState(data);
      }
    };

    _this.dataManager = new CalendarDataManager({
      optionOverrides: props.optionOverrides,
      calendarApi: props.calendarApi,
      onData: _this.handleData
    });
    return _this;
  }

  CalendarDataProvider.prototype.render = function () {
    return this.props.children(this.state);
  };

  CalendarDataProvider.prototype.componentDidUpdate = function (prevProps) {
    var newOptionOverrides = this.props.optionOverrides;

    if (newOptionOverrides !== prevProps.optionOverrides) {
      // prevent recursive handleData
      this.dataManager.resetOptions(newOptionOverrides);
    }
  };

  return CalendarDataProvider;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component); // HELPERS

/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/


function sliceEvents(props, allDay) {
  return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}

var NamedTimeZoneImpl =
/** @class */
function () {
  function NamedTimeZoneImpl(timeZoneName) {
    this.timeZoneName = timeZoneName;
  }

  return NamedTimeZoneImpl;
}();

var SegHierarchy =
/** @class */
function () {
  function SegHierarchy() {
    // settings
    this.strictOrder = false;
    this.allowReslicing = false;
    this.maxCoord = -1; // -1 means no max

    this.maxStackCnt = -1; // -1 means no max

    this.levelCoords = []; // ordered

    this.entriesByLevel = []; // parallel with levelCoords

    this.stackCnts = {}; // TODO: use better technique!?
  }

  SegHierarchy.prototype.addSegs = function (inputs) {
    var hiddenEntries = [];

    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
      var input = inputs_1[_i];
      this.insertEntry(input, hiddenEntries);
    }

    return hiddenEntries;
  };

  SegHierarchy.prototype.insertEntry = function (entry, hiddenEntries) {
    var insertion = this.findInsertion(entry);

    if (this.isInsertionValid(insertion, entry)) {
      this.insertEntryAt(entry, insertion);
      return 1;
    }

    return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
  };

  SegHierarchy.prototype.isInsertionValid = function (insertion, entry) {
    return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) && (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
  }; // returns number of new entries inserted


  SegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
    if (this.allowReslicing && insertion.touchingEntry) {
      return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
    }

    hiddenEntries.push(entry);
    return 0;
  };

  SegHierarchy.prototype.splitEntry = function (entry, barrier, hiddenEntries) {
    var partCnt = 0;
    var splitHiddenEntries = [];
    var entrySpan = entry.span;
    var barrierSpan = barrier.span;

    if (entrySpan.start < barrierSpan.start) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: entrySpan.start,
          end: barrierSpan.start
        }
      }, splitHiddenEntries);
    }

    if (entrySpan.end > barrierSpan.end) {
      partCnt += this.insertEntry({
        index: entry.index,
        thickness: entry.thickness,
        span: {
          start: barrierSpan.end,
          end: entrySpan.end
        }
      }, splitHiddenEntries);
    }

    if (partCnt) {
      hiddenEntries.push.apply(hiddenEntries, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([{
        index: entry.index,
        thickness: entry.thickness,
        span: intersectSpans(barrierSpan, entrySpan) // guaranteed to intersect

      }], splitHiddenEntries));
      return partCnt;
    }

    hiddenEntries.push(entry);
    return 0;
  };

  SegHierarchy.prototype.insertEntryAt = function (entry, insertion) {
    var _a = this,
        entriesByLevel = _a.entriesByLevel,
        levelCoords = _a.levelCoords;

    if (insertion.lateral === -1) {
      // create a new level
      insertAt(levelCoords, insertion.level, insertion.levelCoord);
      insertAt(entriesByLevel, insertion.level, [entry]);
    } else {
      // insert into existing level
      insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
    }

    this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
  };

  SegHierarchy.prototype.findInsertion = function (newEntry) {
    var _a = this,
        levelCoords = _a.levelCoords,
        entriesByLevel = _a.entriesByLevel,
        strictOrder = _a.strictOrder,
        stackCnts = _a.stackCnts;

    var levelCnt = levelCoords.length;
    var candidateCoord = 0;
    var touchingLevel = -1;
    var touchingLateral = -1;
    var touchingEntry = null;
    var stackCnt = 0;

    for (var trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
      var trackingCoord = levelCoords[trackingLevel]; // if the current level is past the placed entry, we have found a good empty space and can stop.
      // if strictOrder, keep finding more lateral intersections.

      if (!strictOrder && trackingCoord >= candidateCoord + newEntry.thickness) {
        break;
      }

      var trackingEntries = entriesByLevel[trackingLevel];
      var trackingEntry = void 0;
      var searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end

      var lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one

      while ( // loop through entries that horizontally intersect
      (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
      trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
      ) {
        var trackingEntryBottom = trackingCoord + trackingEntry.thickness; // intersects into the top of the candidate?

        if (trackingEntryBottom > candidateCoord) {
          candidateCoord = trackingEntryBottom;
          touchingEntry = trackingEntry;
          touchingLevel = trackingLevel;
          touchingLateral = lateralIndex;
        } // butts up against top of candidate? (will happen if just intersected as well)


        if (trackingEntryBottom === candidateCoord) {
          // accumulate the highest possible stackCnt of the trackingEntries that butt up
          stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
        }

        lateralIndex += 1;
      }
    } // the destination level will be after touchingEntry's level. find it


    var destLevel = 0;

    if (touchingEntry) {
      destLevel = touchingLevel + 1;

      while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
        destLevel += 1;
      }
    } // if adding to an existing level, find where to insert


    var destLateral = -1;

    if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
      destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
    }

    return {
      touchingLevel: touchingLevel,
      touchingLateral: touchingLateral,
      touchingEntry: touchingEntry,
      stackCnt: stackCnt,
      levelCoord: candidateCoord,
      level: destLevel,
      lateral: destLateral
    };
  }; // sorted by levelCoord (lowest to highest)


  SegHierarchy.prototype.toRects = function () {
    var _a = this,
        entriesByLevel = _a.entriesByLevel,
        levelCoords = _a.levelCoords;

    var levelCnt = entriesByLevel.length;
    var rects = [];

    for (var level = 0; level < levelCnt; level += 1) {
      var entries = entriesByLevel[level];
      var levelCoord = levelCoords[level];

      for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var entry = entries_1[_i];
        rects.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, entry), {
          levelCoord: levelCoord
        }));
      }
    }

    return rects;
  };

  return SegHierarchy;
}();

function getEntrySpanEnd(entry) {
  return entry.span.end;
}

function buildEntryKey(entry) {
  return entry.index + ':' + entry.span.start;
} // returns groups with entries sorted by input order


function groupIntersectingEntries(entries) {
  var merges = [];

  for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
    var entry = entries_2[_i];
    var filteredMerges = [];
    var hungryMerge = {
      span: entry.span,
      entries: [entry]
    };

    for (var _a = 0, merges_1 = merges; _a < merges_1.length; _a++) {
      var merge = merges_1[_a];

      if (intersectSpans(merge.span, hungryMerge.span)) {
        hungryMerge = {
          entries: merge.entries.concat(hungryMerge.entries),
          span: joinSpans(merge.span, hungryMerge.span)
        };
      } else {
        filteredMerges.push(merge);
      }
    }

    filteredMerges.push(hungryMerge);
    merges = filteredMerges;
  }

  return merges;
}

function joinSpans(span0, span1) {
  return {
    start: Math.min(span0.start, span1.start),
    end: Math.max(span0.end, span1.end)
  };
}

function intersectSpans(span0, span1) {
  var start = Math.max(span0.start, span1.start);
  var end = Math.min(span0.end, span1.end);

  if (start < end) {
    return {
      start: start,
      end: end
    };
  }

  return null;
} // general util
// ---------------------------------------------------------------------------------------------------------------------


function insertAt(arr, index, item) {
  arr.splice(index, 0, item);
}

function binarySearch(a, searchVal, getItemVal) {
  var startIndex = 0;
  var endIndex = a.length; // exclusive

  if (!endIndex || searchVal < getItemVal(a[startIndex])) {
    // no items OR before first item
    return [0, 0];
  }

  if (searchVal > getItemVal(a[endIndex - 1])) {
    // after last item
    return [endIndex, 0];
  }

  while (startIndex < endIndex) {
    var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
    var middleVal = getItemVal(a[middleIndex]);

    if (searchVal < middleVal) {
      endIndex = middleIndex;
    } else if (searchVal > middleVal) {
      startIndex = middleIndex + 1;
    } else {
      // equal!
      return [middleIndex, 1];
    }
  }

  return [startIndex, 0];
}

var Interaction =
/** @class */
function () {
  function Interaction(settings) {
    this.component = settings.component;
    this.isHitComboAllowed = settings.isHitComboAllowed || null;
  }

  Interaction.prototype.destroy = function () {};

  return Interaction;
}();

function parseInteractionSettings(component, input) {
  return {
    component: component,
    el: input.el,
    useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
    isHitComboAllowed: input.isHitComboAllowed || null
  };
}

function interactionSettingsToStore(settings) {
  var _a;

  return _a = {}, _a[settings.component.uid] = settings, _a;
} // global state


var interactionSettingsStore = {};
/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/

var ElementDragging =
/** @class */
function () {
  function ElementDragging(el, selector) {
    this.emitter = new Emitter();
  }

  ElementDragging.prototype.destroy = function () {};

  ElementDragging.prototype.setMirrorIsVisible = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {// optional if subclass doesn't want to support a mirror
  };

  ElementDragging.prototype.setAutoScrollEnabled = function (bool) {// optional
  };

  return ElementDragging;
}(); // TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.


var config = {};
/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/

var DRAG_META_REFINERS = {
  startTime: createDuration,
  duration: createDuration,
  create: Boolean,
  sourceId: String
};

function parseDragMeta(raw) {
  var _a = refineProps(raw, DRAG_META_REFINERS),
      refined = _a.refined,
      extra = _a.extra;

  return {
    startTime: refined.startTime || null,
    duration: refined.duration || null,
    create: refined.create != null ? refined.create : true,
    sourceId: refined.sourceId,
    leftoverProps: extra
  };
}

var ToolbarSection =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ToolbarSection, _super);

  function ToolbarSection() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  ToolbarSection.prototype.render = function () {
    var _this = this;

    var children = this.props.widgetGroups.map(function (widgetGroup) {
      return _this.renderWidgetGroup(widgetGroup);
    });
    return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['div', {
      className: 'fc-toolbar-chunk'
    }], children));
  };

  ToolbarSection.prototype.renderWidgetGroup = function (widgetGroup) {
    var props = this.props;
    var theme = this.context.theme;
    var children = [];
    var isOnlyButtons = true;

    for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
      var widget = widgetGroup_1[_i];
      var buttonName = widget.buttonName,
          buttonClick = widget.buttonClick,
          buttonText = widget.buttonText,
          buttonIcon = widget.buttonIcon,
          buttonHint = widget.buttonHint;

      if (buttonName === 'title') {
        isOnlyButtons = false;
        children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
          className: "fc-toolbar-title",
          id: props.titleId
        }, props.title));
      } else {
        var isPressed = buttonName === props.activeButton;
        var isDisabled = !props.isTodayEnabled && buttonName === 'today' || !props.isPrevEnabled && buttonName === 'prev' || !props.isNextEnabled && buttonName === 'next';
        var buttonClasses = ["fc-" + buttonName + "-button", theme.getClass('button')];

        if (isPressed) {
          buttonClasses.push(theme.getClass('buttonActive'));
        }

        children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
          type: "button",
          title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint,
          disabled: isDisabled,
          "aria-pressed": isPressed,
          className: buttonClasses.join(' '),
          onClick: buttonClick
        }, buttonText || (buttonIcon ? (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
          className: buttonIcon
        }) : '')));
      }
    }

    if (children.length > 1) {
      var groupClassName = isOnlyButtons && theme.getClass('buttonGroup') || '';
      return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['div', {
        className: groupClassName
      }], children));
    }

    return children[0];
  };

  return ToolbarSection;
}(BaseComponent);

var Toolbar =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Toolbar, _super);

  function Toolbar() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Toolbar.prototype.render = function () {
    var _a = this.props,
        model = _a.model,
        extraClassName = _a.extraClassName;
    var forceLtr = false;
    var startContent;
    var endContent;
    var sectionWidgets = model.sectionWidgets;
    var centerContent = sectionWidgets.center;

    if (sectionWidgets.left) {
      forceLtr = true;
      startContent = sectionWidgets.left;
    } else {
      startContent = sectionWidgets.start;
    }

    if (sectionWidgets.right) {
      forceLtr = true;
      endContent = sectionWidgets.right;
    } else {
      endContent = sectionWidgets.end;
    }

    var classNames = [extraClassName || '', 'fc-toolbar', forceLtr ? 'fc-toolbar-ltr' : ''];
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: classNames.join(' ')
    }, this.renderSection('start', startContent || []), this.renderSection('center', centerContent || []), this.renderSection('end', endContent || []));
  };

  Toolbar.prototype.renderSection = function (key, widgetGroups) {
    var props = this.props;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarSection, {
      key: key,
      widgetGroups: widgetGroups,
      title: props.title,
      navUnit: props.navUnit,
      activeButton: props.activeButton,
      isTodayEnabled: props.isTodayEnabled,
      isPrevEnabled: props.isPrevEnabled,
      isNextEnabled: props.isNextEnabled,
      titleId: props.titleId
    });
  };

  return Toolbar;
}(BaseComponent); // TODO: do function component?


var ViewContainer =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ViewContainer, _super);

  function ViewContainer() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      availableWidth: null
    };

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);

      _this.updateAvailableWidth();
    };

    _this.handleResize = function () {
      _this.updateAvailableWidth();
    };

    return _this;
  }

  ViewContainer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    var aspectRatio = props.aspectRatio;
    var classNames = ['fc-view-harness', aspectRatio || props.liquid || props.height ? 'fc-view-harness-active' // harness controls the height
    : 'fc-view-harness-passive' // let the view do the height
    ];
    var height = '';
    var paddingBottom = '';

    if (aspectRatio) {
      if (state.availableWidth !== null) {
        height = state.availableWidth / aspectRatio;
      } else {
        // while waiting to know availableWidth, we can't set height to *zero*
        // because will cause lots of unnecessary scrollbars within scrollgrid.
        // BETTER: don't start rendering ANYTHING yet until we know container width
        // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
        paddingBottom = 1 / aspectRatio * 100 + "%";
      }
    } else {
      height = props.height || '';
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      "aria-labelledby": props.labeledById,
      ref: this.handleEl,
      className: classNames.join(' '),
      style: {
        height: height,
        paddingBottom: paddingBottom
      }
    }, props.children);
  };

  ViewContainer.prototype.componentDidMount = function () {
    this.context.addResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleResize);
  };

  ViewContainer.prototype.updateAvailableWidth = function () {
    if (this.el && // needed. but why?
    this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
    ) {
      this.setState({
        availableWidth: this.el.offsetWidth
      });
    }
  };

  return ViewContainer;
}(BaseComponent);
/*
Detects when the user clicks on an event within a DateComponent
*/


var EventClicking =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventClicking, _super);

  function EventClicking(settings) {
    var _this = _super.call(this, settings) || this;

    _this.handleSegClick = function (ev, segEl) {
      var component = _this.component;
      var context = component.context;
      var seg = getElSeg(segEl);

      if (seg && // might be the <div> surrounding the more link
      component.isValidSegDownEl(ev.target)) {
        // our way to simulate a link click for elements that can't be <a> tags
        // grab before trigger fired in case trigger trashes DOM thru rerendering
        var hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
        var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
        context.emitter.trigger('eventClick', {
          el: segEl,
          event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
          jsEvent: ev,
          view: context.viewApi
        });

        if (url && !ev.defaultPrevented) {
          window.location.href = url;
        }
      }
    };

    _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
    _this.handleSegClick);
    return _this;
  }

  return EventClicking;
}(Interaction);
/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/


var EventHovering =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventHovering, _super);

  function EventHovering(settings) {
    var _this = _super.call(this, settings) || this; // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it


    _this.handleEventElRemove = function (el) {
      if (el === _this.currentSegEl) {
        _this.handleSegLeave(null, _this.currentSegEl);
      }
    };

    _this.handleSegEnter = function (ev, segEl) {
      if (getElSeg(segEl)) {
        // TODO: better way to make sure not hovering over more+ link or its wrapper
        _this.currentSegEl = segEl;

        _this.triggerEvent('eventMouseEnter', ev, segEl);
      }
    };

    _this.handleSegLeave = function (ev, segEl) {
      if (_this.currentSegEl) {
        _this.currentSegEl = null;

        _this.triggerEvent('eventMouseLeave', ev, segEl);
      }
    };

    _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
    _this.handleSegEnter, _this.handleSegLeave);
    return _this;
  }

  EventHovering.prototype.destroy = function () {
    this.removeHoverListeners();
  };

  EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
    var component = this.component;
    var context = component.context;
    var seg = getElSeg(segEl);

    if (!ev || component.isValidSegDownEl(ev.target)) {
      context.emitter.trigger(publicEvName, {
        el: segEl,
        event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
        jsEvent: ev,
        view: context.viewApi
      });
    }
  };

  return EventHovering;
}(Interaction);

var CalendarContent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarContent, _super);

  function CalendarContent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.buildViewContext = memoize(buildViewContext);
    _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
    _this.buildToolbarProps = memoize(buildToolbarProps);
    _this.headerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.footerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.interactionsStore = {}; // eslint-disable-next-line

    _this.state = {
      viewLabelId: getUniqueDomId()
    }; // Component Registration
    // -----------------------------------------------------------------------------------------------------------------

    _this.registerInteractiveComponent = function (component, settingsInput) {
      var settings = parseInteractionSettings(component, settingsInput);
      var DEFAULT_INTERACTIONS = [EventClicking, EventHovering];
      var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
      var interactions = interactionClasses.map(function (TheInteractionClass) {
        return new TheInteractionClass(settings);
      });
      _this.interactionsStore[component.uid] = interactions;
      interactionSettingsStore[component.uid] = settings;
    };

    _this.unregisterInteractiveComponent = function (component) {
      for (var _i = 0, _a = _this.interactionsStore[component.uid]; _i < _a.length; _i++) {
        var listener = _a[_i];
        listener.destroy();
      }

      delete _this.interactionsStore[component.uid];
      delete interactionSettingsStore[component.uid];
    }; // Resizing
    // -----------------------------------------------------------------------------------------------------------------


    _this.resizeRunner = new DelayedRunner(function () {
      _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?


      _this.props.emitter.trigger('windowResize', {
        view: _this.props.viewApi
      });
    });

    _this.handleWindowResize = function (ev) {
      var options = _this.props.options;

      if (options.handleWindowResize && ev.target === window // avoid jqui events
      ) {
        _this.resizeRunner.request(options.windowResizeDelay);
      }
    };

    return _this;
  }
  /*
  renders INSIDE of an outer div
  */


  CalendarContent.prototype.render = function () {
    var props = this.props;
    var toolbarConfig = props.toolbarConfig,
        options = props.options;
    var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
    props.viewTitle);
    var viewVGrow = false;
    var viewHeight = '';
    var viewAspectRatio;

    if (props.isHeightAuto || props.forPrint) {
      viewHeight = '';
    } else if (options.height != null) {
      viewVGrow = true;
    } else if (options.contentHeight != null) {
      viewHeight = options.contentHeight;
    } else {
      viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
    }

    var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
    var viewLabelId = toolbarConfig.header && toolbarConfig.header.hasTitle ? this.state.viewLabelId : '';
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Provider, {
      value: viewContext
    }, toolbarConfig.header && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      ref: this.headerRef,
      extraClassName: "fc-header-toolbar",
      model: toolbarConfig.header,
      titleId: viewLabelId
    }, toolbarProps)), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContainer, {
      liquid: viewVGrow,
      height: viewHeight,
      aspectRatio: viewAspectRatio,
      labeledById: viewLabelId
    }, this.renderView(props), this.buildAppendContent()), toolbarConfig.footer && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      ref: this.footerRef,
      extraClassName: "fc-footer-toolbar",
      model: toolbarConfig.footer,
      titleId: ""
    }, toolbarProps)));
  };

  CalendarContent.prototype.componentDidMount = function () {
    var props = this.props;
    this.calendarInteractions = props.pluginHooks.calendarInteractions.map(function (CalendarInteractionClass) {
      return new CalendarInteractionClass(props);
    });
    window.addEventListener('resize', this.handleWindowResize);
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      propSetHandlers[propName](props[propName], props);
    }
  };

  CalendarContent.prototype.componentDidUpdate = function (prevProps) {
    var props = this.props;
    var propSetHandlers = props.pluginHooks.propSetHandlers;

    for (var propName in propSetHandlers) {
      if (props[propName] !== prevProps[propName]) {
        propSetHandlers[propName](props[propName], props);
      }
    }
  };

  CalendarContent.prototype.componentWillUnmount = function () {
    window.removeEventListener('resize', this.handleWindowResize);
    this.resizeRunner.clear();

    for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
      var interaction = _a[_i];
      interaction.destroy();
    }

    this.props.emitter.trigger('_unmount');
  };

  CalendarContent.prototype.buildAppendContent = function () {
    var props = this.props;
    var children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) {
      return buildAppendContent(props);
    });
    return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}], children));
  };

  CalendarContent.prototype.renderView = function (props) {
    var pluginHooks = props.pluginHooks;
    var viewSpec = props.viewSpec;
    var viewProps = {
      dateProfile: props.dateProfile,
      businessHours: props.businessHours,
      eventStore: props.renderableEventStore,
      eventUiBases: props.eventUiBases,
      dateSelection: props.dateSelection,
      eventSelection: props.eventSelection,
      eventDrag: props.eventDrag,
      eventResize: props.eventResize,
      isHeightAuto: props.isHeightAuto,
      forPrint: props.forPrint
    };
    var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);

    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
      var transformer = transformers_1[_i];

      (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(viewProps, transformer.transform(viewProps, props));
    }

    var ViewComponent = viewSpec.component;
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, viewProps));
  };

  return CalendarContent;
}(PureComponent);

function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
  // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
  var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason

  var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
  var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
  return {
    title: title,
    activeButton: viewSpec.type,
    navUnit: viewSpec.singleUnit,
    isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
    isPrevEnabled: prevInfo.isValid,
    isNextEnabled: nextInfo.isValid
  };
} // Plugin
// -----------------------------------------------------------------------------------------------------------------


function buildViewPropTransformers(theClasses) {
  return theClasses.map(function (TheClass) {
    return new TheClass();
  });
}

var CalendarRoot =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarRoot, _super);

  function CalendarRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      forPrint: false
    };

    _this.handleBeforePrint = function () {
      _this.setState({
        forPrint: true
      });
    };

    _this.handleAfterPrint = function () {
      _this.setState({
        forPrint: false
      });
    };

    return _this;
  }

  CalendarRoot.prototype.render = function () {
    var props = this.props;
    var options = props.options;
    var forPrint = this.state.forPrint;
    var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
    var height = !isHeightAuto && options.height != null ? options.height : '';
    var classNames = ['fc', forPrint ? 'fc-media-print' : 'fc-media-screen', "fc-direction-" + options.direction, props.theme.getClass('root')];

    if (!getCanVGrowWithinCell()) {
      classNames.push('fc-liquid-hack');
    }

    return props.children(classNames, height, isHeightAuto, forPrint);
  };

  CalendarRoot.prototype.componentDidMount = function () {
    var emitter = this.props.emitter;
    emitter.on('_beforeprint', this.handleBeforePrint);
    emitter.on('_afterprint', this.handleAfterPrint);
  };

  CalendarRoot.prototype.componentWillUnmount = function () {
    var emitter = this.props.emitter;
    emitter.off('_beforeprint', this.handleBeforePrint);
    emitter.off('_afterprint', this.handleAfterPrint);
  };

  return CalendarRoot;
}(BaseComponent); // Computes a default column header formatting string if `colFormat` is not explicitly defined


function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
  // if more than one week row, or if there are a lot of columns with not much space,
  // put just the day numbers will be in each cell
  if (!datesRepDistinctDays || dayCnt > 10) {
    return createFormatter({
      weekday: 'short'
    }); // "Sat"
  }

  if (dayCnt > 1) {
    return createFormatter({
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
      omitCommas: true
    }); // "Sat 11/12"
  }

  return createFormatter({
    weekday: 'long'
  }); // "Saturday"
}

var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no

function renderInner$1(hookProps) {
  return hookProps.text;
}

var TableDateCell =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDateCell, _super);

  function TableDateCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDateCell.prototype.render = function () {
    var _a = this.context,
        dateEnv = _a.dateEnv,
        options = _a.options,
        theme = _a.theme,
        viewApi = _a.viewApi;
    var props = this.props;
    var date = props.date,
        dateProfile = props.dateProfile;
    var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
    var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
    var text = dateEnv.format(date, props.dayHeaderFormat); // if colCnt is 1, we are already in a day-view and don't need a navlink

    var navLinkAttrs = !dayMeta.isDisabled && props.colCnt > 1 ? buildNavLinkAttrs(this.context, date) : {};

    var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      date: dateEnv.toDate(date),
      view: viewApi
    }, props.extraHookProps), {
      text: text
    }), dayMeta);

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        ref: rootElRef,
        role: "columnheader",
        className: classNames.concat(customClassNames).join(' '),
        "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined,
        colSpan: props.colSpan
      }, props.extraDataAttrs), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-scrollgrid-sync-inner"
      }, !dayMeta.isDisabled && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        ref: innerElRef,
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' ')
      }, navLinkAttrs), innerContent)));
    });
  };

  return TableDateCell;
}(BaseComponent);

var WEEKDAY_FORMAT = createFormatter({
  weekday: 'long'
});

var TableDowCell =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDowCell, _super);

  function TableDowCell() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  TableDowCell.prototype.render = function () {
    var props = this.props;
    var _a = this.context,
        dateEnv = _a.dateEnv,
        theme = _a.theme,
        viewApi = _a.viewApi,
        options = _a.options;
    var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT

    var dateMeta = {
      dow: props.dow,
      isDisabled: false,
      isFuture: false,
      isPast: false,
      isToday: false,
      isOther: false
    };
    var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
    var text = dateEnv.format(date, props.dayHeaderFormat);

    var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      // TODO: make this public?
      date: date
    }, dateMeta), {
      view: viewApi
    }), props.extraHookProps), {
      text: text
    });

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.dayHeaderClassNames,
      content: options.dayHeaderContent,
      defaultContent: renderInner$1,
      didMount: options.dayHeaderDidMount,
      willUnmount: options.dayHeaderWillUnmount
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        ref: rootElRef,
        role: "columnheader",
        className: classNames.concat(customClassNames).join(' '),
        colSpan: props.colSpan
      }, props.extraDataAttrs), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-scrollgrid-sync-inner"
      }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
        "aria-label": dateEnv.format(date, WEEKDAY_FORMAT),
        className: ['fc-col-header-cell-cushion', props.isSticky ? 'fc-sticky' : ''].join(' '),
        ref: innerElRef
      }, innerContent)));
    });
  };

  return TableDowCell;
}(BaseComponent);

var NowTimer =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(NowTimer, _super);

  function NowTimer(props, context) {
    var _this = _super.call(this, props, context) || this;

    _this.initialNowDate = getNow(context.options.now, context.dateEnv);
    _this.initialNowQueriedMs = new Date().valueOf();
    _this.state = _this.computeTiming().currentState;
    return _this;
  }

  NowTimer.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state;

    return props.children(state.nowDate, state.todayRange);
  };

  NowTimer.prototype.componentDidMount = function () {
    this.setTimeout();
  };

  NowTimer.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.unit !== this.props.unit) {
      this.clearTimeout();
      this.setTimeout();
    }
  };

  NowTimer.prototype.componentWillUnmount = function () {
    this.clearTimeout();
  };

  NowTimer.prototype.computeTiming = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
    var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
    var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
    var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf(); // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
    // ensure no longer than a day

    waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
    return {
      currentState: {
        nowDate: currentUnitStart,
        todayRange: buildDayRange(currentUnitStart)
      },
      nextState: {
        nowDate: nextUnitStart,
        todayRange: buildDayRange(nextUnitStart)
      },
      waitMs: waitMs
    };
  };

  NowTimer.prototype.setTimeout = function () {
    var _this = this;

    var _a = this.computeTiming(),
        nextState = _a.nextState,
        waitMs = _a.waitMs;

    this.timeoutId = setTimeout(function () {
      _this.setState(nextState, function () {
        _this.setTimeout();
      });
    }, waitMs);
  };

  NowTimer.prototype.clearTimeout = function () {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  };

  NowTimer.contextType = ViewContextType;
  return NowTimer;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component);

function buildDayRange(date) {
  var start = startOfDay(date);
  var end = addDays(start, 1);
  return {
    start: start,
    end: end
  };
}

var DayHeader =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayHeader, _super);

  function DayHeader() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
    return _this;
  }

  DayHeader.prototype.render = function () {
    var context = this.context;
    var _a = this.props,
        dates = _a.dates,
        dateProfile = _a.dateProfile,
        datesRepDistinctDays = _a.datesRepDistinctDays,
        renderIntro = _a.renderIntro;
    var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(NowTimer, {
      unit: "day"
    }, function (nowDate, todayRange) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
        role: "row"
      }, renderIntro && renderIntro('day'), dates.map(function (date) {
        return datesRepDistinctDays ? (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableDateCell, {
          key: date.toISOString(),
          date: date,
          dateProfile: dateProfile,
          todayRange: todayRange,
          colCnt: dates.length,
          dayHeaderFormat: dayHeaderFormat
        }) : (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableDowCell, {
          key: date.getUTCDay(),
          dow: date.getUTCDay(),
          dayHeaderFormat: dayHeaderFormat
        });
      }));
    });
  };

  return DayHeader;
}(BaseComponent);

function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
  return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

var DaySeriesModel =
/** @class */
function () {
  function DaySeriesModel(range, dateProfileGenerator) {
    var date = range.start;
    var end = range.end;
    var indices = [];
    var dates = [];
    var dayIndex = -1;

    while (date < end) {
      // loop each day from start to end
      if (dateProfileGenerator.isHiddenDay(date)) {
        indices.push(dayIndex + 0.5); // mark that it's between indices
      } else {
        dayIndex += 1;
        indices.push(dayIndex);
        dates.push(date);
      }

      date = addDays(date, 1);
    }

    this.dates = dates;
    this.indices = indices;
    this.cnt = dates.length;
  }

  DaySeriesModel.prototype.sliceRange = function (range) {
    var firstIndex = this.getDateDayIndex(range.start); // inclusive first index

    var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index

    var clippedFirstIndex = Math.max(0, firstIndex);
    var clippedLastIndex = Math.min(this.cnt - 1, lastIndex); // deal with in-between indices

    clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell

    clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell

    if (clippedFirstIndex <= clippedLastIndex) {
      return {
        firstIndex: clippedFirstIndex,
        lastIndex: clippedLastIndex,
        isStart: firstIndex === clippedFirstIndex,
        isEnd: lastIndex === clippedLastIndex
      };
    }

    return null;
  }; // Given a date, returns its chronolocial cell-index from the first cell of the grid.
  // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
  // If before the first offset, returns a negative number.
  // If after the last offset, returns an offset past the last cell offset.
  // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.


  DaySeriesModel.prototype.getDateDayIndex = function (date) {
    var indices = this.indices;
    var dayOffset = Math.floor(diffDays(this.dates[0], date));

    if (dayOffset < 0) {
      return indices[0] - 1;
    }

    if (dayOffset >= indices.length) {
      return indices[indices.length - 1] + 1;
    }

    return indices[dayOffset];
  };

  return DaySeriesModel;
}();

var DayTableModel =
/** @class */
function () {
  function DayTableModel(daySeries, breakOnWeeks) {
    var dates = daySeries.dates;
    var daysPerRow;
    var firstDay;
    var rowCnt;

    if (breakOnWeeks) {
      // count columns until the day-of-week repeats
      firstDay = dates[0].getUTCDay();

      for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
        if (dates[daysPerRow].getUTCDay() === firstDay) {
          break;
        }
      }

      rowCnt = Math.ceil(dates.length / daysPerRow);
    } else {
      rowCnt = 1;
      daysPerRow = dates.length;
    }

    this.rowCnt = rowCnt;
    this.colCnt = daysPerRow;
    this.daySeries = daySeries;
    this.cells = this.buildCells();
    this.headerDates = this.buildHeaderDates();
  }

  DayTableModel.prototype.buildCells = function () {
    var rows = [];

    for (var row = 0; row < this.rowCnt; row += 1) {
      var cells = [];

      for (var col = 0; col < this.colCnt; col += 1) {
        cells.push(this.buildCell(row, col));
      }

      rows.push(cells);
    }

    return rows;
  };

  DayTableModel.prototype.buildCell = function (row, col) {
    var date = this.daySeries.dates[row * this.colCnt + col];
    return {
      key: date.toISOString(),
      date: date
    };
  };

  DayTableModel.prototype.buildHeaderDates = function () {
    var dates = [];

    for (var col = 0; col < this.colCnt; col += 1) {
      dates.push(this.cells[0][col].date);
    }

    return dates;
  };

  DayTableModel.prototype.sliceRange = function (range) {
    var colCnt = this.colCnt;
    var seriesSeg = this.daySeries.sliceRange(range);
    var segs = [];

    if (seriesSeg) {
      var firstIndex = seriesSeg.firstIndex,
          lastIndex = seriesSeg.lastIndex;
      var index = firstIndex;

      while (index <= lastIndex) {
        var row = Math.floor(index / colCnt);
        var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
        segs.push({
          row: row,
          firstCol: index % colCnt,
          lastCol: (nextIndex - 1) % colCnt,
          isStart: seriesSeg.isStart && index === firstIndex,
          isEnd: seriesSeg.isEnd && nextIndex - 1 === lastIndex
        });
        index = nextIndex;
      }
    }

    return segs;
  };

  return DayTableModel;
}();

var Slicer =
/** @class */
function () {
  function Slicer() {
    this.sliceBusinessHours = memoize(this._sliceBusinessHours);
    this.sliceDateSelection = memoize(this._sliceDateSpan);
    this.sliceEventStore = memoize(this._sliceEventStore);
    this.sliceEventDrag = memoize(this._sliceInteraction);
    this.sliceEventResize = memoize(this._sliceInteraction);
    this.forceDayIfListItem = false; // hack
  }

  Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    var eventUiBases = props.eventUiBases;
    var eventSegs = this.sliceEventStore.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
    return {
      dateSelectionSegs: this.sliceDateSelection.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([props.dateSelection, eventUiBases, context], extraArgs)),
      businessHourSegs: this.sliceBusinessHours.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
      fgEventSegs: eventSegs.fg,
      bgEventSegs: eventSegs.bg,
      eventDrag: this.sliceEventDrag.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventResize: this.sliceEventResize.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
      eventSelection: props.eventSelection
    }; // TODO: give interactionSegs?
  };

  Slicer.prototype.sliceNowDate = function ( // does not memoize
  date, context) {
    var extraArgs = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      extraArgs[_i - 2] = arguments[_i];
    }

    return this._sliceDateSpan.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([{
      range: {
        start: date,
        end: addMs(date, 1)
      },
      allDay: false
    }, {}, context], extraArgs));
  };

  Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, context) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!businessHours) {
      return [];
    }

    return this._sliceEventStore.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold], extraArgs)).bg;
  };

  Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (eventStore) {
      var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
      return {
        bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
        fg: this.sliceEventRanges(rangeRes.fg, extraArgs)
      };
    }

    return {
      bg: [],
      fg: []
    };
  };

  Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold) {
    var extraArgs = [];

    for (var _i = 4; _i < arguments.length; _i++) {
      extraArgs[_i - 4] = arguments[_i];
    }

    if (!interaction) {
      return null;
    }

    var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
    return {
      segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
      affectedInstances: interaction.affectedEvents.instances,
      isEvent: interaction.isEvent
    };
  };

  Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, context) {
    var extraArgs = [];

    for (var _i = 3; _i < arguments.length; _i++) {
      extraArgs[_i - 3] = arguments[_i];
    }

    if (!dateSpan) {
      return [];
    }

    var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
    var segs = this.sliceRange.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([dateSpan.range], extraArgs));

    for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
      var seg = segs_1[_a];
      seg.eventRange = eventRange;
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRanges = function (eventRanges, extraArgs) {
    var segs = [];

    for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
      var eventRange = eventRanges_1[_i];
      segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
    }

    return segs;
  };
  /*
  "complete" seg means it has component and eventRange
  */


  Slicer.prototype.sliceEventRange = function (eventRange, extraArgs) {
    var dateRange = eventRange.range; // hack to make multi-day events that are being force-displayed as list-items to take up only one day

    if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
      dateRange = {
        start: dateRange.start,
        end: addDays(dateRange.start, 1)
      };
    }

    var segs = this.sliceRange.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([dateRange], extraArgs));

    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
      var seg = segs_2[_i];
      seg.eventRange = eventRange;
      seg.isStart = eventRange.isStart && seg.isStart;
      seg.isEnd = eventRange.isEnd && seg.isEnd;
    }

    return segs;
  };

  return Slicer;
}();
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/


function computeActiveRange(dateProfile, isComponentAllDay) {
  var range = dateProfile.activeRange;

  if (isComponentAllDay) {
    return range;
  }

  return {
    start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
    end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5) // 864e5 = ms in a day

  };
} // high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionValid(interaction, dateProfile, context) {
  var instances = interaction.mutatedEvents.instances;

  for (var instanceId in instances) {
    if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
      return false;
    }
  }

  return isNewPropsValid({
    eventDrag: interaction
  }, context); // HACK: the eventDrag props is used for ALL interactions
}

function isDateSelectionValid(dateSelection, dateProfile, context) {
  if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
    return false;
  }

  return isNewPropsValid({
    dateSelection: dateSelection
  }, context);
}

function isNewPropsValid(newProps, context) {
  var calendarState = context.getCurrentData();

  var props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    businessHours: calendarState.businessHours,
    dateSelection: '',
    eventStore: calendarState.eventStore,
    eventUiBases: calendarState.eventUiBases,
    eventSelection: '',
    eventDrag: null,
    eventResize: null
  }, newProps);

  return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}

function isPropsValid(state, context, dateSpanMeta, filterConfig) {
  if (dateSpanMeta === void 0) {
    dateSpanMeta = {};
  }

  if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
    return false;
  }

  return true;
} // Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------


function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var currentState = context.getCurrentData();
  var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions

  var subjectEventStore = interaction.mutatedEvents;
  var subjectDefs = subjectEventStore.defs;
  var subjectInstances = subjectEventStore.instances;
  var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ? state.eventUiBases : {
    '': currentState.selectionConfig
  });

  if (filterConfig) {
    subjectConfigs = mapHash(subjectConfigs, filterConfig);
  } // exclude the subject events. TODO: exclude defs too?


  var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
  var otherDefs = otherEventStore.defs;
  var otherInstances = otherEventStore.instances;
  var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);

  for (var subjectInstanceId in subjectInstances) {
    var subjectInstance = subjectInstances[subjectInstanceId];
    var subjectRange = subjectInstance.range;
    var subjectConfig = subjectConfigs[subjectInstance.defId];
    var subjectDef = subjectDefs[subjectInstance.defId]; // constraint

    if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
      return false;
    } // overlap


    var eventOverlap = context.options.eventOverlap;
    var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;

    for (var otherInstanceId in otherInstances) {
      var otherInstance = otherInstances[otherInstanceId]; // intersect! evaluate

      if (rangesIntersect(subjectRange, otherInstance.range)) {
        var otherOverlap = otherConfigs[otherInstance.defId].overlap; // consider the other event's overlap. only do this if the subject event is a "real" event

        if (otherOverlap === false && interaction.isEvent) {
          return false;
        }

        if (subjectConfig.overlap === false) {
          return false;
        }

        if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
        new EventApi(context, subjectDef, subjectInstance))) {
          return false;
        }
      }
    } // allow (a function)


    var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state

    for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
      var subjectAllow = _a[_i];

      var subjectDateSpan = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dateSpanMeta), {
        range: subjectInstance.range,
        allDay: subjectDef.allDay
      });

      var origDef = calendarEventStore.defs[subjectDef.defId];
      var origInstance = calendarEventStore.instances[subjectInstanceId];
      var eventApi = void 0;

      if (origDef) {
        // was previously in the calendar
        eventApi = new EventApi(context, origDef, origInstance);
      } else {
        // was an external event
        eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
      }

      if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
        return false;
      }
    }
  }

  return true;
} // Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------


function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
  var relevantEventStore = state.eventStore;
  var relevantDefs = relevantEventStore.defs;
  var relevantInstances = relevantEventStore.instances;
  var selection = state.dateSelection;
  var selectionRange = selection.range;
  var selectionConfig = context.getCurrentData().selectionConfig;

  if (filterConfig) {
    selectionConfig = filterConfig(selectionConfig);
  } // constraint


  if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
    return false;
  } // overlap


  var selectOverlap = context.options.selectOverlap;
  var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;

  for (var relevantInstanceId in relevantInstances) {
    var relevantInstance = relevantInstances[relevantInstanceId]; // intersect! evaluate

    if (rangesIntersect(selectionRange, relevantInstance.range)) {
      if (selectionConfig.overlap === false) {
        return false;
      }

      if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
        return false;
      }
    }
  } // allow (a function)


  for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
    var selectionAllow = _a[_i];

    var fullDateSpan = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dateSpanMeta), selection);

    if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
      return false;
    }
  }

  return true;
} // Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------


function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
  for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
    var constraint = constraints_1[_i];

    if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
      return false;
    }
  }

  return true;
}

function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
context) {
  if (constraint === 'businessHours') {
    return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
  }

  if (typeof constraint === 'string') {
    // an group ID
    return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) {
      return eventDef.groupId === constraint;
    }));
  }

  if (typeof constraint === 'object' && constraint) {
    // non-null object
    return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
  }

  return []; // if it's false
} // TODO: move to event-store file?


function eventStoreToRanges(eventStore) {
  var instances = eventStore.instances;
  var ranges = [];

  for (var instanceId in instances) {
    ranges.push(instances[instanceId].range);
  }

  return ranges;
} // TODO: move to geom file?


function anyRangesContainRange(outerRanges, innerRange) {
  for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
    var outerRange = outerRanges_1[_i];

    if (rangeContainsRange(outerRange, innerRange)) {
      return true;
    }
  }

  return false;
}

var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;

var Scroller =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Scroller, _super);

  function Scroller() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleEl = function (el) {
      _this.el = el;
      setRef(_this.props.elRef, el);
    };

    return _this;
  }

  Scroller.prototype.render = function () {
    var props = this.props;
    var liquid = props.liquid,
        liquidIsAbsolute = props.liquidIsAbsolute;
    var isAbsolute = liquid && liquidIsAbsolute;
    var className = ['fc-scroller'];

    if (liquid) {
      if (liquidIsAbsolute) {
        className.push('fc-scroller-liquid-absolute');
      } else {
        className.push('fc-scroller-liquid');
      }
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: this.handleEl,
      className: className.join(' '),
      style: {
        overflowX: props.overflowX,
        overflowY: props.overflowY,
        left: isAbsolute && -(props.overcomeLeft || 0) || '',
        right: isAbsolute && -(props.overcomeRight || 0) || '',
        bottom: isAbsolute && -(props.overcomeBottom || 0) || '',
        marginLeft: !isAbsolute && -(props.overcomeLeft || 0) || '',
        marginRight: !isAbsolute && -(props.overcomeRight || 0) || '',
        marginBottom: !isAbsolute && -(props.overcomeBottom || 0) || '',
        maxHeight: props.maxHeight || ''
      }
    }, props.children);
  };

  Scroller.prototype.needsXScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return false;
    } // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().width > realClientWidth) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.needsYScrolling = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return false;
    } // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
    // much more reliable to see if children are taller than the scroller, even tho doesn't account for
    // inner-child margins and absolute positioning


    var el = this.el;
    var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
    var children = el.children;

    for (var i = 0; i < children.length; i += 1) {
      var childEl = children[i];

      if (childEl.getBoundingClientRect().height > realClientHeight) {
        return true;
      }
    }

    return false;
  };

  Scroller.prototype.getXScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
      return 0;
    }

    return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
  };

  Scroller.prototype.getYScrollbarWidth = function () {
    if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
      return 0;
    }

    return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
  };

  return Scroller;
}(BaseComponent);
/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/


var RefMap =
/** @class */
function () {
  function RefMap(masterCallback) {
    var _this = this;

    this.masterCallback = masterCallback;
    this.currentMap = {};
    this.depths = {};
    this.callbackMap = {};

    this.handleValue = function (val, key) {
      var _a = _this,
          depths = _a.depths,
          currentMap = _a.currentMap;
      var removed = false;
      var added = false;

      if (val !== null) {
        // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
        removed = key in currentMap;
        currentMap[key] = val;
        depths[key] = (depths[key] || 0) + 1;
        added = true;
      } else {
        depths[key] -= 1;

        if (!depths[key]) {
          delete currentMap[key];
          delete _this.callbackMap[key];
          removed = true;
        }
      }

      if (_this.masterCallback) {
        if (removed) {
          _this.masterCallback(null, String(key));
        }

        if (added) {
          _this.masterCallback(val, String(key));
        }
      }
    };
  }

  RefMap.prototype.createRef = function (key) {
    var _this = this;

    var refCallback = this.callbackMap[key];

    if (!refCallback) {
      refCallback = this.callbackMap[key] = function (val) {
        _this.handleValue(val, String(key));
      };
    }

    return refCallback;
  }; // TODO: check callers that don't care about order. should use getAll instead
  // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
  // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"


  RefMap.prototype.collect = function (startIndex, endIndex, step) {
    return collectFromHash(this.currentMap, startIndex, endIndex, step);
  };

  RefMap.prototype.getAll = function () {
    return hashValuesToArray(this.currentMap);
  };

  return RefMap;
}();

function computeShrinkWidth(chunkEls) {
  var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
  var largestWidth = 0;

  for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
    var shrinkCell = shrinkCells_1[_i];
    largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
  }

  return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}

function getSectionHasLiquidHeight(props, sectionConfig) {
  return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}

function getAllowYScrolling(props, sectionConfig) {
  return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
  getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
} // TODO: ONLY use `arg`. force out internal function to use same API


function renderChunkContent(sectionConfig, chunkConfig, arg, isHeader) {
  var expandRows = arg.expandRows;
  var content = typeof chunkConfig.content === 'function' ? chunkConfig.content(arg) : (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', {
    role: 'presentation',
    className: [chunkConfig.tableClassName, sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
    style: {
      minWidth: arg.tableMinWidth,
      width: arg.clientWidth,
      height: expandRows ? arg.clientHeight : '' // css `height` on a <table> serves as a min-height

    }
  }, arg.tableColGroupNode, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(isHeader ? 'thead' : 'tbody', {
    role: 'presentation'
  }, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
  return content;
}

function isColPropsEqual(cols0, cols1) {
  return isArraysEqual(cols0, cols1, isPropsEqual);
}

function renderMicroColGroup(cols, shrinkWidth) {
  var colNodes = [];
  /*
  for ColProps with spans, it would have been great to make a single <col span="">
  HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
  SOLUTION: making individual <col> elements makes Chrome behave.
  */

  for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
    var colProps = cols_1[_i];
    var span = colProps.span || 1;

    for (var i = 0; i < span; i += 1) {
      colNodes.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("col", {
        style: {
          width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : colProps.width || '',
          minWidth: colProps.minWidth || ''
        }
      }));
    }
  }

  return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['colgroup', {}], colNodes));
}

function sanitizeShrinkWidth(shrinkWidth) {
  /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
  4 accounts for 2 2-pixel borders. TODO: better solution? */
  return shrinkWidth == null ? 4 : shrinkWidth;
}

function hasShrinkWidth(cols) {
  for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
    var col = cols_2[_i];

    if (col.width === 'shrink') {
      return true;
    }
  }

  return false;
}

function getScrollGridClassNames(liquid, context) {
  var classNames = ['fc-scrollgrid', context.theme.getClass('table')];

  if (liquid) {
    classNames.push('fc-scrollgrid-liquid');
  }

  return classNames;
}

function getSectionClassNames(sectionConfig, wholeTableVGrow) {
  var classNames = ['fc-scrollgrid-section', "fc-scrollgrid-section-" + sectionConfig.type, sectionConfig.className // used?
  ];

  if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
    classNames.push('fc-scrollgrid-section-liquid');
  }

  if (sectionConfig.isSticky) {
    classNames.push('fc-scrollgrid-section-sticky');
  }

  return classNames;
}

function renderScrollShim(arg) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-scrollgrid-sticky-shim",
    style: {
      width: arg.clientWidth,
      minWidth: arg.tableMinWidth
    }
  });
}

function getStickyHeaderDates(options) {
  var stickyHeaderDates = options.stickyHeaderDates;

  if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
    stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyHeaderDates;
}

function getStickyFooterScrollbar(options) {
  var stickyFooterScrollbar = options.stickyFooterScrollbar;

  if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
    stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
  }

  return stickyFooterScrollbar;
}

var SimpleScrollGrid =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(SimpleScrollGrid, _super);

  function SimpleScrollGrid() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.processCols = memoize(function (a) {
      return a;
    }, isColPropsEqual); // so we get same `cols` props every time
    // yucky to memoize VNodes, but much more efficient for consumers

    _this.renderMicroColGroup = memoize(renderMicroColGroup);
    _this.scrollerRefs = new RefMap();
    _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
    _this.state = {
      shrinkWidth: null,
      forceYScrollbars: false,
      scrollerClientWidths: {},
      scrollerClientHeights: {}
    }; // TODO: can do a really simple print-view. dont need to join rows

    _this.handleSizing = function () {
      _this.setState((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        shrinkWidth: _this.computeShrinkWidth()
      }, _this.computeScrollerDims()));
    };

    return _this;
  }

  SimpleScrollGrid.prototype.render = function () {
    var _a = this,
        props = _a.props,
        state = _a.state,
        context = _a.context;

    var sectionConfigs = props.sections || [];
    var cols = this.processCols(props.cols);
    var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
    var classNames = getScrollGridClassNames(props.liquid, context);

    if (props.collapsibleWidth) {
      classNames.push('fc-scrollgrid-collapsible');
    } // TODO: make DRY


    var configCnt = sectionConfigs.length;
    var configI = 0;
    var currentConfig;
    var headSectionNodes = [];
    var bodySectionNodes = [];
    var footSectionNodes = [];

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
      headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
      bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode, false));
      configI += 1;
    }

    while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
      footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode, true));
      configI += 1;
    } // firefox bug: when setting height on table and there is a thead or tfoot,
    // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
    // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
    // if so, use a simpler dom structure, jam everything into a lone tbody.


    var isBuggy = !getCanVGrowWithinCell();
    var roleAttrs = {
      role: 'rowgroup'
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', {
      role: 'grid',
      className: classNames.join(' '),
      style: {
        height: props.height
      }
    }, Boolean(!isBuggy && headSectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['thead', roleAttrs], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['tbody', roleAttrs], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['tfoot', roleAttrs], footSectionNodes)), isBuggy && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)(['tbody', roleAttrs], headSectionNodes), bodySectionNodes), footSectionNodes)));
  };

  SimpleScrollGrid.prototype.renderSection = function (sectionConfig, microColGroupNode, isHeader) {
    if ('outerContent' in sectionConfig) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        key: sectionConfig.key
      }, sectionConfig.outerContent);
    }

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
      key: sectionConfig.key,
      role: "presentation",
      className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ')
    }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk, isHeader));
  };

  SimpleScrollGrid.prototype.renderChunkTd = function (sectionConfig, microColGroupNode, chunkConfig, isHeader) {
    if ('outerContent' in chunkConfig) {
      return chunkConfig.outerContent;
    }

    var props = this.props;
    var _a = this.state,
        forceYScrollbars = _a.forceYScrollbars,
        scrollerClientWidths = _a.scrollerClientWidths,
        scrollerClientHeights = _a.scrollerClientHeights;
    var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?

    var isLiquid = getSectionHasLiquidHeight(props, sectionConfig); // for `!props.liquid` - is WHOLE scrollgrid natural height?
    // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars

    var overflowY = !props.liquid ? 'visible' : forceYScrollbars ? 'scroll' : !needsYScrolling ? 'hidden' : 'auto';
    var sectionKey = sectionConfig.key;
    var content = renderChunkContent(sectionConfig, chunkConfig, {
      tableColGroupNode: microColGroupNode,
      tableMinWidth: '',
      clientWidth: !props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined ? scrollerClientWidths[sectionKey] : null,
      clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
      expandRows: sectionConfig.expandRows,
      syncRowHeights: false,
      rowSyncHeights: [],
      reportRowHeightChange: function () {}
    }, isHeader);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(isHeader ? 'th' : 'td', {
      ref: chunkConfig.elRef,
      role: 'presentation'
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: "fc-scroller-harness" + (isLiquid ? ' fc-scroller-harness-liquid' : '')
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Scroller, {
      ref: this.scrollerRefs.createRef(sectionKey),
      elRef: this.scrollerElRefs.createRef(sectionKey),
      overflowY: overflowY,
      overflowX: !props.liquid ? 'visible' : 'hidden'
      /* natural height? */
      ,
      maxHeight: sectionConfig.maxHeight,
      liquid: isLiquid,
      liquidIsAbsolute // because its within a harness
      : true
    }, content)));
  };

  SimpleScrollGrid.prototype._handleScrollerEl = function (scrollerEl, key) {
    var section = getSectionByKey(this.props.sections, key);

    if (section) {
      setRef(section.chunk.scrollerElRef, scrollerEl);
    }
  };

  SimpleScrollGrid.prototype.componentDidMount = function () {
    this.handleSizing();
    this.context.addResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.componentDidUpdate = function () {
    // TODO: need better solution when state contains non-sizing things
    this.handleSizing();
  };

  SimpleScrollGrid.prototype.componentWillUnmount = function () {
    this.context.removeResizeHandler(this.handleSizing);
  };

  SimpleScrollGrid.prototype.computeShrinkWidth = function () {
    return hasShrinkWidth(this.props.cols) ? computeShrinkWidth(this.scrollerElRefs.getAll()) : 0;
  };

  SimpleScrollGrid.prototype.computeScrollerDims = function () {
    var scrollbarWidth = getScrollbarWidths();

    var _a = this,
        scrollerRefs = _a.scrollerRefs,
        scrollerElRefs = _a.scrollerElRefs;

    var forceYScrollbars = false;
    var scrollerClientWidths = {};
    var scrollerClientHeights = {};

    for (var sectionKey in scrollerRefs.currentMap) {
      var scroller = scrollerRefs.currentMap[sectionKey];

      if (scroller && scroller.needsYScrolling()) {
        forceYScrollbars = true;
        break;
      }
    }

    for (var _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
      var section = _b[_i];
      var sectionKey = section.key;
      var scrollerEl = scrollerElRefs.currentMap[sectionKey];

      if (scrollerEl) {
        var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders

        scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
        : 0));
        scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
      }
    }

    return {
      forceYScrollbars: forceYScrollbars,
      scrollerClientWidths: scrollerClientWidths,
      scrollerClientHeights: scrollerClientHeights
    };
  };

  return SimpleScrollGrid;
}(BaseComponent);

SimpleScrollGrid.addStateEquality({
  scrollerClientWidths: isPropsEqual,
  scrollerClientHeights: isPropsEqual
});

function getSectionByKey(sections, key) {
  for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
    var section = sections_1[_i];

    if (section.key === key) {
      return section;
    }
  }

  return null;
}

var EventRoot =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventRoot, _super);

  function EventRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.elRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    return _this;
  }

  EventRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var seg = props.seg;
    var eventRange = seg.eventRange;
    var ui = eventRange.ui;
    var hookProps = {
      event: new EventApi(context, eventRange.def, eventRange.instance),
      view: context.viewApi,
      timeText: props.timeText,
      textColor: ui.textColor,
      backgroundColor: ui.backgroundColor,
      borderColor: ui.borderColor,
      isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
      isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
      isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
      isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
      isStart: Boolean(seg.isStart),
      isEnd: Boolean(seg.isEnd),
      isPast: Boolean(props.isPast),
      isFuture: Boolean(props.isFuture),
      isToday: Boolean(props.isToday),
      isSelected: Boolean(props.isSelected),
      isDragging: Boolean(props.isDragging),
      isResizing: Boolean(props.isResizing)
    };
    var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.eventClassNames,
      content: options.eventContent,
      defaultContent: props.defaultContent,
      didMount: options.eventDidMount,
      willUnmount: options.eventWillUnmount,
      elRef: this.elRef
    }, function (rootElRef, customClassNames, innerElRef, innerContent) {
      return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps);
    });
  };

  EventRoot.prototype.componentDidMount = function () {
    setElSeg(this.elRef.current, this.props.seg);
  };
  /*
  need to re-assign seg to the element if seg changes, even if the element is the same
  */


  EventRoot.prototype.componentDidUpdate = function (prevProps) {
    var seg = this.props.seg;

    if (seg !== prevProps.seg) {
      setElSeg(this.elRef.current, seg);
    }
  };

  return EventRoot;
}(BaseComponent); // should not be a purecomponent


var StandardEvent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StandardEvent, _super);

  function StandardEvent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  StandardEvent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var seg = props.seg;
    var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
    var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(EventRoot, {
      seg: seg,
      timeText: timeText,
      disableDragging: props.disableDragging,
      disableResizing: props.disableResizing,
      defaultContent: props.defaultContent || renderInnerContent$1,
      isDragging: props.isDragging,
      isResizing: props.isResizing,
      isDateSelecting: props.isDateSelecting,
      isSelected: props.isSelected,
      isPast: props.isPast,
      isFuture: props.isFuture,
      isToday: props.isToday
    }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
        className: props.extraClassNames.concat(classNames).join(' '),
        style: {
          borderColor: hookProps.borderColor,
          backgroundColor: hookProps.backgroundColor
        },
        ref: rootElRef
      }, getSegAnchorAttrs(seg, context)), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-event-main",
        ref: innerElRef,
        style: {
          color: hookProps.textColor
        }
      }, innerContent), hookProps.isStartResizable && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-event-resizer fc-event-resizer-start"
      }), hookProps.isEndResizable && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
        className: "fc-event-resizer fc-event-resizer-end"
      }));
    });
  };

  return StandardEvent;
}(BaseComponent);

function renderInnerContent$1(innerProps) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-main-frame"
  }, innerProps.timeText && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-time"
  }, innerProps.timeText), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title-container"
  }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title fc-sticky"
  }, innerProps.event.title || (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))));
}

var NowIndicatorRoot = function (props) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
    var options = context.options;
    var hookProps = {
      isAxis: props.isAxis,
      date: context.dateEnv.toDate(props.date),
      view: context.viewApi
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.nowIndicatorClassNames,
      content: options.nowIndicatorContent,
      didMount: options.nowIndicatorDidMount,
      willUnmount: options.nowIndicatorWillUnmount
    }, props.children);
  });
};

var DAY_NUM_FORMAT = createFormatter({
  day: 'numeric'
});

var DayCellContent =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayCellContent, _super);

  function DayCellContent() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  DayCellContent.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = refineDayCellHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHook, {
      hookProps: hookProps,
      content: options.dayCellContent,
      defaultContent: props.defaultContent
    }, props.children);
  };

  return DayCellContent;
}(BaseComponent);

function refineDayCellHookProps(raw) {
  var date = raw.date,
      dateEnv = raw.dateEnv;
  var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
  return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
    date: dateEnv.toDate(date),
    view: raw.viewApi
  }, dayMeta), {
    dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : ''
  }), raw.extraProps);
}

var DayCellRoot =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayCellRoot, _super);

  function DayCellRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
    _this.normalizeClassNames = buildClassNameNormalizer();
    return _this;
  }

  DayCellRoot.prototype.render = function () {
    var _a = this,
        props = _a.props,
        context = _a.context;

    var options = context.options;
    var hookProps = this.refineHookProps({
      date: props.date,
      dateProfile: props.dateProfile,
      todayRange: props.todayRange,
      showDayNumber: props.showDayNumber,
      extraProps: props.extraHookProps,
      viewApi: context.viewApi,
      dateEnv: context.dateEnv
    });
    var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled ? [] // don't use custom classNames if disabled
    : this.normalizeClassNames(options.dayCellClassNames, hookProps));
    var dataAttrs = hookProps.isDisabled ? {} : {
      'data-date': formatDayString(props.date)
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, {
      hookProps: hookProps,
      didMount: options.dayCellDidMount,
      willUnmount: options.dayCellWillUnmount,
      elRef: props.elRef
    }, function (rootElRef) {
      return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled);
    });
  };

  return DayCellRoot;
}(BaseComponent);

function renderFill(fillType) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-" + fillType
  });
}

var BgEvent = function (props) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(EventRoot, {
    defaultContent: renderInnerContent,
    seg: props.seg
    /* uselesss i think */
    ,
    timeText: "",
    disableDragging: true,
    disableResizing: true,
    isDragging: false,
    isResizing: false,
    isDateSelecting: false,
    isSelected: false,
    isPast: props.isPast,
    isFuture: props.isFuture,
    isToday: props.isToday
  }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) {
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      ref: rootElRef,
      className: ['fc-bg-event'].concat(classNames).join(' '),
      style: {
        backgroundColor: hookProps.backgroundColor
      }
    }, innerContent);
  });
};

function renderInnerContent(props) {
  var title = props.event.title;
  return title && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "fc-event-title"
  }, props.event.title);
}

var WeekNumberRoot = function (props) {
  return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
    var dateEnv = context.dateEnv,
        options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?

    var text = dateEnv.format(date, format);
    var hookProps = {
      num: num,
      text: text,
      date: date
    };
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
      hookProps: hookProps,
      classNames: options.weekNumberClassNames,
      content: options.weekNumberContent,
      defaultContent: renderInner,
      didMount: options.weekNumberDidMount,
      willUnmount: options.weekNumberWillUnmount
    }, props.children);
  });
};

function renderInner(innerProps) {
  return innerProps.text;
}

var PADDING_FROM_VIEWPORT = 10;

var Popover =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Popover, _super);

  function Popover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      titleId: getUniqueDomId()
    };

    _this.handleRootEl = function (el) {
      _this.rootEl = el;

      if (_this.props.elRef) {
        setRef(_this.props.elRef, el);
      }
    }; // Triggered when the user clicks *anywhere* in the document, for the autoHide feature


    _this.handleDocumentMouseDown = function (ev) {
      // only hide the popover if the click happened outside the popover
      var target = getEventTargetViaRoot(ev);

      if (!_this.rootEl.contains(target)) {
        _this.handleCloseClick();
      }
    };

    _this.handleDocumentKeyDown = function (ev) {
      if (ev.key === 'Escape') {
        _this.handleCloseClick();
      }
    };

    _this.handleCloseClick = function () {
      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    return _this;
  }

  Popover.prototype.render = function () {
    var _a = this.context,
        theme = _a.theme,
        options = _a.options;

    var _b = this,
        props = _b.props,
        state = _b.state;

    var classNames = ['fc-popover', theme.getClass('popover')].concat(props.extraClassNames || []);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
      id: props.id,
      className: classNames.join(' '),
      "aria-labelledby": state.titleId
    }, props.extraAttrs, {
      ref: this.handleRootEl
    }), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'fc-popover-header ' + theme.getClass('popoverHeader')
    }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: "fc-popover-title",
      id: state.titleId
    }, props.title), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
      className: 'fc-popover-close ' + theme.getIconClass('close'),
      title: options.closeHint,
      onClick: this.handleCloseClick
    })), (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'fc-popover-body ' + theme.getClass('popoverContent')
    }, props.children)), props.parentEl);
  };

  Popover.prototype.componentDidMount = function () {
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    this.updateSize();
  };

  Popover.prototype.componentWillUnmount = function () {
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  };

  Popover.prototype.updateSize = function () {
    var isRtl = this.context.isRtl;
    var _a = this.props,
        alignmentEl = _a.alignmentEl,
        alignGridTop = _a.alignGridTop;
    var rootEl = this.rootEl;
    var alignmentRect = computeClippedClientRect(alignmentEl);

    if (alignmentRect) {
      var popoverDims = rootEl.getBoundingClientRect(); // position relative to viewport

      var popoverTop = alignGridTop ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top : alignmentRect.top;
      var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left; // constrain

      popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
      popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
      popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
      var origin_1 = rootEl.offsetParent.getBoundingClientRect();
      applyStyle(rootEl, {
        top: popoverTop - origin_1.top,
        left: popoverLeft - origin_1.left
      });
    }
  };

  return Popover;
}(BaseComponent);

var MorePopover =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MorePopover, _super);

  function MorePopover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.handleRootEl = function (rootEl) {
      _this.rootEl = rootEl;

      if (rootEl) {
        _this.context.registerInteractiveComponent(_this, {
          el: rootEl,
          useEventCenter: false
        });
      } else {
        _this.context.unregisterInteractiveComponent(_this);
      }
    };

    return _this;
  }

  MorePopover.prototype.render = function () {
    var _a = this.context,
        options = _a.options,
        dateEnv = _a.dateEnv;
    var props = this.props;
    var startDate = props.startDate,
        todayRange = props.todayRange,
        dateProfile = props.dateProfile;
    var title = dateEnv.format(startDate, options.dayPopoverFormat);
    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayCellRoot, {
      date: startDate,
      dateProfile: dateProfile,
      todayRange: todayRange,
      elRef: this.handleRootEl
    }, function (rootElRef, dayClassNames, dataAttrs) {
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, {
        elRef: rootElRef,
        id: props.id,
        title: title,
        extraClassNames: ['fc-more-popover'].concat(dayClassNames),
        extraAttrs: dataAttrs
        /* TODO: make these time-based when not whole-day? */
        ,
        parentEl: props.parentEl,
        alignmentEl: props.alignmentEl,
        alignGridTop: props.alignGridTop,
        onClose: props.onClose
      }, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayCellContent, {
        date: startDate,
        dateProfile: dateProfile,
        todayRange: todayRange
      }, function (innerElRef, innerContent) {
        return innerContent && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "fc-more-popover-misc",
          ref: innerElRef
        }, innerContent);
      }), props.children);
    });
  };

  MorePopover.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
    var _a = this,
        rootEl = _a.rootEl,
        props = _a.props;

    if (positionLeft >= 0 && positionLeft < elWidth && positionTop >= 0 && positionTop < elHeight) {
      return {
        dateProfile: props.dateProfile,
        dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({
          allDay: true,
          range: {
            start: props.startDate,
            end: props.endDate
          }
        }, props.extraDateSpan),
        dayEl: rootEl,
        rect: {
          left: 0,
          top: 0,
          right: elWidth,
          bottom: elHeight
        },
        layer: 1 // important when comparing with hits from other components

      };
    }

    return null;
  };

  return MorePopover;
}(DateComponent);

var MoreLinkRoot =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MoreLinkRoot, _super);

  function MoreLinkRoot() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.linkElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    _this.state = {
      isPopoverOpen: false,
      popoverId: getUniqueDomId()
    };

    _this.handleClick = function (ev) {
      var _a = _this,
          props = _a.props,
          context = _a.context;
      var moreLinkClick = context.options.moreLinkClick;
      var date = computeRange(props).start;

      function buildPublicSeg(seg) {
        var _a = seg.eventRange,
            def = _a.def,
            instance = _a.instance,
            range = _a.range;
        return {
          event: new EventApi(context, def, instance),
          start: context.dateEnv.toDate(range.start),
          end: context.dateEnv.toDate(range.end),
          isStart: seg.isStart,
          isEnd: seg.isEnd
        };
      }

      if (typeof moreLinkClick === 'function') {
        moreLinkClick = moreLinkClick({
          date: date,
          allDay: Boolean(props.allDayDate),
          allSegs: props.allSegs.map(buildPublicSeg),
          hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
          jsEvent: ev,
          view: context.viewApi
        });
      }

      if (!moreLinkClick || moreLinkClick === 'popover') {
        _this.setState({
          isPopoverOpen: true
        });
      } else if (typeof moreLinkClick === 'string') {
        // a view name
        context.calendarApi.zoomTo(date, moreLinkClick);
      }
    };

    _this.handlePopoverClose = function () {
      _this.setState({
        isPopoverOpen: false
      });
    };

    return _this;
  }

  MoreLinkRoot.prototype.render = function () {
    var _this = this;

    var _a = this,
        props = _a.props,
        state = _a.state;

    return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
      var viewApi = context.viewApi,
          options = context.options,
          calendarApi = context.calendarApi;
      var moreLinkText = options.moreLinkText;
      var moreCnt = props.moreCnt;
      var range = computeRange(props);
      var text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
      ? moreLinkText.call(calendarApi, moreCnt) : "+" + moreCnt + " " + moreLinkText;
      var title = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
      var hookProps = {
        num: moreCnt,
        shortText: "+" + moreCnt,
        text: text,
        view: viewApi
      };
      return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, Boolean(props.moreCnt) && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, {
        elRef: _this.linkElRef,
        hookProps: hookProps,
        classNames: options.moreLinkClassNames,
        content: options.moreLinkContent,
        defaultContent: props.defaultContent || renderMoreLinkInner,
        didMount: options.moreLinkDidMount,
        willUnmount: options.moreLinkWillUnmount
      }, function (rootElRef, customClassNames, innerElRef, innerContent) {
        return props.children(rootElRef, ['fc-more-link'].concat(customClassNames), innerElRef, innerContent, _this.handleClick, title, state.isPopoverOpen, state.isPopoverOpen ? state.popoverId : '');
      }), state.isPopoverOpen && (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MorePopover, {
        id: state.popoverId,
        startDate: range.start,
        endDate: range.end,
        dateProfile: props.dateProfile,
        todayRange: props.todayRange,
        extraDateSpan: props.extraDateSpan,
        parentEl: _this.parentEl,
        alignmentEl: props.alignmentElRef.current,
        alignGridTop: props.alignGridTop,
        onClose: _this.handlePopoverClose
      }, props.popoverContent()));
    });
  };

  MoreLinkRoot.prototype.componentDidMount = function () {
    this.updateParentEl();
  };

  MoreLinkRoot.prototype.componentDidUpdate = function () {
    this.updateParentEl();
  };

  MoreLinkRoot.prototype.updateParentEl = function () {
    if (this.linkElRef.current) {
      this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
    }
  };

  return MoreLinkRoot;
}(BaseComponent);

function renderMoreLinkInner(props) {
  return props.text;
}

function computeRange(props) {
  if (props.allDayDate) {
    return {
      start: props.allDayDate,
      end: addDays(props.allDayDate, 1)
    };
  }

  var hiddenSegs = props.hiddenSegs;
  return {
    start: computeEarliestSegStart(hiddenSegs),
    end: computeLatestSegEnd(hiddenSegs)
  };
}

function computeEarliestSegStart(segs) {
  return segs.reduce(pickEarliestStart).eventRange.range.start;
}

function pickEarliestStart(seg0, seg1) {
  return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}

function computeLatestSegEnd(segs) {
  return segs.reduce(pickLatestEnd).eventRange.range.end;
}

function pickLatestEnd(seg0, seg1) {
  return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
} // exports
// --------------------------------------------------------------------------------------------------


var version = '5.10.1'; // important to type it, so .d.ts has generic string



/***/ }),

/***/ 53139:
/*!***************************************************!*\
  !*** ./node_modules/@fullcalendar/common/vdom.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createPortal": () => (/* binding */ createPortal),
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "flushToDom": () => (/* binding */ flushToDom),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ unmountComponentAtNode)
/* harmony export */ });
/// <reference types="@fullcalendar/core-preact" />
if (typeof FullCalendarVDom === 'undefined') {
    throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
}
var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushToDom = FullCalendarVDom.flushToDom;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;
/* eslint-enable */




/***/ }),

/***/ 22700:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent),
/* harmony export */   "CalendarApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi),
/* harmony export */   "CalendarContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ContentHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController),
/* harmony export */   "Emitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Emitter),
/* harmony export */   "EventApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventApi),
/* harmony export */   "EventRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot),
/* harmony export */   "EventSourceApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Interaction": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache),
/* harmony export */   "RefMap": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap),
/* harmony export */   "RenderHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollController),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollResponder),
/* harmony export */   "Scroller": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer),
/* harmony export */   "Splitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDateCell),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDowCell),
/* harmony export */   "Theme": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "ViewApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewApi),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController),
/* harmony export */   "addDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays),
/* harmony export */   "addDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations),
/* harmony export */   "addMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addMs),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyle),
/* harmony export */   "applyStyleProp": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString),
/* harmony export */   "buildNavLinkAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs),
/* harmony export */   "buildSegCompareObj": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.collectFromHash),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareNumbers),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect),
/* harmony export */   "computeRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeRect),
/* harmony export */   "computeSegDraggable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeVisibleDayRange),
/* harmony export */   "config": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.config),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.constrainPoint),
/* harmony export */   "createAriaClickAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs),
/* harmony export */   "createContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventInstance),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventUi),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "diffDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDates),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDayAndTime),
/* harmony export */   "diffDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffPoints),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.disableCursor),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementClosest),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementMatches),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterHash),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findDirectChildren),
/* harmony export */   "findElements": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findElements),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flexibleCompare),
/* harmony export */   "flushToDom": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom),
/* harmony export */   "formatDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getClippingParents),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd),
/* harmony export */   "getElRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElRoot),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventClassNames),
/* harmony export */   "getEventTargetViaRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventTargetViaRoot),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionHasLiquidHeight),
/* harmony export */   "getSegAnchorAttrs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUnequalProps),
/* harmony export */   "getUniqueDomId": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalLocales),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries),
/* harmony export */   "guid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.guid),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasShrinkWidth),
/* harmony export */   "identity": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRects),
/* harmony export */   "intersectSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectSpans),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual),
/* harmony export */   "isInt": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInt),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isValidDate),
/* harmony export */   "joinSpans": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.joinSpans),
/* harmony export */   "listenBySelector": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.listenBySelector),
/* harmony export */   "mapHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mapHash),
/* harmony export */   "memoize": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration),
/* harmony export */   "padStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.padStart),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseMarker),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventDefault),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineEventDef),
/* harmony export */   "refineProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineProps),
/* harmony export */   "removeElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeElement),
/* harmony export */   "removeExact": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderChunkContent),
/* harmony export */   "renderFill": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim),
/* harmony export */   "requestJson": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setElSeg),
/* harmony export */   "setRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay),
/* harmony export */   "translateRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.translateRect),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unpromisify),
/* harmony export */   "version": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.version),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations),
/* harmony export */   "Calendar": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vdom.js */ 83083);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var Calendar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Calendar, _super);
    function Calendar(el, optionOverrides) {
        if (optionOverrides === void 0) { optionOverrides = {}; }
        var _this = _super.call(this) || this;
        _this.isRendering = false;
        _this.isRendered = false;
        _this.currentClassNames = [];
        _this.customContentRenderId = 0; // will affect custom generated classNames?
        _this.handleAction = function (action) {
            // actions we know we want to render immediately
            switch (action.type) {
                case 'SET_EVENT_DRAG':
                case 'SET_EVENT_RESIZE':
                    _this.renderRunner.tryDrain();
            }
        };
        _this.handleData = function (data) {
            _this.currentData = data;
            _this.renderRunner.request(data.calendarOptions.rerenderDelay);
        };
        _this.handleRenderRequest = function () {
            if (_this.isRendering) {
                _this.isRendered = true;
                var currentData_1 = _this.currentData;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot, { options: currentData_1.calendarOptions, theme: currentData_1.theme, emitter: currentData_1.emitter }, function (classNames, height, isHeightAuto, forPrint) {
                    _this.setClassNames(classNames);
                    _this.setHeight(height);
                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext.Provider, { value: _this.customContentRenderId },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ isHeightAuto: isHeightAuto, forPrint: forPrint }, currentData_1))));
                }), _this.el);
            }
            else if (_this.isRendered) {
                _this.isRendered = false;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(_this.el);
                _this.setClassNames([]);
                _this.setHeight('');
            }
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom)();
        };
        _this.el = el;
        _this.renderRunner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner(_this.handleRenderRequest);
        new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager({
            optionOverrides: optionOverrides,
            calendarApi: _this,
            onAction: _this.handleAction,
            onData: _this.handleData,
        });
        return _this;
    }
    Object.defineProperty(Calendar.prototype, "view", {
        get: function () { return this.currentData.viewApi; } // for public API
        ,
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.render = function () {
        var wasRendering = this.isRendering;
        if (!wasRendering) {
            this.isRendering = true;
        }
        else {
            this.customContentRenderId += 1;
        }
        this.renderRunner.request();
        if (wasRendering) {
            this.updateSize();
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.isRendering) {
            this.isRendering = false;
            this.renderRunner.request();
        }
    };
    Calendar.prototype.updateSize = function () {
        _super.prototype.updateSize.call(this);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom)();
    };
    Calendar.prototype.batchRendering = function (func) {
        this.renderRunner.pause('batchRendering');
        func();
        this.renderRunner.resume('batchRendering');
    };
    Calendar.prototype.pauseRendering = function () {
        this.renderRunner.pause('pauseRendering');
    };
    Calendar.prototype.resumeRendering = function () {
        this.renderRunner.resume('pauseRendering', true);
    };
    Calendar.prototype.resetOptions = function (optionOverrides, append) {
        this.currentDataManager.resetOptions(optionOverrides, append);
    };
    Calendar.prototype.setClassNames = function (classNames) {
        if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual)(classNames, this.currentClassNames)) {
            var classList = this.el.classList;
            for (var _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
                var className = _a[_i];
                classList.remove(className);
            }
            for (var _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
                var className = classNames_1[_b];
                classList.add(className);
            }
            this.currentClassNames = classNames;
        }
    };
    Calendar.prototype.setHeight = function (height) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp)(this.el, 'height', height);
    };
    return Calendar;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi));




/***/ }),

/***/ 83083:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/core/vdom.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/compat */ 89086);




var globalObj = typeof globalThis !== 'undefined' ? globalThis : window; // // TODO: streamline when killing IE11 support
if (globalObj.FullCalendarVDom) {
    console.warn('FullCalendar VDOM already loaded');
}
else {
    globalObj.FullCalendarVDom = {
        Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
        createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
        render: preact__WEBPACK_IMPORTED_MODULE_0__.render,
        createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
        Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        createContext: createContext,
        createPortal: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal,
        flushToDom: flushToDom,
        unmountComponentAtNode: unmountComponentAtNode,
    };
}
// HACKS...
// TODO: lock version
// TODO: link gh issues
function flushToDom() {
    var oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering; // orig
    var callbackQ = [];
    function execCallbackSync(callback) {
        callbackQ.push(callback);
    }
    preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = execCallbackSync;
    preact__WEBPACK_IMPORTED_MODULE_0__.render(preact__WEBPACK_IMPORTED_MODULE_0__.createElement(FakeComponent, {}), document.createElement('div'));
    while (callbackQ.length) {
        callbackQ.shift()();
    }
    preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
}
var FakeComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(FakeComponent, _super);
    function FakeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeComponent.prototype.render = function () { return preact__WEBPACK_IMPORTED_MODULE_0__.createElement('div', {}); };
    FakeComponent.prototype.componentDidMount = function () { this.setState({}); };
    return FakeComponent;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component));
function createContext(defaultValue) {
    var ContextType = preact__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultValue);
    var origProvider = ContextType.Provider;
    ContextType.Provider = function () {
        var _this = this;
        var isNew = !this.getChildContext;
        var children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
        if (isNew) {
            var subs_1 = [];
            this.shouldComponentUpdate = function (_props) {
                if (_this.props.value !== _props.value) {
                    subs_1.forEach(function (c) {
                        c.context = _props.value;
                        c.forceUpdate();
                    });
                }
            };
            this.sub = function (c) {
                subs_1.push(c);
                var old = c.componentWillUnmount;
                c.componentWillUnmount = function () {
                    subs_1.splice(subs_1.indexOf(c), 1);
                    old && old.call(c);
                };
            };
        }
        return children;
    };
    return ContextType;
}
function unmountComponentAtNode(node) {
    preact__WEBPACK_IMPORTED_MODULE_0__.render(null, node);
}


/***/ }),

/***/ 13947:
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "DayGridView": () => (/* binding */ DayTableView),
/* harmony export */   "DayTable": () => (/* binding */ DayTable),
/* harmony export */   "DayTableSlicer": () => (/* binding */ DayTableSlicer),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableView": () => (/* binding */ TableView),
/* harmony export */   "buildDayTableModel": () => (/* binding */ buildDayTableModel)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 15574);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var TableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableView, _super);
    function TableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
        var _a = this, props = _a.props, context = _a.context;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: { content: bodyContent },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections }))); }));
    };
    TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, props = _a.props, context = _a.context;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'main',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    }],
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [{
                    key: 'main',
                    content: bodyContent,
                }],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'main',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    }],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections }))); }));
    };
    return TableView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function splitSegsByRow(segs, rowCnt) {
    var byRow = [];
    for (var i = 0; i < rowCnt; i += 1) {
        byRow[i] = [];
    }
    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    var byCol = [];
    for (var i = 0; i < colCnt; i += 1) {
        byCol[i] = [];
    }
    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
        var seg = segs_2[_i];
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}

var TableCellTop = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellTop, _super);
    function TableCellTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCellTop.prototype.render = function () {
        var props = this.props;
        var navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, props.date);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function (innerElRef, innerContent) { return ((innerContent || props.forceDayTop) && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-top", ref: innerElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ id: props.dayNumberId, className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))))); }));
    };
    return TableCellTop;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderTopInner(props) {
    return props.dayNumberText;
}

var DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
function hasListItemDisplay(seg) {
    var display = seg.eventRange.ui.display;
    return display === 'list-item' || (display === 'auto' &&
        !seg.eventRange.def.allDay &&
        seg.firstCol === seg.lastCol && // can't be multi-day
        seg.isStart && // "
        seg.isEnd // "
    );
}

var TableBlockEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableBlockEvent, _super);
    function TableBlockEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBlockEvent.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
    };
    return TableBlockEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TableListItemEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableListItemEvent, _super);
    function TableListItemEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableListItemEvent.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        var timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: props.seg, timeText: timeText, defaultContent: renderInnerContent, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent) { return ( // we don't use styles!
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '), ref: rootElRef }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs)(props.seg, context)), innerContent)); }));
    };
    return TableListItemEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(innerProps) {
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
        innerProps.timeText && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-time" }, innerProps.timeText)),
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title" }, innerProps.event.title || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))));
}

var TableCellMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellMoreLink, _super);
    function TableCellMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compileSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(compileSegs);
        return _this;
    }
    TableCellMoreLink.prototype.render = function () {
        var props = this.props;
        var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function () {
                var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                    (props.eventResize ? props.eventResize.affectedInstances : null) ||
                    {};
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(function (seg) {
                    var instanceId = seg.eventRange.instance.instanceId;
                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                        } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange))))));
                })));
            } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: rootElRef, className: ['fc-daygrid-more-link'].concat(classNames).join(' '), title: title, "aria-expanded": isExpanded, "aria-controls": popoverId }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createAriaClickAttrs)(handleClick)), innerContent)); }));
    };
    return TableCellMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function compileSegs(singlePlacements) {
    var allSegs = [];
    var invisibleSegs = [];
    for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
        var placement = singlePlacements_1[_i];
        allSegs.push(placement.seg);
        if (!placement.isVisible) {
            invisibleSegs.push(placement.seg);
        }
    }
    return { allSegs: allSegs, invisibleSegs: invisibleSegs };
}

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'narrow' });
var TableCell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCell, _super);
    function TableCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            dayNumberId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        _this.handleRootEl = function (el) {
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.props.elRef, el);
        };
        return _this;
    }
    TableCell.prototype.render = function () {
        var _a = this, context = _a.context, props = _a.props, state = _a.state, rootElRef = _a.rootElRef;
        var date = props.date, dateProfile = props.dateProfile;
        var navLinkAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(context, date, 'week');
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: dayElRef, role: "gridcell", className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ') }, rootDataAttrs, props.extraDataAttrs, (props.showDayNumber ? { 'aria-labelledby': state.dayNumberId } : {})),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef /* different from hook system! RENAME */ },
                props.showWeekNumber && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (weekElRef, weekClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: weekElRef, className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ') }, navLinkAttrs), innerContent)); })),
                !isDisabled && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellTop, { date: date, dateProfile: dateProfile, showDayNumber: props.showDayNumber, dayNumberId: state.dayNumberId, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps })),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                    props.fgContent,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))); }));
    };
    return TableCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
    var hierarchy = new DayGridSegHierarchy();
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    }
    else if (typeof dayMaxEvents === 'number') {
        hierarchy.maxStackCnt = dayMaxEvents;
    }
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    var segInputs = [];
    var unknownHeightSegs = [];
    for (var i = 0; i < segs.length; i += 1) {
        var seg = segs[i];
        var instanceId = seg.eventRange.instance.instanceId;
        var eventHeight = eventInstanceHeights[instanceId];
        if (eventHeight != null) {
            segInputs.push({
                index: i,
                thickness: eventHeight,
                span: {
                    start: seg.firstCol,
                    end: seg.lastCol + 1,
                },
            });
        }
        else {
            unknownHeightSegs.push(seg);
        }
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var segRects = hierarchy.toRects();
    var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
    var moreCnts = [];
    var moreMarginTops = [];
    // add segs with unknown heights
    for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
        var seg = unknownHeightSegs_1[_i];
        multiColPlacements[seg.firstCol].push({
            seg: seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // add the hidden entries
    for (var col = 0; col < cells.length; col += 1) {
        moreCnts.push(0);
    }
    for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
        var hiddenEntry = hiddenEntries_1[_b];
        var seg = segs[hiddenEntry.index];
        var hiddenSpan = hiddenEntry.span;
        multiColPlacements[hiddenSpan.start].push({
            seg: resliceSeg(seg, hiddenSpan.start, hiddenSpan.end, cells),
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = hiddenSpan.start; col < hiddenSpan.end; col += 1) {
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // deal with leftover margins
    for (var col = 0; col < cells.length; col += 1) {
        moreMarginTops.push(leftoverMargins[col]);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, moreCnts: moreCnts, moreMarginTops: moreMarginTops };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    var singleColPlacements = [];
    var multiColPlacements = [];
    var leftoverMargins = [];
    for (var col = 0; col < cells.length; col += 1) {
        var rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        var singlePlacements = [];
        var currentHeight = 0;
        var currentMarginTop = 0;
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            var seg = segs[rect.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: rect.levelCoord,
                marginTop: rect.levelCoord - currentHeight,
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        var multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
            var rect = rects_2[_a];
            var seg = segs[rect.index];
            var isAbsolute = rect.span.end - rect.span.start > 1; // multi-column?
            var isFirstCol = rect.span.start === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                        isVisible: true,
                        isAbsolute: true,
                        absoluteTop: rect.levelCoord,
                        marginTop: 0,
                    });
                }
            }
            else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.span.start, rect.span.end, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: rect.levelCoord,
                    marginTop: currentMarginTop, // claim the margin
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, leftoverMargins: leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
    var rectsByEachCol = [];
    for (var col = 0; col < colCnt; col += 1) {
        rectsByEachCol.push([]);
    }
    for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
        var rect = rects_3[_i];
        for (var col = rect.span.start; col < rect.span.end; col += 1) {
            rectsByEachCol[col].push(rect);
        }
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
        return seg;
    }
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(origRange, {
        start: cells[spanStart].date,
        end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(cells[spanEnd - 1].date, 1),
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
            def: eventRange.def,
            ui: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventRange.ui), { durationEditable: false }),
            instance: eventRange.instance,
            range: slicedRange,
        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayGridSegHierarchy, _super);
    function DayGridSegHierarchy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // config
        _this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        _this.forceHidden = {};
        return _this;
    }
    DayGridSegHierarchy.prototype.addSegs = function (segInputs) {
        var _this = this;
        var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
        var entriesByLevel = this.entriesByLevel;
        var excludeHidden = function (entry) { return !_this.forceHidden[(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(entry)]; };
        // remove the forced-hidden segs
        for (var level = 0; level < entriesByLevel.length; level += 1) {
            entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        }
        return hiddenSegs;
    };
    DayGridSegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
        var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
        var touchingEntry = insertion.touchingEntry, touchingLevel = insertion.touchingLevel, touchingLateral = insertion.touchingLateral;
        if (this.hiddenConsumes && touchingEntry) {
            var touchingEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(touchingEntry);
            // if not already hidden
            if (!forceHidden[touchingEntryId]) {
                if (this.allowReslicing) {
                    var placeholderEntry = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, touchingEntry), { span: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectSpans)(touchingEntry.span, entry.span) });
                    var placeholderEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(placeholderEntry);
                    forceHidden[placeholderEntryId] = true;
                    entriesByLevel[touchingLevel][touchingLateral] = placeholderEntry; // replace touchingEntry with our placeholder
                    this.splitEntry(touchingEntry, entry, hiddenEntries); // split up the touchingEntry, reinsert it
                }
                else {
                    forceHidden[touchingEntryId] = true;
                    hiddenEntries.push(touchingEntry);
                }
            }
        }
        return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
    };
    return DayGridSegHierarchy;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy));

var TableRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableRow, _super);
    function TableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the <td>
        _this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-frame
        _this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-events
        _this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // indexed by "instanceId:firstCol"
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {},
        };
        return _this;
    }
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var options = context.options;
        var colCnt = props.cells.length;
        var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        var _b = computeFgSegPlacement((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
        var isForcedInvisible = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: this.rootElRef, role: "row" },
            props.renderIntro && props.renderIntro(),
            props.cells.map(function (cell, col) {
                var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        _this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                        _this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                        _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))) }));
            })));
    };
    TableRow.prototype.componentDidMount = function () {
        this.updateSizing(true);
    };
    TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
        var currentProps = this.props;
        this.updateSizing(!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual)(prevProps, currentProps));
    };
    TableRow.prototype.getHighlightSegs = function () {
        var props = this.props;
        if (props.eventDrag && props.eventDrag.segs.length) { // messy check
            return props.eventDrag.segs;
        }
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return props.dateSelectionSegs;
    };
    TableRow.prototype.getMirrorSegs = function () {
        var props = this.props;
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return [];
    };
    TableRow.prototype.renderFgSegs = function (col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        var context = this.context;
        var eventSelection = this.props.eventSelection;
        var framePositions = this.state.framePositions;
        var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        var isMirror = isDragging || isResizing || isDateSelecting;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
                var placement = segPlacements_1[_i];
                var seg = placement.seg;
                var instanceId = seg.eventRange.instance.instanceId;
                var key = instanceId + ':' + col;
                var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                var isAbsolute = placement.isAbsolute;
                var left = '';
                var right = '';
                if (isAbsolute) {
                    if (context.isRtl) {
                        right = 0;
                        left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                    }
                    else {
                        left = 0;
                        right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                    }
                }
                /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
                        visibility: isVisible ? '' : 'hidden',
                        marginTop: isAbsolute ? '' : placement.marginTop,
                        top: isAbsolute ? placement.absoluteTop : '',
                        left: left,
                        right: right,
                    } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))))));
            }
        }
        return nodes;
    };
    TableRow.prototype.renderFillSegs = function (segs, fillType) {
        var isRtl = this.context.isRtl;
        var todayRange = this.props.todayRange;
        var framePositions = this.state.framePositions;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                var leftRightCss = isRtl ? {
                    right: 0,
                    left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                } : {
                    left: 0,
                    right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                };
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))) :
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
            }
        }
        return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}], nodes));
    };
    TableRow.prototype.updateSizing = function (isExternalSizingChange) {
        var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
        if (!props.forPrint &&
            props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                var frameEls = props.cells.map(function (cell) { return frameElRefs.currentMap[cell.key]; });
                if (frameEls.length) {
                    var originEl = this.rootElRef.current;
                    this.setState({
                        framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(originEl, frameEls, true, // isHorizontal
                        false),
                    });
                }
            }
            var oldInstanceHeights = this.state.eventInstanceHeights;
            var newInstanceHeights = this.queryEventInstanceHeights();
            var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.setState({
                // HACK to prevent oscillations of events being shown/hidden from max-event-rows
                // Essentially, once you compute an element's height, never null-out.
                // TODO: always display all events, as visibility:hidden?
                eventInstanceHeights: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, oldInstanceHeights), newInstanceHeights),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
            });
        }
    };
    TableRow.prototype.queryEventInstanceHeights = function () {
        var segElMap = this.segHarnessRefs.currentMap;
        var eventInstanceHeights = {};
        // get the max height amongst instance segs
        for (var key in segElMap) {
            var height = Math.round(segElMap[key].getBoundingClientRect().height);
            var instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
            eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
        }
        return eventInstanceHeights;
    };
    TableRow.prototype.computeMaxContentHeight = function () {
        var firstKey = this.props.cells[0].key;
        var cellEl = this.cellElRefs.currentMap[firstKey];
        var fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    };
    TableRow.prototype.getCellEls = function () {
        var elMap = this.cellElRefs.currentMap;
        return this.props.cells.map(function (cell) { return elMap[cell.key]; });
    };
    return TableRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
TableRow.addStateEquality({
    eventInstanceHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual,
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) {
        return [];
    }
    var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map(function (seg) { return ({
        seg: seg,
        isVisible: true,
        isAbsolute: true,
        absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
        marginTop: 0,
    }); });
}
function buildAbsoluteTopHash(colPlacements) {
    var topsByInstanceId = {};
    for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
        var placements = colPlacements_1[_i];
        for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
            var placement = placements_1[_a];
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return topsByInstanceId;
}

var Table = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        _this.handleRootEl = function (rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
        var rowCnt = props.cells.length;
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        var classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural', // will height of one row depend on the others?
        ];
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: classNames.join(' '), ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", className: "fc-scrollgrid-sync-table", style: {
                        width: props.clientWidth,
                        minWidth: props.tableMinWidth,
                        height: expandRows ? props.clientHeight : '',
                    } },
                    props.colGroupNode,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" }, props.cells.map(function (cells, row) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, { ref: _this.rowRefs.createRef(row), key: cells.length
                            ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                            : row // in case there are no cells (like when resource view is loading)
                        , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })); }))))); })));
    };
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    Table.prototype.prepareHits = function () {
        this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.collect().map(function (rowObj) { return rowObj.getCellEls()[0]; }), // first cell el in each row. TODO: not optimal
        false, true);
        this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
        true, // horizontal
        false);
    };
    Table.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(positionLeft);
        var row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            var cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row],
                },
                layer: 0,
            };
        }
        return null;
    };
    Table.prototype.getCellEl = function (row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    };
    Table.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(start, 1);
        return { start: start, end: end };
    };
    return Table;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}

var DayTableSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableSlicer, _super);
    function DayTableSlicer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceDayIfListItem = true;
        return _this;
    }
    DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    };
    return DayTableSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTable, _super);
    function DayTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slicer = new DayTableSlicer();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTable.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
    };
    return DayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

var DayTableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableView, _super);
    function DayTableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTableModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayTableModel);
        _this.headerRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTableView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
        var bodyContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint })); };
        return options.dayMinWidth
            ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
            : this.renderSimpleLayout(headerContent, bodyContent);
    };
    return DayTableView;
}(TableView));
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDateProfileGenerator, _super);
    function TableDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.props.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.props.monthMode &&
            this.props.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks)(start, end));
            end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return TableDateProfileGenerator;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator));

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: DayTableView,
            dateProfileGeneratorClass: TableDateProfileGenerator,
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 },
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 },
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true,
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);



/***/ }),

/***/ 85194:
/*!********************************************************!*\
  !*** ./node_modules/@fullcalendar/interaction/main.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Draggable": () => (/* binding */ ExternalDraggable),
/* harmony export */   "FeaturefulElementDragging": () => (/* binding */ FeaturefulElementDragging),
/* harmony export */   "PointerDragging": () => (/* binding */ PointerDragging),
/* harmony export */   "ThirdPartyDraggable": () => (/* binding */ ThirdPartyDraggable)
/* harmony export */ });
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/


_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait = 500;
var ignoreMouseDepth = 0;
var listenerCnt = 0;
var isWindowTouchMoveCancelled = false;
/*
Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
Tracks when the pointer "drags" on a certain element, meaning down+move+up.

Also, tracks if there was touch-scrolling.
Also, can prevent touch-scrolling from happening.
Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

emits:
- pointerdown
- pointermove
- pointerup
*/

var PointerDragging =
/** @class */
function () {
  function PointerDragging(containerEl) {
    var _this = this;

    this.subjectEl = null; // options that can be directly assigned by caller

    this.selector = ''; // will cause subjectEl in all emitted events to be this element

    this.handleSelector = '';
    this.shouldIgnoreMove = false;
    this.shouldWatchScroll = true; // for simulating pointermove on scroll
    // internal states

    this.isDragging = false;
    this.isTouchDragging = false;
    this.wasTouchScroll = false; // Mouse
    // ----------------------------------------------------------------------------------------------------

    this.handleMouseDown = function (ev) {
      if (!_this.shouldIgnoreMouse() && isPrimaryMouseButton(ev) && _this.tryStart(ev)) {
        var pev = _this.createEventFromMouse(ev, true);

        _this.emitter.trigger('pointerdown', pev);

        _this.initScrollWatch(pev);

        if (!_this.shouldIgnoreMove) {
          document.addEventListener('mousemove', _this.handleMouseMove);
        }

        document.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    this.handleMouseMove = function (ev) {
      var pev = _this.createEventFromMouse(ev);

      _this.recordCoords(pev);

      _this.emitter.trigger('pointermove', pev);
    };

    this.handleMouseUp = function (ev) {
      document.removeEventListener('mousemove', _this.handleMouseMove);
      document.removeEventListener('mouseup', _this.handleMouseUp);

      _this.emitter.trigger('pointerup', _this.createEventFromMouse(ev));

      _this.cleanup(); // call last so that pointerup has access to props

    }; // Touch
    // ----------------------------------------------------------------------------------------------------


    this.handleTouchStart = function (ev) {
      if (_this.tryStart(ev)) {
        _this.isTouchDragging = true;

        var pev = _this.createEventFromTouch(ev, true);

        _this.emitter.trigger('pointerdown', pev);

        _this.initScrollWatch(pev); // unlike mouse, need to attach to target, not document
        // https://stackoverflow.com/a/45760014


        var targetEl = ev.target;

        if (!_this.shouldIgnoreMove) {
          targetEl.addEventListener('touchmove', _this.handleTouchMove);
        }

        targetEl.addEventListener('touchend', _this.handleTouchEnd);
        targetEl.addEventListener('touchcancel', _this.handleTouchEnd); // treat it as a touch end
        // attach a handler to get called when ANY scroll action happens on the page.
        // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
        // http://stackoverflow.com/a/32954565/96342

        window.addEventListener('scroll', _this.handleTouchScroll, true);
      }
    };

    this.handleTouchMove = function (ev) {
      var pev = _this.createEventFromTouch(ev);

      _this.recordCoords(pev);

      _this.emitter.trigger('pointermove', pev);
    };

    this.handleTouchEnd = function (ev) {
      if (_this.isDragging) {
        // done to guard against touchend followed by touchcancel
        var targetEl = ev.target;
        targetEl.removeEventListener('touchmove', _this.handleTouchMove);
        targetEl.removeEventListener('touchend', _this.handleTouchEnd);
        targetEl.removeEventListener('touchcancel', _this.handleTouchEnd);
        window.removeEventListener('scroll', _this.handleTouchScroll, true); // useCaptured=true

        _this.emitter.trigger('pointerup', _this.createEventFromTouch(ev));

        _this.cleanup(); // call last so that pointerup has access to props


        _this.isTouchDragging = false;
        startIgnoringMouse();
      }
    };

    this.handleTouchScroll = function () {
      _this.wasTouchScroll = true;
    };

    this.handleScroll = function (ev) {
      if (!_this.shouldIgnoreMove) {
        var pageX = window.pageXOffset - _this.prevScrollX + _this.prevPageX;
        var pageY = window.pageYOffset - _this.prevScrollY + _this.prevPageY;

        _this.emitter.trigger('pointermove', {
          origEvent: ev,
          isTouch: _this.isTouchDragging,
          subjectEl: _this.subjectEl,
          pageX: pageX,
          pageY: pageY,
          deltaX: pageX - _this.origPageX,
          deltaY: pageY - _this.origPageY
        });
      }
    };

    this.containerEl = containerEl;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
    containerEl.addEventListener('mousedown', this.handleMouseDown);
    containerEl.addEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerCreated();
  }

  PointerDragging.prototype.destroy = function () {
    this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
    this.containerEl.removeEventListener('touchstart', this.handleTouchStart, {
      passive: true
    });
    listenerDestroyed();
  };

  PointerDragging.prototype.tryStart = function (ev) {
    var subjectEl = this.querySubjectEl(ev);
    var downEl = ev.target;

    if (subjectEl && (!this.handleSelector || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, this.handleSelector))) {
      this.subjectEl = subjectEl;
      this.isDragging = true; // do this first so cancelTouchScroll will work

      this.wasTouchScroll = false;
      return true;
    }

    return false;
  };

  PointerDragging.prototype.cleanup = function () {
    isWindowTouchMoveCancelled = false;
    this.isDragging = false;
    this.subjectEl = null; // keep wasTouchScroll around for later access

    this.destroyScrollWatch();
  };

  PointerDragging.prototype.querySubjectEl = function (ev) {
    if (this.selector) {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.target, this.selector);
    }

    return this.containerEl;
  };

  PointerDragging.prototype.shouldIgnoreMouse = function () {
    return ignoreMouseDepth || this.isTouchDragging;
  }; // can be called by user of this class, to cancel touch-based scrolling for the current drag


  PointerDragging.prototype.cancelTouchScroll = function () {
    if (this.isDragging) {
      isWindowTouchMoveCancelled = true;
    }
  }; // Scrolling that simulates pointermoves
  // ----------------------------------------------------------------------------------------------------


  PointerDragging.prototype.initScrollWatch = function (ev) {
    if (this.shouldWatchScroll) {
      this.recordCoords(ev);
      window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
    }
  };

  PointerDragging.prototype.recordCoords = function (ev) {
    if (this.shouldWatchScroll) {
      this.prevPageX = ev.pageX;
      this.prevPageY = ev.pageY;
      this.prevScrollX = window.pageXOffset;
      this.prevScrollY = window.pageYOffset;
    }
  };

  PointerDragging.prototype.destroyScrollWatch = function () {
    if (this.shouldWatchScroll) {
      window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
    }
  }; // Event Normalization
  // ----------------------------------------------------------------------------------------------------


  PointerDragging.prototype.createEventFromMouse = function (ev, isFirst) {
    var deltaX = 0;
    var deltaY = 0; // TODO: repeat code

    if (isFirst) {
      this.origPageX = ev.pageX;
      this.origPageY = ev.pageY;
    } else {
      deltaX = ev.pageX - this.origPageX;
      deltaY = ev.pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: false,
      subjectEl: this.subjectEl,
      pageX: ev.pageX,
      pageY: ev.pageY,
      deltaX: deltaX,
      deltaY: deltaY
    };
  };

  PointerDragging.prototype.createEventFromTouch = function (ev, isFirst) {
    var touches = ev.touches;
    var pageX;
    var pageY;
    var deltaX = 0;
    var deltaY = 0; // if touch coords available, prefer,
    // because FF would give bad ev.pageX ev.pageY

    if (touches && touches.length) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    } else {
      pageX = ev.pageX;
      pageY = ev.pageY;
    } // TODO: repeat code


    if (isFirst) {
      this.origPageX = pageX;
      this.origPageY = pageY;
    } else {
      deltaX = pageX - this.origPageX;
      deltaY = pageY - this.origPageY;
    }

    return {
      origEvent: ev,
      isTouch: true,
      subjectEl: this.subjectEl,
      pageX: pageX,
      pageY: pageY,
      deltaX: deltaX,
      deltaY: deltaY
    };
  };

  return PointerDragging;
}(); // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)


function isPrimaryMouseButton(ev) {
  return ev.button === 0 && !ev.ctrlKey;
} // Ignoring fake mouse events generated by touch
// ----------------------------------------------------------------------------------------------------


function startIgnoringMouse() {
  ignoreMouseDepth += 1;
  setTimeout(function () {
    ignoreMouseDepth -= 1;
  }, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.touchMouseIgnoreWait);
} // We want to attach touchmove as early as possible for Safari
// ----------------------------------------------------------------------------------------------------


function listenerCreated() {
  listenerCnt += 1;

  if (listenerCnt === 1) {
    window.addEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function listenerDestroyed() {
  listenerCnt -= 1;

  if (!listenerCnt) {
    window.removeEventListener('touchmove', onWindowTouchMove, {
      passive: false
    });
  }
}

function onWindowTouchMove(ev) {
  if (isWindowTouchMoveCancelled) {
    ev.preventDefault();
  }
}
/*
An effect in which an element follows the movement of a pointer across the screen.
The moving element is a clone of some other element.
Must call start + handleMove + stop.
*/


var ElementMirror =
/** @class */
function () {
  function ElementMirror() {
    this.isVisible = false; // must be explicitly enabled

    this.sourceEl = null;
    this.mirrorEl = null;
    this.sourceElRect = null; // screen coords relative to viewport
    // options that can be set directly by caller

    this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues

    this.zIndex = 9999;
    this.revertDuration = 0;
  }

  ElementMirror.prototype.start = function (sourceEl, pageX, pageY) {
    this.sourceEl = sourceEl;
    this.sourceElRect = this.sourceEl.getBoundingClientRect();
    this.origScreenX = pageX - window.pageXOffset;
    this.origScreenY = pageY - window.pageYOffset;
    this.deltaX = 0;
    this.deltaY = 0;
    this.updateElPosition();
  };

  ElementMirror.prototype.handleMove = function (pageX, pageY) {
    this.deltaX = pageX - window.pageXOffset - this.origScreenX;
    this.deltaY = pageY - window.pageYOffset - this.origScreenY;
    this.updateElPosition();
  }; // can be called before start


  ElementMirror.prototype.setIsVisible = function (bool) {
    if (bool) {
      if (!this.isVisible) {
        if (this.mirrorEl) {
          this.mirrorEl.style.display = '';
        }

        this.isVisible = bool; // needs to happen before updateElPosition

        this.updateElPosition(); // because was not updating the position while invisible
      }
    } else if (this.isVisible) {
      if (this.mirrorEl) {
        this.mirrorEl.style.display = 'none';
      }

      this.isVisible = bool;
    }
  }; // always async


  ElementMirror.prototype.stop = function (needsRevertAnimation, callback) {
    var _this = this;

    var done = function () {
      _this.cleanup();

      callback();
    };

    if (needsRevertAnimation && this.mirrorEl && this.isVisible && this.revertDuration && ( // if 0, transition won't work
    this.deltaX || this.deltaY) // if same coords, transition won't work
    ) {
      this.doRevertAnimation(done, this.revertDuration);
    } else {
      setTimeout(done, 0);
    }
  };

  ElementMirror.prototype.doRevertAnimation = function (callback, revertDuration) {
    var mirrorEl = this.mirrorEl;
    var finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened

    mirrorEl.style.transition = 'top ' + revertDuration + 'ms,' + 'left ' + revertDuration + 'ms';
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
      left: finalSourceElRect.left,
      top: finalSourceElRect.top
    });
    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.whenTransitionDone)(mirrorEl, function () {
      mirrorEl.style.transition = '';
      callback();
    });
  };

  ElementMirror.prototype.cleanup = function () {
    if (this.mirrorEl) {
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.removeElement)(this.mirrorEl);
      this.mirrorEl = null;
    }

    this.sourceEl = null;
  };

  ElementMirror.prototype.updateElPosition = function () {
    if (this.sourceEl && this.isVisible) {
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
  };

  ElementMirror.prototype.getMirrorEl = function () {
    var sourceElRect = this.sourceElRect;
    var mirrorEl = this.mirrorEl;

    if (!mirrorEl) {
      mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
      // we don't want long taps or any mouse interaction causing selection/menus.
      // would use preventSelection(), but that prevents selectstart, causing problems.

      mirrorEl.classList.add('fc-unselectable');
      mirrorEl.classList.add('fc-event-dragging');
      (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyStyle)(mirrorEl, {
        position: 'fixed',
        zIndex: this.zIndex,
        visibility: '',
        boxSizing: 'border-box',
        width: sourceElRect.right - sourceElRect.left,
        height: sourceElRect.bottom - sourceElRect.top,
        right: 'auto',
        bottom: 'auto',
        margin: 0
      });
      this.parentNode.appendChild(mirrorEl);
    }

    return mirrorEl;
  };

  return ElementMirror;
}();
/*
Is a cache for a given element's scroll information (all the info that ScrollController stores)
in addition the "client rectangle" of the element.. the area within the scrollbars.

The cache can be in one of two modes:
- doesListening:false - ignores when the container is scrolled by someone else
- doesListening:true - watch for scrolling and update the cache
*/


var ScrollGeomCache =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ScrollGeomCache, _super);

  function ScrollGeomCache(scrollController, doesListening) {
    var _this = _super.call(this) || this;

    _this.handleScroll = function () {
      _this.scrollTop = _this.scrollController.getScrollTop();
      _this.scrollLeft = _this.scrollController.getScrollLeft();

      _this.handleScrollChange();
    };

    _this.scrollController = scrollController;
    _this.doesListening = doesListening;
    _this.scrollTop = _this.origScrollTop = scrollController.getScrollTop();
    _this.scrollLeft = _this.origScrollLeft = scrollController.getScrollLeft();
    _this.scrollWidth = scrollController.getScrollWidth();
    _this.scrollHeight = scrollController.getScrollHeight();
    _this.clientWidth = scrollController.getClientWidth();
    _this.clientHeight = scrollController.getClientHeight();
    _this.clientRect = _this.computeClientRect(); // do last in case it needs cached values

    if (_this.doesListening) {
      _this.getEventTarget().addEventListener('scroll', _this.handleScroll);
    }

    return _this;
  }

  ScrollGeomCache.prototype.destroy = function () {
    if (this.doesListening) {
      this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
  };

  ScrollGeomCache.prototype.getScrollTop = function () {
    return this.scrollTop;
  };

  ScrollGeomCache.prototype.getScrollLeft = function () {
    return this.scrollLeft;
  };

  ScrollGeomCache.prototype.setScrollTop = function (top) {
    this.scrollController.setScrollTop(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
      this.handleScrollChange();
    }
  };

  ScrollGeomCache.prototype.setScrollLeft = function (top) {
    this.scrollController.setScrollLeft(top);

    if (!this.doesListening) {
      // we are not relying on the element to normalize out-of-bounds scroll values
      // so we need to sanitize ourselves
      this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
      this.handleScrollChange();
    }
  };

  ScrollGeomCache.prototype.getClientWidth = function () {
    return this.clientWidth;
  };

  ScrollGeomCache.prototype.getClientHeight = function () {
    return this.clientHeight;
  };

  ScrollGeomCache.prototype.getScrollWidth = function () {
    return this.scrollWidth;
  };

  ScrollGeomCache.prototype.getScrollHeight = function () {
    return this.scrollHeight;
  };

  ScrollGeomCache.prototype.handleScrollChange = function () {};

  return ScrollGeomCache;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ScrollController);

var ElementScrollGeomCache =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(ElementScrollGeomCache, _super);

  function ElementScrollGeomCache(el, doesListening) {
    return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementScrollController(el), doesListening) || this;
  }

  ElementScrollGeomCache.prototype.getEventTarget = function () {
    return this.scrollController.el;
  };

  ElementScrollGeomCache.prototype.computeClientRect = function () {
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeInnerRect)(this.scrollController.el);
  };

  return ElementScrollGeomCache;
}(ScrollGeomCache);

var WindowScrollGeomCache =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(WindowScrollGeomCache, _super);

  function WindowScrollGeomCache(doesListening) {
    return _super.call(this, new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.WindowScrollController(), doesListening) || this;
  }

  WindowScrollGeomCache.prototype.getEventTarget = function () {
    return window;
  };

  WindowScrollGeomCache.prototype.computeClientRect = function () {
    return {
      left: this.scrollLeft,
      right: this.scrollLeft + this.clientWidth,
      top: this.scrollTop,
      bottom: this.scrollTop + this.clientHeight
    };
  }; // the window is the only scroll object that changes it's rectangle relative
  // to the document's topleft as it scrolls


  WindowScrollGeomCache.prototype.handleScrollChange = function () {
    this.clientRect = this.computeClientRect();
  };

  return WindowScrollGeomCache;
}(ScrollGeomCache); // If available we are using native "performance" API instead of "Date"
// Read more about it on MDN:
// https://developer.mozilla.org/en-US/docs/Web/API/Performance


var getTime = typeof performance === 'function' ? performance.now : Date.now;
/*
For a pointer interaction, automatically scrolls certain scroll containers when the pointer
approaches the edge.

The caller must call start + handleMove + stop.
*/

var AutoScroller =
/** @class */
function () {
  function AutoScroller() {
    var _this = this; // options that can be set by caller


    this.isEnabled = true;
    this.scrollQuery = [window, '.fc-scroller'];
    this.edgeThreshold = 50; // pixels

    this.maxVelocity = 300; // pixels per second
    // internal state

    this.pointerScreenX = null;
    this.pointerScreenY = null;
    this.isAnimating = false;
    this.scrollCaches = null; // protect against the initial pointerdown being too close to an edge and starting the scroll

    this.everMovedUp = false;
    this.everMovedDown = false;
    this.everMovedLeft = false;
    this.everMovedRight = false;

    this.animate = function () {
      if (_this.isAnimating) {
        // wasn't cancelled between animation calls
        var edge = _this.computeBestEdge(_this.pointerScreenX + window.pageXOffset, _this.pointerScreenY + window.pageYOffset);

        if (edge) {
          var now = getTime();

          _this.handleSide(edge, (now - _this.msSinceRequest) / 1000);

          _this.requestAnimation(now);
        } else {
          _this.isAnimating = false; // will stop animation
        }
      }
    };
  }

  AutoScroller.prototype.start = function (pageX, pageY, scrollStartEl) {
    if (this.isEnabled) {
      this.scrollCaches = this.buildCaches(scrollStartEl);
      this.pointerScreenX = null;
      this.pointerScreenY = null;
      this.everMovedUp = false;
      this.everMovedDown = false;
      this.everMovedLeft = false;
      this.everMovedRight = false;
      this.handleMove(pageX, pageY);
    }
  };

  AutoScroller.prototype.handleMove = function (pageX, pageY) {
    if (this.isEnabled) {
      var pointerScreenX = pageX - window.pageXOffset;
      var pointerScreenY = pageY - window.pageYOffset;
      var yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
      var xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;

      if (yDelta < 0) {
        this.everMovedUp = true;
      } else if (yDelta > 0) {
        this.everMovedDown = true;
      }

      if (xDelta < 0) {
        this.everMovedLeft = true;
      } else if (xDelta > 0) {
        this.everMovedRight = true;
      }

      this.pointerScreenX = pointerScreenX;
      this.pointerScreenY = pointerScreenY;

      if (!this.isAnimating) {
        this.isAnimating = true;
        this.requestAnimation(getTime());
      }
    }
  };

  AutoScroller.prototype.stop = function () {
    if (this.isEnabled) {
      this.isAnimating = false; // will stop animation

      for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
        var scrollCache = _a[_i];
        scrollCache.destroy();
      }

      this.scrollCaches = null;
    }
  };

  AutoScroller.prototype.requestAnimation = function (now) {
    this.msSinceRequest = now;
    requestAnimationFrame(this.animate);
  };

  AutoScroller.prototype.handleSide = function (edge, seconds) {
    var scrollCache = edge.scrollCache;
    var edgeThreshold = this.edgeThreshold;
    var invDistance = edgeThreshold - edge.distance;
    var velocity = // the closer to the edge, the faster we scroll
    invDistance * invDistance / (edgeThreshold * edgeThreshold) * // quadratic
    this.maxVelocity * seconds;
    var sign = 1;

    switch (edge.name) {
      case 'left':
        sign = -1;
      // falls through

      case 'right':
        scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
        break;

      case 'top':
        sign = -1;
      // falls through

      case 'bottom':
        scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
        break;
    }
  }; // left/top are relative to document topleft


  AutoScroller.prototype.computeBestEdge = function (left, top) {
    var edgeThreshold = this.edgeThreshold;
    var bestSide = null;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      var rect = scrollCache.clientRect;
      var leftDist = left - rect.left;
      var rightDist = rect.right - left;
      var topDist = top - rect.top;
      var bottomDist = rect.bottom - top; // completely within the rect?

      if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
        if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() && (!bestSide || bestSide.distance > topDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'top',
            distance: topDist
          };
        }

        if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() && (!bestSide || bestSide.distance > bottomDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'bottom',
            distance: bottomDist
          };
        }

        if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() && (!bestSide || bestSide.distance > leftDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'left',
            distance: leftDist
          };
        }

        if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() && (!bestSide || bestSide.distance > rightDist)) {
          bestSide = {
            scrollCache: scrollCache,
            name: 'right',
            distance: rightDist
          };
        }
      }
    }

    return bestSide;
  };

  AutoScroller.prototype.buildCaches = function (scrollStartEl) {
    return this.queryScrollEls(scrollStartEl).map(function (el) {
      if (el === window) {
        return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
      }

      return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
    });
  };

  AutoScroller.prototype.queryScrollEls = function (scrollStartEl) {
    var els = [];

    for (var _i = 0, _a = this.scrollQuery; _i < _a.length; _i++) {
      var query = _a[_i];

      if (typeof query === 'object') {
        els.push(query);
      } else {
        els.push.apply(els, Array.prototype.slice.call((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(scrollStartEl).querySelectorAll(query)));
      }
    }

    return els;
  };

  return AutoScroller;
}();
/*
Monitors dragging on an element. Has a number of high-level features:
- minimum distance required before dragging
- minimum wait time ("delay") before dragging
- a mirror element that follows the pointer
*/


var FeaturefulElementDragging =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(FeaturefulElementDragging, _super);

  function FeaturefulElementDragging(containerEl, selector) {
    var _this = _super.call(this, containerEl) || this;

    _this.containerEl = containerEl; // options that can be directly set by caller
    // the caller can also set the PointerDragging's options as well

    _this.delay = null;
    _this.minDistance = 0;
    _this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag

    _this.mirrorNeedsRevert = false;
    _this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup

    _this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation

    _this.isDelayEnded = false;
    _this.isDistanceSurpassed = false;
    _this.delayTimeoutId = null;

    _this.onPointerDown = function (ev) {
      if (!_this.isDragging) {
        // so new drag doesn't happen while revert animation is going
        _this.isInteracting = true;
        _this.isDelayEnded = false;
        _this.isDistanceSurpassed = false;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventSelection)(document.body);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.preventContextMenu)(document.body); // prevent links from being visited if there's an eventual drag.
        // also prevents selection in older browsers (maybe?).
        // not necessary for touch, besides, browser would complain about passiveness.

        if (!ev.isTouch) {
          ev.origEvent.preventDefault();
        }

        _this.emitter.trigger('pointerdown', ev);

        if (_this.isInteracting && // not destroyed via pointerdown handler
        !_this.pointer.shouldIgnoreMove) {
          // actions related to initiating dragstart+dragmove+dragend...
          _this.mirror.setIsVisible(false); // reset. caller must set-visible


          _this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down


          _this.startDelay(ev);

          if (!_this.minDistance) {
            _this.handleDistanceSurpassed(ev);
          }
        }
      }
    };

    _this.onPointerMove = function (ev) {
      if (_this.isInteracting) {
        _this.emitter.trigger('pointermove', ev);

        if (!_this.isDistanceSurpassed) {
          var minDistance = _this.minDistance;
          var distanceSq = void 0; // current distance from the origin, squared

          var deltaX = ev.deltaX,
              deltaY = ev.deltaY;
          distanceSq = deltaX * deltaX + deltaY * deltaY;

          if (distanceSq >= minDistance * minDistance) {
            // use pythagorean theorem
            _this.handleDistanceSurpassed(ev);
          }
        }

        if (_this.isDragging) {
          // a real pointer move? (not one simulated by scrolling)
          if (ev.origEvent.type !== 'scroll') {
            _this.mirror.handleMove(ev.pageX, ev.pageY);

            _this.autoScroller.handleMove(ev.pageX, ev.pageY);
          }

          _this.emitter.trigger('dragmove', ev);
        }
      }
    };

    _this.onPointerUp = function (ev) {
      if (_this.isInteracting) {
        _this.isInteracting = false;
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowSelection)(document.body);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.allowContextMenu)(document.body);

        _this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert


        if (_this.isDragging) {
          _this.autoScroller.stop();

          _this.tryStopDrag(ev); // which will stop the mirror

        }

        if (_this.delayTimeoutId) {
          clearTimeout(_this.delayTimeoutId);
          _this.delayTimeoutId = null;
        }
      }
    };

    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this.onPointerDown);
    pointer.emitter.on('pointermove', _this.onPointerMove);
    pointer.emitter.on('pointerup', _this.onPointerUp);

    if (selector) {
      pointer.selector = selector;
    }

    _this.mirror = new ElementMirror();
    _this.autoScroller = new AutoScroller();
    return _this;
  }

  FeaturefulElementDragging.prototype.destroy = function () {
    this.pointer.destroy(); // HACK: simulate a pointer-up to end the current drag
    // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)

    this.onPointerUp({});
  };

  FeaturefulElementDragging.prototype.startDelay = function (ev) {
    var _this = this;

    if (typeof this.delay === 'number') {
      this.delayTimeoutId = setTimeout(function () {
        _this.delayTimeoutId = null;

        _this.handleDelayEnd(ev);
      }, this.delay); // not assignable to number!
    } else {
      this.handleDelayEnd(ev);
    }
  };

  FeaturefulElementDragging.prototype.handleDelayEnd = function (ev) {
    this.isDelayEnded = true;
    this.tryStartDrag(ev);
  };

  FeaturefulElementDragging.prototype.handleDistanceSurpassed = function (ev) {
    this.isDistanceSurpassed = true;
    this.tryStartDrag(ev);
  };

  FeaturefulElementDragging.prototype.tryStartDrag = function (ev) {
    if (this.isDelayEnded && this.isDistanceSurpassed) {
      if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
        this.isDragging = true;
        this.mirrorNeedsRevert = false;
        this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
        this.emitter.trigger('dragstart', ev);

        if (this.touchScrollAllowed === false) {
          this.pointer.cancelTouchScroll();
        }
      }
    }
  };

  FeaturefulElementDragging.prototype.tryStopDrag = function (ev) {
    // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
    // that come from the document to fire beforehand. much more convenient this way.
    this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
  };

  FeaturefulElementDragging.prototype.stopDrag = function (ev) {
    this.isDragging = false;
    this.emitter.trigger('dragend', ev);
  }; // fill in the implementations...


  FeaturefulElementDragging.prototype.setIgnoreMove = function (bool) {
    this.pointer.shouldIgnoreMove = bool;
  };

  FeaturefulElementDragging.prototype.setMirrorIsVisible = function (bool) {
    this.mirror.setIsVisible(bool);
  };

  FeaturefulElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
    this.mirrorNeedsRevert = bool;
  };

  FeaturefulElementDragging.prototype.setAutoScrollEnabled = function (bool) {
    this.autoScroller.isEnabled = bool;
  };

  return FeaturefulElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging);
/*
When this class is instantiated, it records the offset of an element (relative to the document topleft),
and continues to monitor scrolling, updating the cached coordinates if it needs to.
Does not access the DOM after instantiation, so highly performant.

Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
and an determine if a given point is inside the combined clipping rectangle.
*/


var OffsetTracker =
/** @class */
function () {
  function OffsetTracker(el) {
    this.origRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(el); // will work fine for divs that have overflow:hidden

    this.scrollCaches = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getClippingParents)(el).map(function (scrollEl) {
      return new ElementScrollGeomCache(scrollEl, true);
    });
  }

  OffsetTracker.prototype.destroy = function () {
    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      scrollCache.destroy();
    }
  };

  OffsetTracker.prototype.computeLeft = function () {
    var left = this.origRect.left;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
    }

    return left;
  };

  OffsetTracker.prototype.computeTop = function () {
    var top = this.origRect.top;

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];
      top += scrollCache.origScrollTop - scrollCache.getScrollTop();
    }

    return top;
  };

  OffsetTracker.prototype.isWithinClipping = function (pageX, pageY) {
    var point = {
      left: pageX,
      top: pageY
    };

    for (var _i = 0, _a = this.scrollCaches; _i < _a.length; _i++) {
      var scrollCache = _a[_i];

      if (!isIgnoredClipping(scrollCache.getEventTarget()) && !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.pointInsideRect)(point, scrollCache.clientRect)) {
        return false;
      }
    }

    return true;
  };

  return OffsetTracker;
}(); // certain clipping containers should never constrain interactions, like <html> and <body>
// https://github.com/fullcalendar/fullcalendar/issues/3615


function isIgnoredClipping(node) {
  var tagName = node.tagName;
  return tagName === 'HTML' || tagName === 'BODY';
}
/*
Tracks movement over multiple droppable areas (aka "hits")
that exist in one or more DateComponents.
Relies on an existing draggable.

emits:
- pointerdown
- dragstart
- hitchange - fires initially, even if not over a hit
- pointerup
- (hitchange - again, to null, if ended over a hit)
- dragend
*/


var HitDragging =
/** @class */
function () {
  function HitDragging(dragging, droppableStore) {
    var _this = this; // options that can be set by caller


    this.useSubjectCenter = false;
    this.requireInitial = true; // if doesn't start out on a hit, won't emit any events

    this.initialHit = null;
    this.movingHit = null;
    this.finalHit = null; // won't ever be populated if shouldIgnoreMove

    this.handlePointerDown = function (ev) {
      var dragging = _this.dragging;
      _this.initialHit = null;
      _this.movingHit = null;
      _this.finalHit = null;

      _this.prepareHits();

      _this.processFirstCoord(ev);

      if (_this.initialHit || !_this.requireInitial) {
        dragging.setIgnoreMove(false); // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(

        _this.emitter.trigger('pointerdown', ev);
      } else {
        dragging.setIgnoreMove(true);
      }
    };

    this.handleDragStart = function (ev) {
      _this.emitter.trigger('dragstart', ev);

      _this.handleMove(ev, true); // force = fire even if initially null

    };

    this.handleDragMove = function (ev) {
      _this.emitter.trigger('dragmove', ev);

      _this.handleMove(ev);
    };

    this.handlePointerUp = function (ev) {
      _this.releaseHits();

      _this.emitter.trigger('pointerup', ev);
    };

    this.handleDragEnd = function (ev) {
      if (_this.movingHit) {
        _this.emitter.trigger('hitupdate', null, true, ev);
      }

      _this.finalHit = _this.movingHit;
      _this.movingHit = null;

      _this.emitter.trigger('dragend', ev);
    };

    this.droppableStore = droppableStore;
    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    dragging.emitter.on('dragmove', this.handleDragMove);
    dragging.emitter.on('pointerup', this.handlePointerUp);
    dragging.emitter.on('dragend', this.handleDragEnd);
    this.dragging = dragging;
    this.emitter = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Emitter();
  } // sets initialHit
  // sets coordAdjust


  HitDragging.prototype.processFirstCoord = function (ev) {
    var origPoint = {
      left: ev.pageX,
      top: ev.pageY
    };
    var adjustedPoint = origPoint;
    var subjectEl = ev.subjectEl;
    var subjectRect;

    if (subjectEl instanceof HTMLElement) {
      // i.e. not a Document/ShadowRoot
      subjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.computeRect)(subjectEl);
      adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.constrainPoint)(adjustedPoint, subjectRect);
    }

    var initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);

    if (initialHit) {
      if (this.useSubjectCenter && subjectRect) {
        var slicedSubjectRect = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.intersectRects)(subjectRect, initialHit.rect);

        if (slicedSubjectRect) {
          adjustedPoint = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRectCenter)(slicedSubjectRect);
        }
      }

      this.coordAdjust = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffPoints)(adjustedPoint, origPoint);
    } else {
      this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
  };

  HitDragging.prototype.handleMove = function (ev, forceHandle) {
    var hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);

    if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
      this.movingHit = hit;
      this.emitter.trigger('hitupdate', hit, false, ev);
    }
  };

  HitDragging.prototype.prepareHits = function () {
    this.offsetTrackers = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.mapHash)(this.droppableStore, function (interactionSettings) {
      interactionSettings.component.prepareHits();
      return new OffsetTracker(interactionSettings.el);
    });
  };

  HitDragging.prototype.releaseHits = function () {
    var offsetTrackers = this.offsetTrackers;

    for (var id in offsetTrackers) {
      offsetTrackers[id].destroy();
    }

    this.offsetTrackers = {};
  };

  HitDragging.prototype.queryHitForOffset = function (offsetLeft, offsetTop) {
    var _a = this,
        droppableStore = _a.droppableStore,
        offsetTrackers = _a.offsetTrackers;

    var bestHit = null;

    for (var id in droppableStore) {
      var component = droppableStore[id].component;
      var offsetTracker = offsetTrackers[id];

      if (offsetTracker && // wasn't destroyed mid-drag
      offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
        var originLeft = offsetTracker.computeLeft();
        var originTop = offsetTracker.computeTop();
        var positionLeft = offsetLeft - originLeft;
        var positionTop = offsetTop - originTop;
        var origRect = offsetTracker.origRect;
        var width = origRect.right - origRect.left;
        var height = origRect.bottom - origRect.top;

        if ( // must be within the element's bounds
        positionLeft >= 0 && positionLeft < width && positionTop >= 0 && positionTop < height) {
          var hit = component.queryHit(positionLeft, positionTop, width, height);

          if (hit && // make sure the hit is within activeRange, meaning it's not a dead cell
          (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.rangeContainsRange)(hit.dateProfile.activeRange, hit.dateSpan.range) && (!bestHit || hit.layer > bestHit.layer)) {
            hit.componentId = id;
            hit.context = component.context; // TODO: better way to re-orient rectangle

            hit.rect.left += originLeft;
            hit.rect.right += originLeft;
            hit.rect.top += originTop;
            hit.rect.bottom += originTop;
            bestHit = hit;
          }
        }
      }
    }

    return bestHit;
  };

  return HitDragging;
}();

function isHitsEqual(hit0, hit1) {
  if (!hit0 && !hit1) {
    return true;
  }

  if (Boolean(hit0) !== Boolean(hit1)) {
    return false;
  }

  return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSpansEqual)(hit0.dateSpan, hit1.dateSpan);
}

function buildDatePointApiWithContext(dateSpan, context) {
  var props = {};

  for (var _i = 0, _a = context.pluginHooks.datePointTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, transform(dateSpan, context));
  }

  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, buildDatePointApi(dateSpan, context.dateEnv));

  return props;
}

function buildDatePointApi(span, dateEnv) {
  return {
    date: dateEnv.toDate(span.range.start),
    dateStr: dateEnv.formatIso(span.range.start, {
      omitTime: span.allDay
    }),
    allDay: span.allDay
  };
}
/*
Monitors when the user clicks on a specific date/time of a component.
A pointerdown+pointerup on the same "hit" constitutes a click.
*/


var DateClicking =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DateClicking, _super);

  function DateClicking(settings) {
    var _this = _super.call(this, settings) || this;

    _this.handlePointerDown = function (pev) {
      var dragging = _this.dragging;
      var downEl = pev.origEvent.target; // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired

      dragging.setIgnoreMove(!_this.component.isValidDateDownEl(downEl));
    }; // won't even fire if moving was ignored


    _this.handleDragEnd = function (ev) {
      var component = _this.component;
      var pointer = _this.dragging.pointer;

      if (!pointer.wasTouchScroll) {
        var _a = _this.hitDragging,
            initialHit = _a.initialHit,
            finalHit = _a.finalHit;

        if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
          var context = component.context;

          var arg = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), {
            dayEl: initialHit.dayEl,
            jsEvent: ev.origEvent,
            view: context.viewApi || context.calendarApi.view
          });

          context.emitter.trigger('dateClick', arg);
        }
      }
    }; // we DO want to watch pointer moves because otherwise finalHit won't get populated


    _this.dragging = new FeaturefulElementDragging(settings.el);
    _this.dragging.autoScroller.isEnabled = false;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  DateClicking.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return DateClicking;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction);
/*
Tracks when the user selects a portion of time of a component,
constituted by a drag over date cells, with a possible delay at the beginning of the drag.
*/


var DateSelecting =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DateSelecting, _super);

  function DateSelecting(settings) {
    var _this = _super.call(this, settings) || this;

    _this.dragSelection = null;

    _this.handlePointerDown = function (ev) {
      var _a = _this,
          component = _a.component,
          dragging = _a.dragging;
      var options = component.context.options;
      var canSelect = options.selectable && component.isValidDateDownEl(ev.origEvent.target); // don't bother to watch expensive moves if component won't do selection

      dragging.setIgnoreMove(!canSelect); // if touch, require user to hold down

      dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
    };

    _this.handleDragStart = function (ev) {
      _this.component.context.calendarApi.unselect(ev); // unselect previous selections

    };

    _this.handleHitUpdate = function (hit, isFinal) {
      var context = _this.component.context;
      var dragSelection = null;
      var isInvalid = false;

      if (hit) {
        var initialHit = _this.hitDragging.initialHit;
        var disallowed = hit.componentId === initialHit.componentId && _this.isHitComboAllowed && !_this.isHitComboAllowed(initialHit, hit);

        if (!disallowed) {
          dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
        }

        if (!dragSelection || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isDateSelectionValid)(dragSelection, hit.dateProfile, context)) {
          isInvalid = true;
          dragSelection = null;
        }
      }

      if (dragSelection) {
        context.dispatch({
          type: 'SELECT_DATES',
          selection: dragSelection
        });
      } else if (!isFinal) {
        // only unselect if moved away while dragging
        context.dispatch({
          type: 'UNSELECT_DATES'
        });
      }

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        _this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
      }
    };

    _this.handlePointerUp = function (pev) {
      if (_this.dragSelection) {
        // selection is already rendered, so just need to report selection
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.triggerDateSelect)(_this.dragSelection, pev, _this.component.context);
        _this.dragSelection = null;
      }
    };

    var component = settings.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.touchScrollAllowed = false;
    dragging.minDistance = options.selectMinDistance || 0;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this.handlePointerUp);
    return _this;
  }

  DateSelecting.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return DateSelecting;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction);

function getComponentTouchDelay$1(component) {
  var options = component.context.options;
  var delay = options.selectLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var ms = [dateSpan0.range.start, dateSpan0.range.end, dateSpan1.range.start, dateSpan1.range.end];
  ms.sort(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.compareNumbers);
  var props = {};

  for (var _i = 0, dateSelectionTransformers_1 = dateSelectionTransformers; _i < dateSelectionTransformers_1.length; _i++) {
    var transformer = dateSelectionTransformers_1[_i];
    var res = transformer(hit0, hit1);

    if (res === false) {
      return null;
    }

    if (res) {
      (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(props, res);
    }
  }

  props.range = {
    start: ms[0],
    end: ms[3]
  };
  props.allDay = dateSpan0.allDay;
  return props;
}

var EventDragging =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EventDragging, _super);

  function EventDragging(settings) {
    var _this = _super.call(this, settings) || this; // internal state


    _this.subjectEl = null;
    _this.subjectSeg = null; // the seg being selected/dragged

    _this.isDragging = false;
    _this.eventRange = null;
    _this.relevantEvents = null; // the events being dragged

    _this.receivingContext = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;

    _this.handlePointerDown = function (ev) {
      var origTarget = ev.origEvent.target;
      var _a = _this,
          component = _a.component,
          dragging = _a.dragging;
      var mirror = dragging.mirror;
      var options = component.context.options;
      var initialContext = component.context;
      _this.subjectEl = ev.subjectEl;
      var subjectSeg = _this.subjectSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(ev.subjectEl);
      var eventRange = _this.eventRange = subjectSeg.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;
      _this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(initialContext.getCurrentData().eventStore, eventInstanceId);
      dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
      dragging.delay = // only do a touch delay if touch and this event hasn't been selected yet
      ev.isTouch && eventInstanceId !== component.props.eventSelection ? getComponentTouchDelay(component) : null;

      if (options.fixedMirrorParent) {
        mirror.parentNode = options.fixedMirrorParent;
      } else {
        mirror.parentNode = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc');
      }

      mirror.revertDuration = options.dragRevertDuration;
      var isValid = component.isValidSegDownEl(origTarget) && !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(origTarget, '.fc-event-resizer'); // NOT on a resizer

      dragging.setIgnoreMove(!isValid); // disable dragging for elements that are resizable (ie, selectable)
      // but are not draggable

      _this.isDragging = isValid && ev.subjectEl.classList.contains('fc-event-draggable');
    };

    _this.handleDragStart = function (ev) {
      var initialContext = _this.component.context;
      var eventRange = _this.eventRange;
      var eventInstanceId = eventRange.instance.instanceId;

      if (ev.isTouch) {
        // need to select a different event?
        if (eventInstanceId !== _this.component.props.eventSelection) {
          initialContext.dispatch({
            type: 'SELECT_EVENT',
            eventInstanceId: eventInstanceId
          });
        }
      } else {
        // if now using mouse, but was previous touch interaction, clear selected event
        initialContext.dispatch({
          type: 'UNSELECT_EVENT'
        });
      }

      if (_this.isDragging) {
        initialContext.calendarApi.unselect(ev); // unselect *date* selection

        initialContext.emitter.trigger('eventDragStart', {
          el: _this.subjectEl,
          event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext, eventRange.def, eventRange.instance),
          jsEvent: ev.origEvent,
          view: initialContext.viewApi
        });
      }
    };

    _this.handleHitUpdate = function (hit, isFinal) {
      if (!_this.isDragging) {
        return;
      }

      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var initialContext = _this.component.context; // states based on new hit

      var receivingContext = null;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: true
      };

      if (hit) {
        receivingContext = hit.context;
        var receivingOptions = receivingContext.options;

        if (initialContext === receivingContext || receivingOptions.editable && receivingOptions.droppable) {
          mutation = computeEventMutation(initialHit, hit, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);

          if (mutation) {
            mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
            interaction.mutatedEvents = mutatedRelevantEvents;

            if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext)) {
              isInvalid = true;
              mutation = null;
              mutatedRelevantEvents = null;
              interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
            }
          }
        } else {
          receivingContext = null;
        }
      }

      _this.displayDrag(receivingContext, interaction);

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        if (initialContext === receivingContext && // TODO: write test for this
        isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        _this.dragging.setMirrorNeedsRevert(!mutation); // render the mirror if no already-rendered mirror
        // TODO: wish we could somehow wait for dispatch to guarantee render


        _this.dragging.setMirrorIsVisible(!hit || !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElRoot)(_this.subjectEl).querySelector('.fc-event-mirror')); // assign states based on new hit


        _this.receivingContext = receivingContext;
        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    _this.handlePointerUp = function () {
      if (!_this.isDragging) {
        _this.cleanup(); // because handleDragEnd won't fire

      }
    };

    _this.handleDragEnd = function (ev) {
      if (_this.isDragging) {
        var initialContext_1 = _this.component.context;
        var initialView = initialContext_1.viewApi;
        var _a = _this,
            receivingContext_1 = _a.receivingContext,
            validMutation = _a.validMutation;
        var eventDef = _this.eventRange.def;
        var eventInstance = _this.eventRange.instance;
        var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext_1, eventDef, eventInstance);
        var relevantEvents_1 = _this.relevantEvents;
        var mutatedRelevantEvents_1 = _this.mutatedRelevantEvents;
        var finalHit = _this.hitDragging.finalHit;

        _this.clearDrag(); // must happen after revert animation


        initialContext_1.emitter.trigger('eventDragStop', {
          el: _this.subjectEl,
          event: eventApi,
          jsEvent: ev.origEvent,
          view: initialView
        });

        if (validMutation) {
          // dropped within same calendar
          if (receivingContext_1 === initialContext_1) {
            var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(initialContext_1, mutatedRelevantEvents_1.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents_1.instances[eventInstance.instanceId] : null);
            initialContext_1.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents_1
            });
            var eventChangeArg = {
              oldEvent: eventApi,
              event: updatedEventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents_1, initialContext_1, eventInstance),
              revert: function () {
                initialContext_1.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents_1 // the pre-change data

                });
              }
            };
            var transformed = {};

            for (var _i = 0, _b = initialContext_1.getCurrentData().pluginHooks.eventDropTransformers; _i < _b.length; _i++) {
              var transformer = _b[_i];

              (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(transformed, transformer(validMutation, initialContext_1));
            }

            initialContext_1.emitter.trigger('eventDrop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventChangeArg), transformed), {
              el: ev.subjectEl,
              delta: validMutation.datesDelta,
              jsEvent: ev.origEvent,
              view: initialView
            }));
            initialContext_1.emitter.trigger('eventChange', eventChangeArg); // dropped in different calendar
          } else if (receivingContext_1) {
            var eventRemoveArg = {
              event: eventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(relevantEvents_1, initialContext_1, eventInstance),
              revert: function () {
                initialContext_1.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents_1
                });
              }
            };
            initialContext_1.emitter.trigger('eventLeave', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventRemoveArg), {
              draggedEl: ev.subjectEl,
              view: initialView
            }));
            initialContext_1.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: relevantEvents_1
            });
            initialContext_1.emitter.trigger('eventRemove', eventRemoveArg);
            var addedEventDef = mutatedRelevantEvents_1.defs[eventDef.defId];
            var addedEventInstance = mutatedRelevantEvents_1.instances[eventInstance.instanceId];
            var addedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext_1, addedEventDef, addedEventInstance);
            receivingContext_1.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: mutatedRelevantEvents_1
            });
            var eventAddArg = {
              event: addedEventApi,
              relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents_1, receivingContext_1, addedEventInstance),
              revert: function () {
                receivingContext_1.dispatch({
                  type: 'REMOVE_EVENTS',
                  eventStore: mutatedRelevantEvents_1
                });
              }
            };
            receivingContext_1.emitter.trigger('eventAdd', eventAddArg);

            if (ev.isTouch) {
              receivingContext_1.dispatch({
                type: 'SELECT_EVENT',
                eventInstanceId: eventInstance.instanceId
              });
            }

            receivingContext_1.emitter.trigger('drop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext_1)), {
              draggedEl: ev.subjectEl,
              jsEvent: ev.origEvent,
              view: finalHit.context.viewApi
            }));
            receivingContext_1.emitter.trigger('eventReceive', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventAddArg), {
              draggedEl: ev.subjectEl,
              view: finalHit.context.viewApi
            }));
          }
        } else {
          initialContext_1.emitter.trigger('_noEventDrop');
        }
      }

      _this.cleanup();
    };

    var component = _this.component;
    var options = component.context.options;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = EventDragging.SELECTOR;
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
    hitDragging.useSubjectCenter = settings.useEventCenter;
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('pointerup', _this.handlePointerUp);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  EventDragging.prototype.destroy = function () {
    this.dragging.destroy();
  }; // render a drag state on the next receivingCalendar


  EventDragging.prototype.displayDrag = function (nextContext, state) {
    var initialContext = this.component.context;
    var prevContext = this.receivingContext; // does the previous calendar need to be cleared?

    if (prevContext && prevContext !== nextContext) {
      // does the initial calendar need to be cleared?
      // if so, don't clear all the way. we still need to to hide the affectedEvents
      if (prevContext === initialContext) {
        prevContext.dispatch({
          type: 'SET_EVENT_DRAG',
          state: {
            affectedEvents: state.affectedEvents,
            mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
            isEvent: true
          }
        }); // completely clear the old calendar if it wasn't the initial
      } else {
        prevContext.dispatch({
          type: 'UNSET_EVENT_DRAG'
        });
      }
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state: state
      });
    }
  };

  EventDragging.prototype.clearDrag = function () {
    var initialCalendar = this.component.context;
    var receivingContext = this.receivingContext;

    if (receivingContext) {
      receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    } // the initial calendar might have an dummy drag state from displayDrag


    if (initialCalendar !== receivingContext) {
      initialCalendar.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  };

  EventDragging.prototype.cleanup = function () {
    this.subjectSeg = null;
    this.isDragging = false;
    this.eventRange = null;
    this.relevantEvents = null;
    this.receivingContext = null;
    this.validMutation = null;
    this.mutatedRelevantEvents = null;
  }; // TODO: test this in IE11
  // QUESTION: why do we need it on the resizable???


  EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  return EventDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction);

function computeEventMutation(hit0, hit1, massagers) {
  var dateSpan0 = hit0.dateSpan;
  var dateSpan1 = hit1.dateSpan;
  var date0 = dateSpan0.range.start;
  var date1 = dateSpan1.range.start;
  var standardProps = {};

  if (dateSpan0.allDay !== dateSpan1.allDay) {
    standardProps.allDay = dateSpan1.allDay;
    standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;

    if (dateSpan1.allDay) {
      // means date1 is already start-of-day,
      // but date0 needs to be converted
      date0 = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(date0);
    }
  }

  var delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ? hit0.largeUnit : null);

  if (delta.milliseconds) {
    // has hours/minutes/seconds
    standardProps.allDay = false;
  }

  var mutation = {
    datesDelta: delta,
    standardProps: standardProps
  };

  for (var _i = 0, massagers_1 = massagers; _i < massagers_1.length; _i++) {
    var massager = massagers_1[_i];
    massager(mutation, hit0, hit1);
  }

  return mutation;
}

function getComponentTouchDelay(component) {
  var options = component.context.options;
  var delay = options.eventLongPressDelay;

  if (delay == null) {
    delay = options.longPressDelay;
  }

  return delay;
}

var EventResizing =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(EventResizing, _super);

  function EventResizing(settings) {
    var _this = _super.call(this, settings) || this; // internal state


    _this.draggingSegEl = null;
    _this.draggingSeg = null; // TODO: rename to resizingSeg? subjectSeg?

    _this.eventRange = null;
    _this.relevantEvents = null;
    _this.validMutation = null;
    _this.mutatedRelevantEvents = null;

    _this.handlePointerDown = function (ev) {
      var component = _this.component;

      var segEl = _this.querySegEl(ev);

      var seg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
      var eventRange = _this.eventRange = seg.eventRange;
      _this.dragging.minDistance = component.context.options.eventDragMinDistance; // if touch, need to be working with a selected event

      _this.dragging.setIgnoreMove(!_this.component.isValidSegDownEl(ev.origEvent.target) || ev.isTouch && _this.component.props.eventSelection !== eventRange.instance.instanceId);
    };

    _this.handleDragStart = function (ev) {
      var context = _this.component.context;
      var eventRange = _this.eventRange;
      _this.relevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getRelevantEvents)(context.getCurrentData().eventStore, _this.eventRange.instance.instanceId);

      var segEl = _this.querySegEl(ev);

      _this.draggingSegEl = segEl;
      _this.draggingSeg = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getElSeg)(segEl);
      context.calendarApi.unselect();
      context.emitter.trigger('eventResizeStart', {
        el: segEl,
        event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventRange.def, eventRange.instance),
        jsEvent: ev.origEvent,
        view: context.viewApi
      });
    };

    _this.handleHitUpdate = function (hit, isFinal, ev) {
      var context = _this.component.context;
      var relevantEvents = _this.relevantEvents;
      var initialHit = _this.hitDragging.initialHit;
      var eventInstance = _this.eventRange.instance;
      var mutation = null;
      var mutatedRelevantEvents = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: relevantEvents,
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: true
      };

      if (hit) {
        var disallowed = hit.componentId === initialHit.componentId && _this.isHitComboAllowed && !_this.isHitComboAllowed(initialHit, hit);

        if (!disallowed) {
          mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
        }
      }

      if (mutation) {
        mutatedRelevantEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.applyMutationToEventStore)(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
        interaction.mutatedEvents = mutatedRelevantEvents;

        if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, context)) {
          isInvalid = true;
          mutation = null;
          mutatedRelevantEvents = null;
          interaction.mutatedEvents = null;
        }
      }

      if (mutatedRelevantEvents) {
        context.dispatch({
          type: 'SET_EVENT_RESIZE',
          state: interaction
        });
      } else {
        context.dispatch({
          type: 'UNSET_EVENT_RESIZE'
        });
      }

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        if (mutation && isHitsEqual(initialHit, hit)) {
          mutation = null;
        }

        _this.validMutation = mutation;
        _this.mutatedRelevantEvents = mutatedRelevantEvents;
      }
    };

    _this.handleDragEnd = function (ev) {
      var context = _this.component.context;
      var eventDef = _this.eventRange.def;
      var eventInstance = _this.eventRange.instance;
      var eventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, eventDef, eventInstance);
      var relevantEvents = _this.relevantEvents;
      var mutatedRelevantEvents = _this.mutatedRelevantEvents;
      context.emitter.trigger('eventResizeStop', {
        el: _this.draggingSegEl,
        event: eventApi,
        jsEvent: ev.origEvent,
        view: context.viewApi
      });

      if (_this.validMutation) {
        var updatedEventApi = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
        context.dispatch({
          type: 'MERGE_EVENTS',
          eventStore: mutatedRelevantEvents
        });
        var eventChangeArg = {
          oldEvent: eventApi,
          event: updatedEventApi,
          relatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.buildEventApis)(mutatedRelevantEvents, context, eventInstance),
          revert: function () {
            context.dispatch({
              type: 'MERGE_EVENTS',
              eventStore: relevantEvents // the pre-change events

            });
          }
        };
        context.emitter.trigger('eventResize', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, eventChangeArg), {
          el: _this.draggingSegEl,
          startDelta: _this.validMutation.startDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0),
          endDelta: _this.validMutation.endDelta || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createDuration)(0),
          jsEvent: ev.origEvent,
          view: context.viewApi
        }));
        context.emitter.trigger('eventChange', eventChangeArg);
      } else {
        context.emitter.trigger('_noEventResize');
      } // reset all internal state


      _this.draggingSeg = null;
      _this.relevantEvents = null;
      _this.validMutation = null; // okay to keep eventInstance around. useful to set it in handlePointerDown
    };

    var component = settings.component;
    var dragging = _this.dragging = new FeaturefulElementDragging(settings.el);
    dragging.pointer.selector = '.fc-event-resizer';
    dragging.touchScrollAllowed = false;
    dragging.autoScroller.isEnabled = component.context.options.dragScroll;
    var hitDragging = _this.hitDragging = new HitDragging(_this.dragging, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsToStore)(settings));
    hitDragging.emitter.on('pointerdown', _this.handlePointerDown);
    hitDragging.emitter.on('dragstart', _this.handleDragStart);
    hitDragging.emitter.on('hitupdate', _this.handleHitUpdate);
    hitDragging.emitter.on('dragend', _this.handleDragEnd);
    return _this;
  }

  EventResizing.prototype.destroy = function () {
    this.dragging.destroy();
  };

  EventResizing.prototype.querySegEl = function (ev) {
    return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(ev.subjectEl, '.fc-event');
  };

  return EventResizing;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.Interaction);

function computeMutation(hit0, hit1, isFromStart, instanceRange) {
  var dateEnv = hit0.context.dateEnv;
  var date0 = hit0.dateSpan.range.start;
  var date1 = hit1.dateSpan.range.start;
  var delta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.diffDates)(date0, date1, dateEnv, hit0.largeUnit);

  if (isFromStart) {
    if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
      return {
        startDelta: delta
      };
    }
  } else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
    return {
      endDelta: delta
    };
  }

  return null;
}

var UnselectAuto =
/** @class */
function () {
  function UnselectAuto(context) {
    var _this = this;

    this.context = context;
    this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system

    this.matchesCancel = false;
    this.matchesEvent = false;

    this.onSelect = function (selectInfo) {
      if (selectInfo.jsEvent) {
        _this.isRecentPointerDateSelect = true;
      }
    };

    this.onDocumentPointerDown = function (pev) {
      var unselectCancel = _this.context.options.unselectCancel;
      var downEl = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getEventTargetViaRoot)(pev.origEvent);
      _this.matchesCancel = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, unselectCancel);
      _this.matchesEvent = !!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementClosest)(downEl, EventDragging.SELECTOR); // interaction started on an event?
    };

    this.onDocumentPointerUp = function (pev) {
      var context = _this.context;
      var documentPointer = _this.documentPointer;
      var calendarState = context.getCurrentData(); // touch-scrolling should never unfocus any type of selection

      if (!documentPointer.wasTouchScroll) {
        if (calendarState.dateSelection && // an existing date selection?
        !_this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
        ) {
          var unselectAuto = context.options.unselectAuto;

          if (unselectAuto && (!unselectAuto || !_this.matchesCancel)) {
            context.calendarApi.unselect(pev);
          }
        }

        if (calendarState.eventSelection && // an existing event selected?
        !_this.matchesEvent // interaction DIDN'T start on an event
        ) {
          context.dispatch({
            type: 'UNSELECT_EVENT'
          });
        }
      }

      _this.isRecentPointerDateSelect = false;
    };

    var documentPointer = this.documentPointer = new PointerDragging(document);
    documentPointer.shouldIgnoreMove = true;
    documentPointer.shouldWatchScroll = false;
    documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
    documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
    /*
    TODO: better way to know about whether there was a selection with the pointer
    */

    context.emitter.on('select', this.onSelect);
  }

  UnselectAuto.prototype.destroy = function () {
    this.context.emitter.off('select', this.onSelect);
    this.documentPointer.destroy();
  };

  return UnselectAuto;
}();

var OPTION_REFINERS = {
  fixedMirrorParent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity
};
var LISTENER_REFINERS = {
  dateClick: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDragStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDragStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventDrop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResizeStart: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResizeStop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventResize: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  drop: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventReceive: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity,
  eventLeave: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.identity
};
/*
Given an already instantiated draggable object for one-or-more elements,
Interprets any dragging as an attempt to drag an events that lives outside
of a calendar onto a calendar.
*/

var ExternalElementDragging =
/** @class */
function () {
  function ExternalElementDragging(dragging, suppliedDragMeta) {
    var _this = this;

    this.receivingContext = null;
    this.droppableEvent = null; // will exist for all drags, even if create:false

    this.suppliedDragMeta = null;
    this.dragMeta = null;

    this.handleDragStart = function (ev) {
      _this.dragMeta = _this.buildDragMeta(ev.subjectEl);
    };

    this.handleHitUpdate = function (hit, isFinal, ev) {
      var dragging = _this.hitDragging.dragging;
      var receivingContext = null;
      var droppableEvent = null;
      var isInvalid = false;
      var interaction = {
        affectedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        mutatedEvents: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)(),
        isEvent: _this.dragMeta.create
      };

      if (hit) {
        receivingContext = hit.context;

        if (_this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
          droppableEvent = computeEventForDateSpan(hit.dateSpan, _this.dragMeta, receivingContext);
          interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
          isInvalid = !(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.isInteractionValid)(interaction, hit.dateProfile, receivingContext);

          if (isInvalid) {
            interaction.mutatedEvents = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEmptyEventStore)();
            droppableEvent = null;
          }
        }
      }

      _this.displayDrag(receivingContext, interaction); // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
      // TODO: wish we could somehow wait for dispatch to guarantee render


      dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));

      if (!isInvalid) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.enableCursor)();
      } else {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.disableCursor)();
      }

      if (!isFinal) {
        dragging.setMirrorNeedsRevert(!droppableEvent);
        _this.receivingContext = receivingContext;
        _this.droppableEvent = droppableEvent;
      }
    };

    this.handleDragEnd = function (pev) {
      var _a = _this,
          receivingContext = _a.receivingContext,
          droppableEvent = _a.droppableEvent;

      _this.clearDrag();

      if (receivingContext && droppableEvent) {
        var finalHit = _this.hitDragging.finalHit;
        var finalView = finalHit.context.viewApi;
        var dragMeta = _this.dragMeta;
        receivingContext.emitter.trigger('drop', (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), {
          draggedEl: pev.subjectEl,
          jsEvent: pev.origEvent,
          view: finalView
        }));

        if (dragMeta.create) {
          var addingEvents_1 = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.eventTupleToStore)(droppableEvent);
          receivingContext.dispatch({
            type: 'MERGE_EVENTS',
            eventStore: addingEvents_1
          });

          if (pev.isTouch) {
            receivingContext.dispatch({
              type: 'SELECT_EVENT',
              eventInstanceId: droppableEvent.instance.instanceId
            });
          } // signal that an external event landed


          receivingContext.emitter.trigger('eventReceive', {
            event: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.EventApi(receivingContext, droppableEvent.def, droppableEvent.instance),
            relatedEvents: [],
            revert: function () {
              receivingContext.dispatch({
                type: 'REMOVE_EVENTS',
                eventStore: addingEvents_1
              });
            },
            draggedEl: pev.subjectEl,
            view: finalView
          });
        }
      }

      _this.receivingContext = null;
      _this.droppableEvent = null;
    };

    var hitDragging = this.hitDragging = new HitDragging(dragging, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.interactionSettingsStore);
    hitDragging.requireInitial = false; // will start outside of a component

    hitDragging.emitter.on('dragstart', this.handleDragStart);
    hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
    hitDragging.emitter.on('dragend', this.handleDragEnd);
    this.suppliedDragMeta = suppliedDragMeta;
  }

  ExternalElementDragging.prototype.buildDragMeta = function (subjectEl) {
    if (typeof this.suppliedDragMeta === 'object') {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta);
    }

    if (typeof this.suppliedDragMeta === 'function') {
      return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(this.suppliedDragMeta(subjectEl));
    }

    return getDragMetaFromEl(subjectEl);
  };

  ExternalElementDragging.prototype.displayDrag = function (nextContext, state) {
    var prevContext = this.receivingContext;

    if (prevContext && prevContext !== nextContext) {
      prevContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }

    if (nextContext) {
      nextContext.dispatch({
        type: 'SET_EVENT_DRAG',
        state: state
      });
    }
  };

  ExternalElementDragging.prototype.clearDrag = function () {
    if (this.receivingContext) {
      this.receivingContext.dispatch({
        type: 'UNSET_EVENT_DRAG'
      });
    }
  };

  ExternalElementDragging.prototype.canDropElOnCalendar = function (el, receivingContext) {
    var dropAccept = receivingContext.options.dropAccept;

    if (typeof dropAccept === 'function') {
      return dropAccept.call(receivingContext.calendarApi, el);
    }

    if (typeof dropAccept === 'string' && dropAccept) {
      return Boolean((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.elementMatches)(el, dropAccept));
    }

    return true;
  };

  return ExternalElementDragging;
}(); // Utils for computing event store from the DragMeta
// ----------------------------------------------------------------------------------------------------


function computeEventForDateSpan(dateSpan, dragMeta, context) {
  var defProps = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)({}, dragMeta.leftoverProps);

  for (var _i = 0, _a = context.pluginHooks.externalDefTransforms; _i < _a.length; _i++) {
    var transform = _a[_i];

    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__assign)(defProps, transform(dateSpan, dragMeta));
  }

  var _b = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.refineEventDef)(defProps, context),
      refined = _b.refined,
      extra = _b.extra;

  var def = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseEventDef)(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
  context);
  var start = dateSpan.range.start; // only rely on time info if drop zone is all-day,
  // otherwise, we already know the time

  if (dateSpan.allDay && dragMeta.startTime) {
    start = context.dateEnv.add(start, dragMeta.startTime);
  }

  var end = dragMeta.duration ? context.dateEnv.add(start, dragMeta.duration) : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.getDefaultEventEnd)(dateSpan.allDay, start, context);
  var instance = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createEventInstance)(def.defId, {
    start: start,
    end: end
  });
  return {
    def: def,
    instance: instance
  };
} // Utils for extracting data from element
// ----------------------------------------------------------------------------------------------------


function getDragMetaFromEl(el) {
  var str = getEmbeddedElData(el, 'event');
  var obj = str ? JSON.parse(str) : {
    create: false
  }; // if no embedded data, assume no event creation

  return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.parseDragMeta)(obj);
}

_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix = '';

function getEmbeddedElData(el, name) {
  var prefix = _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.config.dataAttrPrefix;
  var prefixedName = (prefix ? prefix + '-' : '') + name;
  return el.getAttribute('data-' + prefixedName) || '';
}
/*
Makes an element (that is *external* to any calendar) draggable.
Can pass in data that determines how an event will be created when dropped onto a calendar.
Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
*/


var ExternalDraggable =
/** @class */
function () {
  function ExternalDraggable(el, settings) {
    var _this = this;

    if (settings === void 0) {
      settings = {};
    }

    this.handlePointerDown = function (ev) {
      var dragging = _this.dragging;
      var _a = _this.settings,
          minDistance = _a.minDistance,
          longPressDelay = _a.longPressDelay;
      dragging.minDistance = minDistance != null ? minDistance : ev.isTouch ? 0 : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.eventDragMinDistance;
      dragging.delay = ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
      longPressDelay != null ? longPressDelay : _fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.BASE_OPTION_DEFAULTS.longPressDelay : 0;
    };

    this.handleDragStart = function (ev) {
      if (ev.isTouch && _this.dragging.delay && ev.subjectEl.classList.contains('fc-event')) {
        _this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
      }
    };

    this.settings = settings;
    var dragging = this.dragging = new FeaturefulElementDragging(el);
    dragging.touchScrollAllowed = false;

    if (settings.itemSelector != null) {
      dragging.pointer.selector = settings.itemSelector;
    }

    if (settings.appendTo != null) {
      dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
    }

    dragging.emitter.on('pointerdown', this.handlePointerDown);
    dragging.emitter.on('dragstart', this.handleDragStart);
    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  ExternalDraggable.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return ExternalDraggable;
}();
/*
Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
The third-party system is responsible for drawing the visuals effects of the drag.
This class simply monitors for pointer movements and fires events.
It also has the ability to hide the moving element (the "mirror") during the drag.
*/


var InferredElementDragging =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(InferredElementDragging, _super);

  function InferredElementDragging(containerEl) {
    var _this = _super.call(this, containerEl) || this;

    _this.shouldIgnoreMove = false;
    _this.mirrorSelector = '';
    _this.currentMirrorEl = null;

    _this.handlePointerDown = function (ev) {
      _this.emitter.trigger('pointerdown', ev);

      if (!_this.shouldIgnoreMove) {
        // fire dragstart right away. does not support delay or min-distance
        _this.emitter.trigger('dragstart', ev);
      }
    };

    _this.handlePointerMove = function (ev) {
      if (!_this.shouldIgnoreMove) {
        _this.emitter.trigger('dragmove', ev);
      }
    };

    _this.handlePointerUp = function (ev) {
      _this.emitter.trigger('pointerup', ev);

      if (!_this.shouldIgnoreMove) {
        // fire dragend right away. does not support a revert animation
        _this.emitter.trigger('dragend', ev);
      }
    };

    var pointer = _this.pointer = new PointerDragging(containerEl);
    pointer.emitter.on('pointerdown', _this.handlePointerDown);
    pointer.emitter.on('pointermove', _this.handlePointerMove);
    pointer.emitter.on('pointerup', _this.handlePointerUp);
    return _this;
  }

  InferredElementDragging.prototype.destroy = function () {
    this.pointer.destroy();
  };

  InferredElementDragging.prototype.setIgnoreMove = function (bool) {
    this.shouldIgnoreMove = bool;
  };

  InferredElementDragging.prototype.setMirrorIsVisible = function (bool) {
    if (bool) {
      // restore a previously hidden element.
      // use the reference in case the selector class has already been removed.
      if (this.currentMirrorEl) {
        this.currentMirrorEl.style.visibility = '';
        this.currentMirrorEl = null;
      }
    } else {
      var mirrorEl = this.mirrorSelector // TODO: somehow query FullCalendars WITHIN shadow-roots
      ? document.querySelector(this.mirrorSelector) : null;

      if (mirrorEl) {
        this.currentMirrorEl = mirrorEl;
        mirrorEl.style.visibility = 'hidden';
      }
    }
  };

  return InferredElementDragging;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.ElementDragging);
/*
Bridges third-party drag-n-drop systems with FullCalendar.
Must be instantiated and destroyed by caller.
*/


var ThirdPartyDraggable =
/** @class */
function () {
  function ThirdPartyDraggable(containerOrSettings, settings) {
    var containerEl = document;

    if ( // wish we could just test instanceof EventTarget, but doesn't work in IE11
    containerOrSettings === document || containerOrSettings instanceof Element) {
      containerEl = containerOrSettings;
      settings = settings || {};
    } else {
      settings = containerOrSettings || {};
    }

    var dragging = this.dragging = new InferredElementDragging(containerEl);

    if (typeof settings.itemSelector === 'string') {
      dragging.pointer.selector = settings.itemSelector;
    } else if (containerEl === document) {
      dragging.pointer.selector = '[data-event]';
    }

    if (typeof settings.mirrorSelector === 'string') {
      dragging.mirrorSelector = settings.mirrorSelector;
    }

    new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
  }

  ThirdPartyDraggable.prototype.destroy = function () {
    this.dragging.destroy();
  };

  return ThirdPartyDraggable;
}();

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_0__.createPlugin)({
  componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
  calendarInteractions: [UnselectAuto],
  elementDraggingImpl: FeaturefulElementDragging,
  optionRefiners: OPTION_REFINERS,
  listenerRefiners: LISTENER_REFINERS
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);


/***/ }),

/***/ 80296:
/*!*************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ListView": () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 98179);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var ListViewHeaderRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewHeaderRow, _super);
    function ListViewHeaderRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            textId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        return _this;
    }
    ListViewHeaderRow.prototype.render = function () {
        var _a = this.context, theme = _a.theme, dateEnv = _a.dateEnv, options = _a.options, viewApi = _a.viewApi;
        var _b = this.props, cellId = _b.cellId, dayDate = _b.dayDate, todayRange = _b.todayRange;
        var textId = this.state.textId;
        var dayMeta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta)(dayDate, todayRange);
        // will ever be falsy?
        var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ date: dateEnv.toDate(dayDate), view: viewApi, textId: textId,
            text: text,
            sideText: sideText, navLinkAttrs: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, dayDate), sideNavLinkAttrs: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(this.context, dayDate, 'day', false) }, dayMeta);
        var classNames = ['fc-list-day'].concat((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames)(dayMeta, theme));
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString)(dayDate) },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "colgroup", colSpan: 3, id: cellId, "aria-labelledby": textId },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-list-day-cushion ' + theme.getClass('tableCellShaded'), ref: innerElRef }, innerContent)))); }));
    };
    return ListViewHeaderRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(props) {
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        props.text && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
        props.sideText && ( /* not keyboard tabbable */(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
var ListViewEventRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewEventRow, _super);
    function ListViewEventRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewEventRow.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg, timeHeaderId = props.timeHeaderId, eventHeaderId = props.eventHeaderId, dateHeaderId = props.dateHeaderId;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: seg, timeText: "" // BAD. because of all-day content
            , disableDragging: true, disableResizing: true, defaultContent: function () { return renderEventInnerContent(seg, context); } /* weird */, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, isSelected: props.isSelected, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { className: ['fc-list-event', hookProps.event.url ? 'fc-event-forced-url' : ''].concat(classNames).join(' '), ref: rootElRef },
            buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-list-event-graphic" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: innerElRef, headers: eventHeaderId + " " + dateHeaderId, className: "fc-list-event-title" }, innerContent))); }));
    };
    return ListViewEventRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderEventInnerContent(seg, context) {
    var interactiveAttrs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegAnchorAttrs)(seg, context);
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, interactiveAttrs), seg.eventRange.def.title));
}
function buildTimeContent(seg, timeFormat, context, timeHeaderId, dateHeaderId) {
    var options = context.options;
    if (options.displayEventTime !== false) {
        var eventDef = seg.eventRange.def;
        var eventInstance = seg.eventRange.instance;
        var doAllDay = false;
        var timeText = void 0;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange)(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context);
        }
        if (doAllDay) {
            var hookProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, headers: timeHeaderId + " " + dateHeaderId, className: ['fc-list-event-time'].concat(classNames).join(' ') }, innerContent)); }));
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.computeDateVars = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(computeDateVars);
        _this.eventStoreToSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_this._eventStoreToSegs);
        _this.state = {
            timeHeaderId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
            eventHeaderId: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
            dateHeaderIdRoot: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUniqueDomId)(),
        };
        _this.setRootEl = function (rootEl) {
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    ListView.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var extraClassNames = [
            'fc-list',
            context.theme.getClass('table'),
            context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : '',
        ];
        var _b = this.computeDateVars(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
        var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.setRootEl }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: extraClassNames.concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                _this.renderSegList(eventSegs, dayDates) :
                _this.renderEmptyMessage()))); }));
    };
    ListView.prototype.renderEmptyMessage = function () {
        var _a = this.context, options = _a.options, viewApi = _a.viewApi;
        var hookProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-list-empty'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent))); }));
    };
    ListView.prototype.renderSegList = function (allSegs, dayDates) {
        var _a = this.context, theme = _a.theme, options = _a.options;
        var _b = this.state, timeHeaderId = _b.timeHeaderId, eventHeaderId = _b.eventHeaderId, dateHeaderIdRoot = _b.dateHeaderIdRoot;
        var segsByDay = groupSegsByDay(allSegs); // sparse array
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) {
            var innerNodes = [];
            for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                var daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    var dayStr = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString)(dayDates[dayIndex]);
                    var dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                    // append a day header
                    innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, { key: dayStr, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(daySegs, options.eventOrder);
                    for (var _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
                        var seg = daySegs_1[_i];
                        innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate))));
                    }
                }
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: 'fc-list-table ' + theme.getClass('table') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", null,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null,
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", "aria-hidden": true }),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes)));
        }));
    };
    ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    };
    ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    };
    ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
        var dateEnv = this.context.dateEnv;
        var nextDayThreshold = this.context.options.nextDayThreshold;
        var range = eventRange.range;
        var allDay = eventRange.def.allDay;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange: eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex: dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    return ListView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderNoEventsInner(hookProps) {
    return hookProps.text;
}
function computeDateVars(dateProfile) {
    var dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateProfile.renderRange.start);
    var viewEnd = dateProfile.renderRange.end;
    var dayDates = [];
    var dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1),
        });
        dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1);
    }
    return { dayDates: dayDates, dayRanges: dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    var segsByDay = []; // sparse array
    var i;
    var seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    // noEventsText is defined in base options
};
function createFalsableFormatter(input) {
    return input === false ? null : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(input);
}

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);



/***/ }),

/***/ 69901:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "DayTimeCols": () => (/* binding */ DayTimeCols),
/* harmony export */   "DayTimeColsSlicer": () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   "DayTimeColsView": () => (/* binding */ DayTimeColsView),
/* harmony export */   "TimeCols": () => (/* binding */ TimeCols),
/* harmony export */   "TimeColsSlatsCoords": () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   "TimeColsView": () => (/* binding */ TimeColsView),
/* harmony export */   "buildDayRanges": () => (/* binding */ buildDayRanges),
/* harmony export */   "buildSlatMetas": () => (/* binding */ buildSlatMetas),
/* harmony export */   "buildTimeColsModel": () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ 91659);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/common */ 7085);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ 13947);
/*!
FullCalendar v5.10.1
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/






var AllDaySplitter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {},
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering)(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    };
    return AllDaySplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter));

var DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    var classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType.Consumer, null, function (context) {
        if (!props.isLabeled) {
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        var dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
        var labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat[0]) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat);
        var hookProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": props.isoTimeStr },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)))); }));
    }));
}
function renderInnerContent(props) {
    return props.text;
}

var TimeBodyAxis = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeBodyAxis, _super);
    function TimeBodyAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeBodyAxis.prototype.render = function () {
        return this.props.slatMetas.map(function (slatMeta) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta)))); });
    };
    return TimeBodyAxis;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'short' });
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsView, _super);
    function TimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.scrollerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            slatCoords: null,
        };
        _this.handleScrollTopRequest = function (scrollTop) {
            var scrollerEl = _this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        _this.renderHeadAxis = function (rowKey, frameHeight) {
            if (frameHeight === void 0) { frameHeight = ''; }
            var options = _this.context.options;
            var dateProfile = _this.props.dateProfile;
            var range = dateProfile.renderRange;
            var dayCnt = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays)(range.start, range.end);
            var navLinkAttrs = (dayCnt === 1) // only do in day views (to avoid doing in week views that dont need it)
                ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkAttrs)(_this.context, range.start, 'week')
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { ref: rootElRef, "aria-hidden": true, className: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ].concat(classNames).join(' ') },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)))); }));
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { "aria-hidden": true, className: "fc-timegrid-axis" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        _this.renderTableRowAxis = function (rowHeight) {
            var _a = _this.context, options = _a.options, viewApi = _a.viewApi;
            var hookProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, "aria-hidden": true, className: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ].concat(classNames).join(' ') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''), style: { height: rowHeight } },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)))); }));
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
        };
        return _this;
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
        var _a = this, context = _a.context, props = _a.props;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections }))); }));
    };
    TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        var _this = this;
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, context = _a.context, props = _a.props;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (arg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, _this.renderHeadAxis('day', arg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation" }, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "presentation", className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        var isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: function (arg) { return (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-chunk" },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, { slatMetas: slatMetas }))),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, function (nowDate) {
                                var nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); }));
                                }
                                return null;
                            })))); },
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                    {
                        key: 'cols',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                ],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections }))); }));
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    TimeColsView.prototype.getAllDayMaxEventProps = function () {
        var _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows };
    };
    return TimeColsView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

var TimeColsSlatsCoords = /** @class */ (function () {
    function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
        var dateProfile = this.dateProfile;
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker)(dateProfile.currentRange, date)) {
            var startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(date);
            var timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime) &&
                timeMs < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMaxTime)) {
                return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(timeMs));
            }
        }
        return null;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(when);
        }
        return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
        var _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
        var len = positions.els.length;
        // floating-point value of # of slots covered
        var slatCoverage = (duration.milliseconds - (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime)) / (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(this.slotDuration);
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    };
    return TimeColsSlatsCoords;
}());

var TimeColsSlatsBody = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlatsBody, _super);
    function TimeColsSlatsBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColsSlatsBody.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var slatElRefs = props.slatElRefs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map(function (slatMeta, i) {
            var hookProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            var classNames = [
                'fc-timegrid-slot',
                'fc-timegrid-slot-lane',
                slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
            ];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": slatMeta.isoTimeStr }, innerContent)); })));
        })));
    };
    return TimeColsSlatsBody;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
var TimeColsSlats = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlats, _super);
    function TimeColsSlats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.slatElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsSlats.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.rootElRef, className: "fc-timegrid-slots" },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { "aria-hidden": true, className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    };
    TimeColsSlats.prototype.componentDidMount = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentDidUpdate = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentWillUnmount = function () {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    };
    TimeColsSlats.prototype.updateSizing = function () {
        var _a = this, context = _a.context, props = _a.props;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            var rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    };
    return TimeColsSlats;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map(function (slatMeta) { return elMap[slatMeta.key]; });
}

function splitSegsByCol(segs, colCnt) {
    var segsByCol = [];
    var i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

var TimeColMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMoreLink, _super);
    function TimeColMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TimeColMoreLink.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function () { return renderPlainFgSegs(props.hiddenSegs, props); } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick, title, isExpanded, popoverId) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { ref: function (el) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(rootElRef, el);
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            }, className: ['fc-timegrid-more-link'].concat(classNames).join(' '), style: { top: props.top, bottom: props.bottom }, onClick: handleClick, title: title, "aria-expanded": isExpanded, "aria-controls": popoverId },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent))); }));
    };
    return TimeColMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function buildPositioning(segInputs, strictOrder, maxStackCnt) {
    var hierarchy = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var hiddenGroups = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries)(hiddenEntries);
    var web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    var segRects = webToRects(web);
    return { segRects: segRects, hiddenGroups: hiddenGroups };
}
function buildWeb(hierarchy) {
    var entriesByLevel = hierarchy.entriesByLevel;
    var buildNode = cacheable(function (level, lateral) { return level + ':' + lateral; }, function (level, lateral) {
        var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        var nextLevelRes = buildNodes(siblingRange, buildNode);
        var entry = entriesByLevel[level][lateral];
        return [
            (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1], // the pressure builds
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    var level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
    var lateral = lateralStart;
    var pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1], // first item's pressure
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    var levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
    var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    var levelCnt = levelCoords.length;
    var level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        var entries = entriesByLevel[level];
        var entry = void 0;
        var searchIndex = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch)(entries, subjectEntry.span.start, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd);
        var lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        var lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.span.start < subjectEntry.span.end) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level: level, lateralStart: lateralStart, lateralEnd: lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    var stretchNode = cacheable(function (node, startCoord, prevThickness) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, startCoord, prevThickness) {
        var nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
        var allThickness = thickness + prevThickness;
        var thicknessFraction = thickness / allThickness;
        var endCoord;
        var newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (var _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
                var childNode = nextLevelNodes_1[_i];
                if (endCoord === undefined) {
                    var res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    var res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        var newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map(function (node) { return stretchNode(node, 0, 0)[1]; });
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    var rects = [];
    var processNode = cacheable(function (node, levelCoord, stackDepth) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, levelCoord, stackDepth) {
        var rect = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { levelCoord: levelCoord,
            stackDepth: stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        var stackForward = 0;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = keyFunc.apply(void 0, args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc.apply(void 0, args));
    };
}

function computeSegVCoords(segs, colDate, slatCoords, eventMinHeight) {
    if (slatCoords === void 0) { slatCoords = null; }
    if (eventMinHeight === void 0) { eventMinHeight = 0; }
    var vcoords = [];
    if (slatCoords) {
        for (var i = 0; i < segs.length; i += 1) {
            var seg = segs[i];
            var spanStart = slatCoords.computeDateTop(seg.start, colDate);
            var spanEnd = Math.max(spanStart + (eventMinHeight || 0), // :(
            slatCoords.computeDateTop(seg.end, colDate));
            vcoords.push({
                start: Math.round(spanStart),
                end: Math.round(spanEnd), //
            });
        }
    }
    return vcoords;
}
function computeFgSegPlacements(segs, segVCoords, // might not have for every seg
eventOrderStrict, eventMaxStack) {
    var segInputs = [];
    var dumbSegs = []; // segs without coords
    for (var i = 0; i < segs.length; i += 1) {
        var vcoords = segVCoords[i];
        if (vcoords) {
            segInputs.push({
                index: i,
                thickness: 1,
                span: vcoords,
            });
        }
        else {
            dumbSegs.push(segs[i]);
        }
    }
    var _a = buildPositioning(segInputs, eventOrderStrict, eventMaxStack), segRects = _a.segRects, hiddenGroups = _a.hiddenGroups;
    var segPlacements = [];
    for (var _i = 0, segRects_1 = segRects; _i < segRects_1.length; _i++) {
        var segRect = segRects_1[_i];
        segPlacements.push({
            seg: segs[segRect.index],
            rect: segRect,
        });
    }
    for (var _b = 0, dumbSegs_1 = dumbSegs; _b < dumbSegs_1.length; _b++) {
        var dumbSeg = dumbSegs_1[_b];
        segPlacements.push({ seg: dumbSeg, rect: null });
    }
    return { segPlacements: segPlacements, hiddenGroups: hiddenGroups };
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
var TimeColEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColEvent, _super);
    function TimeColEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColEvent.prototype.render = function () {
        var classNames = [
            'fc-timegrid-event',
            'fc-v-event',
        ];
        if (this.props.isShort) {
            classNames.push('fc-timegrid-event-short');
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT, extraClassNames: classNames })));
    };
    return TimeColEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeColMisc = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMisc, _super);
    function TimeColMisc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColMisc.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (innerElRef, innerContent) { return (innerContent &&
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent)); }));
    };
    return TimeColMisc;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeCol = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCol, _super);
    function TimeCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs);
        return _this;
    }
    // TODO: memoize event-placement?
    TimeCol.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var isSelectMirror = context.options.selectMirror;
        var mirrorSegs = (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        var interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (rootElRef, classNames, dataAttrs) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: rootElRef, role: "gridcell", className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ') }, dataAttrs, props.extraDataAttrs),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-bg" },
                    _this.renderFillSegs(props.businessHourSegs, 'non-business'),
                    _this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                    _this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })))); }));
    };
    TimeCol.prototype.renderFgSegs = function (sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var props = this.props;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
    };
    TimeCol.prototype.renderPositionedFgSegs = function (segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var _this = this;
        var _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict, eventMinHeight = _a.eventMinHeight;
        var _b = this.props, date = _b.date, slatCoords = _b.slatCoords, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var segVCoords = computeSegVCoords(segs, date, slatCoords, eventMinHeight);
        var _c = computeFgSegPlacements(segs, segVCoords, eventOrderStrict, eventMaxStack), segPlacements = _c.segPlacements, hiddenGroups = _c.hiddenGroups;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segPlacements.map(function (segPlacement) {
                var seg = segPlacement.seg, rect = segPlacement.rect;
                var instanceId = seg.eventRange.instance.instanceId;
                var isVisible = isMirror || Boolean(!segIsInvisible[instanceId] && rect);
                var vStyle = computeSegVStyle(rect && rect.span);
                var hStyle = (!isMirror && rect) ? _this.computeSegHStyle(rect) : { left: 0, right: 0 };
                var isInset = Boolean(rect) && rect.stackForward > 0;
                var isShort = Boolean(rect) && (rect.span.end - rect.span.start) < eventShortHeight; // look at other places for this problem
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-event-harness' +
                        (isInset ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ visibility: isVisible ? '' : 'hidden' }, vStyle), hStyle) },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: isShort }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
            })));
    };
    // will already have eventMinHeight applied because segInputs already had it
    TimeCol.prototype.renderHiddenGroups = function (hiddenGroups, segs) {
        var _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(function (hiddenGroup) {
            var positionCss = computeSegVStyle(hiddenGroup.span);
            var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart)(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    };
    TimeCol.prototype.renderFillSegs = function (segs, fillType) {
        var _a = this, props = _a.props, context = _a.context;
        var segVCoords = computeSegVCoords(segs, props.date, props.slatCoords, context.options.eventMinHeight); // don't assume all populated
        var children = segVCoords.map(function (vcoords, i) {
            var seg = segs[i];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-timegrid-bg-harness", style: computeSegVStyle(vcoords) }, fillType === 'bg-event' ?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange, props.nowDate))) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
        });
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    };
    TimeCol.prototype.renderNowIndicator = function (segs) {
        var _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
        if (!slatCoords) {
            return null;
        }
        return segs.map(function (seg, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: false, date: date, 
            // key doesn't matter. will only ever be one
            key: i }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent)); })); });
    };
    TimeCol.prototype.computeSegHStyle = function (segHCoords) {
        var _a = this.context, isRtl = _a.isRtl, options = _a.options;
        var shouldOverlap = options.slotEventOverlap;
        var nearCoord = segHCoords.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        var farCoord = segHCoords.levelCoord + segHCoords.thickness; // the right side if LTR. the left side if RTL. floating-point
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        var props = {
            zIndex: segHCoords.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segHCoords.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeCol;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderPlainFgSegs(sortedFgSegs, _a) {
    var todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
    var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
    })));
}
function computeSegVStyle(segVCoords) {
    if (!segVCoords) {
        return { top: '', bottom: '' };
    }
    return {
        top: segVCoords.start,
        bottom: -segVCoords.end,
    };
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map(function (segEntry) { return allSegs[segEntry.index]; });
}

var TimeColsContent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsContent, _super);
    function TimeColsContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitNowIndicatorSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsContent.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        var colCnt = props.cells.length;
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { role: "presentation", style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", { role: "presentation" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { role: "row" },
                        props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { "aria-hidden": true, className: "fc-timegrid-col fc-timegrid-axis" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: props.nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); })))))),
                        props.cells.map(function (cell, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint })); }))))));
    };
    TimeColsContent.prototype.componentDidMount = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.componentDidUpdate = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.updateCoords = function () {
        var props = this.props;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    };
    return TimeColsContent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectCellEls(elMap, cells) {
    return cells.map(function (cell) { return elMap[cell.key]; });
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
var TimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCols, _super);
    function TimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processSlotOptions = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(processSlotOptions);
        _this.state = {
            slatCoords: null,
        };
        _this.handleRootEl = function (el) {
            if (el) {
                _this.context.registerInteractiveComponent(_this, {
                    el: el,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        _this.handleScrollRequest = function (request) {
            var onScrollTopRequest = _this.props.onScrollTopRequest;
            var slatCoords = _this.state.slatCoords;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    var top_1 = slatCoords.computeTimeTop(request.time);
                    top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top_1) {
                        top_1 += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top_1);
                }
                return true;
            }
            return false;
        };
        _this.handleColCoords = function (colCoords) {
            _this.colCoords = colCoords;
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
            if (_this.props.onSlatCoords) {
                _this.props.onSlatCoords(slatCoords);
            }
        };
        return _this;
    }
    TimeCols.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    };
    TimeCols.prototype.componentDidMount = function () {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    };
    TimeCols.prototype.componentDidUpdate = function (prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    };
    TimeCols.prototype.componentWillUnmount = function () {
        this.scrollResponder.detach();
    };
    TimeCols.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var colCoords = this.colCoords;
        var dateProfile = this.props.dateProfile;
        var slatCoords = this.state.slatCoords;
        var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
        var colIndex = colCoords.leftToIndex(positionLeft);
        var slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var cell = this.props.cells[colIndex];
            var slatTop = slatCoords.positions.tops[slatIndex];
            var slatHeight = slatCoords.positions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(dateProfile.slotMinTime, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration)(snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, snapDuration);
            return {
                dateProfile: dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ range: { start: start, end: end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    };
    return TimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function processSlotOptions(slotDuration, snapDurationOverride) {
    var snapDuration = snapDurationOverride || slotDuration;
    var snapsPerSlot = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration: snapDuration, snapsPerSlot: snapsPerSlot };
}

var DayTimeColsSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsSlicer, _super);
    function DayTimeColsSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col += 1) {
            var segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col,
                });
            }
        }
        return segs;
    };
    return DayTimeColsSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeCols, _super);
    function DayTimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayRanges = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayRanges);
        _this.slicer = new DayTimeColsSlicer();
        _this.timeColsRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTimeCols.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
        var isNowIndicator = context.options.nowIndicator;
        var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }))); }));
    };
    return DayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    var dayStart = new Date(0);
    var slatTime = slotMinTime;
    var slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(0);
    var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    var metas = [];
    while ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slatTime) < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slotMaxTime)) {
        var date = dateEnv.add(dayStart, slatTime);
        var isLabeled = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slatIterator, labelInterval) !== null;
        metas.push({
            date: date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString)(date),
            isLabeled: isLabeled,
        });
        slatTime = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatTime, slotDuration);
        slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    var i;
    var labelInterval;
    var slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

var DayTimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsView, _super);
    function DayTimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildTimeColsModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildTimeColsModel);
        _this.buildSlatMetas = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildSlatMetas);
        return _this;
    }
    DayTimeColsView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dateProfile = props.dateProfile;
        var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        var splitProps = this.allDaySplitter.splitProps(props);
        var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        var dayMinWidth = options.dayMinWidth;
        var hasAttachedAxis = !dayMinWidth;
        var hasDetachedAxis = dayMinWidth;
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        var allDayContent = (options.allDaySlot !== false) && (function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__.DayTable, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()))); });
        var timeGridContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }))); };
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    };
    return DayTimeColsView;
}(TimeColsView));
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, false);
}

var OPTION_REFINERS = {
    allDaySlot: Boolean,
};

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS,
    views: {
        timeGrid: {
            component: DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true, // a bad name. confused with overlap/constraint system
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);



/***/ }),

/***/ 78535:
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {



// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ 89086:
/*!**********************************************************!*\
  !*** ./node_modules/preact/compat/dist/compat.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ nn),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ B),
/* harmony export */   "hydrate": () => (/* binding */ $),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ un),
/* harmony export */   "createPortal": () => (/* binding */ W),
/* harmony export */   "createFactory": () => (/* binding */ tn),
/* harmony export */   "cloneElement": () => (/* binding */ rn),
/* harmony export */   "isValidElement": () => (/* binding */ en),
/* harmony export */   "findDOMNode": () => (/* binding */ on),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "flushSync": () => (/* binding */ cn),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ ln),
/* harmony export */   "StrictMode": () => (/* binding */ fn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ M),
/* harmony export */   "lazy": () => (/* binding */ F),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact/hooks */ 32707);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ 98173);
function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function F(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function M(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},c=!0===t.__h;r.__u++||c||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var T=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function D(n){return this.getChildContext=function(){return n.context},n.children}function I(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(D,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function W(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(I,{__v:n,i:t})}(M.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),T(t,n,r)):u()};e?e(o):o()}},M.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},M.prototype.componentDidUpdate=M.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){T(n,e,t)})};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V="undefined"!=typeof document,z=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function B(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function $(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function q(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=q,n.nativeEvent=n};var G,J={configurable:!0,get:function(){return this.class}},K=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){var u=-1===t.indexOf("-");for(var o in r={},e){var i=e[o];V&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in e&&null==i||("defaultValue"===o&&"value"in e&&null==e.value?o="value":"download"===o&&!0===i?i="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!z(e.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():u&&P.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===i&&(i=void 0),r[o]=i)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r,e.class!=e.className&&(J.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",J))}n.$$typeof=j,K&&K(n)};var Q=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){Q&&Q(n),G=n.__c};var X={ReactCurrentDispatcher:{current:{readContext:function(n){return G.__n[n.__c].props.value}}}},nn="17.0.2";function tn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function en(n){return!!n&&n.$$typeof===j}function rn(n){return en(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function un(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function on(n){return n&&(n.base||1===n.nodeType&&n)||null}var ln=function(n,t){return n(t)},cn=function(n,t){return n(t)},fn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"17.0.2",Children:k,render:B,hydrate:$,unmountComponentAtNode:un,createPortal:W,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:tn,cloneElement:rn,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:en,findDOMNode:on,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,flushSync:cn,unstable_batchedUpdates:ln,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:M,lazy:F,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:X});


/***/ }),

/***/ 98173:
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ S),
/* harmony export */   "hydrate": () => (/* binding */ q),
/* harmony export */   "createElement": () => (/* binding */ v),
/* harmony export */   "h": () => (/* binding */ v),
/* harmony export */   "Fragment": () => (/* binding */ d),
/* harmony export */   "createRef": () => (/* binding */ p),
/* harmony export */   "isValidElement": () => (/* binding */ i),
/* harmony export */   "Component": () => (/* binding */ _),
/* harmony export */   "cloneElement": () => (/* binding */ B),
/* harmony export */   "createContext": () => (/* binding */ D),
/* harmony export */   "toChildArray": () => (/* binding */ A),
/* harmony export */   "options": () => (/* binding */ l)
/* harmony export */ });
var n,l,u,i,t,o,r,f,e={},c=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(n,l){for(var u in l)n[u]=l[u];return n}function h(n){var l=n.parentNode;l&&l.removeChild(n)}function v(l,u,i){var t,o,r,f={};for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return y(l,f,t,o,null)}function y(n,i,t,o,r){var f={type:n,props:i,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u:r};return null==r&&null!=l.vnode&&l.vnode(f),f}function p(){return{current:null}}function d(n){return n.children}function _(n,l){this.props=n,this.context=l}function k(n,l){if(null==l)return n.__?k(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?k(n):null}function b(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return b(n)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!g.__r++||r!==l.debounceRendering)&&((r=l.debounceRendering)||o)(g)}function g(){for(var n;g.__r=t.length;)n=t.sort(function(n,l){return n.__v.__b-l.__v.__b}),t=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=a({},t)).__v=t.__v+1,j(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?k(t):o,t.__h),z(u,t),t.__e!=o&&b(t)))})}function w(n,l,u,i,t,o,r,f,s,a){var h,v,p,_,b,m,g,w=i&&i.__k||c,A=w.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(_=u.__k[h]=null==(_=l[h])||"boolean"==typeof _?null:"string"==typeof _||"number"==typeof _||"bigint"==typeof _?y(null,_,null,null,_):Array.isArray(_)?y(d,{children:_},null,null,null):_.__b>0?y(_.type,_.props,_.key,null,_.__v):_)){if(_.__=u,_.__b=u.__b+1,null===(p=w[h])||p&&_.key==p.key&&_.type===p.type)w[h]=void 0;else for(v=0;v<A;v++){if((p=w[v])&&_.key==p.key&&_.type===p.type){w[v]=void 0;break}p=null}j(n,_,p=p||e,t,o,r,f,s,a),b=_.__e,(v=_.ref)&&p.ref!=v&&(g||(g=[]),p.ref&&g.push(p.ref,null,_),g.push(v,_.__c||b,_)),null!=b?(null==m&&(m=b),"function"==typeof _.type&&_.__k===p.__k?_.__d=s=x(_,s,n):s=P(n,_,p,w,b,s),"function"==typeof u.type&&(u.__d=s)):s&&p.__e==s&&s.parentNode!=n&&(s=k(p))}for(u.__e=m,h=A;h--;)null!=w[h]&&("function"==typeof u.type&&null!=w[h].__e&&w[h].__e==u.__d&&(u.__d=k(i,h+1)),N(w[h],w[h]));if(g)for(h=0;h<g.length;h++)M(g[h],g[++h],g[++h])}function x(n,l,u){for(var i,t=n.__k,o=0;t&&o<t.length;o++)(i=t[o])&&(i.__=n,l="function"==typeof i.type?x(i,l,u):P(u,i,i,t,i.__e,l));return l}function A(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){A(n,l)}):l.push(n)),l}function P(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function C(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||H(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||H(n,o,l[o],u[o],i)}function $(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||s.test(l)?u:u+"px"}function H(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||$(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||$(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?T:I,o):n.removeEventListener(l,o?T:I,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function I(n){this.l[n.type+!1](l.event?l.event(n):n)}function T(n){this.l[n.type+!0](l.event?l.event(n):n)}function j(n,u,i,t,o,r,f,e,c){var s,h,v,y,p,k,b,m,g,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(c=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(s=l.__b)&&s(u);try{n:if("function"==typeof P){if(m=u.props,g=(s=P.contextType)&&t[s.__c],x=s?g?g.props.value:s.__:t,i.__c?b=(h=u.__c=i.__c).__=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(m,x):(u.__c=h=new _(m,x),h.constructor=P,h.render=O),g&&g.sub(h),h.props=m,h.state||(h.state={}),h.context=x,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=a({},h.__s)),a(h.__s,P.getDerivedStateFromProps(m,h.__s))),y=h.props,p=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&m!==y&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,x),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,x)||u.__v===i.__v){h.props=m,h.state=h.__s,u.__v!==i.__v&&(h.__d=!1),h.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,x),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(y,p,k)})}h.context=x,h.props=m,h.state=h.__s,(s=l.__r)&&s(u),h.__d=!1,h.__v=u,h.__P=n,s=h.render(h.props,h.state,h.context),h.state=h.__s,null!=h.getChildContext&&(t=a(a({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(y,p)),A=null!=s&&s.type===d&&null==s.key?s.props.children:s,w(n,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),h.base=u.__e,u.__h=null,h.__h.length&&f.push(h),b&&(h.__E=h.__=null),h.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=L(i.__e,u,i,t,o,r,f,c);(s=l.diffed)&&s(u)}catch(n){u.__v=null,(c||null!=r)&&(u.__e=e,u.__h=!!c,r[r.indexOf(e)]=null),l.__e(n,u,i)}}function z(n,u){l.__c&&l.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u)})}catch(n){l.__e(n,u.__v)}})}function L(l,u,i,t,o,r,f,c){var s,a,v,y=i.props,p=u.props,d=u.type,_=0;if("svg"===d&&(o=!0),null!=r)for(;_<r.length;_++)if((s=r[_])&&"setAttribute"in s==!!d&&(d?s.localName===d:3===s.nodeType)){l=s,r[_]=null;break}if(null==l){if(null===d)return document.createTextNode(p);l=o?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,p.is&&p),r=null,c=!1}if(null===d)y===p||c&&l.data===p||(l.data=p);else{if(r=r&&n.call(l.childNodes),a=(y=i.props||e).dangerouslySetInnerHTML,v=p.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},_=0;_<l.attributes.length;_++)y[l.attributes[_].name]=l.attributes[_].value;(v||a)&&(v&&(a&&v.__html==a.__html||v.__html===l.innerHTML)||(l.innerHTML=v&&v.__html||""))}if(C(l,p,y,o,c),v)u.__k=[];else if(_=u.props.children,w(l,Array.isArray(_)?_:[_],u,i,t,o&&"foreignObject"!==d,r,f,r?r[0]:i.__k&&k(i,0),c),null!=r)for(_=r.length;_--;)null!=r[_]&&h(r[_]);c||("value"in p&&void 0!==(_=p.value)&&(_!==l.value||"progress"===d&&!_||"option"===d&&_!==y.value)&&H(l,"value",_,y.value,!1),"checked"in p&&void 0!==(_=p.checked)&&_!==l.checked&&H(l,"checked",_,y.checked,!1))}return l}function M(n,u,i){try{"function"==typeof n?n(u):n.current=u}catch(n){l.__e(n,i)}}function N(n,u,i){var t,o;if(l.unmount&&l.unmount(n),(t=n.ref)&&(t.current&&t.current!==n.__e||M(t,null,u)),null!=(t=n.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(n){l.__e(n,u)}t.base=t.__P=null}if(t=n.__k)for(o=0;o<t.length;o++)t[o]&&N(t[o],u,"function"!=typeof n.type);i||null==n.__e||h(n.__e),n.__e=n.__d=void 0}function O(n,l,u){return this.constructor(n,u)}function S(u,i,t){var o,r,f;l.__&&l.__(u,i),r=(o="function"==typeof t)?null:t&&t.__k||i.__k,f=[],j(i,u=(!o&&t||i).__k=v(d,null,[u]),r||e,e,void 0!==i.ownerSVGElement,!o&&t?[t]:r?null:i.firstChild?n.call(i.childNodes):null,f,!o&&t?t:r?r.__e:i.firstChild,o),z(f,u)}function q(n,l){S(n,l,q)}function B(l,u,i){var t,o,r,f=a({},l.props);for(r in u)"key"==r?t=u[r]:"ref"==r?o=u[r]:f[r]=u[r];return arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):i),y(l.type,f,t||l.key,o||l.ref,null)}function D(n,l){var u={__c:l="__cC"+f++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(m)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=c.slice,l={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n}},u=0,i=function(n){return null!=n&&void 0===n.constructor},_.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof n&&(n=n(a({},u),this.props)),n&&a(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),m(this))},_.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),m(this))},_.prototype.render=d,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,g.__r=0,f=0;


/***/ }),

/***/ 32707:
/*!********************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.module.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ d),
/* harmony export */   "useCallback": () => (/* binding */ A),
/* harmony export */   "useContext": () => (/* binding */ F),
/* harmony export */   "useDebugValue": () => (/* binding */ T),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ 98173);
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){for(var t;t=i.shift();)if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=null},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{g(n)}catch(n){u=n}}),u&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,r.__v))};var b="function"==typeof requestAnimationFrame;function g(n){var t=u,r=n.__c;"function"==typeof r&&(n.__c=void 0,r()),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}


/***/ }),

/***/ 90583:
/*!****************************************************!*\
  !*** ./node_modules/@fullcalendar/common/main.css ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/* classes attached to <body> */\n/* TODO: make fc-event selector work when calender in shadow DOM */\n.fc-not-allowed,\n.fc-not-allowed .fc-event { /* override events' custom cursors */\n  cursor: not-allowed;\n}\n/* TODO: not attached to body. attached to specific els. move */\n.fc-unselectable {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fc {\n  /* layout of immediate children */\n  display: flex;\n  flex-direction: column;\n\n  font-size: 1em\n}\n.fc,\n  .fc *,\n  .fc *:before,\n  .fc *:after {\n    box-sizing: border-box;\n  }\n.fc table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    font-size: 1em; /* normalize cross-browser */\n  }\n.fc th {\n    text-align: center;\n  }\n.fc th,\n  .fc td {\n    vertical-align: top;\n    padding: 0;\n  }\n.fc a[data-navlink] {\n    cursor: pointer;\n  }\n.fc a[data-navlink]:hover {\n    text-decoration: underline;\n  }\n.fc-direction-ltr {\n  direction: ltr;\n  text-align: left;\n}\n.fc-direction-rtl {\n  direction: rtl;\n  text-align: right;\n}\n.fc-theme-standard td,\n  .fc-theme-standard th {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n/* for FF, which doesn't expand a 100% div within a table cell. use absolute positioning */\n/* inner-wrappers are responsible for being absolute */\n/* TODO: best place for this? */\n.fc-liquid-hack td,\n  .fc-liquid-hack th {\n    position: relative;\n  }\n@font-face {\n  font-family: 'fcicons';\n  src: url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n.fc-icon {\n  /* added for fc */\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'fcicons' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.fc-icon-chevron-left:before {\n  content: \"\\e900\";\n}\n.fc-icon-chevron-right:before {\n  content: \"\\e901\";\n}\n.fc-icon-chevrons-left:before {\n  content: \"\\e902\";\n}\n.fc-icon-chevrons-right:before {\n  content: \"\\e903\";\n}\n.fc-icon-minus-square:before {\n  content: \"\\e904\";\n}\n.fc-icon-plus-square:before {\n  content: \"\\e905\";\n}\n.fc-icon-x:before {\n  content: \"\\e906\";\n}\n/*\nLots taken from Flatly (MIT): https://bootswatch.com/4/flatly/bootstrap.css\n\nThese styles only apply when the standard-theme is activated.\nWhen it's NOT activated, the fc-button classes won't even be in the DOM.\n*/\n.fc {\n\n  /* reset */\n\n}\n.fc .fc-button {\n    border-radius: 0;\n    overflow: visible;\n    text-transform: none;\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n  }\n.fc .fc-button:focus {\n    outline: 1px dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n.fc .fc-button {\n    -webkit-appearance: button;\n  }\n.fc .fc-button:not(:disabled) {\n    cursor: pointer;\n  }\n.fc .fc-button::-moz-focus-inner {\n    padding: 0;\n    border-style: none;\n  }\n.fc {\n\n  /* theme */\n\n}\n.fc .fc-button {\n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    background-color: transparent;\n    border: 1px solid transparent;\n    padding: 0.4em 0.65em;\n    font-size: 1em;\n    line-height: 1.5;\n    border-radius: 0.25em;\n  }\n.fc .fc-button:hover {\n    text-decoration: none;\n  }\n.fc .fc-button:focus {\n    outline: 0;\n    box-shadow: 0 0 0 0.2rem rgba(44, 62, 80, 0.25);\n  }\n.fc .fc-button:disabled {\n    opacity: 0.65;\n  }\n.fc {\n\n  /* \"primary\" coloring */\n\n}\n.fc .fc-button-primary {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50);\n  }\n.fc .fc-button-primary:hover {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1e2b37;\n    background-color: #1e2b37;\n    background-color: var(--fc-button-hover-bg-color, #1e2b37);\n    border-color: #1a252f;\n    border-color: #1a252f;\n    border-color: var(--fc-button-hover-border-color, #1a252f);\n  }\n.fc .fc-button-primary:disabled { /* not DRY */\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #2C3E50;\n    background-color: #2C3E50;\n    background-color: var(--fc-button-bg-color, #2C3E50);\n    border-color: #2C3E50;\n    border-color: #2C3E50;\n    border-color: var(--fc-button-border-color, #2C3E50); /* overrides :hover */\n  }\n.fc .fc-button-primary:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc .fc-button-primary:not(:disabled):active,\n  .fc .fc-button-primary:not(:disabled).fc-button-active {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-button-text-color, #fff);\n    background-color: #1a252f;\n    background-color: #1a252f;\n    background-color: var(--fc-button-active-bg-color, #1a252f);\n    border-color: #151e27;\n    border-color: #151e27;\n    border-color: var(--fc-button-active-border-color, #151e27);\n  }\n.fc .fc-button-primary:not(:disabled):active:focus,\n  .fc .fc-button-primary:not(:disabled).fc-button-active:focus {\n    box-shadow: 0 0 0 0.2rem rgba(76, 91, 106, 0.5);\n  }\n.fc {\n\n  /* icons within buttons */\n\n}\n.fc .fc-button .fc-icon {\n    vertical-align: middle;\n    font-size: 1.5em; /* bump up the size (but don't make it bigger than line-height of button, which is 1.5em also) */\n  }\n.fc .fc-button-group {\n    position: relative;\n    display: inline-flex;\n    vertical-align: middle;\n  }\n.fc .fc-button-group > .fc-button {\n    position: relative;\n    flex: 1 1 auto;\n  }\n.fc .fc-button-group > .fc-button:hover {\n    z-index: 1;\n  }\n.fc .fc-button-group > .fc-button:focus,\n  .fc .fc-button-group > .fc-button:active,\n  .fc .fc-button-group > .fc-button.fc-button-active {\n    z-index: 1;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:first-child) {\n    margin-left: -1px;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc-direction-ltr .fc-button-group > .fc-button:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:first-child) {\n    margin-right: -1px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n.fc-direction-rtl .fc-button-group > .fc-button:not(:last-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n.fc .fc-toolbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n.fc .fc-toolbar.fc-header-toolbar {\n    margin-bottom: 1.5em;\n  }\n.fc .fc-toolbar.fc-footer-toolbar {\n    margin-top: 1.5em;\n  }\n.fc .fc-toolbar-title {\n    font-size: 1.75em;\n    margin: 0;\n  }\n.fc-direction-ltr .fc-toolbar > * > :not(:first-child) {\n    margin-left: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar > * > :not(:first-child) {\n    margin-right: .75em; /* space between */\n  }\n.fc-direction-rtl .fc-toolbar-ltr { /* when the toolbar-chunk positioning system is explicitly left-to-right */\n    flex-direction: row-reverse;\n  }\n.fc .fc-scroller {\n    -webkit-overflow-scrolling: touch;\n    position: relative; /* for abs-positioned elements within */\n  }\n.fc .fc-scroller-liquid {\n    height: 100%;\n  }\n.fc .fc-scroller-liquid-absolute {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n  }\n.fc .fc-scroller-harness {\n    position: relative;\n    overflow: hidden;\n    direction: ltr;\n      /* hack for chrome computing the scroller's right/left wrong for rtl. undone below... */\n      /* TODO: demonstrate in codepen */\n  }\n.fc .fc-scroller-harness-liquid {\n    height: 100%;\n  }\n.fc-direction-rtl .fc-scroller-harness > .fc-scroller { /* undo above hack */\n    direction: rtl;\n  }\n.fc-theme-standard .fc-scrollgrid {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd); /* bootstrap does this. match */\n  }\n.fc .fc-scrollgrid,\n    .fc .fc-scrollgrid table { /* all tables (self included) */\n      width: 100%; /* because tables don't normally do this */\n      table-layout: fixed;\n    }\n.fc .fc-scrollgrid table { /* inner tables */\n      border-top-style: hidden;\n      border-left-style: hidden;\n      border-right-style: hidden;\n    }\n.fc .fc-scrollgrid {\n\n    border-collapse: separate;\n    border-right-width: 0;\n    border-bottom-width: 0;\n\n  }\n.fc .fc-scrollgrid-liquid {\n    height: 100%;\n  }\n.fc .fc-scrollgrid-section { /* a <tr> */\n    height: 1px /* better than 0, for firefox */\n\n  }\n.fc .fc-scrollgrid-section > td {\n      height: 1px; /* needs a height so inner div within grow. better than 0, for firefox */\n    }\n.fc .fc-scrollgrid-section table {\n      height: 1px;\n        /* for most browsers, if a height isn't set on the table, can't do liquid-height within cells */\n        /* serves as a min-height. harmless */\n    }\n.fc .fc-scrollgrid-section-liquid > td {\n      height: 100%; /* better than `auto`, for firefox */\n    }\n.fc .fc-scrollgrid-section > * {\n    border-top-width: 0;\n    border-left-width: 0;\n  }\n.fc .fc-scrollgrid-section-header > *,\n  .fc .fc-scrollgrid-section-footer > * {\n    border-bottom-width: 0;\n  }\n.fc .fc-scrollgrid-section-body table,\n  .fc .fc-scrollgrid-section-footer table {\n    border-bottom-style: hidden; /* head keeps its bottom border tho */\n  }\n.fc {\n\n  /* stickiness */\n\n}\n.fc .fc-scrollgrid-section-sticky > * {\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n    position: -webkit-sticky;\n    position: sticky;\n    z-index: 3; /* TODO: var */\n    /* TODO: box-shadow when sticking */\n  }\n.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky > * {\n    top: 0; /* because border-sharing causes a gap at the top */\n      /* TODO: give safari -1. has bug */\n  }\n.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky > * {\n    bottom: 0; /* known bug: bottom-stickiness doesn't work in safari */\n  }\n.fc .fc-scrollgrid-sticky-shim { /* for horizontal scrollbar */\n    height: 1px; /* needs height to create scrollbars */\n    margin-bottom: -1px;\n  }\n.fc-sticky { /* no .fc wrap because used as child of body */\n  position: -webkit-sticky;\n  position: sticky;\n}\n.fc .fc-view-harness {\n    flex-grow: 1; /* because this harness is WITHIN the .fc's flexbox */\n    position: relative;\n  }\n.fc {\n\n  /* when the harness controls the height, make the view liquid */\n\n}\n.fc .fc-view-harness-active > .fc-view {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n.fc .fc-col-header-cell-cushion {\n    display: inline-block; /* x-browser for when sticky (when multi-tier header) */\n    padding: 2px 4px;\n  }\n.fc .fc-bg-event,\n  .fc .fc-non-business,\n  .fc .fc-highlight {\n    /* will always have a harness with position:relative/absolute, so absolutely expand */\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc .fc-non-business {\n    background: rgba(215, 215, 215, 0.3);\n    background: rgba(215, 215, 215, 0.3);\n    background: var(--fc-non-business-color, rgba(215, 215, 215, 0.3));\n  }\n.fc .fc-bg-event {\n    background: rgb(143, 223, 130);\n    background: rgb(143, 223, 130);\n    background: var(--fc-bg-event-color, rgb(143, 223, 130));\n    opacity: 0.3;\n    opacity: 0.3;\n    opacity: var(--fc-bg-event-opacity, 0.3)\n  }\n.fc .fc-bg-event .fc-event-title {\n      margin: .5em;\n      font-size: .85em;\n      font-size: .85em;\n      font-size: var(--fc-small-font-size, .85em);\n      font-style: italic;\n    }\n.fc .fc-highlight {\n    background: rgba(188, 232, 241, 0.3);\n    background: rgba(188, 232, 241, 0.3);\n    background: var(--fc-highlight-color, rgba(188, 232, 241, 0.3));\n  }\n.fc .fc-cell-shaded,\n  .fc .fc-day-disabled {\n    background: rgba(208, 208, 208, 0.3);\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n/* link resets */\n/* ---------------------------------------------------------------------------------------------------- */\na.fc-event,\na.fc-event:hover {\n  text-decoration: none;\n}\n/* cursor */\n.fc-event[href],\n.fc-event.fc-event-draggable {\n  cursor: pointer;\n}\n/* event text content */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event .fc-event-main {\n    position: relative;\n    z-index: 2;\n  }\n/* dragging */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-dragging:not(.fc-event-selected) { /* MOUSE */\n    opacity: 0.75;\n  }\n.fc-event-dragging.fc-event-selected { /* TOUCH */\n    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.3);\n  }\n/* resizing */\n/* ---------------------------------------------------------------------------------------------------- */\n/* (subclasses should hone positioning for touch and non-touch) */\n.fc-event .fc-event-resizer {\n    display: none;\n    position: absolute;\n    z-index: 4;\n  }\n.fc-event:hover, /* MOUSE */\n.fc-event-selected { /* TOUCH */\n\n}\n.fc-event:hover .fc-event-resizer, .fc-event-selected .fc-event-resizer {\n    display: block;\n  }\n.fc-event-selected .fc-event-resizer {\n    border-radius: 4px;\n    border-radius: calc(8px / 2);\n    border-radius: calc(var(--fc-event-resizer-dot-total-width, 8px) / 2);\n    border-width: 1px;\n    border-width: 1px;\n    border-width: var(--fc-event-resizer-dot-border-width, 1px);\n    width: 8px;\n    width: 8px;\n    width: var(--fc-event-resizer-dot-total-width, 8px);\n    height: 8px;\n    height: 8px;\n    height: var(--fc-event-resizer-dot-total-width, 8px);\n    border-style: solid;\n    border-color: inherit;\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff)\n\n    /* expand hit area */\n\n  }\n.fc-event-selected .fc-event-resizer:before {\n      content: '';\n      position: absolute;\n      top: -20px;\n      left: -20px;\n      right: -20px;\n      bottom: -20px;\n    }\n/* selecting (always TOUCH) */\n/* OR, focused by tab-index */\n/* (TODO: maybe not the best focus-styling for .fc-daygrid-dot-event) */\n/* ---------------------------------------------------------------------------------------------------- */\n.fc-event-selected,\n.fc-event:focus {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2)\n\n  /* expand hit area (subclasses should expand) */\n\n}\n.fc-event-selected:before, .fc-event:focus:before {\n    content: \"\";\n    position: absolute;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n.fc-event-selected,\n.fc-event:focus {\n\n  /* dimmer effect */\n\n}\n.fc-event-selected:after, .fc-event:focus:after {\n    content: \"\";\n    background: rgba(0, 0, 0, 0.25);\n    background: rgba(0, 0, 0, 0.25);\n    background: var(--fc-event-selected-overlay-color, rgba(0, 0, 0, 0.25));\n    position: absolute;\n    z-index: 1;\n\n    /* assume there's a border on all sides. overcome it. */\n    /* sometimes there's NOT a border, in which case the dimmer will go over */\n    /* an adjacent border, which looks fine. */\n    top: -1px;\n    left: -1px;\n    right: -1px;\n    bottom: -1px;\n  }\n/*\nA HORIZONTAL event\n*/\n.fc-h-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n.fc-h-event .fc-event-main {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n  }\n.fc-h-event .fc-event-main-frame {\n    display: flex; /* for make fc-event-title-container expand */\n  }\n.fc-h-event .fc-event-time {\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event .fc-event-title-container { /* serves as a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n  }\n.fc-h-event .fc-event-title {\n    display: inline-block; /* need this to be sticky cross-browser */\n    vertical-align: top; /* for not messing up line-height */\n    left: 0;  /* for sticky */\n    right: 0; /* for sticky */\n    max-width: 100%; /* clip overflow on this element */\n    overflow: hidden;\n  }\n.fc-h-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n/* adjust border and border-radius (if there is any) for non-start/end */\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-width: 0;\n}\n.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),\n.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-width: 0;\n}\n/* resizers */\n.fc-h-event:not(.fc-event-selected) .fc-event-resizer {\n  top: 0;\n  bottom: 0;\n  width: 8px;\n  width: 8px;\n  width: var(--fc-event-resizer-thickness, 8px);\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end {\n  cursor: w-resize;\n  left: -4px;\n  left: calc(-0.5 * 8px);\n  left: calc(-0.5 * var(--fc-event-resizer-thickness, 8px));\n}\n.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start {\n  cursor: e-resize;\n  right: -4px;\n  right: calc(-0.5 * 8px);\n  right: calc(-0.5 * var(--fc-event-resizer-thickness, 8px));\n}\n/* resizers for TOUCH */\n.fc-h-event.fc-event-selected .fc-event-resizer {\n  top: 50%;\n  margin-top: -4px;\n  margin-top: calc(-0.5 * 8px);\n  margin-top: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end {\n  left: -4px;\n  left: calc(-0.5 * 8px);\n  left: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,\n.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start {\n  right: -4px;\n  right: calc(-0.5 * 8px);\n  right: calc(-0.5 * var(--fc-event-resizer-dot-total-width, 8px));\n}\n.fc .fc-popover {\n    position: absolute;\n    z-index: 9999;\n    box-shadow: 0 2px 6px rgba(0,0,0,.15);\n  }\n.fc .fc-popover-header {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    padding: 3px 4px;\n  }\n.fc .fc-popover-title {\n    margin: 0 2px;\n  }\n.fc .fc-popover-close {\n    cursor: pointer;\n    opacity: 0.65;\n    font-size: 1.1em;\n  }\n.fc-theme-standard .fc-popover {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n    background: #fff;\n    background: #fff;\n    background: var(--fc-page-bg-color, #fff);\n  }\n.fc-theme-standard .fc-popover-header {\n    background: rgba(208, 208, 208, 0.3);\n    background: rgba(208, 208, 208, 0.3);\n    background: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwrQkFBK0I7QUFDL0Isa0VBQWtFO0FBQ2xFOzRCQUM0QixvQ0FBb0M7RUFDOUQsbUJBQW1CO0FBQ3JCO0FBRUEsK0RBQStEO0FBQy9EO0VBQ0UseUJBQXlCO0tBQ3RCLHNCQUFzQjtVQUVqQixpQkFBaUI7RUFDekIsMkJBQTJCO0VBQzNCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCO0FBQ0Y7QUFDQTs7OztJQUlJLHNCQUFzQjtFQUN4QjtBQUNGO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsNEJBQTRCO0VBQzlDO0FBQ0Y7SUFDSSxrQkFBa0I7RUFDcEI7QUFDRjs7SUFFSSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7SUFDSSxlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSwwQkFBMEI7RUFDNUI7QUFDRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTs7SUFFSSxzQkFBc0I7SUFDdEIsc0JBQThDO0lBQTlDLDhDQUE4QztFQUNoRDtBQUNGLDBGQUEwRjtBQUMxRixzREFBc0Q7QUFDdEQsK0JBQStCO0FBQy9COztJQUVJLGtCQUFrQjtFQUNwQjtBQUVGO0VBQ0Usc0JBQXNCO0VBQ3RCLDRtR0FBNG1HO0VBQzVtRyxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtLQUN0QixzQkFBc0I7VUFFakIsaUJBQWlCOztFQUV6QiwrRUFBK0U7RUFDL0UsaUNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGNBQWM7O0VBRWQsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBOzs7OztDQUtDO0FBQ0Q7O0VBRUUsVUFBVTs7QUFFWjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCO0FBQ0Y7SUFDSSxtQkFBbUI7SUFDbkIsMENBQTBDO0VBQzVDO0FBQ0Y7SUFDSSwwQkFBMEI7RUFDNUI7QUFDRjtJQUNJLGVBQWU7RUFDakI7QUFDRjtJQUNJLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRjs7RUFFRSxVQUFVOztBQUVaO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO09BQ3RCLHNCQUFzQjtZQUVqQixpQkFBaUI7SUFDekIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixxQkFBcUI7RUFDdkI7QUFDRjtJQUNJLHFCQUFxQjtFQUN2QjtBQUNGO0lBQ0ksVUFBVTtJQUNWLCtDQUErQztFQUNqRDtBQUNGO0lBQ0ksYUFBYTtFQUNmO0FBQ0Y7O0VBRUUsdUJBQXVCOztBQUV6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQXdDO0lBQXhDLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIseUJBQW9EO0lBQXBELG9EQUFvRDtJQUNwRCxxQkFBcUI7SUFDckIscUJBQW9EO0lBQXBELG9EQUFvRDtFQUN0RDtBQUNGO0lBQ0ksV0FBVztJQUNYLFdBQXdDO0lBQXhDLHdDQUF3QztJQUN4Qyx5QkFBeUI7SUFDekIseUJBQTBEO0lBQTFELDBEQUEwRDtJQUMxRCxxQkFBcUI7SUFDckIscUJBQTBEO0lBQTFELDBEQUEwRDtFQUM1RDtBQUNGLGtDQUFrQyxZQUFZO0lBQzFDLFdBQVc7SUFDWCxXQUF3QztJQUF4Qyx3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLHlCQUFvRDtJQUFwRCxvREFBb0Q7SUFDcEQscUJBQXFCO0lBQ3JCLHFCQUFvRDtJQUFwRCxvREFBb0QsRUFBRSxxQkFBcUI7RUFDN0U7QUFDRjtJQUNJLCtDQUErQztFQUNqRDtBQUNGOztJQUVJLFdBQVc7SUFDWCxXQUF3QztJQUF4Qyx3Q0FBd0M7SUFDeEMseUJBQXlCO0lBQ3pCLHlCQUEyRDtJQUEzRCwyREFBMkQ7SUFDM0QscUJBQXFCO0lBQ3JCLHFCQUEyRDtJQUEzRCwyREFBMkQ7RUFDN0Q7QUFDRjs7SUFFSSwrQ0FBK0M7RUFDakQ7QUFDRjs7RUFFRSx5QkFBeUI7O0FBRTNCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCLEVBQUUsZ0dBQWdHO0VBQ3BIO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtFQUN4QjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7QUFDRjtJQUNJLFVBQVU7RUFDWjtBQUNGOzs7SUFHSSxVQUFVO0VBQ1o7QUFDRjtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsNEJBQTRCO0VBQzlCO0FBQ0Y7SUFDSSwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9CO0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDZCQUE2QjtFQUMvQjtBQUNGO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtFQUM5QjtBQUNGO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7QUFDRjtJQUNJLG9CQUFvQjtFQUN0QjtBQUNGO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztFQUNYO0FBQ0Y7SUFDSSxrQkFBa0IsRUFBRSxrQkFBa0I7RUFDeEM7QUFDRjtJQUNJLG1CQUFtQixFQUFFLGtCQUFrQjtFQUN6QztBQUNGLG9DQUFvQywwRUFBMEU7SUFDMUcsMkJBQTJCO0VBQzdCO0FBQ0Y7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCLEVBQUUsdUNBQXVDO0VBQzdEO0FBQ0Y7SUFDSSxZQUFZO0VBQ2Q7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0VBQ1g7QUFDRjtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztNQUNaLHVGQUF1RjtNQUN2RixpQ0FBaUM7RUFDckM7QUFDRjtJQUNJLFlBQVk7RUFDZDtBQUNGLHdEQUF3RCxvQkFBb0I7SUFDeEUsY0FBYztFQUNoQjtBQUNGO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUE4QztJQUE5Qyw4Q0FBOEMsRUFBRSwrQkFBK0I7RUFDakY7QUFDRjsrQkFDK0IsK0JBQStCO01BQ3hELFdBQVcsRUFBRSwwQ0FBMEM7TUFDdkQsbUJBQW1CO0lBQ3JCO0FBQ0osMkJBQTJCLGlCQUFpQjtNQUN0Qyx3QkFBd0I7TUFDeEIseUJBQXlCO01BQ3pCLDBCQUEwQjtJQUM1QjtBQUNKOztJQUVJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsc0JBQXNCOztFQUV4QjtBQUNGO0lBQ0ksWUFBWTtFQUNkO0FBQ0YsNkJBQTZCLFdBQVc7SUFDcEMsVUFBVSxFQUFFLCtCQUErQjs7RUFFN0M7QUFDRjtNQUNNLFdBQVcsRUFBRSx3RUFBd0U7SUFDdkY7QUFDSjtNQUNNLFdBQVc7UUFDVCwrRkFBK0Y7UUFDL0YscUNBQXFDO0lBQ3pDO0FBQ0o7TUFDTSxZQUFZLEVBQUUsb0NBQW9DO0lBQ3BEO0FBQ0o7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0lBRUksc0JBQXNCO0VBQ3hCO0FBQ0Y7O0lBRUksMkJBQTJCLEVBQUUscUNBQXFDO0VBQ3BFO0FBQ0Y7O0VBRUUsZUFBZTs7QUFFakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBeUM7SUFBekMseUNBQXlDO0lBQ3pDLHdCQUFnQjtJQUFoQixnQkFBZ0I7SUFDaEIsVUFBVSxFQUFFLGNBQWM7SUFDMUIsbUNBQW1DO0VBQ3JDO0FBQ0Y7SUFDSSxNQUFNLEVBQUUsbURBQW1EO01BQ3pELGtDQUFrQztFQUN0QztBQUNGO0lBQ0ksU0FBUyxFQUFFLHdEQUF3RDtFQUNyRTtBQUNGLGlDQUFpQyw2QkFBNkI7SUFDMUQsV0FBVyxFQUFFLHNDQUFzQztJQUNuRCxtQkFBbUI7RUFDckI7QUFDRixhQUFhLDhDQUE4QztFQUN6RCx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZLEVBQUUscURBQXFEO0lBQ25FLGtCQUFrQjtFQUNwQjtBQUNGOztFQUVFLCtEQUErRDs7QUFFakU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0VBQ1Q7QUFDRjtJQUNJLHFCQUFxQixFQUFFLHVEQUF1RDtJQUM5RSxnQkFBZ0I7RUFDbEI7QUFDRjs7O0lBR0kscUZBQXFGO0lBQ3JGLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDRjtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBa0U7SUFBbEUsa0VBQWtFO0VBQ3BFO0FBQ0Y7SUFDSSw4QkFBOEI7SUFDOUIsOEJBQXdEO0lBQXhELHdEQUF3RDtJQUN4RCxZQUFZO0lBQ1osWUFBdUM7SUFBdkM7RUFDRjtBQUNGO01BQ00sWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixnQkFBMkM7TUFBM0MsMkNBQTJDO01BQzNDLGtCQUFrQjtJQUNwQjtBQUNKO0lBQ0ksb0NBQW9DO0lBQ3BDLG9DQUErRDtJQUEvRCwrREFBK0Q7RUFDakU7QUFDRjs7SUFFSSxvQ0FBb0M7SUFDcEMsb0NBQWdFO0lBQWhFLGdFQUFnRTtFQUNsRTtBQUNGLGdCQUFnQjtBQUNoQix5R0FBeUc7QUFDekc7O0VBRUUscUJBQXFCO0FBQ3ZCO0FBQ0EsV0FBVztBQUNYOztFQUVFLGVBQWU7QUFDakI7QUFDQSx1QkFBdUI7QUFDdkIseUdBQXlHO0FBQ3pHO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGLGFBQWE7QUFDYix5R0FBeUc7QUFDekcsNkNBQTZDLFVBQVU7SUFDbkQsYUFBYTtFQUNmO0FBQ0YsdUNBQXVDLFVBQVU7SUFDN0Msd0NBQXdDO0VBQzFDO0FBQ0YsYUFBYTtBQUNiLHlHQUF5RztBQUN6RyxpRUFBaUU7QUFDakU7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjtBQUNGO3FCQUNxQixVQUFVOztBQUUvQjtBQUNBO0lBQ0ksY0FBYztFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUFxRTtJQUFyRSxxRUFBcUU7SUFDckUsaUJBQWlCO0lBQ2pCLGlCQUEyRDtJQUEzRCwyREFBMkQ7SUFDM0QsVUFBVTtJQUNWLFVBQW1EO0lBQW5ELG1EQUFtRDtJQUNuRCxXQUFXO0lBQ1gsV0FBb0Q7SUFBcEQsb0RBQW9EO0lBQ3BELG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUF3QztJQUF4Qyx3Q0FBd0M7O0lBRXhDLG9CQUFvQjs7RUFFdEI7QUFDRjtNQUNNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO01BQ1osYUFBYTtJQUNmO0FBQ0osNkJBQTZCO0FBQzdCLDZCQUE2QjtBQUM3Qix1RUFBdUU7QUFDdkUseUdBQXlHO0FBQ3pHOztFQUVFLHVDQUF1Qzs7RUFFdkMsK0NBQStDOztBQUVqRDtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0Y7OztFQUdFLGtCQUFrQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsK0JBQXVFO0lBQXZFLHVFQUF1RTtJQUN2RSxrQkFBa0I7SUFDbEIsVUFBVTs7SUFFVix1REFBdUQ7SUFDdkQsMEVBQTBFO0lBQzFFLDBDQUEwQztJQUMxQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDRjs7Q0FFQztBQUNELGNBQWMsNEJBQTRCO0VBQ3hDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXVEO0VBQXZELHVEQUF1RDtFQUN2RCx5QkFBeUI7RUFDekIseUJBQWtEO0VBQWxEOztBQUVGO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBdUM7SUFBdkMsdUNBQXVDO0VBQ3pDO0FBQ0Y7SUFDSSxhQUFhLEVBQUUsNkNBQTZDO0VBQzlEO0FBQ0Y7SUFDSSxlQUFlLEVBQUUsa0NBQWtDO0lBQ25ELGdCQUFnQjtFQUNsQjtBQUNGLHdDQUF3QyxpREFBaUQ7SUFDckYsWUFBWTtJQUNaLGNBQWM7SUFDZCxZQUFZLEVBQUUsaURBQWlEO0VBQ2pFO0FBQ0Y7SUFDSSxxQkFBcUIsRUFBRSx5Q0FBeUM7SUFDaEUsbUJBQW1CLEVBQUUsbUNBQW1DO0lBQ3hELE9BQU8sR0FBRyxlQUFlO0lBQ3pCLFFBQVEsRUFBRSxlQUFlO0lBQ3pCLGVBQWUsRUFBRSxrQ0FBa0M7SUFDbkQsZ0JBQWdCO0VBQ2xCO0FBQ0Y7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGLHdFQUF3RTtBQUN4RTs7RUFFRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCO0FBQ0EsYUFBYTtBQUNiO0VBQ0UsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1YsVUFBNkM7RUFBN0MsNkNBQTZDO0FBQy9DO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixzQkFBeUQ7RUFBekQseURBQXlEO0FBQzNEO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBMEQ7RUFBMUQsMERBQTBEO0FBQzVEO0FBQ0EsdUJBQXVCO0FBQ3ZCO0VBQ0UsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQiw0QkFBcUU7RUFBckUscUVBQXFFO0FBQ3ZFO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLHNCQUErRDtFQUEvRCwrREFBK0Q7QUFDakU7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsdUJBQWdFO0VBQWhFLGdFQUFnRTtBQUNsRTtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQ0FBcUM7RUFDdkM7QUFDRjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLGFBQWE7RUFDZjtBQUNGO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7RUFDbEI7QUFDRjtJQUNJLHNCQUFzQjtJQUN0QixzQkFBOEM7SUFBOUMsOENBQThDO0lBQzlDLGdCQUFnQjtJQUNoQixnQkFBeUM7SUFBekMseUNBQXlDO0VBQzNDO0FBQ0Y7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQWdFO0lBQWhFLGdFQUFnRTtFQUNsRSIsImZpbGUiOiJtYWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogY2xhc3NlcyBhdHRhY2hlZCB0byA8Ym9keT4gKi9cbi8qIFRPRE86IG1ha2UgZmMtZXZlbnQgc2VsZWN0b3Igd29yayB3aGVuIGNhbGVuZGVyIGluIHNoYWRvdyBET00gKi9cbi5mYy1ub3QtYWxsb3dlZCxcbi5mYy1ub3QtYWxsb3dlZCAuZmMtZXZlbnQgeyAvKiBvdmVycmlkZSBldmVudHMnIGN1c3RvbSBjdXJzb3JzICovXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIFRPRE86IG5vdCBhdHRhY2hlZCB0byBib2R5LiBhdHRhY2hlZCB0byBzcGVjaWZpYyBlbHMuIG1vdmUgKi9cbi5mYy11bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cbi5mYyB7XG4gIC8qIGxheW91dCBvZiBpbW1lZGlhdGUgY2hpbGRyZW4gKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBmb250LXNpemU6IDFlbVxufVxuLmZjLFxuICAuZmMgKixcbiAgLmZjICo6YmVmb3JlLFxuICAuZmMgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuLmZjIHRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiBub3JtYWxpemUgY3Jvc3MtYnJvd3NlciAqL1xuICB9XG4uZmMgdGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuLmZjIHRoLFxuICAuZmMgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuLmZjIGFbZGF0YS1uYXZsaW5rXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4uZmMgYVtkYXRhLW5hdmxpbmtdOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuLmZjLWRpcmVjdGlvbi1sdHIge1xuICBkaXJlY3Rpb246IGx0cjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5mYy1kaXJlY3Rpb24tcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmZjLXRoZW1lLXN0YW5kYXJkIHRkLFxuICAuZmMtdGhlbWUtc3RhbmRhcmQgdGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmMtYm9yZGVyLWNvbG9yLCAjZGRkKTtcbiAgfVxuLyogZm9yIEZGLCB3aGljaCBkb2Vzbid0IGV4cGFuZCBhIDEwMCUgZGl2IHdpdGhpbiBhIHRhYmxlIGNlbGwuIHVzZSBhYnNvbHV0ZSBwb3NpdGlvbmluZyAqL1xuLyogaW5uZXItd3JhcHBlcnMgYXJlIHJlc3BvbnNpYmxlIGZvciBiZWluZyBhYnNvbHV0ZSAqL1xuLyogVE9ETzogYmVzdCBwbGFjZSBmb3IgdGhpcz8gKi9cbi5mYy1saXF1aWQtaGFjayB0ZCxcbiAgLmZjLWxpcXVpZC1oYWNrIHRoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZmNpY29ucyc7XG4gIHNyYzogdXJsKFwiZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtdHRmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFMQUlBQUF3QXdUMU12TWc4U0JmQUFBQUM4QUFBQVlHTnRZWEFYVnRLTkFBQUJIQUFBQUZSbllYTndBQUFBRUFBQUFYQUFBQUFJWjJ4NVpnWXlkeElBQUFGNEFBQUZOR2hsWVdRVUo3Y0lBQUFHckFBQUFEWm9hR1ZoQjIwRHpBQUFCdVFBQUFBa2FHMTBlQ0lBQmhRQUFBY0lBQUFBTEd4dlkyRUQ0QVU2QUFBSE5BQUFBQmh0WVhod0FBOEFqQUFBQjB3QUFBQWdibUZ0WlhzcjY5MEFBQWRzQUFBQmhuQnZjM1FBQXdBQUFBQUk5QUFBQUNBQUF3UEFBWkFBQlFBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBRHBCZ1BBLzhBQVFBUEFBRUFBQUFBQkFBQUFBQUFBQUFBQUFBQWdBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQURBQUFBSEFBREFBRUFBQUFjQUFRQU9BQUFBQW9BQ0FBQ0FBSUFBUUFnNlFiLy9mLy9BQUFBQUFBZzZRRC8vZi8vQUFILzR4Y0VBQU1BQVFBQUFBQUFBQUFBQUFBQUFRQUIvLzhBRHdBQkFBQUFBQUFBQUFBQUFnQUFOemtCQUFBQUFBRUFBQUFBQUFBQUFBQUNBQUEzT1FFQUFBQUFBUUFBQUFBQUFBQUFBQUlBQURjNUFRQUFBQUFCQVdJQWpRS2VBc2tBRXdBQUpTYzNOalFuSmlJSEFRWVVGd0VXTWpjMk5DY0NudUxpRFEwTUpBei9BQTBOQVFBTUpBd05EY25pNGd3akRRd00vd0FOSXd6L0FBME5EQ01OQUFBQUFRRmlBSTBDbmdMSkFCTUFBQ1VCTmpRbkFTWWlCd1lVSHdFSEJoUVhGakkzQVo0QkFBME4vd0FNSkF3TkRlTGlEUTBNSkF5TkFRQU1JdzBCQUF3TURTTU00dUlOSXd3TkRRQUFBQUlBNGdDM0F4NENuZ0FUQUNjQUFDVW5OelkwSnlZaUR3RUdGQjhCRmpJM05qUW5JU2MzTmpRbkppSVBBUVlVSHdFV01qYzJOQ2NCODdlM0RRME1JdzNWRFEzVkRTTU1EUTBCSzdlM0RRME1KQXpWRFEzVkRDUU1EUTN6dUxjTUpBd05EZFVOSXd6V0RBd05Jd3k0dHd3a0RBME4xUTBqRE5ZTURBMGpEQUFBQWdEaUFMY0RIZ0tlQUJNQUp3QUFKVGMyTkM4QkppSUhCaFFmQVFjR0ZCY1dNamNoTnpZMEx3RW1JZ2NHRkI4QkJ3WVVGeFl5TndKSjFRME4xUTBqREEwTnQ3Y05EUXdqRGY3VjFRME4xUXdrREEwTnQ3Y05EUXdrRExmV0RDTU4xUTBORENRTXQ3Z01JdzBNRE5ZTUl3M1ZEUTBNSkF5M3VBd2pEUXdNQUFBREFGVUFBQU9yQTFVQU13Qm9BSGNBQUJNaUJnY09BUWNPQVFjT0FSVVJGQllYSGdFWEhnRVhIZ0V6SVRJMk56NEJOejRCTno0Qk5SRTBKaWN1QVNjdUFTY3VBU01GSVRJV0Z4NEJGeDRCRng0QkZSRVVCZ2NPQVFjT0FRY09BU01oSWlZbkxnRW5MZ0VuTGdFMUVUUTJOejRCTno0Qk56NEJNeE1oTWpZMU5DWWpJU0lHRlJRV005VU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOQWxZTkdBd0xGUWtKRGdVRkJRVUZCUTRKQ1JVTERCZ04vYW9DVmdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBVDlxZ1FJQkFRSEF3TUZBUUlCQVFJQkJRTURCd1FFQ0FTQUFWWVJHUmtSL3FvUkdSa1JBMVVGQkFVT0NRa1ZEQXNaRGYyckRSa0xEQlVKQ0E0RkJRVUZCUVVPQ1FnVkRBc1pEUUpWRFJrTERCVUpDUTRGQkFWVkFnRUNCUU1DQndRRUNBWDlxd1FKQXdRSEF3TUZBUUlDQWdJQkJRTURCd1FEQ1FRQ1ZRVUlCQVFIQWdNRkFnRUMvb0FaRWhFWkdSRVNHUUFBQUFBREFGVUFBQU9yQTFVQU13Qm9BSWtBQUJNaUJnY09BUWNPQVFjT0FSVVJGQllYSGdFWEhnRVhIZ0V6SVRJMk56NEJOejRCTno0Qk5SRTBKaWN1QVNjdUFTY3VBU01GSVRJV0Z4NEJGeDRCRng0QkZSRVVCZ2NPQVFjT0FRY09BU01oSWlZbkxnRW5MZ0VuTGdFMUVUUTJOejRCTno0Qk56NEJNeE16RlJRV016STJQUUV6TWpZMU5DWXJBVFUwSmlNaUJoMEJJeUlHRlJRV005VU5HQXdMRlFrSkRnVUZCUVVGQlE0SkNSVUxEQmdOQWxZTkdBd0xGUWtKRGdVRkJRVUZCUTRKQ1JVTERCZ04vYW9DVmdRSUJBUUhBd01GQVFJQkFRSUJCUU1EQndRRUNBVDlxZ1FJQkFRSEF3TUZBUUlCQVFJQkJRTURCd1FFQ0FTQWdCa1NFaG1BRVJrWkVZQVpFaElaZ0JFWkdSRURWUVVFQlE0SkNSVU1DeGtOL2FzTkdRc01GUWtJRGdVRkJRVUZCUTRKQ0JVTUN4a05BbFVOR1FzTUZRa0pEZ1VFQlZVQ0FRSUZBd0lIQkFRSUJmMnJCQWtEQkFjREF3VUJBZ0lDQWdFRkF3TUhCQU1KQkFKVkJRZ0VCQWNDQXdVQ0FRTCtnSUFTR1JrU2dCa1NFUm1BRWhrWkVvQVpFUklaQUFBQkFPSUFqUU1lQXNrQUlBQUFFeGNIQmhRWEZqSS9BUmNXTWpjMk5DOEJOelkwSnlZaUR3RW5KaUlIQmhRWDR1TGlEUTBNSkF6aTRnd2tEQTBONHVJTkRRd2tET0xpRENRTURRMENqZUxpRFNNTURRM2g0UTBORENNTjR1SU1JdzBNRE9MaURBd05Jd3dBQUFBQkFBQUFBUUFBYTVuMHkxOFBQUFVBQ3dRQUFBQUFBTml2T1ZzQUFBQUEySzg1V3dBQUFBQURxd05WQUFBQUNBQUNBQUFBQUFBQUFBRUFBQVBBLzhBQUFBUUFBQUFBQUFPckFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBTEJBQUFBQUFBQUFBQUFBQUFBZ0FBQUFRQUFXSUVBQUZpQkFBQTRnUUFBT0lFQUFCVkJBQUFWUVFBQU9JQUFBQUFBQW9BRkFBZUFFUUFhZ0NxQU9vQm5nSmtBcG9BQVFBQUFBc0FpZ0FEQUFBQUFBQUNBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTRBcmdBQkFBQUFBQUFCQUFjQUFBQUJBQUFBQUFBQ0FBY0FZQUFCQUFBQUFBQURBQWNBTmdBQkFBQUFBQUFFQUFjQWRRQUJBQUFBQUFBRkFBc0FGUUFCQUFBQUFBQUdBQWNBU3dBQkFBQUFBQUFLQUJvQWlnQURBQUVFQ1FBQkFBNEFCd0FEQUFFRUNRQUNBQTRBWndBREFBRUVDUUFEQUE0QVBRQURBQUVFQ1FBRUFBNEFmQUFEQUFFRUNRQUZBQllBSUFBREFBRUVDUUFHQUE0QVVnQURBQUVFQ1FBS0FEUUFwR1pqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzFabGNuTnBiMjRnTVM0d0FGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNR1pqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzJaamFXTnZibk1BWmdCakFHa0FZd0J2QUc0QWMxSmxaM1ZzWVhJQVVnQmxBR2NBZFFCc0FHRUFjbVpqYVdOdmJuTUFaZ0JqQUdrQVl3QnZBRzRBYzBadmJuUWdaMlZ1WlhKaGRHVmtJR0o1SUVsamIwMXZiMjR1QUVZQWJ3QnVBSFFBSUFCbkFHVUFiZ0JsQUhJQVlRQjBBR1VBWkFBZ0FHSUFlUUFnQUVrQVl3QnZBRTBBYndCdkFHNEFMZ0FBQUFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQT1cIikgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5mYy1pY29uIHtcbiAgLyogYWRkZWQgZm9yIGZjICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xuICBmb250LWZhbWlseTogJ2ZjaWNvbnMnICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgLyogQmV0dGVyIEZvbnQgUmVuZGVyaW5nID09PT09PT09PT09ICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZmMtaWNvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGU5MDBcIjtcbn1cblxuLmZjLWljb24tY2hldnJvbi1yaWdodDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwMVwiO1xufVxuXG4uZmMtaWNvbi1jaGV2cm9ucy1sZWZ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTAyXCI7XG59XG5cbi5mYy1pY29uLWNoZXZyb25zLXJpZ2h0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTAzXCI7XG59XG5cbi5mYy1pY29uLW1pbnVzLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwNFwiO1xufVxuXG4uZmMtaWNvbi1wbHVzLXNxdWFyZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZTkwNVwiO1xufVxuXG4uZmMtaWNvbi14OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxlOTA2XCI7XG59XG4vKlxuTG90cyB0YWtlbiBmcm9tIEZsYXRseSAoTUlUKTogaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2ZsYXRseS9ib290c3RyYXAuY3NzXG5cblRoZXNlIHN0eWxlcyBvbmx5IGFwcGx5IHdoZW4gdGhlIHN0YW5kYXJkLXRoZW1lIGlzIGFjdGl2YXRlZC5cbldoZW4gaXQncyBOT1QgYWN0aXZhdGVkLCB0aGUgZmMtYnV0dG9uIGNsYXNzZXMgd29uJ3QgZXZlbiBiZSBpbiB0aGUgRE9NLlxuKi9cbi5mYyB7XG5cbiAgLyogcmVzZXQgKi9cblxufVxuLmZjIC5mYy1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgfVxuLmZjIC5mYy1idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gICAgb3V0bGluZTogNXB4IGF1dG8gLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yO1xuICB9XG4uZmMgLmZjLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIH1cbi5mYyAuZmMtYnV0dG9uOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbi5mYyAuZmMtYnV0dG9uOjotbW96LWZvY3VzLWlubmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgfVxuLmZjIHtcblxuICAvKiB0aGVtZSAqL1xuXG59XG4uZmMgLmZjLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwYWRkaW5nOiAwLjRlbSAwLjY1ZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIH1cbi5mYyAuZmMtYnV0dG9uOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbi5mYyAuZmMtYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQ0LCA2MiwgODAsIDAuMjUpO1xuICB9XG4uZmMgLmZjLWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuLmZjIHtcblxuICAvKiBcInByaW1hcnlcIiBjb2xvcmluZyAqL1xuXG59XG4uZmMgLmZjLWJ1dHRvbi1wcmltYXJ5IHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogdmFyKC0tZmMtYnV0dG9uLXRleHQtY29sb3IsICNmZmYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzNFNTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtYnV0dG9uLWJnLWNvbG9yLCAjMkMzRTUwKTtcbiAgICBib3JkZXItY29sb3I6ICMyQzNFNTA7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mYy1idXR0b24tYm9yZGVyLWNvbG9yLCAjMkMzRTUwKTtcbiAgfVxuLmZjIC5mYy1idXR0b24tcHJpbWFyeTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLWZjLWJ1dHRvbi10ZXh0LWNvbG9yLCAjZmZmKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyYjM3O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLWJ1dHRvbi1ob3Zlci1iZy1jb2xvciwgIzFlMmIzNyk7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWEyNTJmO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmMtYnV0dG9uLWhvdmVyLWJvcmRlci1jb2xvciwgIzFhMjUyZik7XG4gIH1cbi5mYyAuZmMtYnV0dG9uLXByaW1hcnk6ZGlzYWJsZWQgeyAvKiBub3QgRFJZICovXG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLWZjLWJ1dHRvbi10ZXh0LWNvbG9yLCAjZmZmKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkMzRTUwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLWJ1dHRvbi1iZy1jb2xvciwgIzJDM0U1MCk7XG4gICAgYm9yZGVyLWNvbG9yOiAjMkMzRTUwO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZmMtYnV0dG9uLWJvcmRlci1jb2xvciwgIzJDM0U1MCk7IC8qIG92ZXJyaWRlcyA6aG92ZXIgKi9cbiAgfVxuLmZjIC5mYy1idXR0b24tcHJpbWFyeTpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNzYsIDkxLCAxMDYsIDAuNSk7XG4gIH1cbi5mYyAuZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6YWN0aXZlLFxuICAuZmMgLmZjLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpLmZjLWJ1dHRvbi1hY3RpdmUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiB2YXIoLS1mYy1idXR0b24tdGV4dC1jb2xvciwgI2ZmZik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjUyZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1idXR0b24tYWN0aXZlLWJnLWNvbG9yLCAjMWEyNTJmKTtcbiAgICBib3JkZXItY29sb3I6ICMxNTFlMjc7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mYy1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvciwgIzE1MWUyNyk7XG4gIH1cbi5mYyAuZmMtYnV0dG9uLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6YWN0aXZlOmZvY3VzLFxuICAuZmMgLmZjLWJ1dHRvbi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpLmZjLWJ1dHRvbi1hY3RpdmU6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDc2LCA5MSwgMTA2LCAwLjUpO1xuICB9XG4uZmMge1xuXG4gIC8qIGljb25zIHdpdGhpbiBidXR0b25zICovXG5cbn1cbi5mYyAuZmMtYnV0dG9uIC5mYy1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07IC8qIGJ1bXAgdXAgdGhlIHNpemUgKGJ1dCBkb24ndCBtYWtlIGl0IGJpZ2dlciB0aGFuIGxpbmUtaGVpZ2h0IG9mIGJ1dHRvbiwgd2hpY2ggaXMgMS41ZW0gYWxzbykgKi9cbiAgfVxuLmZjIC5mYy1idXR0b24tZ3JvdXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4uZmMgLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuLmZjIC5mYy1idXR0b24tZ3JvdXAgPiAuZmMtYnV0dG9uOmhvdmVyIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4uZmMgLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246Zm9jdXMsXG4gIC5mYyAuZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjphY3RpdmUsXG4gIC5mYyAuZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbi5mYy1idXR0b24tYWN0aXZlIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtYnV0dG9uLWdyb3VwID4gLmZjLWJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogLTFweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWJ1dHRvbi1ncm91cCA+IC5mYy1idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG4uZmMgLmZjLXRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbi5mYyAuZmMtdG9vbGJhci5mYy1oZWFkZXItdG9vbGJhciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gIH1cbi5mYyAuZmMtdG9vbGJhci5mYy1mb290ZXItdG9vbGJhciB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gIH1cbi5mYyAuZmMtdG9vbGJhci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtdG9vbGJhciA+ICogPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAuNzVlbTsgLyogc3BhY2UgYmV0d2VlbiAqL1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdG9vbGJhciA+ICogPiA6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogLjc1ZW07IC8qIHNwYWNlIGJldHdlZW4gKi9cbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRvb2xiYXItbHRyIHsgLyogd2hlbiB0aGUgdG9vbGJhci1jaHVuayBwb3NpdGlvbmluZyBzeXN0ZW0gaXMgZXhwbGljaXRseSBsZWZ0LXRvLXJpZ2h0ICovXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB9XG4uZmMgLmZjLXNjcm9sbGVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBmb3IgYWJzLXBvc2l0aW9uZWQgZWxlbWVudHMgd2l0aGluICovXG4gIH1cbi5mYyAuZmMtc2Nyb2xsZXItbGlxdWlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbi5mYyAuZmMtc2Nyb2xsZXItbGlxdWlkLWFic29sdXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICB9XG4uZmMgLmZjLXNjcm9sbGVyLWhhcm5lc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgLyogaGFjayBmb3IgY2hyb21lIGNvbXB1dGluZyB0aGUgc2Nyb2xsZXIncyByaWdodC9sZWZ0IHdyb25nIGZvciBydGwuIHVuZG9uZSBiZWxvdy4uLiAqL1xuICAgICAgLyogVE9ETzogZGVtb25zdHJhdGUgaW4gY29kZXBlbiAqL1xuICB9XG4uZmMgLmZjLXNjcm9sbGVyLWhhcm5lc3MtbGlxdWlkIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1zY3JvbGxlci1oYXJuZXNzID4gLmZjLXNjcm9sbGVyIHsgLyogdW5kbyBhYm92ZSBoYWNrICovXG4gICAgZGlyZWN0aW9uOiBydGw7XG4gIH1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtc2Nyb2xsZ3JpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ib3JkZXItY29sb3IsICNkZGQpOyAvKiBib290c3RyYXAgZG9lcyB0aGlzLiBtYXRjaCAqL1xuICB9XG4uZmMgLmZjLXNjcm9sbGdyaWQsXG4gICAgLmZjIC5mYy1zY3JvbGxncmlkIHRhYmxlIHsgLyogYWxsIHRhYmxlcyAoc2VsZiBpbmNsdWRlZCkgKi9cbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBiZWNhdXNlIHRhYmxlcyBkb24ndCBub3JtYWxseSBkbyB0aGlzICovXG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIH1cbi5mYyAuZmMtc2Nyb2xsZ3JpZCB0YWJsZSB7IC8qIGlubmVyIHRhYmxlcyAqL1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICAgIH1cbi5mYyAuZmMtc2Nyb2xsZ3JpZCB7XG5cbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuXG4gIH1cbi5mYyAuZmMtc2Nyb2xsZ3JpZC1saXF1aWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuLmZjIC5mYy1zY3JvbGxncmlkLXNlY3Rpb24geyAvKiBhIDx0cj4gKi9cbiAgICBoZWlnaHQ6IDFweCAvKiBiZXR0ZXIgdGhhbiAwLCBmb3IgZmlyZWZveCAqL1xuXG4gIH1cbi5mYyAuZmMtc2Nyb2xsZ3JpZC1zZWN0aW9uID4gdGQge1xuICAgICAgaGVpZ2h0OiAxcHg7IC8qIG5lZWRzIGEgaGVpZ2h0IHNvIGlubmVyIGRpdiB3aXRoaW4gZ3Jvdy4gYmV0dGVyIHRoYW4gMCwgZm9yIGZpcmVmb3ggKi9cbiAgICB9XG4uZmMgLmZjLXNjcm9sbGdyaWQtc2VjdGlvbiB0YWJsZSB7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgLyogZm9yIG1vc3QgYnJvd3NlcnMsIGlmIGEgaGVpZ2h0IGlzbid0IHNldCBvbiB0aGUgdGFibGUsIGNhbid0IGRvIGxpcXVpZC1oZWlnaHQgd2l0aGluIGNlbGxzICovXG4gICAgICAgIC8qIHNlcnZlcyBhcyBhIG1pbi1oZWlnaHQuIGhhcm1sZXNzICovXG4gICAgfVxuLmZjIC5mYy1zY3JvbGxncmlkLXNlY3Rpb24tbGlxdWlkID4gdGQge1xuICAgICAgaGVpZ2h0OiAxMDAlOyAvKiBiZXR0ZXIgdGhhbiBgYXV0b2AsIGZvciBmaXJlZm94ICovXG4gICAgfVxuLmZjIC5mYy1zY3JvbGxncmlkLXNlY3Rpb24gPiAqIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICB9XG4uZmMgLmZjLXNjcm9sbGdyaWQtc2VjdGlvbi1oZWFkZXIgPiAqLFxuICAuZmMgLmZjLXNjcm9sbGdyaWQtc2VjdGlvbi1mb290ZXIgPiAqIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICB9XG4uZmMgLmZjLXNjcm9sbGdyaWQtc2VjdGlvbi1ib2R5IHRhYmxlLFxuICAuZmMgLmZjLXNjcm9sbGdyaWQtc2VjdGlvbi1mb290ZXIgdGFibGUge1xuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjsgLyogaGVhZCBrZWVwcyBpdHMgYm90dG9tIGJvcmRlciB0aG8gKi9cbiAgfVxuLmZjIHtcblxuICAvKiBzdGlja2luZXNzICovXG5cbn1cbi5mYyAuZmMtc2Nyb2xsZ3JpZC1zZWN0aW9uLXN0aWNreSA+ICoge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZmMtcGFnZS1iZy1jb2xvciwgI2ZmZik7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB6LWluZGV4OiAzOyAvKiBUT0RPOiB2YXIgKi9cbiAgICAvKiBUT0RPOiBib3gtc2hhZG93IHdoZW4gc3RpY2tpbmcgKi9cbiAgfVxuLmZjIC5mYy1zY3JvbGxncmlkLXNlY3Rpb24taGVhZGVyLmZjLXNjcm9sbGdyaWQtc2VjdGlvbi1zdGlja3kgPiAqIHtcbiAgICB0b3A6IDA7IC8qIGJlY2F1c2UgYm9yZGVyLXNoYXJpbmcgY2F1c2VzIGEgZ2FwIGF0IHRoZSB0b3AgKi9cbiAgICAgIC8qIFRPRE86IGdpdmUgc2FmYXJpIC0xLiBoYXMgYnVnICovXG4gIH1cbi5mYyAuZmMtc2Nyb2xsZ3JpZC1zZWN0aW9uLWZvb3Rlci5mYy1zY3JvbGxncmlkLXNlY3Rpb24tc3RpY2t5ID4gKiB7XG4gICAgYm90dG9tOiAwOyAvKiBrbm93biBidWc6IGJvdHRvbS1zdGlja2luZXNzIGRvZXNuJ3Qgd29yayBpbiBzYWZhcmkgKi9cbiAgfVxuLmZjIC5mYy1zY3JvbGxncmlkLXN0aWNreS1zaGltIHsgLyogZm9yIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG4gICAgaGVpZ2h0OiAxcHg7IC8qIG5lZWRzIGhlaWdodCB0byBjcmVhdGUgc2Nyb2xsYmFycyAqL1xuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIH1cbi5mYy1zdGlja3kgeyAvKiBubyAuZmMgd3JhcCBiZWNhdXNlIHVzZWQgYXMgY2hpbGQgb2YgYm9keSAqL1xuICBwb3NpdGlvbjogc3RpY2t5O1xufVxuLmZjIC5mYy12aWV3LWhhcm5lc3Mge1xuICAgIGZsZXgtZ3JvdzogMTsgLyogYmVjYXVzZSB0aGlzIGhhcm5lc3MgaXMgV0lUSElOIHRoZSAuZmMncyBmbGV4Ym94ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4uZmMge1xuXG4gIC8qIHdoZW4gdGhlIGhhcm5lc3MgY29udHJvbHMgdGhlIGhlaWdodCwgbWFrZSB0aGUgdmlldyBsaXF1aWQgKi9cblxufVxuLmZjIC5mYy12aWV3LWhhcm5lc3MtYWN0aXZlID4gLmZjLXZpZXcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH1cbi5mYyAuZmMtY29sLWhlYWRlci1jZWxsLWN1c2hpb24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogeC1icm93c2VyIGZvciB3aGVuIHN0aWNreSAod2hlbiBtdWx0aS10aWVyIGhlYWRlcikgKi9cbiAgICBwYWRkaW5nOiAycHggNHB4O1xuICB9XG4uZmMgLmZjLWJnLWV2ZW50LFxuICAuZmMgLmZjLW5vbi1idXNpbmVzcyxcbiAgLmZjIC5mYy1oaWdobGlnaHQge1xuICAgIC8qIHdpbGwgYWx3YXlzIGhhdmUgYSBoYXJuZXNzIHdpdGggcG9zaXRpb246cmVsYXRpdmUvYWJzb2x1dGUsIHNvIGFic29sdXRlbHkgZXhwYW5kICovXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuLmZjIC5mYy1ub24tYnVzaW5lc3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE1LCAyMTUsIDIxNSwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1ub24tYnVzaW5lc3MtY29sb3IsIHJnYmEoMjE1LCAyMTUsIDIxNSwgMC4zKSk7XG4gIH1cbi5mYyAuZmMtYmctZXZlbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYigxNDMsIDIyMywgMTMwKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1iZy1ldmVudC1jb2xvciwgcmdiKDE0MywgMjIzLCAxMzApKTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgb3BhY2l0eTogdmFyKC0tZmMtYmctZXZlbnQtb3BhY2l0eSwgMC4zKVxuICB9XG4uZmMgLmZjLWJnLWV2ZW50IC5mYy1ldmVudC10aXRsZSB7XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBmb250LXNpemU6IC44NWVtO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mYy1zbWFsbC1mb250LXNpemUsIC44NWVtKTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4uZmMgLmZjLWhpZ2hsaWdodCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxODgsIDIzMiwgMjQxLCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZjLWhpZ2hsaWdodC1jb2xvciwgcmdiYSgxODgsIDIzMiwgMjQxLCAwLjMpKTtcbiAgfVxuLmZjIC5mYy1jZWxsLXNoYWRlZCxcbiAgLmZjIC5mYy1kYXktZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1uZXV0cmFsLWJnLWNvbG9yLCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMykpO1xuICB9XG4vKiBsaW5rIHJlc2V0cyAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuYS5mYy1ldmVudCxcbmEuZmMtZXZlbnQ6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4vKiBjdXJzb3IgKi9cbi5mYy1ldmVudFtocmVmXSxcbi5mYy1ldmVudC5mYy1ldmVudC1kcmFnZ2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4vKiBldmVudCB0ZXh0IGNvbnRlbnQgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mYy1ldmVudCAuZmMtZXZlbnQtbWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gIH1cbi8qIGRyYWdnaW5nICovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmMtZXZlbnQtZHJhZ2dpbmc6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgeyAvKiBNT1VTRSAqL1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gIH1cbi5mYy1ldmVudC1kcmFnZ2luZy5mYy1ldmVudC1zZWxlY3RlZCB7IC8qIFRPVUNIICovXG4gICAgYm94LXNoYWRvdzogMCAycHggN3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuLyogcmVzaXppbmcgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIChzdWJjbGFzc2VzIHNob3VsZCBob25lIHBvc2l0aW9uaW5nIGZvciB0b3VjaCBhbmQgbm9uLXRvdWNoKSAqL1xuLmZjLWV2ZW50IC5mYy1ldmVudC1yZXNpemVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICB9XG4uZmMtZXZlbnQ6aG92ZXIsIC8qIE1PVVNFICovXG4uZmMtZXZlbnQtc2VsZWN0ZWQgeyAvKiBUT1VDSCAqL1xuXG59XG4uZmMtZXZlbnQ6aG92ZXIgLmZjLWV2ZW50LXJlc2l6ZXIsIC5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbi5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplciB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkgLyAyKTtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItd2lkdGg6IHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItZG90LWJvcmRlci13aWR0aCwgMXB4KTtcbiAgICB3aWR0aDogOHB4O1xuICAgIHdpZHRoOiB2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KTtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBoZWlnaHQ6IHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItZG90LXRvdGFsLXdpZHRoLCA4cHgpO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZmMtcGFnZS1iZy1jb2xvciwgI2ZmZilcblxuICAgIC8qIGV4cGFuZCBoaXQgYXJlYSAqL1xuXG4gIH1cbi5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplcjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0yMHB4O1xuICAgICAgbGVmdDogLTIwcHg7XG4gICAgICByaWdodDogLTIwcHg7XG4gICAgICBib3R0b206IC0yMHB4O1xuICAgIH1cbi8qIHNlbGVjdGluZyAoYWx3YXlzIFRPVUNIKSAqL1xuLyogT1IsIGZvY3VzZWQgYnkgdGFiLWluZGV4ICovXG4vKiAoVE9ETzogbWF5YmUgbm90IHRoZSBiZXN0IGZvY3VzLXN0eWxpbmcgZm9yIC5mYy1kYXlncmlkLWRvdC1ldmVudCkgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi5mYy1ldmVudC1zZWxlY3RlZCxcbi5mYy1ldmVudDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMilcblxuICAvKiBleHBhbmQgaGl0IGFyZWEgKHN1YmNsYXNzZXMgc2hvdWxkIGV4cGFuZCkgKi9cblxufVxuLmZjLWV2ZW50LXNlbGVjdGVkOmJlZm9yZSwgLmZjLWV2ZW50OmZvY3VzOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMztcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cbi5mYy1ldmVudC1zZWxlY3RlZCxcbi5mYy1ldmVudDpmb2N1cyB7XG5cbiAgLyogZGltbWVyIGVmZmVjdCAqL1xuXG59XG4uZmMtZXZlbnQtc2VsZWN0ZWQ6YWZ0ZXIsIC5mYy1ldmVudDpmb2N1czphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZjLWV2ZW50LXNlbGVjdGVkLW92ZXJsYXktY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLyogYXNzdW1lIHRoZXJlJ3MgYSBib3JkZXIgb24gYWxsIHNpZGVzLiBvdmVyY29tZSBpdC4gKi9cbiAgICAvKiBzb21ldGltZXMgdGhlcmUncyBOT1QgYSBib3JkZXIsIGluIHdoaWNoIGNhc2UgdGhlIGRpbW1lciB3aWxsIGdvIG92ZXIgKi9cbiAgICAvKiBhbiBhZGphY2VudCBib3JkZXIsIHdoaWNoIGxvb2tzIGZpbmUuICovXG4gICAgdG9wOiAtMXB4O1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgcmlnaHQ6IC0xcHg7XG4gICAgYm90dG9tOiAtMXB4O1xuICB9XG4vKlxuQSBIT1JJWk9OVEFMIGV2ZW50XG4qL1xuLmZjLWgtZXZlbnQgeyAvKiBhbGxvd2VkIHRvIGJlIHRvcC1sZXZlbCAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzM3ODhkODtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmMtZXZlbnQtYm9yZGVyLWNvbG9yLCAjMzc4OGQ4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3ODhkODtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtZXZlbnQtYmctY29sb3IsICMzNzg4ZDgpXG5cbn1cbi5mYy1oLWV2ZW50IC5mYy1ldmVudC1tYWluIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogdmFyKC0tZmMtZXZlbnQtdGV4dC1jb2xvciwgI2ZmZik7XG4gIH1cbi5mYy1oLWV2ZW50IC5mYy1ldmVudC1tYWluLWZyYW1lIHtcbiAgICBkaXNwbGF5OiBmbGV4OyAvKiBmb3IgbWFrZSBmYy1ldmVudC10aXRsZS1jb250YWluZXIgZXhwYW5kICovXG4gIH1cbi5mYy1oLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIGNsaXAgb3ZlcmZsb3cgb24gdGhpcyBlbGVtZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuLmZjLWgtZXZlbnQgLmZjLWV2ZW50LXRpdGxlLWNvbnRhaW5lciB7IC8qIHNlcnZlcyBhcyBhIGNvbnRhaW5lciBmb3IgdGhlIHN0aWNreSBjdXNoaW9uICovXG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIG1pbi13aWR0aDogMDsgLyogaW1wb3J0YW50IGZvciBhbGxvd2luZyB0byBzaHJpbmsgYWxsIHRoZSB3YXkgKi9cbiAgfVxuLmZjLWgtZXZlbnQgLmZjLWV2ZW50LXRpdGxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IC8qIG5lZWQgdGhpcyB0byBiZSBzdGlja3kgY3Jvc3MtYnJvd3NlciAqL1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7IC8qIGZvciBub3QgbWVzc2luZyB1cCBsaW5lLWhlaWdodCAqL1xuICAgIGxlZnQ6IDA7ICAvKiBmb3Igc3RpY2t5ICovXG4gICAgcmlnaHQ6IDA7IC8qIGZvciBzdGlja3kgKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIGNsaXAgb3ZlcmZsb3cgb24gdGhpcyBlbGVtZW50ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuLmZjLWgtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAvKiBleHBhbmQgaGl0IGFyZWEgKi9cbiAgICB0b3A6IC0xMHB4O1xuICAgIGJvdHRvbTogLTEwcHg7XG4gIH1cbi8qIGFkanVzdCBib3JkZXIgYW5kIGJvcmRlci1yYWRpdXMgKGlmIHRoZXJlIGlzIGFueSkgZm9yIG5vbi1zdGFydC9lbmQgKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWJsb2NrLWV2ZW50Om5vdCguZmMtZXZlbnQtc3RhcnQpLFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtYmxvY2stZXZlbnQ6bm90KC5mYy1ldmVudC1lbmQpIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtZGF5Z3JpZC1ibG9jay1ldmVudDpub3QoLmZjLWV2ZW50LWVuZCksXG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtZGF5Z3JpZC1ibG9jay1ldmVudDpub3QoLmZjLWV2ZW50LXN0YXJ0KSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xufVxuLyogcmVzaXplcnMgKi9cbi5mYy1oLWV2ZW50Om5vdCguZmMtZXZlbnQtc2VsZWN0ZWQpIC5mYy1ldmVudC1yZXNpemVyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4cHg7XG4gIHdpZHRoOiB2YXIoLS1mYy1ldmVudC1yZXNpemVyLXRoaWNrbmVzcywgOHB4KTtcbn1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1oLWV2ZW50Om5vdCguZmMtZXZlbnQtc2VsZWN0ZWQpIC5mYy1ldmVudC1yZXNpemVyLXN0YXJ0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWgtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItZW5kIHtcbiAgY3Vyc29yOiB3LXJlc2l6ZTtcbiAgbGVmdDogLTRweDtcbiAgbGVmdDogY2FsYygtMC41ICogdmFyKC0tZmMtZXZlbnQtcmVzaXplci10aGlja25lc3MsIDhweCkpO1xufVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLWgtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItZW5kLFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWgtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItc3RhcnQge1xuICBjdXJzb3I6IGUtcmVzaXplO1xuICByaWdodDogLTRweDtcbiAgcmlnaHQ6IGNhbGMoLTAuNSAqIHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpKTtcbn1cbi8qIHJlc2l6ZXJzIGZvciBUT1VDSCAqL1xuLmZjLWgtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgbWFyZ2luLXRvcDogY2FsYygtMC41ICogdmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkpO1xufVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLWgtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQgLmZjLWV2ZW50LXJlc2l6ZXItc3RhcnQsXG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtaC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplci1lbmQge1xuICBsZWZ0OiAtNHB4O1xuICBsZWZ0OiBjYWxjKC0wLjUgKiB2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSk7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtaC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplci1lbmQsXG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtaC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZCAuZmMtZXZlbnQtcmVzaXplci1zdGFydCB7XG4gIHJpZ2h0OiAtNHB4O1xuICByaWdodDogY2FsYygtMC41ICogdmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkpO1xufVxuLmZjIC5mYy1wb3BvdmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLDAsMCwuMTUpO1xuICB9XG4uZmMgLmZjLXBvcG92ZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4IDRweDtcbiAgfVxuLmZjIC5mYy1wb3BvdmVyLXRpdGxlIHtcbiAgICBtYXJnaW46IDAgMnB4O1xuICB9XG4uZmMgLmZjLXBvcG92ZXItY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtcG9wb3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ib3JkZXItY29sb3IsICNkZGQpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZmMtcGFnZS1iZy1jb2xvciwgI2ZmZik7XG4gIH1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtcG9wb3Zlci1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mYy1uZXV0cmFsLWJnLWNvbG9yLCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMykpO1xuICB9XG4iXX0= */";

/***/ }),

/***/ 15574:
/*!*****************************************************!*\
  !*** ./node_modules/@fullcalendar/daygrid/main.css ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "\n:root {\n  --fc-daygrid-event-dot-width: 8px;\n}\n/* help things clear margins of inner content */\n.fc-daygrid-day-frame,\n.fc-daygrid-day-events,\n.fc-daygrid-event-harness { /* for event top/bottom margins */\n}\n.fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-body { /* a <div> that wraps the table */\n    position: relative;\n    z-index: 1; /* container inner z-index's because <tr>s can't do it */\n  }\n.fc .fc-daygrid-day.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n.fc .fc-daygrid-day-frame {\n    position: relative;\n    min-height: 100%; /* seems to work better than `height` because sets height after rows/cells naturally do it */\n  }\n.fc {\n\n  /* cell top */\n\n}\n.fc .fc-daygrid-day-top {\n    display: flex;\n    flex-direction: row-reverse;\n  }\n.fc .fc-day-other .fc-daygrid-day-top {\n    opacity: 0.3;\n  }\n.fc {\n\n  /* day number (within cell top) */\n\n}\n.fc .fc-daygrid-day-number {\n    position: relative;\n    z-index: 4;\n    padding: 4px;\n  }\n.fc {\n\n  /* event container */\n\n}\n.fc .fc-daygrid-day-events {\n    margin-top: 1px; /* needs to be margin, not padding, so that available cell height can be computed */\n  }\n.fc {\n\n  /* positioning for balanced vs natural */\n\n}\n.fc .fc-daygrid-body-balanced .fc-daygrid-day-events {\n      position: absolute;\n      left: 0;\n      right: 0;\n    }\n.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {\n      position: relative; /* for containing abs positioned event harnesses */\n      min-height: 2em; /* in addition to being a min-height during natural height, equalizes the heights a little bit */\n    }\n.fc .fc-daygrid-body-natural { /* can coexist with -unbalanced */\n  }\n.fc .fc-daygrid-body-natural .fc-daygrid-day-events {\n      margin-bottom: 1em;\n    }\n.fc {\n\n  /* event harness */\n\n}\n.fc .fc-daygrid-event-harness {\n    position: relative;\n  }\n.fc .fc-daygrid-event-harness-abs {\n    position: absolute;\n    top: 0; /* fallback coords for when cannot yet be computed */\n    left: 0; /* */\n    right: 0; /* */\n  }\n.fc .fc-daygrid-bg-harness {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n  }\n.fc {\n\n  /* bg content */\n\n}\n.fc .fc-daygrid-day-bg .fc-non-business { z-index: 1 }\n.fc .fc-daygrid-day-bg .fc-bg-event { z-index: 2 }\n.fc .fc-daygrid-day-bg .fc-highlight { z-index: 3 }\n.fc {\n\n  /* events */\n\n}\n.fc .fc-daygrid-event {\n    z-index: 6;\n    margin-top: 1px;\n  }\n.fc .fc-daygrid-event.fc-event-mirror {\n    z-index: 7;\n  }\n.fc {\n\n  /* cell bottom (within day-events) */\n\n}\n.fc .fc-daygrid-day-bottom {\n    font-size: .85em;\n    padding: 2px 3px 0\n  }\n.fc .fc-daygrid-day-bottom:before {\n  content: \"\";\n  clear: both;\n  display: table; }\n.fc .fc-daygrid-more-link {\n    position: relative;\n    z-index: 4;\n    cursor: pointer;\n  }\n.fc {\n\n  /* week number (within frame) */\n\n}\n.fc .fc-daygrid-week-number {\n    position: absolute;\n    z-index: 5;\n    top: 0;\n    padding: 2px;\n    min-width: 1.5em;\n    text-align: center;\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    color: #808080;\n    color: #808080;\n    color: var(--fc-neutral-text-color, #808080);\n  }\n.fc {\n\n  /* popover */\n\n}\n.fc .fc-more-popover .fc-popover-body {\n    min-width: 220px;\n    padding: 10px;\n  }\n.fc-direction-ltr .fc-daygrid-event.fc-event-start,\n.fc-direction-rtl .fc-daygrid-event.fc-event-end {\n  margin-left: 2px;\n}\n.fc-direction-ltr .fc-daygrid-event.fc-event-end,\n.fc-direction-rtl .fc-daygrid-event.fc-event-start {\n  margin-right: 2px;\n}\n.fc-direction-ltr .fc-daygrid-week-number {\n    left: 0;\n    border-radius: 0 0 3px 0;\n  }\n.fc-direction-rtl .fc-daygrid-week-number {\n    right: 0;\n    border-radius: 0 0 0 3px;\n  }\n.fc-liquid-hack .fc-daygrid-day-frame {\n    position: static; /* will cause inner absolute stuff to expand to <td> */\n  }\n.fc-daygrid-event { /* make root-level, because will be dragged-and-dropped outside of a component root */\n  position: relative; /* for z-indexes assigned later */\n  white-space: nowrap;\n  border-radius: 3px; /* dot event needs this to when selected */\n  font-size: .85em;\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n}\n/* --- the rectangle (\"block\") style of event --- */\n.fc-daygrid-block-event .fc-event-time {\n    font-weight: bold;\n  }\n.fc-daygrid-block-event .fc-event-time,\n  .fc-daygrid-block-event .fc-event-title {\n    padding: 1px;\n  }\n/* --- the dot style of event --- */\n.fc-daygrid-dot-event {\n  display: flex;\n  align-items: center;\n  padding: 2px 0\n\n}\n.fc-daygrid-dot-event .fc-event-title {\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-width: 0; /* important for allowing to shrink all the way */\n    overflow: hidden;\n    font-weight: bold;\n  }\n.fc-daygrid-dot-event:hover,\n  .fc-daygrid-dot-event.fc-event-mirror {\n    background: rgba(0, 0, 0, 0.1);\n  }\n.fc-daygrid-dot-event.fc-event-selected:before {\n    /* expand hit area */\n    top: -10px;\n    bottom: -10px;\n  }\n.fc-daygrid-event-dot { /* the actual dot */\n  margin: 0 4px;\n  box-sizing: content-box;\n  width: 0;\n  height: 0;\n  border: 4px solid #3788d8;\n  border: calc(8px / 2) solid #3788d8;\n  border: calc(var(--fc-daygrid-event-dot-width, 8px) / 2) solid var(--fc-event-border-color, #3788d8);\n  border-radius: 4px;\n  border-radius: calc(8px / 2);\n  border-radius: calc(var(--fc-daygrid-event-dot-width, 8px) / 2);\n}\n/* --- spacing between time and title --- */\n.fc-direction-ltr .fc-daygrid-event .fc-event-time {\n    margin-right: 3px;\n  }\n.fc-direction-rtl .fc-daygrid-event .fc-event-time {\n    margin-left: 3px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBLCtDQUErQztBQUMvQzs7NEJBRTRCLGlDQUFpQztBQUM3RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUU7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBRTtBQUNsQix1QkFBdUIsaUNBQWlDO0lBQ3BELGtCQUFrQjtJQUNsQixVQUFVLEVBQUUsd0RBQXdEO0VBQ3RFO0FBQ0Y7TUFDTSwwQ0FBMEM7TUFDMUMsMENBQW9FO01BQXBFLG9FQUFvRTtJQUN0RTtBQUNKO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFFLDRGQUE0RjtFQUNoSDtBQUNGOztFQUVFLGFBQWE7O0FBRWY7QUFDQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7RUFDN0I7QUFDRjtJQUNJLFlBQVk7RUFDZDtBQUNGOztFQUVFLGlDQUFpQzs7QUFFbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtFQUNkO0FBQ0Y7O0VBRUUsb0JBQW9COztBQUV0QjtBQUNBO0lBQ0ksZUFBZSxFQUFFLG1GQUFtRjtFQUN0RztBQUNGOztFQUVFLHdDQUF3Qzs7QUFFMUM7QUFDQTtNQUNNLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtJQUNWO0FBQ0o7TUFDTSxrQkFBa0IsRUFBRSxrREFBa0Q7TUFDdEUsZUFBZSxFQUFFLGdHQUFnRztJQUNuSDtBQUNKLCtCQUErQixpQ0FBaUM7RUFDOUQ7QUFDRjtNQUNNLGtCQUFrQjtJQUNwQjtBQUNKOztFQUVFLGtCQUFrQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU0sRUFBRSxvREFBb0Q7SUFDNUQsT0FBTyxFQUFFLElBQUk7SUFDYixRQUFRLEVBQUUsSUFBSTtFQUNoQjtBQUNGO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0VBQ1g7QUFDRjs7RUFFRSxlQUFlOztBQUVqQjtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JELHNDQUFzQyxXQUFXO0FBQ2pELHVDQUF1QyxXQUFXO0FBQ2xEOztFQUVFLFdBQVc7O0FBRWI7QUFDQTtJQUNJLFVBQVU7SUFDVixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxVQUFVO0VBQ1o7QUFDRjs7RUFFRSxvQ0FBb0M7O0FBRXRDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEI7RUFDRjtBQUNGO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjLEVBQUU7QUFDbEI7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7QUFDRjs7RUFFRSwrQkFBK0I7O0FBRWpDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsMENBQXNFO0lBQXRFLHNFQUFzRTtJQUN0RSxjQUFjO0lBQ2QsY0FBNEM7SUFBNUMsNENBQTRDO0VBQzlDO0FBQ0Y7O0VBRUUsWUFBWTs7QUFFZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjtBQUNGOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksT0FBTztJQUNQLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksUUFBUTtJQUNSLHdCQUF3QjtFQUMxQjtBQUNGO0lBQ0ksZ0JBQWdCLEVBQUUsc0RBQXNEO0VBQzFFO0FBQ0Ysb0JBQW9CLHFGQUFxRjtFQUN2RyxrQkFBa0IsRUFBRSxpQ0FBaUM7RUFDckQsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFFLDBDQUEwQztFQUM5RCxnQkFBZ0I7RUFDaEIsZ0JBQTJDO0VBQTNDLDJDQUEyQztBQUM3QztBQUNBLG1EQUFtRDtBQUNuRDtJQUNJLGlCQUFpQjtFQUNuQjtBQUNGOztJQUVJLFlBQVk7RUFDZDtBQUNGLG1DQUFtQztBQUNuQztFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkI7O0FBRUY7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWSxFQUFFLGlEQUFpRDtJQUMvRCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0lBRUksOEJBQThCO0VBQ2hDO0FBQ0Y7SUFDSSxvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLGFBQWE7RUFDZjtBQUNGLHdCQUF3QixtQkFBbUI7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixtQ0FBb0c7RUFBcEcsb0dBQW9HO0VBQ3BHLGtCQUFrQjtFQUNsQiw0QkFBK0Q7RUFBL0QsK0RBQStEO0FBQ2pFO0FBQ0EsMkNBQTJDO0FBQzNDO0lBQ0ksaUJBQWlCO0VBQ25CO0FBQ0Y7SUFDSSxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpyb290IHtcbiAgLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aDogOHB4O1xufVxuLyogaGVscCB0aGluZ3MgY2xlYXIgbWFyZ2lucyBvZiBpbm5lciBjb250ZW50ICovXG4uZmMtZGF5Z3JpZC1kYXktZnJhbWUsXG4uZmMtZGF5Z3JpZC1kYXktZXZlbnRzLFxuLmZjLWRheWdyaWQtZXZlbnQtaGFybmVzcyB7IC8qIGZvciBldmVudCB0b3AvYm90dG9tIG1hcmdpbnMgKi9cbn1cbi5mYy1kYXlncmlkLWRheS1mcmFtZTpiZWZvcmUsIC5mYy1kYXlncmlkLWRheS1ldmVudHM6YmVmb3JlLCAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiB0YWJsZTsgfVxuLmZjLWRheWdyaWQtZGF5LWZyYW1lOmFmdGVyLCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzOmFmdGVyLCAuZmMtZGF5Z3JpZC1ldmVudC1oYXJuZXNzOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG4uZmMgLmZjLWRheWdyaWQtYm9keSB7IC8qIGEgPGRpdj4gdGhhdCB3cmFwcyB0aGUgdGFibGUgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTsgLyogY29udGFpbmVyIGlubmVyIHotaW5kZXgncyBiZWNhdXNlIDx0cj5zIGNhbid0IGRvIGl0ICovXG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXkuZmMtZGF5LXRvZGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMjAsIDQwLCAwLjE1KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLXRvZGF5LWJnLWNvbG9yLCByZ2JhKDI1NSwgMjIwLCA0MCwgMC4xNSkpO1xuICAgIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktZnJhbWUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlOyAvKiBzZWVtcyB0byB3b3JrIGJldHRlciB0aGFuIGBoZWlnaHRgIGJlY2F1c2Ugc2V0cyBoZWlnaHQgYWZ0ZXIgcm93cy9jZWxscyBuYXR1cmFsbHkgZG8gaXQgKi9cbiAgfVxuLmZjIHtcblxuICAvKiBjZWxsIHRvcCAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtZGF5LXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIH1cbi5mYyAuZmMtZGF5LW90aGVyIC5mYy1kYXlncmlkLWRheS10b3Age1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuLmZjIHtcblxuICAvKiBkYXkgbnVtYmVyICh3aXRoaW4gY2VsbCB0b3ApICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktbnVtYmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogNDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbi5mYyB7XG5cbiAgLyogZXZlbnQgY29udGFpbmVyICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxcHg7IC8qIG5lZWRzIHRvIGJlIG1hcmdpbiwgbm90IHBhZGRpbmcsIHNvIHRoYXQgYXZhaWxhYmxlIGNlbGwgaGVpZ2h0IGNhbiBiZSBjb21wdXRlZCAqL1xuICB9XG4uZmMge1xuXG4gIC8qIHBvc2l0aW9uaW5nIGZvciBiYWxhbmNlZCB2cyBuYXR1cmFsICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LWJhbGFuY2VkIC5mYy1kYXlncmlkLWRheS1ldmVudHMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbi5mYyAuZmMtZGF5Z3JpZC1ib2R5LXVuYmFsYW5jZWQgLmZjLWRheWdyaWQtZGF5LWV2ZW50cyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciBjb250YWluaW5nIGFicyBwb3NpdGlvbmVkIGV2ZW50IGhhcm5lc3NlcyAqL1xuICAgICAgbWluLWhlaWdodDogMmVtOyAvKiBpbiBhZGRpdGlvbiB0byBiZWluZyBhIG1pbi1oZWlnaHQgZHVyaW5nIG5hdHVyYWwgaGVpZ2h0LCBlcXVhbGl6ZXMgdGhlIGhlaWdodHMgYSBsaXR0bGUgYml0ICovXG4gICAgfVxuLmZjIC5mYy1kYXlncmlkLWJvZHktbmF0dXJhbCB7IC8qIGNhbiBjb2V4aXN0IHdpdGggLXVuYmFsYW5jZWQgKi9cbiAgfVxuLmZjIC5mYy1kYXlncmlkLWJvZHktbmF0dXJhbCAuZmMtZGF5Z3JpZC1kYXktZXZlbnRzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICB9XG4uZmMge1xuXG4gIC8qIGV2ZW50IGhhcm5lc3MgKi9cblxufVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LWhhcm5lc3Mge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LWhhcm5lc3MtYWJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwOyAvKiBmYWxsYmFjayBjb29yZHMgZm9yIHdoZW4gY2Fubm90IHlldCBiZSBjb21wdXRlZCAqL1xuICAgIGxlZnQ6IDA7IC8qICovXG4gICAgcmlnaHQ6IDA7IC8qICovXG4gIH1cbi5mYyAuZmMtZGF5Z3JpZC1iZy1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgfVxuLmZjIHtcblxuICAvKiBiZyBjb250ZW50ICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYmcgLmZjLW5vbi1idXNpbmVzcyB7IHotaW5kZXg6IDEgfVxuLmZjIC5mYy1kYXlncmlkLWRheS1iZyAuZmMtYmctZXZlbnQgeyB6LWluZGV4OiAyIH1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYmcgLmZjLWhpZ2hsaWdodCB7IHotaW5kZXg6IDMgfVxuLmZjIHtcblxuICAvKiBldmVudHMgKi9cblxufVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50IHtcbiAgICB6LWluZGV4OiA2O1xuICAgIG1hcmdpbi10b3A6IDFweDtcbiAgfVxuLmZjIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LW1pcnJvciB7XG4gICAgei1pbmRleDogNztcbiAgfVxuLmZjIHtcblxuICAvKiBjZWxsIGJvdHRvbSAod2l0aGluIGRheS1ldmVudHMpICovXG5cbn1cbi5mYyAuZmMtZGF5Z3JpZC1kYXktYm90dG9tIHtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIHBhZGRpbmc6IDJweCAzcHggMFxuICB9XG4uZmMgLmZjLWRheWdyaWQtZGF5LWJvdHRvbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBjbGVhcjogYm90aDtcbiAgZGlzcGxheTogdGFibGU7IH1cbi5mYyAuZmMtZGF5Z3JpZC1tb3JlLWxpbmsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuLmZjIHtcblxuICAvKiB3ZWVrIG51bWJlciAod2l0aGluIGZyYW1lKSAqL1xuXG59XG4uZmMgLmZjLWRheWdyaWQtd2Vlay1udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA1O1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtYmctY29sb3IsIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKSk7XG4gICAgY29sb3I6ICM4MDgwODA7XG4gICAgY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtdGV4dC1jb2xvciwgIzgwODA4MCk7XG4gIH1cbi5mYyB7XG5cbiAgLyogcG9wb3ZlciAqL1xuXG59XG4uZmMgLmZjLW1vcmUtcG9wb3ZlciAuZmMtcG9wb3Zlci1ib2R5IHtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQuZmMtZXZlbnQtZW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LWVuZCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLWV2ZW50LmZjLWV2ZW50LXN0YXJ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtZGF5Z3JpZC13ZWVrLW51bWJlciB7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDA7XG4gIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1kYXlncmlkLXdlZWstbnVtYmVyIHtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAzcHg7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtZGF5Z3JpZC1kYXktZnJhbWUge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7IC8qIHdpbGwgY2F1c2UgaW5uZXIgYWJzb2x1dGUgc3R1ZmYgdG8gZXhwYW5kIHRvIDx0ZD4gKi9cbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQgeyAvKiBtYWtlIHJvb3QtbGV2ZWwsIGJlY2F1c2Ugd2lsbCBiZSBkcmFnZ2VkLWFuZC1kcm9wcGVkIG91dHNpZGUgb2YgYSBjb21wb25lbnQgcm9vdCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciB6LWluZGV4ZXMgYXNzaWduZWQgbGF0ZXIgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYm9yZGVyLXJhZGl1czogM3B4OyAvKiBkb3QgZXZlbnQgbmVlZHMgdGhpcyB0byB3aGVuIHNlbGVjdGVkICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG59XG4vKiAtLS0gdGhlIHJlY3RhbmdsZSAoXCJibG9ja1wiKSBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtYmxvY2stZXZlbnQgLmZjLWV2ZW50LXRpbWUsXG4gIC5mYy1kYXlncmlkLWJsb2NrLWV2ZW50IC5mYy1ldmVudC10aXRsZSB7XG4gICAgcGFkZGluZzogMXB4O1xuICB9XG4vKiAtLS0gdGhlIGRvdCBzdHlsZSBvZiBldmVudCAtLS0gKi9cbi5mYy1kYXlncmlkLWRvdC1ldmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJweCAwXG5cbn1cbi5mYy1kYXlncmlkLWRvdC1ldmVudCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4td2lkdGg6IDA7IC8qIGltcG9ydGFudCBmb3IgYWxsb3dpbmcgdG8gc2hyaW5rIGFsbCB0aGUgd2F5ICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuLmZjLWRheWdyaWQtZG90LWV2ZW50OmhvdmVyLFxuICAuZmMtZGF5Z3JpZC1kb3QtZXZlbnQuZmMtZXZlbnQtbWlycm9yIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbi5mYy1kYXlncmlkLWRvdC1ldmVudC5mYy1ldmVudC1zZWxlY3RlZDpiZWZvcmUge1xuICAgIC8qIGV4cGFuZCBoaXQgYXJlYSAqL1xuICAgIHRvcDogLTEwcHg7XG4gICAgYm90dG9tOiAtMTBweDtcbiAgfVxuLmZjLWRheWdyaWQtZXZlbnQtZG90IHsgLyogdGhlIGFjdHVhbCBkb3QgKi9cbiAgbWFyZ2luOiAwIDRweDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlcjogNHB4IHNvbGlkICMzNzg4ZDg7XG4gIGJvcmRlcjogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpIHNvbGlkIHZhcigtLWZjLWV2ZW50LWJvcmRlci1jb2xvciwgIzM3ODhkOCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1mYy1kYXlncmlkLWV2ZW50LWRvdC13aWR0aCwgOHB4KSAvIDIpO1xufVxuLyogLS0tIHNwYWNpbmcgYmV0d2VlbiB0aW1lIGFuZCB0aXRsZSAtLS0gKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1kYXlncmlkLWV2ZW50IC5mYy1ldmVudC10aW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWRheWdyaWQtZXZlbnQgLmZjLWV2ZW50LXRpbWUge1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 98179:
/*!**************************************************!*\
  !*** ./node_modules/@fullcalendar/list/main.css ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n:root {\n  --fc-list-event-dot-width: 10px;\n  --fc-list-event-hover-bg-color: #f5f5f5;\n}\n.fc-theme-standard .fc-list {\n    border: 1px solid #ddd;\n    border: 1px solid #ddd;\n    border: 1px solid var(--fc-border-color, #ddd);\n  }\n.fc {\n\n  /* message when no events */\n\n}\n.fc .fc-list-empty {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center; /* vertically aligns fc-list-empty-inner */\n  }\n.fc .fc-list-empty-cushion {\n    margin: 5em 0;\n  }\n.fc {\n\n  /* table within the scroller */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-table {\n    width: 100%;\n    border-style: hidden; /* kill outer border on theme */\n  }\n.fc .fc-list-table tr > * {\n    border-left: 0;\n    border-right: 0;\n  }\n.fc .fc-list-sticky .fc-list-day > * { /* the cells */\n      position: -webkit-sticky;\n      position: sticky;\n      top: 0;\n      background: #fff;\n      background: #fff;\n      background: var(--fc-page-bg-color, #fff); /* for when headers are styled to be transparent and sticky */\n    }\n.fc {\n\n  /* only exists for aria reasons, hide for non-screen-readers */\n\n}\n.fc .fc-list-table thead {\n    position: absolute;\n    left: -10000px;\n  }\n.fc {\n\n  /* the table's border-style:hidden gets confused by hidden thead. force-hide top border of first cell */\n\n}\n.fc .fc-list-table tbody > tr:first-child th {\n    border-top: 0;\n  }\n.fc .fc-list-table th {\n    padding: 0; /* uses an inner-wrapper instead... */\n  }\n.fc .fc-list-table td,\n  .fc .fc-list-day-cushion {\n    padding: 8px 14px;\n  }\n.fc {\n\n\n  /* date heading rows */\n  /* ---------------------------------------------------------------------------------------------------- */\n\n}\n.fc .fc-list-day-cushion:after {\n  content: \"\";\n  clear: both;\n  display: table; /* clear floating */\n    }\n.fc-theme-standard .fc-list-day-cushion {\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: rgba(208, 208, 208, 0.3);\n    background-color: var(--fc-neutral-bg-color, rgba(208, 208, 208, 0.3));\n  }\n.fc-direction-ltr .fc-list-day-text,\n.fc-direction-rtl .fc-list-day-side-text {\n  float: left;\n}\n.fc-direction-ltr .fc-list-day-side-text,\n.fc-direction-rtl .fc-list-day-text {\n  float: right;\n}\n/* make the dot closer to the event title */\n.fc-direction-ltr .fc-list-table .fc-list-event-graphic { padding-right: 0 }\n.fc-direction-rtl .fc-list-table .fc-list-event-graphic { padding-left: 0 }\n.fc .fc-list-event.fc-event-forced-url {\n    cursor: pointer; /* whole row will seem clickable */\n  }\n.fc .fc-list-event:hover td {\n    background-color: #f5f5f5;\n    background-color: #f5f5f5;\n    background-color: var(--fc-list-event-hover-bg-color, #f5f5f5);\n  }\n.fc {\n\n  /* shrink certain cols */\n\n}\n.fc .fc-list-event-graphic,\n  .fc .fc-list-event-time {\n    white-space: nowrap;\n    width: 1px;\n  }\n.fc .fc-list-event-dot {\n    display: inline-block;\n    box-sizing: content-box;\n    width: 0;\n    height: 0;\n    border: 5px solid #3788d8;\n    border: calc(10px / 2) solid #3788d8;\n    border: calc(var(--fc-list-event-dot-width, 10px) / 2) solid var(--fc-event-border-color, #3788d8);\n    border-radius: 5px;\n    border-radius: calc(10px / 2);\n    border-radius: calc(var(--fc-list-event-dot-width, 10px) / 2);\n  }\n.fc {\n\n  /* reset <a> styling */\n\n}\n.fc .fc-list-event-title a {\n    color: inherit;\n    text-decoration: none;\n  }\n.fc {\n\n  /* underline link when hovering over any part of row */\n\n}\n.fc .fc-list-event.fc-event-forced-url:hover a {\n    text-decoration: underline;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLCtCQUErQjtFQUMvQix1Q0FBdUM7QUFDekM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBOEM7SUFBOUMsOENBQThDO0VBQ2hEO0FBQ0Y7O0VBRUUsMkJBQTJCOztBQUU3QjtBQUNBO0lBQ0ksMENBQTBDO0lBQzFDLDBDQUFzRTtJQUF0RSxzRUFBc0U7SUFDdEUsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUUsMENBQTBDO0VBQ2pFO0FBQ0Y7SUFDSSxhQUFhO0VBQ2Y7QUFDRjs7RUFFRSw4QkFBOEI7RUFDOUIseUdBQXlHOztBQUUzRztBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQixFQUFFLCtCQUErQjtFQUN2RDtBQUNGO0lBQ0ksY0FBYztJQUNkLGVBQWU7RUFDakI7QUFDRix1Q0FBdUMsY0FBYztNQUMvQyx3QkFBZ0I7TUFBaEIsZ0JBQWdCO01BQ2hCLE1BQU07TUFDTixnQkFBZ0I7TUFDaEIsZ0JBQXlDO01BQXpDLHlDQUF5QyxFQUFFLDZEQUE2RDtJQUMxRztBQUNKOztFQUVFLDhEQUE4RDs7QUFFaEU7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0VBQ2hCO0FBQ0Y7O0VBRUUsdUdBQXVHOztBQUV6RztBQUNBO0lBQ0ksYUFBYTtFQUNmO0FBQ0Y7SUFDSSxVQUFVLEVBQUUscUNBQXFDO0VBQ25EO0FBQ0Y7O0lBRUksaUJBQWlCO0VBQ25CO0FBQ0Y7OztFQUdFLHNCQUFzQjtFQUN0Qix5R0FBeUc7O0FBRTNHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWMsRUFBRSxtQkFBbUI7SUFDakM7QUFDSjtJQUNJLDBDQUEwQztJQUMxQywwQ0FBc0U7SUFBdEUsc0VBQXNFO0VBQ3hFO0FBQ0Y7O0VBRUUsV0FBVztBQUNiO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0EsMkNBQTJDO0FBQzNDLDBEQUEwRCxpQkFBaUI7QUFDM0UsMERBQTBELGdCQUFnQjtBQUMxRTtJQUNJLGVBQWUsRUFBRSxrQ0FBa0M7RUFDckQ7QUFDRjtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBOEQ7SUFBOUQsOERBQThEO0VBQ2hFO0FBQ0Y7O0VBRUUsd0JBQXdCOztBQUUxQjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCx5QkFBeUI7SUFDekIsb0NBQWtHO0lBQWxHLGtHQUFrRztJQUNsRyxrQkFBa0I7SUFDbEIsNkJBQTZEO0lBQTdELDZEQUE2RDtFQUMvRDtBQUNGOztFQUVFLHNCQUFzQjs7QUFFeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7RUFDdkI7QUFDRjs7RUFFRSxzREFBc0Q7O0FBRXhEO0FBQ0E7SUFDSSwwQkFBMEI7RUFDNUIiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpyb290IHtcbiAgLS1mYy1saXN0LWV2ZW50LWRvdC13aWR0aDogMTBweDtcbiAgLS1mYy1saXN0LWV2ZW50LWhvdmVyLWJnLWNvbG9yOiAjZjVmNWY1O1xufVxuLmZjLXRoZW1lLXN0YW5kYXJkIC5mYy1saXN0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZjLWJvcmRlci1jb2xvciwgI2RkZCk7XG4gIH1cbi5mYyB7XG5cbiAgLyogbWVzc2FnZSB3aGVuIG5vIGV2ZW50cyAqL1xuXG59XG4uZmMgLmZjLWxpc3QtZW1wdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1uZXV0cmFsLWJnLWNvbG9yLCByZ2JhKDIwOCwgMjA4LCAyMDgsIDAuMykpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIHZlcnRpY2FsbHkgYWxpZ25zIGZjLWxpc3QtZW1wdHktaW5uZXIgKi9cbiAgfVxuLmZjIC5mYy1saXN0LWVtcHR5LWN1c2hpb24ge1xuICAgIG1hcmdpbjogNWVtIDA7XG4gIH1cbi5mYyB7XG5cbiAgLyogdGFibGUgd2l0aGluIHRoZSBzY3JvbGxlciAqL1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47IC8qIGtpbGwgb3V0ZXIgYm9yZGVyIG9uIHRoZW1lICovXG4gIH1cbi5mYyAuZmMtbGlzdC10YWJsZSB0ciA+ICoge1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgfVxuLmZjIC5mYy1saXN0LXN0aWNreSAuZmMtbGlzdC1kYXkgPiAqIHsgLyogdGhlIGNlbGxzICovXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgdG9wOiAwO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWZjLXBhZ2UtYmctY29sb3IsICNmZmYpOyAvKiBmb3Igd2hlbiBoZWFkZXJzIGFyZSBzdHlsZWQgdG8gYmUgdHJhbnNwYXJlbnQgYW5kIHN0aWNreSAqL1xuICAgIH1cbi5mYyB7XG5cbiAgLyogb25seSBleGlzdHMgZm9yIGFyaWEgcmVhc29ucywgaGlkZSBmb3Igbm9uLXNjcmVlbi1yZWFkZXJzICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB0aGVhZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xMDAwMHB4O1xuICB9XG4uZmMge1xuXG4gIC8qIHRoZSB0YWJsZSdzIGJvcmRlci1zdHlsZTpoaWRkZW4gZ2V0cyBjb25mdXNlZCBieSBoaWRkZW4gdGhlYWQuIGZvcmNlLWhpZGUgdG9wIGJvcmRlciBvZiBmaXJzdCBjZWxsICovXG5cbn1cbi5mYyAuZmMtbGlzdC10YWJsZSB0Ym9keSA+IHRyOmZpcnN0LWNoaWxkIHRoIHtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG4uZmMgLmZjLWxpc3QtdGFibGUgdGgge1xuICAgIHBhZGRpbmc6IDA7IC8qIHVzZXMgYW4gaW5uZXItd3JhcHBlciBpbnN0ZWFkLi4uICovXG4gIH1cbi5mYyAuZmMtbGlzdC10YWJsZSB0ZCxcbiAgLmZjIC5mYy1saXN0LWRheS1jdXNoaW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgfVxuLmZjIHtcblxuXG4gIC8qIGRhdGUgaGVhZGluZyByb3dzICovXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxufVxuLmZjIC5mYy1saXN0LWRheS1jdXNoaW9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlOyAvKiBjbGVhciBmbG9hdGluZyAqL1xuICAgIH1cbi5mYy10aGVtZS1zdGFuZGFyZCAuZmMtbGlzdC1kYXktY3VzaGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLW5ldXRyYWwtYmctY29sb3IsIHJnYmEoMjA4LCAyMDgsIDIwOCwgMC4zKSk7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1saXN0LWRheS10ZXh0LFxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLWxpc3QtZGF5LXNpZGUtdGV4dCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLWxpc3QtZGF5LXNpZGUtdGV4dCxcbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1saXN0LWRheS10ZXh0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLyogbWFrZSB0aGUgZG90IGNsb3NlciB0byB0aGUgZXZlbnQgdGl0bGUgKi9cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy1saXN0LXRhYmxlIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMgeyBwYWRkaW5nLXJpZ2h0OiAwIH1cbi5mYy1kaXJlY3Rpb24tcnRsIC5mYy1saXN0LXRhYmxlIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMgeyBwYWRkaW5nLWxlZnQ6IDAgfVxuLmZjIC5mYy1saXN0LWV2ZW50LmZjLWV2ZW50LWZvcmNlZC11cmwge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogd2hvbGUgcm93IHdpbGwgc2VlbSBjbGlja2FibGUgKi9cbiAgfVxuLmZjIC5mYy1saXN0LWV2ZW50OmhvdmVyIHRkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZjLWxpc3QtZXZlbnQtaG92ZXItYmctY29sb3IsICNmNWY1ZjUpO1xuICB9XG4uZmMge1xuXG4gIC8qIHNocmluayBjZXJ0YWluIGNvbHMgKi9cblxufVxuLmZjIC5mYy1saXN0LWV2ZW50LWdyYXBoaWMsXG4gIC5mYyAuZmMtbGlzdC1ldmVudC10aW1lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxcHg7XG4gIH1cbi5mYyAuZmMtbGlzdC1ldmVudC1kb3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyOiA1cHggc29saWQgIzM3ODhkODtcbiAgICBib3JkZXI6IGNhbGModmFyKC0tZmMtbGlzdC1ldmVudC1kb3Qtd2lkdGgsIDEwcHgpIC8gMikgc29saWQgdmFyKC0tZmMtZXZlbnQtYm9yZGVyLWNvbG9yLCAjMzc4OGQ4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyh2YXIoLS1mYy1saXN0LWV2ZW50LWRvdC13aWR0aCwgMTBweCkgLyAyKTtcbiAgfVxuLmZjIHtcblxuICAvKiByZXNldCA8YT4gc3R5bGluZyAqL1xuXG59XG4uZmMgLmZjLWxpc3QtZXZlbnQtdGl0bGUgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4uZmMge1xuXG4gIC8qIHVuZGVybGluZSBsaW5rIHdoZW4gaG92ZXJpbmcgb3ZlciBhbnkgcGFydCBvZiByb3cgKi9cblxufVxuLmZjIC5mYy1saXN0LWV2ZW50LmZjLWV2ZW50LWZvcmNlZC11cmw6aG92ZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbiJdfQ== */";

/***/ }),

/***/ 91659:
/*!******************************************************!*\
  !*** ./node_modules/@fullcalendar/timegrid/main.css ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*\nA VERTICAL event\n*/\n\n.fc-v-event { /* allowed to be top-level */\n  display: block;\n  border: 1px solid #3788d8;\n  border: 1px solid #3788d8;\n  border: 1px solid var(--fc-event-border-color, #3788d8);\n  background-color: #3788d8;\n  background-color: #3788d8;\n  background-color: var(--fc-event-bg-color, #3788d8)\n\n}\n\n.fc-v-event .fc-event-main {\n    color: #fff;\n    color: #fff;\n    color: var(--fc-event-text-color, #fff);\n    height: 100%;\n  }\n\n.fc-v-event .fc-event-main-frame {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n\n.fc-v-event .fc-event-time {\n    flex-grow: 0;\n    flex-shrink: 0;\n    max-height: 100%;\n    overflow: hidden;\n  }\n\n.fc-v-event .fc-event-title-container { /* a container for the sticky cushion */\n    flex-grow: 1;\n    flex-shrink: 1;\n    min-height: 0; /* important for allowing to shrink all the way */\n  }\n\n.fc-v-event .fc-event-title { /* will have fc-sticky on it */\n    top: 0;\n    bottom: 0;\n    max-height: 100%; /* clip overflow */\n    overflow: hidden;\n  }\n\n.fc-v-event:not(.fc-event-start) {\n    border-top-width: 0;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n.fc-v-event:not(.fc-event-end) {\n    border-bottom-width: 0;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n\n.fc-v-event.fc-event-selected:before {\n    /* expand hit area */\n    left: -10px;\n    right: -10px;\n  }\n\n.fc-v-event {\n\n  /* resizer (mouse AND touch) */\n\n}\n\n.fc-v-event .fc-event-resizer-start {\n    cursor: n-resize;\n  }\n\n.fc-v-event .fc-event-resizer-end {\n    cursor: s-resize;\n  }\n\n.fc-v-event {\n\n  /* resizer for MOUSE */\n\n}\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer {\n      height: 8px;\n      height: 8px;\n      height: var(--fc-event-resizer-thickness, 8px);\n      left: 0;\n      right: 0;\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-thickness, 8px) / -2);\n    }\n\n.fc-v-event {\n\n  /* resizer for TOUCH (when event is \"selected\") */\n\n}\n\n.fc-v-event.fc-event-selected .fc-event-resizer {\n      left: 50%;\n      margin-left: -4px;\n      margin-left: calc(8px / -2);\n      margin-left: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-start {\n      top: -4px;\n      top: calc(8px / -2);\n      top: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc-v-event.fc-event-selected .fc-event-resizer-end {\n      bottom: -4px;\n      bottom: calc(8px / -2);\n      bottom: calc(var(--fc-event-resizer-dot-total-width, 8px) / -2);\n    }\n\n.fc .fc-timegrid .fc-daygrid-body { /* the all-day daygrid within the timegrid view */\n    z-index: 2; /* put above the timegrid-body so that more-popover is above everything. TODO: better solution */\n  }\n\n.fc .fc-timegrid-divider {\n    padding: 0 0 2px; /* browsers get confused when you set height. use padding instead */\n  }\n\n.fc .fc-timegrid-body {\n    position: relative;\n    z-index: 1; /* scope the z-indexes of slots and cols */\n    min-height: 100%; /* fill height always, even when slat table doesn't grow */\n  }\n\n.fc .fc-timegrid-axis-chunk { /* for advanced ScrollGrid */\n    position: relative /* offset parent for now-indicator-container */\n\n  }\n\n.fc .fc-timegrid-axis-chunk > table {\n      position: relative;\n      z-index: 1; /* above the now-indicator-container */\n    }\n\n.fc .fc-timegrid-slots {\n    position: relative;\n    z-index: 1;\n  }\n\n.fc .fc-timegrid-slot { /* a <td> */\n    height: 1.5em;\n    border-bottom: 0 /* each cell owns its top border */\n  }\n\n.fc .fc-timegrid-slot:empty:before {\n      content: '\\00a0'; /* make sure there's at least an empty space to create height for height syncing */\n    }\n\n.fc .fc-timegrid-slot-minor {\n    border-top-style: dotted;\n  }\n\n.fc .fc-timegrid-slot-label-cushion {\n    display: inline-block;\n    white-space: nowrap;\n  }\n\n.fc .fc-timegrid-slot-label {\n    vertical-align: middle; /* vertical align the slots */\n  }\n\n.fc {\n\n\n  /* slots AND axis cells (top-left corner of view including the \"all-day\" text) */\n\n}\n\n.fc .fc-timegrid-axis-cushion,\n  .fc .fc-timegrid-slot-label-cushion {\n    padding: 0 4px;\n  }\n\n.fc {\n\n\n  /* axis cells (top-left corner of view including the \"all-day\" text) */\n  /* vertical align is more complicated, uses flexbox */\n\n}\n\n.fc .fc-timegrid-axis-frame-liquid {\n    height: 100%; /* will need liquid-hack in FF */\n  }\n\n.fc .fc-timegrid-axis-frame {\n    overflow: hidden;\n    display: flex;\n    align-items: center; /* vertical align */\n    justify-content: flex-end; /* horizontal align. matches text-align below */\n  }\n\n.fc .fc-timegrid-axis-cushion {\n    max-width: 60px; /* limits the width of the \"all-day\" text */\n    flex-shrink: 0; /* allows text to expand how it normally would, regardless of constrained width */\n  }\n\n.fc-direction-ltr .fc-timegrid-slot-label-frame {\n    text-align: right;\n  }\n\n.fc-direction-rtl .fc-timegrid-slot-label-frame {\n    text-align: left;\n  }\n\n.fc-liquid-hack .fc-timegrid-axis-frame-liquid {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  }\n\n.fc .fc-timegrid-col.fc-day-today {\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: rgba(255, 220, 40, 0.15);\n      background-color: var(--fc-today-bg-color, rgba(255, 220, 40, 0.15));\n    }\n\n.fc .fc-timegrid-col-frame {\n    min-height: 100%; /* liquid-hack is below */\n    position: relative;\n  }\n\n.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame {\n  height: auto;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n    }\n\n.fc-media-screen .fc-timegrid-cols {\n    position: absolute; /* no z-index. children will decide and go above slots */\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0\n  }\n\n.fc-media-screen .fc-timegrid-cols > table {\n      height: 100%;\n    }\n\n.fc-media-screen .fc-timegrid-col-bg,\n  .fc-media-screen .fc-timegrid-col-events,\n  .fc-media-screen .fc-timegrid-now-indicator-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* bg */\n\n}\n\n.fc .fc-timegrid-col-bg {\n    z-index: 2; /* TODO: kill */\n  }\n\n.fc .fc-timegrid-col-bg .fc-non-business { z-index: 1 }\n\n.fc .fc-timegrid-col-bg .fc-bg-event { z-index: 2 }\n\n.fc .fc-timegrid-col-bg .fc-highlight { z-index: 3 }\n\n.fc .fc-timegrid-bg-harness {\n    position: absolute; /* top/bottom will be set by JS */\n    left: 0;\n    right: 0;\n  }\n\n.fc {\n\n  /* fg events */\n  /* (the mirror segs are put into a separate container with same classname, */\n  /* and they must be after the normal seg container to appear at a higher z-index) */\n\n}\n\n.fc .fc-timegrid-col-events {\n    z-index: 3;\n    /* child event segs have z-indexes that are scoped within this div */\n  }\n\n.fc {\n\n  /* now indicator */\n\n}\n\n.fc .fc-timegrid-now-indicator-container {\n    bottom: 0;\n    overflow: hidden; /* don't let overflow of lines/arrows cause unnecessary scrolling */\n    /* z-index is set on the individual elements */\n  }\n\n.fc-direction-ltr .fc-timegrid-col-events {\n    margin: 0 2.5% 0 2px;\n  }\n\n.fc-direction-rtl .fc-timegrid-col-events {\n    margin: 0 2px 0 2.5%;\n  }\n\n.fc-timegrid-event-harness {\n  position: absolute /* top/left/right/bottom will all be set by JS */\n}\n\n.fc-timegrid-event-harness > .fc-timegrid-event {\n    position: absolute; /* absolute WITHIN the harness */\n    top: 0; /* for when not yet positioned */\n    bottom: 0; /* \" */\n    left: 0;\n    right: 0;\n  }\n\n.fc-timegrid-event-harness-inset .fc-timegrid-event,\n.fc-timegrid-event.fc-event-mirror,\n.fc-timegrid-more-link {\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px #fff;\n  box-shadow: 0px 0px 0px 1px var(--fc-page-bg-color, #fff);\n}\n\n.fc-timegrid-event,\n.fc-timegrid-more-link { /* events need to be root */\n  font-size: .85em;\n  font-size: .85em;\n  font-size: var(--fc-small-font-size, .85em);\n  border-radius: 3px;\n}\n\n.fc-timegrid-event { /* events need to be root */\n  margin-bottom: 1px /* give some space from bottom */\n}\n\n.fc-timegrid-event .fc-event-main {\n    padding: 1px 1px 0;\n  }\n\n.fc-timegrid-event .fc-event-time {\n    white-space: nowrap;\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em);\n    margin-bottom: 1px;\n  }\n\n.fc-timegrid-event-short .fc-event-main-frame {\n    flex-direction: row;\n    overflow: hidden;\n  }\n\n.fc-timegrid-event-short .fc-event-time:after {\n    content: '\\00a0-\\00a0'; /* dash surrounded by non-breaking spaces */\n  }\n\n.fc-timegrid-event-short .fc-event-title {\n    font-size: .85em;\n    font-size: .85em;\n    font-size: var(--fc-small-font-size, .85em)\n  }\n\n.fc-timegrid-more-link { /* does NOT inherit from fc-timegrid-event */\n  position: absolute;\n  z-index: 9999; /* hack */\n  color: inherit;\n  color: inherit;\n  color: var(--fc-more-link-text-color, inherit);\n  background: #d0d0d0;\n  background: #d0d0d0;\n  background: var(--fc-more-link-bg-color, #d0d0d0);\n  cursor: pointer;\n  margin-bottom: 1px; /* match space below fc-timegrid-event */\n}\n\n.fc-timegrid-more-link-inner { /* has fc-sticky */\n  padding: 3px 2px;\n  top: 0;\n}\n\n.fc-direction-ltr .fc-timegrid-more-link {\n    right: 0;\n  }\n\n.fc-direction-rtl .fc-timegrid-more-link {\n    left: 0;\n  }\n\n.fc {\n\n  /* line */\n\n}\n\n.fc .fc-timegrid-now-indicator-line {\n    position: absolute;\n    z-index: 4;\n    left: 0;\n    right: 0;\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n    border-width: 1px 0 0;\n  }\n\n.fc {\n\n  /* arrow */\n\n}\n\n.fc .fc-timegrid-now-indicator-arrow {\n    position: absolute;\n    z-index: 4;\n    margin-top: -5px; /* vertically center on top coordinate */\n    border-style: solid;\n    border-color: red;\n    border-color: red;\n    border-color: var(--fc-now-indicator-color, red);\n  }\n\n.fc-direction-ltr .fc-timegrid-now-indicator-arrow {\n    left: 0;\n\n    /* triangle pointing right. TODO: mixin */\n    border-width: 5px 0 5px 6px;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n.fc-direction-rtl .fc-timegrid-now-indicator-arrow {\n    right: 0;\n\n    /* triangle pointing left. TODO: mixin */\n    border-width: 5px 6px 5px 0;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7Q0FFQzs7QUFFRCxjQUFjLDRCQUE0QjtFQUN4QyxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHlCQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQseUJBQXlCO0VBQ3pCLHlCQUFrRDtFQUFsRDs7QUFFRjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUF1QztJQUF2Qyx1Q0FBdUM7SUFDdkMsWUFBWTtFQUNkOztBQUVGO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0FBRUY7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUYsd0NBQXdDLHVDQUF1QztJQUMzRSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWEsRUFBRSxpREFBaUQ7RUFDbEU7O0FBRUYsOEJBQThCLDhCQUE4QjtJQUN4RCxNQUFNO0lBQ04sU0FBUztJQUNULGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDBCQUEwQjtFQUM1Qjs7QUFFRjtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9COztBQUVGO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUY7O0VBRUUsOEJBQThCOztBQUVoQzs7QUFFQTtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGdCQUFnQjtFQUNsQjs7QUFFRjs7RUFFRSxzQkFBc0I7O0FBRXhCOztBQUVBO01BQ00sV0FBVztNQUNYLFdBQThDO01BQTlDLDhDQUE4QztNQUM5QyxPQUFPO01BQ1AsUUFBUTtJQUNWOztBQUVKO01BQ00sU0FBUztNQUNULG1CQUFzRDtNQUF0RCxzREFBc0Q7SUFDeEQ7O0FBRUo7TUFDTSxZQUFZO01BQ1osc0JBQXlEO01BQXpELHlEQUF5RDtJQUMzRDs7QUFFSjs7RUFFRSxpREFBaUQ7O0FBRW5EOztBQUVBO01BQ00sU0FBUztNQUNULGlCQUFpQjtNQUNqQiwyQkFBb0U7TUFBcEUsb0VBQW9FO0lBQ3RFOztBQUVKO01BQ00sU0FBUztNQUNULG1CQUE0RDtNQUE1RCw0REFBNEQ7SUFDOUQ7O0FBRUo7TUFDTSxZQUFZO01BQ1osc0JBQStEO01BQS9ELCtEQUErRDtJQUNqRTs7QUFDSixvQ0FBb0MsaURBQWlEO0lBQ2pGLFVBQVUsRUFBRSxnR0FBZ0c7RUFDOUc7O0FBQ0Y7SUFDSSxnQkFBZ0IsRUFBRSxtRUFBbUU7RUFDdkY7O0FBQ0Y7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVSxFQUFFLDBDQUEwQztJQUN0RCxnQkFBZ0IsRUFBRSwwREFBMEQ7RUFDOUU7O0FBQ0YsOEJBQThCLDRCQUE0QjtJQUN0RCxpQkFBaUIsRUFBRSw4Q0FBOEM7O0VBRW5FOztBQUNGO01BQ00sa0JBQWtCO01BQ2xCLFVBQVUsRUFBRSxzQ0FBc0M7SUFDcEQ7O0FBQ0o7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztBQUNGLHdCQUF3QixXQUFXO0lBQy9CLGFBQWE7SUFDYixlQUFlLEVBQUUsa0NBQWtDO0VBQ3JEOztBQUNGO01BQ00sZ0JBQWdCLEVBQUUsa0ZBQWtGO0lBQ3RHOztBQUNKO0lBQ0ksd0JBQXdCO0VBQzFCOztBQUNGO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtFQUNyQjs7QUFDRjtJQUNJLHNCQUFzQixFQUFFLDZCQUE2QjtFQUN2RDs7QUFDRjs7O0VBR0UsZ0ZBQWdGOztBQUVsRjs7QUFDQTs7SUFFSSxjQUFjO0VBQ2hCOztBQUNGOzs7RUFHRSxzRUFBc0U7RUFDdEUscURBQXFEOztBQUV2RDs7QUFDQTtJQUNJLFlBQVksRUFBRSxnQ0FBZ0M7RUFDaEQ7O0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQixFQUFFLG1CQUFtQjtJQUN4Qyx5QkFBeUIsRUFBRSwrQ0FBK0M7RUFDNUU7O0FBQ0Y7SUFDSSxlQUFlLEVBQUUsMkNBQTJDO0lBQzVELGNBQWMsRUFBRSxpRkFBaUY7RUFDbkc7O0FBQ0Y7SUFDSSxpQkFBaUI7RUFDbkI7O0FBQ0Y7SUFDSSxnQkFBZ0I7RUFDbEI7O0FBQ0Y7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULE9BQU87RUFDUDs7QUFDRjtNQUNNLDBDQUEwQztNQUMxQywwQ0FBb0U7TUFBcEUsb0VBQW9FO0lBQ3RFOztBQUNKO0lBQ0ksZ0JBQWdCLEVBQUUseUJBQXlCO0lBQzNDLGtCQUFrQjtFQUNwQjs7QUFDRjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztJQUNMOztBQUNKO0lBQ0ksa0JBQWtCLEVBQUUsd0RBQXdEO0lBQzVFLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSO0VBQ0Y7O0FBQ0Y7TUFDTSxZQUFZO0lBQ2Q7O0FBQ0o7OztJQUdJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7RUFDVjs7QUFDRjs7RUFFRSxPQUFPOztBQUVUOztBQUNBO0lBQ0ksVUFBVSxFQUFFLGVBQWU7RUFDN0I7O0FBQ0YsMkNBQTJDLFdBQVc7O0FBQ3RELHVDQUF1QyxXQUFXOztBQUNsRCx3Q0FBd0MsV0FBVzs7QUFDbkQ7SUFDSSxrQkFBa0IsRUFBRSxpQ0FBaUM7SUFDckQsT0FBTztJQUNQLFFBQVE7RUFDVjs7QUFDRjs7RUFFRSxjQUFjO0VBQ2QsNEVBQTRFO0VBQzVFLG1GQUFtRjs7QUFFckY7O0FBQ0E7SUFDSSxVQUFVO0lBQ1Ysb0VBQW9FO0VBQ3RFOztBQUNGOztFQUVFLGtCQUFrQjs7QUFFcEI7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCLEVBQUUsbUVBQW1FO0lBQ3JGLDhDQUE4QztFQUNoRDs7QUFDRjtJQUNJLG9CQUFvQjtFQUN0Qjs7QUFDRjtJQUNJLG9CQUFvQjtFQUN0Qjs7QUFDRjtFQUNFLGlCQUFpQixFQUFFLGdEQUFnRDtBQUNyRTs7QUFDQTtJQUNJLGtCQUFrQixFQUFFLGdDQUFnQztJQUNwRCxNQUFNLEVBQUUsZ0NBQWdDO0lBQ3hDLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0FBQ0Y7OztFQUdFLGdDQUFnQztFQUNoQyxnQ0FBeUQ7RUFBekQseURBQXlEO0FBQzNEOztBQUNBO3lCQUN5QiwyQkFBMkI7RUFDbEQsZ0JBQWdCO0VBQ2hCLGdCQUEyQztFQUEzQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0FBQ3BCOztBQUNBLHFCQUFxQiwyQkFBMkI7RUFDOUMsaUJBQWlCLEVBQUUsZ0NBQWdDO0FBQ3JEOztBQUNBO0lBQ0ksa0JBQWtCO0VBQ3BCOztBQUNGO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBMkM7SUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtFQUNwQjs7QUFDRjtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0FBQ0Y7SUFDSSxzQkFBc0IsRUFBRSwyQ0FBMkM7RUFDckU7O0FBQ0Y7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQTBDO0lBQTFDO0VBQ0Y7O0FBQ0YseUJBQXlCLDRDQUE0QztFQUNuRSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFFLFNBQVM7RUFDeEIsY0FBYztFQUNkLGNBQThDO0VBQTlDLDhDQUE4QztFQUM5QyxtQkFBbUI7RUFDbkIsbUJBQWlEO0VBQWpELGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUUsd0NBQXdDO0FBQzlEOztBQUNBLCtCQUErQixrQkFBa0I7RUFDL0MsZ0JBQWdCO0VBQ2hCLE1BQU07QUFDUjs7QUFDQTtJQUNJLFFBQVE7RUFDVjs7QUFDRjtJQUNJLE9BQU87RUFDVDs7QUFDRjs7RUFFRSxTQUFTOztBQUVYOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWdEO0lBQWhELGdEQUFnRDtJQUNoRCxxQkFBcUI7RUFDdkI7O0FBQ0Y7O0VBRUUsVUFBVTs7QUFFWjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCLEVBQUUsd0NBQXdDO0lBQzFELG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWdEO0lBQWhELGdEQUFnRDtFQUNsRDs7QUFDRjtJQUNJLE9BQU87O0lBRVAseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0VBQ2xDOztBQUNGO0lBQ0ksUUFBUTs7SUFFUix3Q0FBd0M7SUFDeEMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7RUFDbEMiLCJmaWxlIjoibWFpbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG5BIFZFUlRJQ0FMIGV2ZW50XG4qL1xuXG4uZmMtdi1ldmVudCB7IC8qIGFsbG93ZWQgdG8gYmUgdG9wLWxldmVsICovXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzc4OGQ4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mYy1ldmVudC1ib3JkZXItY29sb3IsICMzNzg4ZDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc4OGQ4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mYy1ldmVudC1iZy1jb2xvciwgIzM3ODhkOClcblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHZhcigtLWZjLWV2ZW50LXRleHQtY29sb3IsICNmZmYpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtbWFpbi1mcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtdGl0bGUtY29udGFpbmVyIHsgLyogYSBjb250YWluZXIgZm9yIHRoZSBzdGlja3kgY3VzaGlvbiAqL1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBtaW4taGVpZ2h0OiAwOyAvKiBpbXBvcnRhbnQgZm9yIGFsbG93aW5nIHRvIHNocmluayBhbGwgdGhlIHdheSAqL1xuICB9XG5cbi5mYy12LWV2ZW50IC5mYy1ldmVudC10aXRsZSB7IC8qIHdpbGwgaGF2ZSBmYy1zdGlja3kgb24gaXQgKi9cbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7IC8qIGNsaXAgb3ZlcmZsb3cgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5mYy12LWV2ZW50Om5vdCguZmMtZXZlbnQtc3RhcnQpIHtcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1lbmQpIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQ6YmVmb3JlIHtcbiAgICAvKiBleHBhbmQgaGl0IGFyZWEgKi9cbiAgICBsZWZ0OiAtMTBweDtcbiAgICByaWdodDogLTEwcHg7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgKG1vdXNlIEFORCB0b3VjaCkgKi9cblxufVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1zdGFydCB7XG4gICAgY3Vyc29yOiBuLXJlc2l6ZTtcbiAgfVxuXG4uZmMtdi1ldmVudCAuZmMtZXZlbnQtcmVzaXplci1lbmQge1xuICAgIGN1cnNvcjogcy1yZXNpemU7XG4gIH1cblxuLmZjLXYtZXZlbnQge1xuXG4gIC8qIHJlc2l6ZXIgZm9yIE1PVVNFICovXG5cbn1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBoZWlnaHQ6IHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItc3RhcnQge1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgdG9wOiBjYWxjKHZhcigtLWZjLWV2ZW50LXJlc2l6ZXItdGhpY2tuZXNzLCA4cHgpIC8gLTIpO1xuICAgIH1cblxuLmZjLXYtZXZlbnQ6bm90KC5mYy1ldmVudC1zZWxlY3RlZCkgLmZjLWV2ZW50LXJlc2l6ZXItZW5kIHtcbiAgICAgIGJvdHRvbTogLTRweDtcbiAgICAgIGJvdHRvbTogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLXRoaWNrbmVzcywgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50IHtcblxuICAvKiByZXNpemVyIGZvciBUT1VDSCAod2hlbiBldmVudCBpcyBcInNlbGVjdGVkXCIpICovXG5cbn1cblxuLmZjLXYtZXZlbnQuZmMtZXZlbnQtc2VsZWN0ZWQgLmZjLWV2ZW50LXJlc2l6ZXIge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLXN0YXJ0IHtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIHRvcDogY2FsYyh2YXIoLS1mYy1ldmVudC1yZXNpemVyLWRvdC10b3RhbC13aWR0aCwgOHB4KSAvIC0yKTtcbiAgICB9XG5cbi5mYy12LWV2ZW50LmZjLWV2ZW50LXNlbGVjdGVkIC5mYy1ldmVudC1yZXNpemVyLWVuZCB7XG4gICAgICBib3R0b206IC00cHg7XG4gICAgICBib3R0b206IGNhbGModmFyKC0tZmMtZXZlbnQtcmVzaXplci1kb3QtdG90YWwtd2lkdGgsIDhweCkgLyAtMik7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZCAuZmMtZGF5Z3JpZC1ib2R5IHsgLyogdGhlIGFsbC1kYXkgZGF5Z3JpZCB3aXRoaW4gdGhlIHRpbWVncmlkIHZpZXcgKi9cbiAgICB6LWluZGV4OiAyOyAvKiBwdXQgYWJvdmUgdGhlIHRpbWVncmlkLWJvZHkgc28gdGhhdCBtb3JlLXBvcG92ZXIgaXMgYWJvdmUgZXZlcnl0aGluZy4gVE9ETzogYmV0dGVyIHNvbHV0aW9uICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtZGl2aWRlciB7XG4gICAgcGFkZGluZzogMCAwIDJweDsgLyogYnJvd3NlcnMgZ2V0IGNvbmZ1c2VkIHdoZW4geW91IHNldCBoZWlnaHQuIHVzZSBwYWRkaW5nIGluc3RlYWQgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTsgLyogc2NvcGUgdGhlIHotaW5kZXhlcyBvZiBzbG90cyBhbmQgY29scyAqL1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGZpbGwgaGVpZ2h0IGFsd2F5cywgZXZlbiB3aGVuIHNsYXQgdGFibGUgZG9lc24ndCBncm93ICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtYXhpcy1jaHVuayB7IC8qIGZvciBhZHZhbmNlZCBTY3JvbGxHcmlkICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIC8qIG9mZnNldCBwYXJlbnQgZm9yIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG5cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWNodW5rID4gdGFibGUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTsgLyogYWJvdmUgdGhlIG5vdy1pbmRpY2F0b3ItY29udGFpbmVyICovXG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1zbG90cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdCB7IC8qIGEgPHRkPiAqL1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMCAvKiBlYWNoIGNlbGwgb3ducyBpdHMgdG9wIGJvcmRlciAqL1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3Q6ZW1wdHk6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdcXDAwYTAnOyAvKiBtYWtlIHN1cmUgdGhlcmUncyBhdCBsZWFzdCBhbiBlbXB0eSBzcGFjZSB0byBjcmVhdGUgaGVpZ2h0IGZvciBoZWlnaHQgc3luY2luZyAqL1xuICAgIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1taW5vciB7XG4gICAgYm9yZGVyLXRvcC1zdHlsZTogZG90dGVkO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtY3VzaGlvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtc2xvdC1sYWJlbCB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogdmVydGljYWwgYWxpZ24gdGhlIHNsb3RzICovXG4gIH1cbi5mYyB7XG5cblxuICAvKiBzbG90cyBBTkQgYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLWF4aXMtY3VzaGlvbixcbiAgLmZjIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWN1c2hpb24ge1xuICAgIHBhZGRpbmc6IDAgNHB4O1xuICB9XG4uZmMge1xuXG5cbiAgLyogYXhpcyBjZWxscyAodG9wLWxlZnQgY29ybmVyIG9mIHZpZXcgaW5jbHVkaW5nIHRoZSBcImFsbC1kYXlcIiB0ZXh0KSAqL1xuICAvKiB2ZXJ0aWNhbCBhbGlnbiBpcyBtb3JlIGNvbXBsaWNhdGVkLCB1c2VzIGZsZXhib3ggKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lLWxpcXVpZCB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiB3aWxsIG5lZWQgbGlxdWlkLWhhY2sgaW4gRkYgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWZyYW1lIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogdmVydGljYWwgYWxpZ24gKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyAvKiBob3Jpem9udGFsIGFsaWduLiBtYXRjaGVzIHRleHQtYWxpZ24gYmVsb3cgKi9cbiAgfVxuLmZjIC5mYy10aW1lZ3JpZC1heGlzLWN1c2hpb24ge1xuICAgIG1heC13aWR0aDogNjBweDsgLyogbGltaXRzIHRoZSB3aWR0aCBvZiB0aGUgXCJhbGwtZGF5XCIgdGV4dCAqL1xuICAgIGZsZXgtc2hyaW5rOiAwOyAvKiBhbGxvd3MgdGV4dCB0byBleHBhbmQgaG93IGl0IG5vcm1hbGx5IHdvdWxkLCByZWdhcmRsZXNzIG9mIGNvbnN0cmFpbmVkIHdpZHRoICovXG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1zbG90LWxhYmVsLWZyYW1lIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLXNsb3QtbGFiZWwtZnJhbWUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbi5mYy1saXF1aWQtaGFjayAuZmMtdGltZWdyaWQtYXhpcy1mcmFtZS1saXF1aWQge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB9XG4uZmMgLmZjLXRpbWVncmlkLWNvbC5mYy1kYXktdG9kYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIyMCwgNDAsIDAuMTUpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmMtdG9kYXktYmctY29sb3IsIHJnYmEoMjU1LCAyMjAsIDQwLCAwLjE1KSk7XG4gICAgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IC8qIGxpcXVpZC1oYWNrIGlzIGJlbG93ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4uZmMtbWVkaWEtc2NyZWVuLmZjLWxpcXVpZC1oYWNrIC5mYy10aW1lZ3JpZC1jb2wtZnJhbWUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICAgIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogbm8gei1pbmRleC4gY2hpbGRyZW4gd2lsbCBkZWNpZGUgYW5kIGdvIGFib3ZlIHNsb3RzICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwXG4gIH1cbi5mYy1tZWRpYS1zY3JlZW4gLmZjLXRpbWVncmlkLWNvbHMgPiB0YWJsZSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuLmZjLW1lZGlhLXNjcmVlbiAuZmMtdGltZWdyaWQtY29sLWJnLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzLFxuICAuZmMtbWVkaWEtc2NyZWVuIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGJnICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIHtcbiAgICB6LWluZGV4OiAyOyAvKiBUT0RPOiBraWxsICovXG4gIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1ub24tYnVzaW5lc3MgeyB6LWluZGV4OiAxIH1cbi5mYyAuZmMtdGltZWdyaWQtY29sLWJnIC5mYy1iZy1ldmVudCB7IHotaW5kZXg6IDIgfVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtYmcgLmZjLWhpZ2hsaWdodCB7IHotaW5kZXg6IDMgfVxuLmZjIC5mYy10aW1lZ3JpZC1iZy1oYXJuZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIHRvcC9ib3R0b20gd2lsbCBiZSBzZXQgYnkgSlMgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICB9XG4uZmMge1xuXG4gIC8qIGZnIGV2ZW50cyAqL1xuICAvKiAodGhlIG1pcnJvciBzZWdzIGFyZSBwdXQgaW50byBhIHNlcGFyYXRlIGNvbnRhaW5lciB3aXRoIHNhbWUgY2xhc3NuYW1lLCAqL1xuICAvKiBhbmQgdGhleSBtdXN0IGJlIGFmdGVyIHRoZSBub3JtYWwgc2VnIGNvbnRhaW5lciB0byBhcHBlYXIgYXQgYSBoaWdoZXIgei1pbmRleCkgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1jb2wtZXZlbnRzIHtcbiAgICB6LWluZGV4OiAzO1xuICAgIC8qIGNoaWxkIGV2ZW50IHNlZ3MgaGF2ZSB6LWluZGV4ZXMgdGhhdCBhcmUgc2NvcGVkIHdpdGhpbiB0aGlzIGRpdiAqL1xuICB9XG4uZmMge1xuXG4gIC8qIG5vdyBpbmRpY2F0b3IgKi9cblxufVxuLmZjIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWNvbnRhaW5lciB7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIGRvbid0IGxldCBvdmVyZmxvdyBvZiBsaW5lcy9hcnJvd3MgY2F1c2UgdW5uZWNlc3Nhcnkgc2Nyb2xsaW5nICovXG4gICAgLyogei1pbmRleCBpcyBzZXQgb24gdGhlIGluZGl2aWR1YWwgZWxlbWVudHMgKi9cbiAgfVxuLmZjLWRpcmVjdGlvbi1sdHIgLmZjLXRpbWVncmlkLWNvbC1ldmVudHMge1xuICAgIG1hcmdpbjogMCAyLjUlIDAgMnB4O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtY29sLWV2ZW50cyB7XG4gICAgbWFyZ2luOiAwIDJweCAwIDIuNSU7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlIC8qIHRvcC9sZWZ0L3JpZ2h0L2JvdHRvbSB3aWxsIGFsbCBiZSBzZXQgYnkgSlMgKi9cbn1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzID4gLmZjLXRpbWVncmlkLWV2ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGFic29sdXRlIFdJVEhJTiB0aGUgaGFybmVzcyAqL1xuICAgIHRvcDogMDsgLyogZm9yIHdoZW4gbm90IHlldCBwb3NpdGlvbmVkICovXG4gICAgYm90dG9tOiAwOyAvKiBcIiAqL1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1oYXJuZXNzLWluc2V0IC5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1ldmVudC5mYy1ldmVudC1taXJyb3IsXG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCB2YXIoLS1mYy1wYWdlLWJnLWNvbG9yLCAjZmZmKTtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCxcbi5mYy10aW1lZ3JpZC1tb3JlLWxpbmsgeyAvKiBldmVudHMgbmVlZCB0byBiZSByb290ICovXG4gIGZvbnQtc2l6ZTogLjg1ZW07XG4gIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5mYy10aW1lZ3JpZC1ldmVudCB7IC8qIGV2ZW50cyBuZWVkIHRvIGJlIHJvb3QgKi9cbiAgbWFyZ2luLWJvdHRvbTogMXB4IC8qIGdpdmUgc29tZSBzcGFjZSBmcm9tIGJvdHRvbSAqL1xufVxuLmZjLXRpbWVncmlkLWV2ZW50IC5mYy1ldmVudC1tYWluIHtcbiAgICBwYWRkaW5nOiAxcHggMXB4IDA7XG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudCAuZmMtZXZlbnQtdGltZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmb250LXNpemU6IC44NWVtO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZmMtc21hbGwtZm9udC1zaXplLCAuODVlbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB9XG4uZmMtdGltZWdyaWQtZXZlbnQtc2hvcnQgLmZjLWV2ZW50LW1haW4tZnJhbWUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuLmZjLXRpbWVncmlkLWV2ZW50LXNob3J0IC5mYy1ldmVudC10aW1lOmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGEwLVxcMDBhMCc7IC8qIGRhc2ggc3Vycm91bmRlZCBieSBub24tYnJlYWtpbmcgc3BhY2VzICovXG4gIH1cbi5mYy10aW1lZ3JpZC1ldmVudC1zaG9ydCAuZmMtZXZlbnQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogLjg1ZW07XG4gICAgZm9udC1zaXplOiB2YXIoLS1mYy1zbWFsbC1mb250LXNpemUsIC44NWVtKVxuICB9XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rIHsgLyogZG9lcyBOT1QgaW5oZXJpdCBmcm9tIGZjLXRpbWVncmlkLWV2ZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5OTsgLyogaGFjayAqL1xuICBjb2xvcjogaW5oZXJpdDtcbiAgY29sb3I6IHZhcigtLWZjLW1vcmUtbGluay10ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgYmFja2dyb3VuZDogI2QwZDBkMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmMtbW9yZS1saW5rLWJnLWNvbG9yLCAjZDBkMGQwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7IC8qIG1hdGNoIHNwYWNlIGJlbG93IGZjLXRpbWVncmlkLWV2ZW50ICovXG59XG4uZmMtdGltZWdyaWQtbW9yZS1saW5rLWlubmVyIHsgLyogaGFzIGZjLXN0aWNreSAqL1xuICBwYWRkaW5nOiAzcHggMnB4O1xuICB0b3A6IDA7XG59XG4uZmMtZGlyZWN0aW9uLWx0ciAuZmMtdGltZWdyaWQtbW9yZS1saW5rIHtcbiAgICByaWdodDogMDtcbiAgfVxuLmZjLWRpcmVjdGlvbi1ydGwgLmZjLXRpbWVncmlkLW1vcmUtbGluayB7XG4gICAgbGVmdDogMDtcbiAgfVxuLmZjIHtcblxuICAvKiBsaW5lICovXG5cbn1cbi5mYyAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogNDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mYy1ub3ctaW5kaWNhdG9yLWNvbG9yLCByZWQpO1xuICAgIGJvcmRlci13aWR0aDogMXB4IDAgMDtcbiAgfVxuLmZjIHtcblxuICAvKiBhcnJvdyAqL1xuXG59XG4uZmMgLmZjLXRpbWVncmlkLW5vdy1pbmRpY2F0b3ItYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA0O1xuICAgIG1hcmdpbi10b3A6IC01cHg7IC8qIHZlcnRpY2FsbHkgY2VudGVyIG9uIHRvcCBjb29yZGluYXRlICovXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHJlZDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWZjLW5vdy1pbmRpY2F0b3ItY29sb3IsIHJlZCk7XG4gIH1cbi5mYy1kaXJlY3Rpb24tbHRyIC5mYy10aW1lZ3JpZC1ub3ctaW5kaWNhdG9yLWFycm93IHtcbiAgICBsZWZ0OiAwO1xuXG4gICAgLyogdHJpYW5nbGUgcG9pbnRpbmcgcmlnaHQuIFRPRE86IG1peGluICovXG4gICAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNnB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4uZmMtZGlyZWN0aW9uLXJ0bCAuZmMtdGltZWdyaWQtbm93LWluZGljYXRvci1hcnJvdyB7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICAvKiB0cmlhbmdsZSBwb2ludGluZyBsZWZ0LiBUT0RPOiBtaXhpbiAqL1xuICAgIGJvcmRlci13aWR0aDogNXB4IDZweCA1cHggMDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_calendar_calendar_module_ts.js.map
"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["src_app_task_task_module_ts"],{

/***/ 40588:
/*!*********************************************!*\
  !*** ./src/app/task/task-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskRoutingModule": () => (/* binding */ TaskRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.component */ 505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _task_component__WEBPACK_IMPORTED_MODULE_0__.TaskComponent
    }
];
class TaskRoutingModule {
}
TaskRoutingModule.ɵfac = function TaskRoutingModule_Factory(t) { return new (t || TaskRoutingModule)(); };
TaskRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TaskRoutingModule });
TaskRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TaskRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 505:
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);




















function TaskComponent_button_38_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_38_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r6.deleteTask(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TaskComponent_button_39_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_39_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.saveTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TaskComponent_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function TaskComponent_div_113_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 66);
} }
function TaskComponent_div_113_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_downward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_div_113_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_upward ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskComponent_div_113_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { done: a0 }; };
const _c1 = function (a0, a1, a2) { return { "task-low": a0, "task-high": a1, "task-normal": a2 }; };
function TaskComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_div_113_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const task_r12 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r17.taskClick(task_r12, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div")(2, "div", 55)(3, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "drag_indicator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_div_113_Template_mat_checkbox_change_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const task_r12 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r19.toggle(task_r12, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskComponent_div_113_div_6_Template, 1, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TaskComponent_div_113_mat_icon_10_Template, 2, 0, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TaskComponent_div_113_mat_icon_11_Template, 2, 0, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TaskComponent_div_113_mat_icon_12_Template, 2, 0, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const task_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", !!task_r12.done);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, task_r12.done));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r12.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](15, _c1, task_r12.priority == "Low", task_r12.priority == "High", task_r12.priority == "Normal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "Low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "High");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (task_r12 == null ? null : task_r12.priority) == "Normal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", task_r12.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", task_r12.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", task_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, task_r12.due_date));
} }
class TaskComponent {
    constructor(fb, snackBar) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('side');
        this.showFiller = false;
        this.isNewEvent = false;
        this.tasks = [
            {
                id: '1',
                img: 'assets/images/user/user1.jpg',
                name: 'Sarah Smith',
                title: 'Develop angular project',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2020',
            },
            {
                id: '2',
                img: 'assets/images/user/user2.jpg',
                name: 'John Deo',
                title: 'File not found exception solve',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '3',
                img: 'assets/images/user/user3.jpg',
                name: 'Jens Brincker',
                title: 'Test project and find bug',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
            {
                id: '4',
                img: 'assets/images/user/user4.jpg',
                name: 'Mark Hay',
                title: 'Image not found error',
                done: true,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2020',
            },
            {
                id: '5',
                img: 'assets/images/user/user5.jpg',
                name: 'Anthony Davie',
                title: 'Solve client error in form',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '6',
                img: 'assets/images/user/user6.jpg',
                name: 'Sue Woodger',
                title: 'Tab button is flickering on hover',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2017',
            },
            {
                id: '7',
                img: 'assets/images/user/user7.jpg',
                name: 'John Deo',
                title: 'Chart responsive issue solve',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '8',
                img: 'assets/images/user/user8.jpg',
                name: 'Jens Brincker',
                title: 'Web service data load issue',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2020',
            },
            {
                id: '9',
                img: 'assets/images/user/user9.jpg',
                name: 'Sarah Smith',
                title: 'Java compile error',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
            {
                id: '10',
                img: 'assets/images/user/user10.jpg',
                name: 'Mark Hay',
                title: 'Integrate project with spring boot',
                done: true,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2019',
            },
            {
                id: '11',
                img: 'assets/images/user/user1.jpg',
                name: 'John Deo',
                title: 'Update latest angular version',
                done: false,
                note: 'note details',
                priority: 'High',
                due_date: '2/12/2017',
            },
            {
                id: '12',
                img: 'assets/images/user/user2.jpg',
                name: 'Jens Brincker',
                title: 'Integrate lazy loading on project',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2020',
            },
            {
                id: '13',
                img: 'assets/images/user/user3.jpg',
                name: 'Mark Hay',
                title: 'js file not load properly',
                done: true,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2019',
            },
            {
                id: '14',
                img: 'assets/images/user/user4.jpg',
                name: 'Anthony Davie',
                title: 'need to change color of table',
                done: false,
                note: 'note details',
                priority: 'Normal',
                due_date: '2/12/2017',
            },
            {
                id: '15',
                img: 'assets/images/user/user5.jpg',
                name: 'Sue Woodger',
                title: 'modal window select item issue',
                done: false,
                note: 'note details',
                priority: 'Low',
                due_date: '2/12/2017',
            },
        ];
        this.taskForm = this.createFormGroup(null);
    }
    drop(event) {
        (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.moveItemInArray)(this.tasks, event.previousIndex, event.currentIndex);
    }
    toggle(task, nav) {
        nav.close();
        task.done = !task.done;
    }
    addNewTask(nav) {
        this.resetFormField();
        this.isNewEvent = true;
        this.dialogTitle = 'New Task';
        this.userImg = 'assets/images/user/user1.jpg';
        nav.open();
    }
    taskClick(task, nav) {
        this.isNewEvent = false;
        this.dialogTitle = 'Edit Task';
        this.userImg = task.img;
        nav.open();
        this.taskForm = this.createFormGroup(task);
    }
    closeSlider(nav) {
        if (nav.open()) {
            nav.close();
        }
    }
    createFormGroup(data) {
        return this.fb.group({
            id: [data ? data.id : this.getRandomID()],
            img: [data ? data.img : 'assets/images/user/user1.jpg'],
            name: [data ? data.name : null],
            title: [data ? data.title : null],
            done: [data ? data.done : null],
            priority: [data ? data.priority : null],
            due_date: [
                (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(data
                    ? data.due_date
                    : (0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.formatDate)(new Date(), 'yyyy-MM-dd', 'en') || '', 'yyyy-MM-dd', 'en'),
            ],
            note: [data ? data.note : null],
        });
    }
    saveTask() {
        this.tasks.unshift(this.taskForm.value);
        this.resetFormField();
        this.showNotification('snackbar-success', 'Add Task Successfully...!!!', 'bottom', 'center');
    }
    editTask() {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks[targetIdx] = this.taskForm.value;
        this.showNotification('black', 'Edit Task Successfully...!!!', 'bottom', 'center');
    }
    deleteTask(nav) {
        const targetIdx = this.tasks
            .map((item) => item.id)
            .indexOf(this.taskForm.value.id);
        this.tasks.splice(targetIdx, 1);
        nav.close();
        this.showNotification('snackbar-danger', 'Delete Task Successfully...!!!', 'bottom', 'center');
    }
    resetFormField() {
        this.taskForm.controls.name.reset();
        this.taskForm.controls.title.reset();
        this.taskForm.controls.done.reset();
        this.taskForm.controls.priority.reset();
        this.taskForm.controls.due_date.reset();
        this.taskForm.controls.note.reset();
    }
    getRandomID() {
        const S4 = () => {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4();
    }
    ngOnInit() { }
    showNotification(colorName, text, placementFrom, placementAlign) {
        this.snackBar.open(text, '', {
            duration: 2000,
            verticalPosition: placementFrom,
            horizontalPosition: placementAlign,
            panelClass: colorName,
        });
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBar)); };
TaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], decls: 114, vars: 21, consts: [[1, "content"], [1, "container-fluid"], [1, "block-header"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "breadcrumb", "breadcrumb-style"], [1, "breadcrumb-item"], [1, "page-title"], [1, "breadcrumb-item", "bcrumb-1"], ["routerLink", "/dashboard/main"], [1, "fas", "fa-home"], [1, "breadcrumb-item", "active"], [1, "col-md-12", "col-sm-12"], [1, "card", "h-100"], [1, "card-body"], [1, "task-module"], [1, "task-header"], [1, "task-title"], [1, "header-button"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "task-container"], ["position", "end", 3, "mode"], ["sidenav", ""], [1, "header"], [1, "header-title"], [1, "header-close", "m-r-0"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "register-form", "m-4", 3, "formGroup"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [3, "hidden"], ["matInput", "", "formControlName", "id"], ["matInput", "", "formControlName", "img"], ["appearance", "outline", 1, "example-full-width"], ["matInput", "", "formControlName", "title"], ["matSuffix", ""], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "mb-3"], ["formControlName", "done", "color", "primary", 1, "example-margin"], ["formControlName", "name"], [3, "value"], [1, "col-xl-6", "col-lg-6", "col-md-12", "col-sm-12", "mb-2"], ["formControlName", "priority"], ["matInput", "", "formControlName", "due_date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["matInput", "", "formControlName", "note"], [1, "col-xl-10", "col-lg-10", "col-md-12", "col-sm-12"], ["cdkDropList", "", 1, "task-list", 2, "position", "relative", "max-height", "500px", 3, "perfectScrollbar", "cdkDropListDropped"], ["class", "task-box", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matTooltip", "Delete Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Save Task", 3, "click"], ["mat-icon-button", "", "matTooltip", "Edit Task", 3, "click"], ["cdkDrag", "", 1, "task-box", 3, "click"], ["cdkDragHandle", "", 1, "task-handle", "m-r-20"], ["aria-hidden", "false"], ["color", "primary", 1, "m-r-15", 3, "checked", "change"], ["class", "task-custom-placeholder", 4, "cdkDragPlaceholder"], ["matTooltip", "Title", 3, "ngClass"], [3, "ngClass"], ["matTooltip", "Low", "aria-hidden", "false", "class", "lbl-low", 4, "ngIf"], ["matTooltip", "High", "aria-hidden", "false", "class", "lbl-high", 4, "ngIf"], ["matTooltip", "Normal", "aria-hidden", "false", "class", "lbl-normal", 4, "ngIf"], [1, "task-user-img", 3, "src", "matTooltip"], ["matTooltip", "Due Date", 1, "task-date"], [1, "task-custom-placeholder"], ["matTooltip", "Low", "aria-hidden", "false", 1, "lbl-low"], ["matTooltip", "High", "aria-hidden", "false", 1, "lbl-high"], ["matTooltip", "Normal", "aria-hidden", "false", 1, "lbl-normal"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ul", 5)(6, "li", 6)(7, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3)(16, "div", 12)(17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "div", 17)(22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.addNewTask(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Add Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3)(30, "div", 12)(31, "mat-sidenav-container", 20)(32, "mat-sidenav", 21, 22)(34, "div", 23)(35, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TaskComponent_button_38_Template, 3, 0, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, TaskComponent_button_39_Template, 3, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TaskComponent_button_40_Template, 3, 0, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx.closeSlider(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "form", 30)(45, "div", 3)(46, "div", 31)(47, "mat-form-field", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 3)(50, "div", 31)(51, "mat-form-field", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 3)(54, "div", 31)(55, "mat-form-field", 35)(56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "turned_in_not");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 3)(62, "div", 38)(63, "mat-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Mark as complete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3)(66, "div", 38)(67, "mat-form-field", 35)(68, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Assigned Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-select", 40)(71, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Sarah Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Jens Brincker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Mark Hay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Anthony Davie ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Sue Woodger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3)(84, "div", 42)(85, "mat-form-field", 35)(86, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Priority");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-select", 43)(89, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Low ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " High ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 42)(96, "mat-form-field", 35)(97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Due date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 44)(100, "mat-datepicker-toggle", 45)(101, "mat-datepicker", null, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 3)(104, "div", 31)(105, "mat-form-field", 35)(106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Event Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "textarea", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "mat-sidenav-content")(112, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function TaskComponent_Template_div_cdkDropListDropped_112_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, TaskComponent_div_113_Template, 18, 19, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.tasks.length, " Total task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isNewEvent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sarah Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Jens Brincker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Mark Hay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Anthony Davie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Sue Woodger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tasks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDropList, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDragHandle, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.CdkDragPlaceholder, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 23917:
/*!*************************************!*\
  !*** ./src/app/task/task.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModule": () => (/* binding */ TaskModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.component */ 505);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-routing.module */ 40588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
























class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            _task_routing_module__WEBPACK_IMPORTED_MODULE_1__.TaskRoutingModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_task_component__WEBPACK_IMPORTED_MODULE_0__.TaskComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        _task_routing_module__WEBPACK_IMPORTED_MODULE_1__.TaskRoutingModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__.MatRadioModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__.MatSidenavModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__.MatCardModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_23__.DragDropModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_task_task_module_ts.js.map
"use strict";
(self["webpackChunkaxen"] = self["webpackChunkaxen"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication/page404/page404.component */ 1991);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth.guard */ 19390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        component: _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__.MainLayoutComponent,
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        children: [
            { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-node_modules_ngx-gauge_fesm2015_ngx-gauge_js-node_modules_ngx-echarts_fesm2015_ngx-ec-50ebe3"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.module */ 34814)).then((m) => m.DashboardModule),
            },
            {
                path: 'advance-table',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs-node_modules_angular_material_fe-d83204"), __webpack_require__.e("src_app_advance-table_advance-table_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./advance-table/advance-table.module */ 43813)).then((m) => m.AdvanceTableModule),
            },
            {
                path: 'calendar',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("src_app_calendar_calendar_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendar/calendar.module */ 979)).then((m) => m.CalendarsModule),
            },
            {
                path: 'task',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs-node_modules_angular_material_fe-d83204"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("src_app_task_task_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./task/task.module */ 23917)).then((m) => m.TaskModule),
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs-node_modules_angular_material_fe-d83204"), __webpack_require__.e("src_app_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 6808)).then((m) => m.ContactsModule),
            },
            {
                path: 'email',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-fbbc65"), __webpack_require__.e("src_app_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./email/email.module */ 57727)).then((m) => m.EmailModule),
            },
            {
                path: 'apps',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs-node_modules_angular_material_fe-d83204"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("src_app_apps_apps_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./apps/apps.module */ 99269)).then((m) => m.AppsModule),
            },
            {
                path: 'widget',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-node_modules_angular_cdk_fesm2015_drag-drop_mjs"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("src_app_widget_widget_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./widget/widget.module */ 88503)).then((m) => m.WidgetModule),
            },
            {
                path: 'ui',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs-node_modules_angular_material-3a28dd"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_progress-bar_mjs"), __webpack_require__.e("src_app_ui_ui_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ui/ui.module */ 28086)).then((m) => m.UiModule),
            },
            {
                path: 'forms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_card_mjs"), __webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sidenav_mjs"), __webpack_require__.e("default-node_modules_ng-pick-datetime___ivy_ngcc___picker_js"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-angular___ivy_ngcc___fesm2015_ckeditor-ckeditor5-angu-fbbc65"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_autocomplete_mjs-node_modules_angular_material-3a28dd"), __webpack_require__.e("src_app_forms_forms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./forms/forms.module */ 71366)).then((m) => m.FormModule),
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_menu_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_radio_mjs-node_modules_angular_material_fesm20-c4af71"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_dialog_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_snack-bar_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_sort_mjs-node_modules_angular_material_fesm201-47c4b1"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_paginator_mjs-node_modules_angular_material_fe-d83204"), __webpack_require__.e("src_app_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tables/tables.module */ 81439)).then((m) => m.TablesModule),
            },
            {
                path: 'media',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_media_media_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./media/media.module */ 51173)).then((m) => m.MediaModule),
            },
            {
                path: 'charts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__baseClone_js"), __webpack_require__.e("default-node_modules_ng-apexcharts_fesm2015_ng-apexcharts_mjs"), __webpack_require__.e("default-node_modules_ng2-charts___ivy_ngcc___fesm2015_ng2-charts_js"), __webpack_require__.e("default-node_modules_ngx-gauge_fesm2015_ngx-gauge_js-node_modules_ngx-echarts_fesm2015_ngx-ec-50ebe3"), __webpack_require__.e("src_app_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./charts/charts.module */ 55108)).then((m) => m.ChartsModule),
            },
            {
                path: 'timeline',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./timeline/timeline.module */ 6159)).then((m) => m.TimelineModule),
            },
            {
                path: 'icons',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./icons/icons.module */ 74115)).then((m) => m.IconsModule),
            },
            {
                path: 'extra-pages',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2015_checkbox_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_tabs_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("src_app_extra-pages_extra-pages_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./extra-pages/extra-pages.module */ 95859)).then((m) => m.ExtraPagesModule),
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_maps_maps_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maps/maps.module */ 83842)).then((m) => m.MapsModule),
            },
            {
                path: 'multilevel',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_multilevel_multilevel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./multilevel/multilevel.module */ 96895)).then((m) => m.MultilevelModule),
            },
        ],
    },
    {
        path: 'authentication',
        component: _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__.AuthLayoutComponent,
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authentication/authentication.module */ 41082)).then((m) => m.AuthenticationModule),
    },
    { path: '**', component: _authentication_page404_page404_component__WEBPACK_IMPORTED_MODULE_0__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);






class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationStart) {
                this.spinner.show();
                location.onPopState(() => {
                    window.location.reload();
                });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.PlatformLocation), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-page-loader")(1, "router-outlet");
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_0__.PageLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 40294);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/header/header.component */ 17876);
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ 66105);
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ 20129);
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/app-layout/auth-layout/auth-layout.component */ 17050);
/* harmony import */ var _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/app-layout/main-layout/main-layout.component */ 9899);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptor/fake-backend */ 43867);
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ 56300);
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ 72624);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-click-outside */ 53530);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);





















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_15__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_15__.HashLocationStrategy },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HTTP_INTERCEPTORS, useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_11__.ErrorInterceptor, multi: true },
        _core_interceptor_fake_backend__WEBPACK_IMPORTED_MODULE_10__.fakeBackendProvider,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_5__.PageLoaderComponent,
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.SidebarComponent,
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.RightSidebarComponent,
        _layout_app_layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_8__.AuthLayoutComponent,
        _layout_app_layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_9__.MainLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_16__.PerfectScrollbarModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_13__.ClickOutsideModule,
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 1991:
/*!*************************************************************!*\
  !*** ./src/app/authentication/page404/page404.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 18, vars: 0, consts: [[1, "limiter"], [1, "container-login100"], [1, "wrap-login100"], [1, "login100-form"], [1, "error-header", "p-b-45"], [1, "error-subheader", "p-b-5"], [1, "error-subheader2", "p-b-5"], [1, "container-login100-form-btn", "p-t-30"], ["mat-flat-button", "", "color", "primary", "routerLink", "/dashboard/main", 1, "login100-form-btn"], [1, "w-full", "p-t-15", "p-b-15", "text-center"], ["href", "#", "onClick", "return false;", 1, "txt1"], [1, "login100-more", 2, "background-image", "url('assets/images/pages/bg-03.png')"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "form", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " 404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Looks Like You're Lost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The Page You Are Looking For Not Available! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Go To Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "div")(15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Need Help? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8696:
/*!******************************************!*\
  !*** ./src/app/config/config.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfigService {
    constructor() {
        this.setConfigData();
    }
    setConfigData() {
        this.configData = {
            layout: {
                rtl: false,
                variant: 'light',
                theme_color: 'white',
                logo_bg_color: 'white',
                sidebar: {
                    collapsed: false,
                    backgroundColor: 'light', // options:  light & dark
                },
            },
        };
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/rightsidebar.service */ 74930);
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guard/auth.guard */ 19390);
/* harmony import */ var _guard_loggedIn_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guard/loggedIn.guard */ 5614);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ 41782);
/* harmony import */ var _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/dynamic-script-loader.service */ 77431);
/* harmony import */ var _guard_module_import_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guard/module-import.guard */ 6785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);








class CoreModule {
    constructor(parentModule) {
        (0,_guard_module_import_guard__WEBPACK_IMPORTED_MODULE_5__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [
        _service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService,
        _guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard,
        _guard_loggedIn_guard__WEBPACK_IMPORTED_MODULE_2__.LoggedInAuthGuard,
        _service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService,
        _service_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_4__.DynamicScriptLoaderService,
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] }); })();


/***/ }),

/***/ 19390:
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            return true;
        }
        this.router.navigate(['/authentication/signin']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5614:
/*!**********************************************!*\
  !*** ./src/app/core/guard/loggedIn.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInAuthGuard": () => (/* binding */ LoggedInAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);



class LoggedInAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.currentUserValue) {
            this.router.navigate(['/dashboard/main']);
        }
        return true;
    }
}
LoggedInAuthGuard.ɵfac = function LoggedInAuthGuard_Factory(t) { return new (t || LoggedInAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoggedInAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggedInAuthGuard, factory: LoggedInAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6785:
/*!***************************************************!*\
  !*** ./src/app/core/guard/module-import.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 56300:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);




class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 43867:
/*!**************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   "fakeBackendProvider": () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);




const users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'Sarah',
        lastName: 'Smith',
        token: 'admin-token'
    }
];
class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(handleRoute));
        function handleRoute() {
            switch (true) {
                case url.endsWith('/authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { username, password } = body;
            const user = users.find((x) => x.username === username && x.password === password);
            if (!user) {
                return error('Username or password is incorrect');
            }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: user.token
            });
        }
        // helper functions
        function ok(body) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
        }
        function error(message) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message } });
        }
        function unauthorized() {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });
let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ 72624:
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/auth.service */ 41782);


class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 41782:
/*!**********************************************!*\
  !*** ./src/app/core/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);





class AuthService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.http
            .post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/authenticate`, {
            username,
            password,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((user) => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject.next(user);
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({ success: false });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77431:
/*!***************************************************************!*\
  !*** ./src/app/core/service/dynamic-script-loader.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScriptStore": () => (/* binding */ ScriptStore),
/* harmony export */   "DynamicScriptLoaderService": () => (/* binding */ DynamicScriptLoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const ScriptStore = [];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                // load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    // IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    // Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.ɵfac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.ɵfac });


/***/ }),

/***/ 74930:
/*!******************************************************!*\
  !*** ./src/app/core/service/rightsidebar.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarService": () => (/* binding */ RightSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class RightSidebarService {
    constructor() {
        this.sidebarSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.sidebarState = this.sidebarSubject.asObservable();
        this.setRightSidebar = (value) => {
            this.sidebarSubject.next(value);
        };
    }
}
RightSidebarService.ɵfac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.ɵfac });


/***/ }),

/***/ 17050:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/auth-layout/auth-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 9899:
/*!************************************************************************!*\
  !*** ./src/app/layout/app-layout/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/header.component */ 17876);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 20129);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 72325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);





class MainLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 4, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header")(1, "app-sidebar")(2, "app-right-sidebar")(3, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 17876:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/config/config.service */ 8696);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);











function HeaderComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 29)(1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 34)(4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 36)(7, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", notification_r2.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", notification_r2.time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](notification_r2.message);
} }
const document = window.document;
class HeaderComponent {
    constructor(document, renderer, elementRef, rightSidebarService, configService, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.authService = authService;
        this.router = router;
        this.config = {};
        this.isNavbarCollapsed = true;
        this.notifications = [
            {
                userImg: 'assets/images/user/user1.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user2.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user3.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
            {
                userImg: 'assets/images/user/user4.jpg',
                userName: 'Ashton Cox',
                time: '5 hours ago',
                message: 'Lets break for lunch...',
            },
            {
                userImg: 'assets/images/user/user5.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail',
            },
            {
                userImg: 'assets/images/user/user6.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!',
            },
            {
                userImg: 'assets/images/user/user7.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.',
            },
        ];
    }
    ngOnInit() {
        this.config = this.configService.configData;
    }
    ngAfterViewInit() {
        // set theme on startup
        if (localStorage.getItem('theme')) {
            this.renderer.removeClass(this.document.body, this.config.layout.variant);
            this.renderer.addClass(this.document.body, localStorage.getItem('theme'));
        }
        else {
            this.renderer.addClass(this.document.body, this.config.layout.variant);
        }
        if (localStorage.getItem('menuOption')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('menuOption'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_' + this.config.layout.sidebar.backgroundColor);
        }
        if (localStorage.getItem('choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-' + this.config.layout.logo_bg_color);
        }
        if (localStorage.getItem('sidebar_status')) {
            if (localStorage.getItem('sidebar_status') === 'close') {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
            else {
                this.renderer.removeClass(this.document.body, 'side-closed');
                this.renderer.removeClass(this.document.body, 'submenu-closed');
            }
        }
        else {
            if (this.config.layout.sidebar.collapsed === true) {
                this.renderer.addClass(this.document.body, 'side-closed');
                this.renderer.addClass(this.document.body, 'submenu-closed');
            }
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    logout() {
        this.authService.logout().subscribe((res) => {
            if (!res.success) {
                this.router.navigate(['/authentication/signin']);
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 63, vars: 2, consts: [[1, "navbar", "active"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "aria-expanded", "false", 1, "navbar-toggle", "collapsed", 3, "click"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], ["routerLink", "dashboard/main", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", ""], [1, "logo-name"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "pull-left", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], ["ngbDropdown", "", 1, "nav-item", "btnNotification"], ["mat-icon-button", "", "ngbDropdownToggle", "", 1, "nav-notification-icons"], [1, "label-count", "bg-orange"], ["ngbDropdownMenu", "", 1, "notification-dropdown", "pullDown"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "250px", 3, "perfectScrollbar"], [1, "menu"], ["href", "#", "onClick", "return false;", 4, "ngFor", "ngForOf"], [1, "text-center", "d-block", "border-top", "py-1"], ["ngbDropdown", "", 1, "nav-item", "user_profile"], ["ngbDropdownToggle", "", 1, "nav-notification-icons", "pt-0"], ["src", "assets/images/user.jpg", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [1, "noti-list", 2, "position", "relative", "max-width", "600px", "max-height", "300px", 3, "perfectScrollbar"], [1, "body"], [1, "user_dw_menu"], ["href", "#", "onClick", "return false;"], ["aria-hidden", "false", 1, "msr-2"], ["href", "javascript:void(0);", 3, "click"], [1, "table-img", "msg-user"], ["alt", "", 3, "src"], [1, "menu-info"], [1, "menu-title"], [1, "menu-desc"], [1, "material-icons"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0, 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.isNavbarCollapsed = !ctx.isNavbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Axen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "ul", 10)(12, "li")(13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_13_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ul", 12)(17, "li", 13)(18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li", 15)(22, "button", 16)(23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 18)(27, "div", 19)(28, "ul", 20)(29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, HeaderComponent_a_30_Template, 12, 4, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Read All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "li", 23)(34, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Ella Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 18)(39, "div", 26)(40, "ul", 20)(41, "li", 27)(42, "ul", 28)(43, "li")(44, "a", 29)(45, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li")(49, "a", 29)(50, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Feedback ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "li")(54, "a", 29)(55, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "li")(59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_59_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.notifications);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbCollapse, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 66105:
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageLoaderComponent": () => (/* binding */ PageLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 88035);


class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.ɵfac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });


/***/ }),

/***/ 72325:
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSidebarComponent": () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/service/rightsidebar.service */ 74930);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config.service */ 8696);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 61676);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);









const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "active": a0 }; };
class RightSidebarComponent {
    constructor(document, renderer, elementRef, rightSidebarService, configService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.rightSidebarService = rightSidebarService;
        this.configService = configService;
        this.selectedBgColor = 'white';
        this.showpanel = false;
        this.isDarkSidebar = false;
        this.isDarTheme = false;
        this.isRtl = false;
        this.config = {};
    }
    ngOnInit() {
        this.config = this.configService.configData;
        this.rightSidebarService.sidebarState.subscribe((isRunning) => {
            this.isOpenSidebar = isRunning;
        });
        this.setRightSidebarWindowHeight();
    }
    ngAfterViewInit() {
        // set header color on startup
        if (localStorage.getItem('choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('choose_skin'));
            this.selectedBgColor = localStorage.getItem('choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.config.layout.theme_color);
            this.selectedBgColor = this.config.layout.theme_color;
        }
        if (localStorage.getItem('menuOption')) {
            if (localStorage.getItem('menuOption') === 'menu_dark') {
                this.isDarkSidebar = true;
            }
            else if (localStorage.getItem('menuOption') === 'menu_light') {
                this.isDarkSidebar = false;
            }
            else {
                this.isDarkSidebar =
                    this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
            }
        }
        else {
            this.isDarkSidebar =
                this.config.layout.sidebar.backgroundColor === 'dark' ? true : false;
        }
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') === 'dark') {
                this.isDarTheme = true;
            }
            else if (localStorage.getItem('theme') === 'light') {
                this.isDarTheme = false;
            }
            else {
                this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
            }
        }
        else {
            this.isDarTheme = this.config.layout.variant === 'dark' ? true : false;
        }
        if (localStorage.getItem('isRtl')) {
            if (localStorage.getItem('isRtl') === 'true') {
                this.setRTLSettings();
            }
            else if (localStorage.getItem('isRtl') === 'false') {
                this.setLTRSettings();
            }
        }
        else {
            if (this.config.layout.rtl == true) {
                this.setRTLSettings();
            }
            else {
                this.setLTRSettings();
            }
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        const prevTheme = this.elementRef.nativeElement
            .querySelector('.settingSidebar .choose-theme li.active')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const menuOption = 'menu_light';
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('menuOption', menuOption);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const menuOption = 'menu_dark';
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('menuOption', menuOption);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            this.renderer.addClass(this.document.body, 'theme-white');
        }
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        const theme = 'light';
        const menuOption = 'menu_light';
        this.selectedBgColor = 'white';
        this.isDarkSidebar = false;
        localStorage.setItem('choose_logoheader', 'logo-white');
        localStorage.setItem('choose_skin', 'theme-white');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        if (localStorage.getItem('choose_skin')) {
            this.renderer.removeClass(this.document.body, localStorage.getItem('choose_skin'));
            this.renderer.addClass(this.document.body, 'theme-black');
        }
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        const theme = 'dark';
        const menuOption = 'menu_dark';
        this.selectedBgColor = 'black';
        this.isDarkSidebar = true;
        localStorage.setItem('choose_logoheader', 'logo-black');
        localStorage.setItem('choose_skin', 'theme-black');
        localStorage.setItem('theme', theme);
        localStorage.setItem('menuOption', menuOption);
    }
    setRightSidebarWindowHeight() {
        const height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.isOpenSidebar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.rightSidebarService.setRightSidebar((this.isOpenSidebar = !this.isOpenSidebar));
    }
    switchDirection(event) {
        var isrtl = String(event.checked);
        if (isrtl === 'false' &&
            document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].removeAttribute('dir');
            this.renderer.removeClass(this.document.body, 'rtl');
        }
        else if (isrtl === 'true' &&
            !document.getElementsByTagName('html')[0].hasAttribute('dir')) {
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
            this.renderer.addClass(this.document.body, 'rtl');
        }
        localStorage.setItem('isRtl', isrtl);
        this.isRtl = event.checked;
    }
    setRTLSettings() {
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        this.renderer.addClass(this.document.body, 'rtl');
        this.isRtl = true;
        localStorage.setItem('isRtl', 'true');
    }
    setLTRSettings() {
        document.getElementsByTagName('html')[0].removeAttribute('dir');
        this.renderer.removeClass(this.document.body, 'rtl');
        this.isRtl = false;
        localStorage.setItem('isRtl', 'false');
    }
}
RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_service_rightsidebar_service__WEBPACK_IMPORTED_MODULE_0__.RightSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_config_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
RightSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 54, vars: 33, consts: [[1, "settingSidebar", 3, "ngClass"], ["href", "javascript:void(0)", 1, "settingPanelToggle", 3, "click"], [3, "icon"], [1, "settingSidebar-body", "ps-container", "ps-theme-default", 3, "ngStyle", "perfectScrollbar"], [1, "fade", "show", "active"], [1, "setting-panel-header"], [1, "p-15", "border-bottom"], [1, "font-medium", "m-b-10"], [1, "flex", "flex-wrap", "hiddenradio"], [1, "flex", "flex-col"], ["type", "radio", "name", "value", "value", "light", 3, "checked", "click"], ["src", "assets/images/light.png"], [1, "mt-1", "text-md", "text-center"], [1, "flex", "flex-col", "mt-3"], ["type", "radio", "name", "value", "value", "dark", 3, "checked", "click"], ["src", "assets/images/dark.png"], [1, "rightSetting"], [1, "mt-2", 3, "value"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], [1, "theme-setting-options"], [1, "choose-theme", "list-unstyled", "mb-0"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue"], [1, "mt-2", 3, "checked", "change"]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_a_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-feather-icons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Setting Panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Select Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "label")(13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_13_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Light ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 13)(18, "label")(19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_input_click_19_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Dark ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16)(24, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Sidebar Menu Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-button-toggle-group", 17)(27, "mat-button-toggle", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_27_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_29_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6)(32, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Color Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 20)(35, "ul", 21)(36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_36_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_38_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_40_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_42_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_44_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_46_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightSidebarComponent_Template_li_click_48_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 16)(51, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "mat-slide-toggle", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightSidebarComponent_Template_mat_slide_toggle_change_53_listener($event) { return ctx.switchDirection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.isOpenSidebar ? "showSettingPanel" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("setting-sidebar-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isDarTheme == false ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isDarTheme == true ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.isDarkSidebar ? "dark" : "light");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](21, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](23, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](27, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](29, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](31, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.isRtl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggle, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 39617:
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: '',
        title: '-- Main',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: '/dashboard/main',
        title: 'Home',
        moduleName: 'dashboard',
        iconType: 'material-icons-two-tone',
        icon: 'home',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: 'advance-table',
        title: 'Advance Tables',
        moduleName: 'advance-table',
        iconType: 'material-icons-two-tone',
        icon: 'table_view',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: '',
        title: '-- Apps',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: 'calendar',
        title: 'Calendar',
        moduleName: 'calendar',
        iconType: 'material-icons-two-tone',
        icon: 'event_note',
        class: '',
        groupTitle: false,
        badge: 'New',
        badgeClass: 'badge bg-blue sidebar-badge float-end',
        submenu: [],
    },
    {
        path: 'task',
        title: 'Task',
        moduleName: 'task',
        iconType: 'material-icons-two-tone',
        icon: 'fact_check',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: 'contacts',
        title: 'Contacts',
        moduleName: 'contacts',
        iconType: 'material-icons-two-tone',
        icon: 'contacts',
        class: '',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: '',
        title: 'Email',
        moduleName: 'email',
        iconType: 'material-icons-two-tone',
        icon: 'email',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '3',
        badgeClass: 'badge bg-orange sidebar-badge float-end',
        submenu: [
            {
                path: '/email/inbox',
                title: 'Inbox',
                moduleName: 'email',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/email/compose',
                title: 'Compose',
                moduleName: 'email',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/email/read-mail',
                title: 'Read Email',
                moduleName: 'email',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'More Apps',
        moduleName: 'apps',
        iconType: 'material-icons-two-tone',
        icon: 'stars',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/apps/chat',
                title: 'Chat',
                moduleName: 'apps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/apps/dragdrop',
                title: 'Drag & Drop',
                moduleName: 'apps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/apps/contact-grid',
                title: 'Contact Grid',
                moduleName: 'apps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/apps/support',
                title: 'Support',
                moduleName: 'apps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: '-- Components',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: '',
        title: 'Widgets',
        moduleName: 'widget',
        iconType: 'material-icons-two-tone',
        icon: 'widgets',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/widget/chart-widget',
                title: 'Chart Widget',
                moduleName: 'widget',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/widget/data-widget',
                title: 'Data Widget',
                moduleName: 'widget',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Forms',
        moduleName: 'forms',
        iconType: 'material-icons-two-tone',
        icon: 'subtitles',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/forms/form-controls',
                title: 'Form Controls',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/forms/advance-controls',
                title: 'Advanced Controls',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/forms/form-example',
                title: 'Form Examples',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/forms/form-validation',
                title: 'Form Validation',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/forms/wizard',
                title: 'Form Wizard',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/forms/editors',
                title: 'Editors',
                moduleName: 'forms',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Tables',
        moduleName: 'tables',
        iconType: 'material-icons-two-tone',
        icon: 'view_list',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/tables/basic-tables',
                title: 'Basic Tables',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/tables/material-tables',
                title: 'Material Tables',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/tables/ngx-datatable',
                title: 'ngx-datatable',
                moduleName: 'tables',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'User Interface (UI)',
        moduleName: 'ui',
        iconType: 'material-icons-two-tone',
        icon: 'dvr',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/ui/alerts',
                title: 'Alerts',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/badges',
                title: 'Badges',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/chips',
                title: 'Chips',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/modal',
                title: 'Modal',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/buttons',
                title: 'Buttons',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/expansion-panel',
                title: 'Expansion Panel',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/bottom-sheet',
                title: 'Bottom Sheet',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/dialogs',
                title: 'Dialogs',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/cards',
                title: 'Cards',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/labels',
                title: 'Labels',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/list-group',
                title: 'List Group',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/snackbar',
                title: 'Snackbar',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/preloaders',
                title: 'Preloaders',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/progressbars',
                title: 'Progress Bars',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/tabs',
                title: 'Tabs',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/typography',
                title: 'Typography',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/ui/helper-classes',
                title: 'Helper Classes',
                moduleName: 'ui',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Medias',
        moduleName: 'media',
        iconType: 'material-icons-two-tone',
        icon: 'image_search',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/media/gallery',
                title: 'Image Gallery',
                moduleName: 'media',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Charts',
        moduleName: 'charts',
        iconType: 'material-icons-two-tone',
        icon: 'insert_chart',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '5',
        badgeClass: 'badge bg-green sidebar-badge float-end',
        submenu: [
            {
                path: '/charts/echart',
                title: 'Echart',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/charts/apex',
                title: 'Apex',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/charts/chartjs',
                title: 'ChartJS',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/charts/ngx-charts',
                title: 'Ngx-Charts',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/charts/gauge',
                title: 'Gauge',
                moduleName: 'charts',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Timeline',
        moduleName: 'timeline',
        iconType: 'material-icons-two-tone',
        icon: 'timeline',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/timeline/timeline1',
                title: 'Timeline 1',
                moduleName: 'timeline',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/timeline/timeline2',
                title: 'Timeline 2',
                moduleName: 'timeline',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Icons',
        moduleName: 'icons',
        iconType: 'material-icons-two-tone',
        icon: 'eco',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/icons/material',
                title: 'Material Icons',
                moduleName: 'icons',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/icons/font-awesome',
                title: 'Font Awesome',
                moduleName: 'icons',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: '-- Pages',
        moduleName: '',
        iconType: '',
        icon: '',
        class: '',
        groupTitle: true,
        badge: '',
        badgeClass: '',
        submenu: [],
    },
    {
        path: '',
        title: 'Authentication',
        moduleName: 'authentication',
        iconType: 'material-icons-two-tone',
        icon: 'supervised_user_circle',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/authentication/signin',
                title: 'Sign In',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/authentication/signup',
                title: 'Sign Up',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/authentication/forgot-password',
                title: 'Forgot Password',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/authentication/locked',
                title: 'Locked',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/authentication/page404',
                title: '404 - Not Found',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/authentication/page500',
                title: '500 - Server Error',
                moduleName: 'authentication',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Extra Pages',
        moduleName: 'extra-pages',
        iconType: 'material-icons-two-tone',
        icon: 'description',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/extra-pages/profile',
                title: 'Profile',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/extra-pages/pricing',
                title: 'Pricing',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/extra-pages/invoice',
                title: 'Invoice',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/extra-pages/faqs',
                title: 'Faqs',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/extra-pages/blank',
                title: 'Blank Page',
                moduleName: 'extra-pages',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Maps',
        moduleName: 'maps',
        iconType: 'material-icons-two-tone',
        icon: 'map',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/maps/google',
                title: 'Google Map',
                moduleName: 'maps',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
    {
        path: '',
        title: 'Multi level Menu',
        moduleName: 'multilevel',
        iconType: 'material-icons-two-tone',
        icon: 'slideshow',
        class: 'menu-toggle',
        groupTitle: false,
        badge: '',
        badgeClass: '',
        submenu: [
            {
                path: '/multilevel/first1',
                title: 'First',
                moduleName: 'multilevel',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
            {
                path: '/',
                title: 'Second',
                moduleName: 'secondlevel',
                iconType: '',
                icon: '',
                class: 'ml-sub-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [
                    {
                        path: '/multilevel/secondlevel/second1',
                        title: 'Second 1',
                        moduleName: 'secondlevel',
                        iconType: '',
                        icon: '',
                        class: '',
                        groupTitle: false,
                        badge: '',
                        badgeClass: '',
                        submenu: [],
                    },
                    {
                        path: '/multilevel/secondlevel/second2',
                        title: 'Second 2',
                        moduleName: 'secondlevel',
                        iconType: '',
                        icon: '',
                        class: '',
                        groupTitle: false,
                        badge: '',
                        badgeClass: '',
                        submenu: [],
                    },
                ],
            },
            {
                path: '/multilevel/first3',
                title: 'Third',
                moduleName: 'multilevel',
                iconType: '',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                badge: '',
                badgeClass: '',
                submenu: [],
            },
        ],
    },
];


/***/ }),

/***/ 20129:
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-items */ 39617);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/service/auth.service */ 41782);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 15375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);










function SidebarComponent_li_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.title);
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_26_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_26_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.callLevel1Toggle($event, sidebarItem_r1.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, sidebarItem_r1.iconType));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](sidebarItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", sidebarItem_r1.title, " ");
} }
function SidebarComponent_li_26_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27)(1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_26_ul_3_li_1_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const sidebarSubsubItem_r14 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5); return ctx_r15.callLevel3Toggle($event, sidebarSubsubItem_r14.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarSubsubItem_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r13.level3Menu === sidebarSubsubItem_r14.moduleName ? "activeSubSub" : "")("routerLinkActive", sidebarSubsubItem_r14.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubsubItem_r14.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, sidebarSubsubItem_r14.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, sidebarSubsubItem_r14.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sidebarSubsubItem_r14.title, " ");
} }
function SidebarComponent_li_26_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_26_ul_3_li_1_ul_3_li_1_Template, 3, 9, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarSubItem_r11.submenu);
} }
function SidebarComponent_li_26_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 27)(1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_26_ul_3_li_1_Template_a_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const sidebarSubItem_r11 = restoredCtx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r18.callLevel2Toggle($event, sidebarSubItem_r11.moduleName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_26_ul_3_li_1_ul_3_Template, 2, 1, "ul", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r10.level2Menu === sidebarSubItem_r11.moduleName ? "activeSub" : "")("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c0, sidebarSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sidebarSubItem_r11.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
} }
function SidebarComponent_li_26_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_26_ul_3_li_1_Template, 4, 10, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SidebarComponent_li_26_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SidebarComponent_li_26_a_2_Template, 5, 11, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_26_ul_3_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.level1Menu === sidebarItem_r1.moduleName && sidebarItem_r1.submenu.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c1 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, authService, router) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.authService = authService;
        this.router = router;
        this.level1Menu = '';
        this.level2Menu = '';
        this.level3Menu = '';
        this.headerHeight = 60;
        this.routerObj = null;
        this.routerObj = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                // logic for select active menu in dropdown
                const currenturl = event.url.split('?')[0];
                this.level1Menu = currenturl.split('/')[1];
                this.level2Menu = currenturl.split('/')[2];
                // close sidebar on mobile screen after menu select
                this.renderer.removeClass(this.document.body, 'overlay-open');
            }
        });
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callLevel1Toggle(event, element) {
        if (element === this.level1Menu) {
            this.level1Menu = '0';
        }
        else {
            this.level1Menu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callLevel2Toggle(event, element) {
        if (element === this.level2Menu) {
            this.level2Menu = '0';
        }
        else {
            this.level2Menu = element;
        }
    }
    callLevel3Toggle(event, element) {
        if (element === this.level3Menu) {
            this.level3Menu = '0';
        }
        else {
            this.level3Menu = element;
        }
    }
    ngOnInit() {
        if (this.authService.currentUserValue) {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES.filter((sidebarItem) => sidebarItem);
        }
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    ngOnDestroy() {
        this.routerObj.unsubscribe();
    }
    initLeftSidebar() {
        const _this = this;
        // Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        const height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        const body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 27, vars: 9, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-user-panel"], [1, "user-panel"], [1, "image"], ["src", "assets/images/usrbig.jpg", "alt", "User Image", 1, "img-circle", "user-img-circle"], [1, "profile-usertitle"], [1, "sidebar-userpic-name"], [1, "profile-usertitle-job"], [1, "sidebar-userpic-btn"], ["mat-icon-button", "", "disabled", "", "routerLink", "extra-pages/profile", "matTooltip", "Profile", 3, "matTooltipPosition"], [1, "material-icons-two-tone"], ["mat-icon-button", "", "disabled", "", "routerLink", "email/inbox", "matTooltip", "Email", 3, "matTooltipPosition"], ["mat-icon-button", "", "disabled", "", "routerLink", "calendar", "matTooltip", "Calendar", 3, "matTooltipPosition"], ["mat-icon-button", "", "disabled", "", "routerLink", "authentication/locked", "matTooltip", "Lock", 3, "matTooltipPosition"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], ["class", "menu-top", 3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [1, "menu-top", 3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [1, "ml-menu"], [3, "ngClass", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "ngClass", "routerLinkActive"], [3, "routerLink", "ngClass", "click"], ["class", "ml-menu-2", 4, "ngIf"], [1, "ml-menu-2"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "ul", 2)(4, "li", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Tim Hunold ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Manager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10)(14, "a", 11)(15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13)(18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "mark_email_unread");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 14)(21, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "event");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 15)(24, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SidebarComponent_li_26_Template, 4, 6, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltipPosition", "above");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 61676:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsComponent": () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-feather */ 55810);


class FeatherIconsComponent {
    constructor() { }
    ngOnInit() { }
}
FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) { return new (t || FeatherIconsComponent)(); };
FeatherIconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeatherIconsComponent, selectors: [["app-feather-icons"]], inputs: { icon: "icon", class: "class" }, decls: 1, vars: 3, consts: [[3, "name"]], template: function FeatherIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.icon);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_1__.FeatherComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 27545:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatherIconsModule": () => (/* binding */ FeatherIconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feather-icons.component */ 61676);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 55810);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather/icons */ 73903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






class FeatherIconsModule {
}
FeatherIconsModule.ɵfac = function FeatherIconsModule_Factory(t) { return new (t || FeatherIconsModule)(); };
FeatherIconsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatherIconsModule });
FeatherIconsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_4__.allIcons)], angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatherIconsModule, { declarations: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule], exports: [_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherModule] }); })();


/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 84409);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);













const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
    _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule,
    ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule.forRoot(),
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[materialModules], _angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_0__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__.MatTooltipModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__.MatDatepickerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, ngx_mask__WEBPACK_IMPORTED_MODULE_7__.NgxMaskModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule] }); })();


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 88035);
/* harmony import */ var _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.module */ 27545);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        ], _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
        _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _components_feather_icons_feather_icons_module__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsModule] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:4200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
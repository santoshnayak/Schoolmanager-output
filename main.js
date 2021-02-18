(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\POC\Angular\angular-template\src\main.ts */"zUnb");


/***/ }),

/***/ "0GEV":
/*!*************************************************************************!*\
  !*** ./src/app/shared/utility/interceptor/token-interceptor.service.ts ***!
  \*************************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TokenInterceptorService {
    constructor() { }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + token
            }
        });
        return next.handle(tokenizedReq);
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "Lm/P":
/*!*****************************************************!*\
  !*** ./src/app/shared/utility/guards/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
// import { AuthenticationService } from '../../services/authentication.service';





class AuthGuard {
    /**
     *
     */
    constructor(
    //  private _auth: AuthenticationService,
    _router, toastr) {
        this._router = _router;
        this.toastr = toastr;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token != null) {
            // console.log(token);
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
            if (helper.isTokenExpired(token)) {
                this._router.navigate(['/login']);
                this.toastr.error("Session Expired! Please Login Again");
                return false;
            }
            else {
                return true;
            }
        }
        else {
            this.toastr.error("Please Login to continue");
            this._router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "gren");




class AppComponent {
    constructor() {
        this.title = 'SchoolManageFront';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-ui-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #f3f1fd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjFmZDsgIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_utility_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/utility/guards/auth.guard */ "Lm/P");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_utility_interceptor_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/utility/interceptor/loader-interceptor.service */ "pzpv");
/* harmony import */ var _shared_utility_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/utility/interceptor/token-interceptor.service */ "0GEV");
/* harmony import */ var _modules_common_angular_primeng_angular_primeng_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/common/angular-primeng/angular-primeng.module */ "pMv6");















// import {MatTableModule} from '@angular/material/table';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _shared_utility_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_utility_interceptor_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["LoaderInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_utility_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"], multi: true },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _modules_common_angular_primeng_angular_primeng_module__WEBPACK_IMPORTED_MODULE_12__["AngularPrimengModule"]
            // MatTableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _modules_common_angular_primeng_angular_primeng_module__WEBPACK_IMPORTED_MODULE_12__["AngularPrimengModule"]
        // MatTableModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _modules_common_angular_primeng_angular_primeng_module__WEBPACK_IMPORTED_MODULE_12__["AngularPrimengModule"]
                    // MatTableModule
                ],
                providers: [
                    _shared_utility_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_utility_interceptor_loader_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["LoaderInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_utility_interceptor_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"], multi: true },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "pMv6":
/*!**************************************************************************!*\
  !*** ./src/app/modules/common/angular-primeng/angular-primeng.module.ts ***!
  \**************************************************************************/
/*! exports provided: AngularPrimengModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularPrimengModule", function() { return AngularPrimengModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "rEr+");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/calendar */ "eO1q");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/slider */ "GhNp");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/dialog */ "YHJu");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/multiselect */ "MEzG");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/contextmenu */ "7zpP");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ "jIHw");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/toast */ "8aBz");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ "7kUa");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/progressbar */ "S0UM");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ "arFO");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/autocomplete */ "QGev");















const PrimeModule = [
    primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
    primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
    primeng_slider__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
    primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
    primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
    primeng_contextmenu__WEBPACK_IMPORTED_MODULE_7__["ContextMenuModule"],
    primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
    primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
    primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
    primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"],
    primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
    primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"]
];
class AngularPrimengModule {
}
AngularPrimengModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularPrimengModule });
AngularPrimengModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularPrimengModule_Factory(t) { return new (t || AngularPrimengModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            PrimeModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_7__["ContextMenuModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularPrimengModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_7__["ContextMenuModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
        primeng_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"],
        primeng_slider__WEBPACK_IMPORTED_MODULE_4__["SliderModule"],
        primeng_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
        primeng_contextmenu__WEBPACK_IMPORTED_MODULE_7__["ContextMenuModule"],
        primeng_button__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_9__["ToastModule"],
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__["InputTextModule"],
        primeng_progressbar__WEBPACK_IMPORTED_MODULE_11__["ProgressBarModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"],
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutoCompleteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularPrimengModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    PrimeModule
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    PrimeModule
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "pzpv":
/*!**************************************************************************!*\
  !*** ./src/app/shared/utility/interceptor/loader-interceptor.service.ts ***!
  \**************************************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
// loader-interceptor.service.ts






class LoaderInterceptor {
    constructor(uiLoader, toast) {
        this.uiLoader = uiLoader;
        this.toast = toast;
        this.requests = [];
    }
    // Observable<HttpEvent<any>>
    intercept(req, next) {
        this.uiLoader.start();
        if (navigator.onLine) {
            return next.handle(req)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
                this.uiLoader.stop();
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
                if (err.error.statusCode === 400) {
                    this.toast.error('Something Went Wrong!');
                }
                if (err.error.statusCode === 500) {
                    this.toast.error(err.error.message);
                }
                if (err.error.status === 401 || err.error.status) {
                    this.toast.error(err.error.message);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.error);
            }));
        }
        else {
            this.toast.error('Please Check your Network Connection');
        }
        return undefined;
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_3__["NgxUiLoaderService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | app-modules-authentication-authentication-module */ "app-modules-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ../app/modules/authentication/authentication.module */ "PN7o")).then((m) => m.AuthenticationModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | app-modules-dashboard-dashboard-module */ "app-modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../app/modules/dashboard/dashboard.module */ "XoyV")).then((m) => m.DashboardModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
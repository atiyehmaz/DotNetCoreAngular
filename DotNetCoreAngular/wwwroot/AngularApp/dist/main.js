(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./AngularApp/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./AngularApp/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
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
webpackEmptyAsyncContext.id = "./AngularApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./AngularApp/app/_services/contact.service.ts":
/*!*****************************************************!*\
  !*** ./AngularApp/app/_services/contact.service.ts ***!
  \*****************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this._getContactsUrl = "api/Contact/GetContacts";
        this._saveUrl = 'api/Contact/SaveContact/';
        this._updateUrl = 'api/Contact/UpdateContact/';
        this._deleteByIdUrl = 'api/Contact/DeleteContactByID/';
    }
    ContactService.prototype.getContacts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append("If-Modified-Since", "Tue, 24 July 2017 00:00:00 GMT");
        var getContactsUrl = this._getContactsUrl;
        return this.http.get(getContactsUrl, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    //Post Savd and Update operation
    ContactService.prototype.saveContact = function (contact) {
        var body = JSON.stringify(contact);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this._saveUrl, body, options)
            .map(function (res) { return res.json().message; })
            .catch(this.handleError);
    };
    //Delete Operation
    ContactService.prototype.deleteContact = function (id) {
        //debugger
        //var deleteByIdUrl = this._deleteByIdUrl + '/' + id
        var body = JSON.stringify(id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        //return this.http.delete(deleteByIdUrl)
        //  .map(response => response.json().message)
        //  .catch(this.handleError);
        return this.http.post(this._deleteByIdUrl, body, options)
            .map(function (response) { return response.json().message; })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json().error || 'Opps!! Server error');
    };
    ContactService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./AngularApp/app/_services/index.ts":
/*!*******************************************!*\
  !*** ./AngularApp/app/_services/index.ts ***!
  \*******************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.service */ "./AngularApp/app/_services/contact.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return _contact_service__WEBPACK_IMPORTED_MODULE_0__["ContactService"]; });




/***/ }),

/***/ "./AngularApp/app/app-routing.module.ts":
/*!**********************************************!*\
  !*** ./AngularApp/app/app-routing.module.ts ***!
  \**********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./AngularApp/app/app.component.css":
/*!******************************************!*\
  !*** ./AngularApp/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./AngularApp/app/app.component.html":
/*!*******************************************!*\
  !*** ./AngularApp/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>-->\n\n"

/***/ }),

/***/ "./AngularApp/app/app.component.ts":
/*!*****************************************!*\
  !*** ./AngularApp/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularApp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./AngularApp/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./AngularApp/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./AngularApp/app/app.module.ts":
/*!**************************************!*\
  !*** ./AngularApp/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./AngularApp/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./AngularApp/app/app.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/contact/contact.component */ "./AngularApp/app/components/contact/contact.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./AngularApp/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/index */ "./AngularApp/app/_services/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_13__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppBaseRequestOptions = /** @class */ (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        var _this = _super.call(this) || this;
        _this.Headers = new Headers();
        _this.headers.append('Content-Type', 'application/json');
        _this.body = '';
        return _this;
    }
    return AppBaseRequestOptions;
}(_angular_http__WEBPACK_IMPORTED_MODULE_3__["BaseRequestOptions"]));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["InputTextModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["DataTableModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["ButtonModule"], primeng_primeng__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'contact', pathMatch: 'full' },
                    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
                    { path: '**', redirectTo: 'contact' }
                ]),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: '', redirectTo: 'nav-menu', pathMatch: 'full' },
                    { path: 'nav-menu', component: _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_8__["NavMenuComponent"] },
                    { path: '**', redirectTo: 'nav-menu' }
                ])
            ],
            providers: [
                _services_index__WEBPACK_IMPORTED_MODULE_11__["ContactService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_10__["HashLocationStrategy"] },
                { provide: _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"], useClass: AppBaseRequestOptions }
            ],
            bootstrap: [
                //AppComponent,
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./AngularApp/app/components/contact/contact.component.css":
/*!*****************************************************************!*\
  !*** ./AngularApp/app/components/contact/contact.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJBbmd1bGFyQXBwL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./AngularApp/app/components/contact/contact.component.html":
/*!******************************************************************!*\
  !*** ./AngularApp/app/components/contact/contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"width:80%;margin-left: 100px\">\r\n    <tr>\r\n        <td>\r\n            <h2>Contact Details</h2>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>\r\n            <button type=\"button\" pButton icon=\"fa-plus\"\r\n                    style=\"float:left\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td>\r\n            <br />\r\n            <div class=\"ContentSideSections Implementation\">\r\n              <p-dataTable [value]=\"rowData\" [rows]=\"10\" [paginator]=\"true\"\r\n                           [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\">\r\n                <header>Contact Details</header>\r\n                <p-column field=\"contactId\" [style]=\"{'width':'50px'}\"\r\n                          header=\"ID\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"firstName\"\r\n                          header=\"FirstName\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"lastName\"\r\n                          header=\"LastName\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"email\" [style]=\"{'width':'200px'}\"\r\n                          header=\"Email\" [sortable]=\"true\"></p-column>\r\n                <p-column field=\"phone\"\r\n                          header=\"Phone No\" [sortable]=\"true\"></p-column>\r\n                <p-column header=\"Edit\">\r\n                  <ng-template let-col let-contact=\"rowData\"\r\n                               pTemplate type=\"body\">\r\n                    <button type=\"button\" pButton icon=\"fa-check\"\r\n                            (click)=\"showDialogToEdit(contact)\"\r\n                            label=\"Edit\"></button>\r\n                  </ng-template>\r\n                </p-column>\r\n                <p-column header=\"Delete\">\r\n                  <ng-template let-col let-contact=\"rowData\"\r\n                               pTemplate type=\"body\">\r\n                    <button type=\"button\" pButton icon=\"fa-close\"\r\n                            (click)=\"showDialogToDelete(contact)\"\r\n                            label=\"Delete\"></button>\r\n                  </ng-template>\r\n                </p-column>\r\n                <footer>\r\n                  <div class=\"ui-helper-clearfix\"\r\n                       style=\"width:100%\"></div>\r\n                </footer>\r\n              </p-dataTable>\r\n\r\n              <p-dialog header=\"Contact Details\" [(visible)]=\"displayDialog\"\r\n                        [responsive]=\"true\"\r\n                        showEffect=\"fade\" [modal]=\"true\">\r\n                <div class=\"ui-grid ui-grid-responsive ui-fluid ui-grid-pad\">\r\n                  <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-4\">\r\n                      <label for=\"firstname\">FirstName</label>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                      <input pInputText id=\"vin\"\r\n                             [(ngModel)]=\"contact.firstName\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-4\">\r\n                      <label for=\"lastname\">LastName</label>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                      <input pInputText id=\"lastname\"\r\n                             [(ngModel)]=\"contact.lastName\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-4\">\r\n                      <label for=\"email\">Email</label>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                      <input type=\"email\"\r\n                             pInputText id=\"email\" [(ngModel)]=\"contact.email\" />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui-grid-row\">\r\n                    <div class=\"ui-grid-col-4\">\r\n                      <label for=\"mobile\">Phone</label>\r\n                    </div>\r\n                    <div class=\"ui-grid-col-8\">\r\n                      <input pInputText id=\"mobile\"\r\n                             [(ngModel)]=\"contact.phone\" />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <footer>\r\n                  <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton icon=\"fa-close\"\r\n                            (click)=\"cancel()\"\r\n                            label=\"Cancel\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-check\"\r\n                            (click)=\"save()\" *ngIf=\"newContact\"\r\n                            label=\"Save\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-check\"\r\n                            (click)=\"save()\" *ngIf=\"!newContact\"\r\n                            label=\"Update\"></button>\r\n                  </div>\r\n                </footer>\r\n              </p-dialog>\r\n              <p-dialog header=\"Confirm Deletion\" [(visible)]=\"displayDeleteDialog\"\r\n                        modal=\"modal\" showEffect=\"fade\">\r\n                <p>\r\n                  Are you sure to delete the following contact?\r\n                </p>\r\n                <p>\r\n                  <strong>{{ fullname }}</strong><br />\r\n                </p>\r\n                <footer>\r\n                  <div class=\"ui-dialog-buttonpane ui-widget-content ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton icon=\"fa-close\"\r\n                            (click)=\"okDelete(false)\" label=\"No\"></button>\r\n                    <button type=\"button\" pButton icon=\"fa-check\"\r\n                            (click)=\"okDelete(true)\" label=\"Yes\"></button>\r\n                  </div>\r\n                </footer>\r\n              </p-dialog>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n</table>\r\n"

/***/ }),

/***/ "./AngularApp/app/components/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./AngularApp/app/components/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/index */ "./AngularApp/app/_services/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactInfo = /** @class */ (function () {
    function ContactInfo(contactId, firstName, lastName, email, phone) {
        this.contactId = contactId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
    return ContactInfo;
}());
var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService, toastrService) {
        this.contactService = contactService;
        this.toastrService = toastrService;
        this.contact = new ContactInfo();
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.editContactId = 0;
        this.loadData();
    };
    ContactComponent.prototype.loadData = function () {
        var _this = this;
        this.contactService.getContacts()
            .subscribe(function (res) {
            _this.rowData = res.result;
        });
    };
    ContactComponent.prototype.showDialogToAdd = function () {
        this.newContact = true;
        this.editContactId = 0;
        this.contact = new ContactInfo();
        this.displayDialog = true;
    };
    ContactComponent.prototype.showDialogToEdit = function (contact) {
        this.newContact = false;
        this.contact = new ContactInfo();
        this.contact.contactId = contact.contactId;
        this.contact.firstName = contact.firstName;
        this.contact.lastName = contact.lastName;
        this.contact.email = contact.email;
        this.contact.phone = contact.phone;
        this.displayDialog = true;
    };
    ContactComponent.prototype.onRowSelect = function (event) {
    };
    ContactComponent.prototype.save = function () {
        var _this = this;
        this.contactService.saveContact(this.contact)
            .subscribe(function (response) {
            _this.contact.contactId > 0 ? _this.toastrService.success('Data updated Successfully') :
                _this.toastrService.success('Data inserted Successfully');
            _this.loadData();
        });
        this.displayDialog = false;
    };
    ContactComponent.prototype.cancel = function () {
        this.contact = new ContactInfo();
        this.displayDialog = false;
    };
    ContactComponent.prototype.showDialogToDelete = function (contact) {
        this.fullname = contact.firstName + ' ' + contact.lastName;
        this.editContactId = contact.contactId;
        this.displayDeleteDialog = true;
    };
    ContactComponent.prototype.okDelete = function (isDeleteConfirm) {
        var _this = this;
        if (isDeleteConfirm) {
            this.contactService.deleteContact(this.editContactId)
                .subscribe(function (response) {
                _this.editContactId = 0;
                _this.loadData();
            });
            this.toastrService.error('Data Deleted Successfully');
        }
        this.displayDeleteDialog = false;
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./AngularApp/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./AngularApp/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["ContactService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./AngularApp/app/nav-menu/nav-menu.component.css":
/*!********************************************************!*\
  !*** ./AngularApp/app/nav-menu/nav-menu.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n\r\n        .navbar li a {\r\n            padding: 10px 16px;\r\n            border-radius: 4px;\r\n        }\r\n\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFuZ3VsYXJBcHAvYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQsMkNBQTJDOztBQUMzQzs7O0lBR0ksMEJBQTBCO0lBQzFCLGFBQWE7Q0FDaEI7O0FBRUQsMEVBQTBFOztBQUMxRTtJQUNJLGdCQUFnQjtJQUNoQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxrRUFBa0U7SUFDbEU7UUFDSSxhQUFhO1FBQ2Isd0JBQXdCO0tBQzNCOztJQUVEO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixhQUFhO0tBQ2hCOztJQUVEO1FBQ0ksWUFBWTtLQUNmOztJQUVEO1FBQ0ksMkJBQTJCO1FBQzNCLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxZQUFZO0tBQ2Y7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLFlBQVk7S0FDZjs7UUFFRztZQUNJLG1CQUFtQjtZQUNuQixtQkFBbUI7U0FDdEI7O0lBRUw7UUFDSSxvREFBb0Q7UUFDcEQsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsd0JBQXdCO0tBQzNCO0NBQ0oiLCJmaWxlIjoiQW5ndWxhckFwcC9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIC5nbHlwaGljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4vKiBIaWdobGlnaHRpbmcgcnVsZXMgZm9yIG5hdiBtZW51IGl0ZW1zICovXHJcbmxpLmxpbmstYWN0aXZlIGEsXHJcbmxpLmxpbmstYWN0aXZlIGE6aG92ZXIsXHJcbmxpLmxpbmstYWN0aXZlIGE6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDNztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogS2VlcCB0aGUgbmF2IG1lbnUgaW5kZXBlbmRlbnQgb2Ygc2Nyb2xsaW5nIGFuZCBvbiB0b3Agb2Ygb3RoZXIgaXRlbXMgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogT24gc21hbGwgc2NyZWVucywgY29udmVydCB0aGUgbmF2IG1lbnUgdG8gYSB2ZXJ0aWNhbCBzaWRlYmFyICovXHJcbiAgICAubWFpbi1uYXYge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAyMHB4KTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ0NDtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciB1bCB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhciBsaSB7XHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICAgICAubmF2YmFyIGxpIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgLm5hdmJhciBhIHtcclxuICAgICAgICAvKiBJZiBhIG1lbnUgaXRlbSdzIHRleHQgaXMgdG9vIGxvbmcsIHRydW5jYXRlIGl0ICovXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./AngularApp/app/nav-menu/nav-menu.component.html":
/*!*********************************************************!*\
  !*** ./AngularApp/app/nav-menu/nav-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>NpmAngularCore</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/counter\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/fetch-data\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./AngularApp/app/nav-menu/nav-menu.component.ts":
/*!*******************************************************!*\
  !*** ./AngularApp/app/nav-menu/nav-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
//import { Component, OnInit } from '@angular/core';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//@Component({
//  selector: 'app-nav-menu',
//  templateUrl: './nav-menu.component.html',
//  styleUrls: ['./nav-menu.component.css']
//})
//export class NavMenuComponent implements OnInit {
//  constructor() { }
//  ngOnInit() {
//  }
//}

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./AngularApp/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./AngularApp/app/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./AngularApp/environments/environment.ts":
/*!************************************************!*\
  !*** ./AngularApp/environments/environment.ts ***!
  \************************************************/
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

/***/ "./AngularApp/main.ts":
/*!****************************!*\
  !*** ./AngularApp/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./AngularApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./AngularApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./AngularApp/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\MyProjects\DotNetCoreAngular\DotNetCoreAngular\AngularApp\main.ts */"./AngularApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
var __extends = (this && this.__extends) || (function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactService } from './_services/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, DataTableModule, ButtonModule, DialogModule } from 'primeng/primeng';
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
}(BaseRequestOptions));
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                ContactComponent,
                NavMenuComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                CommonModule,
                HttpModule,
                FormsModule,
                BrowserAnimationsModule,
                ToastrModule.forRoot(),
                InputTextModule, DataTableModule, ButtonModule, DialogModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: 'contact', pathMatch: 'full' },
                    { path: 'contact', component: ContactComponent },
                    { path: '**', redirectTo: 'contact' }
                ])
            ],
            providers: [
                ContactService,
                { provide: LocationStrategy, useClass: HashLocationStrategy },
                { provide: RequestOptions, useClass: AppBaseRequestOptions }
            ],
            bootstrap: [
                //AppComponent,
                ContactComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
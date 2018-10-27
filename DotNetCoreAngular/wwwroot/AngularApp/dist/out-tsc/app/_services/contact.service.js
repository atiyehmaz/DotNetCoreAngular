var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
        this._getContactsUrl = "api/Contact/GetContacts";
        this._saveUrl = '/Contact/SaveContact/';
        this._updateUrl = '/Contact/UpdateContact/';
        this._deleteByIdUrl = '/Contact/DeleteContactByID/';
    }
    ContactService.prototype.getContacts = function () {
        var headers = new Headers();
        headers.append("If-Modified-Since", "Tue, 24 July 2017 00:00:00 GMT");
        var getContactsUrl = this._getContactsUrl;
        return this.http.get(getContactsUrl, { headers: headers })
            .map(function (response) { return response.json(); });
    };
    //Post Savd and Update operation
    ContactService.prototype.saveContact = function (contact) {
        var body = JSON.stringify(contact);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this._saveUrl, body, options)
            .map(function (res) { return res.json().message; })
            .catch(this.handleError);
    };
    //Delete Operation
    ContactService.prototype.deleteContact = function (id) {
        //debugger
        var deleteByIdUrl = this._deleteByIdUrl + '/' + id;
        return this.http.delete(deleteByIdUrl)
            .map(function (response) { return response.json().message; })
            .catch(this.handleError);
    };
    ContactService.prototype.handleError = function (error) {
        return Observable.throw(error.json().error || 'Opps!! Server error');
    };
    ContactService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], ContactService);
    return ContactService;
}());
export { ContactService };
//# sourceMappingURL=contact.service.js.map
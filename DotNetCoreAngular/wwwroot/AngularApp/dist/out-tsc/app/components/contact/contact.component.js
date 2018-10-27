var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ContactService } from '../../_services/index';
import { ToastrService } from 'ngx-toastr';
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
        Component({
            selector: 'contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [ContactService, ToastrService])
    ], ContactComponent);
    return ContactComponent;
}());
export { ContactComponent };
//# sourceMappingURL=contact.component.js.map
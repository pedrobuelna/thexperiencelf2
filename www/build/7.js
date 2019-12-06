webpackJsonp([7],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfcheckoutPageModule", function() { return SelfcheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selfcheckout__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelfcheckoutPageModule = /** @class */ (function () {
    function SelfcheckoutPageModule() {
    }
    SelfcheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selfcheckout__["a" /* SelfcheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selfcheckout__["a" /* SelfcheckoutPage */]),
            ],
        })
    ], SelfcheckoutPageModule);
    return SelfcheckoutPageModule;
}());

//# sourceMappingURL=selfcheckout.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfcheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SelfcheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelfcheckoutPage = /** @class */ (function () {
    function SelfcheckoutPage(navCtrl, navParams, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.formgroup = formbuilder.group({
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            apellido: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
        });
        this.nombre = this.formgroup.controls["nombre"];
        this.apellido = this.formgroup.controls["apellido"];
    }
    SelfcheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelfcheckoutPage');
    };
    SelfcheckoutPage.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot("HomePage", null, { direction: "back", animate: true });
    };
    SelfcheckoutPage.prototype.onclickPageSeeyou = function () {
        this.navCtrl.push("SeeyouPage");
    };
    SelfcheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selfcheckout',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/selfcheckout/selfcheckout.html"*/'<!--\n  Generated template for the SelfcheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content class="selfcheckout">\n  <div class="title_content1">\n    <span class="txt_content1">Self Check-out</span>\n  </div>\n  <div class="content_form2">\n      <form action="" id="form4_1" name="form4_1" [formGroup]="formgroup">\n          <div class="content_stay">\n              <div class="contentinput_stay">\n                  <ion-label>Name</ion-label>\n                  <ion-input formControlName="nombre" type="text"></ion-input>\n                  <span class="error1" *ngIf="nombre.hasError(\'required\') && nombre.touched ">Rellene el Campo</span>\n                  <span class="error1" *ngIf="nombre.hasError(\'minlength\') && nombre.touched ">5 Caractéres minimo</span>\n              </div>\n              <div class="contentinput_stay">\n                  <ion-label>Last Name</ion-label>\n                  <ion-input formControlName="apellido" type="text"></ion-input>\n                  <span class="error1" *ngIf="apellido.hasError(\'required\') && apellido.touched ">Rellene el Campo</span>\n                  <span class="error1" *ngIf="apellido.hasError(\'minlength\') && apellido.touched ">5 Caractéres minimo</span>\n              </div>\n              <div class="boton_content applycode">\n                  <button ion-button full color="dark"  (click)="onclickPageSeeyou()">apply code</button>\n              </div>\n            </div>\n      </form>\n      \n  </div>\n  <div class="menus_down clearfix">\n      <span class="left txt2" (click)="onclickPagePop()">Back to main menu</span>\n      <span class="right txt2">Stay options</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/selfcheckout/selfcheckout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SelfcheckoutPage);
    return SelfcheckoutPage;
}());

//# sourceMappingURL=selfcheckout.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
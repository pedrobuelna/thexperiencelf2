webpackJsonp([8],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfcheckinPageModule", function() { return SelfcheckinPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selfcheckin__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelfcheckinPageModule = /** @class */ (function () {
    function SelfcheckinPageModule() {
    }
    SelfcheckinPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selfcheckin__["a" /* SelfcheckinPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selfcheckin__["a" /* SelfcheckinPage */]),
            ],
        })
    ], SelfcheckinPageModule);
    return SelfcheckinPageModule;
}());

//# sourceMappingURL=selfcheckin.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelfcheckinPage; });
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
 * Generated class for the SelfcheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelfcheckinPage = /** @class */ (function () {
    function SelfcheckinPage(navCtrl, navParams, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.formgroup = formbuilder.group({
            checkin: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            checkout: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            number_adults: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        this.checkin = this.formgroup.controls["checkin"];
        this.checkout = this.formgroup.controls["checkout"];
        this.number_adults = this.formgroup.controls["number_adults"];
    }
    SelfcheckinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelfcheckinPage');
    };
    SelfcheckinPage.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot("HomePage", null, { direction: "back", animate: true });
    };
    SelfcheckinPage.prototype.onclickPageBienvenido = function () {
        this.navCtrl.push("BienvenidoPage");
    };
    SelfcheckinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selfcheckin',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/selfcheckin/selfcheckin.html"*/'<!--\n  Generated template for the SelfcheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content>\n  <div class="title_content1">\n    <span class="txt_content1">Self Check-in</span>\n  </div>\n  <div class="content_form2">\n      <div class="content_stay">\n          <form action="bienvenido.html" [formGroup]="formgroup"  id="form3_1" name="form3_1">\n              <img src="../../assets/imgs/fondo_formulario.png" alt="fondo" class="fondo_palmera">\n              <div class="contentinput_stay">\n                  <ion-label>Name</ion-label>\n                  <ion-input formControlName="checkin"></ion-input>\n                  <span class="error1" *ngIf="checkin.hasError(\'required\') && checkin.touched ">Rellene el Campo</span>\n                  <span class="error1" *ngIf="checkin.hasError(\'minlength\') && checkin.touched ">5 Caractéres minimo</span>\n              </div>\n              <div class="contentinput_stay">\n                  <ion-label>Last Name</ion-label>\n                  <ion-input formControlName="checkout"></ion-input>\n                  <span class="error1" *ngIf="checkout.hasError(\'required\') && checkout.touched ">Rellene el Campo</span>\n                  <span class="error1" *ngIf="checkout.hasError(\'minlength\') && checkout.touched ">5 Caractéres minimo</span>\n              </div>\n              <div class="contentinput_stay">\n                  <ion-label>Confirmation Code</ion-label>\n                  <ion-input formControlName="number_adults" type="number"></ion-input>\n                  <span class="error1" *ngIf="number_adults.hasError(\'required\') && number_adults.touched ">Rellene el Campo</span>\n              </div>\n              <div class="boton_content applycode">\n                  <button ion-button full color="dark" type="submit" [disabled]="formgroup.invalid">apply code</button>\n                  <span class="desc1 txt2">CLICK APPLY TO CHECK-IN AND GET ROOM KEY</span>\n              </div>\n          </form>\n          \n  </div>\n</div>\n<div class="menus_down clearfix">\n    <span class="left txt2" (click)="onclickPagePop()">Back to menu</span>\n    <span class="right txt2">Stay options</span>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/selfcheckin/selfcheckin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SelfcheckinPage);
    return SelfcheckinPage;
}());

//# sourceMappingURL=selfcheckin.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
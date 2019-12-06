webpackJsonp([11],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roomkey1PageModule", function() { return Roomkey1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roomkey1__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Roomkey1PageModule = /** @class */ (function () {
    function Roomkey1PageModule() {
    }
    Roomkey1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__roomkey1__["a" /* Roomkey1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__roomkey1__["a" /* Roomkey1Page */]),
            ],
        })
    ], Roomkey1PageModule);
    return Roomkey1PageModule;
}());

//# sourceMappingURL=roomkey1.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roomkey1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the Roomkey1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Roomkey1Page = /** @class */ (function () {
    function Roomkey1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Roomkey1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Roomkey1Page');
    };
    Roomkey1Page.prototype.onclickPageRoomkey1 = function () {
        this.navCtrl.push("Roomkey1Page");
    };
    Roomkey1Page.prototype.onclickPageroomkey2 = function () {
        this.navCtrl.push("Roomkey2Page");
    };
    Roomkey1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roomkey1',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/roomkey1/roomkey1.html"*/'<!--\n  Generated template for the Roomkey1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <div>\n        <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n      </div>\n  </ion-navbar>\n</ion-header>\n<ion-content class="content_room">\n  <div>\n    <span class="txt5">Room Key</span>\n    <div class="content_buton_key">\n        <!-- <img src="../../assets/imgs/llave.png" alt="llave"> -->\n      <button class="content_buton_key" ion-button full color="dark" (click)="onclickPageroomkey2()">Touch to Unlock</button>\n    </div>\n    <img src="../../assets/imgs/SEOS-by-ASSA-ABLOY-RGB-Black.PNG" alt="ASSAABLOY" class="assaabloy">\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/roomkey1/roomkey1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Roomkey1Page);
    return Roomkey1Page;
}());

//# sourceMappingURL=roomkey1.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
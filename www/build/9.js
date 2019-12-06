webpackJsonp([9],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeyouPageModule", function() { return SeeyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seeyou__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeeyouPageModule = /** @class */ (function () {
    function SeeyouPageModule() {
    }
    SeeyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seeyou__["a" /* SeeyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seeyou__["a" /* SeeyouPage */]),
            ],
        })
    ], SeeyouPageModule);
    return SeeyouPageModule;
}());

//# sourceMappingURL=seeyou.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeeyouPage; });
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
 * Generated class for the SeeyouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeeyouPage = /** @class */ (function () {
    function SeeyouPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SeeyouPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeeyouPage');
    };
    SeeyouPage.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot("HomePage", null, { direction: "back", animate: true });
    };
    SeeyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seeyou',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/seeyou/seeyou.html"*/'<!--\n  Generated template for the BienvenidoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content id="bienvenido_content">\n    <img src="../../assets/imgs/fondo_bienvenido.png" alt="bienvenido">\n    <span class="title3">Hasta pronto Sr. Arturo.</span>\n    <div class="boton_content">\n      <button ion-button full color="dark">Tap for exclusive deals.</button>\n    </div>\n    <span class="desc1 txt2" (click)="onclickPagePop()">back to main menu</span>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/seeyou/seeyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SeeyouPage);
    return SeeyouPage;
}());

//# sourceMappingURL=seeyou.js.map

/***/ })

});
//# sourceMappingURL=9.js.map
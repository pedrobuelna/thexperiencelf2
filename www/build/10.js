webpackJsonp([10],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roomkey2PageModule", function() { return Roomkey2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roomkey2__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Roomkey2PageModule = /** @class */ (function () {
    function Roomkey2PageModule() {
    }
    Roomkey2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__roomkey2__["a" /* Roomkey2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__roomkey2__["a" /* Roomkey2Page */]),
            ],
        })
    ], Roomkey2PageModule);
    return Roomkey2PageModule;
}());

//# sourceMappingURL=roomkey2.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Roomkey2Page; });
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
 * Generated class for the Roomkey2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Roomkey2Page = /** @class */ (function () {
    function Roomkey2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Roomkey2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Roomkey2Page');
    };
    Roomkey2Page.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot("HomePage", null, { direction: "back", animate: true });
    };
    Roomkey2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roomkey2',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/roomkey2/roomkey2.html"*/'<!--\n  Generated template for the Roomkey1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n  <ion-content class="content_room">\n    <div>\n      <span class="txt5">Room Key</span>\n      <div class="bg">\n          <div class="radar">\n          </div>\n          <div class="radar">\n          </div>\n          <div class="radar">\n          </div>\n          <div class="radar">\n          </div>\n      </div>\n      <div class="content_buton_key">\n          \n          <!-- <img src="../../assets/imgs/llave.png" alt="llave"> -->\n        <button class="content_buton_key2" ion-button full color="white" (click)="onclickPagePop()">Door Unlocked</button>\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/roomkey2/roomkey2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Roomkey2Page);
    return Roomkey2Page;
}());

//# sourceMappingURL=roomkey2.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
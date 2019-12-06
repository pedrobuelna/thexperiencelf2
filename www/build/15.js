webpackJsonp([15],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendario2PageModule", function() { return Calendario2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendario2__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Calendario2PageModule = /** @class */ (function () {
    function Calendario2PageModule() {
    }
    Calendario2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calendario2__["a" /* Calendario2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__calendario2__["a" /* Calendario2Page */]),
            ],
        })
    ], Calendario2PageModule);
    return Calendario2PageModule;
}());

//# sourceMappingURL=calendario2.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendario2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_datepicker_helper_datepicker_helper__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the Calendario2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Calendario2Page = /** @class */ (function () {
    function Calendario2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Calendario2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarioPage2');
        $('#datepicker2').datepicker({
            "navTitles": {
                "days": 'yyyy <i>MM</i>',
            },
            "onSelect": function (fd, d, picker) {
                if (!d)
                    return;
            },
            "onChangeYear": function (year) {
            },
            "onShow": function (fd, animationCompleted) {
            },
            "onChangeMonth": function (month, year) {
            },
            "prevHtml": __WEBPACK_IMPORTED_MODULE_0__providers_datepicker_helper_datepicker_helper__["a" /* DatepickerHelperProvider */].svgArrow,
            "nextHtml": __WEBPACK_IMPORTED_MODULE_0__providers_datepicker_helper_datepicker_helper__["a" /* DatepickerHelperProvider */].svgArrow
        });
    };
    Calendario2Page.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot("HomePage", null, { direction: "back", animate: true });
    };
    Calendario2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendario2',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/calendario2/calendario2.html"*/'<!--\n  Generated template for the YourstayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding class="calendario">\n  <div class="content_stay">\n    <div class="clearfix">\n        <span (click)="onclickPagePop()" class="left txt2">Back to hotel</span>\n        <span class="right txt2">Stay options</span>\n    </div>\n    <span class="title1">your stay</span>\n    <div class="clearfix">\n        <span class="left txt3">choose date</span>\n    </div>\n    <div class="calendario_content">\n        <input id="datepicker2" type="text" data-inline="true" data-language="en" />\n    </div>\n    <div class="boton_content ">\n        <button ion-button full color="dark" (click)="onclickPagePop()" >see availability</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/calendario2/calendario2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], Calendario2Page);
    return Calendario2Page;
}());

//# sourceMappingURL=calendario2.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
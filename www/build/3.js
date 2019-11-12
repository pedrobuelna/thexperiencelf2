webpackJsonp([3],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourstayPageModule", function() { return YourstayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__yourstay__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var YourstayPageModule = /** @class */ (function () {
    function YourstayPageModule() {
    }
    YourstayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__yourstay__["a" /* YourstayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__yourstay__["a" /* YourstayPage */]),
            ],
        })
    ], YourstayPageModule);
    return YourstayPageModule;
}());

//# sourceMappingURL=yourstay.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(platform, navCtrl, navParams) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.platform.ready().then(function () {
            // cordova.plugins.DatePicker.create(
            //     document.querySelector('.inline-datepicker'),
            //     {
            //         'id': 'date-from-picker-1', // this should be the unique identifier of the picker
            //         'mode': cordova.plugins.DatePicker.Mode.DATE, // default is DATE_AND_TIME
            //         'date': new Date('2016-11-24T'),
            //         'minimumDate': new Date()
            //     },
            //     function (data) {
            //         // this callback is called everytime input is changed
            //         // document.querySelector('.date-label').innerText = new Date(data.date).toLocaleDateString();
            //     }
            // );
        });
    };
    HomePage.prototype.onclickPageSignin = function () {
        this.navCtrl.push("SigninPage");
    };
    HomePage.prototype.onclickPageCalendar = function () {
        this.navCtrl.push("CalendarioPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/home/home.html"*/'\n<ion-header class="bordeBajo" >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <div>\n        <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <!-- <div class="date-label">No date selected</div>\n    <div class="inline-datepicker"></div> -->\n  <div class="background1 padding">\n    <div class="content1 ion-padding ">\n      <p class="text1 ion-text-center">\n        <span class="bold">Spring Sale:15% Off </span><br>\n        Book early, save more <br>\n        Expires Feb. 19,2019  \n      </p>\n    </div>\n    <ion-grid>\n  <ion-row>\n    <ion-col class="ion-padding content_forms">\n      <div>\n        <div class="backgroundForm">\n          <ion-row>\n            <ion-col class="ion-padding">\n              <div class="input_content">\n                <input type="text" name="checkinout" placeholder="Check in/ Checkout"  (click)="onclickPageCalendar()">\n                <ion-icon name="calendar" (click)="onclickPageCalendar()"> </ion-icon>\n              </div>\n              <div class="input_content">\n                  <select class="combo1">\n                    <option value="1">1 Guest</option>\n                  </select>\n                  <ion-icon name="arrow-down"></ion-icon>\n              </div>\n              <div class="linksContent clearfix">\n                <div class="">\n                  <button  class="link1 left" ion-button color="light" (click)="onclickPageSignin()" clear>Sign In</button>\n                </div>\n                <div class="">\n                  <button  class="link1 right" ion-button color="light" clear>Special Rates</button>\n                </div>  \n              </div>\n              \n              <div class="boton_content">\n                <button ion-button full color="dark">see availability</button>\n              </div>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YourstayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(299);
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
 * Generated class for the YourstayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YourstayPage = /** @class */ (function () {
    function YourstayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    YourstayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad YourstayPage');
    };
    YourstayPage.prototype.onclickPagePop = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], null, { direction: "back", animate: true });
    };
    YourstayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-yourstay',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/yourstay/yourstay.html"*/'<!--\n  Generated template for the YourstayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <div>\n          <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n  <div class="content_stay">\n    <div class="clearfix">\n        <span class="left txt2" (click)="onclickPagePop()">Back to hotel</span>\n        <span class="right txt2">Stay options</span>\n    </div>\n    <span class="title1">your stay</span>\n    <div class="contentinput_stay">\n        <ion-label>Check in</ion-label>\n        <ion-input name="checkin"></ion-input>\n    </div>\n    <div class="contentinput_stay">\n        <ion-label>Check out</ion-label>\n        <ion-input name="checkout"></ion-input>\n    </div>\n    <div class="contentinput_stay">\n        <ion-label>number of adults</ion-label>\n        <ion-input name="number_adults"></ion-input>\n    </div>\n    <div class="contentinput_stay">\n        <ion-label>code</ion-label>\n        <ion-input name="code"></ion-input>\n    </div>\n    <div class="boton_content applycode">\n        <button ion-button full color="colorcustom1">apply code</button>\n        <span class="desc1 txt2">CLICK APPLY TO UPDATE THE CALENDER</span>\n    </div>\n    <div class="boton_content ">\n      <button ion-button full color="dark">see availability</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/yourstay/yourstay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], YourstayPage);
    return YourstayPage;
}());

//# sourceMappingURL=yourstay.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
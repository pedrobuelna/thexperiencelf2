webpackJsonp([13],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

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

/***/ })

});
//# sourceMappingURL=13.js.map
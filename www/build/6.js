webpackJsonp([6],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]),
            ],
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
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
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.onclickPageSelfcheckin = function () {
        this.navCtrl.push("SelfcheckinPage");
    };
    ServicesPage.prototype.onclickPageRoomkey1 = function () {
        this.navCtrl.push("Roomkey1Page");
    };
    ServicesPage.prototype.onclickPageRoomservice = function () {
        this.navCtrl.push("RoomServicesPage");
    };
    ServicesPage.prototype.onclickPageSelfcheckout = function () {
        this.navCtrl.push("SelfcheckoutPage");
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/services/services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <div>\n        <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n      </div>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="background1 padding">\n      <div class="backgroundrgba"></div>\n      <div class="content_main_service">\n          <div class="content_service">\n              <div class="subcontent_service" (click)="onclickPageSelfcheckin()">\n                  <div class="clearfix">\n                      <span class=" text5">Self Check-In</span><img src="../../assets/imgs/puerta_in.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service" (click)="onclickPageRoomkey1()">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Room Key</span><img src="../../assets/imgs/llave.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service" (click)="onclickPageRoomservice()">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Room Service</span><img src="../../assets/imgs/servicio.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Concierge</span><img src="../../assets/imgs/concierge.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Call Taxi</span><img src="../../assets/imgs/taxi.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Activites/Spa</span><img src="../../assets/imgs/lupa.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n            <div class="content_service" (click)="onclickPageSelfcheckout()">\n              <div class="subcontent_service">\n                  <div class="clearfix">\n                      <span class=" text5">Self Check Out</span><img src="../../assets/imgs/puerta_out.png" alt="service" class="icon_service">\n                  </div>\n              </div>\n            </div>\n      </div>\n        \n    </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
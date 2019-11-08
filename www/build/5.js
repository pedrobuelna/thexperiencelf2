webpackJsonp([5],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubserviceCatalogPageModule", function() { return SubserviceCatalogPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subservice_catalog__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubserviceCatalogPageModule = /** @class */ (function () {
    function SubserviceCatalogPageModule() {
    }
    SubserviceCatalogPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__subservice_catalog__["a" /* SubserviceCatalogPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__subservice_catalog__["a" /* SubserviceCatalogPage */]),
            ],
        })
    ], SubserviceCatalogPageModule);
    return SubserviceCatalogPageModule;
}());

//# sourceMappingURL=subservice-catalog.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubserviceCatalogPage; });
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
 * Generated class for the SubserviceCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubserviceCatalogPage = /** @class */ (function () {
    function SubserviceCatalogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubserviceCatalogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubserviceCatalogPage');
    };
    SubserviceCatalogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-subservice-catalog',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/subservice-catalog/subservice-catalog.html"*/'<!--\n  Generated template for the SubserviceCatalogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <div>\n            <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="content_main_service">\n        <div class="content_service">\n            <div class="subcontent_service">\n                <div class="clearfix">\n                    <span class=" text5">Surf Board</span>\n                </div>\n            </div>\n            <div class="subcontent_service">\n                <div class="clearfix">\n                    <span class=" text5">Boogie Board</span>\n                </div>\n            </div>\n            <div class="subcontent_service">\n                <div class="clearfix">\n                    <span class=" text5">Kayak</span>\n                </div>\n            </div>\n            <div class="subcontent_service">\n                <div class="clearfix">\n                    <span class=" text5">Bicycle</span>\n                </div>\n            </div>\n            <div class="subcontent_service">\n                <div class="clearfix">\n                    <span class=" text5">Beach Chairs/Towels</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n    '/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/subservice-catalog/subservice-catalog.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SubserviceCatalogPage);
    return SubserviceCatalogPage;
}());

//# sourceMappingURL=subservice-catalog.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
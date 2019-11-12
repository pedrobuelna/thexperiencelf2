webpackJsonp([1],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesMenuPageModule", function() { return ActivitiesMenuPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_menu__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ActivitiesMenuPageModule = /** @class */ (function () {
    function ActivitiesMenuPageModule() {
    }
    ActivitiesMenuPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__activities_menu__["a" /* ActivitiesMenuPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__activities_menu__["a" /* ActivitiesMenuPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ActivitiesMenuPageModule);
    return ActivitiesMenuPageModule;
}());

//# sourceMappingURL=activities-menu.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__btn_header_btn_header__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__btns_acordeon_btns_acordeon__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__btn_header_btn_header__["a" /* BtnHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__btns_acordeon_btns_acordeon__["a" /* BtnsAcordeonComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["c" /* IonicModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__btn_header_btn_header__["a" /* BtnHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__btns_acordeon_btns_acordeon__["a" /* BtnsAcordeonComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the BtnHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BtnHeaderComponent = /** @class */ (function () {
    function BtnHeaderComponent() {
        this.titleComponent = "Title component";
        console.log('Hello BtnHeaderComponent Component');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("title"),
        __metadata("design:type", String)
    ], BtnHeaderComponent.prototype, "titleComponent", void 0);
    BtnHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'btn-header',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/components/btn-header/btn-header.html"*/'<!-- Generated template for the BtnHeaderComponent component -->\n<ion-grid class="grid-btns">\n    <ion-row class="grid-btn-nav" justify-content-center align-items-center>\n        <ion-col class="col-btn">\n            <button text-uppercase color="color-negro-primary" ion-button small clear outline>Back to main menu</button>\n        </ion-col>\n        <ion-col class="col-btn">\n            <button text-uppercase color="color-negro-primary" ion-button small clear outline>Stay options</button>\n        </ion-col>\n    </ion-row>\n    <ion-row justify-content-center>\n        <h1 class="grid-title">{{titleComponent}}</h1>\n    </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/components/btn-header/btn-header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BtnHeaderComponent);
    return BtnHeaderComponent;
}());

//# sourceMappingURL=btn-header.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnsAcordeonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
 * Generated class for the BtnsAcordeonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var BtnsAcordeonComponent = /** @class */ (function () {
    function BtnsAcordeonComponent() {
        this.btnSize = 45;
        this.btnMove = 35.5555556;
        this.btnItems = [];
        this.btnIndex = 100;
        this.btnPlus = 1;
        console.log('Hello BtnsAcordeonComponent Component');
    }
    BtnsAcordeonComponent.prototype.getZIndex = function (position) {
        return this.btnIndex + position;
    };
    BtnsAcordeonComponent.prototype.getTransForm = function (position) {
        return "translateX(-" + (position * this.btnMove) + "%)";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("btnSize"),
        __metadata("design:type", Number)
    ], BtnsAcordeonComponent.prototype, "btnSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("btnMove"),
        __metadata("design:type", Number)
    ], BtnsAcordeonComponent.prototype, "btnMove", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("btnItems"),
        __metadata("design:type", Array)
    ], BtnsAcordeonComponent.prototype, "btnItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("btnIndex"),
        __metadata("design:type", Number)
    ], BtnsAcordeonComponent.prototype, "btnIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("btnPlus"),
        __metadata("design:type", Number)
    ], BtnsAcordeonComponent.prototype, "btnPlus", void 0);
    BtnsAcordeonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'btns-acordeon',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/components/btns-acordeon/btns-acordeon.html"*/'<!-- Generated template for the BtnsAcordeonComponent component -->\n<ul class="ul-img-acordeon">\n    <ng-template ngFor let-item let-position="index" let-isLast="last" [ngForOf]="btnItems">\n        <li [style.z-index]="getZIndex(position)"\n            [style.transform]="getTransForm(position)"\n            [style.height.px]="btnSize"\n            [style.width.px]="btnSize">\n            <img [src]="item.img" alt="">\n        </li>\n        <li *ngIf="isLast" \n            [style.z-index]="getZIndex(position+1)" \n            [style.transform]="getTransForm(position+1)"\n            [style.height.px]="btnSize"\n            [style.width.px]="btnSize">\n            <span>+{{btnPlus}}</span>\n        </li>\n    </ng-template>\n</ul>'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/components/btns-acordeon/btns-acordeon.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], BtnsAcordeonComponent);
    return BtnsAcordeonComponent;
}());

//# sourceMappingURL=btns-acordeon.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesMenuPage; });
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
 * Generated class for the ActivitiesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesMenuPage = /** @class */ (function () {
    function ActivitiesMenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.btnSiezAccor = 30;
        this.btnItemsAccor = [{
                "img": "https://fakepersongenerator.com/Face/female/female20161025281720215.jpg"
            }, {
                "img": "https://fakepersongenerator.com/Face/female/female102181648005.jpg"
            }, {
                "img": "https://fakepersongenerator.com/Face/male/male1085695495819.jpg"
            }];
    }
    ActivitiesMenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesMenuPage');
    };
    ActivitiesMenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activities-menu',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/activities-menu/activities-menu.html"*/'<!--\n  Generated template for the ActivitiesMenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <div>\n            <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <btn-header title="Activities Menu"></btn-header>\n    <ion-grid class="grid-activities-menu" no-margin no-padding>\n        <ion-row class="grid-activities-menu-img">\n            <ion-col col-6>\n                <img src="../../assets/imgs/zona-centro.jpg" alt="">\n            </ion-col>\n            <ion-col col-6>\n                <img src="../../assets/imgs/lancha.jpg" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-activities-menu-description">\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-activities-menu-img">\n            <ion-col col-6>\n                <img src="../../assets/imgs/zona-centro.jpg" alt="">\n            </ion-col>\n            <ion-col col-6>\n                <img src="../../assets/imgs/lancha.jpg" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-activities-menu-description">\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-activities-menu-img">\n            <ion-col col-6>\n                <img src="../../assets/imgs/zona-centro.jpg" alt="">\n            </ion-col>\n            <ion-col col-6>\n                <img src="../../assets/imgs/lancha.jpg" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-activities-menu-description">\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n            <ion-col col-6>\n                <p>Paragliding Experience</p>\n                <ion-grid no-margin no-padding>\n                    <ion-row class="grid-activities-menu-description-row">\n                        <ion-col col-auto>$50 USD</ion-col>\n                        <ion-col col-auto>\n                            <btns-acordeon [btnItems]="btnItemsAccor" [btnSize]="btnSiezAccor"></btns-acordeon>\n                        </ion-col>\n                    </ion-row>\n                </ion-grid>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/activities-menu/activities-menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ActivitiesMenuPage);
    return ActivitiesMenuPage;
}());

//# sourceMappingURL=activities-menu.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
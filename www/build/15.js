webpackJsonp([15],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo">\n    <ion-navbar>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <div>\n            <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n        </div>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list class="list-cart">\n        <ion-item>\n            <ion-thumbnail class="list-cart-thumbnail" item-start>\n                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg">\n            </ion-thumbnail>\n            <h2 class="title">Artisinal IPA</h2>\n            <div class="input_content">\n                <select class="combo1">\n                    <option value="1">US 7.5</option>\n                </select>\n                <ion-icon name="arrow-down"></ion-icon>\n            </div>\n            <p class="description">Only 1 left in stock</p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail class="list-cart-thumbnail" item-start>\n                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg">\n            </ion-thumbnail>\n            <h2 class="title">Artisinal IPA</h2>\n            <div class="input_content">\n                <select class="combo1">\n                    <option value="1">US 7.5</option>\n                </select>\n                <ion-icon name="arrow-down"></ion-icon>\n            </div>\n            <p class="description">Only 1 left in stock</p>\n        </ion-item>\n        <ion-item>\n            <ion-thumbnail class="list-cart-thumbnail" item-start>\n                <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/20/0/fnd_beer-istock.jpg.rend.hgtvcom.616.462.suffix/1448031613421.jpeg">\n            </ion-thumbnail>\n            <h2 class="title">Artisinal IPA</h2>\n            <div class="input_content">\n                <select class="combo1">\n                    <option value="1">US 7.5</option>\n                </select>\n                <ion-icon name="arrow-down"></ion-icon>\n            </div>\n            <p class="description">Only 1 left in stock</p>\n        </ion-item>\n    </ion-list>\n    <ion-grid no-padding class="grid-cart-total">\n        <ion-row class="grid-cart-total-title">\n            <ion-col>Cart Total</ion-col>\n        </ion-row>\n        <ion-row class="grid-cart-total-subtotals">\n            <ion-col class="text">Subtotal</ion-col>\n            <ion-col class="value">$1,320</ion-col>\n        </ion-row>\n        <ion-row class="grid-cart-add-promo">\n            <ion-col>\n                <button class="border-amarillo-primary" color="color-negro-primary" small clear ion-button icon-start>\n                    <ion-icon name="add"></ion-icon>\n                    Use promotion\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row  class="grid-cart-info" justify-content-around align-items-center>\n            <ion-col col-auto>$1,452</ion-col>\n            <ion-col col-auto>Proceed to shipping</ion-col>\n        </ion-row>\n        <ion-row class="grid-cart-pay">\n            <ion-col>\n                <button no-margin color="color-negro-primary" ion-button full>Check out and pay with finger print!</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <ion-grid class="grid-footer-links">\n        <ion-row class="grid-footer-links-tabs" text-uppercase justify-content-between>\n            <ion-col col-auto>Shop</ion-col>\n            <ion-col col-auto>Our Story</ion-col>\n            <ion-col col-auto>Press</ion-col>\n        </ion-row>\n        <ion-row class="grid-footer-links-description">\n            <ion-col>Discover the best products, curated by a community with great taste.</ion-col>\n        </ion-row>\n        <ion-row class="grid-footer-btn-tiendas">\n            <ion-col>\n                <button color="color-negro-primary" ion-button clear icon-end>\n                    DOWNLOAD FOR iOS\n                    <ion-icon name="arrow-dropright"></ion-icon>\n                </button>\n                <button color="color-negro-primary" ion-button clear icon-end>\n                    DOWNLOAD FOR ANDROID\n                    <ion-icon name="arrow-dropright"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row justify-content-center class="grid-footer-social-links">\n            <ion-col col-auto>\n                <img src="../../assets/imgs/twitter.png" alt="">\n            </ion-col>\n            <ion-col col-auto>\n                <img src="../../assets/imgs/instagram.png" alt="">\n            </ion-col>\n            <ion-col col-auto>\n                <img src="../../assets/imgs/facebook.png" alt="">\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-footer-politicas">\n            <ion-col col-auto>\n                <button color="colorcustom1" ion-button clear>Privacy Policy</button>\n            </ion-col>\n            <ion-col col-auto>\n                <button color="colorcustom1" ion-button clear>Terms and Conditions</button>\n            </ion-col>\n        </ion-row>\n        <ion-row class="grid-footer-derechos">\n            <ion-col>© 2017 Adobe Systems Incorporated. All rights reserved. Any reference to Ginchy or any associated logos is for demonstration purposes only and is not intended to refer to any actual organization or event.</ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=15.js.map
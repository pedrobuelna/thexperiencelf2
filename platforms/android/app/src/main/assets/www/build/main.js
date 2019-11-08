webpackJsonp([15],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(195);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onclickPageSignin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <div>\n        <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	 <div class="background1 padding">\n    <div class="content1 ion-padding ">\n      <p class="text1 ion-text-center">\n        <span class="bold">Log in to Xperience</span>\n      </p>\n    </div>\n    <ion-grid>\n  <ion-row>\n    <ion-col class="ion-padding">\n      <div>\n        <div class="backgroundForm">\n          <ion-row>\n            <ion-col class="ion-padding">\n              <form action="login.html" name="login" ng-submit="sendForm()">\n                <div class="input_content">\n                  <input type="email" name="email" placeholder="Email" ng-model="email">\n                </div>\n                <div class="input_content">\n                  <input type="password" name="password" placeholder="Password" required>\n                </div>\n                <div class="linksContent clearfix">\n                  <div class="">\n                    <a href="#" class="link1 left">Reset password</a>\n                  </div>\n                  <div class="">\n                    <a href="#" class="link1 right" (click)="onclickPageSignin()" >Sign in</a>\n                  </div>  \n                </div>\n                \n                <div class="boton_content">\n                  <button ion-button full color="dark" type="submit">Log in</button>\n                </div>\n              </form>\n            </ion-col>\n          </ion-row>\n          \n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bienvenido/bienvenido.module": [
		274,
		12
	],
	"../pages/booked/booked.module": [
		275,
		11
	],
	"../pages/calendario/calendario.module": [
		276,
		1
	],
	"../pages/home/home.module": [
		277,
		10
	],
	"../pages/login/login.module": [
		278,
		14
	],
	"../pages/prueba/prueba.module": [
		279,
		9
	],
	"../pages/room-services/room-services.module": [
		281,
		8
	],
	"../pages/roomkey1/roomkey1.module": [
		280,
		7
	],
	"../pages/roomkey2/roomkey2.module": [
		282,
		6
	],
	"../pages/seeyou/seeyou.module": [
		283,
		5
	],
	"../pages/selfcheckin/selfcheckin.module": [
		284,
		4
	],
	"../pages/selfcheckout/selfcheckout.module": [
		285,
		3
	],
	"../pages/services/services.module": [
		286,
		2
	],
	"../pages/signin/signin.module": [
		287,
		13
	],
	"../pages/yourstay/yourstay.module": [
		288,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarsProvider; });
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

/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVarsProvider = /** @class */ (function () {
    function GlobalVarsProvider() {
        this._isAndroid = false;
        this._isIOS = false;
    }
    Object.defineProperty(GlobalVarsProvider.prototype, "isAndroid", {
        get: function () {
            return this._isAndroid;
        },
        set: function (v) {
            this._isAndroid = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GlobalVarsProvider.prototype, "isIOS", {
        get: function () {
            return this._isIOS;
        },
        set: function (v) {
            this._isIOS = v;
        },
        enumerable: true,
        configurable: true
    });
    GlobalVarsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], GlobalVarsProvider);
    return GlobalVarsProvider;
}());

//# sourceMappingURL=global-vars.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.formgroup = formbuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            nombre: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(15)]],
            apellido: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.email = this.formgroup.controls["email"];
        this.nombre = this.formgroup.controls["nombre"];
        this.apellido = this.formgroup.controls["apellido"];
    }
    // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // this.formgroup = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    //   nombre: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    //   apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
    // });
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.onclickPageServices = function () {
        this.navCtrl.push("ServicesPage");
    };
    SigninPage.prototype.enviar = function () {
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/signin/signin.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="bordeBajo" >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n      <div>\n        <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n      </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	 <div class="background1 padding">\n    <div class="content1 ion-padding ">\n      <p class="text1 ion-text-center">\n        <span class="bold">Sign in to Xperience</span>\n      </p>\n    </div>\n    <ion-grid>\n  <ion-row>\n    <ion-col class="ion-padding">\n      <div>\n        <div class="backgroundForm">\n          <ion-row>\n            <!-- <form [formGroup]="formgroup" (ngSubmit)="enviar()" col-12> -->\n                <form [formGroup]="formgroup" col-12>\n                <ion-col class="ion-padding">\n                    <div class="input_content">\n                      <ion-input type="text" formControlName="nombre" placeholder="Nombre"></ion-input>\n                      <span class="error1" *ngIf="nombre.hasError(\'required\') && nombre.touched ">Rellene el Campo</span>\n                      <!-- <input type="text" placeholder="Nombre">\n                      <span class="error1">Rellene el Campo</span> -->\n                    </div>\n                    <div class="input_content">\n                        <ion-input type="text" formControlName="apellido" placeholder="Apellido"></ion-input>\n                        <!-- <input type="text" placeholder="Apellido"> -->\n                        <span class="error1" *ngIf="apellido.hasError(\'required\') && apellido.touched ">Rellene el Campo</span>\n                      </div>\n                    <div class="input_content">\n                        <ion-input type="email" formControlName="email" placeholder="Email"></ion-input>\n                        <!-- <input type="email" placeholder="Email"> -->\n                        <span class="error1" *ngIf="email.hasError(\'required\') && email.touched" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address">Rellene el Campo</span>\n                    </div>\n                    <div class="boton_content">\n                        <!-- [disabled]="!isenabled" -->\n                      <button ion-button full color="dark" class="boton" (click)="onclickPageServices()">sign in</button>\n                    </div>\n                  </ion-col>\n            </form>\n          </ion-row>\n          \n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_vars_global_vars__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/bienvenido/bienvenido.module#BienvenidoPageModule', name: 'BienvenidoPage', segment: 'bienvenido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/booked/booked.module#BookedPageModule', name: 'BookedPage', segment: 'booked', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/prueba/prueba.module#PruebaPageModule', name: 'PruebaPage', segment: 'prueba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roomkey1/roomkey1.module#Roomkey1PageModule', name: 'Roomkey1Page', segment: 'roomkey1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/room-services/room-services.module#RoomServicesPageModule', name: 'RoomServicesPage', segment: 'room-services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roomkey2/roomkey2.module#Roomkey2PageModule', name: 'Roomkey2Page', segment: 'roomkey2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seeyou/seeyou.module#SeeyouPageModule', name: 'SeeyouPage', segment: 'seeyou', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selfcheckin/selfcheckin.module#SelfcheckinPageModule', name: 'SelfcheckinPage', segment: 'selfcheckin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/selfcheckout/selfcheckout.module#SelfcheckoutPageModule', name: 'SelfcheckoutPage', segment: 'selfcheckout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/yourstay/yourstay.module#YourstayPageModule', name: 'YourstayPage', segment: 'yourstay', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_vars_global_vars__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, globalVars, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.globalVars = globalVars;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["b" /* HOME_PAGE */];
        //   pages: Array<{title: string, component: any}>;
        this.pages = [];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Sign In', component: __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["c" /* SIGNIN_PAGE */] },
            { title: 'Hotel', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], "statusClass": "hide-menu", "subPage": [
                    {
                        "title": "Rooms",
                        "component": __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["a" /* BOOKED_PAGE */]
                    },
                    {
                        "title": "Amenities",
                        "component": __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["a" /* BOOKED_PAGE */]
                    },
                    {
                        "title": "Gallery",
                        "component": __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["a" /* BOOKED_PAGE */]
                    }
                ] },
            { title: 'Groups', component: __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["b" /* HOME_PAGE */] },
            {
                title: 'Offers',
                component: __WEBPACK_IMPORTED_MODULE_0__pages_pages_constants__["b" /* HOME_PAGE */],
                "statusClass": "hide-menu",
                "subPageOffer": [{
                        "title": "pick yours savings sale",
                        "description": "rooms from $145 $98 up to 35 off"
                    }, {
                        "title": "Limited time only",
                        "description": "suite escape: exclusive rates"
                    }, {
                        "title": "XPERIENCE SUITES",
                        "description": "VIP UPGRADE"
                    }, {
                        "title": "CARNAVAL PACKAGE",
                        "description": "INCLUDES $100 BAR TAB"
                    }]
            },
        ];
    }
    MyApp.prototype.calculateHeight = function (items) {
        var buttonSize = 0;
        if (this.globalVars.isAndroid) {
            buttonSize = 47;
        }
        else if (this.globalVars.isIOS) {
            buttonSize = 44;
        }
        return __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.size(items) * buttonSize;
    };
    MyApp.prototype.calculateHeightOffer = function (page) {
        var pageElement = document.querySelector(".submenu_content-" + page.title + "-s");
        var contentOffers = pageElement.querySelectorAll(".content_offers");
        var heightElements = 0;
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.forEach(contentOffers, function (item) {
            heightElements += (item.clientHeight + 20);
        });
        return heightElements + 10;
    };
    MyApp.prototype.openSubMenuOffer = function (page) {
        var statusClass = page.statusClass == "hide-menu" ? "" : "hide-menu";
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.map(this.pages, function (item) {
            if (item.title == page.title) {
                item.statusClass = statusClass;
            }
        });
    };
    MyApp.prototype.openSubMenu = function (page) {
        var statusClass = page.statusClass == "hide-menu" ? "" : "hide-menu";
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.map(this.pages, function (item) {
            if (item.title == page.title) {
                item.statusClass = statusClass;
            }
        });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.globalVars.isAndroid = _this.platform.is("android");
            _this.globalVars.isIOS = _this.platform.is("ios");
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.openLogin = function () {
        // this.nav.setRoot(LoginPage,null,{direction:"back",animate:true})
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/app/app.html"*/'<ion-menu [content]="content" type="overlay">\n    <ion-header>\n        <ion-navbar>\n            <button ion-button menuToggle>\n                <ion-icon name="close"></ion-icon>\n            </button>\n            <div>\n                <img src="../../assets/imgs/logo2.png" class="ion-float-left" class="logo">\n            </div>\n        </ion-navbar>\n    </ion-header>\n    <ion-content class="menu_abierto">\n        <ion-list>\n            <span class="txt_menu">\n                Rewards club\n            </span> \n            <ng-template ngFor let-page [ngForOf]="pages"> \n                <button menuClose (click)="openPage(page)" *ngIf="!page.subPage && !page.subPageOffer" ion-item>\n                    {{page?.title}}\n                </button>\n                <ng-container *ngIf="page?.subPage">\n                    <button ion-item (click)="openSubMenu(page)">\n                        {{page?.title}}\n                    </button>\n                    <ion-list [style.height.px]="calculateHeight(page.subPage)" [ngClass]="page?.statusClass" class="submenu_content">\n                        <button \n                            menuClose\n                            ion-item \n                            (click)="openPage(subPage)" \n                            *ngFor="let subPage of page.subPage" \n                            [ngClass]="page?.statusClassList"\n                            class="txtSubmenu">{{subPage?.title}}</button>\n                    </ion-list>\n                </ng-container>\n                <ng-container *ngIf="page.subPageOffer">\n                    <button (click)="openSubMenu(page)" ion-item class="content_offers1">\n                        <span class="title_offers">{{page?.title}}</span>\n                    </button>\n                    <ion-list [style.height.px]="calculateHeightOffer(page)" [ngClass]="\'submenu_content-\' + page?.title + \'-s \' + page?.statusClass" class="submenu_content submenu_content-offers">\n                        <div *ngFor="let offer of page.subPageOffer" class="content_offers">\n                            <span class="txt2">{{offer?.title}}</span><br>\n                            <span class="txt4">\n                                {{offer?.description}}\n                            </span>\n                        </div>\n                    </ion-list>\n                </ng-container>\n            </ng-template>\n            <!-- <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button> -->\n            <!-- <button menuClose ion-item>\n                Login\n                <ion-list class="submenu_content">\n                    <button menuClose ion-item class="txtSubmenu">Rooms</button>\n                    <button menuClose ion-item class="txtSubmenu">Gallery</button>\n                    <button menuClose ion-item class="txtSubmenu">Amenities</button>\n                    <img src="../../assets/imgs/fondo_menu.png" alt="" class="fondo_menu">\n                </ion-list>\n            </button> -->\n            <!-- <button menuClose ion-item class="content_offers1">\n                <span class="title_offers">Offers</span>\n                <ion-list class="submenu_content">\n                    <div class="content_offers">\n                        <span class="txt2">pick yours savings sale</span><br>\n                        <span class="txt4">\n                            rooms from $145 $98\n                            up to 35 off\n                        </span>\n                    </div>\n                    <div class="content_offers">\n                    <span class="txt2">limit time only</span><br>\n                    <span class="txt4">\n                        suite escape: exclusive rates\n                    </span>\n                    </div>\n                    <div class="content_offers">\n                    <span class="txt2">xperience suites</span><br>\n                    <span class="txt4">\n                        vip upgrade\n                    </span>\n                    </div>\n                    <div class="content_offers">\n                    <span class="txt2">carnaval packages</span><br>\n                    <span class="txt4">\n                        includes $100 bar tab\n                    </span>\n                    </div>\n                </ion-list>\n                <img src="../../assets/imgs/fondo_menu.png" alt="" class="fondo_menu_offers">\n            </button> -->\n        </ion-list>\n    <div class="footer_menu">\n      <img src="../../assets/imgs/logo3.png" alt="logo3" class="logo3">\n      <ul id="menuList" class="clearfix">\n          <li><a href=\'#\' rel=\'\'>Location</a></li>\n          <li><a href=\'#\' rel=\'\'>Phone</a></li>\n          <li><a href=\'#\' rel=\'\'>Email</a></li>\n          <li><a href=\'#\' rel=\'\'>Instagram</a></li>\n          <li><a href=\'#\' rel=\'\'>Facebook</a></li>\n      </ul>\n      <div class="clearfix">\n          <div class="col2 left">\n              <img alt="logo4" class="logo4" src="../../assets/imgs/tripadvisor.png">\n          </div>\n          <div class="col2 left iconos_menu">\n              <ion-icon name="search" role="img" class="icon icon-md ion-md-search" aria-label="search" ng-reflect-name="search"></ion-icon>\n              <ion-icon name="person" ion-button menuToggle (click)="openLogin()" role="img" class="icon icon-md ion-md-person" aria-label="person" ng-reflect-name="person"></ion-icon>\n              <ion-icon name="cart" role="img" class="icon icon-md ion-md-cart" aria-label="cart" ng-reflect-name="cart"></ion-icon>\n          </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__providers_global_vars_global_vars__["a" /* GlobalVarsProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REGISTRO_PAGE */
/* unused harmony export LOGIN_PAGE */
/* unused harmony export PRUEBA_PAGE */
/* unused harmony export CALENDARIO_PAGE */
/* unused harmony export ROOM_SERVICES_PAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOME_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOOKED_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SIGNIN_PAGE; });
/* unused harmony export YOURSTAY_PAGE */
/* unused harmony export SELFCHECK_PAGE */
/* unused harmony export BIENVENIDO_PAGE */
/* unused harmony export SERVICES_PAGE */
/* unused harmony export SELFCHECKOUT_PAGE */
/* unused harmony export SEEYOU_PAGE */
/* unused harmony export ROOMKEY1_PAGE */
/* unused harmony export ROOMKEY2_PAGE */
//Constants for getting type references
var REGISTRO_PAGE = 'RegistroPage';
var LOGIN_PAGE = 'LoginPage';
var PRUEBA_PAGE = 'PruebaPage';
var CALENDARIO_PAGE = 'CalendarioPage';
var ROOM_SERVICES_PAGE = 'RoomServicesPage';
var HOME_PAGE = "HomePage";
var BOOKED_PAGE = "BookedPage";
var SIGNIN_PAGE = "SigninPage";
var YOURSTAY_PAGE = "YourstayPage";
var SELFCHECK_PAGE = "SelfcheckinPage";
var BIENVENIDO_PAGE = "BienvenidoPage";
var SERVICES_PAGE = "ServicesPage";
var SELFCHECKOUT_PAGE = "SelfcheckoutPage";
var SEEYOU_PAGE = "SeeyouPage";
var ROOMKEY1_PAGE = "Roomkey1Page";
var ROOMKEY2_PAGE = "Roomkey2Page";
//# sourceMappingURL=pages.constants.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/admin/Documents/GitHub/thexperience/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/GitHub/thexperience/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map
import { HOME_PAGE, BOOKED_PAGE, SIGNIN_PAGE, YOURSTAY_PAGE, CALENDARIO_PAGE, SELFCHECK_PAGE, BIENVENIDO_PAGE, SERVICES_PAGE, SELFCHECKOUT_PAGE, SEEYOU_PAGE, ROOMKEY1_PAGE, ROOMKEY2_PAGE, ROOM_SERVICES_PAGE, CART_PAGE, ACTIVITIES_MENU_DETAILS_PAGE } from './../pages/pages.constants';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';
import { YourstayPage } from '../pages/yourstay/yourstay';
import { CalendarioPage } from '../pages/calendario/calendario';
import { BookedPage } from '../pages/booked/booked';
import { SelfcheckinPage } from '../pages/selfcheckin/selfcheckin';
import { SelfcheckoutPage } from '../pages/selfcheckout/selfcheckout';
import { BienvenidoPage } from '../pages/bienvenido/bienvenido';
import { ServicesPage } from '../pages/services/services';
import { SeeyouPage } from '../pages/seeyou/seeyou';
import { Roomkey1Page } from '../pages/roomkey1/roomkey1';
import { Roomkey2Page } from '../pages/roomkey2/roomkey2';
import _ from "lodash";
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    
    @ViewChild(Nav) nav: Nav;

    public rootPage: any = HOME_PAGE;

    //   pages: Array<{title: string, component: any}>;

    public pages: any = [];
    

    constructor(
        public platform: Platform, 
        public statusBar: StatusBar, 
        public globalVars: GlobalVarsProvider,
        public splashScreen: SplashScreen) {
        
            this.initializeApp();

            // used for an example of ngFor and navigation
            this.pages = [
                { title: 'Sign In', component: SIGNIN_PAGE },
                { title: 'Hotel', component: LoginPage, "statusClass" : "hide-menu", "subPage" : [
                    {
                        "title" : "Rooms",
                        "component" : BOOKED_PAGE
                    },
                    {
                        "title" : "Amenities",
                        "component" : BOOKED_PAGE
                    },
                    {
                        "title" : "Gallery",
                        "component" : BOOKED_PAGE
                    }
                ]},
                { title: 'Groups', component: HOME_PAGE },
                { 
                    title: 'Offers', 
                    component: HOME_PAGE, 
                    "statusClass" : "hide-menu",
                    "subPageOffer" : [{
                        "title" : "pick yours savings sale",
                        "description" : "rooms from $145 $98 up to 35 off"
                    },{
                        "title" : "Limited time only",
                        "description" : "suite escape: exclusive rates"
                    },{
                        "title" : "XPERIENCE SUITES",
                        "description" : "VIP UPGRADE"
                    },{
                        "title" : "CARNAVAL PACKAGE",
                        "description" : "INCLUDES $100 BAR TAB"
                    }]
                },
            ];

    }

    public calculateHeight(items): number {
        let buttonSize = 0;
        if (this.globalVars.isAndroid) {
            buttonSize = 32;
        }
        else if (this.globalVars.isIOS) {
            buttonSize = 32;
        }
        return _.size(items) * buttonSize;
    }

    public calculateHeightOffer(page): number {
        let pageElement = document.querySelector(".submenu_content-"+page.title+"-s");
        let contentOffers = pageElement.querySelectorAll(".content_offers");
        let heightElements = 0;
        _.forEach(contentOffers, (item) => {
            heightElements += (item.clientHeight + 20); 
        });
        return heightElements + 10;
    }

    public openSubMenuOffer(page): void {
        let statusClass = page.statusClass == "hide-menu" ? "" : "hide-menu";
        _.map(this.pages, (item: any) => {
            if (item.title == page.title) {
                item.statusClass = statusClass;
            }
        });
    }

    public openSubMenu(page): void {
        let statusClass = page.statusClass == "hide-menu" ? "" : "hide-menu";
        _.map(this.pages, (item: any) => {
            if (item.title == page.title) {
                item.statusClass = statusClass;
            }
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.globalVars.isAndroid = this.platform.is("android");
            this.globalVars.isIOS = this.platform.is("ios");
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        this.nav.push(page.component);
    }
    openLogin() {
        // this.nav.setRoot(LoginPage,null,{direction:"back",animate:true})
        this.nav.push(LoginPage);
    }
}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { SigninPage } from '../pages/signin/signin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
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
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { DatepickerHelperProvider } from '../providers/datepicker-helper/datepicker-helper';

@NgModule({
    declarations: [
        MyApp,
        ListPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ListPage,
        LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GlobalVarsProvider,
    DatepickerHelperProvider
    ]
})
export class AppModule {}

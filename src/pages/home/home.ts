import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { CalendarioPage } from '../calendario/calendario';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})
export class HomePage {

    constructor(
        private platform: Platform,
        public navCtrl: NavController, public navParams: NavParams) {
        
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
        this.platform.ready().then(() => {
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
    }
    public onclickPageSignin(){
        this.navCtrl.push("SigninPage")
    }
    public onclickPageCalendar(){
        this.navCtrl.push("CalendarioPage")
    }
}

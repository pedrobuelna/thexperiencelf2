import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BtnItem } from '../../components/btns-acordeon/btns-acordeon.interface';

/**
 * Generated class for the ActivitiesMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-activities-menu',
    templateUrl: 'activities-menu.html',
})
export class ActivitiesMenuPage {

    public btnSiezAccor: number = 30;

    public btnItemsAccor: BtnItem[] = [{
        "img" : "https://fakepersongenerator.com/Face/female/female20161025281720215.jpg"
    },{
        "img" : "https://fakepersongenerator.com/Face/female/female102181648005.jpg"
    },{
        "img" : "https://fakepersongenerator.com/Face/male/male1085695495819.jpg"
    }];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActivitiesMenuPage');
    }

}

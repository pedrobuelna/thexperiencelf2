import { BtnItem } from './../../components/btns-acordeon/btns-acordeon.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-room-services',
    templateUrl: 'room-services.html',
})
export class RoomServicesPage {
    
    public btnSiezAccor: number = 35;

    public btnItemsAccor: BtnItem[] = [{
        "img" : "https://fakepersongenerator.com/Face/female/female20161025281720215.jpg"
    },{
        "img" : "https://fakepersongenerator.com/Face/female/female102181648005.jpg"
    },{
        "img" : "https://fakepersongenerator.com/Face/male/male1085695495819.jpg"
    },{
        "img" : "https://fakepersongenerator.com/Face/male/male1084758474548.jpg"
    }];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RoomServicesPage');
    }

}

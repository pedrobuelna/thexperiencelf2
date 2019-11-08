import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubserviceCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-subservice-catalog',
    templateUrl: 'subservice-catalog.html',
})
export class SubserviceCatalogPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SubserviceCatalogPage');
    }

}

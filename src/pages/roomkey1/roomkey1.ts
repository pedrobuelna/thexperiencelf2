import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Roomkey1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomkey1',
  templateUrl: 'roomkey1.html',
})
export class Roomkey1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Roomkey1Page');
  }
  public onclickPageRoomkey1(){
    this.navCtrl.push("Roomkey1Page")
  }
  public onclickPageroomkey2(){
    this.navCtrl.push("Roomkey2Page")
  }
}

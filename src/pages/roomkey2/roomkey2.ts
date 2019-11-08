import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Roomkey2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomkey2',
  templateUrl: 'roomkey2.html',
})
export class Roomkey2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Roomkey2Page');
  }
  public onclickPagePop(){
    this.navCtrl.setRoot("HomePage",null,{direction:"back",animate:true})
  }
}

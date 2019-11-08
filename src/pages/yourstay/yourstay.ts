import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the YourstayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yourstay',
  templateUrl: 'yourstay.html',
})
export class YourstayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourstayPage');
  }
  public onclickPagePop(){
    this.navCtrl.setRoot(HomePage,null,{direction:"back",animate:true})
  }
}

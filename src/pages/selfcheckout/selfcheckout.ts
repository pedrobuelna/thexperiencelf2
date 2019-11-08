import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SelfcheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selfcheckout',
  templateUrl: 'selfcheckout.html',
})
export class SelfcheckoutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfcheckoutPage');
  }
  public onclickPagePop(){
    this.navCtrl.setRoot("HomePage",null,{direction:"back",animate:true})
  }
  public onclickPageSeeyou(){
    this.navCtrl.push("SeeyouPage")
  }
}

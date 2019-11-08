import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }
  public onclickPageSelfcheckin(){
    this.navCtrl.push("SelfcheckinPage")
  }
  public onclickPageRoomkey1(){
    this.navCtrl.push("Roomkey1Page")
  }
  public onclickPageRoomservice(){
    this.navCtrl.push("RoomServicesPage")
  }
  public onclickPageSelfcheckout(){
    this.navCtrl.push("SelfcheckoutPage")
  }
  
}

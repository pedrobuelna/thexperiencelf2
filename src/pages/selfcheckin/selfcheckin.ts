import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
/**
 * Generated class for the SelfcheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selfcheckin',
  templateUrl: 'selfcheckin.html',
})
export class SelfcheckinPage {

  formgroup:FormGroup;
  checkin:AbstractControl;
  checkout:AbstractControl;
  number_adults:AbstractControl;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        checkin:['',[Validators.required,Validators.minLength(5)]],
        checkout:['',[Validators.required,Validators.minLength(5)]],
        number_adults:['',[Validators.required]]
        
      });
      this.checkin = this.formgroup.controls["checkin"];
      this.checkout = this.formgroup.controls["checkout"];
      this.number_adults = this.formgroup.controls["number_adults"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelfcheckinPage');
  }
  public onclickPagePop(){
    this.navCtrl.setRoot("HomePage",null,{direction:"back",animate:true})
  }
  public onclickPageBienvenido(){
    this.navCtrl.push("BienvenidoPage")
  }
}

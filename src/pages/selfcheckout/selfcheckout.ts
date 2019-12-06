import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

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
  formgroup:FormGroup;
  nombre:AbstractControl;
  apellido:AbstractControl;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        nombre:['',[Validators.required,Validators.minLength(5)]],
        apellido:['',[Validators.required,Validators.minLength(5)]],
        
      });
      this.nombre = this.formgroup.controls["nombre"];
      this.apellido = this.formgroup.controls["apellido"];
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

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ServicesPage } from "../services/services";
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  formgroup:FormGroup;
  email:AbstractControl;
  nombre:AbstractControl;
  apellido:AbstractControl;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        email:['',[Validators.required,Validators.minLength(5)]],
        nombre:['',[Validators.required,Validators.maxLength(15)]],
        apellido:['',Validators.required]
        
      });
      this.email = this.formgroup.controls["email"];
      this.nombre = this.formgroup.controls["nombre"];
      this.apellido = this.formgroup.controls["apellido"];
  }
  // let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  // this.formgroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
  //   nombre: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
  //   apellido: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
  // });
  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
    
  }
  public onclickPageServices(){
    this.navCtrl.push("ServicesPage")
  }
  public enviar(){
    
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formgroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formbuilder:FormBuilder) {
      this.formgroup = formbuilder.group({
        email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
        password:['',[Validators.required,Validators.minLength(5)]]
        
      });
      this.email = this.formgroup.controls["email"];
      this.password = this.formgroup.controls["password"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  public onclickPageSignin(){
    this.navCtrl.push(SigninPage)
  }
}


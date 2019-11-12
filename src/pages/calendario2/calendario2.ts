import { DatepickerHelperProvider } from './../../providers/datepicker-helper/datepicker-helper';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the Calendario2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-calendario2',
  templateUrl: 'calendario2.html',
})
export class Calendario2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
      console.log('ionViewDidLoad CalendarioPage2');
      $('#datepicker2').datepicker({
          "navTitles" : {
              "days": 'yyyy <i>MM</i>',
          },
          "onSelect" : (fd, d, picker) => {
              if (!d) return;

          },
          "onChangeYear" : (year) => {
          },
          "onShow" : (fd, animationCompleted) => {

          },
          "onChangeMonth" : (month, year) => {

          },
          "prevHtml" : DatepickerHelperProvider.svgArrow,
          "nextHtml" : DatepickerHelperProvider.svgArrow
      });
  }
  public onclickPagePop(){
    this.navCtrl.setRoot("HomePage",null,{direction:"back",animate:true});
  }
}

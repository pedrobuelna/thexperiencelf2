import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfcheckinPage } from './selfcheckin';

@NgModule({
  declarations: [
    SelfcheckinPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfcheckinPage),
  ],
})
export class SelfcheckinPageModule {}

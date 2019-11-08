import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfcheckoutPage } from './selfcheckout';

@NgModule({
  declarations: [
    SelfcheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfcheckoutPage),
  ],
})
export class SelfcheckoutPageModule {}

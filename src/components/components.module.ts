import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { BtnHeaderComponent } from './btn-header/btn-header';
import { BtnsAcordeonComponent } from './btns-acordeon/btns-acordeon';

@NgModule({
	declarations: [BtnHeaderComponent,
    BtnsAcordeonComponent],
	imports: [
        IonicModule
    ],
	exports: [BtnHeaderComponent,
    BtnsAcordeonComponent]
})

export class ComponentsModule {}

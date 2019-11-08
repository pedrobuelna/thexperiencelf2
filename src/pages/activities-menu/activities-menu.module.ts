import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesMenuPage } from './activities-menu';

@NgModule({
    declarations: [
        ActivitiesMenuPage,
    ],
    imports: [
        IonicPageModule.forChild(ActivitiesMenuPage),
        ComponentsModule
    ],
})
export class ActivitiesMenuPageModule {}

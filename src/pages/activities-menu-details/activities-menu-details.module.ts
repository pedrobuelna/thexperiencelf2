import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitiesMenuDetailsPage } from './activities-menu-details';

@NgModule({
    declarations: [
        ActivitiesMenuDetailsPage,
    ],
    imports: [
        IonicPageModule.forChild(ActivitiesMenuDetailsPage),
        ComponentsModule
    ],
})
export class ActivitiesMenuDetailsPageModule {}

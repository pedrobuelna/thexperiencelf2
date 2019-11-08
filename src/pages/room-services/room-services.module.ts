import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomServicesPage } from './room-services';

@NgModule({
    declarations: [
        RoomServicesPage,
    ],
    imports: [
        IonicPageModule.forChild(RoomServicesPage),
        ComponentsModule
    ],
})
export class RoomServicesPageModule {}

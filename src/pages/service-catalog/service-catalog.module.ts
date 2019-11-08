import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceCatalogPage } from './service-catalog';

@NgModule({
    declarations: [
        ServiceCatalogPage,
    ],
    imports: [
        IonicPageModule.forChild(ServiceCatalogPage),
    ],
})
export class ServiceCatalogPageModule {}

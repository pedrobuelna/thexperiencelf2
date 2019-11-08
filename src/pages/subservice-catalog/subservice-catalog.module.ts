import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubserviceCatalogPage } from './subservice-catalog';

@NgModule({
    declarations: [
        SubserviceCatalogPage,
    ],
    imports: [
        IonicPageModule.forChild(SubserviceCatalogPage),
    ],
})
export class SubserviceCatalogPageModule {}

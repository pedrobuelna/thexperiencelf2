import { Component, Input } from '@angular/core';
import { BtnItem } from './btns-acordeon.interface';
import _ from "lodash";

/**
 * Generated class for the BtnsAcordeonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'btns-acordeon',
    templateUrl: 'btns-acordeon.html'
})
export class BtnsAcordeonComponent {

    @Input("btnSize") btnSize: number = 45;

    @Input("btnMove") btnMove: number = 35.5555556;

    @Input("btnItems") btnItems: BtnItem[] = [];

    @Input("btnIndex") btnIndex: number = 100;

    @Input("btnPlus") btnPlus: number = 1;

    constructor() {
        console.log('Hello BtnsAcordeonComponent Component');
    }

    public getZIndex(position: number): number {
        return this.btnIndex + position;
    }

    public getTransForm(position: number): string {
        return "translateX(-"+(position * this.btnMove)+"%)";
    }

}

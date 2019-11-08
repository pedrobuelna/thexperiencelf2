import { Component, Input } from '@angular/core';

/**
 * Generated class for the BtnHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'btn-header',
    templateUrl: 'btn-header.html'
})
export class BtnHeaderComponent {

    @Input("title") titleComponent: string = "Title component";

    constructor() {
        console.log('Hello BtnHeaderComponent Component');
    }

}

import { Component } from '@angular/core';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
    searchValue: string = '';
}

import { Component, Input } from '@angular/core';
import { NavItem } from '../../../../interfaces/general.interfaces';

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
    searchValue: string = '';
    @Input() navItems: NavItem[] = [];
}

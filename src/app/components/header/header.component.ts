import { Component } from '@angular/core';
import { NavItem } from '../../../interfaces/general.interfaces';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    navItems: NavItem[] = [
        {
            text: 'Home',
            link: '/',
        },
        {
            text: 'Products',
            link: '/products',
        },
        {
            text: 'Contact Us',
            link: '/contact',
        },
        {
            text: 'About Us',
            link: '/about',
        },
    ];
}

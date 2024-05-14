import { Component, OnInit } from '@angular/core';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'top-nav',
    templateUrl: './top-nav.component.html',
    styleUrl: './top-nav.component.scss',
})
export class TopNavComponent implements OnInit {
    faBagShopping = faBagShopping;
    
    ngOnInit(): void {
        
    }
}

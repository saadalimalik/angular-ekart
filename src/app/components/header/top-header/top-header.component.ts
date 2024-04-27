import { Component } from '@angular/core';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'top-header',
    templateUrl: './top-header.component.html',
    styleUrl: './top-header.component.scss',
})
export class TopHeaderComponent {
    faXmark = faXmark;
}

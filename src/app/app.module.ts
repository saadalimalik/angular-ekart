import { NgModule } from '@angular/core';
import {
    BrowserModule,
    provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopHeaderComponent } from './components/header/top-header/top-header.component';
import { TopNavComponent } from './components/header/top-nav/top-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopHeaderComponent,
        TopNavComponent,
        MainNavComponent,
        ProductViewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        FormsModule,
        FontAwesomeModule,
    ],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}

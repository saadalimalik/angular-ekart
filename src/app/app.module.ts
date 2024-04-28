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
import { ProductComponent } from './components/product/product.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TopHeaderComponent,
        TopNavComponent,
        MainNavComponent,
        ProductComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, CommonModule, FontAwesomeModule],
    providers: [provideClientHydration()],
    bootstrap: [AppComponent],
})
export class AppModule {}

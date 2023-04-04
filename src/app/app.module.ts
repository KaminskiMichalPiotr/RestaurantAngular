import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ChefsAboutComponent } from './chefs-components/chefs-about/chefs-about.component';
import { IntersectionDetectorDirective } from './directives/intersection-detector.directive';
import { ChefsRecommendedComponent } from './chefs-components/chefs-recommended/chefs-recommended.component';
import { HomepageNavbarComponent } from './homepage/homepage-navbar/homepage-navbar.component';
import {MatIconModule} from "@angular/material/icon";
import { OurMissionComponent } from './our-mission/our-mission.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from "@angular/material/tabs";
import { DishItemComponent } from './menu/dish-item/dish-item.component';
import {MatListModule} from "@angular/material/list";
import {LightboxModule} from "ngx-lightbox";
import { AccordionComponent } from './home/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ChefsAboutComponent,
    IntersectionDetectorDirective,
    ChefsRecommendedComponent,
    HomepageNavbarComponent,
    OurMissionComponent,
    ContactComponent,
    MenuComponent,
    HomeComponent,
    DishItemComponent,
    AccordionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTabsModule,
        MatListModule,
        LightboxModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

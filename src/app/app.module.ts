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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ChefsAboutComponent,
    IntersectionDetectorDirective,
    ChefsRecommendedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

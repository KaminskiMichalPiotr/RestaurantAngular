import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.scss']
})
export class HomepageNavbarComponent {

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.scrollY >= 250;
  }

}

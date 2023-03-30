import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() isToggled = false;

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth > 1200){
      this.isToggled = false;
    }
  }

}

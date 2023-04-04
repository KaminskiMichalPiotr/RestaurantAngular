import {Component, DoCheck, HostListener, KeyValueDiffer, KeyValueDiffers} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.scss']
})
export class HomepageNavbarComponent implements DoCheck{

  isSticky: boolean = false;
  isToggled = false;
  router: Router;


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    // this.isSticky = window.scrollY >= 250 && !this.router.isActive('/menu', true);
    this.isSticky = window.scrollY >= 250 && window.innerWidth > 756;

  }


  differ: KeyValueDiffer<string, any>;
  constructor(private differs: KeyValueDiffers, router: Router) {
    this.router = router;
    this.differ = this.differs.find({}).create();
  }

  ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        if(item.key == "isSticky" && item.currentValue == false && window.innerWidth < 1200){
          this.isToggled = false
        }
        if(item.key == "isSticky" && item.currentValue == true && window.innerWidth < 1200){
          this.isToggled = true
        }
      });
    }
  }




}

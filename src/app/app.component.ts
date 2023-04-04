import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restaurant';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const scrollLevels: { [navigationId: number]: number } = {};
    let lastId = 0;
    let restoredId: number | undefined;

    this.router.events
      .pipe(filter((event): event is NavigationStart => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
      scrollLevels[lastId] = window.scrollY;
      lastId = event.id;
      restoredId = event.restoredState ? event.restoredState.navigationId : undefined;
    });

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
      if (restoredId) {
        window.scrollTo(0, scrollLevels[restoredId] || 0);
      } else {
        window.scrollTo(0, 0);
      }
    });

  }

}

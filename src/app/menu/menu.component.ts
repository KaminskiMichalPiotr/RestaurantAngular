import { Component } from '@angular/core';
import {desserts, Dish, drinks, mainCourses, soups, starters} from "../common/dishes";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  starters: Dish[] = starters;
  soups: Dish[] = soups;
  mainCourses: Dish[] = mainCourses;
  desserts: Dish[] = desserts;
  drinks: Dish[] = drinks;


}

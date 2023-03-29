import {Component, Input} from '@angular/core';
import {Dish} from "../../common/dishes";

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss']
})
export class DishItemComponent {

  @Input() dish: Dish = {name:'', price: 0, ingredients: ''};

}

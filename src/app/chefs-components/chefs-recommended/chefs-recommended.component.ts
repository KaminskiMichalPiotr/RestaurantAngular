import {Component} from '@angular/core';

@Component({
  selector: 'app-chefs-recommended',
  templateUrl: './chefs-recommended.component.html',
  styleUrls: ['./chefs-recommended.component.scss']
})
export class ChefsRecommendedComponent {


  toggleVisible(isVisible: boolean, ob: HTMLElement) {
    if (isVisible) {
      ob.classList.add('active');
    } else {
      ob.classList.remove('active');
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-chefs-about',
  templateUrl: './chefs-about.component.html',
  styleUrls: ['./chefs-about.component.scss']
})
export class ChefsAboutComponent {


  showChef(isVisible: boolean, chef: HTMLDivElement) {
    if(isVisible){
      chef.classList.add('show');
    }else {
      chef.classList.remove('show');
    }
  }
}

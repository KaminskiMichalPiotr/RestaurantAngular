import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit{

  elements: NodeListOf<HTMLElement> | undefined;

  constructor(private renderer: Renderer2, private elem: ElementRef<HTMLElement>) {
  }

  cardSelected($event: MouseEvent) {
    this.elements?.forEach(element => {
      this.renderer.removeClass(element, 'card-active')
    })
    // this.renderer.addClass()
    let el: HTMLElement = $event.target as HTMLElement;
    let selectedCard = el.closest('.card');
    this.renderer.addClass(selectedCard, 'card-active')
  }

  ngAfterViewInit() {
    this.elements = this.elem.nativeElement.querySelectorAll('.card');
  }
}

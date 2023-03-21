import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  Output
} from '@angular/core';

@Directive({
  selector: '[IntersectionDetector]'
})
export class IntersectionDetectorDirective implements AfterViewInit, OnDestroy{

  @Input() threshold = 0.7;

  observer!: IntersectionObserver;

  @Output() intersected = new EventEmitter<boolean>();

  constructor(private el: ElementRef<HTMLElement>, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    const options: IntersectionObserverInit = {
      rootMargin: '0px',
      threshold: this.threshold
    }
    this.ngZone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          this.intersected.emit(e.isIntersecting);
        });
      }, options);
      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}

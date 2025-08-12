import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScroll implements OnInit {
  private observer!: IntersectionObserver
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.renderer.addClass(this.el.nativeElement, 'animate');
        this.observer.disconnect();
      }
    }, {
      threshold: 0.1,
    });
    this.observer.observe(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    this.observer.unobserve(this.el.nativeElement);
  }
}

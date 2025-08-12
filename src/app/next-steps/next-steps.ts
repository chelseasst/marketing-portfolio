import { Component } from '@angular/core';
import { AnimateOnScroll } from '../shared/animate-on-scroll';

@Component({
  selector: 'app-next-steps',
  imports: [AnimateOnScroll],
  templateUrl: './next-steps.html',
  styleUrl: './next-steps.sass'
})
export class NextSteps {
  isDesktop = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth >= 768;
  }
}

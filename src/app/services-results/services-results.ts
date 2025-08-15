import { Component, Input } from '@angular/core';
import { Ipad } from '../ipad/ipad';
import { AnimateOnScroll } from '../shared/animate-on-scroll';

@Component({
  selector: 'app-services-results',
  imports: [Ipad, AnimateOnScroll],
  templateUrl: './services-results.html',
  styleUrl: './services-results.sass'
})
export class ServicesResults {
  @Input('data') data!: { side: string, heading: string, services: string[], images: string[] }
}

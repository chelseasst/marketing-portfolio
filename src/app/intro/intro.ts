import { Component } from '@angular/core';
import { AnimateOnScroll } from '../shared/animate-on-scroll';

@Component({
  selector: 'app-intro',
  imports: [AnimateOnScroll],
  templateUrl: './intro.html',
  styleUrl: './intro.sass'
})
export class Intro {
}

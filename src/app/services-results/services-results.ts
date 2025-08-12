import { Component, Input } from '@angular/core';
import { Ipad } from '../ipad/ipad';

@Component({
  selector: 'app-services-results',
  imports: [Ipad],
  templateUrl: './services-results.html',
  styleUrl: './services-results.sass'
})
export class ServicesResults {
  @Input('data') data!: {side:string, heading: string, services: string[], images: string[] }
}

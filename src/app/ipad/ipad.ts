import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ipad',
  imports: [],
  templateUrl: './ipad.html',
  styleUrl: './ipad.sass',
})
export class Ipad {
  @Input() images!: string[]
}

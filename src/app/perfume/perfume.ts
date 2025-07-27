import { Component } from '@angular/core';

@Component({
  selector: 'app-perfume',
  imports: [],
  templateUrl: './perfume.html',
  styleUrl: './perfume.sass'
})
export class Perfume {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.slide-left').forEach(el => {
      observer.observe(el);
    });
  }
}

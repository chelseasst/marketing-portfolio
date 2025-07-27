import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics-only',
  imports: [],
  templateUrl: './statistics-only.html',
  styleUrl: './statistics-only.sass'
})
export class StatisticsOnly {
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
    document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
      observer.observe(el);
    });
  }
}

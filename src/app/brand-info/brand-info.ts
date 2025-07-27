import { Component } from '@angular/core';

@Component({
  selector: 'app-brand-info',
  imports: [],
  templateUrl: './brand-info.html',
  styleUrl: './brand-info.sass'
})
export class BrandInfo {
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

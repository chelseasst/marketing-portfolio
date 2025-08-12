import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopResults } from './top-results';

describe('TopResults', () => {
  let component: TopResults;
  let fixture: ComponentFixture<TopResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

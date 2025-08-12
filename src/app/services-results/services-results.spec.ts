import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesResults } from './services-results';

describe('ServicesResults', () => {
  let component: ServicesResults;
  let fixture: ComponentFixture<ServicesResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesResults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesResults);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

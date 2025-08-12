import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSociety } from './high-society';

describe('HighSociety', () => {
  let component: HighSociety;
  let fixture: ComponentFixture<HighSociety>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighSociety]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighSociety);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsRecommendedComponent } from './chefs-recommended.component';

describe('ChefsRecommendedComponent', () => {
  let component: ChefsRecommendedComponent;
  let fixture: ComponentFixture<ChefsRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsRecommendedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefsRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

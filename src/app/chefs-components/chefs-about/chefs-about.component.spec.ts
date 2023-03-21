import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsAboutComponent } from './chefs-about.component';

describe('ChefsAboutComponent', () => {
  let component: ChefsAboutComponent;
  let fixture: ComponentFixture<ChefsAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

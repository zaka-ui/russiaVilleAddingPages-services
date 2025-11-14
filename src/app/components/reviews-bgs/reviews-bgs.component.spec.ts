import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsBgsComponent } from './reviews-bgs.component';

describe('ReviewsBgsComponent', () => {
  let component: ReviewsBgsComponent;
  let fixture: ComponentFixture<ReviewsBgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewsBgsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewsBgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

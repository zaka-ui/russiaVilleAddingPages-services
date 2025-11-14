import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightSectionWithAccordionComponent } from './highlight-section-with-accordion.component';

describe('HighlightSectionWithAccordionComponent', () => {
  let component: HighlightSectionWithAccordionComponent;
  let fixture: ComponentFixture<HighlightSectionWithAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightSectionWithAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightSectionWithAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

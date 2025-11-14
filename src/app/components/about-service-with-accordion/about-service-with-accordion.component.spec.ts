import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServiceWithAccordionComponent } from './about-service-with-accordion.component';

describe('AboutServiceWithAccordionComponent', () => {
  let component: AboutServiceWithAccordionComponent;
  let fixture: ComponentFixture<AboutServiceWithAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutServiceWithAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutServiceWithAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

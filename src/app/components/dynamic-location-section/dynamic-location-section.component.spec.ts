import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLocationSectionComponent } from './dynamic-location-section.component';

describe('DynamicLocationSectionComponent', () => {
  let component: DynamicLocationSectionComponent;
  let fixture: ComponentFixture<DynamicLocationSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicLocationSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicLocationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

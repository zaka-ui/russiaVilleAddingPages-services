import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsWithLocationComponent } from './highlights-with-location.component';

describe('HighlightsWithLocationComponent', () => {
  let component: HighlightsWithLocationComponent;
  let fixture: ComponentFixture<HighlightsWithLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightsWithLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightsWithLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

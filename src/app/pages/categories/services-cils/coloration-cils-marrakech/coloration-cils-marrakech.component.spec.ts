import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorationCilsMarrakechComponent } from './coloration-cils-marrakech.component';

describe('ColorationCilsMarrakechComponent', () => {
  let component: ColorationCilsMarrakechComponent;
  let fixture: ComponentFixture<ColorationCilsMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorationCilsMarrakechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorationCilsMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

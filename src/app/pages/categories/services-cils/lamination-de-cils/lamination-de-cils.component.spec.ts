import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminationDeCilsComponent } from './lamination-de-cils.component';

describe('LaminationDeCilsComponent', () => {
  let component: LaminationDeCilsComponent;
  let fixture: ComponentFixture<LaminationDeCilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaminationDeCilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaminationDeCilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

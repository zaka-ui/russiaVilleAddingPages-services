import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LashesComponent } from './lashes.component';

describe('LashesComponent', () => {
  let component: LashesComponent;
  let fixture: ComponentFixture<LashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LashesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

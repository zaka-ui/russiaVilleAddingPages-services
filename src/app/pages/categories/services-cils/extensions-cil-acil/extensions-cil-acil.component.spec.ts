import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsCilAcilComponent } from './extensions-cil-acil.component';

describe('ExtensionsCilAcilComponent', () => {
  let component: ExtensionsCilAcilComponent;
  let fixture: ComponentFixture<ExtensionsCilAcilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionsCilAcilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionsCilAcilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

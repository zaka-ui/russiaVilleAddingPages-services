import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplissageExtensionsCilsMarrakechComponent } from './remplissage-extensions-cils-marrakech.component';

describe('RemplissageExtensionsCilsMarrakechComponent', () => {
  let component: RemplissageExtensionsCilsMarrakechComponent;
  let fixture: ComponentFixture<RemplissageExtensionsCilsMarrakechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemplissageExtensionsCilsMarrakechComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemplissageExtensionsCilsMarrakechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManucureSemiPermanenteComponent } from './manucure-semi-permanente.component';

describe('ManucureSemiPermanenteComponent', () => {
  let component: ManucureSemiPermanenteComponent;
  let fixture: ComponentFixture<ManucureSemiPermanenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManucureSemiPermanenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManucureSemiPermanenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

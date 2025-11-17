import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicureGelComponent } from './pedicure-gel.component';

describe('PedicureGelComponent', () => {
  let component: PedicureGelComponent;
  let fixture: ComponentFixture<PedicureGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedicureGelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedicureGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnglesComponent } from './ongles.component';

describe('OnglesComponent', () => {
  let component: OnglesComponent;
  let fixture: ComponentFixture<OnglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

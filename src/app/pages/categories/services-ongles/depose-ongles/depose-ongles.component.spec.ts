import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposeOnglesComponent } from './depose-ongles.component';

describe('DeposeOnglesComponent', () => {
  let component: DeposeOnglesComponent;
  let fixture: ComponentFixture<DeposeOnglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeposeOnglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeposeOnglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

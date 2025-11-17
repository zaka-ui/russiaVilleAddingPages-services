import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignOnglesComponent } from './design-ongles.component';

describe('DesignOnglesComponent', () => {
  let component: DesignOnglesComponent;
  let fixture: ComponentFixture<DesignOnglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignOnglesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignOnglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

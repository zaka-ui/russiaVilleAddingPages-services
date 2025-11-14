import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcilsComponent } from './sourcils.component';

describe('SourcilsComponent', () => {
  let component: SourcilsComponent;
  let fixture: ComponentFixture<SourcilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SourcilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SourcilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

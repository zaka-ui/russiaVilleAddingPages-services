import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeintureSourcilsComponent } from './teinture-sourcils.component';

describe('TeintureSourcilsComponent', () => {
  let component: TeintureSourcilsComponent;
  let fixture: ComponentFixture<TeintureSourcilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeintureSourcilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeintureSourcilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestructionSourcilsComponent } from './restruction-sourcils.component';

describe('RestructionSourcilsComponent', () => {
  let component: RestructionSourcilsComponent;
  let fixture: ComponentFixture<RestructionSourcilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestructionSourcilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestructionSourcilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

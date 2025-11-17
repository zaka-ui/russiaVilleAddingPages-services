import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpilationSourcilsComponent } from './epilation-sourcils.component';

describe('EpilationSourcilsComponent', () => {
  let component: EpilationSourcilsComponent;
  let fixture: ComponentFixture<EpilationSourcilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EpilationSourcilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpilationSourcilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

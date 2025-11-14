import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsDeCilsComponent } from './extensions-de-cils.component';

describe('ExtensionsDeCilsComponent', () => {
  let component: ExtensionsDeCilsComponent;
  let fixture: ComponentFixture<ExtensionsDeCilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionsDeCilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionsDeCilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

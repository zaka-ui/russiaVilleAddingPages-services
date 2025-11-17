import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionOnglesGelComponent } from './extension-ongles-gel.component';

describe('ExtensionOnglesGelComponent', () => {
  let component: ExtensionOnglesGelComponent;
  let fixture: ComponentFixture<ExtensionOnglesGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionOnglesGelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionOnglesGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

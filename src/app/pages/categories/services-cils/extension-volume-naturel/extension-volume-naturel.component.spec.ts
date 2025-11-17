import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionVolumeNaturelComponent } from './extension-volume-naturel.component';

describe('ExtensionVolumeNaturelComponent', () => {
  let component: ExtensionVolumeNaturelComponent;
  let fixture: ComponentFixture<ExtensionVolumeNaturelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionVolumeNaturelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionVolumeNaturelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

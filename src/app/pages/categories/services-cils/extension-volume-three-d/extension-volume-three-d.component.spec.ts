import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionVolumeThreeDComponent } from './extension-volume-three-d.component';

describe('ExtensionVolumeThreeDComponent', () => {
  let component: ExtensionVolumeThreeDComponent;
  let fixture: ComponentFixture<ExtensionVolumeThreeDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionVolumeThreeDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionVolumeThreeDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

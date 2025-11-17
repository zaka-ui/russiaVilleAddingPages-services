import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionVolumeMegaComponent } from './extension-volume-mega.component';

describe('ExtensionVolumeMegaComponent', () => {
  let component: ExtensionVolumeMegaComponent;
  let fixture: ComponentFixture<ExtensionVolumeMegaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExtensionVolumeMegaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtensionVolumeMegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

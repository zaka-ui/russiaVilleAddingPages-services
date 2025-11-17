import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposeExtensionsCilsComponent } from './depose-extensions-cils.component';

describe('DeposeExtensionsCilsComponent', () => {
  let component: DeposeExtensionsCilsComponent;
  let fixture: ComponentFixture<DeposeExtensionsCilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeposeExtensionsCilsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeposeExtensionsCilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowLaminationComponent } from './brow-lamination.component';

describe('BrowLaminationComponent', () => {
  let component: BrowLaminationComponent;
  let fixture: ComponentFixture<BrowLaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrowLaminationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowLaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

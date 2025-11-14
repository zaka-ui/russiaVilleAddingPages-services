import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TousTarifsComponent } from './tous-tarifs.component';

describe('TousTarifsComponent', () => {
  let component: TousTarifsComponent;
  let fixture: ComponentFixture<TousTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TousTarifsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TousTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

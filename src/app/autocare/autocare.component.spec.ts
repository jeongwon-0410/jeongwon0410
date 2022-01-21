import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocareComponent } from './autocare.component';

describe('AutocareComponent', () => {
  let component: AutocareComponent;
  let fixture: ComponentFixture<AutocareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

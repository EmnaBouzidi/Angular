import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeComponent } from './demande.component'; // Adjust the component import path as per your actual component location

describe('DemandeComponent', () => {
  let component: DemandeComponent;
  let fixture: ComponentFixture<DemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeComponent ] // Ensure your component is declared in the TestBed.configureTestingModule
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});

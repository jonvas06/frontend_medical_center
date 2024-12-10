import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentComponent } from './appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppointmentComponent', () => {
  let component: AppointmentComponent;
  let fixture: ComponentFixture<AppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [AppointmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when input values are provided', () => {
    component.appointmentForm.setValue({
      patientDocument: '123456',
      appointmentDate: '2024-12-10',
    });
    expect(component.appointmentForm.valid).toBeTrue();
  });

  it('should submit the form and fetch patient data', () => {
    const spy = spyOn(component['http'], 'post').and.callThrough();
    const data = { docume: '123456' };

    component.getAppointmentsByDocume();
    expect(spy).toHaveBeenCalledWith('http://localhost:3001/api/appo/getbydocume', data);
  });
});

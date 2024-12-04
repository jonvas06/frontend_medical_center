import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
            

      this.authService.login({ email: email, password: password }).subscribe({
        next: (response) => {
          console.log('Login exitoso:', response);

          localStorage.setItem('token', response.token);
        },
        error: (error) => {
          console.error('Error en el login:', error);
          this.errorMessage = 'Credenciales incorrectas';
        },
      });
      console.log('Email:', email, 'Password:', password);
    }
  }
}

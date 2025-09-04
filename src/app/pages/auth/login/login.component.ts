import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import DashboardComponent from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/auth/login.service';
import { LoginRequest } from '../../../services/auth/loginRequest';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, DashboardComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginError:string=""
  loginForm = this.formBuilder.group({
    username: ['encargado', [Validators.required]],
    password: ['123456', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router,private loginService:LoginService) { }

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

login(): void {
  if (this.loginForm.valid) {
    this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
      next: (response) => {
        console.log('Token recibido:', response.token);

        // Guardar el token en localStorage
        localStorage.setItem('authToken', response.token);

        // Redirigir al dashboard (ejemplo)
        this.router.navigateByUrl('/');
        this.loginForm.reset();
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.loginError = err;
      }
    });
  } else {
    this.loginForm.markAllAsTouched();
  }
}

}
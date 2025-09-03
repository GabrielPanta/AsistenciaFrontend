import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import DashboardComponent from '../../dashboard/dashboard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,DashboardComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export  class LoginComponent {

    loginForm = this.formBuilder.group({
        username: ['encargado', [Validators.required]],
        password: ['123456',[Validators.required]]  
    });

    constructor(private formBuilder: FormBuilder, private router:Router) { }

    get username() {
        return this.loginForm.controls.username;
    }

    get password() {
        return this.loginForm.controls.password;
    }

  login() {
    if (this.loginForm.valid) {
      console.log("Formulario válido");
      this.router.navigateByUrl('/');
      this.loginForm.reset();
    } else {
      alert("Formulario inválido");
    }
  }

  }
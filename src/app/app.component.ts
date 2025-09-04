import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import HeaderComponent from './shared/header/header.component';
import DashboardComponent from './pages/dashboard/dashboard.component';
import FooterComponent from './shared/footer/footer.component';
import { LoginService } from './services/auth/login.service';
import {  HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend-Asistencia';
}

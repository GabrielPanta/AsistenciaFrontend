import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import NavComponent from '../../shared/nav/nav.component';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ NavComponent, CommonModule,LoginComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent  {
  userLoginOn: boolean = false; 
}


import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'header',
        loadComponent: () => import('./shared/header/header.component').then(c => c.default)
    },
    {
        path: '',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.default)
    },
    {
        path: 'footer',
        loadComponent: () => import('./shared/footer/footer.component').then(c => c.default)
    },
    {
        path: 'nav',
        loadComponent: () => import('./shared/nav/nav.component').then(c => c.default)
    },
    {
        path: 'inicio-sesion',
        loadComponent: () => import('./pages/auth/login/login.component').then(c => c.LoginComponent)
    }
];


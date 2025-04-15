import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',    
    loadComponent: () => import('./comps/pages/landing/landing.component').then((d) => d.LandingComponent),
    title: 'Home',
    data:{      
      label: 'Home',
      icon: 'home',
    }  
  },
];

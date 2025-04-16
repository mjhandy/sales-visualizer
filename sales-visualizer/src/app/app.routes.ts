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
  {
    path: 'maders',    
    loadComponent: () => import('./comps/pages/maders/landing/landing.component').then((d) => d.MadersLandingComponent),
    title: "Mader's Kitchen",
    data:{      
      label: "Mader's Kitchen",
      icon: 'home',
    }  
  },
  {
    path: 'maders/chart',    
    loadComponent: () => import('./comps/pages/maders/chart/chart.component').then((d) => d.MadersChartComponent),
    title: "Mader's Kitchen",
    data:{      
      label: "Mader's Kitchen",
      icon: 'home',
    }  
  },
];

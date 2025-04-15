import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-left-nav',
  imports: [ RouterModule, MatIconModule],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.scss'
})
export class LeftNavComponent {
  routes: {
    path: string;
    title: string;
    label: string;
    target?: string;
    icon?: string;
  }[] = [];

  constructor(
    private router: Router
  ) {
    this.routes = this.router.config
      .filter(
        route => route.path &&
          typeof route.title === 'string' &&
          route.data && route.data['label']
      )
      .map(route => 
        ({
          path: route.path!,
          title: route.title as string,
          label: route.data!['label'],
          target: route.data!['target'],
          icon: route.data!['icon']
        })
      );
  }
}

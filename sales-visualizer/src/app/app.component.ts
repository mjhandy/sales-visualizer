import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';

import { MatIconModule } from '@angular/material/icon';

import { LeftNavComponent } from './comps/global/left-nav/left-nav.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIconModule, LeftNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('changeWidth', [
      state('small',
        style({
          width: '65px'
        })
      ),
      state('large',
        style({
          width: '175px'
        })),
      transition('small <=> large', [
        animate('0.5s')
      ])
    ])
  ]
})
export class AppComponent {
  leftNav = 'small';
  title = 'sales-visualizer';
  isOpen= false;
  toggleNav() {
    this.isOpen = !this.isOpen;
    this.leftNav = this.leftNav === 'small' ? 'large' : 'small';

  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { TranslateModule } from "@ngx-translate/core";
import { TranslateService } from "@ngx-translate/core";
import { MatIconModule } from '@angular/material/icon';

import { LeftNavComponent } from './comps/global/left-nav/left-nav.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIconModule, LeftNavComponent, TranslateModule],
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
          width: '150px'
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

  constructor(
    private translate: TranslateService,
  ) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); 
  }
  
  toggleNav() {
    this.isOpen = !this.isOpen;
    this.leftNav = this.leftNav === 'small' ? 'large' : 'small';
  }
}

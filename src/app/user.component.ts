import {Component, Input} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'app-user',
    template: `
      Username: {{ username }},
      
      The user's occupation is {{occupation}}
      <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
    `,
      imports: [NgOptimizedImage],

  })
  export class UserComponent {
    logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
    @Input() username = '';
    @Input() occupation = '';

  }
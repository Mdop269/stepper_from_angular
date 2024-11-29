import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    RouterLink,
    MatTabsModule,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

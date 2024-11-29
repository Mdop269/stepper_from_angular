import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailComponent } from "../../core/script/user-detail/user-detail.component";
import { MainComponentComponent } from "../../core/script/main-component/main-component.component";
import { UserTableComponent } from "../../core/script/user-table/user-table.component";
import { HeaderComponent } from "./header/header.component";
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, MainComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stepper-form';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountNavBarComponent } from "../account-nav-bar/account-nav-bar.component";

@Component({
  selector: 'app-account-layout',
  standalone: true,
  imports: [RouterOutlet, AccountNavBarComponent],
  templateUrl: './account-layout.component.html',
  styleUrl: './account-layout.component.css'
})
export class AccountLayoutComponent {

}

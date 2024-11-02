import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeNavBarComponent } from "../home-nav-bar/home-nav-bar.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet, HomeNavBarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

}

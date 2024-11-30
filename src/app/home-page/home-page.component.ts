import { Component } from '@angular/core';
import { HomeBranchListComponent } from "../home-branch-list/home-branch-list.component";
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeBranchListComponent, SearchComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}

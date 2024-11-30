import { Component } from '@angular/core';

@Component({
  selector: 'app-home-branch-list',
  standalone: true,
  imports: [],
  templateUrl: './home-branch-list.component.html',
  styleUrl: './home-branch-list.component.css'
})
export class HomeBranchListComponent {
  branches = [
    { name: "Budownictwo", count: 1},
    { name: "Chemia", count: 5},
    { name: "Edukacja", count: 0},
    { name: "Elektronika", count: 2},
  ] 
}

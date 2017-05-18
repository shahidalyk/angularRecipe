import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'https://images-gmi-pmc.edge-generalmills.com/3007ccc3-f7a9-46ee-99c2-67118ec7b07d.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

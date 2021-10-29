import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
  new Recipe('Curry Recipes',`curry recipes category consists of both indian curry recipes and a few world recipes as well.`,'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg'),new Recipe('Curry Recipes',`curry recipes category consists of both indian curry recipes and a few world recipes as well.`,'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg'),new Recipe('Curry Recipes',`curry recipes category consists of both indian curry recipes and a few world recipes as well.`,'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg')]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [ new Recipe('Curry Recipes',`
  curry recipes category consists of both indian curry recipes and a few world recipes as well. the indian curry collection includes curry or gravy recipes from all over india and stew recipes.
  curry can be made with vegetables, legumes, lentils and this category shares all the famous and even some infamous vegetarian curry recipes. also includes popular vegetable curry recipes from both north indian and south indian cuisine.`,'https://www.vegrecipesofindia.com/wp-content/uploads/2013/11/instant-pot-chana-masala-recipe-3-280x280.jpg')]
  constructor() { }

  ngOnInit(): void {
  }

}

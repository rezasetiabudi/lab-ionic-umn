import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  clickEventHandler(recipeId) {
    console.log(this.recipesService.getRecipe(recipeId));
  }

  hapus(recipeId) {
    this.recipesService.deleteRecipe(recipeId);
    alert("Object dengan ID: " + recipeId + " berhasil dihapus di console!");
    console.log("Resep dengan ID: " + recipeId + "dihapus");
  }

}

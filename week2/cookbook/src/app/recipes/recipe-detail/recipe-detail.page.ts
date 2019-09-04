import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeSvc: RecipesService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      paramMap =>{
        if (!paramMap.has('recipeId')) { return; }
        this.loadedRecipe = this.recipeSvc.getRecipe(paramMap.get('recipeId'));
      }
    );
  }

  deleteRecipe() {
    this.recipeSvc.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({

      header: 'Delete Recipe',
      message: 'are you sure you want to delete this recipe ?',
      buttons: [
        {
          text: 'YES',
          handler: () => this.deleteRecipe()
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    await alert.present();
  }

}

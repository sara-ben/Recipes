import { Component, OnInit } from '@angular/core';
import { RecipeE } from '../moudels/Recipe';
import { RecipeService } from '../services/Recipe.service';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-my-recips2',
  templateUrl: './my-recips2.component.html',
  styleUrls: ['./my-recips2.component.css']
})
export class MyRecips2Component implements OnInit {
  recipes: Array<RecipeE>
  constructor(private recipeService: RecipeService,
    private useresService: UseresService) { }

  addRecipe(r: RecipeE) {
    this.addRecipe;
  }

  ngOnInit() {
    debugger;
    console.log("email", this.useresService.selected.email);
    this.recipeService.GetRecipesByBakerEmail(this.useresService.selected.email)
      .subscribe(data => {
        this.recipes = data;

        debugger;
        console.log("the data", this.recipes);
        this.recipeService.listRecipes = data
      })
  }

}

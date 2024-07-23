import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { UseresService } from '../services/Useres.service';
import { BakerService } from '../services/Baker.service';

@Component({
  selector: 'app-my-recips',
  templateUrl: './my-recips.component.html',
  styleUrls: ['./my-recips.component.css']
})
export class MyRecipsComponent implements OnInit {
  recipes: Array<RecipeE>

  constructor(private recipeService: RecipeService,
    private useresService: UseresService,
    private baker: BakerService) { }



  addRecipe(r: RecipeE) {
    this.addRecipe;
  }
  ngOnInit() {
    debugger
    console.log("email", this.baker.selected.email);
    this.recipeService.GetRecipesByBakerEmail(this.baker.selected.email)
      .subscribe(data => {
        this.recipes = data;
        debugger;
        console.log("the data", this.recipes);
        this.recipeService.listRecipes = data
      })
    debugger;

  }

}

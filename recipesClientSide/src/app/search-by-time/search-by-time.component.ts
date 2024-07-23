import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { Time } from '@angular/common';

@Component({
  selector: 'app-search-by-time',
  templateUrl: './search-by-time.component.html',
  styleUrls: ['./search-by-time.component.css']
})
export class SearchByTimeComponent implements OnInit {
  maxTime: Time;
  // listSearch:Array<RecipeE>=new Array<RecipeE>()
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe(data => { this.recipeService.listRecipes = data; this.recipeService.recipes = data },
      );
    debugger;
  }
  search() {
    debugger;
    this.recipeService.recipes = new Array<RecipeE>()
    this.recipeService.listRecipes.forEach(x => {
      if (x.time != undefined && x.time != null) {
        let timeX = x.time.toString().split(":")[0] + ":" + x.time.toString().split(":")[1];
        let maxT = this.maxTime.toString();
        if (timeX <= maxT) {
          this.recipeService.recipes.push(x);
        }
      }
      else {
        console.log("un");
      }

    })
  }

}

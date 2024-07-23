import { Component, OnInit } from '@angular/core';
import { BakerService } from '../services/Baker.service';
import { BakerE } from '../moudels/Baker';
import { RecipeE } from '../moudels/Recipe';
import { RecipeService } from '../services/Recipe.service';

@Component({
  selector: 'app-search-by-baker',
  templateUrl: './search-by-baker.component.html',
  styleUrls: ['./search-by-baker.component.css']
})
export class SearchByBakerComponent implements OnInit {
  bakers: BakerE[];
  nameBaker: string;
  recipes: RecipeE[]
  listSearch: Array<RecipeE> = new Array<RecipeE>()
  selected: string;
  constructor(private bakerService: BakerService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.bakerService.getAllBaker().subscribe(data => { this.bakers = data; this.bakerService.listBakers = data })
    debugger
    this.recipeService.getAllRecipe().subscribe(data => { this.recipes = data; this.recipeService.listRecipes = data; this.recipeService.recipes = data; })
    debugger;
  }
  search() {
    debugger
    this.recipeService.recipes = new Array<RecipeE>()
    debugger;
    this.recipeService.bakerName = this.nameBaker;
    this.bakers.forEach(item => {
      if (item.name == this.nameBaker) {
        debugger;
        this.recipes.forEach(x => {
          if (x.bakerId == item.id) {
            debugger;
            this.recipeService.recipes.push(x);
          }
        })

      }
    })
  }

}

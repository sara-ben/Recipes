import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { BakerService } from '../services/Baker.service';
import { CategorieService } from '../services/Categorie.service';
import { CategorieE } from '../moudels/Categorie';
import { CategoriesValueService } from '../services/CategoriesValue.service';
import { CategoriesValueE } from '../moudels/CategoriesValue';
import { cwd } from 'process';
import { RecipeCategoriesService } from '../services/RecipeCategories.service';
import { RecipeCategoriesE } from '../moudels/RecipeCategories';
// import { copyFile, copyFileSync } from 'fs';

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.css']
})
export class SearchByCategoryComponent implements OnInit {
  recipes: RecipeE[]
  categories: CategorieE[]
  categorie: CategorieE
  descreption: string
  valueC: string
  valueId: number
  // listSearch:Array<RecipeE>=new Array<RecipeE>()
  categoriesValue: CategoriesValueE[]
  recipeCategories: RecipeCategoriesE[]
  s: string
  isDisable: boolean = false
  constructor(private recipeService: RecipeService,
    private recipeCategoriesService: RecipeCategoriesService,
    private categorieService: CategorieService,
    private categoriesValueService: CategoriesValueService) { }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipes = data; this.recipeService.listRecipes = data; this.recipeService.recipes = data
      this.categorieService.getAllCategorie().subscribe(data => {
        this.categories = data; this.categorieService.listCategories = data
        this.recipeCategoriesService.getAllRecipeCategories().subscribe(data => { this.recipeCategories = data; this.recipeCategoriesService.listRecipeCategoriess = data })
      })
    })
  }
  onChange() {

    this.categories.forEach(item => {
      if (item.descreption == this.descreption) {
        this.categorie = item;
      }
    })
    this.categoriesValueService.GetCategoriesValueByIdCategories(this.categorie.id).subscribe(data => { this.categoriesValue = data; this.categoriesValueService.listCategoriesValues = data })
    this.isDisable = true
  }
  search() {
    debugger;
    this.recipeService.category = this.categorie.descreption;
    this.recipeService.valCategory = this.valueC
    this.recipeService.recipes = new Array<RecipeE>()
    //  debugger;
    //    this.valueId=this.categoriesValue[this.valueC].id;
    debugger;

    this.categoriesValue.forEach(item => {
      debugger;
      //  item.name.length
      //  this.s=item.name[5]
      //  this.s=spa
      //  this.valueC
      if (item.name == this.valueC) {
        this.valueId = item.id;
        this.recipeCategoriesService.listRecipeCategoriess.forEach(item => {
          debugger;
          if (item.categoriesValuId == this.valueId) {
            debugger;
            this.recipes.forEach(x => {
              debugger;
              if (item.recipeId == x.id) {
                this.recipeService.recipes.push(x);
              }
            })
          }
        })
      }
      debugger;
    })

  }

}

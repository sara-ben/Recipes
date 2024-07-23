import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { ProductService } from '../services/Product.service';
import { RecipeIngredientsService } from '../services/RecipeIngredients.service';
import * as Swal from '../../assets/sweetalert.min.js';

@Component({
  selector: 'app-search-by-price',
  templateUrl: './search-by-price.component.html',
  styleUrls: ['./search-by-price.component.css']
})
export class SearchByPriceComponent implements OnInit {
  minPrice: number;
  maxPrice: number;
  // numPos:number;
  tmp: number;
  sum: number = 0;
  totalSum: number;
  // listSearch:Array<RecipeE>=new Array<RecipeE>();
  // listPrice:Array<number>=new Array<number>();
  constructor(private recipeService: RecipeService, private productService: ProductService, private recipeIngredientsService: RecipeIngredientsService) { }

  ngOnInit() {
    debugger;

    this.productService.getAllProduct().subscribe(data => {
      this.productService.listProducts = data;
      this.recipeService.getAllRecipe().subscribe(data => {
        this.recipeService.listRecipes = data; this.recipeService.recipes = data;
        this.recipeIngredientsService.getAllRecipeIngredients().subscribe(data => { this.recipeIngredientsService.listRecipeIngredientss = data; debugger; },
         );
      },
        );
    },
      );



    debugger;
  }
  search() {
    this.recipeService.recipes = new Array<RecipeE>()
    this.recipeService.listPrice = new Array<number>()

    if (this.minPrice == null) {
      if (this.maxPrice == null) {
        if (this.recipeService.numPos == null) {
          Swal("לא הוקש מחיר מנימלי מחיר מקסימלי ומספר מנות","warning");
        }
        else {
          Swal("לא הוקש מחיר מנימלי ומחיר מקסימלי","warning");
        }
      }
      else {
        if (this.recipeService.numPos == null) {
          Swal("לא הוקש מחיר מנימלי ומספר מנות","warning");
        }
        else {
          Swal("לא הוקש מחיר מנימלי","warning");
        }
      }
    }
    else {
      if (this.maxPrice == null) {
        if (this.recipeService.numPos == null) {
          Swal("לא הוקש מחיר מקסימלי ומספר מנות","warning");
        }
        else {
          Swal("לא הוקש מחיר מקסימלי","warning");
        }
      }
      else {
        if (this.recipeService.numPos == null) {
          Swal("לא הוקש מספר מנות","warning");
        }
      }

    }
    this.recipeService.listRecipes.forEach(x => {
      debugger;
      this.tmp = 0;
      this.sum = 0
      this.tmp = this.recipeService.numPos / x.numPortion
      this.recipeIngredientsService.listRecipeIngredientss.forEach(r => {
        if (r.recipeId == x.id) {
          this.productService.listProducts.forEach(p => {
            if (p.id == r.productId) {
              this.sum += p.avgPrice * (r.amount / 100);
            }
          })

        }
      })
      debugger;
      this.tmp = this.sum * this.tmp
      if (this.tmp > this.minPrice && this.tmp < this.maxPrice) {
        this.recipeService.recipes.push(x);
        this.recipeService.listPrice.push(this.tmp);
        // this.listPrice.push(this.tmp);
      }
    })
    debugger;
  }
}

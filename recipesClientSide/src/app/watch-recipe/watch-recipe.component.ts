import { Component, OnInit } from '@angular/core';
import { RecipeE } from '../moudels/Recipe';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { RecipeIngredientsService } from '../services/RecipeIngredients.service';
import { BakerService } from '../services/Baker.service';
import { BakerE } from '../moudels/Baker';
import { ProductE } from '../moudels/Product';
import { ProductService } from '../services/Product.service';
import { RecipeIngredientsE } from '../moudels/RecipeIngredients';
import { RecipeService } from '../services/Recipe.service';
import { ListOfProduct } from '../moudels/NewRecipe';
@Component({
  selector: 'app-watch-recipe',
  templateUrl: './watch-recipe.component.html',
  styleUrls: ['./watch-recipe.component.css']
})
export class WatchRecipeComponent implements OnInit {
  current: RecipeE = new RecipeE()
  // recepyGre:RecipeGradeE=new RecipeGradeE()
  arrRecipe: Array<RecipeE> = new Array<RecipeE>()
  arrIngredients: Array<ProductE> = new Array<ProductE>()
  currentBaker: BakerE = new BakerE()
  listSearchRI: Array<RecipeIngredientsE> = new Array<RecipeIngredientsE>()
  listSearchP: Array<ProductE> = new Array<ProductE>()
  productTemp: ProductE = new ProductE()
  products: ProductE[]
  recI: Array<RecipeIngredientsE> = new Array<RecipeIngredientsE>()
  id: number
  lsp: Array<ListOfProduct> = new Array<ListOfProduct>()
  constructor(private router: Router,
    private recipeService: RecipeService,
    private recGS: RecipeGradeService,
    private recIS: RecipeIngredientsService,
    private bakerService: BakerService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  currentRecipe: RecipeE = new RecipeE()
  currentId: Number









  ngOnInit() {
    debugger;
    // this.productService.GetProductById(4).subscribe(data=>{this.productTemp=data})
    // this.recipeService.GetRecipeById(4).subscribe(data=>{debugger;   this.currentRecipe =data; })
    // this.current
    // this.productTemp

    this.activatedRoute.params.subscribe(
      (params: Params) => {

        debugger;
        this.id = params['id']
        //  this.productService.GetProductById(this.id).subscribe(data=>
        //   {console.log("details pro",data);
        //   this.listSearchP=data;

        this.recipeService.GetRecipeById(this.id).subscribe(data => {
          debugger; console.log("data:" + data.name);
          this.currentRecipe = data;
          this.bakerService.GetBakerById(this.currentRecipe.bakerId).subscribe(data => {
            this.currentBaker = data; console.log("baker:", this.currentBaker.name);


            this.recIS.GetRecipeIngredientsByRecipeId(this.id)
              .subscribe(data => {
                debugger; this.recIS.listRecipeIngredientss = data, this.recI = data, console.log("motarim" + this.recIS.listRecipeIngredientss);

                this.recIS.listRecipeIngredientss.forEach(x => {
                  {
                    this.listSearchRI.push(x);
                  }
                  // פרטי מוצר


                })
                this.current.id = this.currentRecipe.id
              })


          })


          // this.listSearchP.push(this.productTemp)
        })
        debugger;


      })

  }
  // add(){
  //   let n:ListOfProduct=new ListOfProduct()
  //   debugger
  //   n.IsNew=true;
  //   debugger;
  //   console.log("the place",this.j);
  //   debugger
  //  //  this.myNewRecipe.NListIng[this.j].IsNew=false;
  //   debugger;
  //   this.currentRecipe.listSearchRI.push(n);
  //   debugger;
  //   this.j++;
  //   debugger;
  //  }


}
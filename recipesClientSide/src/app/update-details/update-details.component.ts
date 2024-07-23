import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { UseresService } from '../services/Useres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductE } from '../moudels/Product';
import { ProductService } from '../services/Product.service';
import { BakerService } from '../services/Baker.service';
import { BakerE } from '../moudels/Baker';
import { documents } from '../moudels/documents';
import { RecipeIngredientsE } from '../moudels/RecipeIngredients';
import { RecipeIngredientsService } from '../services/RecipeIngredients.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {
  recipes: Array<RecipeE>
  id: number
  flag: boolean = false
  file: documents = new documents();
  currentRecipe: RecipeE = new RecipeE()
  updateRecipe: RecipeE = new RecipeE()
  idRecipeIngredients: Array<number> = new Array<number>()
  listSearchP: Array<ProductE> = new Array<ProductE>()
  listSearchRI: Array<RecipeIngredientsE> = new Array<RecipeIngredientsE>()
  productTemp: Array<ProductE> = new Array<ProductE>()
  currentBaker: BakerE = new BakerE()
  recI: Array<RecipeIngredientsE> = new Array<RecipeIngredientsE>()
  products: ProductE[]
  ListProduct: Array<ProductE> = new Array<ProductE>()
  current: RecipeE = new RecipeE()
  constructor(private router: Router,
    private recipeService: RecipeService,
    private useresService: UseresService,
    private activatedRoute: ActivatedRoute,
    private recIS: RecipeIngredientsService,
    private productService: ProductService,
    private bakerService: BakerService) { }


  onSucsess() {
    //מציאת שם האופה
    this.bakerService.GetBakerById(this.currentRecipe.bakerId).subscribe(data => {
      this.currentBaker = data; console.log("baker:", this.currentBaker.name);

    }), err => { alert("שגיאה בגישה לשרת") };

    //מציאת רשימת כל המוצרים
    // this.productService.getAllProduct().subscribe(data=>{
    //   this.productService.listProducts=data,this.products=data;console.log("product"+this.productService.listProducts);
    //   }),
    //   err=>(alert("שגיאה בגישה לשרת"));

    // this.recIS.getAllRecipeIngredients()

    //מציאת כל המוצרים של המתכון הנוכחי
    debugger;
    this.recIS.GetRecipeIngredientsByRecipeId(this.id)
      .subscribe(data => {
        debugger; this.recIS.listRecipeIngredientss = data, this.recI = data, console.log("motarim" + this.recIS.listRecipeIngredientss);
        this.listSearchRI = data;
        this.recIS.listRecipeIngredientss.forEach((y) => {
          this.idRecipeIngredients.push(y.productId);
        })
        this.productService.GetProductsById(this.idRecipeIngredients).subscribe(data => {
          this.listSearchP = data;
        })
        // this.recIS.listRecipeIngredientss.forEach(x => {
        //   {
        //     this.listSearchRI.push(x);
        //     // פרטי מוצר
        //     this.productService.GetProductById(x.productId).subscribe(data => {
        //       console.log("details pro", data);
        //       this.productTemp = data;
        //       this.listSearchP.push(this.productTemp[0])
        //     }), err => (alert("שגיאה בגישה לשרת"));
        //   }
        // })
      }), err => (alert("שגיאה בגישה לשרת"));

    this.current.id = this.currentRecipe.id
  }
  ngOnInit() {
    this.productService.getAllProduct().subscribe(data => {
      this.ListProduct = data; this.productService.listProducts = data;
      debugger;
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          debugger;
          this.id = params['id']
          debugger;
          this.recipeService.GetRecipeById(this.id).subscribe(data => {
            debugger; console.log("data:" + data.name);
            this.currentRecipe = data;
            this.onSucsess();
          })

        })
    })

  }
  upLoad() {
    debugger;
    this.recipeService.addpic(this.file).subscribe(d => {
      this.currentRecipe.image = d
      this.flag = true

    })
  }
  mychange(input) {
    this.file = new documents()
    this.file.FileName = input.target.files[0].name
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader()
      let self = this
      reader.onload = function (e) {

        self.file.Base64 = (e.target as any).result
        debugger
      }
      reader.readAsDataURL(input.target.files[0])
    }


  }

  
  update(r: RecipeE) {
    //this.currentRecipe=r;
    debugger;
    this.recipeService.updateRecipe(r).subscribe(data => alert("המתכון התעדכן"));
    console.log("המתכון התעדכו")
    debugger;
  }
}
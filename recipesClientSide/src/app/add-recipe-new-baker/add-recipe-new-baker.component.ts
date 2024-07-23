import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeE } from '../moudels/Recipe';
import { ProductE } from '../moudels/Product';
import * as Swal from '../../assets/sweetalert.min.js';
import { ProductService } from '../services/Product.service';
import { NewRecipeE, ListOfProduct } from '../moudels/NewRecipe';
import { BakerService } from '../services/Baker.service';
import { RecipeService } from '../services/Recipe.service';
import { CategorieService } from '../services/Categorie.service';
import { CategorieE } from '../moudels/Categorie';
import { CategoriesValueService } from '../services/CategoriesValue.service';
import { CategoriesValueE } from '../moudels/CategoriesValue';
import { NewCategoriesE, ListOfValues } from '../moudels/NewCategories';
import { UseresService } from '../services/Useres.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { documents } from '../moudels/documents';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { createElement } from '@angular/core/src/view/element';
@Component({
  selector: 'app-add-recipe-new-baker',
  templateUrl: './add-recipe-new-baker.component.html',
  styleUrls: ['./add-recipe-new-baker.component.css']
})
export class AddRecipeNewBakerComponent implements OnInit {

  constructor(private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private baker: BakerService,
    private categorieService: CategorieService,
    private categoriesValueService: CategoriesValueService,
    private useresService: UseresService,
  ) {
  }
  flag: boolean = false
  file: documents = new documents();
  NewCategories: Array<NewCategoriesE> = new Array<NewCategoriesE>()
  recipes: Array<RecipeE> = new Array<RecipeE>()
  categories: CategorieE[]
  descreption: string
  categorie: CategorieE
  categoriesValue: CategoriesValueE[]
  categoriesValueSave: CategoriesValueE[] = new Array<CategoriesValueE>();
  categoriesValueToShow: CategoriesValueE[]
  valueC: string
  notInList: boolean
  descreption2: string
  valueCatName: string
  newRechiv: ProductE = new ProductE()
  myNewRecipe: NewRecipeE = new NewRecipeE()
  products: ProductE[]
  ListProduct: Array<ProductE> = new Array<ProductE>()
  r: RecipeE = new RecipeE()
  p: ProductE = new ProductE()
  p2: ListOfProduct = new ListOfProduct()
  cloneOfObjectA: ProductE = new ProductE()
  cloneOfObjectB: ListOfProduct = new ListOfProduct()
  p3: Array<ListOfProduct> = new Array<ListOfProduct>()
  j: number = 0;
  i: number = 0;
  index: number = 0;
  tmp: ListOfProduct = new ListOfProduct();
  a: CategorieE = new CategorieE();
  newCatVal: boolean;
  newCategoryValue: CategoriesValueE = new CategoriesValueE();
  catId: number;
  newCat: boolean;
  newCategory: CategorieE = new CategorieE();
  degel: number;
  firstProduct = true;


  addPToList() {
    debugger;
    this.newRechiv.numPriceUpdate = 1;
    debugger;
    this.productService.addProduct(this.newRechiv).subscribe(data => {
      this.ListProduct = data;
      this.productService.listProducts = data
    })
    debugger;
    ///ללכת לשרת להוסיף מוצר ןאז לרעננן את הרשימה 
    // ListProduct
  }
  ngOnInit() {
    // this.NewCategories.push(new NewCategoriesE())
    // this.NewCategories.push(new NewCategoriesE())
    // this.NewCategories.push(new NewCategoriesE())
    this.baker.getAllBaker().subscribe(data => {
      this.baker.listBakers = data
      this.productService.getAllProduct().subscribe(data => {
        this.ListProduct = data; this.productService.listProducts = data;
        this.categorieService.getAllCategorie().subscribe(data => { this.categories = data; this.categorieService.listCategories = data })
        this.categoriesValueService.getAllCategoriesValue().subscribe(data => {
          this.categoriesValue = data;
          this.categoriesValueToShow = data;
          this.categoriesValueService.listCategoriesValues = data;
        },);
        debugger;
      })
    })
    let n: ListOfProduct = new ListOfProduct()
    n.IsNew = true;
    this.myNewRecipe.NListIng.push(n);
  }
  // add(){
  //   let n:ListOfProduct=new ListOfProduct()
  //   n.IsNew=true;
  //   this.myNewRecipe.NListIng.push(n); 
  // }
  addCategoryValue() {
    this.categoriesValueService.addCategoriesValue
  }
  getColor(item): string {
    debugger
    return "red"
  }

  send() {
    debugger;
    if (!this.myNewRecipe.NRecipe.name && !this.myNewRecipe.NRecipe.instruction) {
      Swal({
        title: "שים לב!",
        text: "במידה ולא תוסיף מתכון ראשון תימחק ממאגר האופים",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            this.deleteBaker();

          }
        });
    }
    if (!this.myNewRecipe.NRecipe.name) {
      document.getElementById("nameRecipe").style.border = "3px solid red"
    }
    if (!this.myNewRecipe.NRecipe.instruction) {
      document.getElementById("instruction").style.border = "3px solid red"
    }
    else {
      debugger;
      this.recipeService.addRecipe(this.myNewRecipe, this.baker.selected.password).subscribe(data => { this.recipeService, Swal("", "המתכון נשמר בהצלחה", "success") });
    }

    debugger;
    this.router.navigate(['/'])
  }
  addProduct() {

    // if(this.firstProduct)
    // { 
    //      this.firstProduct=false;
    // }
    debugger;
    this.cloneOfObjectB = new ListOfProduct()
    this.cloneOfObjectB.product = new ProductE()
    this.cloneOfObjectB.amount = this.p2.amount
    this.cloneOfObjectB.product = Object.assign(this.cloneOfObjectB.product, this.p2.product)
    this.myNewRecipe.NListIng.push(Object.assign(this.cloneOfObjectB));


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
  upLoad() {
    debugger;
    this.recipeService.addpic(this.file).subscribe(d => {
      this.myNewRecipe.NRecipe.image = d
      this.flag = true

    })
  }
  onChange() {
    this.categories.forEach(item => {
      if (item.descreption == this.descreption) {
        this.categorie = item;
      }
    })
    this.categoriesValueService.GetCategoriesValueByIdCategories(this.categorie.id).subscribe(data => { this.categoriesValue = data; this.categoriesValueService.listCategoriesValues = data })
  }
  addCategory() {
    // //debugger;
    // let lc:ListOfValues=new ListOfValues()
    // lc.IsNew=true;
    // debugger;
    // //this.myNewRecipe.NListCat.push(lc);

    // this.NewCategories[this.i].NListVal.push(lc);
    // debugger;
    // this.i++;
    // debugger;

    this.categorieService.addCategorie(this.newCategory).subscribe(data => { this.categorieService.listCategories = data })
  }
  addC() {
    debugger;
    this.categoriesValueToShow = new Array<CategoriesValueE>();
    this.categories.forEach(item => {
      if (item.descreption == this.descreption2) {
        this.catId = item.id;
      }
    })


    this.categoriesValue.forEach(item => {
      if (item.categoriesId == this.catId) {
        this.categoriesValueToShow.push(item);
        debugger;
      }
    })

  }
  selectCategoryValue() {
    debugger;
    // this.categories.forEach(item=>{
    //   if(item.descreption==this.descreption2){
    //     this.myNewRecipe.NListCat.NCategory.push(item)
    //     }
    //    })
    this.categoriesValue.forEach(item => {
      if (item.name == this.valueCatName) {
        this.myNewRecipe.NListCat.push(item);
        debugger;
      }
    })
  }
  addPToCategoriesValueToShow() {
    debugger;
    this.newCategoryValue.categoriesId = this.catId;
    debugger;
    this.categoriesValueService.addCategoriesValue(this.newCategoryValue).subscribe(data => {
      this.categoriesValueService.listCategoriesValues = data
      debugger;
    })
    debugger;
    this.categoriesValueToShow = new Array<CategoriesValueE>();
    this.categoriesValueService.listCategoriesValues.forEach(item => {
      if (item.categoriesId == this.catId) {
        this.categoriesValueToShow.push(item);
        debugger;
      }
    })

    debugger;
  }

  clickHome() {
    this.recipeService.getAllRecipe().subscribe(data => { this.recipes = data; this.recipeService.listRecipes = data })
    this.recipes.forEach(item => {
      if (item.bakerId == this.useresService.selected.id)
        this.degel = 1;

    })
    debugger;
    if (this.degel == 1) {
      this.router.navigate(['/'])
    }
    else {

      Swal({
        title: "שים לב!",
        text: "במידה ולא תוסיף מתכון ראשון תימחק ממאגר האופים",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          this.deleteBaker();
        } else {

        }
      });
    }
  }
  deleteBaker() {
    debugger;
    this.baker.selected
    this.baker.GetIdBakerByPassword(this.baker.selected.password).subscribe(data => {
      this.baker.selected.id = data;
      this.baker.deleteBaker(this.baker.selected.id).subscribe(data => {
        Swal("נמחקת ממערך האופים", {
          icon: "success",
        });
        this.router.navigate(['/'])
        this.baker.selected = null;
        this.useresService.status = 1;
      });

    });


  }
}
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeE } from '../moudels/Recipe';
import { ProductE } from '../moudels/Product';
import { ProductService } from '../services/Product.service';
import { NewRecipeE, ListOfProduct } from '../moudels/NewRecipe';
import { DomSanitizer } from '@angular/platform-browser';
import * as Swal from '../../assets/sweetalert.min.js';
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
import { EmailService } from '../services/Email.service';
import { email } from '../moudels/email';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private router: Router,
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private baker: BakerService,
    private categorieService: CategorieService,
    private categoriesValueService: CategoriesValueService,
    private useresService: UseresService,
    private sanitizer: DomSanitizer,
    private EmailService: EmailService
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
  email: email = new email();
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
  newCategoryA:NewCategoriesE= new NewCategoriesE();
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
    this.useresService.getAllUseres().subscribe(data => {
      this.useresService.listUseres = data;
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

    if (!this.myNewRecipe.NRecipe.name) {
      document.getElementById("nameRecipe").style.border = "3px solid red"
    }
    if (!this.myNewRecipe.NRecipe.instruction) {
      document.getElementById("instruction").style.border = "3px solid red"
    }
    else {
      debugger;
      this.recipeService.addRecipe(this.myNewRecipe, this.baker.selected.password).subscribe(data => {
        this.recipeService
        Swal("המתכון נשמר בהצלחה", ".ונשלח מייל לכל החברים", "success")
        debugger;
        // moriya.nadav.1234
        // sb0548499159
        // sb0548499159@gmail.com",
        // this.email.emailsList = ["moriya.nadav.1234@gmail.com", "moriya.nadav.4@gmail.com"];
        debugger;
        this.email.emailsList[0] = this.useresService.selected.email
        this.email.emailsList[1] = this.baker.selected.email
        this.email.emailsList[2] = "sb0548499159@gmail.com";
        this.useresService.listUseres.forEach((u) => {
          this.email.emailsList.push(u.email)
        })
        this.email.subject = "נוסף מתכון חדש וטעים-בקליק אחד  הוא אצלכם---"

        this.email.content = `${this.myNewRecipe.NRecipe.name}    מאת: ${this.baker.selected.name}`;
        this.EmailService.sendNewEmail(this.email).subscribe()
        this.router.navigate(['/'])

      });

    }


  }
  addProduct() {

    // if(this.firstProduct)
    // { 
    //      this.firstProduct=false;
    // }

    debugger;
    this.cloneOfObjectB = new ListOfProduct()
    this.cloneOfObjectB.product = new ProductE()
    this.cloneOfObjectB.amount = this.p2.amount;
    this.cloneOfObjectB.id = this.p2.id;
    this.cloneOfObjectB.product = Object.assign(this.cloneOfObjectB.product, this.p2.product)
    this.myNewRecipe.NListIng.push(Object.assign(this.cloneOfObjectB));


  }
  removeProduct(item: ListOfProduct){
   item.isRemoved=true;
  }

  removeCategory(item: NewCategoriesE){
    item.isRemoved=true;
   }
  
  upLoad() {
    debugger;
    this.recipeService.addpic(this.file).subscribe(d => {
      this.myNewRecipe.NRecipe.image = d
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

  onChange() {
    this.categories.forEach(item => {
      if (item.descreption == this.descreption) {
        this.categorie = item;
      }
    })
    this.categoriesValueService.GetCategoriesValueByIdCategories(this.categorie.id).subscribe(data => { this.categoriesValue = data; this.categoriesValueService.listCategoriesValues = data })
  }
  addCategory() {
    
    this.categorieService.addCategorie(this.newCategory).subscribe(data => { this.categorieService.listCategories = data })
   
    this.newCategoryA = new NewCategoriesE();
   this.newCategoryA.NCategory= new CategorieE();
   this.newCategoryA.NListVal[0].categoriesValue.name='555'
    this.newCategoryA.NCategory= Object.assign(this.newCategoryA.NCategory, {name: '555', value:55})
this.myNewRecipe.NListCat.push(Object.assign(this.newCategoryA))

    // this.cloneOfObjectB.amount = this.p2.amount;
    // this.cloneOfObjectB.id = this.p2.id;
    // this.cloneOfObjectB.product = Object.assign(this.cloneOfObjectB.product, this.p2.product)
    // this.myNewRecipe.NListIng.push(Object.assign(this.cloneOfObjectB));
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

      document.getElementById("modal").style.display = "block"
    }
  }
  deleteBaker() {
    debugger;
    this.useresService.getAllUseres().subscribe(data => { this.useresService.listUseres = data })
    this.baker.getAllBaker().subscribe(data => { this.baker.listBakers = data })
    debugger;
    this.baker.GetIdBakerByPassword(this.useresService.selected.password).subscribe(data => { this.useresService.selected.id = data; });
    document.getElementById("modal").style.display = "none"
    this.baker.deleteBaker(this.baker.selected.id).subscribe();
    this.baker.selected = null;
    this.useresService.status = 1;
    this.router.navigate(['/'])
  }
}
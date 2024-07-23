import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeE } from '../moudels/Recipe';
import { ProductE } from '../moudels/Product';
import { promise } from 'protractor';
import { NewRecipeE } from '../moudels/NewRecipe';
import { documents } from '../moudels/documents';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  listRecipes: Array<RecipeE> = new Array<RecipeE>()
  selected: RecipeE = new RecipeE()
  rr: ProductE = new ProductE()
  tt: ProductE = new ProductE()
  recipes: RecipeE[]
  listPrice: Array<number> = new Array<number>();
  numPos: number = 0;
  category: string;
  valCategory: string;
  listSearchG: Array<number> = new Array<number>()
  bakerName: string;
  maxGrade: number;
  flag: boolean = true;
  url: string = "http://localhost:52298/api/Recipe/"
  constructor(private client: HttpClient) {
  }

  getAllRecipe(): Observable<Array<RecipeE>>//שליפת כל המתכונים
  {
    return this.client.get<Array<RecipeE>>(this.url + "getAllRecipe")
  }

  addRecipe(r: NewRecipeE, pssword: string): Observable<Array<RecipeE>>//הוספת מתכון
  {
    debugger

    //   this.tt.id=5
    //  this.tt.name="444"
    //  this.tt.avgPrice=5
    //  this.tt.numPriceUpdate=6



    // this.listRecipes.push(rr);
    return this.client.post<Array<RecipeE>>(this.url + "addRecipe/" + pssword, r);
    //  return this.client.put<Array<ProductE>>(this.url+"addProduct",this.tt) 
  }

  deleteRecipe(id: number)//מחיקת מתכון
  {
    return this.client.delete<Array<RecipeE>>(this.url + "deleteRecipe/" + id)
  }
  //עריכת מתכון
  updateRecipe(r: RecipeE): Observable<Array<RecipeE>> {
    debugger;
    return this.client.put<Array<RecipeE>>(this.url + "updateRecipe", r)
    debugger;
  }
  //את הפרטים של המתכון
  GetRecipeById(id: number): Observable<RecipeE> {

    return this.client.get<RecipeE>(this.url + "GetRecipeById/" + id)

  }
  GetRecipesByBakerEmail(t: string): Observable<Array<RecipeE>> {
    debugger;
    let id: number = 4
    let n: number = t.indexOf('@');

    console.log("indexof", n);
    let Email = t.substring(0, n);
    console.log("email", Email);
    // let Email=t.sli
    debugger;
    return this.client.get<Array<RecipeE>>(this.url + "GetRecipesByBakerEmail/" + Email)
  }
  ///הוספת תמונה
  addpic(d: documents): Observable<string> {
    return this.client.post<string>("http://localhost:52298/api/Files/SaveFileByBase64", d)
  }
  // GetRecipesByBakerEmail(email:string):Observable<Array<RecipeE>>
  // {
  //   debugger
  //   return this.client.get<Array<RecipeE>>(this.url+"GetRecipesByBakerEmail/"+email)
  // }
}

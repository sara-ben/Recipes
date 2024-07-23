import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeIngredientsE } from '../moudels/RecipeIngredients';


@Injectable({
  providedIn: 'root'
})
export class RecipeIngredientsService {
  listRecipeIngredientss: Array<RecipeIngredientsE> = new Array<RecipeIngredientsE>()
  selected: RecipeIngredientsE = new RecipeIngredientsE()
  url: string = "http://localhost:52298/api/RecipeIngredients/"
  constructor(private client: HttpClient) {
  }

  getAllRecipeIngredients(): Observable<Array<RecipeIngredientsE>>//שליפת כל המוצרים של המתכון
  {
    debugger
    return this.client.get<Array<RecipeIngredientsE>>(this.url + "getAllRecipeIngredients")
  }

  addRecipeIngredients(r: RecipeIngredientsE): Observable<Array<RecipeIngredientsE>>//הוספת מוצר למתכון
  {

    this.listRecipeIngredientss.push(r);
    return this.client.post<Array<RecipeIngredientsE>>(this.url + "addRecipeIngredients", r)
  }

  deleteRecipeIngredients(id: number)//מחיקת מוצר ממתכון
  {
    return this.client.delete<Array<RecipeIngredientsE>>(this.url + "deleteRecipeIngredients/" + id)
  }
  editRecipeIngredients(r: RecipeIngredientsE)//עריכת מוצר- מתכון
  {
    return this.client.put<Array<RecipeIngredientsE>>(this.url + " editRecipeIngredients", r);
  }
  //את הפרטים של המוצר- מתכון
  GetRecipeIngredientsById(id: number): Observable<RecipeIngredientsE> {
    return this.client.get<RecipeIngredientsE>(this.url + "getRecipeIngredients/" + id)
  }

  //קבלת המוצרים לפי קוד מתכון
  GetRecipeIngredientsByRecipeId(id: number): Observable<Array<RecipeIngredientsE>> {
    return this.client.get<Array<RecipeIngredientsE>>(this.url + "getAllRecipeIngredientssByRecipe/" + id)
  }
}



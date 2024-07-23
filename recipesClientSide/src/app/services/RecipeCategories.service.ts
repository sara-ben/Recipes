import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeCategoriesE } from '../moudels/RecipeCategories';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoriesService {
 listRecipeCategoriess:Array< RecipeCategoriesE>=new Array< RecipeCategoriesE>()
selected:RecipeCategoriesE=new RecipeCategoriesE()
 url:string="http://localhost:52298/api/RecipeCategories/"
  constructor( private client:HttpClient ) {
   }


getAllRecipeCategories():Observable<Array<RecipeCategoriesE>>//שליפת כל קטגוריות המתכונים
   {
 return this.client.get<Array<RecipeCategoriesE>>(this.url+"getAllRecipeCategories")
   }

   addRecipeCategories(r:RecipeCategoriesE):Observable<Array<RecipeCategoriesE>>//הוספת קטגורית מתכון
  {
   
     this.listRecipeCategoriess.push(r);
     return this.client.post<Array<RecipeCategoriesE>>(this.url+"addRecipeCategories",r) 
  }
  
  deleteRecipeCategories(id:number)//מחיקת קטגורית מתכון
  {
   return this.client.delete<Array<RecipeCategoriesE>>(this.url+"deleteRecipeCategories/"+id)
  }
  editRecipeCategories(r:RecipeCategoriesE)//עריכת קטגורית מתכון
  {
    return this.client.put<Array<RecipeCategoriesE>>(this.url+" editRecipeCategories",r);
  }
  //את הפרטים של קטגורית מתכון
  GetRecipeCategoriesById(id:number):Observable<RecipeCategoriesE>
  {
    return this.client.get<RecipeCategoriesE>(this.url+"getRecipeCategories/"+id)
  }
}

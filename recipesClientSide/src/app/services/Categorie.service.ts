
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategorieE } from '../moudels/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
 listCategories:Array< CategorieE>=new Array< CategorieE>()
selected:CategorieE=new CategorieE()
 url:string="http://localhost:52298/api/Categorie/"
  constructor( private client:HttpClient ) {
   }
 
//    lRecipeModels: Activities

getAllCategorie():Observable<Array<CategorieE>>//שליפת כל הקטגוריות
   {
     // return this.listRecipe.slice();
     debugger;
 return this.client.get<Array<CategorieE>>(this.url+"getAllCategorie")
 debugger;
   }

   addCategorie(c:CategorieE):Observable<Array<CategorieE>>//הוספת קטגוריה
  {
   
     this.listCategories.push(c);
     return this.client.post<Array<CategorieE>>(this.url+"addCategorie",c) 
  }
  
  deleteCategorie(id:number)//מחיקת קטגוריה
  {
   return this.client.delete<Array<CategorieE>>(this.url+"deleteCategorie/"+id)
  }
  editCategorie(c:CategorieE)//עריכת קטגוריה
  {
    return this.client.put<Array<CategorieE>>(this.url+" editCategorie",c);
  }
  //את הפרטים של קטגוריה
  GetCategorieById(id:number):Observable<CategorieE>
  {
    return this.client.get<CategorieE>(this.url+"getCategorie/"+id)
  }
}

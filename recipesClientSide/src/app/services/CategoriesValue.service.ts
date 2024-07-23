import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriesValueE } from '../moudels/CategoriesValue';

@Injectable({
  providedIn: 'root'
})
export class CategoriesValueService {
 listCategoriesValues:Array< CategoriesValueE>=new Array< CategoriesValueE>()
selected:CategoriesValueE=new CategoriesValueE()
 url:string="http://localhost:52298/api/CategoriesValue/"
  constructor( private client:HttpClient ) {
   }
 
//    lRecipeModels: Activities

getAllCategoriesValue():Observable<Array<CategoriesValueE>>//שליפת כל ערכי- הקטגוריה
   {
     // return this.listRecipe.slice();
 return this.client.get<Array<CategoriesValueE>>(this.url+"getAllCategoriesValue")
   }

   addCategoriesValue(c:CategoriesValueE):Observable<Array<CategoriesValueE>>//הוספת ערך לקטגוריה
  {
     this.listCategoriesValues.push(c);
     return this.client.post<Array<CategoriesValueE>>(this.url+"addCategoriesValue",c) 
   
  }
  
  deleteCategoriesValue(id:number)//מחיקת ערך-קטגורי
  {
   return this.client.delete<Array<CategoriesValueE>>(this.url+"deleteCategoriesValue/"+id)
  }
  editCategoriesValue(c:CategoriesValueE)//עדכון ערך- קטגורי
  {
    return this.client.put<Array<CategoriesValueE>>(this.url+" editCategoriesValue",c);
  }
  //את הפרטים של הערכים
  GetCategoriesValueById(id:number):Observable<CategoriesValueE>
  {
    return this.client.get<CategoriesValueE>(this.url+"getCategoriesValue/"+id)
  }
  //מציאת כל ערכי קטגוריה מסוימת
  GetCategoriesValueByIdCategories(id:number):Observable<Array<CategoriesValueE>>
  {
    return this.client.get<Array<CategoriesValueE>>(this.url+"GetCategoriesValueByIdCategories/"+id)
  }
}

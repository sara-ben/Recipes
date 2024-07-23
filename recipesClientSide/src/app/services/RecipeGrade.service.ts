import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { LeaderBakerE } from '../moudels/LeaderBaker';

@Injectable({
  providedIn: 'root'
})
export class RecipeGradeService {
  listRecipeGrades: Array<RecipeGradeE> = new Array<RecipeGradeE>()
  selected: RecipeGradeE = new RecipeGradeE()
  url: string = "http://localhost:52298/api/RecipeGrade/"
  constructor(private client: HttpClient) {
  }

  getAllRecipeGrade(): Observable<Array<RecipeGradeE>>//שליפת כל הציונים
  {
    debugger
    // return this.listRecipe.slice();
    return this.client.get<Array<RecipeGradeE>>(this.url + "getAllRecipeGrade")
  }

  addRecipeGrade(r: RecipeGradeE): Observable<Array<RecipeGradeE>>//הוספת ציון
  {
    debugger;
    this.listRecipeGrades.push(r);
    return this.client.post<Array<RecipeGradeE>>(this.url + "addRecipeGrade", r)
  }

  deleteRecipeGrade(id: number)//מחיקת ציון
  {
    return this.client.delete<Array<RecipeGradeE>>(this.url + "deleteRecipeGrade/" + id)
  }
  editRecipeGrade(r: RecipeGradeE)//עריכת ציון
  {
    return this.client.put<Array<RecipeGradeE>>(this.url + " editRecipeGrade", r);
  }
  //את הפרטים של הציון
  GetRecipeGradeById(id: number): Observable<RecipeGradeE> {
    return this.client.get<RecipeGradeE>(this.url + "getRecipeGrade/" + id)
  }
  GetRecipeGradeByBaker(password: string): Observable<number> {
    return this.client.get<number>(this.url + "GetRecipeGradeByBaker/" + password)
  }
  getLeadBaker(): Observable<Array<LeaderBakerE>>//שליפת כל הציונים
  {
    debugger;
    return this.client.get<Array<LeaderBakerE>>(this.url + "getLeadBaker")
    debugger;
  }

}

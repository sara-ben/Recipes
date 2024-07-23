import { Component, OnInit } from '@angular/core';
import { RecipeE } from '../moudels/Recipe';
import { RecipeService } from '../services/Recipe.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { RecipeGradeE } from '../moudels/RecipeGrade';

@Component({
  selector: 'app-search-by-grade',
  templateUrl: './search-by-grade.component.html',
  styleUrls: ['./search-by-grade.component.css']
})
export class SearchByGradeComponent implements OnInit {
  // listSearchR:Array<RecipeE>=new Array<RecipeE>()
  // listSearchG:Array<number>=new Array<number>()
  maxGrade:number=0
  sum:number
  count:number
  index:number=0
  j:number=0

  constructor(private recipeService:RecipeService,private recipeGradeService:RecipeGradeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe(data=>{this.recipeService.listRecipes=data;this.recipeService.recipes=data;})
    this.recipeGradeService.getAllRecipeGrade().subscribe(data=>{this.recipeGradeService.listRecipeGrades=data})

  }
  search(){
    debugger;
    this.recipeService.recipes=new Array<RecipeE>()
     this.recipeService.listSearchG=new Array<number>()
    this.recipeService.listRecipes.forEach(item=>{
      this.count=0;
      this.sum=0;
      debugger;
        this.recipeGradeService.listRecipeGrades.forEach(x=>{
          debugger;
              if(item.id==x.recipeId)
              {
                 this.count++;
                 this.sum+=x.grade;
              }
        })
        if((this.sum/this.count)>=this.maxGrade)
        {
          this.recipeService.recipes.push(item);
          this.recipeService.listSearchG.push((this.sum/this.count))
        }

    })

  }


}

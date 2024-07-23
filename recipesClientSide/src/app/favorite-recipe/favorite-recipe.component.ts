import { Component, OnInit } from '@angular/core';
import { RecipeE } from '../moudels/Recipe';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { RecipeService } from '../services/Recipe.service';
import { RecipeGradeE } from '../moudels/RecipeGrade';

@Component({
  selector: 'app-favorite-recipe',
  templateUrl: './favorite-recipe.component.html',
  styleUrls: ['./favorite-recipe.component.css']
})
export class FavoriteRecipeComponent implements OnInit {
  selected = '0';
  max:number
  count:number
  sum:number
  maxRecipesGrade:Array<number>=new Array<number>() 
  maxRecipeList:Array<RecipeE>=new Array<RecipeE>() 
  constructor(private recipeGradeService:RecipeGradeService,private recipeService:RecipeService) { }

  ngOnInit() {
    this.max=0
    this.recipeGradeService.getAllRecipeGrade().subscribe(data=>{this.recipeGradeService.listRecipeGrades=data;
    debugger;
    this.recipeService.getAllRecipe().subscribe(data=>{this.recipeService.listRecipes=data;
      this.recipeService.listRecipes.forEach(item=>{
        this.count=0;
        this.sum=0;
        this.recipeService.maxGrade=this.maxRecipesGrade[0];
          this.recipeGradeService.listRecipeGrades.forEach(x=>{
                if(item.id==x.recipeId)
                {
                   this.count++;
                   this.sum+=x.grade;
                }
          })
          if((this.sum/this.count)>this.max)
          { 
            this.maxRecipeList=new Array<RecipeE>() 
            this.maxRecipesGrade=new Array<number>() 
            this.maxRecipeList.push(item);
            this.maxRecipesGrade.push((this.sum/this.count))
            this.max=(this.sum/this.count)
            debugger;
          }
          else if((this.sum/this.count)==this.max)
          {
            this.maxRecipeList.push(item);
            debugger;
           item.isMax=true;
           debugger;
            this.maxRecipesGrade.push((this.sum/this.count))
          }
  
      })})})
    
  }

}

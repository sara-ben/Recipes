import { Component, OnInit } from '@angular/core';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { UseresService } from '../services/Useres.service';
import { BakerService } from '../services/Baker.service';
import { RecipeE } from '../moudels/Recipe';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { RecipeService } from '../services/Recipe.service';

@Component({
  selector: 'app-avg-grade',
  templateUrl: './avg-grade.component.html',
  styleUrls: ['./avg-grade.component.css']
})
export class AvgGradeComponent implements OnInit {
  sum: number
  count: number
  average: number
  idBaker: number
  recipesGrade: RecipeGradeE[]
  recipeList: Array<RecipeE> = new Array<RecipeE>()
  gradeRecipeList: Array<RecipeGradeE> = new Array<RecipeGradeE>()
  constructor(private recipeGradeService: RecipeGradeService, private bakerService: BakerService, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipeService.listRecipes = data
      this.recipeGradeService.getAllRecipeGrade().subscribe(data => {
        this.recipesGrade = data; this.recipeGradeService.listRecipeGrades = data
        this.recipeGradeService.GetRecipeGradeByBaker(this.bakerService.selected.password).subscribe(data => {
          this.average = data
          // this.recipeGradeService.GetRecipesGradeByBaker(this.b.selected.password).subscribe(data=>{this.gradeRecipeList=data},
          //   err=>{alert("שגיbakerServiceאה בגישה לשרת")});
          //   debugger;
          //   this.gradeRecipeList[0].grade
          this.bakerService.GetIdBakerByPassword(this.bakerService.selected.password).subscribe(data => {
            this.idBaker = data

            this.recipeGradeService.getLeadBaker().subscribe(n => {
              n.forEach(b => {
                if (b.id = this.idBaker)
                  this.average = b.avgGrade
              })
            })
            debugger;
            this.recipeService.listRecipes.forEach(item => {
              if (item.bakerId == this.idBaker) {
                // this.recipeGradeService.listRecipeGrades.forEach(x => {
                //   if (x.recipeId == item.id) {
                this.recipeList.push(item);
                //     this.gradeRecipeList.push(x);
                //   }
                // })
              }
            })
          },
            );
        },
         );
      })
    })

  }


  // avg()
  // {
  // this.recipeGradeService.listRecipeGrades.forEach(g=>{
  //   //שאלה: איך אני רצה רק על המתכונים של השף הנוכחי
  //   if(g.recipeId){
  // this.sum+=g.grade
  // this.count+=1
  // }
  // } )
  // }
}

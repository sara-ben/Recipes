import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { UseresE } from '../moudels/Useres';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-watch-grade',
  templateUrl: './watch-grade.component.html',
  styleUrls: ['./watch-grade.component.css']
})
export class WatchGradeComponent implements OnInit {

  constructor(private router: Router,
    private recipeService: RecipeService,
    private useresService: UseresService,
    private activatedRoute: ActivatedRoute,
    private recipeGradeService: RecipeGradeService) { }
  currentRecipe: RecipeE = new RecipeE()
  currentRecipeGrade: Array<RecipeGradeE> = new Array<RecipeGradeE>()
  users: Array<UseresE> = new Array<UseresE>()
  id: number
  @Input() itemId: number = 0
  ngOnInit() {
    this.recipeService.flag = false;
    debugger;
    this.recipeService.GetRecipeById(this.itemId).subscribe(data => {
      this.currentRecipe = data;
      this.recipeGradeService.getAllRecipeGrade().subscribe(data => {
        this.recipeGradeService.listRecipeGrades = data
        this.useresService.getAllUseres().subscribe(data => {
          this.useresService.listUseres = data
          this.recipeGradeService.listRecipeGrades.forEach(item => {
            if (item.recipeId == this.itemId) {
              this.currentRecipeGrade.push(item)
              this.useresService.listUseres.forEach(x => {
                if (item.UserId == x.id) {
                  this.users.push(x)
                }
              })

            }
          })
          if (this.currentRecipeGrade.length==0)
              this.recipeService.flag = true;
        })
      })
    });

  }
  cancel() {
    debugger;
    this.recipeService.flag = false;
  }
}

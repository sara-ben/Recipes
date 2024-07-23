import { Component, OnInit } from '@angular/core';
import { BakerE } from '../moudels/Baker';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerService } from '../services/Baker.service';
import { RecipeService } from '../services/Recipe.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-graph-baker',
  templateUrl: './graph-baker.component.html',
  styleUrls: ['./graph-baker.component.css']
})
export class GraphBakerComponent implements OnInit {
  bakers: BakerE[]
  index: number = 0;
  listLeaderBaker: Array<LeaderBakerE> = new Array<LeaderBakerE>()
  constructor(private recipeService: RecipeService, private bakerService: BakerService, private recipeGradeService: RecipeGradeService, private useresService: UseresService) { }

  // ngOnInit() {
  //   this.bakerService.getAllBaker().subscribe(data => { this.bakers = data; this.bakerService.listBakers = data })
  //   this.recipeGradeService.getAllRecipeGrade().subscribe(data => { this.recipeGradeService.listRecipeGrades = data })
  //   this.recipeGradeService.getLeadBaker().subscribe(data => { this.listLeaderBaker = data; })
  //   this.recipeService.getAllRecipe().subscribe(data => { this.recipeService.listRecipes = data },
  //     err => { alert("שגיאה בגישה לשרת") });
  //     debugger;
  //   this.recipeGradeService
  //   this.recipeService
  //   this.listLeaderBaker
  // }
  ngOnInit(){
    this.recipeService.getAllRecipe().subscribe(data=>{this.recipeService.listRecipes=data})
    this.bakerService.getAllBaker().subscribe(data=>{this.bakers=data;this.bakerService.listBakers=data})
   debugger;
    this.recipeService.listRecipes.forEach(item=>{
      debugger;
      this.bakerService.listBakers.forEach(x=>{
         
    })
  })
  }


}

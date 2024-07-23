import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';
import { BakerService } from '../services/Baker.service';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerE } from '../moudels/Baker';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { UseresService } from '../services/Useres.service';
import { UseresE } from '../moudels/Useres';
import { RwithNameBakerE } from '../moudels/RwithNameBakerE';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-all-grade',
  templateUrl: './all-grade.component.html',
  styleUrls: ['./all-grade.component.css']
})
export class AllGradeComponent implements OnInit {

  constructor(private bakerService: BakerService, private useresService: UseresService, private recipeService: RecipeService, private recipeGradeService:RecipeGradeService) { }
  recipes: Array<RecipeE> = new Array<RecipeE>()
  rwithNameBaker: RwithNameBakerE = new RwithNameBakerE();
  // selected:RwithNameBakerE=new RwithNameBakerE();
  selected: string;
  rwithNameBakers: Array<RwithNameBakerE> = new Array<RwithNameBakerE>()
  useresS: UseresE = new UseresE();
  useresSelect: UseresE = new UseresE();
  recipeGradeE: RecipeGradeE = new RecipeGradeE();
  grade: number;
  comment: string;
  sum:number
  count:number
  itemId: number = 0
  bakers: BakerE[];
  i: number=0;
  ngOnInit() {
    this.recipeGradeService.getAllRecipeGrade().subscribe(data=>{this.recipeGradeService.listRecipeGrades=data})
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipes = data; this.recipeService.listRecipes = data
      this.bakerService.getAllBaker().subscribe(data => {
        this.bakers = data; this.bakerService.listBakers = data
        this.avgGradeF();
        this.useresS.id = this.useresService.selected.id;
        this.useresS.email = this.useresService.selected.email;
        this.useresS.name = this.useresService.selected.name;
        this.useresS.password = this.useresService.selected.password;
        this.recipeService.listRecipes.forEach(item => {
          this.bakerService.listBakers.forEach(x => {
            if (item.bakerId == x.id) {
              this.rwithNameBaker = new RwithNameBakerE();
              this.rwithNameBaker.bakerName = x.name;
              this.rwithNameBaker.id = item.id;
              this.rwithNameBaker.name = item.name;
              this.rwithNameBaker.bakerId = item.bakerId;
              this.rwithNameBaker.time = item.time;
              this.rwithNameBaker.numPortion = item.numPortion;
              this.rwithNameBaker.image = item.image;
              this.rwithNameBaker.avgGrade = item.avgGrade;

              this.rwithNameBakers.push(this.rwithNameBaker);
            }
          })
        })
      })
    })

  }

  avgGradeF(){
    debugger;
    this.recipeService.recipes=new Array<RecipeE>()
     this.recipeService.listSearchG=new Array<number>()
    this.recipeService.listRecipes.forEach(item=>{
      this.i++;
      this.count=0;
      this.sum=0;
      debugger;
        this.recipeGradeService.listRecipeGrades.forEach(x=>{
              if(item.id==x.recipeId)
              {
                 this.count++;
                 this.sum+=x.grade;
              }
        })
        if(this.i<35){
       this.recipeService.listRecipes[this.i].avgGrade=(this.sum/this.count);
        item.avgGrade=(this.sum/this.count);}
    })

  }

}



import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'node_modules/canvasjs/dist/canvasjs.min.js';
import { ViewChild } from "@angular/core";
import { ChartModule } from 'primeng/chart';
import { BakerService } from '../services/Baker.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerE } from '../moudels/Baker';
import { UseresService } from '../services/Useres.service';
import { RecipeService } from '../services/Recipe.service';





@Component({
  selector: 'app-bakers-graph',
  templateUrl: './bakers-graph.component.html',
  styleUrls: ['./bakers-graph.component.css']
})
export class BakersGraphComponent implements OnInit {

  data: any;
  data1: any;
  bakers: BakerE[]
  index: number = 0;
  listLeaderBaker: Array<LeaderBakerE> = new Array<LeaderBakerE>()
  leaderBaker: LeaderBakerE = new LeaderBakerE()
  max: number = 0;
  min: number = 7;

  constructor(private recipeService: RecipeService, private bakerService: BakerService, private recipeGradeService: RecipeGradeService, private useresService: UseresService) {

    this.recipeGradeService.getAllRecipeGrade().subscribe(data => {
      this.recipeGradeService.listRecipeGrades = data;
      this.recipeGradeService.getLeadBaker().subscribe(data => {
        this.listLeaderBaker = data;
        this.recipeService.getAllRecipe().subscribe(data => {
          this.recipeService.listRecipes = data;
          debugger;
          this.data = {
            labels: [],
            datasets: [
              {
                label: 'Average grade',
                backgroundColor: 'red',
                borderColor: 'red',
                data: []
              },
              {
                label: 'Max grade',
                backgroundColor: 'blue',
                borderColor: 'blue',
                data: []
              },
              {
                label: 'Min grade',
                backgroundColor: 'orange',
                borderColor: 'orange',
                data: []
              }
            ]
          }
          this.listLeaderBaker.forEach(x => {
            this.recipeService.listRecipes.forEach(m => {
              if (m.bakerId == x.id) {
                this.recipeGradeService.listRecipeGrades.forEach(p => {
                  if (m.id == p.recipeId) {
                    if (this.max < p.grade)
                      this.max = p.grade
                    if (this.min > p.grade)
                      this.min = p.grade

                  }
                })
              }
            })
            this.data.labels[this.index] = x.name;
            this.data.datasets[0].data[this.index] = x.avgGrade;
            this.data.datasets[1].data[this.index] = this.max;
            // if (this.min == 0) { this.min = 0.1 }
            this.data.datasets[2].data[this.index] = this.min;
            this.index++;
            this.max = 0;
            this.min = 7;
          })
        },
          );
      }, );
    }, );


  }


  ngOnInit() {




  }
}

import { Component, OnInit } from '@angular/core';

import { BakerService } from '../services/Baker.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerE } from '../moudels/Baker';
import { RecipeService } from '../services/Recipe.service';
import { RecipeE } from '../moudels/Recipe';

import { UseresService } from '../services/Useres.service';
import { UseresE } from '../moudels/Useres';
import { RwithNameBakerE } from '../moudels/RwithNameBakerE';
import { RecipeGradeE } from '../moudels/RecipeGrade';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-grade',
  templateUrl: './add-grade.component.html',
  styleUrls: ['./add-grade.component.css']
})
export class AddGradeComponent implements OnInit {
  constructor(private bakerService: BakerService, private useresService: UseresService, private recipeService: RecipeService, private recipeGradeService: RecipeGradeService) { }
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
  bakers: BakerE[];

  ngOnInit() {
    this.recipeService.getAllRecipe().subscribe(data => {
      this.recipes = data; this.recipeService.listRecipes = data
      this.bakerService.getAllBaker().subscribe(data => {
        this.bakers = data; this.bakerService.listBakers = data
        debugger;
        this.useresS.id = this.useresService.selected.id;
        this.useresS.email = this.useresService.selected.email;
        this.useresS.name = this.useresService.selected.name;
        this.useresS.password = this.useresService.selected.password;
        this.recipeService.listRecipes.forEach(item => {
          debugger;
          this.bakerService.listBakers.forEach(x => {
            if (item.bakerId == x.id) {
              debugger;
              this.rwithNameBaker = new RwithNameBakerE();
              this.rwithNameBaker.bakerName = x.name;
              this.rwithNameBaker.id = item.id;
              this.rwithNameBaker.name = item.name;
              this.rwithNameBaker.bakerId = item.bakerId;
              this.rwithNameBaker.time = item.time;
              this.rwithNameBaker.numPortion = item.numPortion;
              this.rwithNameBaker.image = item.image;
              this.rwithNameBakers.push(this.rwithNameBaker);
            }
          })
        })
      })
    })
    debugger;
  }
  onClick(r: RwithNameBakerE) {
    //  לא לאפשר לו לדרג יותר מפעם אחת
    this.recipeGradeE.UserId = this.useresService.selected.id;
    this.recipeGradeE.recipeId = r.id;
    debugger;

  }
  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    debugger;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  onClick2() {
    this.recipeGradeE.grade = this.grade;
    this.recipeGradeE.comment = this.comment;
    this.recipeGradeService.addRecipeGrade(this.recipeGradeE).subscribe(data => { });

  }

}

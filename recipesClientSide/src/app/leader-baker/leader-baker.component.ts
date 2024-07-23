
import { Component, OnInit } from '@angular/core';
import { BakerService } from '../services/Baker.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerE } from '../moudels/Baker';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-leader-baker',
  templateUrl: './leader-baker.component.html',
  styleUrls: ['./leader-baker.component.css']
})
export class LeaderBakerComponent implements OnInit {
  

  constructor() { }
  ngOnInit(){
    //איך להכניס ערכים בצורה ממוינת
    // debugger;
   // this.bakerService.getAllBaker().subscribe(data=>{this.bakers=data;this.bakerService.listBakers=data})
    //this.recipeGradeService.getAllRecipeGrade().subscribe(data=>{this.recipeGradeService.listRecipeGrades=data
   
    // this.bakerService.listBakers.forEach( item=>{
    // this.recipeGradeService.GetRecipeGradeByBaker(item.password).subscribe(data=>{
    // //   debugger
    // //   if(data.toString()!="NaN"){
    // //   this.leaderBaker.avgGrade=data;
    // //   this.leaderBaker.id=item.id;
    // //   this.leaderBaker.logo=item.logo;
    // //   this.leaderBaker.name=item.name;
    // //   this.leaderBaker.password=item.password;
    // //   this.leaderBaker.email=item.email;
    // //   this.listLeaderBaker.push(this.leaderBaker)
    // //   this.leaderBaker=new LeaderBakerE()
    // // }
    // this.listLeaderBaker.sort(function(a, b){return a.avgGrade- b.avgGrade});
    //   })})
    // })
    //  debugger;
    //  this.recipeGradeService.getLeadBaker().subscribe(data=>{debugger; this.listLeaderBaker=data;
    //   debugger;
    //   this.listLeaderBaker.sort(function(a, b){return b.avgGrade-a.avgGrade});
    //   debugger;
      // this.listLeaderBaker.forEach(x=>{
      //   debugger;
      //   if(x.password==this.useresService.selected.password)
      //      alert("this.useresService.selected.password");
    //  }
      // },
      // err=>{alert("err  "+err)})
    
    

   

  }
 
 }




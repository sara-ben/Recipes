import { Component, OnInit } from '@angular/core';
import { BakerE } from '../moudels/Baker';
import { LeaderBakerE } from '../moudels/LeaderBaker';
import { BakerService } from '../services/Baker.service';
import { RecipeGradeService } from '../services/RecipeGrade.service';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-new-leader-baker',
  templateUrl: './new-leader-baker.component.html',
  styleUrls: ['./new-leader-baker.component.css']
})
export class NewLeaderBakerComponent implements OnInit {

  constructor(private bakerService:BakerService,private recipeGradeService:RecipeGradeService,private useresService:UseresService) { }
  listLeaderBaker:Array<LeaderBakerE>=new Array<LeaderBakerE>() 
  // leaderBaker:LeaderBakerE=new LeaderBakerE()
  // bakers:BakerE[]
  ngOnInit() {
debugger
    this.recipeGradeService.getLeadBaker().subscribe(data=>{debugger; this.listLeaderBaker=data;
      debugger;
      this.listLeaderBaker.sort(function(a, b){return b.avgGrade-a.avgGrade});
      debugger;
      // this.listLeaderBaker.forEach(x=>{
      //   debugger;
      //   if(x.password==this.useresService.selected.password)
      //      alert("this.useresService.selected.password");
    //  }
      },
      err=>{alert("err  "+err)})
  
  }

}

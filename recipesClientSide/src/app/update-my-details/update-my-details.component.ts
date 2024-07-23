import { Component, OnInit } from '@angular/core';
import { UseresService } from '../services/Useres.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../services/Recipe.service';
import { UseresE } from '../moudels/Useres';

@Component({
  selector: 'app-update-my-details',
  templateUrl: './update-my-details.component.html',
  styleUrls: ['./update-my-details.component.css']
})
export class UpdateMyDetailsComponent implements OnInit {

  constructor(private useresService:UseresService,
    private activatedRoute: ActivatedRoute,
    private recipeService:RecipeService,
    ) { }
    id:number
    currentUser:UseresE=new UseresE();
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params:Params)=> {
         this.id = params['id']
         debugger;  
       this.useresService.GetUseresById(this.id).subscribe(data=>{debugger;this.currentUser =data;},
       );
    })
  }

}

import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { email } from '../email';
import { BakerE } from '../moudels/Baker';
import { RecipeE } from '../moudels/Recipe';
import { UseresE } from '../moudels/Useres';
import { BakerService } from '../services/Baker.service';
import { EmailService } from '../services/Email.service';
import { RecipeService } from '../services/Recipe.service';
import { UseresService } from '../services/Useres.service';


@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.css']
})

export class AllRecipeComponent implements OnInit {
  email:email=new email();
  user:UseresE=new UseresE();
  baker:BakerE=new BakerE();
  constructor(private recipeService:RecipeService,private b:BakerService,private userS:UseresService,
    private emailService:EmailService, public rout:Router,
   
    
    ) { }

  ngOnInit() {
    // dataBaseשליפה מה 
    this.recipeService.getAllRecipe().subscribe(data=>{this.recipeService.recipes=data;this.recipeService.listRecipes=data})
    this.userS.getAllUseres().subscribe(data=>{this.userS.listUseres=data})
    this.user=this.userS.selected;
    this.b.getAllBaker().subscribe(data=>{this.b.listBakers=data})
    debugger;
    this.baker=this.b.selected;
    debugger;
  }
sendMail()
  {
    // moriya.nadav.1234
    // sb0548499159
    this.email.email="sb0548499159@gmail.com";
    this.email.subject="הודעה מהפרויקט"
    this.email.content="הי המייל עובד"
    // this.emailService.sendNewEmail(this.email).subscribe(void alert("נשלח בהצלחה"))
  }
choose:number=0;
  searchBy()
  {
    if(this.choose==0)
    {
      this.recipeService.recipes=this.recipeService.listRecipes
    }
  }
}


import { Component, OnInit } from '@angular/core';
import { RecipeE } from '../moudels/Recipe';
import { RecipeService } from '../services/Recipe.service';
import { BakerService } from '../services/Baker.service';
import { BakerE } from '../moudels/Baker';
import { UseresService } from '../services/Useres.service';
import { EmailService } from '../services/Email.service';
import { email } from '../email';
import { UseresE } from '../moudels/Useres';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email: email = new email();
  user: UseresE = new UseresE();
  baker: BakerE = new BakerE();
  recipes: RecipeE[];
  Susr: UseresE = new UseresE();
  constructor(private recipeService: RecipeService, private b: BakerService, private userS: UseresService,
    private EmailService: EmailService
  ) { }

  ngOnInit() {
    // dataBaseשליפה מה 
    this.recipeService.getAllRecipe().subscribe(data => { this.recipes = data; this.recipeService.listRecipes = data })
    this.userS.getAllUseres().subscribe(data => { this.userS.listUseres = data })
    this.user = this.userS.selected;
    this.b.getAllBaker().subscribe(data => { this.b.listBakers = data })
    debugger;
    this.baker = this.b.selected;
    debugger;
    this.Susr = this.userS.selected
  }
  sendMail() {
    // moriya.nadav.1234
    // sb0548499159
    this.email.email = "sb0548499159@gmail.com";
    this.email.subject = "הודעה מהפרויקט"
    this.email.content = "הי המייל עובד"
    // this.EmailService.sendNewEmail(this.email).subscribe(void alert("נשלח בהצלחה"))
  }
  logOff()//התנתקות מהמשתמש
  {
    this.userS.status = 0;
    this.Susr.email = null;
    this.Susr.id = null;
    this.Susr.name = null;
    this.Susr.password = null;
    // this.b.selected.email=null;
    // this.b.selected.id=null;
    // this.b.selected.logo=null;
    // this.b.selected.name=null;
    // this.b.selected.password=null;
  }


}

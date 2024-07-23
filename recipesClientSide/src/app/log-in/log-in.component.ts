import { Component, OnInit } from '@angular/core';
import { UseresService } from '../services/Useres.service';
import { UseresE } from '../moudels/Useres';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BakerE } from '../moudels/Baker';
import * as Swal from '../../assets/sweetalert.min.js';
import { BakerService } from '../services/Baker.service';
import { RecipeService } from '../services/Recipe.service';
import { EmailService } from '../services/Email.service';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { documents } from '../moudels/documents';
import { SWITCH_TEMPLATE_REF_FACTORY__POST_R3__ } from '@angular/core/src/linker/template_ref';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  u: UseresE = new UseresE()
  id: number
  baker: BakerE = new BakerE()
  constructor(private router: Router, private useresService: UseresService, private emailService: EmailService, private recipeService: RecipeService, private bakerService: BakerService, private activatedRoute: ActivatedRoute) { }
  items: MenuItem[];
  degel: number;
  logInBaker: number = 1;



  ngOnInit() {
    this.logInBaker = 1;
    this.items = [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' }
    ];
    this.u.name = "";
    this.u.email = "";
    this.u.password = "";
    if (this.useresService.selected.email)
      this.u.email = this.useresService.selected.email;
    if (this.useresService.selected.password)
      this.u.password = this.useresService.selected.password;

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        debugger;
        this.id = params['id']
      })
    debugger
    if (this.id == 2) {
      document.getElementById("non").style.display = "block"
      document.getElementById("addR").style.display = "block"
      document.getElementById("addR2").style.display = "block"
    }
    else if (this.id == 1) {
      document.getElementById("addU").style.display = "block"
      document.getElementById("addU2").style.display = "block"
    }
    this.useresService.getAllUseres().subscribe(data => { this.useresService.listUseres = data })
    this.bakerService.getAllBaker().subscribe(data => { this.bakerService.listBakers = data })
    debugger;
  }
  onClick() {
    document.getElementById("non").style.display = "block"
    document.getElementById("addR").style.display = "block"
    document.getElementById("addR2").style.display = "block"

  }
  passwordEmpty() {
    document.getElementById("password").style.border = "1px solid #ccc"
  }
  nameEmpty() {
    document.getElementById("name").style.border = "1px solid #ccc"
  }
  emailEmpty() {
    document.getElementById("email").style.border = "1px solid #ccc"
  }
  file: documents = new documents();
  mychange(input) {
    this.file = new documents()
    this.file.FileName = input.target.files[0].name
    if (input.target.files && input.target.files[0]) {
      var reader = new FileReader()
      let self = this
      reader.onload = function (e) {

        self.file.Base64 = (e.target as any).result
        debugger
      }
      reader.readAsDataURL(input.target.files[0])
    }
  }
  upLoad() {
    this.recipeService.addpic(this.file).subscribe(d => {
      this.baker.logo = d
      // this.flag=true

    })
  }
  send(u: UseresE) {
    debugger;
    if (this.u.name == "" || this.u.password == "" || this.u.email == "") {
      if (this.u.name == "" && this.u.password == "" && this.u.email == "") {
        document.getElementById("name").style.border = "3px solid red"
        document.getElementById("email").style.border = "3px solid red"
        document.getElementById("password").style.border = "3px solid red"
      }
      if (this.u.password == "" && this.u.email == "") {
        document.getElementById("password").style.border = "3px solid red"
        document.getElementById("email").style.border = "3px solid red"
      }
      if (this.u.email == "" && this.u.name == "") {
        document.getElementById("email").style.border = "3px solid red"
        document.getElementById("name").style.border = "3px solid red"
      }
      if (this.u.password == "" && this.u.name == "") {
        document.getElementById("password").style.border = "3px solid red"
        document.getElementById("name").style.border = "3px solid red"
      }
      if (this.u.name == "") {
        document.getElementById("name").style.border = "3px solid red"
      }
      if (this.u.email == "") {
        document.getElementById("email").style.border = "3px solid red"
      }
      if (this.u.password == "") {
        document.getElementById("password").style.border = "3px solid red"

      }
    }
    else if (this.useresService.status == 2) {

      this.router.navigate(['/AddRecipeNewBaker']);

    }
    else {
      if (this.id == 1) {
        this.useresService.addUseres(this.u).subscribe()
        Swal("ברוך הבא!!!!!!!");
        this.router.navigate(['/']);
      }
      debugger;
      if (this.id == 2) {
        debugger;

        this.baker.id = this.u.id;
        this.baker.password = this.u.password;
        this.baker.email = this.u.email;
        this.baker.name = this.u.name;
        this.bakerService.selected.id = this.u.id;
        this.bakerService.selected.password = this.u.password;
        this.bakerService.selected.email = this.u.email;
        this.bakerService.selected.name = this.u.name;
        debugger;
        // this.baker.id=40;
        // this.baker.password="1234";
        // this.baker.email="1234";
        // this.baker.name="mm";
        debugger;
        var ip = this.recipeService.GetRecipeById(this.baker.id)
        debugger;
        this.bakerService.addBaker(this.baker).subscribe(data => { this.bakerService.selected = data; })
        Swal(" נרשמת כאופה", "success")
        this.logInBaker = 1

        debugger;
      }
      if (this.id == 2) {
        debugger;
        this.useresService.listUseres.forEach(element => {
          if (element.email == this.u.email && element.name == this.u.name && element.password == this.u.password) {
            this.degel = 1
          }
        })
      }
      if (this.degel != 1)//האופה לא רשום כמשתמש
      {
        debugger;
        this.useresService.addUseres(this.u).subscribe()
      }

      this.useresService.listUseres.forEach(element => {
        debugger;
        if (element.email == this.u.email && element.name == this.u.name && element.password == this.u.password) {
          this.useresService.selected = element

          if (this.id == 1) {
            this.useresService.status = 1;
          }
          else {

            this.useresService.status = 2;
          }
        }
      })

    }
    this.bakerService.listBakers.forEach(element => {
      if (element.email == this.u.email && element.name == this.u.name && element.password == this.u.password) {
        this.bakerService.selected = element;
      }
    })

  }

}




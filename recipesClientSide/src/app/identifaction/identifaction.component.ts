import { Component, OnInit } from '@angular/core';
import { UseresE } from '../moudels/Useres';
import { UseresService } from '../services/Useres.service';
import { BakerService } from '../services/Baker.service';
import { BakerE } from '../moudels/Baker';
import { isDifferent } from '@angular/core/src/render3/util';
import { Router } from '@angular/router';
import { RecipeE } from '../moudels/Recipe';
import * as Swal from '../../assets/sweetalert.min.js';

@Component({
  selector: 'app-identifaction',
  templateUrl: './identifaction.component.html',
  styleUrls: ['./identifaction.component.css']
})
export class IdentifactionComponent implements OnInit {
  user: UseresE = new UseresE()
  useres: UseresE[]
  bb: BakerE[]
  bol: string;
  kkk: string
  baker: BakerE = new BakerE();

  constructor(private useresService: UseresService,
    private b: BakerService,
    private router: Router) { }

  ngOnInit() {
    this.useresService.getAllUseres().subscribe(data => { this.useresService.listUseres = data })
    debugger;
    //  this.kkk=this.useresService.selected.password.toString();
    //   this.user.password=this.useresService.selected.password.toString();
    this.user = this.useresService.selected;
    // dataBaseשליפה מה 
    // this.bol=this.user.password;
    // this.useresService.getAllUseres().subscribe(data=>{this.useres=data;this.useresService.listUseres=data})
    // this.b.getAllBaker().subscribe(data=>{this.bb=data;this.b.listBakers=data})
    this.b.getAllBaker().subscribe(data => { this.b.listBakers = data })
    this.baker = this.b.selected;
    debugger;
  }

  save() {
    this.useresService.GetStatus(this.user).subscribe(data => { debugger })
  }
  send() {
    debugger;
    if (this.user.password == "" && this.user.email == "") { Swal("לא הוקש מייל וסיסמא") }
    else
      if (this.user.password == "") { Swal("לא הוקשה סיסמא") }
      else
        if (this.user.email == "") { Swal("לא הוקש מייל") }
        else {
          this.useresService.GetStatus(this.user).subscribe(data => {
            debugger;



            this.useresService.listUseres.forEach(element => {
              // if(element.password==this.user.password)

              if ((this.user.password.toString()) == (element.password.toString())) {
                this.user.name = element.name
                this.user.id = element.id
              }


            });


            this.b.listBakers.forEach(element => {
              // if(element.password==this.user.password)

              if ((this.user.password.toString()) == (element.password.toString())) {
                this.baker.name = element.name
                this.baker.id = element.id
              }


            });

            this.useresService.selected = this.user
            this.b.selected = this.baker
            if (data == 4) {
              Swal("תירשם");
              this.router.navigate(['/LogIn/1'])
            }
            else {
              this.useresService.listUseres.forEach(element => {
                // if(element.password==this.user.password)

                if ((this.user.password.toString()) == (element.password.toString())) {
                  this.useresService.selected.name = element.name
                  this.useresService.selected.id = element.id
                }


              });
              if (data == 1) {
                this.useresService.status = data
                this.useresService.selected.name = "מנהל"
                Swal("מנהל"); this.router.navigate(['/'])
              }
              if (data == 2) {
                debugger;
                this.b.selected.email = this.user.email
                this.b.selected.password = this.user.password
                
                this.useresService.status = data
                Swal("אופה"); this.router.navigate(['/'])
                this.useresService.selected.name=this.b.selected.name ;
                this.useresService.selected.id=this.b.selected.id ;

                this.b.listBakers.forEach(e => {
                  if (e.id ==this.b.selected.id )
                  // this.useresService.selected.id
                  { debugger
                    this.b.selected.logo = e.logo
                  debugger;} 
                })

              }
              if (data == 3) {
                this.useresService.status = data
                Swal("משתמש"); this.router.navigate(['/'])
              }


            }
          })
        }
  }

}
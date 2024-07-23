import { Component, OnInit } from '@angular/core';
import { UseresE } from '../moudels/Useres';
import { BakerService } from '../services/Baker.service';
import { UseresService } from '../services/Useres.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-route-home',
  templateUrl: './route-home.component.html',
  styleUrls: ['./route-home.component.css']
})
export class RouteHomeComponent implements OnInit {
  user: UseresE = new UseresE();
  Susr: UseresE = new UseresE();
  color: string;
  loc: string;



  constructor(private useresService: UseresService,
    private bakerService: BakerService, private userS: UseresService, private router: Router) { }

  ngOnInit() {
    debugger;
    this.loc = this.router.url;
    this.userS.getAllUseres().subscribe(data => { this.userS.listUseres = data });
    this.color = "red"
    console.log(this.bakerService.selected.name);
  }
  // clickColor() {
  //   debugger
  //   // document.getElementById("body").style.backgroundColor = this.color
  // }
  logOff()//התנתקות מהמשתמש
  {
    debugger;
    this.router.navigate(['/']);
    debugger;
    this.userS.status = 0;
    this.Susr.email = null;
    this.Susr.id = null;
    this.Susr.name = null;
    this.Susr.password = null;
    this.userS.selected.name = null;
    this.userS.selected.password = null;
    this.userS.selected.email = null;
    this.userS.selected.id = null;
    this.bakerService.selected.email = null;
    this.bakerService.selected.id = null;
    this.bakerService.selected.logo = null;
    this.bakerService.selected.name = null;
    this.bakerService.selected.password = null;
  }
  chooseLogIn() {
    this.router.navigate(['/chooseLogIn']);
  }
  identifaction() {
    this.router.navigate(['/identifaction']);
  }


}


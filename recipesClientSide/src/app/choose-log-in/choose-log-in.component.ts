import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-log-in',
  templateUrl: './choose-log-in.component.html',
  styleUrls: ['./choose-log-in.component.css']
})
export class ChooseLogInComponent implements OnInit {
  choose:number;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  click1(ch:number){
    this.choose=ch;
  }
  click2(){
    if(this.choose==1)
     this.router.navigate(['/aboutUser'])
    else if(this.choose==2)
    this.router.navigate(['/aboutBaker'])
  }

}

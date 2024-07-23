import { Component, OnInit } from '@angular/core';
import { BakerService } from '../services/Baker.service';

@Component({
  selector: 'app-all-bakers',
  templateUrl: './all-bakers.component.html',
  styleUrls: ['./all-bakers.component.css']
})
export class AllBakersComponent implements OnInit {

  constructor(private bakerService:BakerService) { }

  ngOnInit() {
    this.bakerService.getAllBaker().subscribe(data=>{this.bakerService.listBakers=data})

  }
  remove(){}

}

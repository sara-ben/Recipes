import { Component, OnInit } from '@angular/core';
import { UseresService } from '../services/Useres.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private useresService:UseresService) { }

  ngOnInit() {
    this.useresService.getAllUseres().subscribe(data=>{this.useresService.listUseres=data})

  }

}

import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';
import { ProductE } from '../moudels/Product';
import{ NgModule,Input } from '@angular/core';

import { from } from 'rxjs';
@Component({
  selector: 'app-update-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent implements OnInit {

  products: ProductE[]
  

  constructor(private productService:ProductService) { }

  ngOnInit() {
    // dataBaseשליפה מה 
    this.productService.getAllProduct().subscribe(data=>{this.products=data;this.productService.listProducts=data})
  }
  update(a:number,item:ProductE){
    this.productService.flag=true
this.productService.tmp=a;
this.productService.x=item;
this.productService.tmp2=item.name;
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    debugger;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
 
}

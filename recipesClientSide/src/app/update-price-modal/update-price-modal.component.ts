import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/Product.service';
import * as Swal from '../../assets/sweetalert.min.js';


@Component({
  selector: 'app-update-price-modal',
  templateUrl: './update-price-modal.component.html',
  styleUrls: ['./update-price-modal.component.css']
})
export class UpdatePriceModalComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }
  cancel()
  {
    this.productService.flag=false;
  }
  change(){
    if(this.productService.tmp==null)
    Swal("לא נבחר מוצר","warning");
    else{
this.productService.t=this.productService.x.numPriceUpdate*this.productService.x.avgPrice;
this.productService.t=(this.productService.t+this.productService.tmp)/(1+this.productService.x.numPriceUpdate);
this.productService.x.numPriceUpdate++;
this.productService.x.avgPrice=this.productService.t;
this.productService.editProduct(this.productService.x).subscribe(data=>{this.productService.listProducts=data;
  this.productService.flag=false

},

);
 }
}
}

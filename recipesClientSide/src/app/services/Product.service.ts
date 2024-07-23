import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductE } from '../moudels/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listProducts: Array<ProductE> = new Array<ProductE>()
  selected: ProductE = new ProductE()
  flag: boolean = false
  tmp2: string;

  tmp: number;
  t: number;
  x: ProductE = new ProductE();
  url: string = "http://localhost:52298/api/Product/"
  constructor(private client: HttpClient) {
  }

  getAllProduct(): Observable<Array<ProductE>>//שליפת כל המוצרים
  {
    return this.client.get<Array<ProductE>>(this.url + "getAllProduct")
  }

  addProduct(p: ProductE): Observable<Array<ProductE>>//הוספת מוצר
  {

    this.listProducts.push(p);
    return this.client.post<Array<ProductE>>(this.url + "addProduct", p)
  }

  deleteProduct(id: number)//מחיקת מוצר
  {
    return this.client.delete<Array<ProductE>>(this.url + "deleteProduct/" + id)
  }
  editProduct(p: ProductE): Observable<Array<ProductE>>//עריכת מוצר
  {
    return this.client.put<Array<ProductE>>(this.url + "editProduct", p);
  }
  //את הפרטים של מוצר
  // GetProductById(id:number):Observable<ProductE>
  // {
  //   debugger
  //   return this.client.get<ProductE>(this.url+"getProduct/"+id)
  // }
  GetProductById(id: number): Observable<Array<ProductE>> {
    debugger
    return this.client.get<Array<ProductE>>(this.url + "getProduct/" + id)
  }
  GetProductsById(lp: Array<number>): Observable<Array<ProductE>> {
    debugger
    return this.client.get<Array<ProductE>>(this.url + "getProducts/" + lp)
  }


}

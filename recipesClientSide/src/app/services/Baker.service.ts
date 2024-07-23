import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BakerE } from '../moudels/Baker';

@Injectable({
  providedIn: 'root'
})
export class BakerService {
 listBakers:Array< BakerE>=new Array< BakerE>()
selected:BakerE=new BakerE()
 url:string="http://localhost:52298/api/Baker/"
  constructor( private client:HttpClient ) {
   }
 

getAllBaker():Observable<Array<BakerE>>//שליפת כל השפים
   {
    return this.client.get<Array<BakerE>>(this.url+"getAllBaker")
   }

   addBaker(b:BakerE):Observable<BakerE>//הוספת שף
  {
   debugger;
     this.listBakers.push(b);
     return this.client.post<BakerE>(this.url+"addBaker",b) 
  }
  
  deleteBaker(id:number)//מחיקת שף
  {
    debugger;
   return this.client.delete<Array<BakerE>>(this.url+"deleteBaker/"+id)
  }
  editBaker(b:BakerE)//עריכת שף
  {
    return this.client.put<Array<BakerE>>(this.url+" editBaker",b);
  }
  //את הפרטים של השפים
  GetBakerById(id:number):Observable<BakerE>
  {debugger;
    return this.client.get<BakerE>(this.url+"getBaker/"+id)
  }
  GetIdBakerByPassword(password:string):Observable<number>
  {
    return this.client.get<number>(this.url+"GetIdBakerByPassword/"+password)
  }
  
}

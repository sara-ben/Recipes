import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UseresE } from '../moudels/Useres';

@Injectable({
  providedIn: 'root'
})
export class UseresService {
 listUseres:Array< UseresE>=new Array< UseresE>()
selected:UseresE=new UseresE()
status:number;
 url:string="http://localhost:52298/api/Useres/"
  constructor( private client:HttpClient ) {
   }


getAllUseres():Observable<Array<UseresE>>//שליפת כל המשתמשים
   {
 return this.client.get<Array<UseresE>>(this.url+"getAllUseres")
   }

   addUseres(u:UseresE):Observable<Array<UseresE>>//הוספת משתמש
  {
   
     this.listUseres.push(u);
     return this.client.post<Array<UseresE>>(this.url+"addUseres",u) 
  }
  
  deleteUseres(id:number)//מחיקת משתמש
  {
   return this.client.delete<Array<UseresE>>(this.url+"deleteUseres/"+id)
  }
  editUseres(u:UseresE)//עריכת משתמש
  {
    return this.client.put<Array<UseresE>>(this.url+" editUseres",u);
  }
  //את הפרטים של המשתמש
  GetUseresById(id:number):Observable<UseresE>
  {
    return this.client.get<UseresE>(this.url+"getUseres/"+id)
  }
  
  // checkPassword(u:UseresE):Observable<number>
  // {
  //   return this.client.post<number>(this.url+"checkPassword",u)
  // }
  GetStatus(u:UseresE):Observable<number>
  { debugger;
    return this.client.post<number>(this.url+"GetStatus",u)
  }  
}

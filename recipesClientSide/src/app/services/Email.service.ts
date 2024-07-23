import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BakerE } from '../moudels/Baker';
import { email } from '../moudels/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  //  listBakers:Array< BakerE>=new Array< EmailE>()
  // selected:BakerE=new BakerE()
  url: string = "http://localhost:52298/api/Email/"
  constructor(private client: HttpClient) { }


  sendNewEmail(email: email): Observable<email> {
    debugger;
    return this.client.post<email>(this.url + "sendNewEmail", email);
    debugger
  }




}

import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { } from 'googlemaps';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  zoom: number = 14;
  lat: number = 26.839350;
  lng: number = 75.794625;

  firstName : string;
  lastName : string;
  mail : string;
  number : string;
  message : string;
  webDevelopmentCheck: string;
  appDevelopmentCheck: string;
  gameDevelopmentCheck: string;
  designCheck: string;
  service: string[] = [];
  
  errMessage: string;
  error: boolean;
  success: boolean;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.error = false;
    this.success = false;
  }

  sendMail() {
    if(this.webDevelopmentCheck){
      this.service.push(this.webDevelopmentCheck);
    }
    if(this.appDevelopmentCheck){
      this.service.push(this.appDevelopmentCheck);
    }
    if(this.gameDevelopmentCheck){
      this.service.push(this.gameDevelopmentCheck);
    }
    if(this.designCheck){
      this.service.push(this.designCheck);
    }
    console.log(this.firstName, this.lastName, this.mail, this.number, this.message, this.service);

    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('https://formspree.io/f/mrgoyjav',
      { name: this.firstName+this.lastName, replyto: this.mail, message: this.message, servicesNeeded: this.service },
      { 'headers': headers }
    ).subscribe((res: {next: string, ok: boolean})=>{
      if(res.ok){
        this.success = true;
        this.errMessage = "We got your request, will reach you in some time.";
      }else{
        this.error= true;
        this.errMessage = "Unable to send your request";
      }
    });
  }
}

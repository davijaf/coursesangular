import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Course-Manager';
  name : string  = "Davi José";
  email : string  = "davijose@gmail.com";
  birthDate : string  = "December, 17, 1992";
  phoneNumber : number  = 62992775804;
  address: string = "R. 3, 597";
  addressComplement: string = "Frei Eustáquio";
  city: string = "Anápolis";
  state: string = "Goiás";
  country: string = "Brazil";
  occupation: string = "Full Stack Developer"
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';

  messages = [
    {email:"bill@gates.com", important: true, subject: "New Windows", content:"Windows XI will launch in year 2100"},
    {email: "ada@lovelace.com", important: true, subject: "Programming", content:"Enchantress of Numbers" },
    {email: "john@carmac.com", important: false, subject: "Updated Algo", content: "New algorithm for shadow volumes"}
  ]

}


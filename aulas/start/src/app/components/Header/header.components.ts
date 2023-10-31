import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  login() {
    localStorage.setItem('currentUser', 'John Doe');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  // logged = window.localStorage.getItem('currentUser') ? true : false;
}

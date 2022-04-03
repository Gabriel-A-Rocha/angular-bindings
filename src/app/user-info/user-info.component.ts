import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  username = '';

  constructor() {}

  ngOnInit(): void {}

  resetUsername() {
    this.username = '';
    this.renderUsernameText();
  }

  handleInputChange(evt: any) {
    this.renderUsernameText();
  }

  renderUsernameText() {
    const usernameText = document.querySelector('p');
    if (usernameText) {
      usernameText.style.display = !!this.username ? 'block' : 'none';
    }
  }
}

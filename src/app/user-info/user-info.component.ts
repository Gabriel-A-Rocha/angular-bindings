import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  username = '';
  buttonDisabledStatus = true;

  constructor() {}

  ngOnInit(): void {}

  resetUsername() {
    this.username = '';
    this.buttonDisabledStatus = true;
  }

  handleInputChange(evt: any) {
    this.buttonDisabledStatus = !evt.target.value;
    this.renderUsernameText();
  }

  renderUsernameText() {
    const usernameText = document.querySelector('p');
    if (usernameText) {
      console.log('\n🪁 ~ usernameText', usernameText);
      usernameText.style.display = !!this.username ? 'block' : 'none';
    }
  }
}

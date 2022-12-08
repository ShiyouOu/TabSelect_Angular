import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  deselectAll() {
    const cityDetails = document.querySelectorAll<HTMLElement>('.city-details');
    const cityButtons = document
      .getElementsByClassName('tab')[0]
      .getElementsByTagName('Button');

    // Make all tab detail sections invisible
    // Deselect all tab buttons
    for (let i = 0; i < cityButtons.length; i++) {
      cityDetails[i].style.display = 'none';
      cityButtons[i].classList.remove('selected');
    }
  }

  tabSelect(num) {
    this.deselectAll();
    // Make selected section visible
    document.querySelectorAll<HTMLElement>('.city-details')[num].style.display =
      'block';
    // Darken selected tab button
    document
      .getElementsByClassName('tab')[0]
      .getElementsByTagName('Button')
      [num].classList.add('selected');
  }

  ngOnInit() {
    // Select first tab by default
    this.tabSelect('0');
  }
}

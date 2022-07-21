import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  mobileHeaderItemsVisible = false;
  constructor() {}

  ngOnInit(): void {}

  toggleItems() {
    if (this.mobileHeaderItemsVisible) {
      this.mobileHeaderItemsVisible = false;
    } else {
      this.mobileHeaderItemsVisible = true;
    }
  }
}

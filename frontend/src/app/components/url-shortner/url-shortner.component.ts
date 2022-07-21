import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss'],
})
export class UrlShortnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  generateURL(form: NgForm) {
    console.log(form.value.url);
  }
}

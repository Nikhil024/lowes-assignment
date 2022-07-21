import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { URLShortener } from 'src/app/models/url-shortner';
import { UrlShortnerService } from 'src/app/services/url-shortner.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-url-shortner',
  templateUrl: './url-shortner.component.html',
  styleUrls: ['./url-shortner.component.scss'],
})
export class UrlShortnerComponent implements OnInit {
  constructor(private urlShortnerService: UrlShortnerService) {}

  urlData?: URLShortener;
  showShortURL = false;

  ngOnInit(): void {}

  generateURL(form: NgForm) {
    let url = form.value.url;
    if (url.indexOf('http') == -1) {
      url = 'http://' + url;
    }
    if (url.length > 10) {
      this.urlShortnerService.generateShortUrl(url).subscribe(
        (res) => {
          this.urlData = res;
          this.showShortURL = true;
        },
        (err) => console.log('err ' + err)
      );
    } else {
      this.showShortURL = false;
      form.form.controls['f'].setErrors({ incorrect: true });
    }
  }

  urlChecker(url: NgModel) {
    console.log(url.value);
  }
}

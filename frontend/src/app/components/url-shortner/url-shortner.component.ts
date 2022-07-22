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
  showErrorBanner = false;
  errorMessage = 'URL already exist, please visit List URL page!';

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
          this.showErrorBanner = false;
        },
        (err) => {
          this.showErrorBanner = true;
          this.showShortURL = false;
          if (err.status == 409) {
            console.log('err ' + JSON.stringify(err));
          } else {
            this.errorMessage = err.message;
          }
        }
      );
    } else {
      this.showShortURL = false;
      form.form.controls['f'].setErrors({ incorrect: true });
    }
  }

  urlChecker(url: NgModel) {
    if (url.value.length == 0) {
      this.showErrorBanner = false;
      url.control.setErrors({ incorrect: false });
    }
  }
}

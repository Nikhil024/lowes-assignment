import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLShortener } from 'src/app/models/url-shortner';
import { UrlShortnerService } from 'src/app/services/url-shortner.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  public urlDataResponseList?: URLShortener[];
  showContent = true;
  showError = false;
  errorMessage = '';

  constructor(
    private urlShortnerService: UrlShortnerService,
    private route: ActivatedRoute
  ) {
    let shortURL = this.route.snapshot.paramMap.get('shortURL');
    if (shortURL != null) {
      this.showContent = false;
      this.showError = false;
      this.urlShortnerService
        .getOriginalURL(window.location.origin + '/' + shortURL)
        .subscribe(
          (res) => (window.location.href = res.originURL),
          (err) => {
            this.showContent = false;
            this.showError = true;
            if (err.status == 400) {
              this.errorMessage = 'Invalid URL, please create again!';
            }
            this.errorMessage = 'Internal Error, please try again!';
          }
        );
    } else {
      this.getData();
    }
  }

  ngOnInit(): void {}

  getData() {
    this.urlShortnerService.getAllData().subscribe(
      (urlDataResponseList) => {
        this.urlDataResponseList = urlDataResponseList;
        this.showContent = true;
        this.showError = false;
      },
      (err) => {
        this.showContent = false;
        this.showError = true;
        this.errorMessage = 'Internal Error, please try again!';
      }
    );
  }

  updateView() {
    setTimeout(() => {
      this.getData();
    }, 2000);
  }
}

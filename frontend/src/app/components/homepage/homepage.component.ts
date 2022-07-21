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

  constructor(
    private urlShortnerService: UrlShortnerService,
    private route: ActivatedRoute
  ) {
    urlShortnerService.getAllData().subscribe(
      (urlDataResponseList) => {
        console.log(urlDataResponseList);
        this.urlDataResponseList = urlDataResponseList;
      },
      (err) => {
        console.log('err' + JSON.stringify(err));
      }
    );
  }

  ngOnInit(): void {
    let shortURL = this.route.snapshot.paramMap.get('shortURL');
    console.log(window.location.origin + '/' + shortURL);
    this.urlShortnerService
      .getOriginalURL(window.location.origin + '/' + shortURL)
      .subscribe(
        (res) => (window.location.href = res.originURL),
        (err) => console.log(err)
      );
  }
}

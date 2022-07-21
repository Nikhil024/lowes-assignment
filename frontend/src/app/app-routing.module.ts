import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { UrlShortnerComponent } from './components/url-shortner/url-shortner.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'shorten', component: UrlShortnerComponent },
  { path: ':shortURL', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

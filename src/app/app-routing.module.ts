import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './contents/about-page/about-page.component';
import { HomepageComponent } from './contents/homepage/homepage.component';
import { PortfolioPageComponent } from './contents/portfolio-page/portfolio-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [{ path: 'Home', component: HomepageComponent },
{ path: 'About', component: AboutPageComponent },
{ path: 'Portfolio', component: PortfolioPageComponent },
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

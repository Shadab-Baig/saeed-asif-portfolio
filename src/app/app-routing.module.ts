import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './navComponents/resume/resume.component';
import { PortfolioComponent } from './navComponents/portfolio/portfolio.component';
import { ContactComponent } from './navComponents/contact/contact.component';
import { AboutComponent } from './navComponents/about/about.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { UIUXComponent } from './navComponents/ui-ux/ui-ux.component';
import { GraphicDesigningComponent } from './navComponents/graphic-designing/graphic-designing.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'graphic-designing', component: GraphicDesigningComponent },
  { path: 'UI/UX', component: UIUXComponent },
  { path: 'portfolioDetails/:id', component: PortfolioDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

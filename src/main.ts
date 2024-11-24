import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { PortfolioComponent } from './app/components/portfolio/portfolio.component';
import { ExperienceComponent } from './app/components/experience/experience.component';
import { ContactComponent } from './app/components/contact/contact.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: '**', redirectTo: 'about' }
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]
})
  .catch(err => console.error(err));

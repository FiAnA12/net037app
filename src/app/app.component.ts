import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ReferencesComponent } from './components/references/references.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent, AboutComponent, SkillsComponent, 
    PortfolioComponent, ExperienceComponent, EducationComponent, 
    ReferencesComponent, ContactComponent, FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile: any = {}; // Profile data will be stored here

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Fetch data from a local JSON file or service
    this.http.get('assets/data/profile-data.json').subscribe(data => {
      this.profile = data;
    });
  }
}


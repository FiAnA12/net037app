import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() profile: {
    name: string;
    tagline: string;
    image: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  } = {
    name: '',
    tagline: '',
    image: '',
    linkedin: '',
    github: '',
    twitter: '',
    email: ''
  }; 
}

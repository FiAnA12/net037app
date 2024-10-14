import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() about: { description: string, who: string, age: string, email: string, phone: SVGAnimatedInteger, address: string, languages: string } | undefined; 
}



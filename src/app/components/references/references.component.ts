import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {
  currentReferenceIndex: number = 0;
  @Input() references: { image: string, name: string, positioncompany: string, testimonial: string }[] | undefined;
  showReference(index: number) {
    this.currentReferenceIndex = index;
  }
}


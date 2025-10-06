import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-paragraph-toggler',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './paragraph.html',
  styleUrls: ['./paragraph.scss']
})
export class ParagraphTogglerComponent {
  isVisible = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter';
import { ParagraphTogglerComponent } from './paragraph/paragraph';
import { TodoListComponent } from './todo-list/todo-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    ParagraphTogglerComponent,
    TodoListComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'Project-2';
  showScrollButton = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show button
    if (window.pageYOffset > 100) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
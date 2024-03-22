import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <header>
      <a routerLink="" href="">Login</a>
      <p>
      <a routerLink="main">Calculator</a>
    </header>
    <main class="main">
    <router-outlet/>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './components/side-bar/side-bar';
import { TopBar } from './components/top-bar/top-bar';
import { CardFilters } from './components/card-filters/card-filters';
import { Card } from './components/card/card';
import { CardGridDashboard } from './pages/cards-grid-dashboard/card-grid-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, TopBar, CardFilters, Card, CardGridDashboard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('coontex-fam-1sem-2026');
}

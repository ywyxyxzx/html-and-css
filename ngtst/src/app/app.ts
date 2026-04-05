import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = signal('ngtst111');
  public city = 'San Francisco111111';
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User} from './user/user';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = signal('ngtst111');
  public city = 'San Francisco111111';
}

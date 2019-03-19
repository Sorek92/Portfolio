import { Component , OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../app/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})

export class AppComponent {
  title = 'Portfolio';
  href = false;

  // 
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

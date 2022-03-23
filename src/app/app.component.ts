import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-test';

  index = 0;
  srcs = [
    `/assets/orchid.png`,
    `/assets/fusion.png`,
    `/assets/alto.png`,
    `/assets/hybrid.png`
  ]
}

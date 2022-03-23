import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(public sanitizer: DomSanitizer) {}

  title = 'pwa-test';

  index = 0;
  srcs = [
    "https://demo.ipconfigure.com",
    "https://orchid.ipconfigure.com",
    "https://orchid-burn-linux-bravo.ipconfigure.com",
    "https://orchid-burn-linux-bravo.ipconfigure.com:8080"
  ]
  colors = [
    '#8a3b9',
    '#0f719f',
    '#016c4e',
    '',
  ]

  url: any =  '';

  inc() {
    this.index = (this.index + 1) % this.srcs.length
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.srcs[this.index])
    document.body.style.backgroundColor = this.colors[this.index]
  }
}

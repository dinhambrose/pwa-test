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

  get url() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.srcs[this.index])
  }
}

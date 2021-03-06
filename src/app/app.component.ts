import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
      this.inc()
    }

  title = 'pwa-test';

  index = -1;
  srcs = [
    "https://demo.ipconfigure.com",
    "https://orchid.ipconfigure.com",
    "https://orchid-burn-linux-bravo.ipconfigure.com",
    "http://192.168.202.25:8080"
  ]
  colors = [
    '#8a3b96',
    '#0f719f',
    '#016c4e',
    '#e11a50',
  ]

  url?: SafeResourceUrl;

  inc() {
    this.index = (this.index + 1) % this.srcs.length;
    (document.querySelector('iframe') as any).src = this.srcs[this.index]

    console.log('here', this.srcs[this.index], document.querySelector('iframe'), (document.querySelector('iframe') as any).src)
    document.body.style.backgroundColor = this.colors[this.index]
    console.log(document.body.style.backgroundColor)
  }
}

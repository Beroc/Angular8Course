import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', Selector is now a CSS-Attribute
  // selector: '.app-servers', // Selector is now a CSS-Class
  selector: 'app-servers', // Der Selektor sollte in der Regel bei Components immer ien HTML-Tag sein. Das obige kann man machen sollte man aber nicht
  template: `
  <app-server></app-server>
  <app-server></app-server>`, // Backtick, um über mehrere Zeilen schreiben zu können
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
